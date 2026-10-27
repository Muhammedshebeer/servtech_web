(() => {
  const shell = document.querySelector('.site-shell');
  const updateHeader = () => shell?.classList.toggle('scrolled', window.scrollY > 36);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('#site-nav');
  menu?.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav?.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
  });
  document.querySelectorAll('.nav-group > button').forEach(button => button.addEventListener('click', () => {
    const group = button.closest('.nav-group');
    const open = !group.classList.contains('open');
    document.querySelectorAll('.nav-group.open').forEach(item => { item.classList.remove('open'); item.querySelector('button')?.setAttribute('aria-expanded','false'); });
    group.classList.toggle('open', open); button.setAttribute('aria-expanded', String(open));
  }));
  document.addEventListener('click', event => {
    if (!event.target.closest('.nav-group')) document.querySelectorAll('.nav-group.open').forEach(item => { item.classList.remove('open'); item.querySelector('button')?.setAttribute('aria-expanded','false'); });
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') { menu?.setAttribute('aria-expanded','false'); nav?.classList.remove('open'); document.body.classList.remove('menu-open'); } });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), {threshold:.1});
    document.querySelectorAll('.reveal').forEach(item => observer.observe(item));
  } else document.querySelectorAll('.reveal').forEach(item => item.classList.add('visible'));
  const year = document.querySelector('#year'); if(year) year.textContent = new Date().getFullYear();

  document.querySelectorAll('form.form').forEach(form => {
    form.querySelectorAll('input, select, textarea').forEach((field, index) => {
      if (!field.name) {
        const label = field.closest('label')?.childNodes[0]?.textContent?.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-') || `field-${index + 1}`;
        field.name = label;
      }
    });
    form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const values = [...new FormData(form).entries()].filter(([,value]) => String(value).trim());
    const subject = form.dataset.subject || 'Servtech website inquiry';
    const body = values.map(([key,value]) => `${key.replace(/[-_]/g,' ')}: ${value}`).join('\n');
    const status = form.querySelector('.form-status') || document.createElement('p');
    status.className = 'form-status'; status.textContent = 'Your email application is opening with the request details.'; form.appendChild(status);
    window.location.href = `mailto:info@servtech.ae?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  });
})();
