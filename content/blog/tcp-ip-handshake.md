---
title: "Hiểu về Bắt Tay TCP/IP (TCP/IP Handshake)"
date: 2025-12-20
draft: false
excerpt: "Tìm hiểu sâu về quy trình bắt tay ba bước và cách TCP thiết lập kết nối đáng tin cậy thông qua các gói SYN, SYN-ACK và ACK."
---

# Giới thiệu

TCP/IP là một trong những giao thức quan trọng nhất của Internet hiện đại. Nó đảm bảo rằng dữ liệu được truyền một cách đáng tin cậy giữa các thiết bị trên mạng. Một trong những cơ chế cốt lõi của TCP là **quy trình bắt tay ba bước (Three-Way Handshake)**, giúp thiết lập kết nối trước khi truyền dữ liệu.

## Quy trình Bắt Tay Ba Bước

### Bước 1: SYN (Synchronize)

Client khởi tạo kết nối bằng cách gửi một gói **SYN** đến server. Gói này chứa số thứ tự ban đầu (Initial Sequence Number – ISN) để đồng bộ hóa việc truyền dữ liệu.

**Vai trò:**
- Yêu cầu server thiết lập kết nối
- Khởi tạo số thứ tự gói tin

### Bước 2: SYN-ACK (Synchronize-Acknowledge)

Khi nhận được gói SYN, server phản hồi bằng gói **SYN-ACK**. Gói này bao gồm:
- **ACK:** Xác nhận đã nhận SYN từ client
- **SYN:** Server gửi số thứ tự riêng của mình

**Vai trò:**
- Xác nhận yêu cầu kết nối từ client
- Cung cấp số thứ tự cho phía server

### Bước 3: ACK (Acknowledge)

Client gửi gói **ACK** cuối cùng để xác nhận đã nhận được SYN-ACK từ server. Sau bước này, kết nối TCP chính thức được thiết lập và cả hai bên có thể bắt đầu truyền dữ liệu.

**Vai trò:**
- Hoàn tất quy trình bắt tay
- Xác nhận rằng kết nối đã sẵn sàng

## Tại sao cần quy trình ba bước?

Quy trình bắt tay ba bước đảm bảo:
1. **Đồng bộ hóa số thứ tự:** Cả client và server đều biết số thứ tự ban đầu của nhau
2. **Xác nhận khả năng kết nối:** Đảm bảo cả hai bên đều sẵn sàng giao tiếp
3. **Ngăn chặn kết nối cũ hoặc trùng lặp:** Tránh nhầm lẫn với các phiên kết nối trước đó

## Kết luận

Quy trình bắt tay TCP/IP là nền tảng của giao tiếp mạng đáng tin cậy. Hiểu rõ cơ chế này giúp bạn nắm vững cách các ứng dụng mạng hoạt động và tối ưu hóa hiệu suất truyền dữ liệu. Đây là kiến thức thiết yếu cho bất kỳ kỹ sư mạng hay lập trình viên backend nào.
