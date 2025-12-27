---
title: "Docker và Container: Hiểu Rõ Từ Cơ Bản Đến Nâng Cao"
date: 2025-12-14
draft: false
excerpt: "Tìm hiểu về Docker container, sự khác biệt với Virtual Machine, và cách sử dụng Docker để triển khai ứng dụng hiệu quả."
---

# Docker: Triển Khai Ứng Dụng Nhẹ Hơn Với Container

Docker đã cách mạng hóa cách chúng ta đóng gói và triển khai ứng dụng. Thay vì cài đặt môi trường thủ công trên mỗi server, Docker cho phép bạn "đóng hộp" toàn bộ ứng dụng + dependencies vào một **container** có thể chạy ở bất kỳ đâu.

## 1. Container vs Virtual Machine

### Virtual Machine (VM)
* Chạy **toàn bộ hệ điều hành** (OS) riêng biệt.
* Nặng, khởi động chậm (phút).
* Cách ly hoàn toàn về mặt tài nguyên.

### Docker Container
* **Chia sẻ kernel** của host OS.
* Nhẹ, khởi động cực nhanh (giây).
* Cách ly ở mức process, không phải OS.

```
VM: App -> Guest OS -> Hypervisor -> Host OS -> Hardware
Container: App -> Docker Engine -> Host OS -> Hardware
```

---

## 2. Các Khái Niệm Cốt Lõi

### Docker Image
Là "template" chỉ đọc chứa code + dependencies. Được build từ **Dockerfile**.

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
```

### Docker Container
Là "instance" đang chạy của Image. Có thể tạo nhiều container từ 1 image.

### Docker Compose
Công cụ để chạy nhiều container cùng lúc (ví dụ: app + database + redis).

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
  db:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: secret
```

---

## 3. Lợi Ích Trong Thực Tế

### Consistency (Tính nhất quán)
"It works on my machine" không còn là vấn đề. Container chạy giống nhau trên laptop dev, staging server và production.

### Scalability (Mở rộng dễ dàng)
Cần thêm capacity? Chỉ cần chạy thêm container. Kubernetes giúp tự động hóa việc này.

### CI/CD Pipeline
Docker là "xương sống" của DevOps hiện đại. Build image -> Push lên Registry -> Deploy tự động.

## Kết Luận

Docker không chỉ là trend, nó đã trở thành **standard** trong phát triển phần mềm hiện đại. Nếu bạn chưa biết Docker, đây là lúc bắt đầu học!
