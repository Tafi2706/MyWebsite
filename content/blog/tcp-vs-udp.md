---
title: "TCP vs UDP: Độ Tin Cậy hay Tốc Độ?"
date: 2024-02-10
draft: false
excerpt: "So sánh hai giao thức phổ biến nhất tầng Transport. Khi nào dùng TCP (Web, Email) và khi nào dùng UDP (Streaming, Game)."
---

# Giao Thức Tầng Transport

Tại tầng Transport của mô hình OSI, có hai "người vận chuyển" chính:

## 1. TCP (Transmission Control Protocol)
* **Đặc điểm:** Hướng kết nối (Connection-oriented), tin cậy.
* **Cơ chế:** Three-way Handshake (Bắt tay 3 bước). Có đánh số gói tin và gửi lại nếu mất.
* **Ứng dụng:** Web (HTTP), Email (SMTP), File Transfer (FTP).

### Three-Way Handshake
1. **SYN:** Client gửi yêu cầu kết nối
2. **SYN-ACK:** Server xác nhận và gửi lại yêu cầu
3. **ACK:** Client xác nhận hoàn tất kết nối

## 2. UDP (User Datagram Protocol)
* **Đặc điểm:** Phi kết nối (Connectionless), nhanh nhưng không đảm bảo.
* **Cơ chế:** Gửi là gửi ("Fire and forget"), không quan tâm đích có nhận được hay không.
* **Ứng dụng:** Livestream, Video Call, Game Online (những nơi mà tốc độ quan trọng hơn độ chính xác tuyệt đối).

## So Sánh TCP vs UDP

| Tiêu chí | TCP | UDP |
|----------|-----|-----|
| Độ tin cậy | Cao (có kiểm tra lỗi) | Thấp |
| Tốc độ | Chậm hơn | Nhanh hơn |
| Kết nối | Cần thiết lập | Không cần |
| Use case | Web, Email, File | Video, Game, DNS |

## Kết Luận

Không có giao thức nào "tốt nhất", chỉ có "phù hợp nhất". TCP cho độ chính xác, UDP cho tốc độ. Lựa chọn phụ thuộc vào yêu cầu ứng dụng của bạn.
