(() => {
  const story = document.querySelector('[data-scroll-hero]');
  if (!story) return;

  const scenes = [...story.querySelectorAll('[data-scroll-scene]')];
  const beats = [...story.querySelectorAll('[data-scroll-beat]')];
  const steps = [...story.querySelectorAll('.scroll-progress span')];
  const lights = story.querySelector('.hero-lights');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const centers = [0.04, 0.5, 0.96];
  let ticking = false;

  const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
  const visibility = (progress, center, range) => clamp(1 - Math.abs(progress - center) / range);

  function paint() {
    ticking = false;
    const rect = story.getBoundingClientRect();
    const distance = Math.max(1, story.offsetHeight - innerHeight);
    const progress = clamp(-rect.top / distance);
    const active = progress < .27 ? 0 : progress < .72 ? 1 : 2;
    story.style.setProperty('--story-progress', progress.toFixed(4));

    scenes.forEach((scene, index) => {
      let opacity;
      if (index === 0) opacity = clamp(1 - progress / .34);
      else if (index === 1) opacity = visibility(progress, .5, .34);
      else opacity = clamp((progress - .64) / .28);
      scene.style.opacity = reducedMotion.matches ? (index === active ? 1 : 0) : opacity.toFixed(3);
      scene.style.setProperty('--scene-scale', (1.05 + progress * .055 + index * .01).toFixed(3));
    });

    beats.forEach((beat, index) => {
      const range = index === 1 ? .25 : .3;
      const opacity = reducedMotion.matches ? (index === active ? 1 : 0) : visibility(progress, centers[index], range);
      beat.style.opacity = opacity.toFixed(3);
      beat.style.visibility = opacity < .045 ? 'hidden' : 'visible';
      const x = index === 1 && innerWidth > 760 ? '-50%' : '0';
      const y = ((centers[index] - progress) * 85).toFixed(1);
      beat.style.transform = `translate3d(${x}, calc(-50% + ${y}px), 0)`;
      beat.classList.toggle('is-active', index === active);
    });

    steps.forEach((step, index) => step.classList.toggle('is-active', index === active));
    if (lights) lights.style.opacity = String(clamp(1 - progress / .29));
  }

  function requestPaint() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(paint);
  }

  addEventListener('scroll', requestPaint, {passive: true});
  addEventListener('resize', requestPaint, {passive: true});
  reducedMotion.addEventListener?.('change', requestPaint);
  paint();
})();
