(() => {
  const page = document.body.dataset.page || '';
  if (!document.querySelector('link[href^="redesign.css"]')) {
    const css = document.createElement('link'); css.rel = 'stylesheet'; css.href = 'redesign.css?v=2'; document.head.appendChild(css);
  }
  const header = document.querySelector('#site-header');
  if (header) header.innerHTML = `
    <a class="skip-link" href="#main-content">Skip to main content</a>
    <header class="site-shell">
      <div class="header-inner">
        <a class="brand" href="index.html" aria-label="Servtech home"><img src="assets/logo-transparent.png" width="2169" height="725" alt="Servtech Technical Services LLC"></a>
        <button class="menu" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Open navigation"><span></span></button>
        <nav id="site-nav" aria-label="Primary navigation">
          <a data-nav="home" href="index.html">HOME</a>
          <div class="nav-group"><button type="button" aria-expanded="false">COMPANY <span aria-hidden="true">⌄</span></button><div class="nav-dropdown"><a href="about.html">About Servtech</a><a href="who-we-are.html">Who we are</a><a href="why-join-us.html">Why join us</a><a href="projects.html">Project experience</a></div></div>
          <div class="nav-group services-menu"><button type="button" aria-expanded="false">SERVICES <span aria-hidden="true">⌄</span></button><div class="nav-dropdown services-dropdown"><a class="services-overview" href="services.html">All industrial services</a><a href="service-valves.html">Valves refurbishment, services &amp; testing</a><a href="service-psv.html">Safety valves repairs, service</a><a href="service-safety-valve-testing.html">Safety valves bench &amp; online testing</a><a href="service-boiler.html">HRSG boilers &amp; AUX boilers maintenance</a><a href="service-fabrication.html">Fabrication, piping &amp; erection</a><a href="service-turbine.html">Turbine, rotating equipment maintenance</a><a href="service-machining.html">Machining &amp; reverse engineering</a><a href="service-calibration.html">Calibration &amp; certification services</a><a href="service-electrical.html">Electrical services</a><a href="service-shutdown.html">Shutdown and turnaround support services</a><a href="service-instrumentation.html">Instrumentation services</a><a href="service-flow-measurement.html">Flow measurement &amp; metering services</a><a href="service-manpower.html">Technical manpower support</a></div></div>
          <div class="nav-group"><button type="button" data-nav="products" aria-expanded="false">PRODUCTS <span aria-hidden="true">⌄</span></button><div class="nav-dropdown"><a href="products.html">Authorized brands overview</a><a href="zhejiang-coosai-valve.html">Zhejiang Coosai Valve</a><a href="khd-huadu-valve.html">KHD Huadu Valve</a><a href="lixin-valve.html">Lixin Valve</a><a href="rovv-shanghai-rogers.html">ROVV Shanghai Rogers</a><a href="huahang-filtration.html">Huahang Filtration</a></div></div>
          <a data-nav="projects" href="projects.html">PROJECTS</a><a data-nav="contact" href="contact.html">CONTACT</a><a class="mobile-quote" href="quote.html">GET A QUOTE</a>
        </nav>
        <div class="header-actions"><a class="header-phone" href="tel:+97142355660" aria-label="Call Servtech at +971 4 235 5660"><span>24/7 SUPPORT</span><strong>+971 4 235 5660</strong></a><a class="nav-cta" href="quote.html">GET A QUOTE</a></div>
      </div>
    </header>`;
  const footer = document.querySelector('#site-footer');
  if (footer) footer.innerHTML = `<footer class="site-footer">
    <div class="footer-intro"><img src="assets/logo-original.avif" width="190" height="60" alt="Servtech Technical Services LLC"><p>Mechanical maintenance, valve service, engineered products and field support for critical industrial assets across the UAE and GCC.</p></div>
    <div><h4>Capabilities</h4><a href="service-valves.html">Valves refurbishment</a><a href="service-boiler.html">HRSG &amp; AUX boiler maintenance</a><a href="service-turbine.html">Rotating equipment maintenance</a><a href="service-fabrication.html">Fabrication, piping &amp; erection</a><a href="service-machining.html">Machining &amp; reverse engineering</a></div>
    <div><h4>Contact</h4><p>274-106 Al Qusais Industrial Area 4<br>Dubai, United Arab Emirates</p><a href="tel:+97142355660">+971 4 235 5660</a><a href="tel:+97142672335">+971 4 267 2335</a><a href="mailto:info@servtech.ae">info@servtech.ae</a></div>
    <div class="footer-social"><span>Follow Servtech</span><div class="footer-social-links"><a href="https://www.facebook.com/profile.php?id=100082945436260" target="_blank" rel="noopener noreferrer" aria-label="Servtech on Facebook">f</a><a href="https://www.linkedin.com/company/80246597/" target="_blank" rel="noopener noreferrer" aria-label="Servtech on LinkedIn">in</a><a href="https://www.instagram.com/servtech_valve/" target="_blank" rel="noopener noreferrer" aria-label="Servtech on Instagram">◎</a></div></div>
    <small><span>© <span id="year"></span> Servtech Technical Services LLC</span><span>Engineering reliability since 1991 · Dubai, UAE</span></small>
  </footer>`;
  document.querySelector('[data-nav="' + page + '"]')?.classList.add('active');
  document.querySelector('main')?.setAttribute('id', 'main-content');
  if (!document.querySelector('link[rel="canonical"]')) { const c=document.createElement('link'); c.rel='canonical'; c.href=`https://servtech.ae/${location.pathname.split('/').pop() || 'index.html'}`; document.head.appendChild(c); }
  if (!document.querySelector('meta[name="robots"]')) { const r=document.createElement('meta'); r.name='robots'; r.content='index, follow, max-image-preview:large'; document.head.appendChild(r); }

  const path = location.pathname.split('/').pop() || 'index.html';
  const breadcrumbMap = {
    'about.html': [['About Servtech', 'about.html']],
    'who-we-are.html': [['Company', 'about.html'], ['Who We Are', 'who-we-are.html']],
    'why-join-us.html': [['Company', 'about.html'], ['Why Join Us', 'why-join-us.html']],
    'services.html': [['Industrial Services', 'services.html']],
    'service-valves.html': [['Industrial Services', 'services.html'], ['Valves Refurbishment, Services & Testing', 'service-valves.html']],
    'service-psv.html': [['Industrial Services', 'services.html'], ['Safety Valves Repairs, Service', 'service-psv.html']],
    'service-safety-valve-testing.html': [['Industrial Services', 'services.html'], ['Safety Valves Bench & Online Testing', 'service-safety-valve-testing.html']],
    'service-boiler.html': [['Industrial Services', 'services.html'], ['HRSG Boilers & AUX Boilers Maintenance', 'service-boiler.html']],
    'service-turbine.html': [['Industrial Services', 'services.html'], ['Turbine, Rotating Equipment Maintenance', 'service-turbine.html']],
    'service-fabrication.html': [['Industrial Services', 'services.html'], ['Fabrication, Piping & Erection', 'service-fabrication.html']],
    'service-machining.html': [['Industrial Services', 'services.html'], ['Machining & Reverse Engineering', 'service-machining.html']],
    'service-instrumentation.html': [['Industrial Services', 'services.html'], ['Instrumentation Services', 'service-instrumentation.html']],
    'service-calibration.html': [['Industrial Services', 'services.html'], ['Calibration & Certification Services', 'service-calibration.html']],
    'service-flow-measurement.html': [['Industrial Services', 'services.html'], ['Flow Measurement & Metering Services', 'service-flow-measurement.html']],
    'service-electrical.html': [['Industrial Services', 'services.html'], ['Electrical Services', 'service-electrical.html']],
    'service-manpower.html': [['Industrial Services', 'services.html'], ['Technical Manpower Support', 'service-manpower.html']],
    'service-shutdown.html': [['Industrial Services', 'services.html'], ['Shutdown and Turnaround Support Services', 'service-shutdown.html']],
    'industry-power-generation.html': [['Industries We Serve', 'index.html#industries'], ['Power Generation', 'industry-power-generation.html']],
    'industry-desalination-water-treatment.html': [['Industries We Serve', 'index.html#industries'], ['Desalination & Water Treatment', 'industry-desalination-water-treatment.html']],
    'industry-heavy-industries.html': [['Industries We Serve', 'index.html#industries'], ['Heavy Industries', 'industry-heavy-industries.html']],
    'industry-marine-offshore.html': [['Industries We Serve', 'index.html#industries'], ['Marine & Offshore', 'industry-marine-offshore.html']],
    'products.html': [['Industrial Products', 'products.html']],
    'zhejiang-coosai-valve.html': [['Industrial Products', 'products.html'], ['Zhejiang Coosai Valve', 'zhejiang-coosai-valve.html']],
    'khd-huadu-valve.html': [['Industrial Products', 'products.html'], ['KHD Huadu Valve', 'khd-huadu-valve.html']],
    'lixin-valve.html': [['Industrial Products', 'products.html'], ['Lixin Valve', 'lixin-valve.html']],
    'rovv-shanghai-rogers.html': [['Industrial Products', 'products.html'], ['ROVV Shanghai Rogers', 'rovv-shanghai-rogers.html']],
    'huahang-filtration.html': [['Industrial Products', 'products.html'], ['Huahang Filtration', 'huahang-filtration.html']],
    'projects.html': [['Project Experience', 'projects.html']],
    'contact.html': [['Contact', 'contact.html']],
    'quote.html': [['Request a Quote', 'quote.html']]
  };
  if (!document.querySelector('script[data-servtech-breadcrumbs]') && breadcrumbMap[path]) {
    const items = [['Home', '']].concat(breadcrumbMap[path]).map(([name, href], index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      item: `https://servtech.ae/${href}`
    }));
    const structuredData = document.createElement('script');
    structuredData.type = 'application/ld+json';
    structuredData.dataset.servtechBreadcrumbs = '';
    structuredData.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items });
    document.head.appendChild(structuredData);
  }
})();
