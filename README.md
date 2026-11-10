# Web trình chiếu nhóm 3

Mở `index.html` trong Chrome hoặc Edge. Không cần cài thư viện hoặc chạy build.

## Cấu trúc

```text
Slide/
├── index.html          # Trang mở đầu và phần bối cảnh cuộn xuống
├── boi-canh.html       # Chuyển hướng tới index.html#boi-canh
├── README.md
├── css/
│   ├── styles.css      # Giao diện mở đầu theo Figma
│   ├── boi-canh.css    # Giao diện số liệu
│   ├── thi-truong.css  # Bốn phần tiếp nối 2.1.2 và 2.1.3
│   └── fonts.css       # Khai báo font Inter
├── js/
│   ├── app.js          # Điều hướng, nút và thông báo
│   └── boi-canh.js     # Hiệu ứng đếm số và biểu đồ
└── assets/
    ├── fonts/          # Các tệp Inter TTF
    ├── images/         # Ảnh nền và thumbnail
    └── icons/          # Biểu tượng SVG
```

CSS và JavaScript nằm ngoài `assets`. `assets` chỉ chứa tài nguyên hình ảnh, biểu tượng và font.

## Sử dụng

Cuộn xuống hoặc bấm “Xem nội dung” để đến phần bối cảnh. Số liệu và từng hàng biểu đồ chạy khi xuất hiện trong màn hình. “Chạy lại số liệu” phát lại hiệu ứng. Chế độ giảm chuyển động và bản in hiển thị giá trị cuối.

Phần bối cảnh hiện có mục 2.1.1: quy mô, tăng trưởng 2025, QR năm 2026, thay đổi thanh toán, rào cản và phần số liệu mở rộng. Đã nối tiếp 2.1.2 (thị trường, chi phí) và 2.1.3 (hợp tác, hệ sinh thái) theo các frame Figma 7:2, 7:43, 7:72, 7:103. Số liệu giữ theo tài liệu nhóm, nguồn được đặt cuối phần.

Thiết kế mở đầu dựa trên frame 1:2: https://www.figma.com/design/YteB1D2Up6ZEaoGJCot2na/Untitled?node-id=1-2

Ảnh Highlands, The Coffee House và SVG lấy từ Figma. Các ô ảnh trống dùng ảnh thanh toán thật từ MoMo, Thanh Niên và VNPAY, có dẫn nguồn dưới ảnh. Không sử dụng ảnh tạo bởi AI. Font Inter 400, 600, 700 lưu nội bộ để chạy ngoại tuyến.
## Nguồn lưu ngoài giao diện
Nguồn: tài liệu nhóm, mục 2.1.1; số liệu thanh toán dẫn Ngân hàng Nhà nước. Xem tài liệu ↗
Ảnh minh họa thương hiệu từ Figma.
Nguồn: iPOS và Nestlé Professional, theo tài liệu nhóm, mục 2.1.2.
Mẫu: 3.001 chủ cơ sở và 3.045 thực khách. 69,38% không phải số liệu riêng The Coffee House.
Ảnh thanh toán thực tế: MoMo. Ảnh minh họa.
Ảnh thật minh họa: Thanh Niên và VNPAY.
Nguồn: tài liệu nhóm, mục 2.1.3.

Ảnh chuyển theo thẻ:
- Ưu đãi Highlands 2022: https://momo.vn/tin-tuc/khuyen-mai/highlands-gia-hoi-vi-da-co-momo-moi-dat-nuoc-giam-3523
- Sự kiện MoMo/Coffeerary 2023: https://nld.com.vn/kinh-te/ru-nhau-di-le-hoi-thanh-toan-khong-tien-mat-20230617161212298.htm
- Phúc Long–ZaloPay 2025: https://phuclong.com.vn/khuyen-mai/phuc-long-hop-tac-zalopay-mang-tra-viet-den-gan-hon-voi-genz-20250514023237

## Phần 2.2 — swipe

- `css/marketing.css`: giao diện năm thẻ.
- `js/marketing.js`: vuốt ngang, kéo chuột, điều hướng bằng nút và phím.
- Không tự chuyển trang, không giữ cuộn dọc. Chi tiết ví dụ nằm trong phần mở rộng.
- Nội dung dựa trên văn bản 2.2.1–2.2.5 người dùng cung cấp.
- Banner Phúc Long 2025: https://phuclong.com.vn/khuyen-mai/me-dam-tra-100-trung-qua-20250623113634
- Banner Highlands–MoMo 2026: https://www.highlandscoffee.com.vn/vn/mua-1-tang-1-phin-sua-da-khi-thanh-toan-qua-vi-tra-sau-momo.html
- Ảnh ký kết Phúc Long–ZaloPay dùng lại ảnh có sẵn trong assets. Không dùng ảnh AI.

### Bản swipe toàn viewport

Mỗi trang 2.2 chiếm 100vw × 100svh, dùng ảnh nền cover và gradient tối để đọc chữ. Trên màn hình thấp, nội dung từng trang có thể cuộn dọc; điều hướng ngang không tự chạy. Các ảnh chỉ minh họa, không khẳng định ảnh chụp đúng chương trình đang phân tích.

Ảnh bổ sung:
- Giao dịch tại quán: https://news.laodong.vn/video-kinh-te/momo-va-hanh-trinh-15-nam-dong-hanh-cung-tieu-thuong-viet-chuyen-doi-so-1633205.ldo
- Trà Phúc Long: https://cafef.vn/hinh-anh-doi-dau-cua-thuong-hieu-phuc-long-khien-nhieu-nguoi-giat-minh-tu-cua-hang-nho-toi-chuoi-khung-188240717111243054.chn
- Cà phê Highlands: https://spacet.vn/blog/nguon-cam-hung/cap-nhat-menu-highland-va-khong-gian-quan-cuc-chi-tiet
## Quy ước ảnh
Tất cả ảnh phải phủ kín khung bằng object-fit: cover, giữ nguyên tỷ lệ và chọn điểm cắt phù hợp. Khi tìm ảnh mới, ưu tiên tỷ lệ gần khung sử dụng, độ phân giải đủ lớn và chủ thể không bị cắt ở vị trí quan trọng. Không dùng ảnh AI. Tiêu đề và điều hướng phần 2.2 nằm bên trên, tách khỏi vùng ảnh toàn viewport.

### Ảnh nền thay mới cho 2.2
- 2.2.1: `marketing-momo-wide.jpg` (2000 × 1124), ảnh thanh toán tại Phúc Long: https://vneconomy.vn/nhieu-uu-diem-voi-tinh-nang-hoan-tien-cua-vi-momo.htm
- 2.2.2: `marketing-tea-cake.jpg` (2048 × 1365), ảnh trà và bánh: https://www.brandcoat.net/case-study/phuc-long-2011
- 2.2.3: dùng ảnh thật `cooperation-event.jpg` (2000 × 1335) của MoMo–Coffeerary đã lưu.
- 2.2.4: dùng ảnh thật `cooperation-ecosystem.jpg` (7008 × 4672) lễ ký kết ZaloPay–Phúc Long đã lưu.
- 2.2.5: `marketing-highlands-wide.jpg` (2000 × 1505), không gian Highlands: https://atc-craft.com/how-to-buy-furniture-direct-from-manufacturer/
Ảnh mang tính minh họa. Dùng cover và điểm lấy nét riêng cho từng màn hình; không dùng ảnh AI. Nguồn lưu tại đây, không hiển thị trong nội dung trình chiếu.

### Bố cục 2.2 hiện tại
Chữ nằm trong cột nền xanh rất nhạt (44%), ảnh ở cột riêng (56%). Không gradient, không chữ đè ảnh. Điện thoại xếp ảnh phía trên và chữ phía dưới. Giữ swipe ngang và hiệu ứng mở chi tiết chung.


## Phần 2.3 — hồ sơ thương hiệu dạng tạp chí
- Nối sau 2.2 trong `index.html`, bắt đầu tại `#truong-hop-thuc-te`.
- `css/cases.css`: nền trắng, mục lục ảnh lệch nhịp, tiêu đề lớn, ảnh toàn khung, hóa đơn ưu đãi và bảng đối chiếu.
- `js/cases.js`: hiện nội dung khi cuộn và cập nhật mục đang đọc. Giữ nội dung đọc được khi tắt JavaScript; tôn trọng reduced motion.
- Thể lệ và phân tích bổ sung dùng hiệu ứng chung của `js/disclosures.js`.
- Nội dung rút gọn từ toàn bộ 2.3 của tài liệu nhóm đọc ngày 25/10/2026: https://docs.google.com/document/d/1MlrgcipFEn5-wrhd7vP20ce0Icb3GVGjSsLsEZLWEgw/edit
- Mục tiêu và lợi ích là phân tích từ cơ chế, không phải kết quả kinh doanh đã chứng minh. Ngày trong chương trình là ngày theo tài liệu khảo sát; không trình bày như ưu đãi đang mở.

Ảnh thật minh họa, không khẳng định chụp tại chiến dịch:
- `case-highlands-interior.jpg` (2048 × 1365): https://znews.vn/nuoc-co-moi-cua-ong-chu-highlands-coffee-post1558890.html
- `case-highlands-exterior.jpg` (1200 × 675): https://znews.vn/highlands-coffee-chuan-bi-ipo-post1548363.html
- `case-texas-interior.jpg` (1800 × 900): https://zalopay.vn/doi-tac/texas-chicken-130 (ảnh không gian minh họa thương hiệu, không phải chứng cứ cho chương trình MoMo).
- `case-texas-food.jpg` (624 × 624, chỉ dùng ô mục lục nhỏ): https://vincom.com.vn/store/texas-chicken-vincom-mega-mall-thao-dien
- Dùng lại `marketing-phuclong-wide.jpg` và `marketing-tea-cake.jpg`; nguồn ảnh đã ghi phía trên. Mọi ảnh đều cover, không gradient phủ ảnh, không ảnh AI.

Kiểm tra: cú pháp JS, đường dẫn tài nguyên, anchor, ID không trùng và dấu ngoặc CSS. Phiên làm việc không có trình duyệt được kết nối nên chưa kiểm tra trực quan trên trình duyệt.

## Phần 2.4 — đánh giá chung
- `index.html#danh-gia-chung`, giao diện tại `css/evaluation.css`.
- Ba nhóm: lợi ích, hạn chế, nguyên nhân; liên kết từ mục lục chương.
- Ý chính dùng để trình chiếu; toàn bộ văn bản 2.4 người dùng cung cấp được giữ trong các mục mở rộng, dùng hiệu ứng chung của `js/disclosures.js`.
- Không bổ sung số liệu kinh doanh; phân biệt lợi ích kỳ vọng, kết quả triển khai và tác động thực tế.

### Cập nhật 2.4: rút gọn để đọc và trình chiếu
Đã bỏ các đoạn mở rộng dài, thanh điều hướng phụ và ý lặp. Giữ ba phần ngắn: lợi ích, hạn chế, nguyên nhân; kết lại bằng ba tiêu chí đo lường. Ảnh chụp thật từ Pexels, tải về nội bộ; ảnh chỉ minh họa hoạt động quán cà phê, không phải ảnh chiến dịch Việt Nam.
- `evaluation-cafe-payment.jpg`: https://www.pexels.com/photo/cashless-transaction-in-a-coffee-shop-6684796/
- `evaluation-cafe-counter.jpg`: https://www.pexels.com/photo/a-woman-receiving-money-from-the-customer-4921267/ (RDNE Stock project).

## Đổi bố cục ba phần thị trường, áp lực, thiết kế hợp tác
Giao diện riêng tại `css/market-layouts.css`: dải số liệu và biểu đồ dốc; dải số lớn và ba cột áp lực; bốn điều kiện cùng bảng lợi ích hai bên. Giữ ảnh thật nội bộ. Biểu đồ dốc chỉ nối các năm có số liệu, không bổ sung năm còn thiếu.
Tham khảo bố cục: https://thanor.ai/blog/editorial-web-design ; https://designsystem.digital.gov/components/process-list/ ; https://www.designsystem.tech.gov.sg/components/stepper . Bốn yếu tố hợp tác là yếu tố thiết kế, không khẳng định quy trình thời gian.

## Bìa chương 1 và chương 3
- `chuong-1.html` và `chuong-3.html`: bìa riêng dùng cùng bố cục, ảnh và kiểu chữ của chương 2.
- Chuyển chương bằng thanh điều hướng hoặc các nút số trên bìa; chương 2 vẫn ở `index.html`.
- Hai chương mới chỉ có bìa. Nút “Xem tài liệu” mở đúng tiêu đề chương trong Google Docs.
- `css/chapter-covers.css` và `js/chapter-cover.js`: trạng thái chương đang chọn và co biểu tượng theo bìa.

## Chương 1 — Khái niệm và phương thức thanh toán
Nối sau bìa trong `chuong-1.html`, giao diện tại `css/chapter-one.css`. Một slide ba cột theo ảnh tham khảo: khái niệm (1.1.1) bên trái, ba ảnh xếp dọc ở giữa, các phương thức (1.1.2) bên phải. Dùng phối màu chương 2: xanh #2d83f5, nền trắng/xanh nhạt, chữ xanh đậm; nội dung tối thiểu 26px. Khung cách nhau 72px, chiều cao tối thiểu 100svh - 48px trên desktop; fullscreen theo chương 2. Dùng chung `js/slide-mode.js` để chuyển bằng nút hoặc PageUp/PageDown. Đã bỏ thanh PHẦN 1, 2, 3. Giữ bố cục tham khảo, làm nhẹ màu, bo góc ảnh và căn lại khoảng cách.
Ảnh minh họa Pexels tải nội bộ, chiều rộng 480px, chất lượng 65; tổng khoảng 79 KB:
- https://www.pexels.com/photo/a-person-using-his-cellphone-and-credit-card-for-online-transaction-6969933/
- https://www.pexels.com/photo/person-holding-a-smartphone-and-a-credit-card-8938720/
- https://www.pexels.com/photo/pen-calculator-and-magnifying-glass-on-documents-13156204/

### Chương 1 — Bản chất và hệ sinh thái ví điện tử
Đã tách phần ví điện tử thành hai slide để trình chiếu thoáng hơn:
- `#ban-chat-vi-dien-tu`: bố cục tạp chí với tiêu đề/ảnh bên trái, ba ý chính bên phải.
- `#he-sinh-thai-vi-dien-tu`: sơ đồ bốn bên quanh trung tâm thanh toán và ưu đãi.
Giữ phối màu chương 2 và chữ nội dung tối thiểu 26px. Dùng chung điều khiển chuyển slide.
Tham khảo bố cục: https://yesimadesigner.com/anatomy-of-a-magazine-layout/ và https://www.designatlas.org/en/practice/ecosystem-map/ .
Ảnh Pexels (~19 KB): https://www.pexels.com/photo/hand-with-cellphone-over-payment-terminal-7561698/ .

### Chương 1 — Quy trình 5 bước thanh toán
Slide tương tác tại `#quy-trinh-thanh-toan`, dùng `js/payment-process.js`: chọn bước hoặc nút Trước/Tiếp, bàn phím lên/xuống/Home/End trong danh sách bước. Hiển thị một mô tả và minh họa SVG theo bước, chuyển trong 380ms; thanh tiến độ 400ms; không tự chạy. Tôn trọng reduced motion. Nội dung quan trọng 26–36px. Khi in, hiện đủ cả năm bước. Không tải thêm ảnh cho phần này.

