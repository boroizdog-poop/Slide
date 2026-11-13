(() => {
  'use strict';
  const page = document.querySelector('.page');
  const header = document.querySelector('.page > .header');
  const hero = document.querySelector('.hero');
  function sync() {
    const display = window.screen;
    const f11 = Math.abs(window.innerHeight - display.height) <= 12 &&
      Math.abs(window.innerWidth - display.width) <= 12;
    document.documentElement.classList.toggle('is-presentation-fullscreen', Boolean(document.fullscreenElement) || f11);
    if (!hero || innerWidth <= 700) {
      if (hero) ['width','height','min-height','aspect-ratio','margin-bottom','margin-top'].forEach(key => hero.style.removeProperty(key));
      return;
    }
    const viewportWidth = document.documentElement.clientWidth;
    const fullscreen = document.documentElement.classList.contains('is-presentation-fullscreen');
    // The report cover can precede this page: only its outer gap belongs
    // to the chapter's viewport, not its absolute position in the document.
    const pageTop = fullscreen
      ? parseFloat(getComputedStyle(page).marginTop) || 0
      : Math.max(0, page.getBoundingClientRect().top);
    const headerMargin = parseFloat(getComputedStyle(header).marginTop) || 0;
    const topGap = Math.max(12, Math.min(28, innerHeight * .022));
    const availableHeight = Math.max(220, fullscreen
      ? innerHeight - pageTop - headerMargin - header.offsetHeight - topGap - 32
      : innerHeight - header.offsetHeight - 18);
    const availableWidth = Math.max(280, Math.min(page.clientWidth - 32, viewportWidth - 32));
    const width = Math.floor(Math.min(availableWidth, availableHeight * 1380 / 664));
    hero.style.width = `${width}px`;
    hero.style.height = `${Math.floor(width * 664 / 1380)}px`;
    hero.style.minHeight = '0';
    hero.style.aspectRatio = 'auto';
    hero.style.marginTop = topGap + 'px';
    const coverHeight = Math.floor(width * 664 / 1380);
    hero.style.marginBottom = Math.max(32, innerHeight - pageTop - (fullscreen ? headerMargin : 0) - header.offsetHeight - topGap - coverHeight + 32) + 'px';
  }
  let frame;
  function schedule() { cancelAnimationFrame(frame); frame = requestAnimationFrame(sync); }
  addEventListener('resize', schedule);
  document.addEventListener('fullscreenchange', schedule);
  if (document.fonts) document.fonts.ready.then(schedule);
  sync();
})();




