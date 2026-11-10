(() => {
  'use strict';
  const slide = document.querySelector('.payment-process');
  if (!slide) return;
  const tabs = [...slide.querySelectorAll('.process-step')];
  const panels = [...slide.querySelectorAll('.process-panel')];
  const list = slide.querySelector('.process-steps');
  const track = slide.querySelector('.process-track');
  const progress = track.querySelector('i');
  const previous = slide.querySelector('[data-process-prev]');
  const next = slide.querySelector('[data-process-next]');
  const status = slide.querySelector('.process-status');
  let current = 0;

  function syncTrack() {
    const bounds = list.getBoundingClientRect();
    const circles = tabs.map(tab => tab.querySelector('.process-number').getBoundingClientRect());
    const center = circle => circle.top + circle.height / 2 - bounds.top;
    track.style.top = `${center(circles[0])}px`;
    track.style.left = `${circles[0].left + circles[0].width / 2 - bounds.left}px`;
    track.style.height = `${center(circles.at(-1)) - center(circles[0])}px`;
    progress.style.height = `${center(circles[current]) - center(circles[0])}px`;
  }

  function select(index, focus = false) {
    current = Math.max(0, Math.min(tabs.length - 1, index));
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === current));
      tab.tabIndex = i === current ? 0 : -1;
      tab.classList.toggle('is-complete', i < current);
      panels[i].hidden = i !== current;
    });
    previous.disabled = current === 0;
    next.disabled = current === tabs.length - 1;
    status.textContent = `Bước ${current + 1} / ${tabs.length}`;
    syncTrack();
    if (focus) tabs[current].focus();
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => select(index));
    tab.addEventListener('keydown', event => {
      if (!['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const index = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 :
        current + (event.key === 'ArrowDown' ? 1 : -1);
      select(index, true);
    });
  });
  previous.addEventListener('click', () => select(current - 1));
  next.addEventListener('click', () => select(current + 1));
  slide.classList.add('is-enhanced');
  slide.querySelector('.process-controls').hidden = false;
  select(0);
  if ('ResizeObserver' in window) new ResizeObserver(syncTrack).observe(list);
  else window.addEventListener('resize', syncTrack);
  if (document.fonts) document.fonts.ready.then(syncTrack);
})();
