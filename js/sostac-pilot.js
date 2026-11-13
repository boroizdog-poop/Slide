(() => {
  'use strict';
  const scene = document.querySelector('.sostac-space');
  if (!scene) return;
  const reader = scene.querySelector('.space-copy');
  const heading = scene.querySelector('.space-heading');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const pilot = document.createElement('div');
  pilot.className = 'sostac-pilot'; pilot.hidden = true; reader.append(pilot);
  const arrow = back => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" ${back ? 'transform="rotate(180 12 12)"' : ''}/></svg>`;
  const ticks = '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="m13 25 8 8 15-18"/></svg>';
  const qr = '<svg class="pilot-qr" viewBox="0 0 100 100" aria-hidden="true"><g fill="currentColor"><path fill-rule="evenodd" d="M5 5h32v32H5zm6 6v20h20V11zM63 5h32v32H63zm6 6v20h20V11zM5 63h32v32H5zm6 6v20h20V69z"/><path d="M17 17h8v8h-8zm58 0h8v8h-8zM17 75h8v8h-8zM45 5h8v16h-8zm0 24h8v16h-8zM5 45h20v8H5zm28 0h12v8H33zm28 0h16v16H61zm24 0h10v8H85zM45 61h8v16h-8zm16 8h8v26h-8zm16-4h18v8H77zm0 16h8v14h-8zm10 6h8v8h-8zm-42-2h8v10h-8z"/></g></svg>';
  const cups = "<svg class=\"pilot-cups\" viewBox=\"0 0 280 210\" aria-hidden=\"true\"><defs><linearGradient id=\"hc-drink\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\".25\"><stop stop-color=\"#6c3924\"/><stop offset=\".32\" stop-color=\"#af7244\"/><stop offset=\".65\" stop-color=\"#c08a57\"/><stop offset=\"1\" stop-color=\"#73402b\"/></linearGradient><linearGradient id=\"hc-glass\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\"><stop stop-color=\"#fff\" stop-opacity=\".55\"/><stop offset=\".15\" stop-color=\"#fff\" stop-opacity=\".04\"/><stop offset=\".8\" stop-color=\"#fff\" stop-opacity=\".08\"/><stop offset=\"1\" stop-color=\"#fff\" stop-opacity=\".38\"/></linearGradient><linearGradient id=\"hc-foam\" x2=\"0\" y2=\"1\"><stop stop-color=\"#efd0a0\"/><stop offset=\"1\" stop-color=\"#c58a51\"/></linearGradient></defs><g class=\"highlands-cup-large\"><ellipse cx=\"81\" cy=\"196\" rx=\"43\" ry=\"6\" fill=\"#79523c\" opacity=\".12\"/><path d=\"M25 43 37 179q1 13 44 14t44-14l12-136Z\" fill=\"url(#hc-drink)\" stroke=\"#e9dbcb\" stroke-width=\"1.5\"/><path d=\"m29 61 4 28q47 14 96 0l4-28Z\" fill=\"#512e24\" opacity=\".35\"/><ellipse cx=\"81\" cy=\"48\" rx=\"54\" ry=\"15\" fill=\"url(#hc-foam)\"/><ellipse cx=\"81\" cy=\"46\" rx=\"55\" ry=\"16\" fill=\"#d4a169\" stroke=\"#f2dfc7\" stroke-width=\"2\"/><g fill=\"#fff9ed\" stroke=\"#fffcf5\" stroke-width=\"1\" fill-opacity=\".56\"><path d=\"m39 36 15-8 15 11-16 14-16-6Z\"/><path d=\"m66 27 17-6 14 13-9 14-19-5Z\"/><path d=\"m92 31 20-2 10 13-15 11-16-7Z\"/><path d=\"m53 48 15-7 14 12-16 11-14-6Z\"/></g><path d=\"M25 43 37 179q1 13 44 14t44-14l12-136\" fill=\"url(#hc-glass)\" stroke=\"#e9dbcb\" stroke-width=\"1.5\"/><path d=\"m35 66 8 103\" stroke=\"#fff\" stroke-opacity=\".32\" stroke-width=\"3\" stroke-linecap=\"round\"/><g fill=\"#fff\" opacity=\".38\"><circle cx=\"44\" cy=\"85\" r=\"1.5\"/><circle cx=\"116\" cy=\"98\" r=\"2\"/><circle cx=\"108\" cy=\"169\" r=\"1.4\"/><circle cx=\"54\" cy=\"159\" r=\"1.6\"/><circle cx=\"121\" cy=\"76\" r=\"1.2\"/></g><image href=\"assets/images/highlands-wheel-logo.png\" x=\"42\" y=\"99\" width=\"78\" height=\"60\"/><circle cx=\"124\" cy=\"181\" r=\"17\" fill=\"#fffaf3\" stroke=\"#dfc5b3\"/><text x=\"124\" y=\"190\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"26\" font-weight=\"700\" fill=\"#9b2d40\">L</text></g><g class=\"highlands-cup-small\" transform=\"translate(153 51) scale(.76)\"><ellipse cx=\"81\" cy=\"196\" rx=\"43\" ry=\"6\" fill=\"#79523c\" opacity=\".12\"/><path d=\"M25 43 37 179q1 13 44 14t44-14l12-136Z\" fill=\"url(#hc-drink)\" stroke=\"#e9dbcb\" stroke-width=\"1.5\"/><ellipse cx=\"81\" cy=\"46\" rx=\"55\" ry=\"16\" fill=\"#d4a169\" stroke=\"#f2dfc7\" stroke-width=\"2\"/><g fill=\"#fff9ed\" stroke=\"#fffcf5\" stroke-width=\"1\" fill-opacity=\".6\"><path d=\"m39 36 15-8 15 11-16 14-16-6Z\"/><path d=\"m66 27 17-6 14 13-9 14-19-5Z\"/><path d=\"m92 31 20-2 10 13-15 11-16-7Z\"/></g><path d=\"M25 43 37 179q1 13 44 14t44-14l12-136\" fill=\"url(#hc-glass)\" stroke=\"#e9dbcb\" stroke-width=\"1.5\"/><path d=\"m35 66 8 103\" stroke=\"#fff\" stroke-opacity=\".32\" stroke-width=\"3\" stroke-linecap=\"round\"/><image href=\"assets/images/highlands-wheel-logo.png\" x=\"42\" y=\"99\" width=\"78\" height=\"60\"/><circle cx=\"124\" cy=\"181\" r=\"19\" fill=\"#fffaf3\" stroke=\"#dfc5b3\"/><text x=\"124\" y=\"191\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"29\" font-weight=\"700\" fill=\"#9b2d40\">S</text></g></svg>";
  const singleCup = cups.replace('viewBox="0 0 280 210"', 'viewBox="10 0 145 210"');
  const beats = [
    ['Khách hàng chọn Phin Sữa Đá cỡ L tại cửa hàng áp dụng.', 'Highlands tiếp nhận đơn hàng và hướng dẫn tại quầy.'],
    ['Mở MoMo, quét mã QR thanh toán tại quầy.', 'Kết nối đơn hàng tại Highlands với thanh toán trên ứng dụng.'],
    ['Nhập VTSCF29 hoặc VTSCF35 theo giá tại cửa hàng.', 'Dùng đúng mã để được ghi nhận ưu đãi.'],
    ['Chọn Ví Trả Sau làm nguồn tiền thanh toán.', 'Tài khoản cần đủ điều kiện sử dụng dịch vụ.'],
    ['Xác nhận thanh toán và kiểm tra trạng thái giao dịch.', 'MoMo xử lý thanh toán và ghi nhận giao dịch hợp lệ.'],
    ['Nhận một Phin Sữa Đá L và một Phin Sữa Đá S tặng kèm.', 'Highlands hoàn tất đơn hàng; khách kiểm tra đủ sản phẩm.']
  ];
  // Headings transcribed from section 3.3 of the supplied report.
  const sections = [
    {title:'3.3.1. Tìm hiểu bối cảnh và các điều kiện hình thành chiến dịch (Situation)', photo:'store', alt:'Cửa hàng Highlands Coffee', points:[
      'F&B có tần suất mua thường xuyên; giá, sự thuận tiện và ưu đãi ảnh hưởng đến lựa chọn.',
      'Highlands có Phin Sữa Đá quen thuộc, hệ thống cửa hàng và thanh toán QR tại quầy.',
      'MoMo cung cấp nền tảng thanh toán, phân phối mã và tiếp cận người dùng ứng dụng.',
      'Sự bổ trợ này tạo cơ sở gắn quyền lợi mua hàng với việc sử dụng Ví Trả Sau.'
    ]},
    {title:'3.3.2. Tìm hiểu định hướng mục tiêu và cơ sở lựa chọn khách hàng mục tiêu (Objectives)', photo:'guests', alt:'Khách hàng sử dụng không gian Highlands Coffee', points:[
      'Highlands hướng đến tăng nhu cầu Phin Sữa Đá, lượt khách cuối tuần và khả năng quay lại.',
      'MoMo hướng đến tăng trải nghiệm và giao dịch Ví Trả Sau trong chi tiêu hằng ngày.',
      'Khách mục tiêu: có nhu cầu cà phê, quan tâm ưu đãi và đủ điều kiện sử dụng Ví Trả Sau.',
      'Đây là định hướng suy ra từ cơ chế ưu đãi; chưa có mục tiêu nội bộ được công bố.'
    ]},
    {title:'3.3.3. Tìm hiểu chiến lược hợp tác và lựa chọn phương thức thanh toán (Strategy)'},
    {title:'3.3.4. Tìm hiểu cách thiết kế chương trình khuyến mại và truyền thông (Tactics)', photo:'service', alt:'Cà phê phin và không gian Highlands Coffee', points:[
      'Mua Phin Sữa Đá L, tặng S vào thứ Sáu–Chủ nhật; thanh toán bằng Ví Trả Sau.',
      'Hai mã ưu đãi tương ứng mức giá từng cửa hàng, giúp hạn chế áp dụng sai mã.',
      'Mỗi khách 1 lần / 2 tuần, tối đa 2 lần / tháng trên một tài khoản và thiết bị.',
      'Highlands và MoMo công bố quyền lợi, thể lệ và hướng dẫn; giới hạn lượt giúp kiểm soát ưu đãi.'
    ]},
    {title:'3.3.5. Tìm hiểu quá trình triển khai và phối hợp thực hiện (Action)'},
    {title:'3.3.6. Tìm hiểu hoạt động theo dõi và kiểm soát chiến dịch (Control)', photo:'origin', alt:'Nhân viên Highlands pha chế cà phê', points:[
      'Kiểm tra tài khoản, nguồn tiền, mã, cửa hàng, thời gian và giới hạn lượt dùng.',
      'Theo dõi mã thành công, giao dịch Ví Trả Sau, doanh thu, chi phí và tỷ lệ quay lại.',
      'So sánh với trước chiến dịch hoặc cửa hàng tương đồng để xem xét phần tăng thêm.',
      'Các chỉ tiêu là đề xuất; chưa có dữ liệu doanh thu, chi phí để kết luận hiệu quả thực tế.'
    ]}
  ];
  const frames = [
    `<div class="pilot-order"><span class="pilot-app-brand">Highlands Coffee</span>${singleCup}<div class="pilot-order-line"><span>Phin Sữa Đá</span><strong>L</strong></div></div>`,
    `<div class="pilot-scan"><div class="pilot-scan-window">${qr}<div class="pilot-scan-corners"></div><div class="pilot-scan-line"></div></div><span>Quét QR</span></div>`,
    '<div class="pilot-code"><span>Mã ưu đãi</span><div class="pilot-code-input"><span>VTSCF29</span><i></i></div><span>hoặc VTSCF35</span></div>',
    `<div class="pilot-payment"><span>Nguồn tiền</span><div class="pilot-wallet"><span>Ví Trả Sau</span><b>${ticks}</b></div></div>`,
    `<div class="pilot-success"><div class="pilot-loader"></div><div class="pilot-success-check">${ticks}</div><p>Thanh toán<br>thành công</p></div>`,
    `<div class="pilot-reward"><span class="pilot-reward-heart" aria-hidden="true">♡</span>${cups}<strong>Mua L, tặng S</strong></div>`
  ];
  let step = 0, controlStep = 0, tacticsStep = 0, current = '', activeAnimations = [], paymentTimer;
  let tacticsTimer, tacticsPaused = reduced.matches;
  const lineArt = (name) => {
    const paths = {
      cup: '<path d="M22 30h53l-5 55H28zM18 24h61v9H18zM33 17V8m14 9V5m14 12V8M31 48h35v18H31z"/>',
      phone: '<rect x="27" y="7" width="46" height="80" rx="9"/><path d="M41 16h18M44 78h12m-17-29 8 8 16-19"/>',
      gift: '<path d="M17 43h66v40H17zM12 30h76v15H12zm38 0v53M50 30C23 32 23 7 37 13c9 4 13 17 13 17Zm0 0c27 2 27-23 13-17-9 4-13 17-13 17Z"/>',
      people: '<circle cx="50" cy="28" r="13"/><path d="M25 81V65c0-24 50-24 50 0v16M16 35a10 10 0 1 0 0-20M84 15a10 10 0 1 1 0 20M7 73V60c0-9 5-14 13-15m73 28V60c0-9-5-14-13-15"/>',
      check: '<circle cx="50" cy="48" r="35"/><path d="m31 48 13 13 26-29"/>',
      ticket: '<path d="M12 26h76v17a9 9 0 0 0 0 18v17H12V61a9 9 0 0 0 0-18Zm49 0v8m0 9v8m0 9v8m0 9v1M26 43h19m-19 13h12"/>',
      calendar: '<rect x="14" y="23" width="72" height="60" rx="9"/><path d="M14 42h72M32 12v22m36-22v22M30 57h7m12 0h7m12 0h7M30 69h7m12 0h7"/>'
    };
    return `<svg class="composition-icon" viewBox="0 0 100 100" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${paths[name]}</g></svg>`;
  };
  function cancelMotion() {
    clearTimeout(tacticsTimer);
    clearTimeout(paymentTimer);
    activeAnimations.forEach(animation => animation.cancel()); activeAnimations = [];
    pilot.querySelectorAll('[data-tactics-ghost]').forEach(element => element.remove());
  }
  function motion(element, frames, options) {
    if (reduced.matches || !element?.animate) return;
    const animation = element.animate(frames, {duration: 650, easing: 'cubic-bezier(.2,.75,.25,1)', ...options});
    activeAnimations.push(animation); return animation;
  }
  function renderStrategy() {
    pilot.innerHTML = `<div class="sostac-composition composition-strategy"><div class="strategy-journey"><div class="journey-end">${lineArt('cup')}<span>Mua cà phê</span></div><span class="journey-arrow">${arrow()}</span><div class="strategy-payment"><span class="payment-brand">MoMo</span><div>${lineArt('phone')}<strong>Ví Trả Sau</strong></div><span class="payment-check">${ticks}</span></div><span class="journey-arrow">${arrow()}</span><div class="journey-end">${lineArt('gift')}<span>Nhận ưu đãi</span></div></div><div class="strategy-reasons"><p>Highlands cung cấp sản phẩm và điểm bán; MoMo cung cấp nền tảng và kênh tiếp cận.</p><p>Ưu đãi tập trung vào Ví Trả Sau, đồng thời giới hạn ở khách đủ điều kiện sử dụng dịch vụ.</p></div></div>`;
  }
  function renderReport(index) {
    if (index === 0) {
      pilot.innerHTML = `<div class="sostac-composition composition-situation"><p class="situation-context">F&B mua thường xuyên; giá, sự thuận tiện và ưu đãi ảnh hưởng đến lựa chọn.</p><div class="situation-partners"><div class="situation-partner highlands-partner">${lineArt('cup')}<div><strong>Highlands</strong><p>Phin Sữa Đá quen thuộc<br>Hệ thống cửa hàng<br>Thanh toán QR tại quầy</p></div></div><span class="partner-plus" aria-hidden="true">+</span><div class="situation-partner momo-partner">${lineArt('phone')}<div><strong>MoMo</strong><p>Nền tảng thanh toán<br>Phân phối mã ưu đãi<br>Tệp người dùng ứng dụng</p></div></div></div><div class="situation-join" aria-hidden="true"><span></span><span></span></div><p class="situation-result">Gắn quyền lợi mua cà phê với việc thanh toán bằng Ví Trả Sau.</p></div>`;
    } else if (index === 1) {
      pilot.innerHTML = `<div class="sostac-composition composition-objectives"><div class="objective-pair"><div><span class="objective-brand">Highlands</span><p>Tăng nhu cầu Phin Sữa Đá,<br>lượt khách cuối tuần và quay lại.</p></div><div><span class="objective-brand">MoMo</span><p>Tăng trải nghiệm và giao dịch<br>Ví Trả Sau trong chi tiêu hằng ngày.</p></div></div><div class="objective-audience">${lineArt('people')}<span>Có nhu cầu<br>cà phê</span><i aria-hidden="true">∩</i><span>Quan tâm<br>ưu đãi</span><i aria-hidden="true">∩</i><strong>Đủ điều kiện<br>Ví Trả Sau</strong></div><p class="composition-note">Mục tiêu suy ra từ cơ chế ưu đãi; chưa có kế hoạch nội bộ được công bố.</p></div>`;
    } else if (index === 3) renderTactics();
    else if (index === 5) renderControl();

  }
  function renderTactics() {
    pilot.innerHTML = `<div class="sostac-composition tactics-motion"><div class="tactics-copy"><div class="tactics-offer"><span>Phin Sữa Đá</span><p>Mua L, <strong>tặng S</strong></p></div><div class="tactics-conditions"><p>${lineArt('calendar')}<span>Thứ Sáu–Chủ nhật</span></p><p>${lineArt('phone')}<span>Ví Trả Sau</span></p><p>${lineArt('ticket')}<span>1 lần / 2 tuần<br>Tối đa 2 lần / tháng</span></p></div><p class="tactics-context">Highlands và MoMo công bố quyền lợi, điều kiện và hướng dẫn tham gia.</p></div><div class="tactics-stage" data-tactics-beat="0"><div class="tactics-phone"><img class="tactics-home-screen" src="assets/images/momo.jpg" alt="Giao diện trang chủ MoMo do người dùng cung cấp"><div class="tactics-app-page" aria-hidden="true"><div class="tactics-app-top"><b>MoMo</b></div><div class="tactics-app-label">Ưu đãi</div><div class="tactics-app-nav"><i></i><i></i><i></i></div></div><button type="button" class="tactics-offers-hotspot" aria-label="Mở mục Ưu đãi trên điện thoại"></button></div><button type="button" class="tactics-floating-card" aria-label="Phóng gần thẻ ưu đãi Highlands"><span class="tactics-card-brand">Highlands Coffee</span>${cups}<span class="tactics-card-detail" aria-live="polite"><strong class="tactics-voucher"></strong><span class="tactics-price"></span></span><span class="tactics-card-peek">VTSCF29 · VTSCF35</span></button><span class="tactics-stage-spark" aria-hidden="true">✧</span></div></div>`;
    paintTactics(false);
  }
  function scheduleTactics() {
    clearTimeout(tacticsTimer);
    if (current !== '3' || tacticsPaused || document.hidden || scene.classList.contains('intro-pending') || !scene.classList.contains('is-active') || !pilot.querySelector('.tactics-stage')) return;
    tacticsTimer = setTimeout(() => {
      tacticsStep = (tacticsStep + 1) % 4;
      paintTactics(true);
    }, [2600, 2200, 4200, 4200][tacticsStep]);
  }
  function paintTactics(animate = true, direction = 1) {
    const oldStage = pilot.querySelector('.tactics-stage');
    const expanding = animate && oldStage?.dataset.tacticsBeat === '1' && tacticsStep === 2;
    const oldCard = expanding ? pilot.querySelector('.tactics-floating-card').getBoundingClientRect() : null;
    let departingCard = null;
    if (expanding && !reduced.matches) {
      const card = pilot.querySelector('.tactics-floating-card');
      departingCard = card.cloneNode(true);
      departingCard.dataset.tacticsGhost = '';
      departingCard.setAttribute('aria-hidden', 'true');
      departingCard.tabIndex = -1;
      for (const selector of ['.tactics-card-brand', '.pilot-cups', '.tactics-card-detail', '.tactics-card-peek']) {
        const source = card.querySelector(selector);
        const copy = departingCard.querySelector(selector);
        const style = getComputedStyle(source);
        Object.assign(copy.style, {
          width: style.width, height: style.height, display: style.display,
          fontSize: style.fontSize, lineHeight: style.lineHeight,
          whiteSpace: style.whiteSpace, transition: 'none'
        });
      }
      const stageBounds = oldStage.getBoundingClientRect();
      Object.assign(departingCard.style, {
        left: `${oldCard.left - stageBounds.left}px`,
        top: `${oldCard.top - stageBounds.top}px`, right: 'auto',
        width: `${oldCard.width}px`, height: `${oldCard.height}px`,
        padding: getComputedStyle(card).padding,
        transformOrigin: 'top left', transition: 'none', pointerEvents: 'none'
      });
    }
    cancelMotion();
    const stage = pilot.querySelector('.tactics-stage');
    stage.dataset.tacticsBeat = tacticsStep;
    pilot.querySelector('.tactics-voucher').textContent = tacticsStep === 3 ? 'VTSCF35' : 'VTSCF29';
    pilot.querySelector('.tactics-price').textContent = tacticsStep === 3 ? '35.000đ' : '29.000đ';
    pilot.querySelector('.tactics-floating-card').setAttribute('aria-label', tacticsStep <= 1 ? 'Phóng gần thẻ ưu đãi Highlands' : tacticsStep === 2 ? 'Xem ưu đãi VTSCF35' : 'Xem lại giao diện ưu đãi');
    pilot.querySelector('.tactics-phone').inert = tacticsStep !== 0;
    if (animate) {
      if (oldCard) {
        const card = pilot.querySelector('.tactics-floating-card'), nextCard = card.getBoundingClientRect();
        const scale = oldCard.width / nextCard.width;
        motion(card, [
          {transform:`translate(${oldCard.left - nextCard.left}px, ${oldCard.top - nextCard.top}px) scale(${scale})`, opacity:0},
          {opacity:1, offset:.18},
          {transform:'translate(0, 0) scale(1)', opacity:1}
        ], {duration:750});
        if (departingCard) {
          stage.append(departingCard);
          const departure = motion(departingCard, [
            {transform:'translate(0, 0) scale(1)', opacity:1},
            {opacity:0, offset:.18},
            {transform:`translate(${nextCard.left - oldCard.left}px, ${nextCard.top - oldCard.top}px) scale(${1 / scale})`, opacity:0}
          ], {duration:750});
          departure.finished.then(() => departingCard.remove(), () => departingCard.remove());
        }
        motion(pilot.querySelector('.tactics-card-detail'), [{opacity:0},{opacity:1}], {duration:280,delay:470,fill:'both'});
      }
      if (tacticsStep === 1) motion(pilot.querySelector('.tactics-floating-card'), [{opacity:0,translate:'0 12px'},{opacity:1,translate:'0 0'}],{duration:400,delay:500,fill:'both'});
      if (tacticsStep === 3 || (tacticsStep === 2 && direction < 0)) motion(pilot.querySelector('.tactics-card-detail'), [{opacity:0,translate:`${direction * 35}px 0`},{opacity:1,translate:'0 0'}],{duration:550});
      motion(pilot.querySelector('.tactics-stage-spark'), [{opacity:0,scale:'.6',rotate:'-20deg'},{opacity:1,scale:'1',rotate:'0deg'}],{duration:700});
    }
    scheduleTactics();
  }
  function changeTactics(direction) {
    if (current !== '3' || scene.classList.contains('intro-pending')) return;
    clearTimeout(tacticsTimer);
    const next = Math.max(0, Math.min(3, tacticsStep + direction));
    if (next === tacticsStep) return;
    tacticsStep = next; paintTactics(true, direction);
  }
  function renderControl() {
    const character = pilot.querySelector('.pilot-section-mascot');
    const body = controlStep === 0
      ? `<div class="control-checks"><div>${lineArt('people')}<p>Tài khoản đủ điều kiện<br>Trong giới hạn lượt dùng</p></div><div>${lineArt('ticket')}<p>Đúng mã, sản phẩm<br>và cửa hàng áp dụng</p></div><div>${lineArt('calendar')}<p>Đúng thời gian<br>Thanh toán Ví Trả Sau</p></div></div><div class="control-valid">${lineArt('check')}<p>Giao dịch thành công và được ghi nhận ưu đãi.</p></div>`
      : `<div class="control-funnel"><div><strong>Tiếp cận</strong><p>Lượt xem ưu đãi</p></div><span>${arrow()}</span><div><strong>Dùng mã</strong><p>Mã thành công</p></div><span>${arrow()}</span><div><strong>Giao dịch</strong><p>Ví Trả Sau</p></div><span>${arrow()}</span><div><strong>Quay lại</strong><p>Mua và dùng tiếp</p></div></div><div class="control-evaluation"><p>So sánh với trước chiến dịch hoặc cửa hàng tương đồng.</p><p>Đối chiếu doanh thu tăng thêm với chi phí ưu đãi.</p></div><p class="composition-note">Chỉ tiêu đề xuất; chưa có dữ liệu để kết luận hiệu quả thực tế.</p>`;
    pilot.innerHTML = `<div class="sostac-composition composition-control"><div class="control-page" aria-live="polite">${body}</div><div class="pilot-controls control-controls"><button type="button" data-control-back aria-label="Nội dung kiểm soát trước" ${controlStep === 0 ? 'disabled' : ''}>${arrow(true)}</button><span class="pilot-count">0${controlStep + 1} / 02</span><button type="button" data-control-next aria-label="Nội dung kiểm soát tiếp theo" ${controlStep === 1 ? 'disabled' : ''}>${arrow()}</button></div></div>`;
    if (character) pilot.append(character);
  }
  function changeControl(direction) {
    const next = Math.max(0, Math.min(1, controlStep + direction));
    if (next === controlStep) return;
    controlStep = next; renderControl();
    motion(pilot.querySelector('.control-page'), [{opacity: 0, translate: '0 12px'}, {opacity: 1, translate: '0 0'}], {duration: 400});
    pilot.querySelector(controlStep ? '[data-control-back]' : '[data-control-next]').focus({preventScroll:true});
  }
  function renderAction() {
    pilot.innerHTML = `<div class="pilot-action"><div class="pilot-action-text"><p class="pilot-narration" aria-live="polite" aria-atomic="true"></p><p class="pilot-explanation"></p><div class="pilot-controls"><button type="button" data-pilot-back aria-label="Bước trước">${arrow(true)}</button><span class="pilot-count"></span><button type="button" data-pilot-next aria-label="Bước tiếp theo">${arrow()}</button><button type="button" data-pilot-reset aria-label="Làm lại">↺</button></div></div><div class="pilot-demo" role="button" tabindex="0" aria-label="Bấm để chuyển bước minh họa"><div class="pilot-demo-backdrop"></div><div class="pilot-surface"><div class="pilot-surface-top"><span>MoMo</span><span>Minh họa</span></div><div class="pilot-frame"></div></div><div class="pilot-mascot-slot"></div><span class="pilot-demo-spark" aria-hidden="true">✧</span></div></div>`;
    // The same character moves into the demo, rather than being repeated.
    pilot.querySelector('.pilot-mascot-slot').append(scene.querySelector('.space-mascot'));
    paint(false);
  }
  function paint(animate = true, direction = 1) {
    cancelMotion();
    pilot.querySelector('.pilot-narration').textContent = beats[step][0];
    pilot.querySelector('.pilot-explanation').textContent = beats[step][1];
    pilot.querySelector('.pilot-count').textContent = `${String(step + 1).padStart(2, '0')} / 06`;
    pilot.querySelector('[data-pilot-back]').disabled = step === 0;
    pilot.querySelector('[data-pilot-next]').disabled = step === 5;
    pilot.querySelector('[data-pilot-reset]').disabled = step === 0;
    const frame = pilot.querySelector('.pilot-frame'); frame.innerHTML = frames[step];
    const demo = pilot.querySelector('.pilot-demo'); demo.dataset.beat = step;
    demo.setAttribute('aria-label', `Minh họa bước ${step + 1}: ${beats[step][0]}${step < 5 ? ' Bấm để chuyển bước tiếp theo.' : ''}`);
    if (animate) {
      motion(pilot.querySelector('.pilot-demo-backdrop'), [{opacity: .55, scale: '.97'}, {opacity: 1, scale: '1'}], {duration: 900});
      motion(pilot.querySelector('.pilot-demo-spark'), [{opacity: .2, rotate: '-18deg', scale: '.7'}, {opacity: 1, rotate: '0deg', scale: '1'}], {duration: 850});
      motion(frame, [{opacity: 0, translate: `${direction * 30}px 0`, scale: '.97'}, {opacity: 1, translate: '0 0', scale: '1'}]);
      motion(pilot.querySelector('.pilot-narration'), [{opacity: .3, translate: '0 8px'}, {opacity: 1, translate: '0 0'}], {duration: 300});
      motion(pilot.querySelector('.space-mascot'), [{translate: '0 8px', rotate: '-5deg'}, {translate: '0 0', rotate: '0deg'}], {duration: 800});
    }
    if (step === 1) {
      const travel = pilot.querySelector('.pilot-scan-window').clientHeight - 20;
      motion(pilot.querySelector('.pilot-scan-line'), [{translate:'0 0',opacity:.5},{opacity:1,offset:.15},{translate:`0 ${travel}px`,opacity:1}], {duration:1300,iterations:3,direction:'alternate'});
    }
    if (step === 2) motion(pilot.querySelector('.pilot-code-input'), [{clipPath: 'inset(0 100% 0 0)'}, {clipPath: 'inset(0 0 0 0)'}], {duration: 800});
    if (step === 3) motion(pilot.querySelector('.pilot-wallet b'), [{scale: '0', rotate: '-30deg'}, {scale: '1.15', rotate: '5deg', offset: .7}, {scale: '1', rotate: '0deg'}]);
    if (step === 4) {
      demo.classList.toggle('is-confirmed', reduced.matches);
      motion(pilot.querySelector('.pilot-loader'), [{rotate: '0deg'}, {rotate: '270deg'}], {duration: 700});
      if (!reduced.matches) paymentTimer = setTimeout(() => {if (current === '4' && step === 4) {demo.classList.add('is-confirmed'); motion(pilot.querySelector('.pilot-success-check'), [{scale: '.5', opacity: 0}, {scale: '1', opacity: 1}]);}}, 700);
    } else demo.classList.remove('is-confirmed');
    if (step === 5) {
      motion(pilot.querySelector('.pilot-reward .pilot-cups'), [{translate: '0 30px', scale: '.85'}, {translate: '0 -6px', scale: '1.04', offset: .7}, {translate: '0 0', scale: '1'}], {duration: 850});
      motion(pilot.querySelector('.pilot-reward-heart'), [{opacity: 0, translate: '0 15px', scale: '.5'}, {opacity: 1, translate: '0 0', scale: '1'}], {delay: 250});
    }
  }
  function advance(direction) {
    if (current !== '4' || scene.classList.contains('intro-pending')) return;
    const next = Math.max(0, Math.min(5, step + direction));
    if (next !== step) {step = next; paint(true, direction);}
  }
  pilot.addEventListener('click', event => {
    if (event.target.closest('[data-tactics-next]')) changeTactics(1);
    else if (event.target.closest('[data-tactics-back]')) changeTactics(-1);
    else if (event.target.closest('[data-tactics-toggle]')) {tacticsPaused = !tacticsPaused; scheduleTactics();}
    else if (event.target.closest('[data-tactics-reset]')) {tacticsStep = 0; tacticsPaused = false; paintTactics(true, -1);}
    else if (event.target.closest('.tactics-offers-hotspot')) changeTactics(1);
    else if (event.target.closest('.tactics-floating-card')) {if (tacticsStep === 3) {tacticsStep = 0; paintTactics(true, -1);} else changeTactics(1);}
    else if (event.target.closest('[data-control-next]')) changeControl(1);
    else if (event.target.closest('[data-control-back]')) changeControl(-1);
    else if (event.target.closest('[data-pilot-back]')) advance(-1);
    else if (event.target.closest('[data-pilot-next],.pilot-demo')) advance(1);
    else if (event.target.closest('[data-pilot-reset]')) {step = 0; paint(true, -1);}
  });
  pilot.addEventListener('keydown', event => {
    if (event.target.closest('.pilot-demo') && ['Enter', ' '].includes(event.key)) {event.preventDefault(); event.stopPropagation(); advance(1);}
    else if (['ArrowLeft', 'ArrowRight'].includes(event.key)) {event.preventDefault(); event.stopPropagation(); if (current === '3') changeTactics(event.key === 'ArrowLeft' ? -1 : 1); else if (current === '5') changeControl(event.key === 'ArrowLeft' ? -1 : 1); else advance(event.key === 'ArrowLeft' ? -1 : 1);}
  });
  // Presenter keys control the visible demo; tickets retain their own navigation.
  document.addEventListener('keydown', event => {
    const rect = scene.getBoundingClientRect();
    if (!['3','4'].includes(current) || pilot.hidden || event.defaultPrevented || event.ctrlKey || event.altKey || event.metaKey || scene.classList.contains('intro-pending') || rect.top > innerHeight * .35 || rect.bottom < innerHeight * .65 || event.target.closest('.space-ticket-dock,button,a,input,textarea,select,[contenteditable]')) return;
    if (['ArrowRight', 'ArrowLeft', ' '].includes(event.key)) {event.preventDefault(); event.stopImmediatePropagation(); if (current === '3') changeTactics(event.key === 'ArrowLeft' ? -1 : 1); else advance(event.key === 'ArrowLeft' ? -1 : 1);}
  }, true);
  function sync() {
    cancelMotion();
    const character = scene.querySelector('.space-mascot');
    if (character && !heading.contains(character)) heading.append(character);
    current = scene.dataset.spaceStep;
    const enabled = true;
    scene.classList.toggle('has-sostac-pilot', enabled); pilot.hidden = !enabled;
    const title = scene.querySelector('#sostac-space-title');
    const [number, ...words] = sections[+current].title.split(' ');
    const numberLabel = document.createElement('span'); numberLabel.className = 'sostac-section-number'; numberLabel.textContent = number;
    const nameLabel = document.createElement('span'); nameLabel.className = 'sostac-section-name'; nameLabel.textContent = words.join(' ');
    const breakBefore = ['hình thành', 'lựa chọn khách', 'và lựa chọn', 'khuyến mại', 'và phối hợp', 'và kiểm soát'][+current];
    const body = words.join(' '), breakAt = body.indexOf(breakBefore);
    if (breakAt > 0) {
      const firstLine = document.createElement('span'), secondLine = document.createElement('span');
      firstLine.className = secondLine.className = 'sostac-title-line';
      firstLine.textContent = body.slice(0, breakAt).trimEnd(); secondLine.textContent = body.slice(breakAt);
      nameLabel.replaceChildren(firstLine, document.createTextNode(' '), secondLine);
    }
    title.replaceChildren(numberLabel, document.createTextNode(' '), nameLabel);
    if (+current < 3) title.textContent = sections[+current].title;
    reader.removeAttribute('aria-live'); reader.removeAttribute('aria-atomic');
    if (current === '2') renderStrategy();
    else if (current === '4') renderAction();
    else renderReport(+current);
    if (['3','5'].includes(current) && character) {character.classList.add('pilot-section-mascot'); pilot.append(character);}
    else character?.classList.remove('pilot-section-mascot');
  }
  scene.querySelector('.space-ticket-dock').addEventListener('keydown', event => {
    if (!['ArrowUp', 'ArrowDown'].includes(event.key)) return;
    event.preventDefault(); event.stopPropagation();
    const buttons = [...scene.querySelectorAll('.space-ticket')];
    const index = buttons.indexOf(event.target);
    const target = Math.max(0, Math.min(5, index + (event.key === 'ArrowDown' ? 1 : -1)));
    buttons[target].click(); buttons[target].focus();
  });
  addEventListener('sostacchange', sync); sync();
  new MutationObserver(scheduleTactics).observe(scene, {attributes:true,attributeFilter:['class']});
  document.addEventListener('visibilitychange', scheduleTactics);
  reduced.addEventListener('change', () => {cancelMotion(); if (reduced.matches) tacticsPaused = true; if (current === '4') paint(false); else if (current === '3') {scheduleTactics();}});
})();
