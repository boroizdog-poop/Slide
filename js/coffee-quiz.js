(() => {
  'use strict';
  const root = document.querySelector('.coffee-quiz');
  if (!root) return;
  const questions = [
    {text:'Thương hiệu cà phê hợp tác với MoMo tung mã giảm giá độc quyền. Lợi ích nổi bật nhất là gì?', answers:['Giảm thời gian pha chế đồ uống.','Tiết kiệm toàn bộ chi phí quảng cáo.','Tiếp cận khách hàng mới qua hệ sinh thái ví.','Không cần chăm sóc khách hàng khác.'], correct:2, why:'Hệ sinh thái MoMo giúp thương hiệu tiếp cận thêm khách hàng.'},
    {text:'Voucher Highlands giảm 25.000 đồng qua ví điện tử chỉ dùng trong 3 ngày. Doanh nghiệp muốn thúc đẩy hành vi nào?', answers:['Ra quyết định mua sớm.','Thay đổi thương hiệu yêu thích.','Nhận diện bao bì sản phẩm.','Sử dụng tiền mặt.'], correct:0, why:'Thời hạn ngắn tạo cảm giác cấp bách, thúc đẩy quyết định mua sớm.'},
    {text:'Chỉ số nào phản ánh trực tiếp nhất việc chuyển đổi thành mua hàng trong chiến dịch marketing qua ví điện tử?', answers:['Lượt chia sẻ bài đăng trên mạng xã hội.','Lượt theo dõi fanpage thương hiệu.','Lượt hiển thị banner quảng cáo.','Giao dịch thành công qua chương trình ưu đãi.'], correct:3, why:'Giao dịch thành công cho biết ưu đãi đã chuyển thành hành vi mua hàng.'}
  ];
  const question = root.querySelector('.quiz-question');
  const answers = root.querySelector('.quiz-answers');
  const label = root.querySelector('.quiz-label');
  const feedback = root.querySelector('.quiz-feedback');
  const action = root.querySelector('.quiz-action');
  const stamps = [...root.querySelectorAll('.quiz-stamp')];
  let index=0, selected=null, revealed=false, score=0;
  const earned=[false,false,false];
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const celebrationAssets=['voucher.svg','coffee-ticket.svg','highlands-latte.svg','highlands-matcha.svg','receipt.svg','lucky-star.svg','heart.svg','bow.svg'];
  celebrationAssets.forEach(name=>{const img=new Image();img.src='assets/icons/quiz/'+name;img.decode().catch(()=>{})});
  const cannonImage=new Image();cannonImage.src='assets/icons/quiz/confetti-cannon.svg';cannonImage.decode().catch(()=>{});
  let celebration=null;
  function clearCelebration(){
    if(!celebration) return;
    celebration.getAnimations({subtree:true}).forEach(animation=>animation.cancel());
    celebration.remove();celebration=null;
  }
  function celebrate(){
    clearCelebration();
    if(reduced.matches) return;
    const layer=document.createElement('div');
    layer.className='quiz-celebration';layer.setAttribute('aria-hidden','true');
    document.body.append(layer);celebration=layer;
    const width=innerWidth, height=innerHeight;
    const count=width<600?64:112;
    const animations=[];
    const fragment=document.createDocumentFragment();
    const particles=[];
    const cannonSize=width<600?84:116;
    const inset=width<600?8:24, bottom=width<600?12:18;
    const originX=inset+cannonSize*.81;
    const originY=height-bottom-cannonSize*.91;
    for(const side of [1,-1]){
      const cannon=document.createElement('div');cannon.className='quiz-cannon'+(side===-1?' quiz-cannon-right':'');
      cannon.style.width=cannonSize+'px';cannon.style.height=cannonSize*1.2+'px';cannon.style.bottom=bottom+'px';cannon.style[side===1?'left':'right']=inset+'px';
      const image=document.createElement('img');image.src=cannonImage.src;image.alt='';cannon.append(image);fragment.append(cannon);
      const entrance=cannon.animate([{opacity:0,transform:'translate3d(0,65px,0) scale(.5)'},{opacity:1,transform:'translate3d(0,-7px,0) scale(1.04)',offset:.72},{opacity:1,transform:'translate3d(0,0,0) scale(1)'}],{duration:540,easing:'cubic-bezier(.16,1,.3,1)',fill:'both'});
      animations.push(entrance.finished.catch(()=>{}));
      const exit=cannon.animate([{opacity:1,transform:'translate3d(0,0,0) scale(1)'},{opacity:0,transform:'translate3d(0,42px,0) scale(.8)'}],{duration:450,delay:6700,easing:'ease-in',fill:'forwards'});
      animations.push(exit.finished.catch(()=>{}));
    }
    for(let i=0;i<count;i++){
      const side=i%2===0?1:-1;
      const img=document.createElement('img');img.alt='';img.src='assets/icons/quiz/'+celebrationAssets[i%celebrationAssets.length];img.className='quiz-confetti';
      const size=(width<600?23:27)+Math.random()*23;
      img.style.width=size+'px';img.style.height=size+'px';img.style.left=((side===1?originX:width-originX)-size/2)+'px';img.style.top=(originY-size/2)+'px';
      fragment.append(img);
      // Stratified fan: neighbouring stickers take different lanes and heights.
      const lane=(Math.floor(i/2)%14+Math.random()*.7)/14;
      const travel=width*(.12+lane*.86)*side;
      const peak=height*(.32+Math.random()*.53);
      const end=height-originY+size*2;
      const gravity=Math.pow(Math.sqrt(peak)+Math.sqrt(peak+end),2);
      const launch=2*Math.sqrt(gravity*peak);
      const turn=(Math.random()-.5)*230;
      const phase=Math.random()*Math.PI*2;
      const frames=Array.from({length:65},(_,frame)=>{
        const t=frame/64;
        const drift=Math.sin(t*Math.PI*3+phase)*16*Math.sin(t*Math.PI);
        const x=travel*(1-Math.pow(1-t,1.25))+drift;
        const y=-launch*t+gravity*t*t;
        const rotate=turn*t+Math.sin(t*Math.PI*3+phase)*12;
        const scale=.65+.35*Math.min(1,t/.12);
        return {offset:t,transform:`translate3d(${x.toFixed(2)}px,${y.toFixed(2)}px,0) rotate(${rotate.toFixed(2)}deg) scale(${scale.toFixed(3)})`,opacity:Math.min(1,t/.055)*Math.min(1,(1-t)/.18)};
      });
      particles.push({img,frames,delay:500+Math.floor(i/28)*560+Math.floor((i%28)/2)*28});
    }
    layer.append(fragment);
    for(const {img,frames,delay} of particles){
      const animation=img.animate(frames,{duration:3500+Math.random()*1250,delay,easing:'linear',fill:'both'});
      animations.push(animation.finished.catch(()=>{}));
    }
    Promise.all(animations).then(()=>{if(celebration===layer){layer.remove();celebration=null}});
  }
  reduced.addEventListener('change',()=>{if(reduced.matches)clearCelebration()});
  addEventListener('pagehide',clearCelebration);
  function render(focus=false) {
    selected=null; revealed=false;
    root.classList.remove('has-feedback');
    label.textContent=`CÂU HỎI ${String(index+1).padStart(2,'0')} / 03`;
    question.textContent=questions[index].text;
    feedback.textContent=''; action.textContent='Chốt đáp án'; action.disabled=true;
    answers.replaceChildren();
    questions[index].answers.forEach((text,i)=>{
      const button=document.createElement('button'); button.type='button'; button.className='quiz-answer'; button.setAttribute('aria-pressed','false');
      const letter=document.createElement('b'); letter.textContent=String.fromCharCode(65+i)+'.';
      const copy=document.createElement('span'); copy.textContent=text; button.append(letter,copy);
      button.addEventListener('click',()=>{
        if(revealed) return;
        selected=i;
        [...answers.children].forEach((item,j)=>item.setAttribute('aria-pressed',String(i===j)));
        action.disabled=false;
      }); answers.append(button);
    });
    stamps.forEach((stamp,i)=>{
      stamp.classList.toggle('is-current',i===index); stamp.classList.toggle('is-done',earned[i]);
      stamp.classList.toggle('is-missed',i<index&&!earned[i]);
      stamp.setAttribute('aria-label',`Câu ${i+1}${earned[i]?' — đã nhận tem':i<index?' — chưa nhận tem':i===index?' — đang trả lời':''}`);
      if(i===index) stamp.setAttribute('aria-current','step'); else stamp.removeAttribute('aria-current');
    });
    if(focus) question.focus({preventScroll:true});
  }
  action.addEventListener('click',()=>{
    if(!revealed){
      if(selected===null) return;
      revealed=true;
      const q=questions[index], correct=selected===q.correct;
      earned[index]=correct;
      if(correct) score++;
      [...answers.children].forEach((button,i)=>{button.disabled=true; button.classList.toggle('is-correct',i===q.correct);button.classList.toggle('is-wrong',i===selected&&!correct)});
      root.classList.add('has-feedback');
      feedback.textContent=`${correct?'Chính xác!':'Đáp án đúng: '+String.fromCharCode(65+q.correct)+'.'} ${q.why}`;
      stamps[index].classList.remove('is-current');
      stamps[index].classList.toggle('is-done',correct);
      stamps[index].classList.toggle('is-missed',!correct);
      stamps[index].setAttribute('aria-label',`Câu ${index+1} — ${correct?'đã nhận tem':'chưa nhận tem'}`);
      action.textContent=index===2?'Xem kết quả':'Câu tiếp theo';
    }else if(index<2){index++;render(true)}else{
      root.querySelector('.quiz-card').hidden=true;
      root.querySelector('.quiz-bottom').hidden=true;
      const result=root.querySelector('.quiz-result'); result.hidden=false;
      result.querySelector('.quiz-score').textContent=`${score} / 3`;
      result.querySelector('.quiz-score').setAttribute('aria-label',`${score} trên 3 tem cà phê`);
      result.querySelector('h3').textContent=score===3?'Đủ 3 tem rồi!':'Hoàn thành mini game!';
      result.querySelector('.quiz-result-message').textContent=score===3?'Bạn đã sưu tập đủ 3 tem cà phê!':`Bạn nhận được ${score} tem cà phê. Chơi lại để sưu tập đủ 3 tem nhé!`;
      root.classList.toggle('is-perfect',score===3);
      result.querySelector('h3').focus({preventScroll:true});
      stamps.forEach((s,i)=>{s.classList.remove('is-current');s.classList.toggle('is-done',earned[i]);s.classList.toggle('is-missed',!earned[i]);s.removeAttribute('aria-current')});
      if(score===3)celebrate();
    }
  });
  root.querySelector('[data-quiz-retry]').addEventListener('click',()=>{
    clearCelebration();earned.fill(false);root.classList.remove('is-perfect');index=0;score=0;root.querySelector('.quiz-result').hidden=true;root.querySelector('.quiz-card').hidden=false;root.querySelector('.quiz-bottom').hidden=false;render(true);
  });
  render();
})();
