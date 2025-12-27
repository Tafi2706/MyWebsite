---
title: "Mô Hình OSI và TCP/IP: Ngôn Ngữ Của Internet"
date: 2024-02-01
draft: false
excerpt: "Tổng quan về 7 tầng trong mô hình OSI và 4 tầng TCP/IP. Hiểu cách dữ liệu được đóng gói (Encapsulation) để truyền tải qua mạng."
---

# Mô Hình OSI & TCP/IP

Trong khóa học **Networking Basics**, khái niệm quan trọng nhất chính là các mô hình tham chiếu. Để hai máy tính có thể "nói chuyện" với nhau, chúng cần tuân theo các quy tắc chung.

## 1. Mô Hình OSI (7 Tầng)

1.  **Physical (Vật lý):** Dây cáp, sóng wifi, bit (0/1).
2.  **Data Link (Liên kết dữ liệu):** MAC Address, Switch.
3.  **Network (Mạng):** IP Address, Router (Định tuyến).
4.  **Transport (Giao vận):** TCP/UDP, đảm bảo dữ liệu đến đúng nơi.
5.  **Session (Phiên):** Quản lý phiên làm việc.
6.  **Presentation (Trình bày):** Mã hóa, nén dữ liệu (SSL/TLS).
7.  **Application (Ứng dụng):** Giao diện người dùng (HTTP, FTP, DNS).

## 2. Quá Trình Đóng Gói (Encapsulation)

Khi bạn gửi một tin nhắn, dữ liệu sẽ đi từ tầng 7 xuống tầng 1, mỗi tầng bọc thêm một "header" thông tin. Khi sang máy nhận, quá trình diễn ra ngược lại (De-encapsulation).

## 3. Mô Hình TCP/IP (4 Tầng)

TCP/IP là mô hình thực tế được sử dụng trên Internet:
1. **Network Access** (tương đương Physical + Data Link)
2. **Internet** (IP Layer)
3. **Transport** (TCP/UDP)
4. **Application** (HTTP, DNS, FTP...)

## Kết Luận

Hiểu mô hình OSI và TCP/IP là nền tảng để nắm vững cách Internet hoạt động. Mỗi tầng đảm nhiệm một nhiệm vụ cụ thể, giúp việc truyền thông trở nên có tổ chức và hiệu quả.
