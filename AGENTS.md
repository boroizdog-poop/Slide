# Quy ước làm slide web

- Khi người dùng gửi ảnh tham khảo, lấy nội dung chữ chủ yếu từ ảnh đó.
- Khi người dùng yêu cầu “làm nối tiếp”, triển khai trực tiếp sau phần hiện tại của chương đang làm.
- Nội dung chữ quan trọng dùng cỡ chữ tối thiểu 26px, kể cả khi bố cục chuyển sang màn hình nhỏ.
- Ưu tiên câu ngắn, bỏ chữ và ý lặp, bố cục thoáng. Trên desktop, toàn bộ nội dung một slide phải nằm trong viewport; chỉnh nội dung, ảnh và khoảng đệm, không thu chữ quan trọng dưới 26px hay che phần tràn. Không tự bổ sung nhiều slide chỉ để chép đủ văn bản tài liệu.
- Không hiển thị dòng nguồn trên giao diện trình chiếu; lưu nguồn trong README. Giữ khoảng trống rõ giữa các khung slide, nằm ngoài chiều cao nội dung của mỗi slide.
- Tham khảo bố cục ảnh, giữ phong cách của dự án và tải ảnh minh họa phù hợp về thư mục assets/images với dung lượng nhẹ.
- Các chương nằm trên trang riêng: chương 1 ở chuong-1.html, chương 2 ở chuong-2.html, chương 3 ở chuong-3.html.
- Chương 1 dùng phối màu như chương 2: xanh #2d83f5, nền xanh rất nhạt và trắng, chữ xanh đậm. Nội dung chia thành từng slide có khoảng cách và chiều cao theo chương 2, dùng chung điều khiển js/slide-mode.js. Không thêm thanh PHẦN 1, PHẦN 2, PHẦN 3 trong nội dung.
- Khi redesign theo ảnh tham khảo, giữ cấu trúc bố cục chính của ảnh, chỉ tinh chỉnh màu sắc, khoảng cách và chi tiết. Không tự tách một bố cục tham khảo thành nhiều slide nếu người dùng chưa yêu cầu.
- Không dùng lặp ảnh giữa các slide hoặc các chương; ảnh tải lại, đổi tên hay cắt khác vẫn được tính là ảnh lặp. Mỗi vị trí minh họa dùng ảnh riêng, kiểm tra cả nội dung ảnh khi cần.