### Chương 1 — Khái niệm và hình thức marketing qua ví
Slide `#marketing-qua-vi-dien-tu` nối sau quy trình 5 bước. Giữ hướng bố cục nội dung bên trái/ảnh bên phải theo ảnh người dùng, dùng phối màu chương 2. Khái niệm nằm trong vùng nền xanh nhạt; ba hình thức đánh số gồm marketing trên app ví, ưu đãi gắn thanh toán, và khách hàng thân thiết. Chữ nội dung 26px, tiêu đề ý 28px. Ảnh MoMo–Ding Tea dùng lại tài nguyên nội bộ, thêm mảng nền và chú thích trang trí; không tăng dung lượng ảnh tải về.

Tinh giản slide marketing: tiêu đề rút gọn, bỏ lớp chú thích đè ảnh và họa tiết, bỏ hộp nền cho khái niệm; giữ một đường phân cách, ba ý có khoảng trắng và một ảnh bo góc.

### Chương 1 — Cơ chế tạo giá trị
Slide `#co-che-tao-gia-tri`: luồng ngang Ưu đãi → Động cơ mua hàng → Thanh toán → Hoàn tất → Mua lại. Dùng `js/value-mechanism.js`, chọn bước trực tiếp trên icon, hỗ trợ phím trái/phải/Home/End; đã bỏ hàng Trước/Tiếp và số bước. Đường nối và icon chuyển màu trong 400ms; ở bước cuối hiện nét cong đứt quay về động cơ mua hàng. Không tự chạy, tôn trọng reduced motion, chữ 26–32px. Màn hình nhỏ cho cuộn ngang luồng. Minh họa SVG nội bộ.

### Chương 1 — Vai trò marketing và đặc thù F&B
- `#vai-tro-marketing-vi`: bốn vai trò trong bố cục 2 × 2: thu hút/dùng thử, kích cầu linh hoạt, cộng hưởng truyền thông, đo lường/tối ưu.
- `#dac-thu-fnb-tieu-chi`: bối cảnh F&B bên trái, ba nhóm chỉ tiêu bên phải. Số liệu 32,8%, 52,3%, dưới 35.000đ/món, hơn 323.000 cửa hàng giữ theo ảnh người dùng; không thêm dữ liệu. Ảnh nguồn lặp Chỉ tiêu tài chính nên hiển thị một lần, không tự đặt nhóm thứ tư.
Hai slide dùng phối màu chương 2, chữ nội dung tối thiểu 26px và cùng bộ điều khiển slide.

Redesign hai slide cuối: vai trò dùng chữ thoáng quanh biểu tượng ví trung tâm, bỏ hộp nội dung; F&B dùng số liệu lớn cạnh ý nghĩa, ba nhóm đánh giá ở dải bên phải. Các cột trang trí không biểu diễn số liệu. Giữ nội dung/số liệu ảnh nguồn và cỡ chữ tối thiểu 26px.

## Đồng bộ tài liệu ngày 05/11/2026
Nguồn: tab BẢN SỬA — https://docs.google.com/document/d/1igwsZ5sgBRJlqgujBXbyy1vqqf9YhYaZCX2xI_taol8/edit?tab=t.f42o8bd8vviu .
- Chương 2: bỏ khối phân tích riêng Highlands/Phúc Long/Texas và bảng so sánh; giữ ví dụ trong 2.2. Đánh giá chung đổi từ 2.4 sang 2.3, cập nhật mục lục. Các ghi chú 2.3/2.4 phía trên mô tả lịch sử trước khi đồng bộ.
- Chương 1: thêm lưu ý giao dịch qua ví không đồng nghĩa doanh thu tăng và không bảo đảm mua lại; cập nhật số cửa hàng 323.010, năm và nguồn số liệu.
- Bổ sung 8 slide: ưu/nhược điểm; hành vi thanh toán; yếu tố ảnh hưởng; năm nhóm tiêu chí; chỉ tiêu giao dịch; chỉ tiêu khách hàng; lợi nhuận/ROI; khung vận dụng.
- Chương 1 hiện có 17 slide tính cả bìa; tất cả dùng chung điều hướng. Chữ nội dung mới tối thiểu 26px.
- Đã kiểm tra ID, anchor và tài nguyên trên cả ba trang, cân bằng section và CSS. Kiểm tra trực quan chưa hoàn tất: trình duyệt kết nối trực tiếp không khả dụng, công cụ desktop không đọc được Chrome đang thu nhỏ.

## Tinh giản và vừa viewport — 05/11/2026
Rút gọn câu chữ toàn chương 1, bỏ giải thích lặp, bỏ dải ba nhóm chỉ tiêu trùng ở slide đặc thù F&B. Giữ 17 slide tính cả bìa và các ý/công thức chính. Trên desktop, khung nội dung cao 100svh - 48px; tiêu đề 36px, chữ quan trọng tối thiểu 26px; thu gọn hình và khoảng đệm thay vì giảm cỡ chữ.
Đã đo bằng Chrome headless: toàn bộ 16 slide nội dung vừa viewport 1344×670; viewport 1898×982 không tràn ngang/dọc, cả năm trạng thái của slide quy trình cũng không tràn. Phép đo bổ sung cho cửa sổ 1280×720 chưa chạy do người dùng từ chối quyền thực thi; không dùng overflow hidden để che nội dung tràn trên desktop.

## Khoảng cách slide và nguồn trên giao diện — 06/11/2026
Đã bỏ hai dòng nguồn khỏi chương 1 và bỏ nút Hệ sinh thái ví điện tử dưới slide đặc điểm. Nguồn vẫn lưu trong README. Tăng khoảng trống ngoài khung giữa các slide: desktop 140–220px theo viewport, tablet 96px, điện thoại 72px; không tăng chiều cao nội dung slide.

