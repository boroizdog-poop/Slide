(() => {
  'use strict';
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const syncAssetScale = () => {
    hero.style.setProperty('--asset-scale', String(hero.clientWidth / 1380));
  };
  syncAssetScale();
  if ('ResizeObserver' in window) new ResizeObserver(syncAssetScale).observe(hero);
  else window.addEventListener('resize', syncAssetScale);
})();
