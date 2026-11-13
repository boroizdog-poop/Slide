(() => {
  'use strict';
  const scene = document.querySelector('.sostac-space');
  if (!scene) return;
  const panel = scene.querySelector('.sostac-space-panel'), dock = scene.querySelector('.space-ticket-dock');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const query = 'Tìm hiểu chiến dịch Highlands Coffee × MoMo theo mô hình SOSTAC.';
  const spark = '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="m16 3 3.6 9.4L29 16l-9.4 3.6L16 29l-3.6-9.4L3 16l9.4-3.6Z"/></svg>';
  const intro = document.createElement('div');
  intro.className = 'space-shop-intro space-chat-intro'; intro.dataset.chatPhase = 'typing';
  intro.setAttribute('role','region'); intro.setAttribute('aria-label','Tìm kiếm phần 3.3');
  intro.innerHTML = `<div class="intro-chat-wrap"><div class="intro-chat-brand"><img src="assets/icons/momo.svg" alt="MoMo"><span aria-hidden="true">${spark}</span></div><div class="intro-chat-compose"><img class="intro-chat-mascot" src="assets/images/sostac-space/momo-17.png" alt=""><form class="intro-chat-form"><span class="intro-query-text" aria-hidden="true"></span><span class="intro-query-caret" aria-hidden="true"></span><button class="intro-query-send" type="submit" aria-label="Gửi câu hỏi tìm kiếm"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5m-6 6 6-6 6 6"/></svg></button></form><span class="intro-sr-only">${query}</span></div><div class="intro-chat-feed"><div class="intro-user-message">${query}</div><div class="intro-assistant"><span class="intro-assistant-avatar" aria-hidden="true">${spark}</span><div class="intro-search-status" role="status"><span>Đang tìm kiếm</span><span class="intro-search-dots" aria-hidden="true"><i></i><i></i><i></i></span></div><button class="intro-search-result" type="button" hidden aria-label="Mở phần 3.3 theo mô hình SOSTAC"><span class="intro-result-number">3.3</span><span class="intro-result-title"><span>Tìm hiểu các giai đoạn xây dựng chiến dịch marketing qua ví điện tử của</span><strong>Highlands Coffee</strong><span>theo mô hình <b>SOSTAC</b></span></span><span class="intro-result-bottom"><span class="intro-result-letters" aria-hidden="true">${[...'SOSTAC'].map((letter,index)=>`<span style="--letter-index:${index}">${letter}</span>`).join('')}</span><svg class="intro-result-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6"/></svg></span></button></div></div></div>`;
  scene.append(intro); scene.classList.add('intro-pending'); panel.inert = true; dock.inert = true;
  const result = intro.querySelector('.intro-search-result'), form = intro.querySelector('form');
  const status = intro.querySelector('.intro-search-status');
  const caption = document.createElement('div'); caption.className = 'intro-search-caption'; caption.append(...status.childNodes);
  const files = document.createElement('div'); files.className = 'intro-file-search'; files.setAttribute('aria-hidden','true');
  files.innerHTML = '<span class="intro-folder-back"></span><span class="intro-search-page" style="--page:0"></span><span class="intro-search-page" style="--page:1"></span><span class="intro-search-page" style="--page:2"></span><span class="intro-folder-front"></span><span class="intro-file-lens"><svg viewBox="0 0 32 32"><circle cx="13" cy="13" r="8"/><path d="m19 19 8 8"/></svg></span>';
  status.append(files,caption);
  let phase = 'typing', cursor = 0, timer, opening = false;
  // Local presentation animation: no query is sent to an AI or search service.
  function visible() {const rect = scene.getBoundingClientRect(); return !document.hidden && rect.top < innerHeight*.4 && rect.bottom > innerHeight*.6;}
  function showResult() {
    clearTimeout(timer); phase = 'result'; intro.dataset.chatPhase = phase;
    intro.querySelector('.intro-search-status').hidden = true; result.hidden = false;
    if (form.contains(document.activeElement)) result.focus({preventScroll:true});
  }
  function send() {
    if (phase !== 'typing' || opening) return;
    clearTimeout(timer); phase = 'searching'; intro.dataset.chatPhase = phase;
    intro.querySelector('.intro-query-text').textContent = query;
    if (reduced.matches) showResult(); else tick();
  }
  function tick() {
    clearTimeout(timer);
    if (opening || phase === 'result' || !visible()) return;
    if (reduced.matches) {if (phase === 'typing') send(); else showResult(); return;}
    if (phase === 'typing') {
      intro.querySelector('.intro-query-text').textContent = query.slice(0, ++cursor);
      timer = setTimeout(cursor < query.length ? tick : send, cursor < query.length ? 34 : 650);
    } else timer = setTimeout(showResult, 2400);
  }
  form.addEventListener('submit', event => {event.preventDefault(); send();});
  result.addEventListener('click', async () => {
    if (opening || phase !== 'result') return;
    opening = true; clearTimeout(timer); result.disabled = true;
    if (!reduced.matches && result.animate) {
      await result.animate([{transform:'scale(1)'},{transform:'scale(.985)'}],{duration:120,easing:'ease-out',fill:'forwards'}).finished;
    }
    const ready = new Promise(resolve => {
      if (scene.dataset.spaceStep === '0') {resolve(); return;}
      addEventListener('sostacchange',resolve,{once:true});
      scene.querySelector('.space-ticket').click();
    });
    await ready;
    scene.classList.add('chat-intro-transition'); intro.dataset.chatPhase = 'opening';
    if (!reduced.matches && intro.animate) {
      panel.animate([{opacity:.45,transform:'translateY(16px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,delay:100,easing:'cubic-bezier(.2,.75,.25,1)'});
      await intro.animate([{clipPath:'inset(0 0 0 0)'},{clipPath:'inset(0 0 100% 0)'}],{duration:760,easing:'cubic-bezier(.65,0,.2,1)',fill:'forwards'}).finished;
    }
    intro.hidden = true; scene.classList.remove('intro-pending','intro-opening','chat-intro-transition'); scene.classList.add('shop-open');
    panel.inert = false; dock.inert = false;
    scene.querySelector('.space-ticket[aria-selected="true"]').focus({preventScroll:true});
  });
  new IntersectionObserver(tick,{threshold:[0,.4,.6]}).observe(scene);
  document.addEventListener('visibilitychange',tick);
  reduced.addEventListener('change',() => {if (reduced.matches && visible() && !opening) {if (phase === 'typing') send(); else if (phase === 'searching') showResult();}});
})();