Cuối chương 1 có nút Sang chương 2 (index.html#chuong-2); cuối chương 2 có nút Sang chương 3 (chuong-3.html). Chương 3 không thêm nút. Giao diện chung tại css/chapter-navigation.css, chữ 26px.

Sắp lại hai slide 1.3.1–1.3.2: đặc thù F&B thành lưới 2×2, số liệu cạnh ý nghĩa; hành vi thanh toán thành ba nhu cầu bên trái và số liệu ngân hàng bên phải. Bỏ khoảng trống tiêu đề cố định và rút câu. Đã đo Chrome headless viewport 1344×670: cả hai không tràn ngang/dọc, chữ nội dung tối thiểu 26px.

## Bìa chương 3 — cắt lớp
Bìa đang dùng tại chuong-3.html, CSS tại css/highlands-cover.css. Chỉ hiển thị đúng tiêu đề người dùng yêu cầu. Ảnh cà phê đang dùng: assets/images/highlands-cover-coffee.jpg, từ https://www.highlandscoffee.com.vn/vn/phin-sua-da-vi-dam-da-cho-ngay-moi-dam-chat.html . Các file concept, ảnh thumbnail xuất thử và bộ Blender đã được xóa theo yêu cầu.

## Bìa chương 3 — ảnh cà phê (06/11/2026)
Thay bìa cắt lớp bằng ảnh nền tạo lại theo ảnh người dùng gửi, bằng built-in ImageGen. Asset: assets/images/highlands-chapter3-hero.png; giao diện: chuong-3.html và css/highlands-cover.css. Chỉ hiện đúng tiêu đề đã chốt, chữ HTML để bảo toàn dấu tiếng Việt.
Prompt: Recreate the supplied warm iced Vietnamese milk coffee advertising photo: cup right, phin filter below, wooden table, dotted glass, lamp, olive and burgundy backdrop. Remove all text, logos, marks and carousel dots. Preserve clean space on left for HTML title. Photorealistic 16:9, no text.


## Bìa chương 3 — bố cục kính mờ (06/11/2026)
Bản đang dùng: chuong-3.html và css/highlands-cover.css. Tiêu đề bên trái, khung ảnh ly cà phê bên phải; nền ảnh thật có lớp kính mờ và phủ đỏ nâu để tăng tương phản. Không thêm chữ phụ.
Ảnh chính thức: highlands-cover-coffee.jpg (PSD_Morning.jpg) và highlands-official-community.jpg (DSC04975.jpg), cùng lấy từ https://www.highlandscoffee.com.vn/vn/phin-sua-da-vi-dam-da-cho-ngay-moi-dam-chat.html . Không còn dùng ảnh AI trên bìa này. Đã render và xem preview chuong-3-frost-preview.png ở 1600×1000.


## Bìa chương 3 — chữ trắng căn giữa (06/11/2026)
Bản hiện tại theo mẫu mới: nền quầy Highlands toàn khung, phủ tối, CHƯƠNG 3 lớn ở giữa, tiêu đề hai dòng bên dưới và hai đường kẻ trắng trên/dưới. Bỏ bố cục chia cột và frost. Ảnh chính thức: https://www.highlandscoffee.com.vn/vnt_upload/about/8W1A6722_1.jpg (trang https://www.highlandscoffee.com.vn/en/about.html), lưu assets/images/highlands-official-counter.jpg. Preview chuong-3-preview.png đã được render và xem.


## Chương 3 — hành trình 3.1.1
Nối sau bìa tại `#lich-su-highlands`, chỉ triển khai 3.1.1. CSS: css/highlands-history.css; JS: js/highlands-history.js. Nền kem gần trắng #fffdf9; năm trạm 1999–2002, 2002–2011, 2012–2015, 2016–2020, 2021–nay. Hạt cà phê SVG đi theo path dựa vào vị trí cuộn; tiến trình đỏ đi xuôi/ngược; ảnh hiện trước chữ 100ms, chuyển 650ms. Nội dung đã hiện vẫn giữ khi cuộn ngược. Không tự cuộn, không khóa cuộn. Reduced motion bỏ hạt di chuyển và hiện đủ nội dung.
Khung ảnh: vòm, bo góc bất đối xứng, oval, cắt góc và cửa sổ. Hai ý mỗi mốc, chữ tối thiểu 26px, mỗi trạm desktop 100svh.
Nội dung theo tab BẢN SỬA mục 3.1.1 của tài liệu nhóm: https://docs.google.com/document/d/1igwsZ5sgBRJlqgujBXbyy1vqqf9YhYaZCX2xI_taol8/edit?tab=t.f42o8bd8vviu#heading=h.6qf4mr7kty3z .
Ảnh chính thức minh họa thương hiệu, không phải ảnh lưu trữ từng năm: Coffee_bean.jpg từ https://www.highlandscoffee.com.vn/vn/phin-sua-da-vi-dam-da-cho-ngay-moi-dam-chat.html ; ABOUT-CAREER3.jpg từ https://www.highlandscoffee.com.vn/vn/nguon-goc.html ; ảnh khách hàng, sản phẩm và quầy lấy từ các trang Highlands đã ghi ở trên. Ảnh nguồn gốc nén còn ~71KB; ảnh bột cà phê ~91KB. Ảnh logo_enovation.jpg tải đối chiếu nhưng không đưa vào các trạm để tránh gán ảnh 2022 vào giai đoạn cũ.
Đã đo Chrome headless viewport 1418×802: năm trạm cao 802px, không tràn nội dung hoặc tràn ngang. Kiểm tra vị trí hạt ở trạm 1→3→5→1 và dashoffset tiến trình thay đổi tương ứng; không có lỗi JavaScript được ghi nhận. Ảnh screenshot headless không được trình duyệt cập nhật đúng nên không dùng làm preview xác minh hình ảnh.

Ảnh hành trình đã tăng lên tối đa 570px/63svh, vùng hành trình rộng tới 1640px và ưu tiên thêm chiều ngang cho ảnh; lane giữa giảm còn 90px. Đường đi của hạt tự đo lại tâm các trạm theo lưới mới.


Mốc hành trình đã đưa từ 50% lên 28% chiều cao mỗi trạm. JS đo trực tiếp vị trí chấm; chỉ reveal khi hạt đi qua chấm, cuộn ngược thì ẩn lại. Hiện 650ms, chữ trễ 100ms; ẩn 350ms không delay. Reduced motion vẫn hiện nội dung đầy đủ.



### Bản đồ hành trình Highlands (3.1.1)
- Các mốc 2002–2011, 2016–2020 và 2021–nay dùng bản đồ SVG thay ảnh sản phẩm. Số cửa hàng là tổng theo năm; ghim chỉ vị trí thành phố/quốc gia, không thể hiện số cửa hàng tại từng ghim.
- Đường viền Việt Nam và Philippines: Natural Earth, public domain, https://www.naturalearthdata.com/downloads/50m-cultural-vectors/50m-admin-0-countries-2/ ; dữ liệu https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_50m_admin_0_countries.geojson .
- Giữ hiệu ứng xuất hiện khi hạt cà phê qua mốc và ẩn khi cuộn ngược.

- Bổ sung collage ảnh chính thức có sẵn (quầy phục vụ, trải nghiệm khách hàng) cùng bản đồ và thẻ số liệu cho các mốc 3.1.1. Ảnh minh họa mô hình/trải nghiệm, không gán là ảnh tư liệu chụp đúng năm hay đúng chi nhánh được đề cập.

### Điều chỉnh ảnh và bản đồ 3.1.1
- Mốc đầu dùng ảnh sản phẩm đóng gói hiện tại để minh họa, không phải bao bì lịch sử 1999: https://www.highlandscoffee.com.vn/vn/truyen-thong-200gr-1627012824.html ; ảnh https://www.highlandscoffee.com.vn/vnt_upload/product/03_2026/Truyen_Thong_200g.png .
- Bản đồ xám, bỏ nền lưới/khung/đổ bóng thẻ; tăng kích thước bản đồ. Đường hành trình đo trực tiếp tâm mốc CSS (left/top), tự vẽ lại khi bố cục đổi kích thước; giữ hành vi hiện/ẩn khi đi qua mốc.

- Bố cục riêng từng mốc lịch sử: 2002–2011 ảnh bên trái, bản đồ đứng bên phải trong cụm hình; 2012–2015 ảnh lớn bên phải; 2016–2020 chữ trên, bản đồ–ảnh–số liệu thành dải ngang bên dưới; 2021–nay ảnh lệch tầng cùng bản đồ khu vực bên phải trong cụm hình trái. Đường hạt cà phê tiếp tục đo tọa độ mốc CSS.

### Sửa bố cục tránh chồng hình ở 3.1.1
- Viết lại CSS lịch sử thành bố cục grid: ảnh, bản đồ và số liệu có ô riêng, không dùng absolute/negative margin để chồng các thành phần. Giữ bản đồ xám không nền và đường hạt cà phê theo mốc.
- Tất cả sáu ảnh đang hiển thị trong chương 3 dùng file riêng, không lặp lại ảnh bìa. Mốc chuỗi cửa hàng dùng ảnh ngoại thất minh họa đã có (nguồn Znews ở trên); mốc vận hành dùng ảnh phin chính thức; mốc mới dùng ảnh Drive-Thru 2025. Ảnh minh họa không được gán là tư liệu đúng năm 2002 hay đúng chi nhánh Metropolitan.
- Ảnh Drive-Thru mới tải: https://www.highlandscoffee.com.vn/vnt_upload/news/07_2025/DUY_006.jpg ; trang chính thức https://www.highlandscoffee.com.vn/vn/khai-truong-highlands-drive-thru-buoc-tien-moi-trong-hanh-trinh-phuc-vu-ca-phe-viet.html .

- QA bố cục 2002–2011 và 2021–nay bằng Chrome 1366×768 (viewport nội dung 1366×670): ảnh/bản đồ/số liệu không giao nhau; nội dung nằm gọn trong từng viewport; không tràn ngang, không thiếu ảnh. Kiểm tra SHA-256: sáu ảnh hiển thị có nội dung file khác nhau.

### Mốc cuối 3.1.1: cụm ba ảnh
- Bỏ bản đồ cuối và bố cục bản đồ phóng lớn; thay bằng ba ảnh trong các ô riêng: Drive-Thru 2025, khai trương flagship Bưu điện Thành phố 2023, trải nghiệm khách hàng. Giữ nội dung chữ, hoạt ảnh hiện/ẩn và cỡ chữ.
- Ảnh flagship: https://careers.highlandscoffee.com.vn/wp-content/uploads/2024/01/1702873233740.jpg ; bài https://careers.highlandscoffee.com.vn/vi/khai-truong-highlands-coffee-buu-dien-thanh-pho/ .
- Ảnh trải nghiệm: https://bucketeer-3eb16243-2c1c-43d2-be4e-1c2b3664d293.s3.amazonaws.com/2024/06/Highland_L2_R2.2.jpg ; bài https://www.jollibeegroup.com/stories/highlands-coffee-named-vietnams-top-fb-brand-in-customer-experience/ .

### 3.1.2 — Bánh xe danh mục sản phẩm
- Phần mới nối sau lịch sử trong chuong-3.html; CSS css/highlands-products.css, JS js/highlands-products.js. Timeline bắt đầu bộ đếm ở slide 01; có khoảng trống ngoài nội dung trước slide sản phẩm để hai slide tách thoáng. Năm sản phẩm đổi bằng hai nút mũi tên; con lăn không làm bánh xe dịch chuyển.
- Nội dung tóm tắt mục 3.1.2 của Google Docs tab t.f42o8bd8vviu: cà phê, trà, Freeze, thức ăn/bánh, đóng gói/phụ kiện. Không đưa giá bán vì phạm vi này trình bày nhóm sản phẩm.
- Ảnh chính thức: https://www.highlandscoffee.com.vn/vnt_upload/product/01_2026/PHIN_SUA_DA.jpg ; https://www.highlandscoffee.com.vn/vnt_upload/product/01_2026/TSV_CU_NANG.jpg ; https://www.highlandscoffee.com.vn/vnt_upload/product/01_2026/FREEZE_TRA_XANH.jpg ; https://www.highlandscoffee.com.vn/vnt_upload/product/01_2026/BMQ_PATE.jpg ; https://www.highlandscoffee.com.vn/vnt_upload/product/03_2026/Truyen_Thong_1kg.png . Ảnh trắng hòa nền bằng CSS multiply; gói cà phê dùng CSS clip-path, không sửa file ảnh gốc.

- QA bánh xe: Chrome 1440×900 và 1366×768, đủ các trạng thái 0–4 và quay về 0; nhóm hiển thị đúng, ảnh tải đủ, vùng chữ nằm trong viewport, không tràn ngang. Kiểm tra thêm khung hẹp 500px sau khi sửa min-width của grid: vùng chữ nằm trong khung. Screenshot ở các vị trí cuộn cuối đôi khi không được headless Chrome vẽ lại; không dùng các ảnh trắng này làm bằng chứng kiểm tra hình thức.

- Bánh xe 3.1.2 mở rộng sang 65% khung desktop; ảnh lớn hơn, tâm bánh xe nằm trong viewport và có logo đỏ đứng yên. Logo chính thức https://www.highlandscoffee.com.vn/vnt_upload/weblink/ftlogo.png được hiển thị qua CSS mask màu đỏ, không sửa file gốc. Vành có vòng đồng tâm và vạch chia nhẹ, không bổ sung chữ trang trí.

- Logo tâm dùng ảnh chính thức màu trắng, hiển thị đỏ bằng CSS filter để hoạt động cả khi mở file HTML trực tiếp (không phụ thuộc CSS mask file://). Đã xem ảnh kiểm tra ở 1440×900: bánh xe lớn, ly chính lớn và logo tâm hiện đủ.

### 3.1.2 — Redesign theo Nederburg (06/11/2026)
- Bố cục kem và đỏ Highlands, vòng nền tròn lớn lệch phải, ảnh sản phẩm nguyên vẹn phía trước; cuộn xoay sản phẩm theo cung, đổi chữ và crossfade ảnh nền có blur 3px/lớp tối. Có nút trước/sau, bàn phím và reduced motion.
- Giữ một phần sticky với năm trạng thái. Không dùng nền sân cỏ trong giao diện này nữa.
- Ảnh nền trà, Freeze và bánh lấy từ ảnh sản phẩm chính thức đã tải trong dự án (nguồn ở mục bánh xe trên); nén JPEG quality 70 thành highlands-wheel-tea.jpg, highlands-wheel-freeze.jpg, highlands-wheel-food.jpg. Nền cà phê dùng highlands-cover-coffee.jpg; nhóm tại nhà dùng highlands-history-beans.jpg. Đã tra website Highlands; tải mới bị máy chủ từ chối HTTP 403 nên dùng nguồn chính thức có sẵn.
- QA Chrome headless desktop 1418×802: kiểm tra 0→1→2→3→4→0, nền đồng bộ đúng từng nhóm, ảnh nền tải đủ, chữ và sản phẩm chính nằm gọn trong viewport. Đã xem .qa-wheel-preview.png để kiểm tra bố cục trực quan.

### Sửa tương tác theo mẫu ngang
- Bỏ chiều dài 520svh và toàn bộ logic lấy tiến trình từ scrollY. Phần sản phẩm chỉ cao 100svh, chuyển ảnh theo trục X bằng nút, phím trái/phải, vuốt ngang hoặc con lăn trong khung. Tới đầu/cuối cho phép cuộn trang tiếp.
- Bỏ tiêu đề mục dài, tagline, mô tả và danh sách ví dụ khỏi HTML; giữ logo, tên nhóm, số thứ tự và hai mũi tên. Nền tiếp tục đổi theo sản phẩm, mờ và tối.

### Bánh xe sản phẩm — xoay đúng quỹ đạo mẫu
- Thay chuyển động trượt X bằng tọa độ đường tròn quanh một tâm lệch phải: x=cx−r·cos(a), y=cy+r·sin(a), góc sản phẩm=−a. Các sản phẩm cùng bán kính và bước góc 50°, luôn có sản phẩm lân cận nghiêng ở hai mép như mẫu. Sản phẩm chính ở giữa hiển thị trọn.
- Màu kem gần trắng #fdfcf9. Bỏ nền ảnh sản phẩm phóng lớn; dùng không gian Highlands, Drive-Thru, trải nghiệm khách hàng, quầy và flagship từ bộ ảnh đã ghi nguồn trong README. Nền blur 2px, brightness .46, đổi đồng bộ với nhóm.
- .qa-wheel-horizontal.html là bản xem tĩnh có tương tác, đã bỏ script tự bấm chuyển ảnh sau khi mở. JS chuyển 900ms, không tăng chiều dài trang.

### Ảnh riêng và theme thiên nhiên cho từng sản phẩm
- Sửa lỗi sprite chia ô đều làm Freeze lộ bánh mì và cắt đầu bánh mì: dùng từng PNG độc lập từ ảnh chính thức, object-fit:contain; giữ tỷ lệ gốc. Tăng chiều cao sản phẩm desktop từ 59% lên 78% viewport, chiều rộng tối đa 54% viewport. Giữ quỹ đạo xoay cùng tâm.
- Tải ảnh thật về assets/images, nén JPEG tối đa 1500px, quality 82. Bỏ filter tối, blur và lớp gradient phủ ảnh.
- Cà phê: nature-coffee-farm.jpg — https://4.bp.blogspot.com/-zFf7svrGMFo/TxgSpB9JHWI/AAAAAAAAA-c/j99L_4wrb6k/s1600/Brejetuba_cafezal_lindo.jpg ; bài https://zefogueteiro.blogspot.com/2012/01/fazenda-do-mirante.html .
- Trà: nature-lotus.jpg — https://img.thuthuat123.com/uploads/2019/07/13/anh-ca-mot-dam-sen-moi-no-bong_090626033.jpg ; bài https://thuthuat123.com/50-hinh-anh-hoa-sen-dep-nhat/ .
- Freeze trà xanh: nature-tea-hills.jpg — https://ik.imagekit.io/tvlk/blog/2024/05/L3zFhBkr-image.png ; bài https://www.traveloka.com/id-id/explore/destination/destinasi-wisata-kebun-teh-di-indonesia-dengan-view-terindah-acc/106480 .
- Thức ăn & bánh: nature-wheat.jpg — https://www.ukagriculturalfinance.com/wp-content/uploads/2017/01/AdobeStock_87848500-e1543426979688.jpeg ; bài https://www.ukagriculturalfinance.com/home/wheat-field-2/ .
- Cà phê tại nhà: nature-coffee-hills.jpg — https://calayorigins.com/cdn/shop/collections/28D35686-D63E-4AB8-A9CF-41242E600F16.jpg?v=1760658142 ; trang https://calayorigins.com/collections/cafe .
- Các ảnh thiên nhiên minh họa nguyên liệu, không khẳng định là vùng cung ứng của Highlands. QA desktop đủ năm trạng thái: sản phẩm chính nằm gọn, mỗi sản phẩm dùng đúng một ảnh riêng, năm nền tải đủ, filter none. Đã xem preview bánh mì để xác minh đủ hai đầu.

### Nền thiên nhiên có bề mặt đặt sản phẩm, cân bằng trắng mát
- Tạo 5 nền riêng bằng built-in ImageGen; file assets/images/stage-coffee.jpg, stage-tea.jpg, stage-freeze.jpg, stage-bread.jpg, stage-home.jpg. Ảnh 1536×1024, JPEG quality 94, giữ độ phân giải gốc. Thay các ảnh phong cảnh trước bằng cảnh chụp ngang có mặt đá xám ở tiền cảnh để sản phẩm có chỗ đứng.
- Nội dung: cà phê — lá/quả cà phê và đá xám; trà — hồ sen/lá sen và đá vôi xám; Freeze — vườn chè xanh và đá sáng; bánh — vườn thảo mộc xanh sage/rosemary và đá xám; đóng gói — cây cà phê, quả đỏ rượu và cao nguyên xanh mát.
- Prompt chung: sharp photorealistic advertising background plate; neutral white 6500K daylight, cool white/grey/green palette; broad empty flat stone foreground, low eye-level camera; no products/text/logo/people, no yellow/gold/beige/warm light/sunset. Đây là cảnh tạo minh họa, không phải ảnh chụp địa điểm thật.
- Căn đáy sản phẩm trên mặt đá, bóng tiếp xúc di chuyển đồng bộ và giảm trong lúc xoay; thu nhỏ sản phẩm lân cận trên cung để chân sản phẩm chính thoáng. Không phủ tối hay blur ảnh nền. Giữ nền giao diện gần trắng #fdfcf9.

### Nền theo art direction banner Highlands — bản đang dùng
- Đối chiếu trực tiếp banner chính thức Trà Sen Vàng https://www.highlandscoffee.com.vn/vnt_upload/weblink/HCO-7553-FESTIVE-2022-PRODUCT-KV-DIGITAL-WEB-1440X460.jpg và Phin Sữa Đá https://www.highlandscoffee.com.vn/vnt_upload/news/05_2019/HL_KVtalent2.jpg ; bài nguồn cà phê https://www.highlandscoffee.com.vn/vn/phin-sua-da-vi-dam-da-cho-ngay-moi-dam-chat.html . Bản tham khảo lưu ref-highlands-tea.jpg và ref-highlands-coffee.jpg, không dùng ảnh có chữ làm nền giao diện.
- Tạo năm background plate mới bằng ImageGen với hai banner làm tham khảo phong cách: campaign-coffee.jpg (nâu cà phê, gỗ, phin bạc, burgundy); campaign-tea.jpg (jade sáng, sen, hạt sen, bề mặt xanh); campaign-freeze.jpg (matcha, sữa, đá, mặt xanh bóng); campaign-bread.jpg (đỏ Highlands, gỗ và thớt); campaign-home.jpg (burgundy, gỗ espresso, hạt và phin). Đây là ảnh minh họa được tạo, không phải chiến dịch chính thức Highlands.
- Giữ độ phân giải gốc 1536×1024 hoặc 1672×941, JPEG quality 94. Prompt nhấn mạnh product advertising set, flavour-led colour harmony, ingredient accents only at edges, empty central product placement, neutral white lighting, no yellow/golden cast, no stone, no generic café interior, no text/logo/product duplication. Không phủ tối ảnh.
- Ảnh sản phẩm thật độc lập, giữ logo/bao bì, cắt phần padding trong suốt để căn chân/bóng sát mặt đặt; thay decoding async bằng sync cho các ảnh carousel để tránh khung đầu chưa vẽ ảnh.
- Số thứ tự đổi theo data-active-product: cà phê trắng sữa; trà xanh đậm; Freeze trắng; bánh đỏ rượu trên thớt sáng; đóng gói trắng trên gỗ nâu. Màu chữ và bóng chuyển 700ms; reduced motion tắt chuyển màu. Giữ quỹ đạo bánh xe và bố cục ít chữ.
- Đã xem ảnh ghép từng trạng thái và QA năm trạng thái desktop: ảnh nền mới tải đủ, sản phẩm chính nằm gọn viewport, số đổi màu theo nền, không thay đổi scrollY khi đổi nhóm.

### Tinh chỉnh khoảng cách, hồ sen/cỏ và bánh mì
- Sản phẩm rìa giảm từ 60% xuống 50% kích thước chính; bước góc tăng 50°→56° để thêm khoảng cách. Giữ quỹ đạo cùng tâm và chuyển động hiện tại.
- Chỉ thay nền trà/Freeze bằng ảnh tạo mới: campaign-tea-pond.jpg (hồ sen, lá/cánh sen, mặt nước phản chiếu) và campaign-freeze-grass.jpg (vườn chè và thảm cỏ phẳng). Ảnh gốc 1672×941 và 1536×1024, JPEG quality 94; ánh sáng trắng, không phủ tối/ám vàng. Prompt yêu cầu cảnh quảng cáo sản phẩm, vùng giữa trống, mặt nước/cỏ ở tiền cảnh, không thêm ly/chữ/logo.
- Bánh mì giảm kích thước khung 13%; xoay ảnh trong khung 36° và scale .8 để nằm ngang trên khay thay vì chéo vươn lên. Căn lại bóng tiếp xúc dưới bánh; giữ toàn bộ hai đầu.
- Nền trà thêm gợn nước nhẹ sát chân ly; số Freeze chuyển xanh đậm để phù hợp nền cỏ sáng. Đã xem preview ba trạng thái sửa và kiểm tra đủ năm nhóm: ảnh nền/sản phẩm tải đủ, sản phẩm chính trong viewport, số dùng đúng palette.

### Hoàn tác theo yêu cầu, giữ kích thước/khoảng cách
- Khôi phục campaign-tea.jpg và campaign-freeze.jpg, màu số và bóng tiếp xúc trước lượt đổi hồ sen/cỏ; bỏ xoay riêng bánh mì nằm ngang.
- Giữ sản phẩm rìa 50%, bước góc 56° và kích thước khung bánh mì đã giảm 13% theo yêu cầu giữ kích thước/khoảng cách hiện tại. Ảnh tạo mới vẫn lưu trong assets nhưng không được giao diện tham chiếu.

### Dọn file và giữ vị trí khi F11
- Xóa 70 file không còn dùng: ảnh các phương án cũ, ảnh nguồn/sprite đã thay bằng ảnh riêng, screenshot và các trang QA tạm. Giữ .qa-garden.html làm trang xem nhanh hiện tại; chương 1/2/3 không có tham chiếu file cục bộ bị thiếu sau khi dọn.
- Cụm mũi tên dùng grid place-items:center, padding 0, line-height 1, cố định kích thước 52px; cách đáy ít nhất 28px để không bị sát/cắt khi đổi viewport.
- F11 làm các phần 100svh thay chiều cao trong khi scrollY cũ không đổi, dẫn tới lệch phần đang xem. Thêm js/highlands-viewport.js vào chương 3: lưu section hiện tại và tỷ lệ cuộn trong section; khi resize/fullscreenchange căn lại ngay và sau khi layout ổn định. Không khởi tạo lại sản phẩm đang chọn.
- Kiểm tra resize mô phỏng trong iframe qua chiều cao 670→900→670→950→670: mục sản phẩm giữ vị trí top sai số 0.11px, giữ nhóm 3; điểm trong lịch sử giữ tỷ lệ 20% (đo 20.012%). Tất cả ảnh chương 3 tải đủ. Chưa bấm F11 trực tiếp trên cửa sổ người dùng.
- Dọn thêm bốn CSS/JS không còn được bất kỳ trang hoặc module nào tham chiếu: desktop-fit.css, text-alignment.css, cases.js, paper-scroll.js. Tổng cộng đã xóa 74 file cũ.

### Sửa tiếp lỗi F11 trên các trang còn thiếu
- Bản trước chỉ được nạp ở chương 3. Nay nạp js/highlands-viewport.js?v=2 cuối cả index.html, chuong-1.html, chuong-3.html và .qa-garden.html.
- Nhận diện slide hiện tại cho cả ba chương, giữ độ lệch tương đối ở đầu slide, khóa cập nhật anchor trong lúc resize và khôi phục tại 0/80/200/450/650ms để xử lý cả các fitter bố cục chạy trễ. Tắt scroll anchoring của trình duyệt trên các trang này để không tranh vị trí.
- QA mô phỏng resize 670→900→670 trên các slide cuối chương 1/2 và sản phẩm chương 3: lệch dưới 1px ở tất cả trạng thái; nhóm sản phẩm 3 không đổi. Không phải thử phím F11 trực tiếp.

### Căn vật trang trí nền vào trong
- Dịch ảnh nền từ -30% sang -36% chiều rộng khung tròn, đưa phin, hạt, lá, đá và khăn vào gần sản phẩm hơn khoảng 6% chiều rộng khung; giữ nguyên kích thước/khoảng cách sản phẩm và màu nền. Đã xem preview Freeze ở desktop, vật trang trí hiện rõ hơn và không hở mép nền.


### F11 giữ nguyên hình thức như cửa sổ thường
- Trước khi vào fullscreen lưu kích thước canvas sản phẩm, logo, cỡ tên nhóm và vị trí heading. Khi F11 chỉ căn canvas cũ vào giữa phần màn hình tăng thêm; không kéo giãn nền, sản phẩm hay khoảng cách. Thoát F11 trả lại responsive bình thường.
- Chỉ áp dụng khung sản phẩm. Giữ nhóm đang chọn và cơ chế giữ vị trí cuộn. Nếu tải trang lần đầu ngay trong fullscreen (chưa có kích thước cửa sổ thường), dùng chiều cao dự phòng trừ 110px.
- Kiểm tra mô phỏng 1366×670→1366×900: canvas giữ 1366×670, ly giữ 328×523, tên nhóm 60.104px và logo 65px, nhóm 1 không đổi.

### Full viewport và mô tả thật ngắn dưới tên nhóm
- Bỏ cơ chế giữ canvas cửa sổ thường khi F11; khung sản phẩm luôn rộng 100%, cao 100svh, đo lại sản phẩm theo viewport. Giữ cơ chế neo slide khi resize, nhóm đang chọn, tỷ lệ sản phẩm rìa và bước góc hiện tại.
- Mỗi tên nhóm thêm đúng một câu ngắn, chữ 26px; tóm tắt từ mục 3.1.2 trong tab BẢN SỬA của tài liệu https://docs.google.com/document/d/1igwsZ5sgBRJlqgujBXbyy1vqqf9YhYaZCX2xI_taol8/edit?tab=t.f42o8bd8vviu . Không thêm nguồn hay chữ phụ khác lên giao diện.

- Căn giữa tên nhóm và mô tả ngắn trong cột chữ của carousel sản phẩm.


- Cụm tên nhóm và mô tả đặt top:50%, translateY(-50%) để căn giữa theo chiều cao viewport.


### Đồng nhất kích thước hình ảnh giữa cửa sổ thường và F11
- Nguyên nhân: sản phẩm dùng chiều cao viewport, logo đổi kích thước ở max-height:760px, còn nền object-fit:cover phủ cả khung tròn cao 154svh nên mỗi phần phóng khác nhau khi tăng chiều cao.
- Desktop: chiều cao sản phẩm theo chiều rộng (.385w, có giới hạn an toàn .8h); bán kính theo .44w; logo dùng cùng quy tắc theo chiều rộng, bỏ khác biệt do breakpoint chiều cao. Khung vẫn 100% ×100svh.
- Ảnh nền chỉ phủ phần viewport nhìn thấy bên trong ellipse, không phủ toàn bộ chiều cao ellipse 154%; nền 105% và dịch -39% để giữ đồ trang trí trong khung, giữ mức cover ổn định ở hai chế độ. F11 mở thêm vùng ảnh theo chiều dọc thay vì phóng lớn ảnh.
- Cụm chữ chỉ lấy chiều cao panel đang hoạt động, không lấy chiều cao tối đa của các panel ẩn; căn giữa viewport đúng ở cả năm nhóm.
- QA 1366×670↔1366×900 và 1920×950↔1920×1200: kích thước từng sản phẩm/logo và hệ số phóng nền không đổi giữa hai chiều cao; chữ giữa viewport sai số 0px, tất cả sản phẩm chính vừa khung và canvas phủ đủ viewport. Đã xem ảnh ghép trà ở hai chiều cao để so sánh trực quan. Đây là kiểm tra resize, chưa bấm F11 trực tiếp.

### F11 tăng nhẹ sản phẩm và xóa mảng đỏ nền Freeze
- Khi fullscreen/F11, kích thước sản phẩm tăng 6% so với cửa sổ thường; giữ giới hạn an toàn 80% chiều cao, tỷ lệ sản phẩm rìa và khoảng cách góc không đổi. QA mô phỏng 1366×670→1366×900: sản phẩm cao 526→557px, đủ năm sản phẩm nằm gọn viewport.
- Mảng đỏ ở góc là hai dải burgundy đã có trong bitmap campaign-freeze.jpg, không phải lỗi CSS. Dùng ImageGen chỉnh riêng hai góc để nối nền xanh/mặt bàn; giữ sữa, lá trà, đá và bố cục. File đang dùng campaign-freeze-clean.jpg (JPEG quality 94); đã xóa ảnh đỏ cũ không còn dùng.

## 3.1.3–3.1.4 — Khách hàng, định vị và kênh tiếp cận
- Nối trực tiếp ba slide sau 3.1.2 trong chuong-3.html: #khach-hang-highlands, #dinh-vi-highlands, #kenh-tiep-can-highlands. CSS riêng css/highlands-insights.css, reveal nhẹ js/highlands-insights.js. Mỗi slide desktop 100svh, khoảng cách 32px ngoài nội dung, chữ quan trọng tối thiểu 26px.
- Bố cục: ảnh cộng đồng lớn với ba nét chân dung; nền burgundy và ba câu định vị; ba điểm chạm cửa hàng/điện thoại/truyền thông. Điện thoại là minh họa dựng bằng HTML từ ảnh sản phẩm chính thức, không phải ảnh chụp giao diện ứng dụng thật. Có reduced motion và fallback hiện nội dung nếu không hỗ trợ IntersectionObserver.
- Nội dung rút gọn từ mục 3.1.3 và 3.1.4, tab BẢN SỬA: https://docs.google.com/document/d/1igwsZ5sgBRJlqgujBXbyy1vqqf9YhYaZCX2xI_taol8/edit?tab=t.f42o8bd8vviu . Thông tin độ tuổi, thu nhập và hành vi là nội dung tài liệu nhóm, không trình bày như số liệu khảo sát mới.
- Tái sử dụng ảnh cộng đồng/phin/khách hàng/Drive-Thru chính thức đã ghi nguồn ở các mục trên; ảnh không gian marketing-highlands-wide.jpg có nguồn đã lưu trong README. Không hiển thị nguồn trên slide.
- Banner mới tải từ website đặt hàng Highlands: https://bizweb.dktcdn.net/100/487/455/files/chill-he-tra-dau-tam-highlands-home-banner-1.jpg?v=1711937113473 ; bài https://order.highlandscoffee.com.vn/he-chill-cung-highlands-thanh-mat-vi-dau-tam . Lưu highlands-channel-campaign.jpg, nén 1200px quality 88 (~149KB); banner chỉ minh họa kênh giới thiệu sản phẩm, không khẳng định ưu đãi trong ảnh còn hiệu lực.
- Bổ sung ba slide vào bộ giữ vị trí khi resize/F11. Không thay đổi bố cục/tương tác bánh xe hiện có.
- QA Chrome desktop 1344×670: ba slide cao đúng viewport, không tràn chữ/hình, font nhỏ nhất 26px, không thiếu ảnh. Khung nhỏ 512×902: ảnh/chữ trong chiều ngang, giữ 26px và xếp dọc. Đã xem ảnh render từng slide, kiểm tra mọi src/href cục bộ của chương 3 đều tồn tại. Dọn toàn bộ file QA tạm sau kiểm tra.

### Làm thoáng 3.1.3–3.1.4 và tách các phần
- Tăng khoảng cách ngoài mỗi slide từ 32px lên clamp(80px,10svh,140px), gồm cả khoảng cách sau phần sản phẩm; dùng flex gap để không bị gộp margin. Nội dung mỗi slide desktop vẫn 100svh, không cộng khoảng trống vào chiều cao slide.
- Bỏ nền đỏ toàn khung, vòng tròn trang trí, collage nhiều ảnh, điện thoại và poster nghiêng, các đường nối/gạch thừa. Giữ nền gần trắng và tiêu đề đỏ Highlands.
- Định vị còn một ảnh phin lớn và ba ý ngắn. Kênh tiếp cận còn một ảnh cửa hàng và ba dòng nhóm kênh; bỏ câu kết nối dư. Ảnh bo góc nhẹ đồng nhất, giảm cỡ số tuổi để không lấn át các ý khác.
- QA desktop 1344×670: cả ba slide cao 670px, cách nhau 80px, không tràn nội dung, chữ nhỏ nhất 26px. Đã xem render bố cục mới. Xóa banner tải thử không còn được dùng và file QA tạm.

### Làm lại hệ chữ 3.1.3–3.1.4, ảnh minh họa không lặp
- Lưu quy tắc không lặp ảnh vào AGENTS.md. Mỗi ảnh minh họa trong chương 3 hiện chỉ xuất hiện một lần; ba ảnh mới có nội dung khác các ảnh trước, không chỉ đổi tên file.
- Thiết kế lại nhịp đọc: một cột chữ, kicker 26px, một headline hai dòng, sau đó các ý phụ 26px chung hàng lề. Không rải nhiều tiêu đề lớn cùng trọng lượng quanh ảnh. Khách hàng: một chân dung tổng quát và tuổi/thu nhập/hành vi; định vị: ba giá trị cùng một cột; phân phối: ba hàng nhãn–kênh thống nhất.
- Giữ phong cách Highlands với nền gần trắng, đỏ burgundy, ảnh thương hiệu thật và đường cong vòm; giữ gap 80–140px ngoài chiều cao slide. Không thay phần sản phẩm hay lịch sử.
- Ảnh khách trẻ mới: https://photo.znews.vn/Uploaded/wyhktpu/2018_11_30/10.jpg ; bài https://znews.vn/highlands-coffee-hanh-trinh-lan-toa-niem-tu-hao-sinh-ra-tu-dat-viet-post896476.html ; lưu highlands-audience-friends.jpg, 1400px, ~277KB. Giữ nguyên nhóm người khi hiển thị desktop.
- Ảnh cà phê mới: https://www.highlandscoffee.com.vn/vnt_upload/news/05_2019/PSD_Morning.jpg ; bài https://www.highlandscoffee.com.vn/vn/phin-sua-da-vi-dam-da-cho-ngay-moi-dam-chat.html ; lưu highlands-positioning-phin.jpg, ~100KB. Ảnh này không còn được sử dụng ở slide khác.
- Ảnh ứng dụng mới: https://www.highlandscoffee.com.vn/vnt_upload/home/Website_bannerr.png ; nguồn https://www.highlandscoffee.com.vn/en/ và bài giới thiệu https://www.highlandscoffee.com.vn/vn/app-thanh-vien-highlandsdi-chinh-thuc-ra-mat.html ; lưu highlands-channels-app.jpg, 1400px, ~137KB. Banner chỉ minh họa kênh tiếp cận, không phải cam kết hiệu lực ưu đãi trong ảnh.
- QA desktop 1344×670 và khung nhỏ 512×902: không tràn chữ/hình, chữ nhỏ nhất 26px, ảnh tải đủ; gap desktop 80px, mobile 72px. Đã render và xem riêng từng slide. Kiểm tra src chương 3 không còn ảnh trùng; ba file mới khác nhau cả nội dung và SHA-256. Chương 1/2 còn dùng chung ảnh bìa/thumbnail điều hướng sẵn có, không sửa ngoài phạm vi ba slide mới.

### Bố cục mở, bỏ khung ảnh
- Bỏ toàn bộ viền/bo góc/bóng và hình vòm bao ảnh của ba slide 3.1.3–3.1.4; giữ ảnh riêng, không lặp. Không đóng ảnh vào card.
- Khách hàng: headline ngang ở trên, ảnh gặp gỡ tràn mép trái/dưới, nhóm thông tin tuổi/thu nhập bên phải trên mảng nền sáng. Định vị: ảnh cà phê phủ nửa phải và hòa màu vào nền burgundy, chữ một cột bên trái. Kênh: tiêu đề bên trái, hình ứng dụng sát cạnh phải, ba nhóm kênh thành dải ngang dưới.
- Giữ khoảng cách ngoài slide 80–140px và chữ tối thiểu 26px. Kiểm tra desktop 1344×670 và mobile 512×902; nội dung nằm trong từng slide và không tràn ngang. Đã render/view ba bố cục mới. Không tạo thêm slide hoặc thêm chữ.

- Đổi nền khoảng trống giữa các slide 3.1.3–3.1.4 từ xám sang cùng màu gần trắng #fdfcf9; giữ nguyên khoảng cách ngoài slide để không còn dải xám ngăn phần.

### Thiết kế lại 3.1.3–3.1.4 — bố cục thoáng và khoảng cách lớn
- Tham khảo https://coffeesupreme.com/ và https://redbrick.coffee/ về chữ lớn, ảnh mở sát mép, nhịp bố cục; đối chiếu nhận diện Highlands tại https://brandcoat.webflow.io/case-study/highlands-coffee và https://www.highlandscoffee.com.vn/vn/highlands-coffee-la-cua-chung-minh-.html .
- Khách hàng dùng headline bên trái, số tuổi lớn phía dưới, ảnh cộng đồng bên phải. Định vị dùng nền đỏ Highlands, ảnh phin hòa mép và ba giá trị theo hàng ngang. Kênh tiếp cận dùng tiêu đề lệch tầng, banner ứng dụng và ba nhóm kênh rõ ràng; không thêm slide hay ảnh lặp.
- Khoảng cách ngoài slide tăng lên clamp(220px,28svh,360px), mobile 160px; nền khoảng trống gần trắng #fdfcf9. Giữ chữ nội dung từ 26px.
- Đã xem ảnh render cả ba slide; kiểm tra khung 1344×670, 1898×1102 và 512×902: không tràn chữ/ảnh, cỡ chữ tối thiểu 26px. Mobile cho phép tăng chiều cao slide theo nội dung.

### Sắp lại chữ khách hàng, đổi hai bố cục còn lại
- Khách hàng giữ nguyên ảnh và bố cục chính; gom headline, nhóm khách và tuổi/thu nhập vào một cụm căn giữa theo chiều dọc, khoảng cách 32px để tránh tách chữ thành hai khối xa nhau.
- Định vị đổi sang ảnh cao bên trái, headline và ba ý theo chiều dọc bên phải. Kênh tiếp cận đổi sang tiêu đề + banner bên trái, ba kênh theo chiều dọc bên phải.
- Giữ ảnh riêng, khoảng cách ngoài slide và chữ tối thiểu 26px. Đã xem render ba phần và kiểm tra desktop thấp không tràn chữ.
### Chế độ slide từ 3.1.3
- Từ khách hàng mục tiêu trở đi dùng chung js/slide-mode.js và css/slide-mode.css như chương 1–2. Bộ điều khiển chỉ xuất hiện khi đến nhóm này, đếm riêng ba slide; hỗ trợ nút trước/sau và PageUp/PageDown. Phần trước 3.1.3 giữ cách vận hành cũ.
- Canvas desktop rộng 94%, tối đa 1440px, cao viewport trừ 48px, có lề 24px khi chuyển đến. Giữ khoảng trống ngoài các slide, màu Highlands và nội dung hiện tại.
- Kiểm tra trên trang chương 3 thật ở 1344×670: ba slide không tràn chữ; controls ẩn trước nhóm và hiện trong nhóm; nút tiếp theo đến đúng slide 2 ở top 24px, bộ đếm 02 / 3. Sửa cập nhật bộ đếm ngay khi người dùng bật giảm chuyển động.
### Slide định vị phủ viewport
- Riêng slide định vị 3.1.3 dùng 100% chiều rộng và 100svh, bỏ bo góc/lề quanh canvas, căn đầu slide tại top 0 khi điều hướng. Các slide khác giữ nguyên.
- Kéo ba giá trị lên gần headline, dùng khoảng cách đều thay vì giãn tới đáy. Kiểm tra khung 1344×670 và 1898×982: slide khớp viewport, không tràn chữ.
### Phần 3.2 — hai slide ngắn
- Nối trực tiếp sau 3.1.4 trong deck: tổng quan thanh toán/đối tác/hình thức marketing, rồi chiến dịch Highlands × MoMo. Không có slide mở đầu riêng; mỗi slide full viewport và dùng chung bộ điều khiển (deck hiện có 5 slide).
- Nội dung rút từ tab tài liệu: https://docs.google.com/document/d/1igwsZ5sgBRJlqgujBXbyy1vqqf9YhYaZCX2xI_taol8/edit?tab=t.f42o8bd8vviu .
- Đối chiếu chiến dịch tại nguồn Highlands: https://www.highlandscoffee.com.vn/en/mua-1-tang-1-phin-sua-da-khi-thanh-toan-qua-vi-tra-sau-momo.html . Ảnh chính thức tải riêng, không lặp ảnh: https://www.highlandscoffee.com.vn/vnt_upload/news/05_2026/MOMO__B1G1__anh_L.jpg ; lưu assets/images/highlands-momo-b1g1-2026.jpg (~315KB). Nêu điều kiện chính: mua cỡ L tặng cỡ S, Ví Trả Sau MoMo, thứ Sáu–Chủ nhật; không trình bày mã/hạn mức chi tiết tại 3.2.
- Đã xem render hai slide và kiểm tra khung desktop 1344×670: không tràn chữ/ảnh, chữ nội dung từ 26px. Ảnh chiến dịch hiển thị toàn bộ bằng contain.
### 3.2 chia thành ba slide theo yêu cầu
- Slide 1 gộp 3.2.1–3.2.2: phương thức thanh toán và đối tác ví; thay tên ví bằng ảnh MoMo, Zalopay và biểu tượng ShopeePay. Slide 2 là 3.2.3, ba hình thức marketing ngắn. Slide 3 là 3.2.4, ảnh chiến dịch bên phải, ưu đãi/thời gian/cách tham gia bên trái, lý do chọn phía dưới. Deck hiện có sáu slide.
- Logo MoMo: https://commons.wikimedia.org/wiki/File:MoMo_Logo_App.svg (nguồn hãng được ghi trên trang: developers.momo.vn); tải https://upload.wikimedia.org/wikipedia/commons/a/a0/MoMo_Logo_App.svg . Zalopay từ website chính thức: https://simg.zalopay.com.vn/zlp-website/assets/new_logo_6c5db2d21b.svg . Biểu tượng ShopeePay dạng nét: https://www.svgrepo.com/svg/519216/shopeepay (CC0, Arcticons), đổi màu nét sang #ee4d2d; dùng làm icon nhận diện, không phải wordmark chính thức.
- Đã xem render cả ba slide; kiểm tra 1344×670 không tràn nội dung, ảnh/logo tải thành công. Chữ nội dung từ 26px, ảnh chiến dịch giữ toàn bộ bằng contain.
### Căn logo và đổi bố cục 3.2.3–3.2.4
- Ba logo ví dùng ba cột bằng nhau, căn giữa từng cột và cùng hàng để khoảng cách đều dù tỷ lệ logo khác nhau.
- 3.2.3 chuyển từ ba cột ngang sang headline bên trái, ba hình thức xếp dọc bên phải; ký hiệu và chữ căn chung trục.
- 3.2.4 chuyển ảnh sang trái, tăng vùng ảnh từ 53% lên 68% chiều rộng và từ 53% lên 73% chiều cao; hiển thị toàn bộ bằng contain. Thông tin ngắn xếp bên phải, tên chiến dịch nằm trên cùng.
- Đã xem render hai bố cục mới và kiểm tra desktop 1344×670 không tràn nội dung. Không đổi số slide hoặc thêm ảnh lặp.
### Bố cục 3.2.4 theo grid, loại bỏ chồng chữ
- Thay các vị trí tuyệt đối của slide chiến dịch bằng grid: tiêu đề/ưu đãi bên trái, ảnh lớn bên phải, ba thông tin khi nào/tham gia/lý do chọn thành hàng riêng phía dưới. Chiều cao các hàng theo nội dung để không đè lên nhau khi viewport thay đổi.
- Đã xem render desktop và kiểm tra từng cặp khung chữ tại 1344×670, 1898×982, 512×902: không chồng chữ và không tràn. Nội dung từ 26px; ảnh giữ nguyên tỷ lệ và toàn bộ nội dung.
### 3.3 — Hành trình hóa đơn SOSTAC (08/11/2026)
- Thêm sáu slide nối ngay sau 3.2.4: Situation, Objectives, Strategy, Tactics, Action, Control. Dùng motif hóa đơn dựng bằng HTML/CSS; nội dung hóa đơn thay đổi theo từng bước, không dùng lại ảnh/banner ở 3.2. Thanh SOSTAC có thể bấm chuyển trực tiếp và đánh dấu bước hiện tại.
- Action có năm bước chọn món/quét QR/nhập mã/chọn Ví Trả Sau/nhận đồ uống; nút Tiếp và Chạy lại cập nhật hóa đơn minh họa, aria-pressed và vùng thông báo. Không thực hiện giao dịch thật. Chuyển động in hóa đơn/đóng dấu nhẹ, tôn trọng prefers-reduced-motion.
- Nội dung lấy từ phần 3.3 của tài liệu: https://docs.google.com/document/d/1igwsZ5sgBRJlqgujBXbyy1vqqf9YhYaZCX2xI_taol8/edit?tab=t.f42o8bd8vviu . Điều kiện chiến dịch đối chiếu nguồn Highlands đã lưu ở 3.2: https://www.highlandscoffee.com.vn/en/mua-1-tang-1-phin-sua-da-khi-thanh-toan-qua-vi-tra-sau-momo.html . Mục tiêu/chiến lược được ghi là phân tích; chỉ tiêu Control là đề xuất, không dựng số liệu kết quả.
- CSS riêng css/highlands-sostac.css; tương tác js/highlands-sostac.js. Giữ deck và điều khiển js/slide-mode.js, tổng cộng 12 slide từ 3.1.3. Điều hướng qua SOSTAC từ slide 07/12 đến Action 11/12 đúng top 0; chạy thử hoàn tất và chạy lại thành công. Cỡ chữ nội dung nhỏ nhất 26px.
- Đã xem render cả sáu slide; kiểm tra 1344×670, 1024×670 và 512×902: không chồng khung chữ, không tràn ngang/nội dung. Desktop mỗi slide trong viewport; mobile tăng chiều cao theo nội dung. Kiểm tra cả năm trạng thái Action không tràn. Không để lại file QA.
### 3.3 đổi sang bộ thẻ thanh toán & cốc Phin Sữa Đá (08/11/2026)
- Thay sáu canvas hóa đơn bằng một sân khấu có sáu trạng thái SOSTAC. Cốc giữ nguyên vị trí, cà phê tăng 1/6 mỗi bước; thẻ/nền đổi xanh trà, hồng sen, đỏ Highlands, cam đào, xanh ngọc, xanh matcha. Không thay đổi 3.1–3.2.
- Cốc dựng bằng SVG với khối cà phê, mặt nước, đá nhiều mặt, thành ly trong, phản sáng, bóng và giọt ngưng tụ. Chuyển bước có nước dâng, đá nổi, gợn mặt nước và vệt rót; tất cả bỏ chuyển động khi prefers-reduced-motion. Dùng logo nhận diện Highlands đã có, không dùng lại ảnh sản phẩm/banner.
- Đọc lại đúng tab Google Docs qua connector ngày 08/11/2026: https://docs.google.com/document/d/1igwsZ5sgBRJlqgujBXbyy1vqqf9YhYaZCX2xI_taol8/edit?tab=t.f42o8bd8vviu . Câu trên thẻ được diễn đạt ngắn theo phần 3.3, không đặt trong ngoặc kép như trích nguyên văn. Situation giữ bối cảnh F&B và thế mạnh hai bên; Objectives nêu rõ là định hướng phân tích, khách đủ điều kiện Ví Trả Sau; Strategy giữ điều kiện thanh toán; Tactics giữ cỡ L/S, cuối tuần, hai mã theo giá, 1 lần/2 tuần và tối đa 2 lần/tháng; Action giữ đúng luồng; Control phân biệt kiểm soát điều kiện với KPI đề xuất và chưa có kết quả thực tế.
- Nút SOSTAC, trước/sau và phím trái/phải chuyển thẻ. Dùng sự kiện presentation-step để PageUp/PageDown hoặc điều khiển slide chung chuyển trạng thái bên trong 3.3; ở biên vẫn điều hướng slide. Bộ điều khiển chung ẩn khi sân khấu này đang hiển thị để không chồng điều khiển riêng. Hash của sáu bước cũ vẫn mở được trạng thái tương ứng.
- Kiểm tra cả sáu trạng thái ở 1344×670, 1024×670 và 512×902: không chồng chữ/không tràn thẻ/không tràn ngang; chữ nội dung tối thiểu 26px. Đã xem render ly 1/6 và đầy. Kiểm tra trên trang thật: 7 canvas (sáu canvas trước + sân khấu 3.3), PageDown tăng bước, bước cuối đầy, PageUp lùi đúng; thay đổi viewport không tạo lại trạng thái nên giữ bước đang xem. File QA được dọn sau kiểm tra.

### Đổi thẻ thành vé Highlands
- Theo yêu cầu undo: bỏ kiểu xếp tầng theo ảnh tham khảo và sáu render cốc 3D của lần sửa vừa trước; cốc quay về kiểu minh họa có mức cà phê và đá di chuyển theo bước. Xóa tài nguyên render và script dựng không còn được dùng.
- Thẻ đổi sang vé Highlands: nền gần trắng, logo và headline đỏ, cuống vé đỏ với số bước, đường xé và hai vết khoét. Không còn chip/contactless, thẻ màu xếp tầng hay hình học trang trí. Giữ nội dung phân tích một luận điểm + hai ý ngắn, không lặp nhắc thiếu dữ liệu.
- Đã xem render vé và kiểm tra cả sáu trạng thái ở 1344×670, 1024×670, 512×902: không chồng chữ hoặc tràn ngang; bộ điều khiển/mực cà phê vẫn đổi theo bước. Nội dung từ 26px.
### 3.3 — Không gian toàn viewport, chọn bước bằng vé ở mép dưới
- Theo hướng mới: bỏ hoàn toàn cốc và vé lớn chứa chữ. Phần 3.3 là một sân khấu fullscreen; sáu vé S–O–S–T–A–C nằm giữa mép dưới. Bấm vé có nhịp rút lên rồi nội dung/hình minh họa xuất hiện, không dịch bố cục.
- Nội dung mở ra trong không gian, gồm luận điểm và ba cụm phân tích theo tài liệu 3.3. Màu nền xanh trà/hồng/đỏ nhạt/cam đào/xanh ngọc/xanh lá; giữ chữ nhấn và vé đang chọn đỏ Highlands. Shading nhẹ cho chữ, ảnh, vé; các silhouette người/cửa sổ/chữ cái lớn có nhiều tỷ lệ và độ mờ để tạo chiều sâu. Có parallax rất nhẹ với con trỏ, tắt ở reduced motion.
- Sáu hình minh họa vector gốc riêng tại assets/illustrations/sostac: cửa hàng, mục tiêu, kết nối đối tác, thiết kế ưu đãi, thanh toán tại quầy, kiểm soát. Không dùng lại ảnh các phần khác. Bảng theo dõi ở Control chỉ minh họa chức năng, không hiển thị số liệu kết quả hoặc đường tăng trưởng.
- Giữ js/slide-mode.js và sự kiện presentation-step cho PageUp/PageDown; vé có role tab, aria-selected, hỗ trợ trái/phải và Home/End, khôi phục đúng các hash SOSTAC cũ. Bấm nhanh liên tiếp hủy chuyển cảnh cũ, chỉ hiện bước cuối được chọn. Reduced motion chuyển trực tiếp.
- Đã xem render Situation, Tactics, Control; kiểm tra sáu trạng thái ở 1344×670, 1024×670 và 512×902 không chồng chữ/tràn ngang. Kiểm tra trên trang thật: bấm nhanh đến Control, hình tải đủ, aria-busy kết thúc đúng; phím trái trở về Action và đưa focus đúng vé. Chữ nội dung nhỏ nhất 26px. Mobile tăng chiều cao theo nội dung và giữ hàng vé sticky trong vùng này.
### 3.3 — Không gian ảnh thật và chữ ở giữa (08/11/2026)
- Đổi minh họa isometric sang sáu ảnh thật khác nhau: khách hàng, làm việc tại quán, hoạt động văn hóa, phin truyền thống, quét QR, pha phin. Ảnh nổi bên cạnh vùng chữ trung tâm, có bóng và độ nghiêng nhẹ; nền gần trắng, giữ vé Highlands bên dưới.
- Nội dung cuộn trong vùng giữa theo yêu cầu mới; không thu nhỏ chữ để ép vừa màn hình. Mỗi lần chọn vé đưa nội dung về đầu. Cuộn bằng chuột hoặc bàn phím khi focus vùng chữ; giữ phím trái/phải để chuyển bước. Mobile dành riêng hàng ảnh trên vùng đọc, không đặt ảnh đè chữ. Nội dung từ 26px.
- Ảnh mang tính minh họa bối cảnh. Ảnh QR là thao tác tại Highlands, không mô tả giao diện MoMo; ảnh pha phin ở Control minh họa vận hành, không phải dữ liệu kết quả.
- Nguồn ảnh: https://znews.vn/highlands-coffee-hanh-trinh-lan-toa-niem-tu-hao-sinh-ra-tu-dat-viet-post896476.html — store: image003_6.jpg; guests: 9.jpg; community: image005_2.jpg; service: image007.jpg; origin: image001_3.jpg (thư mục ảnh https://photo.znews.vn/Uploaded/wyhktpu/2018_11_30/).
- Nguồn ảnh payment: https://www.highlandscoffee.com.vn/en/highlands-coffee-bat-tay-cung-napas-va-ra-mat-phindi-xoai-dua.html . Các ảnh mới lưu tại assets/images/sostac-space, đã giảm dung lượng và giữ nguyên khung hình.
- Kiểm tra sáu bước desktop 1344×800 và mobile 512×902: không tràn ngang, cuộn đến được nội dung cuối, cỡ chữ đoạn 26px; đã xem render desktop và mobile.

### 3.3 — Bố cục đọc rộng, ẩn thanh cuộn
- Tiêu đề ở trên; chữ chiếm gần 2/3 chiều ngang và ảnh thật xen bên trái/phải giữa các bước. Toàn bộ bài gồm chữ và ảnh cùng cuộn, vé vẫn ở mép dưới. Mobile ảnh nằm giữa các cụm nội dung.
- Chỉ dùng ba bảng màu O–S–T: hồng #8e4669, đỏ #913749, cam đào #9b5034; luân phiên sáu bước, nền pha nhạt. Ẩn scrollbar của vùng đọc nhưng giữ cuộn chuột, chạm và bàn phím; giữ gợi ý cuộn, chữ tối thiểu 26px.
- Đã xem render desktop và kiểm tra sáu bước trên mobile: không tràn ngang, cuộn đến cuối, scrollbar none, chỉ ba màu theo yêu cầu.

### 3.3 — Cụm ảnh nhiều lớp, mascot MoMo và bánh Highlands
- Mỗi bước có ba hình riêng: ảnh bối cảnh đã chọn, một tư thế mascot MoMo và một món bánh Highlands. Sáu tư thế và sáu món khác nhau; ảnh thật giữ đủ khung, mascot nền trong, món bánh hòa nền bằng CSS multiply, bóng nhẹ và độ nghiêng tạo ba lớp. Không thêm khung chứa chữ. Giữ ba tông O–S–T và thanh cuộn ẩn.
- Các món chỉ trang trí nhận diện Highlands, không thể hiện là quà tặng trong chiến dịch Phin Sữa Đá. Nội dung điều kiện không đổi. Mascot dùng nguyên bản hãng, giữ màu và tỷ lệ.
- Nguồn mascot: https://momopartners.m-n.associates/tro-thu/momo/ ; ảnh 2.5D mascot_momo_17-1.png, 18-1.png, 19-1.png trong /wp-content/uploads/2024/08/; ảnh 3D MOMO_Mascot_Pose_2-png.webp, 3-png.webp, 4-png.webp trong /wp-content/uploads/2025/04/.
- Nguồn món: https://www.highlandscoffee.com.vn/vn/banh-ngot.html . Ảnh /vnt_upload/product/01_2026/MOUSSE_CA_CAO.jpg, BANH_PHO_MAI_CHANH_DAY.jpg, BANH_TIRAMISU.jpg, CROISAINT.jpg, BANH_CHUOI.jpg; /vnt_upload/product/03_2018/CARAMELPHOMAI.jpg. Lưu bản tối ưu trong assets/images/sostac-space.
- Đã xem render desktop và mobile. Kiểm tra sáu trạng thái 1344×800, 512×902: ba ảnh tải đủ, không tràn ngang, cuộn tới cuối và scrollbar none. Ảnh/món nằm trong vùng ảnh, không chồng vào các đoạn chữ.

### 3.3 — Dàn lại ảnh quanh nội dung
- Đưa chữ về cột giữa, ảnh bối cảnh sang trái; mascot ở góc phải trên, món bánh ở bên phải dưới. Các hình có khoảng riêng thay vì chồng thành một cụm. Giữ chiều cuộn, vé dưới và ba tông O–S–T.
- Mobile: đoạn mở đầu, ảnh thật, các đoạn tiếp theo, rồi mascot và món bánh cạnh nhau. Đã xem render desktop và kiểm tra sáu bước mobile không tràn ngang, hình tải đủ và cuộn đến cuối.

### 3.3 — Ảnh chữ nhật lớn và đặt thẳng
- Tăng cột ảnh bối cảnh từ khoảng 1/4 lên gần 2/5 vùng nội dung, bỏ toàn bộ góc nghiêng của ảnh chữ nhật, giữ nguyên tỷ lệ và đủ khung. Xen ảnh trái/phải giữa các bước; chữ ở cột rộng bên cạnh, mascot và món bánh nằm ở dải trang trí còn lại.
- Màn hình vừa gom mascot/bánh thành một hàng dưới ảnh; mobile ảnh rộng toàn vùng đọc. Giữ ba màu O–S–T, vé và scrollbar ẩn. Đã xem desktop và kiểm tra sáu bước mobile: ảnh đặt thẳng, tải đủ, không tràn ngang, đọc tới cuối.

### 3.3 — Mascot tương tác với tiêu đề
- Đưa mascot lên cùng hàng tiêu đề, nghiêng nhẹ về chữ; ảnh bối cảnh vẫn lớn và đặt thẳng. Bỏ bộ đếm 01/06 ở đầu sân khấu và phần JS cập nhật nó.
- Bánh nằm trong một lớp nền cùng màu sân khấu; ảnh nhân màu trên lớp này để loại mảng trắng ở góc, không thay đổi ảnh gốc. Đã xem render đầu/cuối vùng đọc: mảng trắng không còn. Kiểm tra sáu bước mobile: ảnh tải đủ, không tràn ngang, cuộn tới cuối, không còn bộ đếm.

### 3.3 — Shape ảnh đa dạng
- Bỏ dòng gợi ý cuộn và ảnh bánh; vùng đọc vẫn cuộn bình thường, không hiện scrollbar. Giữ mascot cạnh tiêu đề.
- Sáu khung ảnh khác nhau: vòm, hai shape chữ nhật bo góc/trụ đứng, hữu cơ, hai phần ngang, giọt bo tròn và bậc lệch. Các shape kép dùng chung một ảnh liên tục qua mask CSS, không lặp ảnh thành hai bản độc lập. Giữ ảnh đặt thẳng và ba tông O–S–T.

- Bỏ lớp nền riêng của space-story/space-collage sau khi bỏ bánh; nội dung và ảnh dùng nền sân khấu chung, không còn mảng chữ nhật khác màu.

- Theo hai ảnh tham khảo: Tactics dùng khung liền bo hai góc đối diện, bỏ khe ngang; Control đổi khung bậc sang vòm tròn phía trên. Ảnh vẫn đặt thẳng, dùng một ảnh gốc.

### 3.3 là một slide
- Toàn bộ sân khấu SOSTAC là một section trong deck; sáu vé chỉ là tab nội bộ, không tăng số slide. Bỏ chặn presentation-step: PageUp/PageDown và điều khiển trình chiếu đi giữa các slide thật, không phải đi lần lượt sáu bước. Hiện lại điều khiển chung; bấm vé hoặc trái/phải vẫn đổi nội dung 3.3.

### 3.3 — Mở quầy đầu phần
- Khi sân khấu 3.3 vào ít nhất 60% viewport, hiện tiêu đề HIGHLANDS × MoMo lớn trong 1,1 giây rồi cửa cuốn kéo lên 1,4 giây, lộ nội dung và vé. Hiệu ứng chỉ chạy một lần mỗi lần tải trang, vẫn thuộc cùng một slide. Có thể bấm tiêu đề để mở ngay; tôn trọng reduced motion.
- Bỏ tiêu đề nhỏ 3.3 · HIGHLANDS × MoMo khỏi các trạng thái. Trong lúc mở đầu, nội dung/vé inert để không focus nhầm; mở xong trả tương tác bình thường. Đã xem render mở đầu desktop, kiểm tra mở bằng bấm và tự động, mobile không tràn ngang và panel hết inert.

- Cửa quầy đổi sang thao tác giữ/kéo lên bằng chuột hoặc cảm ứng, không còn timer tự mở và không mở bằng click. Kéo vượt 180px (hoặc 23% chiều cao trên màn hình nhỏ) rồi thả sẽ mở; kéo ngắn hoặc hủy thao tác thì trả về vị trí đóng. Pointer capture giữ thao tác khi con trỏ ra ngoài; Enter/Space hỗ trợ bàn phím, reduced motion được giữ.

### Trang trí cửa quầy Highlands
- Cửa mở đầu có mái hiên sọc đỏ–kem, tay nắm và mascot ló góc. Giữ nguyên câu tiêu đề người dùng gửi, chia nhịp bằng chữ lớn Highlands Coffee và nhấn SOSTAC. Bỏ họa tiết đường kẻ ngang dày, nền kem gần trắng.
- Cửa vẫn là overlay của cùng section SOSTAC, chỉ mở khi giữ/kéo lên, không tự mở. Đã xem render desktop 1344×800 và mobile 512×902.

### Sửa cuộn lên và điều khiển tại cửa quầy
- Không chuyển wheel của cửa đóng vào vùng nội dung đang inert. Khi quầy mở, chỉ bắt wheel ngoài vùng đọc nếu vùng đọc còn cuộn theo hướng đó; tới đầu/cuối thì để trang cuộn tiếp. Bỏ overscroll contain của reader để lên được slide trước.
- Điều khiển slide luôn hiển thị ở 3.3, kể cả cửa quầy đóng; z-index cao hơn cửa để dùng được nút trước và xem số slide.

- Cửa quầy đổi nhấn hồng MoMo #a50064 (mái hiên, tiêu đề, tay nắm), nền gần trắng #fdfcfd theo yêu cầu. Không đổi ba tông nội dung O–S–T.

- Đặt lại mascot cửa quầy: lớn hơn và sát bên phải tiêu đề; mobile chuyển sang dưới tiêu đề và tách khỏi tay nắm. Đã tìm hình MoMo ôm/cầm ly trên web, chưa tìm được asset phù hợp nên giữ mascot nguyên bản, không mô tả hình hiện tại là đang ôm ly.

- Undo riêng lần đặt lại mascot gần nhất: quay về góc dưới của cửa quầy. Các bước SOSTAC dùng chung nền gần trắng #fdfcfb theo ảnh tham khảo; chữ nhấn và vé được chọn chuyển sang hồng MoMo #a50064, chữ nội dung giữ màu tối.

- Điều chỉnh phối cả hai thương hiệu theo ý người dùng: giữ nền gần trắng; headline, đề mục, vé thường đỏ Highlands #982536; vé chọn và chú thích hồng MoMo #a50064. Cửa quầy nhấn Highlands Coffee đỏ Highlands, SOSTAC hồng MoMo, mái hiên xen hai màu với trắng.

- Undo lần phối hai thương hiệu vừa trước: quay lại nền gần trắng, nhấn hồng MoMo và mái hiên hồng–trắng.

### 3.4 — Tổng hợp quy trình, theme Highlands
- Thêm một slide ngay sau 3.3: sáu điểm SOSTAC nối ngang, mỗi điểm một câu ngắn; đường vòng từ Control về Situation thể hiện thông tin cho chu kỳ sau. Câu chốt kết hợp sản phẩm, ưu đãi và thanh toán. Theme đỏ Highlands #982536, nền gần trắng, không thêm ảnh lặp.
- Nội dung diễn đạt ngắn từ mục 3.4.1–3.4.2 trong tab tài liệu https://docs.google.com/document/d/1igwsZ5sgBRJlqgujBXbyy1vqqf9YhYaZCX2xI_taol8/edit?tab=t.f42o8bd8vviu ; Control ghi đề xuất đo lường, không khẳng định có kết quả thực tế. Dùng slide-mode.js hiện có; hiệu ứng xuất hiện lần lượt, tắt ở reduced motion. Mobile xếp hai cột. Chữ tối thiểu 26px. Đã xem render desktop.

### 3.4 — Gộp 3.4.1 và 3.4.2 bằng sáu card
- Thay sơ đồ ngang bằng sáu card 3 cột × 2 hàng trên cùng một slide. Mỗi card có giai đoạn/việc chính và một câu chuyển sang giai đoạn tiếp theo; Control quay về điều chỉnh chu kỳ sau. Giữ theme Highlands và nội dung ngắn, chữ từ 26px.
- Desktop 1344×850 đã xem render; kiểm tra 1024×760 không tràn ngang hay tràn card. Mobile tự xếp một hoặc hai cột theo chiều rộng.

- Giảm nhiễu cho card 3.4: bỏ số thứ tự, viền/bóng, đường phân cách và các mũi tên lặp; ký tự SOSTAC nhỏ, tiêu đề chính rõ. Câu liên kết chuyển màu xám, vẫn từ 26px. Nền card nhạt và khoảng cách rộng hơn.

- 3.4 đổi sang ba hàng, mỗi hàng hai card theo thứ tự S–O / S–T / A–C. Mỗi card còn một câu gộp việc chính và quan hệ giữa các bước, không còn hai tầng đoạn chữ lặp. Desktop rộng đặt tên bước bên cạnh nội dung; mobile một cột.

### 3.4 — Chuỗi thẻ mở rộng
- Sáu thẻ nối nhau, chọn một thẻ thì thẻ đó nới rộng và hiện nội dung; các thẻ khác thu lại. Không hiện câu hướng dẫn thao tác. Mobile xếp chuỗi dọc; hỗ trợ Enter/Space, phím hướng, Home/End và aria-expanded; tắt chuyển động ở reduced motion.
- Lọc nội dung để tập trung mối liên hệ 3.4.2 trong thứ tự quy trình 3.4.1: bối cảnh tạo cơ sở mục tiêu, mục tiêu định hướng hợp tác, chiến lược dẫn tới thiết kế, thiết kế thống nhất thực hiện, triển khai tạo trải nghiệm, kiểm soát phản hồi chu kỳ sau. Không chép lại mã/ưu đãi/điều kiện chi tiết đã có ở 3.3.
- Đã xem render desktop và kiểm tra mở cả sáu thẻ ở 1024×760: luôn chỉ một thẻ mở, không tràn chữ hoặc tràn ngang.

- Thẻ 3.4 đổi sang đỏ Highlands, chữ trắng; thẻ chọn đỏ đậm. Sửa hiện tượng nảy do nội dung đang xuống dòng trong lúc chiều rộng đổi làm tăng chiều cao cả chuỗi: desktop giữ chiều cao ổn định, lớp chi tiết tách khỏi luồng và mờ hiện sau khi gần mở xong. Chỉ chuyển flex-grow với easing không bật nảy. Mobile chuyển max-height thay cho display bật/tắt.

- Carousel sản phẩm: ẩn hai sản phẩm phụ ở cạnh khi đứng yên, chỉ giữ sản phẩm chính. Giữ quỹ đạo và chuyển động xoay cũ; sản phẩm ra/vào mờ dần theo góc xoay để không nhảy đột ngột.

### 3.5 — Giới hạn nghiên cứu
- Thêm ngay sau 3.4 một slide, hai nhóm song song: giới hạn hoạch định/hợp tác và giới hạn triển khai/kết quả. Câu cuối xác định phạm vi kết luận dựa trên thông tin công khai, chưa xác nhận hiệu quả kinh doanh thực tế. Theme Highlands đỏ–nâu, nền gần trắng; không thêm ảnh không cần thiết.
- Nội dung rút từ mục 3.5.1–3.5.2 của tài liệu đã đọc qua Google Drive: https://docs.google.com/document/d/1igwsZ5sgBRJlqgujBXbyy1vqqf9YhYaZCX2xI_taol8/edit?tab=t.f42o8bd8vviu . Không hiển thị nguồn trong trình chiếu.
- Dùng deck và điều khiển hiện có. Đã xem desktop 1344×800, kiểm tra 1024×760: không tràn ngang và nội dung nằm trong slide; chữ từ 26px. Mobile xếp hai nhóm theo chiều dọc.

- Làm thoáng 3.5: bỏ số và các tầng chữ đậm, mỗi nhóm một đoạn chính và một câu hệ quả; rút câu kết còn hai dòng cách làm/hiệu quả thực tế. Giữ tối thiểu 26px.

- Khôi phục đủ ý cốt lõi 3.5 theo yêu cầu: thiếu nghiên cứu/kế hoạch/mục tiêu nội bộ; thỏa thuận/phân công/ngân sách/chia chi phí; nhận định là phân tích nguồn công khai; thiếu giao dịch/doanh thu/chi phí/quay lại; thiếu khảo sát/phỏng vấn; chưa xác định tác động riêng và hiệu quả tài chính/duy trì khách. Hai nhóm, mỗi nhóm ba dòng; kết luận nêu nhu cầu dữ liệu nội bộ và khảo sát.

### Kết luận và cảm ơn
- Thêm hai slide cuối: kết luận chỉ chốt định hướng ưu đãi thu hút/trải nghiệm giữ chân và giá trị lâu dài, không chép lại quy trình SOSTAC hay danh sách giới hạn nghiên cứu. Nội dung rút từ phần Kết luận/Kiến nghị trong Google Docs đã đọc.
- Slide cảm ơn theo đúng ảnh người dùng yêu cầu: nền quầy Highlands toàn khung, phủ tối, chữ trắng lớn giữa và hai đường kẻ ngang. Theo yêu cầu làm y như ảnh, dùng lại chính ảnh quầy trong mẫu/bìa (ngoại lệ theo chỉ dẫn trực tiếp ở lần này), nguồn https://www.highlandscoffee.com.vn/vnt_upload/about/8W1A6722_1.jpg . Text: CẢM ƠN / THẦY CÔ VÀ CÁC BẠN / ĐÃ LẮNG NGHE.
- Hai slide nối sau 3.5, dùng chung điều khiển trình chiếu; nội dung từ 26px. Đã xem render cảm ơn desktop.

- Bổ sung kết luận thành hai đoạn ngắn: vai trò kết nối xúc tiến bán hàng/thanh toán và định hướng giá trị dài hạn qua khách hàng phù hợp, thuận tiện, mua lại. Hai slide kết luận/cảm ơn đặt width 100%, height 100svh và scroll-margin 0 để bỏ inset của deck. Mobile kết luận có thể tăng chiều cao để không thu chữ dưới 26px.

- Kết luận chỉnh sát đoạn Kết luận trong Google Docs: vai trò thanh toán/kênh marketing; Highlands × MoMo kết hợp sản phẩm/ưu đãi/phương thức; điều kiện hiệu quả gồm ưu đãi phù hợp, hệ thống ổn định, phối hợp; chú trọng mua lại sau khuyến mại. Không nhắc lại danh sách giới hạn ở 3.5. Đổi nền #fdfcf9 trùng phần trước, chữ nâu và nhấn đỏ Highlands.

- Đã gỡ logo Highlands khỏi các slide từ 3.4 trở đi (tổng hợp quy trình, giới hạn nghiên cứu, kết luận); giữ nguyên nội dung và ảnh slide cảm ơn.

### Quiz khởi động — Coffee Quiz Time! (09/11/2026)
- Thêm `#coffee-quiz` trước bìa chương 1 trong `chuong-1.html`; dùng `css/coffee-quiz.css`, `js/coffee-quiz.js` và điều khiển chung `js/slide-mode.js`.
- Bám bố cục mẫu người dùng: tiêu đề duy nhất Coffee Quiz Time!, ba tem cốc cà phê, sticker phía trên, câu hỏi và bốn lựa chọn 2 × 2. Không có dòng thương hiệu phụ, dòng chữ góc dưới bên trái hay nhãn MoMo Mini Challenge. Nút phía dưới chỉ phục vụ trả lời/chuyển câu.
- Ba câu do người dùng cung cấp, rút gọn câu chữ để chiếu rõ; giữ ý nghĩa và đáp án C–A–D. Chọn rồi chốt mới hiện đáp án đúng và lời giải; khóa đáp án sau khi chốt, tính điểm /3, chơi lại và vào bài học. Không tự chuyển câu, không đồng hồ đếm ngược.
- Sticker dùng tài nguyên có sẵn, không tạo bằng AI; ảnh riêng cho quiz, không lặp ảnh các phần trước. Nền hồng phớt, chữ nội dung tối thiểu 26px; điện thoại xếp một cột và cuộn tự nhiên.
- Cốc Bạc Xỉu: https://www.highlandscoffee.com.vn/vn/bac-xiu-da.html ; ảnh gốc https://www.highlandscoffee.com.vn/vnt_upload/product/04_2023/New_product/HLC_New_logo_5.1_Products__BAC_XIU.jpg . Lưu bản giảm kích thước 440 × 440 tại `assets/images/quiz/coffee.jpg`, cắt hình bằng CSS, không tạo lại sản phẩm.
- Heo Đất: https://momopartners.m-n.associates/tro-thu/heo-dat/ ; ảnh https://momopartners.m-n.associates/wp-content/uploads/2024/08/mascot_heodat_02-3-768x433.png . Cắt vùng nhân vật, bỏ chú giải bằng CSS; lưu `assets/images/quiz/pig.png`.
- Mascot MoMo tư thế riêng: https://momopartners.m-n.associates/wp-content/uploads/2025/04/MOMO_Mascot_Pose_1-png.webp ; logo: https://momopartners.m-n.associates/wp-content/uploads/2024/08/logo.svg . Vé trang trí được dựng bằng CSS và logo có sẵn; icon cốc là SVG giao diện.
- Kiểm tra Chrome headless bằng `node tools/check-coffee-quiz.mjs`: desktop 1366 × 768, 1024 × 768 và mobile 390 × 844; ảnh tải đủ, không tràn ngang, chữ tối thiểu 26px, ba đáp án đúng cho 3/3, phản hồi sai và chơi lại hoạt động. Desktop kiểm tra phần lời giải nằm trong viewport. Ảnh QA `.qa-quiz-1366.png`, `.qa-quiz-1024.png`, `.qa-quiz-390.png`.

### Quiz tách trang và sticker SVG
- Trang khởi động hiện ở `quiz.html`, mở trực tiếp trang này để bắt đầu. Đã gỡ quiz và các tài nguyên quiz khỏi chương 1; chương 1 trở lại mở bằng bìa chương. Nút Vào bài học ở kết quả dùng liên kết `chuong-1.html`, chuyển trang thật.
- Trang quiz có CSS riêng, không tải bộ CSS/điều khiển slide của các chương. Tiêu đề chỉ Coffee Quiz Time!, không thêm lại các dòng chữ phụ người dùng đã bỏ.
- Căn lại khoảng trống: dải sticker riêng phía trên, ba tem có khoảng cách đều, khung câu hỏi có padding lớn hơn, đáp án A–D căn bằng grid hai cột; không đổi padding khi chọn nên chữ không nhảy.
- Thêm SVG nhỏ tại `assets/icons/quiz/`: nơ, ruy băng MoMo, trái tim và sao lấp lánh. Đây là vector giao diện dựng bằng mã theo yêu cầu, không phải ảnh AI; các ảnh sản phẩm/mascot có sẵn giữ nguyên nguồn ở mục trên. Nơ/ruy băng lắc nhẹ 3 độ, sao thay đổi độ sáng và tỷ lệ chậm; hỗ trợ prefers-reduced-motion.
- Chrome QA: 1366 × 768, 1024 × 768, 1366 × 670, 1024 × 670 và 390 × 844. Không tràn ngang; desktop cả phần phản hồi nằm trong viewport; nội dung ít nhất 26px. Đã kiểm tra đáp án đúng/sai, khóa câu đã chốt, điểm 3/3, chơi lại, giảm chuyển động và bấm liên kết mở chương 1 không còn quiz.

### Quiz — Nhãn tiêu đề bo tròn và bộ sticker mở rộng
- Đặt Coffee Quiz Time! ở giữa trong nhãn hồng hình oval mềm, viền trắng và bóng nhẹ; cốc cười/ngôi sao nhỏ hai bên. Giữ nguyên tiêu đề duy nhất.
- Phóng to cốc Bạc Xỉu; thêm sticker logo Highlands trong huy hiệu đỏ, viền trắng và hai miếng băng dính CSS. Dùng lại nhận diện thương hiệu có sẵn theo yêu cầu trực tiếp của người dùng: `assets/images/highlands-wheel-logo.png`, nguồn https://www.highlandscoffee.com.vn/vnt_upload/weblink/ftlogo.png ; chỉ đổi cách trình bày bằng CSS mask, không vẽ lại logo.
- Thêm SVG tự dựng tại `assets/icons/quiz/`: `coffee-beans.svg` (hạt cà phê), `daisy.svg` (hoa cười), `lucky-star.svg` (sao má hồng), `sweet-cup.svg` (cốc cười). Đây là các component vector theo yêu cầu, không dùng ImageGen. Đồng bộ hồng pastel, nét mềm, viền trắng với bộ nơ/tim/ruy băng trước đó.
- Các cụm sticker chuyển động lắc nhẹ với nhịp lệch nhau; sao nhấp nháy chậm. Giữ giảm chuyển động, khu vực câu hỏi và chữ 26px trở lên.
- Đã render và kiểm tra lại năm kích thước 1366×768, 1024×768, 1366×670, 1024×670, 390×844; ảnh tải đủ, không tràn ngang, desktop vừa viewport, logic trả lời/điểm/chơi lại/chuyển chương 1 đều đạt.

### Quiz — Sửa logo và thêm sticker đồ uống, hóa đơn, voucher
- Sửa huy hiệu Highlands bị trống khi mở HTML trực tiếp: thay CSS mask bằng thẻ ảnh PNG có sẵn, giữ nền đỏ, viền trắng và băng dính. Logo không còn phụ thuộc việc tải mask qua file://.
- Thêm bốn SVG tự dựng theo yêu cầu, không dùng ImageGen: `highlands-latte.svg`, `highlands-matcha.svg`, `receipt.svg`, `voucher.svg` trong `assets/icons/quiz/`. Ly có nhãn Highlands Coffee và mặt cười; hóa đơn có rìa xé và nét in pastel; voucher có đường xé, mã vạch và nơ. Đây là minh họa trang trí, không phải voucher thật hay giao dịch thật.
- Dải sticker nhỏ dưới câu hỏi có nhịp lắc lệch nhau. Khi mở lời giải, ẩn dải trang trí để dành chỗ cho nội dung. Mobile có hàng sticker riêng phía trên nút, không chồng chữ. Các nội dung và đáp án quiz giữ nguyên.
- Kiểm tra lại đủ năm kích thước desktop/mobile: ảnh tải đủ, không tràn ngang, chữ từ 26px, các luồng trả lời và chuyển bài học đạt. Bổ sung kiểm tra riêng logo khi mở `quiz.html` bằng file:// trong `tools/check-coffee-quiz.mjs`.

### Quiz — Tiêu đề hai nhãn và font mềm
- Thay tiêu đề oval thành hai nhãn liền nhau: Coffee nhỏ, nghiêng nhẹ và viền nét đứt; Quiz Time! lớn trên nhãn hồng bo mềm, gạch cong nhỏ phía dưới. Giữ cùng một h1 và đúng nội dung Coffee Quiz Time!.
- Câu hỏi, đáp án, phản hồi và nút chuyển sang Nunito bo tròn, hỗ trợ tiếng Việt; nội dung chính vẫn từ 26px. Font chỉ áp dụng trên quiz, các chương giữ Inter.
- Font lưu offline `assets/fonts/nunito-variable.ttf`, giấy phép `assets/fonts/nunito-OFL.txt`. Nguồn Google Fonts: https://github.com/google/fonts/tree/main/ofl/nunito ; bản variable chính thức: https://raw.githubusercontent.com/google/fonts/main/ofl/nunito/Nunito%5Bwght%5D.ttf .
- Đã kiểm tra lại năm viewport, các luồng quiz và logo khi mở file trực tiếp; chữ/ảnh tải đủ và desktop nằm trong viewport.

- Quiz: thêm nền ô kẻ hồng nhạt 30px bằng hai linear-gradient trên .quiz-page (lớp ngoài cùng sau khung quiz); không đổi nền khung câu hỏi hay đáp án.
- Quiz: chữ Quiz Time! dùng màu #a50064, đồng bộ màu chữ trong logo MoMo đang dùng.

### Quiz — Heo Đất 3D và chữ tự nhiên hơn
- Thay heo 2D bằng ảnh Heo Đất 3D chính thức của MoMo, góc 3/4, dang tay. Nguồn: https://momopartners.m-n.associates/tro-thu/heo-dat/ ; ảnh https://momopartners.m-n.associates/wp-content/uploads/2024/08/HEODAT-3.4-VIEW-768x960.webp ; lưu `assets/images/quiz/heo-3d.webp`. Dùng CSS multiply để hòa nền trắng, bỏ clip-path cũ; không dùng hình tạo bằng AI.
- Đổi Nunito sang Be Vietnam Pro cho toàn trang quiz, nội dung 400, câu hỏi và nút 500, tiêu đề 600. Bỏ nét nghiêng chữ Coffee và giảm độ nặng tiêu đề. Màu Quiz Time! vẫn #A50064.
- Font lưu nội bộ tại `assets/fonts/be-vietnam-pro-{400,500,600}.ttf`, kèm `be-vietnam-pro-OFL.txt`. Nguồn chính thức: https://github.com/google/fonts/tree/main/ofl/bevietnampro . Chỉ áp dụng quiz, không đổi font các chương.
- Đã xem render và kiểm tra năm kích thước desktop/mobile: không tràn ngang, chữ nội dung từ 26px, phản hồi desktop vừa màn hình, logic ba câu và liên kết chương 1 đạt.

### Quiz — Heo SVG 2D ôm tim và Comfortaa
- Theo chỉnh sửa mới nhất, bỏ heo 3D trên giao diện, thay bằng `assets/icons/quiz/pink-pig.svg` tự vẽ: thân tròn, tai hồng, mắt cười, má hồng, ôm tim; viền trắng như sticker. Không gán hình tự vẽ này là mascot chính thức MoMo, không dùng ImageGen.
- Đổi font sang Comfortaa nét tròn vui hơn, hỗ trợ tiếng Việt. Font offline `assets/fonts/comfortaa-variable.ttf`, kèm `comfortaa-OFL.txt`; nguồn https://github.com/google/fonts/tree/main/ofl/comfortaa .
- Rút gọn câu 1 và đáp án C/D để giữ khung thoáng với font mới; giữ đúng nghĩa và đáp án C. Không giảm chữ nội dung dưới 26px.
- Đã xem render và kiểm tra năm viewport desktop/mobile; ảnh/font tải đủ, không tràn ngang, phản hồi desktop trong màn hình; điểm số, chơi lại, chuyển chương 1 và logo local-file đều đạt.

### Quiz — Dùng đúng Heo Đất MoMo 2D, viền sticker trắng
- Thay heo SVG tự vẽ bằng đúng hình Heo Đất MoMo 2D dang tay mà người dùng gửi. Asset `assets/icons/quiz/momo-pig-sticker.svg` chứa ảnh nguồn chính thức có sẵn (pig.png), clip theo nhân vật để bỏ đường chú giải và thêm viền trắng bằng SVG alpha dilation. Không tạo lại nhân vật, không dùng AI; SVG nhúng ảnh nên mở offline/file:// được.
- Nguồn gốc: https://momopartners.m-n.associates/tro-thu/heo-dat/ ; ảnh mascot_heodat_02-3-768x433.png trong thư mục uploads/2024/08. Giữ font Comfortaa theo yêu cầu trước.
- Đã kiểm tra desktop/mobile và logo khi mở file trực tiếp; quiz hoạt động đúng, ảnh tải đủ và nội dung giữ 26px trở lên.

### Quiz — Khung giấy scrapbook
- Khung câu hỏi trắng có vân giấy nhẹ từ `assets/icons/quiz/paper-grain.svg`, góc giấy bo không đều, bóng và hai lớp giấy mỏng phía dưới. Lớp nền lớn cũng có vân rất nhẹ, nền ô kẻ ngoài cùng giữ nguyên.
- Thêm băng dính washi hồng sọc ở mép trái và băng tím ở mép dưới, cùng vé cà phê SVG `coffee-ticket.svg` dán nghiêng ở góc phải. Các chi tiết nằm ở viền, không che câu hỏi/đáp án và không chặn tương tác.
- Đã xem render, kiểm tra năm viewport desktop/mobile và các luồng quiz; chữ vẫn từ 26px, không tràn ngang, nội dung desktop vừa viewport.

### Quiz — Nhận tem đúng và pháo hoa sticker
- Mỗi câu trả lời đúng nhận một tem, câu sai không nhận tem. Các vòng tiến độ giữ đúng trạng thái đã nhận/chưa nhận; kết quả hiện đúng số tem 0/3–3/3 và thông báo tương ứng, không còn cố định đủ 3 tem.
- Khi kết thúc với 3/3, bắn sticker SVG vé cà phê, voucher, hóa đơn, ly latte/matcha, tim, nơ và sao từ hai bên. Web Animations API tạo quỹ đạo bay lên/rơi xuống, xoay nhẹ; 56 hình desktop, 32 hình mobile. Lớp trang trí fixed không chặn nút, không gây tràn trang; tự dọn sau hiệu ứng, hủy khi chơi lại/rời trang.
- prefers-reduced-motion bỏ hiệu ứng bắn sticker; chuyển sang giảm chuyển động trong lúc chạy cũng hủy hiệu ứng. Không phát âm thanh.
- Đã kiểm tra đủ kết quả 0, 1, 2, 3 tem, số vòng được đóng dấu khớp; kiểm tra hiệu ứng 3/3, chơi lại, giảm chuyển động, kết quả desktop vừa viewport, mobile không tràn ngang và chuyển chương 1. Preview hiệu ứng: `.qa-quiz-celebration.png`.

### Quiz — Chuyển động sticker mềm hơn
- Thay quỹ đạo bốn đoạn gãy bằng 65 điểm theo đường bay parabol liên tục, giảm tốc ngang và đung đưa nhẹ. Sticker xoay ít hơn, hiện/mờ dần, rơi chậm; bắn so le thành các đợt thay vì dồn một lượt.
- Nạp sẵn các SVG, thêm hình theo DocumentFragment, chỉ animate transform/opacity bằng translate3d; bỏ drop-shadow trên từng hình bay để giảm chi phí render. 48 hình desktop, 30 hình mobile; tự dọn và hủy khi chơi lại như trước.
- Tiêu đề kết quả hiện nhẹ, số tem nảy mềm, lời nhắn và nút vào sau một nhịp; tem được đóng có nhịp nảy nhỏ. Giữ toàn bộ hỗ trợ giảm chuyển động và số tem theo câu đúng.
- Quiz: tăng pháo hoa sticker lên 112 hình desktop / 64 hình mobile, giữ nhịp bắn so le hai bên và đường bay mềm.
- Quiz: thử phối khung lớn vàng pastel–trắng (#fffdf2 / #fffefa), giữ texture scrapbook, sticker và các điểm nhấn MoMo.

### Quiz — Hai ống pháo cute và hướng bay tản rộng
- Thêm SVG `assets/icons/quiz/confetti-cannon.svg`: ống pháo giấy hồng pastel, đai vàng, chân tím, mặt cười. Hai ống xuất hiện ở góc dưới, nảy nhẹ, giật lùi theo nhịp bắn rồi thu xuống; bản phải được lật gương.
- Điểm xuất phát sticker đặt đúng miệng ống pháo. Chia quạt bay thành 14 làn mỗi bên, độ cao ngẫu nhiên và nhiều đợt so le; mở rộng khoảng cách/hướng bay, bớt cảm giác tụ cụm. Giữ 112 hình desktop / 64 hình mobile.
- Quỹ đạo parabol liên tục, dịch chuyển ngang giảm tốc nhẹ, thời gian bay khác nhau. Lớp hiệu ứng không chặn tương tác, có dọn sau khi kết thúc/chơi lại/rời trang và bỏ hoàn toàn khi giảm chuyển động.
- Kiểm tra năm viewport và đủ kết quả 0–3 tem; xác nhận có đúng hai ống pháo khi đủ 3 tem, ảnh tải đủ, liên kết chương 1 và chế độ file:// đạt. Đã xem ảnh `.qa-quiz-celebration.png` ở thời điểm 1,3 giây.

### Bìa báo cáo trước chương 1
- Thêm bìa mở đầu tại chuong-1.html#bia-bao-cao theo bố cục bìa chương 3: ảnh toàn màn hình, phủ tối, chữ trắng giữa khung, hai đường kẻ trắng. Giữ nguyên tiêu đề đề tài người dùng cung cấp; điều khiển slide dùng chung.
- Ảnh cà phê minh họa ngành FnB (không khẳng định là sản phẩm Highlands): https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1600&q=80&fit=crop ; lưu assets/images/report-cover-highlands.jpg. Nguồn chỉ lưu trong README.


### Dọn thư mục để bàn giao
- Xóa cache/profile Chrome kiểm tra (~387 MB), ảnh chụp QA, trang thử, script kiểm tra và 18 asset cũ không còn dùng. Giữ các trang trình chiếu, quiz, tài nguyên đang dùng, giấy phép font và tài liệu nguồn. Đã kiểm tra liên kết file cục bộ và sáu ảnh SOSTAC gọi động sau khi dọn.


### Trang mở đầu
- Quiz là index.html, tự hiển thị khi mở website. Nút Vào bài học dẫn đến chuong-1.html.
- Chương 2 chuyển sang chuong-2.html; đã cập nhật liên kết từ chương 1 và trang chuyển hướng boi-canh.html.


### Bìa vé mở đầu quiz
- index.html mở bằng vé Highlands màu kem/đỏ trên nền pastel, dùng logo và sticker có sẵn. Bấm hoặc Enter/Space để vé trượt qua máy quét minh họa, hiện xác nhận, đóng dấu rồi mở thành khung câu hỏi; không có giao dịch thanh toán thật.
- CSS/JS: css/quiz-entry.css và js/quiz-entry.js. Giữ nguyên câu hỏi, chấm điểm, chơi lại và liên kết vào chương 1. Hỗ trợ giảm chuyển động, chuyển focus đến câu hỏi; khi không có JavaScript, hiện quiz và thông báo có sẵn.
- Đã kiểm tra desktop 1366x768, 1024x670, mobile 390x844, chế độ giảm chuyển động và chấm đáp án sau chuyển cảnh. Đã sửa dấu đóng ẩn gây tràn ngang mobile. Không bổ sung ảnh tải mới.


### Hiệu ứng chiều sâu cho vé quiz
- Giữ nguyên bố cục, màu, nội dung và asset. Thêm nghiêng theo chuột trên desktop, chuyển động perspective/translate3d/rotateX/rotateY khi đưa vé qua máy quét và mở thành câu hỏi, bóng thay đổi theo độ cao; máy phản hồi nhẹ khi nhận vé.
- Đã kiểm tra transform 3D thực sự trong chuyển cảnh, vào đủ bốn đáp án trên desktop/mobile, không tràn ngang sau chuyển cảnh; giảm chuyển động bỏ hiệu ứng như trước.


### Vé quiz và chuyển cảnh lấy cảm hứng Warp
- Tham khảo hình và mô tả vé bay vào vùng sáng, ánh màu trên vé của Honkai: Star Rail: https://twinfinite.net/guides/difference-between-4-star-5-star-pulls-in-honkai-star-rail/ . Không dùng asset hoặc video game trong website.
- Thêm viền nhũ, dấu Coffee Club và sticker từ bộ tài nguyên đang có. Sau khi quét, vé bay xoay qua đường hầm sao canvas, cửa sáng mở ra câu hỏi. Có nút Bỏ qua, hỗ trợ giảm chuyển động và dọn animation/canvas sau chuyển cảnh. Code ở js/quiz-warp.js.
- Kiểm tra desktop/mobile: ảnh đủ, không tràn ngang, luồng xem hết/Bỏ qua/giảm chuyển động đều vào bốn đáp án và chấm đúng; đã xem ảnh bìa và cảnh bay.


### Vé bay như giấy mềm trong không gian
- Thay tấm vé phẳng của cảnh Warp bằng bề mặt gồm 30 dải giấy desktop / 22 dải mobile, nối theo đường cong liên tục; độ cong và ánh sáng cập nhật theo thời gian. Mặt trước giữ thiết kế vé, mặt sau giấy kem riêng, có độ dày rất mỏng.
- Camera tương đối thay đổi góc ngẩng/cúi và xoay qua mặt sau, rồi vé bay xa theo chiều sâu. Bỏ filter/opacity trên nhóm giấy để không làm phẳng các lớp 3D.
- Đã xem render desktop/mobile và kiểm tra facet transform 3D khác nhau, kết thúc vào bốn đáp án, không còn overlay và không tràn ngang. Giữ nguyên bìa tĩnh, nội dung quiz và nút bỏ qua.


### Bìa quiz — quẹt giấy ngay trên bàn pastel
- Thay cảnh Warp/đường hầm bằng cảnh tại chỗ: bấm vé, máy thanh toán có tai và mặt biểu cảm nhô lên từ dưới, giấy cong kéo tới/khựng/lùi nhẹ rồi quẹt tiếp. Sticker bắn từ vùng màn hình đọc mã theo ba nhịp, máy chuyển mặt vui khi nhận vé; zoom vào giấy kem rồi hiện câu hỏi.
- index.html dùng js/quiz-swipe.js. Bỏ script Warp cũ. Giữ thiết kế vé, câu hỏi, chấm điểm, nút vào bài học; hỗ trợ Bỏ qua, giảm chuyển động, dọn animation và focus câu hỏi.
- Đã kiểm tra desktop 1366x768, mobile 390x844; xem ảnh quẹt giấy và mặt máy, xác nhận sticker phát ra, xem hết/bỏ qua/giảm chuyển động đều vào bốn đáp án, chấm đúng và không tràn ngang sau cảnh.


### Quẹt có lực theo video minh họa người dùng
- Đã xem các khung video 1794280706454_50213259398868263_4508743094532961031.mp4, đặc biệt đoạn 9–12 giây: giấy bị ép và kéo chậm theo mặt tiếp xúc. Không đưa video cá nhân vào assets.
- Tăng máy quét lên 325px desktop/215px mobile; zoom đồng thời cả vé và máy 1.28x/1.17x vào vùng tiếp xúc. Nhịp quẹt chậm 3.4 giây, ghì ở giữa rồi trượt thoát, độ cong chịu lực thay vì vẫy theo sóng.
- Thêm khe đọc mã; sticker phun liên tục mỗi 85ms từ khe, bay ngược hướng kéo theo quỹ đạo trọng lực như tia lửa; kết thúc mới bung thêm một đợt và zoom giấy sang câu hỏi.
- Kiểm tra desktop/mobile, xem ảnh lúc quét; xác nhận zoom cảnh, hạt phun liên tục, xem hết/bỏ qua/giảm chuyển động đều vào đủ bốn đáp án và không tràn ngang sau chuyển cảnh.


### Khe ngang có che khuất thật
- Tách thân máy thành vỏ sau và mặt trước đặc, đặt giấy giữa hai lớp; clip theo vị trí khe để mặt trước che phần giấy đi vào máy. Camera giữ thứ tự lớp tách biệt, bề mặt giấy vẫn uốn 3D bên trong nhóm giấy.
- Khe kéo ngang hết chiều rộng máy, có lòng tối, mép trên và gờ dưới; máy gần nằm ngang hơn. Giữ nhịp chậm có lực, zoom, sticker và chuyển câu hỏi.
- Đã xem ảnh quẹt desktop/mobile, kiểm tra lớp vỏ clip đúng vị trí và luồng kết thúc đủ bốn đáp án, không còn overlay hoặc tràn ngang.


### Nút quét nằm gọn và chuyển động quẹt tự nhiên
- Cân lại chiều cao vé, cỡ tiêu đề, khoảng đệm và nút mời quét; giữ chữ nút 26px, khoảng trống dưới nút 26–30px, không dùng che tràn để giấu lỗi.
- Tham khảo thao tác một hướng liên tục, tốc độ đều theo hướng dẫn Ingenico Lane 3600: https://ingenico.com/sites/default/files/resource-document/2024-01/Users%20Guide%20Lane%2036000%20Jan%202024%20update%20.pdf .
- Giảm độ cong về mức rất nhẹ, bỏ rung/lắc/ghì cố ý; vé bám theo góc khe và trượt một lượt gần đều, nhấc ra sau xác nhận. Giữ che khuất của khe, máy cute, zoom và sticker.
- Đã xem render và kiểm tra 1918x946, 1366x768, 1024x670, 390x844; nút không tràn, không tràn ngang, xem hết/bỏ qua/giảm chuyển động và chấm đáp án đều đạt.


### Rung tiếp xúc, vé nhiều sticker và camera đổi góc
- Giữ đường quẹt thẳng và khe che giấy, thêm lại hai nhịp rung ngắn theo tiếp xúc ở ~1.7s và ~3.25s. Camera chung cho cả vé và vỏ trước/sau máy, đổi góc X/Y từ chếch trái sang phải và zoom 1.36x desktop/1.22x mobile.
- Trang trí thêm dải sticker hạt cà phê, nơ, tim, sao, hoa và tia sáng ở khoảng trống của vé; giữ khoảng đệm nút 26–30px và chữ nút 26px.
- Đã xem ảnh desktop/mobile và kiểm tra 1366x768, 1024x670, 390x844: camera có phối cảnh X/Y, ảnh đủ, nút không tràn; xem hết/bỏ qua/giảm chuyển động đều vào đủ bốn đáp án, không tràn ngang sau cảnh.


### Trang trí nền hồng và kiểm tra trạng thái Git
- Thêm đường may đứt nét quanh nền hồng, sticker cốc, hóa đơn, voucher, hoa, ribbon và nét vẽ tim/sao ở khoảng trống ngoài vé. Trang trí không bắt click và có vị trí riêng trên mobile.
- Đã xem render desktop/mobile: ảnh đủ, không tràn ngang, nút quét còn 30px khoảng đệm. Kiểm tra cú pháp hai script quiz và tham chiếu file HTML/CSS đều đạt; git diff --check không báo lỗi khoảng trắng.
- M = file đã chỉnh sửa so với commit gần nhất; U = file mới chưa được Git theo dõi. Đây là trạng thái Git, không phải lỗi chạy. Chưa tự stage hoặc commit.


### Ánh loang và vé nghiêng theo chuột
- Khi rê chuột trên desktop, tâm ánh ngọc trai hồng/kem/xanh nhạt theo vị trí con trỏ; vé nhấc và nghiêng nhẹ theo trục X/Y. Rời vé hoặc mất focus thì trở về góc ban đầu.
- Dùng requestAnimationFrame, chỉ kích hoạt cho chuột chính xác có hover; giảm chuyển động tắt hiệu ứng. Khi bấm quét, reset hover trước khi tạo cảnh để không ảnh hưởng khe máy hay bản sao giấy.
- Đã kiểm tra cú pháp JavaScript và git diff --check; không đổi nội dung hoặc bố cục quiz.

