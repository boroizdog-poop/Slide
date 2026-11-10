(() => {
  'use strict';
  const hero = document.querySelector('.hero');
  const dialog = document.querySelector('#content-dialog');
  const toast = document.querySelector('#toast');
  let toastTimer;

  // Keep the supplied SVGs at their original intrinsic dimensions; scale
  // their presentation uniformly with the 1380px-wide Figma hero.
  function syncAssetScale() {
    hero.style.setProperty('--asset-scale', String(hero.clientWidth / 1380));
  }
  syncAssetScale();
  if ('ResizeObserver' in window) new ResizeObserver(syncAssetScale).observe(hero);
  else window.addEventListener('resize', syncAssetScale);

  document.querySelectorAll('[data-open-content]').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelector('#boi-canh').scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
        block: 'start'
      });
    });
  });
  dialog.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => dialog.close());
  });
  document.querySelector('[data-close-dialog]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right ||
        event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  document.querySelectorAll('[data-unavailable]').forEach(button => {
    button.addEventListener('click', () => {
      clearTimeout(toastTimer);
      toast.textContent = `Chương ${button.dataset.unavailable} chưa có nội dung. Bạn đang xem chương 2.`;
      toast.hidden = false;
      toastTimer = setTimeout(() => { toast.hidden = true; }, 3500);
    });
  });

  const modeButtons = [...document.querySelectorAll('[data-mode-image]')];
  const modeImage = document.querySelector('#cooperation-image');
  const modePanel = document.querySelector('#cooperation-panel');
  const imageCache = new Map();
  let selectionVersion = 0;
  let activeImage = modeImage;
  let imageTransition;
  function prepareImage(source) {
    if (!imageCache.has(source)) {
      const image = new Image();
      image.decoding = 'async';
      const ready = new Promise((resolve, reject) => {
        image.onload = async () => {
          try { if (image.decode) await image.decode(); } catch { /* Loaded image remains usable. */ }
          resolve(image);
        };
        image.onerror = reject;
      });
      image.src = source;
      imageCache.set(source, ready);
    }
    return imageCache.get(source);
  }
  // Decode ahead of selection so the old photo stays visible until the new one is ready.
  modeButtons.forEach(button => prepareImage(button.dataset.modeImage).catch(() => {}));
  async function selectMode(button, moveFocus = false) {
    const version = ++selectionVersion;
    modeButtons.forEach(item => {
      const selected = item === button;
      item.classList.toggle('is-selected', selected);
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
    });
    modePanel.setAttribute('aria-labelledby', button.id);
    if (moveFocus) button.focus();
    if (activeImage.getAttribute('src') === button.dataset.modeImage) {
      modePanel.setAttribute('aria-busy', 'false');
      return;
    }
    modePanel.setAttribute('aria-busy', 'true');
    try {
      const prepared = await prepareImage(button.dataset.modeImage);
      if (version !== selectionVersion) return;
      activeImage.style.opacity = '1';
      if (imageTransition) imageTransition.cancel();
      modePanel.querySelectorAll('img').forEach(image => { if (image !== activeImage) image.remove(); });
      const previous = activeImage;
      const next = prepared.cloneNode();
      next.removeAttribute('id');
      next.alt = button.dataset.modeAlt;
      next.classList.add('cooperation-image-layer');
      next.loading = 'eager';
      previous.alt = '';
      modePanel.append(next);
      activeImage = next;
      modePanel.setAttribute('aria-busy', 'false');
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !next.animate) {
        previous.remove();
        return;
      }
      imageTransition = next.animate([{opacity: 0}, {opacity: 1}], {
        duration: 650, easing: 'cubic-bezier(0.22, 1, 0.36, 1)'
      });
      imageTransition.finished.then(() => previous.remove()).catch(() => {});
    } catch {
      if (version === selectionVersion) modePanel.setAttribute('aria-busy', 'false');
    }
  }
  modeButtons.forEach((button, index) => {
    button.addEventListener('click', () => selectMode(button));
    button.addEventListener('keydown', event => {
      if (!['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? modeButtons.length - 1 :
        (index + (event.key === 'ArrowDown' ? 1 : -1) + modeButtons.length) % modeButtons.length;
      selectMode(modeButtons[next], true);
    });
  });
})();
