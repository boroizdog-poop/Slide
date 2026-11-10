(() => {
  'use strict';
  const track = document.querySelector('#marketing-track');
  if (!track) return;
  const cards = [...track.querySelectorAll('.marketing-card')];
  const tabs = [...document.querySelectorAll('[data-marketing-slide]')];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0, destination = null, frame = 0, scrollQueued = false, drag = null;
  let positions = [];
  function measure() {
    const left = track.getBoundingClientRect().left;
    positions = cards.map(card => card.getBoundingClientRect().left-left+track.scrollLeft);
  }
  function nearest() {
    return positions.reduce((best, pos, i) => Math.abs(pos-track.scrollLeft) < Math.abs(positions[best]-track.scrollLeft) ? i : best, 0);
  }
  function update(index) {
    if (current === index && tabs[0].hasAttribute('aria-current')) return;
    current = index;
    tabs.forEach((button,i) => button.setAttribute('aria-current',String(i===index)));
  }
  function stop() {
    cancelAnimationFrame(frame);
    frame = 0;
    destination = null;
  }
  function restoreSnap() {
    track.classList.remove('is-settling');
    update(nearest());
  }
  function go(index) {
    stop();
    const targetIndex = Math.max(0, Math.min(cards.length-1,index));
    destination = targetIndex;
    track.classList.add('is-settling');
    const from = track.scrollLeft;
    const to = positions[targetIndex];
    const started = performance.now();
    const duration = reduced.matches ? 0 : Math.min(420,Math.max(180,Math.abs(to-from)*.35));
    function tick(now) {
      const p = duration ? Math.min(1,(now-started)/duration) : 1;
      track.scrollLeft = from+(to-from)*(1-Math.pow(1-p,3));
      if (p<1) frame=requestAnimationFrame(tick);
      else { frame=0; destination=null; update(targetIndex); restoreSnap(); }
    }
    frame=requestAnimationFrame(tick);
  }
  tabs.forEach(button => button.addEventListener('click',()=>go(Number(button.dataset.marketingSlide))));
  track.addEventListener('scroll',()=>{
    if(scrollQueued) return;
    scrollQueued=true;
    requestAnimationFrame(()=>{scrollQueued=false;update(nearest());});
  },{passive:true});
  track.addEventListener('keydown',event=>{
    if(event.target.closest('button,summary,a,input,textarea,select'))return;
    if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
    event.preventDefault();
    go(event.key==='Home'?0:event.key==='End'?cards.length-1:(destination ?? current)+(event.key==='ArrowRight'?1:-1));
  });
  track.addEventListener('pointerdown',event=>{
    if(event.pointerType!=='mouse'||event.button!==0||event.target.closest('button,summary,a,details,input,textarea,select'))return;
    stop();
    track.classList.add('is-settling');
    measure();
    drag={x:event.clientX,y:event.clientY,left:track.scrollLeft,index:nearest(),id:event.pointerId,moved:false};
  });
  track.addEventListener('pointermove',event=>{
    if(!drag||event.pointerId!==drag.id)return;
    const dx=event.clientX-drag.x,dy=event.clientY-drag.y;
    if(!drag.moved){
      if(Math.abs(dx)<8)return;
      if(Math.abs(dy)>Math.abs(dx)){drag=null;restoreSnap();return;}
      drag.moved=true;
      track.classList.add('is-dragging');
      track.setPointerCapture(event.pointerId);
    }
    event.preventDefault();
    track.scrollLeft=Math.max(0,Math.min(track.scrollWidth-track.clientWidth,drag.left-dx));
  });
  function release(event){
    if(!drag || (event.pointerId!==undefined&&event.pointerId!==drag.id))return;
    const ended=drag;
    drag=null;
    track.classList.remove('is-dragging');
    if(track.hasPointerCapture(ended.id))track.releasePointerCapture(ended.id);
    let index=nearest();
    const distance=track.scrollLeft-ended.left;
    if(ended.moved&&event.type==='pointerup'&&Math.abs(distance)>Math.min(100,track.clientWidth*.1)&&index===ended.index)index+=Math.sign(distance);
    if(ended.moved)go(index);else restoreSnap();
  }
  // Window release also handles clicks released outside the track before capture.
  window.addEventListener('pointerup',release);
  track.addEventListener('pointercancel',release);
  track.addEventListener('lostpointercapture',release);
  track.addEventListener('pointerleave',event=>{if(drag&&!drag.moved)release(event);});
  track.addEventListener('dragstart',event=>event.preventDefault());
  track.addEventListener('wheel',()=>{if(frame){stop();restoreSnap();}},{passive:true});
  window.addEventListener('blur',()=>{if(drag)release({type:'pointercancel'});});
  window.addEventListener('resize',()=>{
    stop();measure();track.scrollLeft=positions[current];restoreSnap();
  });
  measure();
  tabs.forEach((button,i)=>button.setAttribute('aria-current',String(i===0)));
})();
