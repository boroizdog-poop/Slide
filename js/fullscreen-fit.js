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
    const pageTop = Math.max(0, page.getBoundingClientRect().top);
    const topGap = Math.max(12, Math.min(28, innerHeight * .022));
    const availableHeight = Math.max(220, innerHeight - header.offsetHeight - 18);
    const availableWidth = Math.max(280, Math.min(page.clientWidth - 32, viewportWidth - 32));
    const width = Math.floor(Math.min(availableWidth, availableHeight * 1380 / 664));
    hero.style.width = `${width}px`;
    hero.style.height = `${Math.floor(width * 664 / 1380)}px`;
    hero.style.minHeight = '0';
    hero.style.aspectRatio = 'auto';
    hero.style.marginTop = topGap + 'px';
    const coverHeight = Math.floor(width * 664 / 1380);
    hero.style.marginBottom = Math.max(32, innerHeight - pageTop - header.offsetHeight - topGap - coverHeight + 32) + 'px';
  }
  let frame;
  function schedule() { cancelAnimationFrame(frame); frame = requestAnimationFrame(sync); }
  addEventListener('resize', schedule);
  document.addEventListener('fullscreenchange', schedule);
  if (document.fonts) document.fonts.ready.then(schedule);
  sync();
})();




