---
title: "Tìm Hiểu Sâu về Giao Thức TLS/SSL"
date: 2025-12-20
draft: false
excerpt: "Phân tích chi tiết cách TLS/SSL bảo mật dữ liệu, từ handshake đến xác thực chứng chỉ."
---

# TLS/SSL – Nền tảng bảo mật Web

Transport Layer Security (TLS) và tiền thân của nó SSL (Secure Sockets Layer) là các giao thức mã hóa giúp bảo mật truyền thông qua Internet. Hiểu rõ cách TLS/SSL hoạt động là điều cần thiết cho bất kỳ developer nào làm việc với ứng dụng web hay API.

## TLS hoạt động như thế nào?

### Handshake Protocol

TLS sử dụng quy trình bắt tay phức tạp để thiết lập kết nối an toàn:

**1. ClientHello**  
Client gửi danh sách các cipher suites mà nó hỗ trợ cùng với các thông số mã hóa.

**2. ServerHello**  
Server chọn cipher suite phù hợp và gửi chứng chỉ số (digital certificate) để xác thực danh tính.

**3. Key Exchange**  
Client và server trao đổi thông tin để thiết lập khóa phiên (session key) dùng cho việc mã hóa dữ liệu.

**4. Finished**  
Cả hai bên gửi message xác nhận rằng handshake đã hoàn tất và kết nối an toàn đã sẵn sàng.

### Mã hóa dữ liệu

Sau khi handshake hoàn tất, tất cả dữ liệu được mã hóa bằng khóa phiên đã thỏa thuận. Điều này đảm bảo:
- **Confidentiality:** Dữ liệu không thể bị đọc trộm
- **Integrity:** Dữ liệu không bị thay đổi trong quá trình truyền
- **Authentication:** Xác nhận danh tính của server (và client nếu có mutual TLS)

## Cipher Suites

Cipher suite là một bộ thuật toán mã hóa xác định cách dữ liệu được bảo mật. Nó bao gồm:

- **Key Exchange:** RSA, ECDHE (Elliptic Curve Diffie-Hellman Ephemeral)
- **Authentication:** RSA, ECDSA (Elliptic Curve Digital Signature Algorithm)
- **Encryption:** AES, ChaCha20
- **Message Authentication:** SHA256, SHA384

**Ví dụ:**  
`TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256`

## Certificate Validation

TLS sử dụng chứng chỉ số để xác thực danh tính của server.

### Certificate Chain

1. **Root CA (Certificate Authority)**  
   Tổ chức cấp chứng chỉ gốc, được tin cậy bởi hệ điều hành và trình duyệt.

2. **Intermediate CA**  
   Cấp chứng chỉ trung gian, được ký bởi Root CA.

3. **Server Certificate**  
   Chứng chỉ của website, được ký bởi Intermediate CA.

### Validation Process

- Kiểm tra chữ ký số (digital signature)
- Xác minh ngày hiệu lực (không hết hạn)
- Kiểm tra Certificate Revocation List (CRL) hoặc OCSP
- Xác nhận domain name khớp với chứng chỉ

## Best Practices

### 1. Sử dụng TLS 1.3

Phiên bản mới nhất với bảo mật được cải thiện và tốc độ handshake nhanh hơn.

### 2. Perfect Forward Secrecy (PFS)

Sử dụng ECDHE cho key exchange để đảm bảo rằng việc lộ khóa trong tương lai không ảnh hưởng đến dữ liệu đã mã hóa trước đó.

### 3. HSTS (HTTP Strict Transport Security)

Bắt buộc trình duyệt chỉ sử dụng HTTPS cho domain của bạn.

**Header example:**
```
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

### 4. Certificate Pinning

Ngăn chặn man-in-the-middle attacks bằng cách "pin" chứng chỉ hoặc public key của server trong ứng dụng.

## Common Vulnerabilities

### 1. Heartbleed

Lỗ hổng trong OpenSSL cho phép kẻ tấn công đọc bộ nhớ của server.

**Giải pháp:** Cập nhật OpenSSL và thay đổi certificates/keys.

### 2. POODLE

Tấn công downgrade buộc sử dụng SSL 3.0 yếu hơn.

**Giải pháp:** Vô hiệu hóa SSL 3.0 hoàn toàn.

### 3. BEAST

Khai thác CBC cipher trong TLS 1.0.

**Giải pháp:** Sử dụng TLS 1.2+ với AEAD ciphers (như GCM).

## Kết luận

TLS/SSL là công nghệ quan trọng không thể thiếu để bảo vệ dữ liệu trên Internet. Hiểu rõ cách nó hoạt động, từ handshake protocol đến certificate validation, giúp bạn triển khai bảo mật đúng cách và tránh được các lỗ hổng phổ biến. Luôn cập nhật kiến thức về các phiên bản mới và best practices để đảm bảo ứng dụng của bạn an toàn nhất.
