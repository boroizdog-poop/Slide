(() => {
  'use strict';
  const wide = matchMedia('(min-width: 901px)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const deck = document.querySelector('[data-slide-deck]');
  const history = document.querySelector('.highlands-history');
  const slideRoot = history ? document : (deck || document);
  const slides = [...slideRoot.querySelectorAll([
    '.report-cover', '.hero', '.chapter-one-slide', '[data-number-slide]', '.continuation', '.marketing-swipe', '.case-intro', '.highlands-history', '.highlands-products',
    '.case-brand', '.case-mechanism', '.case-analysis', '.case-comparison',
    '.evaluation-header', '.evaluation-block', '.highlands-insight-slide'
  ].join(','))];


  slides.sort((a,b) => a === b ? 0 : (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));
  if (!slides.length) return;
  const controls = document.createElement('nav');
  controls.className = 'slide-controls';
  controls.setAttribute('aria-label', 'Chuyển slide');
  controls.innerHTML = '<button type="button" aria-label="Slide trước"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 20V4m-6 6 6-6 6 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button><span class="slide-counter"></span><button type="button" aria-label="Slide tiếp theo"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 4v16m-6-6 6 6 6-6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>';
  const [previous, next] = controls.querySelectorAll('button');
  const counter = controls.querySelector('.slide-counter');
  document.body.append(controls);
  let current = 0, queued = false, targetSlide = null, scrollFrame = 0;
  function cancelScroll() {
    cancelAnimationFrame(scrollFrame);
    scrollFrame = 0;
    targetSlide = null;
  }
  window.presentationScrollTo = function(top, slide = null) {
    cancelScroll();
    targetSlide = slide;
    window.dispatchEvent(new Event('presentation-scroll-start'));
    const start = window.scrollY;
    const target = Math.max(0, Math.min(top, document.documentElement.scrollHeight - innerHeight));
    if (reduced.matches) { window.scrollTo(0,target); targetSlide = null; update(); return; }
    const distance = target-start;
    const duration = Math.min(850, Math.max(350, Math.abs(distance)*.25));
    const begin = performance.now();
    function tick(now) {
      const p = Math.min(1,(now-begin)/duration);
      const ease = p < .5 ? 4*p*p*p : 1-Math.pow(-2*p+2,3)/2;
      window.scrollTo(0,start+distance*ease);
      if(p < 1) scrollFrame = requestAnimationFrame(tick);
      else { scrollFrame=0; targetSlide=null; update(); }
    }
    scrollFrame = requestAnimationFrame(tick);
  };
  addEventListener('wheel', cancelScroll, {passive:true});
  addEventListener('touchstart', cancelScroll, {passive:true});
  addEventListener('resize', cancelScroll);
  const visibleSlides = () => slides.filter(slide => slide.getClientRects().length > 0);
  const controlsAnchor = history || deck;
  function update() {
    queued = false;
    if (!wide.matches) return;
    const line = Math.min(innerHeight * .3, 220);
    let best = 0;
    const available = visibleSlides();
    if (controlsAnchor) controls.hidden = !wide.matches || controlsAnchor.getBoundingClientRect().top > innerHeight * .55;
    available.forEach((slide, i) => { if (slide.getBoundingClientRect().top <= line) best = i; });
    current = best;
    counter.textContent = `${String(current + 1).padStart(2, '0')} / ${available.length}`;
    previous.disabled = current === 0;
    next.disabled = current === available.length - 1;
  }
  function move(direction) {
    if (!window.dispatchEvent(new CustomEvent('presentation-step', {cancelable:true, detail:{direction}}))) return;
    const available = visibleSlides();
    if (controlsAnchor) controls.hidden = !wide.matches || controlsAnchor.getBoundingClientRect().top > innerHeight * .55;
    const base = targetSlide ? available.indexOf(targetSlide) : current;
    const target = Math.max(0, Math.min(available.length - 1, base + direction));
    const slide = available[target];
    const offset = parseFloat(getComputedStyle(slide).scrollMarginTop) || 0;
    const bounds = slide.getBoundingClientRect();
    // Center this compact data slide when it fits; top-align on shorter screens.
    const inset = slide.matches('.combined-data-slide')
      ? Math.max(16, (innerHeight - bounds.height) / 2) : offset;
    window.presentationScrollTo(bounds.top + scrollY - inset, slide);
  }
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  document.addEventListener('keydown', event => {
    if (!wide.matches || event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (document.querySelector('dialog[open]') || event.target.closest('input,textarea,select,button,a,[contenteditable="true"],.marketing-track,[role="tablist"]')) return;
    if (deck && controls.hidden) return;
    if (!['PageDown', 'PageUp'].includes(event.key)) return;
    event.preventDefault();
    move(event.key === 'PageDown' ? 1 : -1);
  });
  addEventListener('scroll', () => { if (!queued) { queued = true; requestAnimationFrame(update); } }, {passive:true});
  addEventListener('resize', update);
  addEventListener('casechange', update);
  wide.addEventListener('change', update);
  update();
})();




