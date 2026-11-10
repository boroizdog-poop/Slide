(() => {
  'use strict';
  const history = document.querySelector('.highlands-history');
  if (!history) return;
  const route = history.querySelector('.history-route');
  const stages = [...route.querySelectorAll('.history-stage')];
  const svg = route.querySelector('.history-trail');
  const base = svg.querySelector('.trail-base');
  const progress = svg.querySelector('.trail-progress');
  const bean = route.querySelector('.history-bean');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let points = [], milestones = [], pathLength = 0;
  let frame = 0;

  function positionAtY(y) {
    if (y <= points[0].y) return points[0];
    if (y >= points.at(-1).y) return points.at(-1);
    let low = 0, high = points.length - 1;
    while (high - low > 1) {
      const mid = (low + high) >> 1;
      if (points[mid].y < y) low = mid;
      else high = mid;
    }
    const a = points[low], b = points[high];
    const t = (y - a.y) / Math.max(.001, b.y - a.y);
    return { x: a.x + (b.x - a.x) * t, y,
      length: a.length + (b.length - a.length) * t };
  }

  function update() {
    frame = 0;
    if (!points.length) return;
    const bounds = route.getBoundingClientRect();
    const target = innerHeight * .52 - bounds.top;
    const point = positionAtY(target);
    progress.style.strokeDashoffset = String(pathLength - point.length);
    const before = base.getPointAtLength(Math.max(0, point.length - 2));
    const after = base.getPointAtLength(Math.min(pathLength, point.length + 2));
    const angle = Math.atan2(after.y - before.y, after.x - before.x) * 180 / Math.PI - 90;
    bean.style.transform = `translate3d(${point.x}px,${point.y}px,0) rotate(${angle}deg)`;
    milestones.forEach((y, index) => {
      const stage = stages[index];
      const reached = target >= y;
      stage.classList.toggle('is-reached', reached);
      // Cross the actual marker to reveal; reversing past it hides the station.
      stage.classList.toggle('is-revealed', reduced.matches || reached);
    });
  }

  function measure() {
    const rect = route.getBoundingClientRect();
    const width = route.clientWidth, height = route.scrollHeight;
    const mobile = matchMedia('(max-width: 900px)').matches;
    // Marker positions belong to each layout, so the route follows any arrangement.
    const stationX = stages.map(stage => {
      const bounds = stage.getBoundingClientRect();
      return bounds.left - rect.left + parseFloat(getComputedStyle(stage, '::before').left);
    });
    milestones = stages.map(stage => {
      const bounds = stage.getBoundingClientRect();
      const markerTop = parseFloat(getComputedStyle(stage, '::before').top);
      return bounds.top - rect.top + markerTop;
    });
    let d = `M ${stationX[0]} ${milestones[0]}`;
    for (let i = 1; i < milestones.length; i++) {
      const start = milestones[i - 1], end = milestones[i], gap = end - start;
      const sign = i % 2 ? 1 : -1;
      const bend = mobile ? 10 : Math.min(100, gap * .15, width * .065);
      d += ` C ${stationX[i - 1] + bend * sign} ${start + gap * .32}, ${stationX[i] - bend * sign} ${end - gap * .32}, ${stationX[i]} ${end}`;
    }
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    base.setAttribute('d', d);
    progress.setAttribute('d', d);
    pathLength = base.getTotalLength();
    progress.style.strokeDasharray = String(pathLength);
    points = Array.from({ length: 601 }, (_, i) => {
      const length = pathLength * i / 600;
      const p = base.getPointAtLength(length);
      return { x: p.x, y: p.y, length };
    });
    update();
    history.classList.add('history-ready');
  }

  function schedule() {
    if (!frame) frame = requestAnimationFrame(update);
  }
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', measure);
  reduced.addEventListener('change', update);
  if ('ResizeObserver' in window) new ResizeObserver(measure).observe(route);
  if (document.fonts) document.fonts.ready.then(measure);
  route.querySelectorAll('img').forEach(img => {
    if (!img.complete) img.addEventListener('load', measure, { once: true });
  });
  measure();
})();
