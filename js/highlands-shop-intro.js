(() => {
 const scene=document.querySelector('.sostac-space');if(!scene)return;
 const curtain=document.createElement('button');curtain.type='button';curtain.className='space-shop-intro';curtain.setAttribute('aria-label','Mở quầy Highlands × MoMo');curtain.innerHTML='<span class="shop-chapter">3.3</span><span class="shop-awning" aria-hidden="true"></span><span class="shop-title"><span class="shop-title-lead">Tìm hiểu các giai đoạn xây dựng chiến dịch marketing qua ví điện tử của</span> <strong>Highlands Coffee</strong> <span class="shop-title-model">theo mô hình <b>SOSTAC</b></span></span><img class="shop-peeking-mascot" src="assets/images/sostac-space/momo-17.png" alt=""><span class="shop-handle" aria-hidden="true"></span>';scene.append(curtain);scene.classList.add('intro-pending');
 const panel=scene.querySelector('.sostac-space-panel'),dock=scene.querySelector('.space-ticket-dock'),reduced=matchMedia('(prefers-reduced-motion: reduce)');panel.inert=true;dock.inert=true;
 let started=false,drag=null;
 curtain.setAttribute('aria-label','Giữ và kéo lên để mở quầy Highlands × MoMo. Bàn phím: nhấn Enter hoặc phím cách.');
 const hint=document.createElement('span');hint.className='shop-drag-hint';hint.textContent='Giữ và kéo lên';curtain.append(hint);
 function open(){if(started)return;started=true;const focused=document.activeElement===curtain;curtain.classList.remove('is-dragging');curtain.disabled=true;scene.classList.add('intro-opening');curtain.style.transform='translateY(-105%)';setTimeout(()=>{scene.classList.remove('intro-pending','intro-opening','intro-dragging');scene.classList.add('shop-open');curtain.hidden=true;panel.inert=false;dock.inert=false;if(focused)scene.querySelector('.space-ticket[aria-selected="true"]').focus({preventScroll:true})},reduced.matches?0:700)}
 curtain.addEventListener('pointerdown',e=>{if(started||!e.isPrimary||e.button!==0)return;drag={id:e.pointerId,y:e.clientY,distance:0};curtain.setPointerCapture(e.pointerId);curtain.classList.add('is-dragging');scene.classList.add('intro-dragging');});
 curtain.addEventListener('pointermove',e=>{if(!drag||drag.id!==e.pointerId)return;drag.distance=Math.max(0,Math.min(scene.clientHeight,drag.y-e.clientY));curtain.style.transform=`translateY(${-drag.distance}px)`;});
 function release(e){if(!drag||drag.id!==e.pointerId)return;const distance=drag.distance;drag=null;curtain.classList.remove('is-dragging');if(curtain.hasPointerCapture(e.pointerId))curtain.releasePointerCapture(e.pointerId);if(e.type!=='pointercancel'&&distance>=Math.min(180,scene.clientHeight*.23)){open()}else{curtain.style.transform='translateY(0)';scene.classList.remove('intro-dragging')}}
 curtain.addEventListener('pointerup',release);curtain.addEventListener('pointercancel',release);
 curtain.addEventListener('keydown',e=>{if(['Enter',' '].includes(e.key)){e.preventDefault();open()}});
 curtain.addEventListener('click',e=>e.preventDefault());
})();
