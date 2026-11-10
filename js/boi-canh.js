(() => {
 'use strict';
 const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
 const roots=[document.querySelector('.metrics'),...document.querySelectorAll('.chart-row:not(.chart-table-head):not(.chart-axis), [data-animate]')].filter(Boolean);
 const groups=roots.map(root=>({root,frame:0,started:false,visible:false,counters:[...root.querySelectorAll('[data-count]')].map(element=>({element,value:Number(element.dataset.count),format:new Intl.NumberFormat('vi-VN',{minimumFractionDigits:Number(element.dataset.decimals),maximumFractionDigits:Number(element.dataset.decimals)})})),bars:[...root.querySelectorAll('[data-bar]')]}));
 function paint(group,p){group.counters.forEach(({element,value,format})=>{element.textContent=format.format(p===1?value:value*p)});group.bars.forEach(bar=>{bar.style.transform='scaleX('+p+')'});}
 function finish(group){cancelAnimationFrame(group.frame);group.root.classList.remove('is-animating');paint(group,1);}
 function animate(group){cancelAnimationFrame(group.frame);group.started=true;if(motion.matches){finish(group);return;}group.root.classList.add('is-animating');paint(group,0);let start;function tick(now){if(start===undefined)start=now;const t=Math.min((now-start)/1800,1);paint(group,t===1?1:1-Math.pow(1-t,3));if(t<1)group.frame=requestAnimationFrame(tick);else group.root.classList.remove('is-animating');}group.frame=requestAnimationFrame(tick);}
 let observer;
 if('IntersectionObserver' in window){if(!motion.matches)groups.forEach(g=>paint(g,0));observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{const group=groups.find(g=>g.root===entry.target);group.visible=entry.isIntersecting;if(group.visible&&!group.started)animate(group);});},{threshold:0.25});groups.forEach(g=>observer.observe(g.root));}else groups.forEach(animate);
 document.querySelector('#replay').addEventListener('click',()=>groups.forEach(g=>{if(!observer||g.visible||motion.matches)animate(g);else{cancelAnimationFrame(g.frame);g.started=false;paint(g,0);}}));
 window.addEventListener('beforeprint',()=>groups.forEach(finish));
 document.addEventListener('visibilitychange',()=>{if(document.hidden)groups.filter(g=>g.started).forEach(finish);});
 if(motion.addEventListener)motion.addEventListener('change',()=>{if(motion.matches)groups.forEach(finish);});
})();
