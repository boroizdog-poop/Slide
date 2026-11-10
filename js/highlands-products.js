(() => {
 'use strict';
 const section=document.querySelector('.highlands-products');if(!section)return;
 const orbit=section.querySelector('.products-orbit'),pin=section.querySelector('.products-pin');
 const items=[...section.querySelectorAll('.wheel-product')],panels=[...section.querySelectorAll('.wheel-copy-panel')];
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const backgrounds=['campaign-coffee.jpg','campaign-tea.jpg','campaign-freeze-clean.jpg','campaign-bread.jpg','campaign-home.jpg'];
 const scene=document.createElement('div');scene.className='products-wheel-scene';scene.setAttribute('aria-hidden','true');
 backgrounds.forEach(src=>{const img=document.createElement('img');img.className='wheel-backdrop';img.src='assets/images/'+src;img.alt='';scene.append(img)});pin.prepend(scene);
 const rim=document.createElement('div');rim.className='wheel-rim';rim.setAttribute('aria-hidden','true');pin.append(rim);
 const brand=document.createElement('img');brand.src='assets/images/highlands-wheel-logo.png';brand.alt='Highlands Coffee';brand.className='products-brand';section.querySelector('.products-heading').prepend(brand);
 const pagination=document.createElement('div');pagination.className='wheel-pagination';pagination.innerHTML='<strong>01</strong><span>/ 05</span>';pin.append(pagination);
 const controls=document.createElement('nav');controls.className='wheel-controls';controls.setAttribute('aria-label','Chọn nhóm sản phẩm');controls.innerHTML='<button type="button" aria-label="Sản phẩm trước">←</button><button type="button" aria-label="Sản phẩm tiếp theo">→</button>';pin.append(controls);
 const buttons=[...controls.querySelectorAll('button')],backdrops=[...scene.children];
 const contact=document.createElement('div');contact.className='product-contact-shadow';contact.setAttribute('aria-hidden','true');orbit.prepend(contact);
 let geometry,active=0,position=0,frame=0,settleTimer=0;
 const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
 function draw(){
   if(!geometry)return;
   const {w,h,height,width,radius,cx,cy,step}=geometry;
   items.forEach((item,i)=>{
     let delta=i-position;
     // The neighbouring products share the exact same circle and pivot.
     while(delta>items.length/2)delta-=items.length;
     while(delta<-items.length/2)delta+=items.length;
     const angle=delta*step;
     const x=cx-radius*Math.cos(angle),y=cy+radius*Math.sin(angle);const width=item.offsetWidth,height=item.offsetHeight;
     item.style.transform='translate3d('+(x-width/2)+'px,'+(y-height/2)+'px,0) rotate('+(-angle*180/Math.PI)+'deg) scale('+(1-Math.min(1,Math.abs(delta))*.5)+')';
     item.style.opacity=String(clamp((.9-Math.abs(delta))/.35,0,1));item.style.visibility=Math.abs(delta)>=.9?'hidden':'visible';
     item.style.zIndex=String(10-Math.round(Math.abs(delta)*3));
     item.dataset.orbitAngle=String(angle);item.dataset.orbitRadius=String(radius);
   });
   rim.style.setProperty('--wheel-turn',(-position*step*180/Math.PI)+'deg');
   const resting=items[Math.round(position)];const baseX=cx-radius;const baseY=cy+resting.offsetHeight/2-5;const isBread=Math.round(position)===3;contact.style.width=(resting.offsetWidth*(isBread?.85:.68))+'px';contact.style.left=(baseX+(isBread?-resting.offsetWidth*.13:0))+'px';contact.style.top=baseY+'px';contact.style.opacity=String(.55*(1-Math.min(1,Math.abs(position-Math.round(position))*2)));
 } function go(index){index=clamp(index,0,items.length-1);cancelAnimationFrame(frame);clearTimeout(settleTimer);active=index;panels.forEach((panel,i)=>{panel.classList.toggle('is-active',i===active);panel.setAttribute('aria-hidden',String(i!==active));items[i].setAttribute('aria-hidden',String(i!==active));backdrops[i].classList.toggle('is-active',i===active)});section.dataset.activeProduct=String(active);pagination.querySelector('strong').textContent=String(active+1).padStart(2,'0');buttons[0].disabled=active===0;buttons[1].disabled=active===items.length-1;
 const start=position,time=performance.now();
 function animate(now){const t=reduced.matches?1:clamp((now-time)/900,0,1);const eased=t*t*(3-2*t);position=start+(active-start)*eased;draw();if(t<1)frame=requestAnimationFrame(animate)}
 frame=requestAnimationFrame(animate);
 settleTimer=setTimeout(()=>{cancelAnimationFrame(frame);position=active;draw()},reduced.matches?0:940);
 }
 document.addEventListener('fullscreenchange',()=>measure());
 function measure(){

   const w=orbit.clientWidth,h=orbit.clientHeight,compact=w<=900;
   // Desktop size follows width; extra fullscreen height reveals space instead of enlarging the cup.
   const fullscreen=Boolean(document.fullscreenElement)||(Math.abs(innerHeight-screen.height)<=12&&Math.abs(innerWidth-screen.width)<=12);
   const boost=fullscreen?1.06:1;
   const height=compact?Math.min(h*.57*boost,740):Math.min(w*.385*boost,h*.80),width=height*.6;
   const radius=compact?Math.min(w*.44,h*.95):w*.44,cx=w*(compact?.54:.59)+radius,cy=h*(compact?.60:.48);
   geometry={w,h,height,width,radius,cx,cy,step:Math.PI*56/180};
   items.forEach((item,i)=>{const img=item.querySelector('img');const ratio=img?.naturalWidth?img.naturalWidth/img.naturalHeight:.6;const size=i===3?.87:1;const iw=Math.min(height*ratio,w*(compact?.78:.54))*size;item.style.width=iw+'px';item.style.height=(iw/ratio)+'px'});
   rim.style.left=cx+'px';rim.style.top=cy+'px';rim.style.width=radius*2+'px';rim.style.height=radius*2+'px';
   draw();
 } buttons.forEach((button,i)=>button.addEventListener('click',()=>go(active+(i?1:-1))));
 items.forEach(item=>item.querySelector('img')?.addEventListener('load',measure));addEventListener('resize',measure);reduced.addEventListener('change',()=>go(active));if('ResizeObserver'in window)new ResizeObserver(measure).observe(orbit);document.fonts?.ready.then(measure);measure();go(0);
})();













