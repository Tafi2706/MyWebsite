---
title: "JWT Authentication: Bảo Mật API Hiện Đại"
date: 2025-12-12
draft: false
excerpt: "Tìm hiểu cách JWT (JSON Web Token) hoạt động, cách implement authentication an toàn, và những lỗi bảo mật thường gặp cần tránh."
---

# JWT Authentication: Stateless Security Cho API

Khi xây dựng RESTful API, một trong những thách thức lớn nhất là **authentication** (xác thực người dùng). JWT (JSON Web Token) đã trở thành giải pháp phổ biến nhất nhờ tính **stateless** và khả năng mở rộng tốt.

## 1. JWT Hoạt Động Như Thế Nào?

JWT là một chuỗi string được mã hóa gồm 3 phần:

```
header.payload.signature
```

### Header
Chứa thông tin về thuật toán mã hóa (thường là HS256 hoặc RS256).

### Payload
Chứa thông tin user (user_id, role, email...). **Lưu ý:** Payload không được mã hóa, chỉ base64-encoded!

### Signature
Chữ ký số để verify token không bị giả mạo.

```javascript
// Tạo JWT
const token = jwt.sign(
  { user_id: 123, role: 'admin' },
  'SECRET_KEY',
  { expiresIn: '1h' }
);

// Verify JWT
const decoded = jwt.verify(token, 'SECRET_KEY');
console.log(decoded.user_id); // 123
```

---

## 2. Flow Authentication Chuẩn

### Login
1. User gửi username + password.
2. Server verify credentials.
3. Server tạo JWT và trả về cho client.
4. Client lưu JWT vào `localStorage` hoặc `httpOnly cookie`.

### Gọi API
1. Client gửi JWT trong header: `Authorization: Bearer <token>`.
2. Server verify JWT.
3. Nếu hợp lệ, xử lý request. Nếu không, trả về 401 Unauthorized.

---

## 3. Các Lỗi Bảo Mật Thường Gặp

### Lưu Secret Key Không An Toàn
❌ **Sai:** Hardcode secret trong code và push lên GitHub.
✅ **Đúng:** Dùng environment variables (`process.env.JWT_SECRET`).

### Không Kiểm Tra Expiration
❌ **Sai:** Token không có thời gian hết hạn, dùng mãi mãi.
✅ **Đúng:** Đặt `expiresIn` ngắn (15-60 phút) + implement Refresh Token.

### Lưu Thông Tin Nhạy Cảm Trong Payload
❌ **Sai:** Lưu password, credit card vào payload (vì ai cũng decode được).
✅ **Đúng:** Chỉ lưu thông tin định danh (user_id, role).

### Không Dùng HTTPS
JWT gửi qua HTTP thuần sẽ bị đánh cắp dễ dàng (Man-in-the-Middle Attack).
✅ **Bắt buộc:** Chỉ dùng JWT qua HTTPS.

---

## 4. Access Token vs Refresh Token

Để cân bằng giữa bảo mật và UX, pattern phổ biến là:

* **Access Token:** Thời gian ngắn (15 phút), dùng để gọi API.
* **Refresh Token:** Thời gian dài (7-30 ngày), dùng để lấy Access Token mới.

```javascript
// Khi Access Token hết hạn
POST /api/refresh
Body: { refreshToken: "xyz..." }

// Response: Access Token mới
```

## Kết Luận

JWT là công cụ mạnh mẽ nhưng cần hiểu rõ để tránh lỗ hổng bảo mật. Luôn nhớ: **Security is not an afterthought, it's a foundation.**
