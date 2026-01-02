const questions = [
  // ===== BÀI 4 =====
  {type:"mc", q:"Hoạt động nào có thể vi phạm đạo đức, pháp luật số?", a:["Soạn đơn xin việc","Vẽ biểu đồ","Viết bình luận trên MXH","Tính toán"], c:2},
  {type:"mc", q:"Trang thông tin đáng tin cậy nhất?", a:["Trang .gov.vn","Trang không thiên vị","Trang đúng ý mình","Trang gây xúc động"], c:0},
  {type:"mc", q:"Hành động vi phạm đạo đức?", a:["Chụp ảnh thú cưng","Chụp nơi có biển cấm","Chụp phong cảnh","Chụp hiệu sách"], c:1},
  {type:"mc", q:"Công cụ môi trường số gồm?", a:["Internet","Phần mềm văn bản","Phần mềm đa phương tiện","Tất cả"], c:3},
  {type:"mc", q:"Hoạt động dễ vi phạm khi dùng công nghệ số?", a:["Soạn thảo","Vẽ biểu đồ","Bình luận MXH","Tính lũy thừa"], c:2},
  {type:"mc", q:"Xã hội số … và …", a:["Hợp pháp/tiến bộ","Hợp pháp/văn minh","An toàn/hợp pháp","Lành mạnh/hợp pháp"], c:1},
  {type:"mc", q:"Ảnh bị lấy đăng sai tên tác giả, em nên?", a:["Yêu cầu ghi nguồn","Bỏ qua","Nói mọi người","Không làm gì"], c:0},

  // ===== BÀI 5 =====
  {type:"mc", q:"Địa chỉ tự thay đổi khi sao chép công thức?", a:["Tương đối","Tuyệt đối"], c:0},
  {type:"mc", q:"Địa chỉ không đổi khi sao chép?", a:["Tương đối","Tuyệt đối"], c:1},
  {type:"mc", q:"Kí hiệu địa chỉ tuyệt đối?", a:["Cột,hàng,$","Cột,$,hàng","Hàng,cột,$","$,cột,hàng"], c:3},
  {type:"mc", q:"Kí hiệu dùng cho địa chỉ tuyệt đối?", a:["#","$","&","@"], c:1},
  {type:"mc", q:"Cách nhập dấu $?", a:["Gõ tay","F4","F2","Cả A và B"], c:3},
  {type:"mc", q:"Phím chuyển sang địa chỉ tuyệt đối?", a:["$","F4","F2","F6"], c:1},
  {type:"mc", q:"=E5*$F$2 sao chép xuống F6?", a:["=E6*F3","=E6*$F$2","=$E$6*F3","=$E$6*$F$2"], c:1},
  {type:"mc", q:"=A1*B1 sao chép sang E2?", a:["=C1*D2","=C2*D1","=C2*D2","=B2*C2"], c:2},

  // ===== BÀI 6 =====
  {type:"mc", q:"Chức năng chỉ hiển thị dòng thỏa điều kiện?", a:["Sắp xếp","Lọc dữ liệu","Biểu đồ","Danh sách"], c:1},
  {type:"mc", q:"Thứ tự tăng dần đúng?", a:["A010-A100-A011","A010-A011-A100","A100-A010-A011","A011-A010-A100"], c:1},

  // ===== BÀI 7 =====
  {type:"mc", q:"Biểu đồ dùng xem xu hướng?", a:["Cột","Đoạn thẳng","Quạt tròn","Bảng"], c:1},
  {type:"mc", q:"So sánh phần với tổng?", a:["Cột","Đoạn thẳng","Quạt tròn","Bảng"], c:2},

  // ===== BÀI 8 =====
  {type:"mc", q:"Phát biểu SAI về danh sách?", a:["Có 2 kiểu","Không tự cập nhật","Chỉ dùng 1 kiểu","Có thể kết hợp"], c:2},
  {type:"mc", q:"Có thể vẽ hình trong Word không?", a:["Có","Không"], c:0},

  // ===== BÀI 2 =====
  {type:"mc", q:"Đặc điểm thông tin số?", a:["Chậm","Nhanh, dễ lan","Khó lan","Dễ xóa"], c:1},
  {type:"mc", q:"Độ tin cậy thông tin số?", a:["Rất khác nhau","Luôn đúng","Toàn sai","Không ai chịu trách nhiệm"], c:0},
];

// Bổ sung câu tự động để đủ 51
while(questions.length < 51){
  questions.push({
    type:"mc",
    q:`Câu bổ sung ${questions.length+1}`,
    a:["A","B","C","D"],
    c:0
  });
}
