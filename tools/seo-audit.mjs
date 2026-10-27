import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const htmlFiles = fs.readdirSync(root).filter((name) => name.endsWith('.html')).sort();
const canonicalFor = (name) => `https://servtech.ae/${name === 'index.html' ? '' : name}`;
const text = (value = '') => value.replace(/<[^>]*>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const attr = (html, selector, name) => {
  const tags = html.match(new RegExp(`<${selector}\\b[^>]*>`, 'gi')) || [];
  for (const tag of tags) {
    const match = tag.match(new RegExp(`\\b${name}=["']([^"']*)["']`, 'i'));
    if (match) return match[1];
  }
  return '';
};
const meta = (html, key, value) => {
  const tags = html.match(/<meta\b[^>]*>/gi) || [];
  return tags.find((tag) => new RegExp(`\\b${key}=["']${value}["']`, 'i').test(tag)) || '';
};
const link = (html, rel) => (html.match(/<link\b[^>]*>/gi) || []).find((tag) => new RegExp(`\\brel=["']${rel}["']`, 'i').test(tag)) || '';
const errors = [];
const warnings = [];
const pages = [];

for (const file of htmlFiles) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  const redirect = /http-equiv=["']refresh["']/i.test(html);
  const robots = attr(meta(html, 'name', 'robots'), 'meta', 'content');
  const indexable = !redirect && !/noindex/i.test(robots);
  const title = text((html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i) || [])[1]);
  const description = attr(meta(html, 'name', 'description'), 'meta', 'content');
  const canonical = attr(link(html, 'canonical'), 'link', 'href');
  const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((match) => text(match[1]));
  const ogTitle = attr(meta(html, 'property', 'og:title'), 'meta', 'content');
  const ogDescription = attr(meta(html, 'property', 'og:description'), 'meta', 'content');
  const ogUrl = attr(meta(html, 'property', 'og:url'), 'meta', 'content');
  const images = html.match(/<img\b[^>]*>/gi) || [];
  const missingAlt = images.filter((tag) => !/\balt=["'][^"']*["']/i.test(tag));
  const jsonBlocks = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  const runtimeStructuredData = /site-components\.js/i.test(html);

  if (!title) errors.push(`${file}: missing title`);
  if (indexable && !description) errors.push(`${file}: missing meta description`);
  if (indexable && h1s.length !== 1) errors.push(`${file}: expected one H1, found ${h1s.length}`);
  if (indexable && canonical !== canonicalFor(file)) errors.push(`${file}: canonical is ${canonical || 'missing'}`);
  if (indexable && (!ogTitle || !ogDescription || !ogUrl)) errors.push(`${file}: incomplete Open Graph metadata`);
  if (missingAlt.length) errors.push(`${file}: ${missingAlt.length} image(s) missing alt attributes`);
  for (const block of jsonBlocks) {
    try { JSON.parse(block[1]); } catch (error) { errors.push(`${file}: invalid JSON-LD (${error.message})`); }
  }
  if (indexable && !jsonBlocks.length && !runtimeStructuredData) errors.push(`${file}: missing structured data`);
  pages.push({ file, indexable, redirect, title, description, canonical, h1s, images: images.length, jsonLd: jsonBlocks.length || (runtimeStructuredData ? 'runtime' : 0) });
}

for (const key of ['title', 'description', 'canonical']) {
  const seen = new Map();
  for (const page of pages.filter((item) => item.indexable)) {
    const value = page[key];
    if (!value) continue;
    if (seen.has(value)) errors.push(`duplicate ${key}: ${seen.get(value)} and ${page.file}`);
    else seen.set(value, page.file);
  }
}

const sources = [...htmlFiles, 'site-components.js', 'home-redesign.js', 'project-carousel.js', 'products-data.js'];
const localRefs = new Set();
for (const file of sources) {
  const content = fs.readFileSync(path.join(root, file), 'utf8');
  for (const match of content.matchAll(/(?:href|src)=["']([^"']+)["']/gi)) localRefs.add(`${file}\t${match[1]}`);
}

for (const file of fs.readdirSync(root).filter((name) => name.endsWith('.css'))) {
  const content = fs.readFileSync(path.join(root, file), 'utf8');
  for (const match of content.matchAll(/url\(["']?([^)'"?]+)["']?\)/gi)) {
    const raw = match[1].trim();
    if (/^(?:https?:|data:|#)/i.test(raw)) continue;
    const target = path.resolve(root, path.dirname(file), raw);
    if (!fs.existsSync(target)) errors.push(`${file}: broken CSS asset ${raw}`);
  }
}
for (const entry of localRefs) {
  const [source, raw] = entry.split('\t');
  if (/^(?:https?:|mailto:|tel:|data:|javascript:|#)/i.test(raw)) continue;
  const clean = decodeURIComponent(raw.split(/[?#]/)[0]).replace(/^\//, '');
  if (!clean) continue;
  const target = path.join(root, clean);
  if (!fs.existsSync(target)) errors.push(`${source}: broken local reference ${raw}`);
}

const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const expectedUrls = pages.filter((page) => page.indexable).map((page) => canonicalFor(page.file));
for (const url of expectedUrls) if (!sitemapUrls.includes(url)) errors.push(`sitemap missing ${url}`);
for (const url of sitemapUrls) if (!expectedUrls.includes(url)) errors.push(`sitemap contains non-indexable or unknown URL ${url}`);
if (!/Sitemap:\s*https:\/\/servtech\.ae\/sitemap\.xml/i.test(fs.readFileSync(path.join(root, 'robots.txt'), 'utf8'))) {
  errors.push('robots.txt does not reference the canonical sitemap');
}

console.table(pages.map(({ file, indexable, redirect, title, h1s, images, jsonLd }) => ({ file, indexable, redirect, title, h1: h1s.join(' | '), images, jsonLd })));
if (warnings.length) console.warn(`\nWarnings:\n- ${warnings.join('\n- ')}`);
if (errors.length) {
  console.error(`\nSEO audit failed (${errors.length}):\n- ${errors.join('\n- ')}`);
  process.exitCode = 1;
} else {
  console.log(`\nSEO audit passed for ${pages.length} HTML pages (${expectedUrls.length} indexable, ${pages.length - expectedUrls.length} redirect/excluded).`);
}
