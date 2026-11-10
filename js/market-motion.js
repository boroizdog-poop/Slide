(() => {
  'use strict';
  const chart = document.querySelector('.market-slope');
  if (!chart) return;
  const svg = chart.querySelector('svg');
  const path = svg.querySelector('path');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const points = [...svg.querySelectorAll('circle')];
  const labels = [...svg.querySelectorAll('text')].slice(0, 3);
  const length = path.getTotalLength();
  let frame = 0;
  let started = false;
  let observer;
  const runner = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  runner.setAttribute('r', '10');
  runner.setAttribute('fill', '#2d79b3');
  runner.setAttribute('stroke', '#d9edf9');
  runner.setAttribute('stroke-width', '7');
  runner.setAttribute('aria-hidden', 'true');
  runner.style.display = 'none';
  svg.append(runner);
  const milestones = points.map(point => {
    const x = Number(point.getAttribute('cx'));
    const y = Number(point.getAttribute('cy'));
    let best = 0, distance = Infinity;
    for (let n = 0; n <= 500; n++) {
      const at = length * n / 500;
      const p = path.getPointAtLength(at);
      const d = Math.hypot(p.x - x, p.y - y);
      if (d < distance) { distance = d; best = at / length; }
    }
    return best;
  });
  function finish() {
    cancelAnimationFrame(frame);
    path.style.removeProperty('stroke-dasharray');
    path.style.removeProperty('stroke-dashoffset');
    runner.style.display = 'none';
    [...points, ...labels].forEach(el => el.style.removeProperty('opacity'));
  }
  function play() {
    if (started || document.hidden) return;
    started = true;
    if (observer) observer.disconnect();
    finish();
    if (reduced.matches) return;
    path.style.strokeDasharray = `${length} ${length}`;
    path.style.strokeDashoffset = String(length);
    [...points, ...labels].forEach(el => el.style.opacity = '0');
    runner.style.display = '';
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / 3200, 1);
      const position = path.getPointAtLength(length * progress);
      path.style.strokeDashoffset = String(length * (1 - progress));
      runner.setAttribute('cx', position.x);
      runner.setAttribute('cy', position.y);
      points.forEach((point, index) => {
        const opacity = Math.min(Math.max((progress - milestones[index]) * 14 + .05, 0), 1);
        point.style.opacity = String(opacity);
        if (labels[index]) labels[index].style.opacity = String(opacity);
      });
      if (progress < 1) frame = requestAnimationFrame(tick);
      else finish();
    }
    frame = requestAnimationFrame(tick);
  }
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting && entry.intersectionRatio >= .5)) play();
    }, {threshold: .5});
    observer.observe(chart);
  } else play();
  reduced.addEventListener('change', () => { if (reduced.matches) finish(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) finish(); });
  window.addEventListener('beforeprint', finish);
})();

