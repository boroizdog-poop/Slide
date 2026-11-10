(() => {
  'use strict';
  const slide = document.querySelector('.value-mechanism');
  if (!slide) return;
  const steps = [...slide.querySelectorAll('.value-step')];
  const progress = slide.querySelector('.value-track i');
  let current = 0;
  function select(index, focus = false) {
    current = Math.max(0, Math.min(steps.length - 1, index));
    steps.forEach((step, i) => {
      step.setAttribute('aria-pressed', String(i === current));
      step.classList.toggle('is-complete', i < current);
    });
    progress.style.transform = `scaleX(${current / (steps.length - 1)})`;
    slide.classList.toggle('is-cycle-complete', current === steps.length - 1);
    if (focus) steps[current].focus();
  }
  steps.forEach((step, index) => {
    step.addEventListener('click', () => select(index));
    step.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      select(event.key === 'Home' ? 0 : event.key === 'End' ? steps.length - 1 :
        index + (event.key === 'ArrowRight' ? 1 : -1), true);
    });
  });
  select(0);
})();
