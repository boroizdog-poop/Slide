/* Keep the viewed slide stable across F11 and viewport layout changes. */
(() => {
 'use strict';
 const selector='.highlands-insight-slide,.highlands-cover,.history-stage,.highlands-products,.hero,.chapter-one-slide,[data-number-slide],.continuation,.marketing-swipe,.case-intro,.case-brand,.case-mechanism,.case-analysis,.case-comparison,.evaluation-header,.evaluation-block';
 const slides=[...document.querySelectorAll(selector)];
 if(!slides.length)return;
 let width=innerWidth,height=innerHeight,anchor=null,locked=false,timers=[];
 function remember(){
   if(locked||width!==innerWidth||height!==innerHeight)return;
   const visible=slides.filter(el=>el.getClientRects().length&&getComputedStyle(el).position!=='absolute');
   let best=null,area=0;
   for(const el of visible){const r=el.getBoundingClientRect();const overlap=Math.max(0,Math.min(height,r.bottom)-Math.max(0,r.top));if(overlap>area){best=el;area=overlap}}
   if(!best)return;
   const r=best.getBoundingClientRect();
   // Preserve the current offset within this slide, including any gap above it.
   anchor={el:best,point:-r.top/Math.max(1,r.height)};
 }
 function restore(){
   if(!anchor||!anchor.el.isConnected)return;
   const r=anchor.el.getBoundingClientRect();
   const top=scrollY+r.top+anchor.point*r.height;
   scrollTo({top,behavior:'instant'});
 }
 function resize(){
   locked=true;timers.forEach(clearTimeout);restore();
   // Other slide fitters and browser fullscreen chrome can settle in separate frames.
   timers=[0,80,200,450].map(ms=>setTimeout(restore,ms));
   timers.push(setTimeout(()=>{restore();width=innerWidth;height=innerHeight;locked=false;remember()},650));
 }
 function userScroll(){if(locked)return;remember()}
 addEventListener('scroll',userScroll,{passive:true});
 addEventListener('keydown',e=>{if(e.key==='F11')remember()},true);
 addEventListener('resize',resize);
 document.addEventListener('fullscreenchange',resize);
 addEventListener('load',remember);document.fonts?.ready.then(remember);
 document.documentElement.style.overflowAnchor='none';
 remember();
})();


