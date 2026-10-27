(() => {
  const galleries = document.querySelectorAll('[data-project-gallery]');
  galleries.forEach((gallery) => {
    if (gallery.dataset.carouselReady) return;
    gallery.dataset.carouselReady = 'true';

    const section = gallery.closest('.projects-showcase');
    const frame = gallery.closest('.project-gallery-frame');
    const items = [...gallery.querySelectorAll('.project-tile')];
    if (!section || !frame || !items.length) return;

    const previous = document.createElement('button');
    const next = document.createElement('button');
    previous.className = 'project-nav project-prev';
    next.className = 'project-nav project-next';
    previous.type = next.type = 'button';
    previous.setAttribute('aria-label', 'Previous project');
    next.setAttribute('aria-label', 'Next project');
    previous.textContent = '‹';
    next.textContent = '›';
    frame.append(previous, next);

    const progress = document.createElement('div');
    const progressTrack = document.createElement('div');
    const progressBar = document.createElement('span');
    const counter = document.createElement('output');
    progress.className = 'project-progress';
    progressTrack.className = 'project-progress-track';
    counter.className = 'project-counter';
    counter.setAttribute('aria-live', 'polite');
    progressTrack.appendChild(progressBar);
    progress.append(progressTrack, counter);
    const pagination = document.createElement('div');
    pagination.className = 'project-pagination';
    pagination.setAttribute('role', 'navigation');
    pagination.setAttribute('aria-label', 'Choose a project');
    const pageButtons = items.map((item, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = String(index + 1).padStart(2, '0');
      button.setAttribute('aria-label', `Show project ${index + 1} of ${items.length}`);
      pagination.appendChild(button);
      return button;
    });
    section.append(progress, pagination);

    gallery.setAttribute('role', 'region');
    gallery.setAttribute('aria-label', `${items.length} recent Servtech projects`);
    gallery.setAttribute('tabindex', '0');

    let currentIndex = 0;
    let scrollFrame = 0;

    const metrics = () => {
      const itemWidth = items[0].getBoundingClientRect().width;
      const gap = parseFloat(getComputedStyle(gallery).columnGap) || 0;
      const visible = Math.max(1, Math.min(items.length, Math.round((gallery.clientWidth + gap) / (itemWidth + gap))));
      return {visible, maxStart: Math.max(0, items.length - visible)};
    };

    const nearestIndex = () => {
      const {maxStart} = metrics();
      let nearest = 0;
      let distance = Infinity;
      items.forEach((item, index) => {
        const itemDistance = Math.abs(item.offsetLeft - gallery.scrollLeft);
        if (itemDistance < distance) {
          distance = itemDistance;
          nearest = index;
        }
      });
      return Math.min(nearest, maxStart);
    };

    function scrollToIndex(index) {
      const {maxStart} = metrics();
      currentIndex = Math.max(0, Math.min(maxStart, index));
      gallery.scrollTo({left: items[currentIndex].offsetLeft, behavior: 'smooth'});
      window.setTimeout(update, 360);
    }

    pageButtons.forEach((button, index) => {
      button.addEventListener('click', () => scrollToIndex(index));
    });
    previous.addEventListener('click', () => scrollToIndex(currentIndex - 1));
    next.addEventListener('click', () => scrollToIndex(currentIndex + 1));
    gallery.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') { event.preventDefault(); scrollToIndex(currentIndex - 1); }
      if (event.key === 'ArrowRight') { event.preventDefault(); scrollToIndex(currentIndex + 1); }
    });
    gallery.addEventListener('click', (event) => {
      if (innerWidth > 760) return;
      const tile = event.target.closest('.project-tile');
      if (!tile) return;
      items.forEach((item) => { if (item !== tile) item.classList.remove('show-details'); });
      tile.classList.toggle('show-details');
    });

    const update = () => {
      const {visible, maxStart} = metrics();
      currentIndex = nearestIndex();
      const maximum = Math.max(1, gallery.scrollWidth - gallery.clientWidth);
      const ratio = gallery.scrollLeft / maximum;
      const width = visible / items.length * 100;
      progressBar.style.width = `${width}%`;
      progressBar.style.transform = `translateX(${ratio * ((100 - width) / width) * 100}%)`;
      const lastVisible = Math.min(currentIndex + visible, items.length);
      counter.value = visible === 1
        ? `${String(currentIndex + 1).padStart(2, '0')} / ${items.length}`
        : `${String(currentIndex + 1).padStart(2, '0')}–${String(lastVisible).padStart(2, '0')} / ${items.length}`;
      counter.textContent = counter.value;
      previous.disabled = currentIndex === 0;
      next.disabled = currentIndex >= maxStart;
      pageButtons.forEach((button, index) => {
        const active = index >= currentIndex && index < lastVisible;
        button.classList.toggle('active', active);
        if (index === currentIndex) button.setAttribute('aria-current', 'true');
        else button.removeAttribute('aria-current');
      });
    };
    gallery.addEventListener('scroll', () => {
      cancelAnimationFrame(scrollFrame);
      scrollFrame = requestAnimationFrame(update);
    }, {passive: true});
    if ('ResizeObserver' in window) new ResizeObserver(update).observe(gallery);
    else addEventListener('resize', update, {passive: true});
    update();
  });
})();
