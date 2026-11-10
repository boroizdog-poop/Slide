(() => {
  'use strict';
  if (!('IntersectionObserver' in window) || !Element.prototype.animate) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const selectors = [
    '.dashboard > .heading', '.dashboard > .metrics', '.dashboard > .chart-section',
    '.dashboard > .insight', '.dashboard > .context-block', '.dashboard > .additional-data',
    '.market-redesign > .section-label', '.market-new-heading', '.market-number-band',
    '.market-promo', '.market-slope', '.pressure-new-heading', '.pressure-ribbon',
    '.pressure-columns > article', '.pressure-opportunity',
    '.cooperation > .section-label', '.cooperation > h2', '.cooperation-photo',
    '.cooperation-modes > button', '.ecosystem-new-heading', '.partnership-track > li',
    '.partnership-ledger', '.partnership-tools > *', '.cooperation-example',
    '.marketing-heading', '.marketing-nav', '.case-intro-top', '.case-cover-grid > a',
    '.case-table-wrap', '.case-caveat', '.evaluation-header',
    '.evaluation-benefits > *', '.evaluation-limits > *', '.evaluation-causes-heading',
    '.evaluation-grid > article', '.evaluation-causes > .evaluation-footnote',
    '.evaluation-conclusion', '.case-journal [data-case-reveal]'
  ];
  const active = new Map();
  const pending = new Set();
  function finishAll() {
    active.forEach(animation => animation.finish());
    active.clear();
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      pending.delete(entry.target);
      if (reduced.matches) return;
      const element = entry.target;
      // Animate from its current position, preserving existing layout transforms.
      if (element.matches('img,figure') || element.querySelector('img')) return;
      const transform = getComputedStyle(element).transform;
      const base = transform === 'none' ? '' : transform;
      const animation = element.animate([
        {opacity: .65},
        {opacity: 1}
      ], {duration: 750, easing: 'cubic-bezier(.22,1,.36,1)'});
      active.set(element, animation);
      animation.onfinish = () => active.delete(element);
    });
  }, {threshold: .06});
  document.querySelectorAll(selectors.join(',')).forEach(element => {

    // Leave the initial screen stable; animate blocks encountered while scrolling.
    const rect = element.getBoundingClientRect();
    if (rect.top < innerHeight && rect.bottom > 0) return;
    pending.add(element);
    observer.observe(element);
  });
  reduced.addEventListener('change', () => {
    if (!reduced.matches) return;
    finishAll();
    observer.disconnect();
    pending.clear();
  });
  window.addEventListener('presentation-scroll-start', finishAll);
  window.addEventListener('beforeprint', () => {
    finishAll();
    observer.disconnect();
    pending.clear();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) finishAll();
  });
})();

