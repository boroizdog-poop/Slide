(() => {
 const chain=document.querySelector('.summary-chain');if(!chain)return;
 const buttons=[...chain.querySelectorAll('button')];
 function select(index){buttons.forEach((button,i)=>{const open=i===index;button.setAttribute('aria-expanded',String(open));button.closest('li').classList.toggle('is-expanded',open);button.querySelector('.chain-detail').setAttribute('aria-hidden',String(!open))})}
 buttons.forEach((button,i)=>{button.addEventListener('click',()=>select(i));button.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight'||e.key==='ArrowDown')next=(i+1)%buttons.length;if(e.key==='ArrowLeft'||e.key==='ArrowUp')next=(i+buttons.length-1)%buttons.length;if(e.key==='Home')next=0;if(e.key==='End')next=buttons.length-1;if(next!==undefined){e.preventDefault();select(next);buttons[next].focus({preventScroll:true})}})});
 select(0);
})();
