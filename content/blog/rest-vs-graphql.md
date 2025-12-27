---
title: "REST API vs GraphQL: Lựa Chọn Kiến Trúc Backend Phù Hợp"
date: 2025-12-15
draft: false
excerpt: "So sánh chi tiết REST API và GraphQL: ưu nhược điểm, use case, và hướng dẫn lựa chọn công nghệ phù hợp cho dự án của bạn."
---

# REST API vs GraphQL: Chọn Kiến Trúc Nào?

Khi thiết kế backend, một trong những quyết định quan trọng nhất là lựa chọn kiến trúc API: **REST** hay **GraphQL**. Cả hai đều có điểm mạnh riêng, và lựa chọn sai có thể dẫn đến over-fetching, under-fetching, hoặc codebase phức tạp không cần thiết.

## 1. REST API: Kiến Trúc Truyền Thống

REST (Representational State Transfer) sử dụng các endpoint cố định với HTTP methods (GET, POST, PUT, DELETE).

### Ưu điểm
* **Đơn giản, dễ hiểu:** Mỗi resource có một URL riêng.
* **Caching hiệu quả:** HTTP caching hoạt động tự nhiên với GET requests.
* **Tooling phong phú:** Swagger, Postman, REST Client...

### Nhược điểm
* **Over-fetching:** Client nhận nhiều dữ liệu hơn cần thiết.
* **Under-fetching:** Phải gọi nhiều endpoint để lấy đủ dữ liệu.
* **Versioning phức tạp:** Khi API thay đổi, phải maintain nhiều version (`/api/v1`, `/api/v2`...).

```javascript
// REST: Cần 2 request để lấy user + posts
GET /api/users/123
GET /api/users/123/posts
```

---

## 2. GraphQL: Linh Hoạt Hơn

GraphQL cho phép client tự định nghĩa dữ liệu cần lấy thông qua **query language**.

### Ưu điểm
* **Đúng dữ liệu cần thiết:** Client tự chọn fields cần lấy.
* **Single endpoint:** Chỉ cần 1 endpoint `/graphql` cho tất cả queries.
* **Strong typing:** Schema định nghĩa rõ ràng cấu trúc dữ liệu.

### Nhược điểm
* **Phức tạp hơn:** Learning curve cao, cần thêm GraphQL server (Apollo, Relay...).
* **Caching khó:** Không thể dùng HTTP cache truyền thống.
* **N+1 problem:** Nếu không tối ưu, có thể query database quá nhiều lần.

```graphql
# GraphQL: 1 request lấy cả user + posts
query {
  user(id: "123") {
    name
    email
    posts {
      title
      createdAt
    }
  }
}
```

---

## 3. Nên Dùng Gì Khi Nào?

### Dùng REST khi:
* Dự án nhỏ, đơn giản.
* Cần tận dụng HTTP caching.
* Team chưa quen GraphQL.

### Dùng GraphQL khi:
* Mobile app với bandwidth hạn chế (cần tối ưu payload).
* Frontend cần linh hoạt fetch dữ liệu.
* Microservices architecture (GraphQL làm API Gateway).

## Kết Luận

Không có giải pháp nào "tốt nhất", chỉ có giải pháp "phù hợp nhất". REST vẫn là lựa chọn an toàn cho đa số dự án, còn GraphQL tỏa sáng khi bạn cần sự linh hoạt và kiểm soát chặt chẽ dữ liệu truyền tải.
