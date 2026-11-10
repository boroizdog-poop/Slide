(() => {
 'use strict';
 const section=document.querySelector('.highlands-insights');if(!section)return;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const slides=[...section.querySelectorAll('.highlands-insight-slide')];
 if(!('IntersectionObserver'in window)||reduced.matches)return;
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.18});
 section.classList.add('insights-motion');slides.forEach(slide=>observer.observe(slide));
 reduced.addEventListener('change',()=>{if(reduced.matches){section.classList.remove('insights-motion');observer.disconnect()}});
})();
