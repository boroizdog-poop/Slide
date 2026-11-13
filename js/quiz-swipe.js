(() => {
  'use strict';
  const cover=document.querySelector('.quiz-entry'),quiz=document.querySelector('.coffee-quiz');if(!cover||!quiz)return;
  const ticket=cover.querySelector('.entry-ticket'),reduced=matchMedia('(prefers-reduced-motion: reduce)');
  quiz.hidden=true;cover.hidden=false;
  let started=false,frame=0,layer=null,done=false,hoverFrame=0;
  const hover=matchMedia('(hover: hover) and (pointer: fine)');
  function resetHover(){cancelAnimationFrame(hoverFrame);ticket.classList.remove('is-hovering');ticket.style.removeProperty('transform');}
  ticket.addEventListener('pointermove',event=>{
    if(started||reduced.matches||!hover.matches)return;
    const rect=ticket.getBoundingClientRect(),px=Math.max(0,Math.min(1,(event.clientX-rect.left)/rect.width)),py=Math.max(0,Math.min(1,(event.clientY-rect.top)/rect.height));
    cancelAnimationFrame(hoverFrame);hoverFrame=requestAnimationFrame(()=>{
      ticket.style.setProperty('--pointer-x',px*100+'%');ticket.style.setProperty('--pointer-y',py*100+'%');ticket.classList.add('is-hovering');
      ticket.style.transform=`perspective(1400px) translate3d(${(px-.5)*10}px,${(py-.5)*7-5}px,12px) rotateX(${(.5-py)*9}deg) rotateY(${(px-.5)*12}deg) rotateZ(-5deg)`;
    });
  });
  ticket.addEventListener('pointerleave',resetHover);
  ticket.addEventListener('blur',resetHover);
  const finish=()=>{if(done)return;done=true;cancelAnimationFrame(frame);layer?.getAnimations({subtree:true}).forEach(a=>a.cancel());layer?.remove();cover.hidden=true;quiz.hidden=false;window.scrollTo(0,0);quiz.querySelector('.quiz-question').focus({preventScroll:true});};
  reduced.addEventListener('change',()=>{if(reduced.matches){resetHover();if(started)finish();}});
  addEventListener('pagehide',()=>{cancelAnimationFrame(frame);layer?.remove();});
  ticket.addEventListener('click',()=>{
    if(started)return;started=true;resetHover();ticket.disabled=true;
    if(reduced.matches){finish();return;}
    try{start();}catch(error){finish();console.error(error);}
  });
  function start(){
    const w=innerWidth,h=innerHeight,mobile=w<700,width=ticket.offsetWidth,height=ticket.offsetHeight;
    const origin=ticket.getBoundingClientRect();
    layer=document.createElement('div');layer.className='swipe-stage';layer.setAttribute('role','region');layer.setAttribute('aria-label','Quẹt vé vào quiz');
    layer.innerHTML='<div class="swipe-camera"><div class="swipe-ground-shadow"></div><div class="swipe-paper" aria-hidden="true"></div></div><div class="swipe-cream"></div><p class="swipe-caption" role="status" aria-live="polite">Một chiếc vé xinh đang tới…</p><button class="swipe-skip" type="button">Bỏ qua ↗</button>';
    document.body.append(layer);layer.querySelector('.swipe-skip').addEventListener('click',finish);layer.querySelector('.swipe-skip').focus({preventScroll:true});
    const camera=layer.querySelector('.swipe-camera'),paper=layer.querySelector('.swipe-paper'),caption=layer.querySelector('.swipe-caption'),cream=layer.querySelector('.swipe-cream');
    const terminal=cover.querySelector('.entry-terminal').cloneNode(true);terminal.classList.add('swipe-machine');
    terminal.querySelector('.entry-terminal-screen').innerHTML='<span class="machine-face"><i></i><b></b><i></i></span><span class="entry-terminal-message">Đưa vé lại đây!</span><span class="entry-scan-line"></span>';
    terminal.querySelector('.entry-terminal-top').insertAdjacentHTML('afterbegin','<span class="machine-ear machine-ear-left"></span><span class="machine-ear machine-ear-right"></span>');camera.prepend(terminal);
    const msg=terminal.querySelector('.entry-terminal-message'),machineW=mobile?215:325,machineX=w*(mobile?.61:.65),machineY=h*(mobile?.59:.57);
    terminal.querySelector('.entry-terminal-screen').insertAdjacentHTML('beforebegin','<span class="swipe-contact-rail" aria-hidden="true"></span>');
    Object.assign(terminal.style,{left:machineX+'px',top:machineY+'px',width:machineW+'px'});
    // Separate the rear casing from the opaque front lip: paper runs between them.
    const rear=terminal.cloneNode(true);rear.classList.add('swipe-machine-rear');camera.insertBefore(rear,paper);
    terminal.classList.add('swipe-machine-front');
    const rail=terminal.querySelector('.swipe-contact-rail'),railTop=rail.offsetTop,railHeight=rail.offsetHeight,totalHeight=terminal.offsetHeight;
    rear.style.clipPath=`inset(-35px -35px ${Math.max(0,totalHeight-railTop-railHeight)}px -35px)`;
    terminal.style.clipPath=`inset(${railTop+railHeight*.66}px -45px -55px -45px)`;
    const facets=[],count=mobile?22:30,step=width/count;
    for(let i=0;i<count;i++){
      const strip=document.createElement('div');strip.className='swipe-facet';Object.assign(strip.style,{width:step+.6+'px',height:height+'px'});
      const front=document.createElement('div');front.className='swipe-facet-front';const print=ticket.cloneNode(true);print.removeAttribute('aria-labelledby');print.querySelectorAll('[id]').forEach(e=>e.removeAttribute('id'));print.disabled=true;print.classList.add('swipe-print');
      Object.assign(print.style,{left:-i*step+'px',top:'0',width:width+'px',height:height+'px'});
      const shade=document.createElement('span');shade.className='swipe-shade';front.append(print,shade);const back=document.createElement('div');back.className='swipe-facet-back';strip.append(front,back);paper.append(strip);facets.push({strip,shade});
    }
    function bend(time,strength){let x=0,z=0;const points=[],angles=[];for(let i=0;i<count;i++){const u=i/count,a=(Math.sin(u*Math.PI*1.1-.5)*.85+Math.pow(u,5)*.55+Math.sin(u*5-time*.002)*.07)*strength;angles.push(a);points.push({x,z});x+=Math.cos(a)*step;z+=Math.sin(a)*step;}facets.forEach(({strip,shade},i)=>{strip.style.transform=`translate3d(${points[i].x-x/2}px,${-height/2}px,${points[i].z-z/2}px) rotateY(${-angles[i]*180/Math.PI}deg)`;shade.style.background=`rgba(82,40,52,${.02+Math.max(0,Math.sin(angles[i]+.3))*.16})`;});}
    const scale=Math.min(w*.76/width,h*.37/height),startX=origin.left+origin.width/2,startY=origin.top+origin.height/2;
    const aimX=machineX-width*scale*.27;
    const slotY=machineY-totalHeight*.25+railTop+railHeight*.5;
    const aimY=slotY-height*scale*1.05*.5+8;
    const slotSlope=Math.tan(-3*Math.PI/180);
    const assets=['highlands-latte.svg','heart.svg','lucky-star.svg','voucher.svg','coffee-beans.svg','bow.svg','daisy.svg'];
    let burst1=false,burst2=false,burst3=false,revealed=false,lastSpray=0,particleIndex=0;
    function burst(n,final=false){const area=terminal.querySelector('.swipe-contact-rail').getBoundingClientRect(),x=area.left+area.width*(.35+Math.random()*.25),y=area.top+area.height*.5;for(let i=0;i<n;i++){const img=document.createElement('img');img.className='swipe-particle';img.src='assets/icons/quiz/'+assets[particleIndex++%assets.length];img.alt='';img.style.left=x+'px';img.style.top=y+'px';img.style.width=(mobile?25:33)+Math.random()*14+'px';layer.append(img);const dx=(final?(Math.random()-.5)*2:-.45-Math.random())*(mobile?200:390),rise=45+Math.random()*(final?180:110),drop=110+Math.random()*180,turn=(Math.random()-.5)*220;const frames=Array.from({length:41},(_,j)=>{const p=j/40;return{offset:p,transform:`translate(calc(-50% + ${dx*p}px),calc(-50% + ${-4*rise*p*(1-p)+drop*p*p}px)) rotate(${turn*p}deg) scale(${.5+.5*Math.min(1,p*7)})`,opacity:Math.min(1,p*10)*Math.min(1,(1-p)*4)}});img.animate(frames,{duration:1100+Math.random()*450,easing:'linear',fill:'both'}).finished.then(()=>img.remove()).catch(()=>{});}}
    const ease=t=>{t=Math.max(0,Math.min(1,t));return t*t*(3-2*t);},mix=(a,b,t)=>a+(b-a)*t;
    // A separate welcome moment after the scan.
    const welcome=document.createElement('div');welcome.className='swipe-welcome';welcome.setAttribute('aria-hidden','true');
    welcome.innerHTML='<div class="swipe-welcome-note"><img src="assets/icons/quiz/bow.svg" alt=""><span>V\u00e9 xinh \u0111\u00e3 s\u1eb5n s\u00e0ng!</span><strong>M\u00ecnh v\u00e0o ch\u01a1i nh\u00e9 \u2661</strong></div>';
    ['daisy.svg','heart.svg','lucky-star.svg','bow.svg','heart.svg','daisy.svg'].forEach((asset,i)=>{const sticker=document.createElement('img');sticker.src='assets/icons/quiz/'+asset;sticker.alt='';sticker.className='swipe-welcome-sticker';const angle=i*Math.PI/3-.3;sticker.style.setProperty('--dx',Math.cos(angle)*(mobile?135:285)+'px');sticker.style.setProperty('--dy',Math.sin(angle)*(mobile?195:225)+'px');sticker.style.setProperty('--turn',(i%2?16:-16)+'deg');welcome.append(sticker);});
    layer.append(welcome);
    let begin=null;
    function draw(now){
      if(done)return;if(begin===null)begin=now;const t=now-begin;
      const enter=ease(t/1100);let x=mix(startX,aimX-95,enter),y=mix(startY,aimY+(aimX-95-machineX)*slotSlope,enter),s=mix(1,scale*1.05,enter),rx=0,ry=mix(0,-4,enter),rz=mix(-5,-3,enter),z=0,strength=mix(.01,.035,enter);
      let machineTilt=-3, machineLift=mix(210,0,enter);
      const contact=t>1400&&t<4500;
      if(t>1100&&t<5300){const p=Math.min(1,(t-1100)/3400),travel=.88*p+.12*ease(p);x=aimX+mix(-95,165,travel);y=aimY+(x-machineX)*slotSlope;rx=0;ry=-4;rz=-3;strength=.035;
        if(t>4800){const lift=ease((t-4800)/500);y-=38*lift;ry=mix(-4,0,lift);rz=mix(-3,-5,lift);strength=mix(.035,.02,lift);}
      }
      const close=ease((t-850)/1000)*(1-ease((t-5300)/1000)),zoom=1+close*(mobile?.22:.36),focusX=machineX-w*.12,focusY=machineY-h*.12;
      const angleProgress=ease((t-1400)/3200),yaw=close*mix(-11,8,angleProgress),pitch=close*mix(8,-5,angleProgress);
      const pulse=Math.exp(-Math.pow((t-1700)/220,2))+Math.exp(-Math.pow((t-3250)/270,2));
      const shakeX=contact?Math.sin(t*.075)*pulse*(mobile?1.5:2.5):0,shakeY=contact?Math.sin(t*.095)*pulse*1.5:0;
      camera.style.transformOrigin=`${focusX}px ${focusY}px`;camera.style.transform=`perspective(1800px) translate3d(${(w*.5-focusX)*close+shakeX}px,${(h*.48-focusY)*close+shakeY}px,0) rotateX(${pitch}deg) rotateY(${yaw}deg) rotateZ(${shakeX*.12}deg) scale(${zoom})`;
      if(t>1400&&!burst1){burst1=true;layer.classList.add('is-reading');msg.textContent='Đang đọc vé…';caption.textContent='Một lượt quẹt, sẵn sàng vào chơi!';}
      if(t>3000&&!burst2){burst2=true;msg.textContent='Đang xác nhận…';}
      if(contact&&t-lastSpray>85){lastSpray=t;burst(mobile?3:4);}
      if(t>=4800&&!burst3){burst3=true;layer.classList.remove('is-reading');layer.classList.add('is-scanned');msg.textContent='Tít! Hợp lệ ✓';caption.textContent='Quét được rồi! Mời bạn vào ☕';burst(26,true);}
      if(t>=5300){const p=ease((t-5300)/650);x=aimX+165;y=aimY+(x-machineX)*slotSlope-38-60*p;rx=0;ry=0;rz=mix(-5,5,p);s=scale*1.05*(1-.25*p);strength=.02*(1-p);paper.style.opacity=String(1-p);terminal.style.opacity=String(1-p);caption.style.opacity=String(1-p);cream.style.opacity=String(p);welcome.classList.add('is-visible');}
      if(t>=6150)welcome.classList.add('is-opening');
      bend(t,strength);paper.style.transform=`translate3d(${x}px,${y}px,${z}px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg) scale(${s})`;
      terminal.style.transform=`translate(-50%,-25%) translateY(${machineLift}px) rotateZ(${machineTilt}deg)`;terminal.style.opacity=t<5300?String(enter):terminal.style.opacity;
      rear.style.transform=terminal.style.transform;rear.style.opacity=terminal.style.opacity;
      if(t>=6350&&!revealed){revealed=true;cover.hidden=true;quiz.hidden=false;window.scrollTo(0,0);camera.style.visibility='hidden';layer.style.background='transparent';layer.querySelector('.swipe-skip').hidden=true;quiz.animate([{opacity:0,transform:'translateY(18px) scale(.98)'},{opacity:1,transform:'none'}],{duration:550,easing:'cubic-bezier(.2,.7,.3,1)'});}
      if(t>=6350){cream.style.opacity=String(1-ease((t-6350)/550));welcome.style.opacity=String(1-ease((t-6350)/400));}
      if(t>=6950){finish();return;}frame=requestAnimationFrame(draw);
    }
    frame=requestAnimationFrame(draw);
  }
})();
