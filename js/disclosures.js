(() => {
  'use strict';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const states = new Map();
  document.querySelectorAll('details').forEach(element => {
    const summary = element.querySelector(':scope > summary');
    if (!summary) return;
    const state = {
      element, summary, expanded: element.open,
      group: element.getAttribute('name'), animation: null, version: 0
    };
    // Coordinate named accordions ourselves so siblings can animate closed.
    if (state.group) element.removeAttribute('name');
    element.dataset.expanded = String(state.expanded);
    states.set(element, state);
    summary.addEventListener('click', event => {
      event.preventDefault();
      setExpanded(state, !state.expanded);
    });
  });

  function finish(state) {
    state.version++;
    if (state.animation) state.animation.cancel();
    state.animation = null;
    state.element.open = state.expanded;
    state.element.style.removeProperty('height');
    state.element.style.removeProperty('overflow');
    state.element.removeAttribute('data-animating');
  }

  function setExpanded(state, expanded) {
    if (expanded && state.group) {
      states.forEach(sibling => {
        if (sibling !== state && sibling.group === state.group && sibling.expanded) setExpanded(sibling, false);
      });
    }
    const element = state.element;
    const from = element.getBoundingClientRect().height;
    state.expanded = expanded;
    element.dataset.expanded = String(expanded);
    const version = ++state.version;
    if (state.animation) state.animation.cancel();
    state.animation = null;
    if (reduced.matches || !element.animate) { finish(state); return; }

    element.style.height = 'auto';
    element.open = expanded;
    const to = element.getBoundingClientRect().height;
    // Keep the content in layout during collapse; remove it only after fading out.
    element.open = true;
    element.style.height = `${from}px`;
    element.style.overflow = 'hidden';
    element.dataset.animating = 'true';
    const duration = Math.min(480, 300 + Math.abs(to - from) * 0.15);
    const animation = element.animate([
      {height: `${from}px`}, {height: `${to}px`}
    ], {duration, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'both'});
    state.animation = animation;
    animation.onfinish = () => { if (state.version === version) finish(state); };
  }

  window.addEventListener('beforeprint', () => states.forEach(finish));
  window.addEventListener('resize', () => states.forEach(state => { if (state.animation) finish(state); }));
  if (reduced.addEventListener) reduced.addEventListener('change', () => {
    if (reduced.matches) states.forEach(finish);
  });
})();
