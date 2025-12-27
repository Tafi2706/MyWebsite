---
title: "Địa Chỉ IP và Subnetting: Định Danh Trên Mạng"
date: 2024-02-05
draft: false
excerpt: "Phân biệt IPv4 và IPv6. Tìm hiểu cấu trúc địa chỉ IP, Subnet Mask và sự khác biệt giữa Public IP và Private IP."
---

# IP Addressing: Ai Là Ai Trên Internet?

Mọi thiết bị kết nối mạng đều cần một địa chỉ IP (Internet Protocol). Khóa học Cisco giải thích chi tiết hai phiên bản IP chính.

## IPv4 vs IPv6

* **IPv4:** 32-bit (VD: `192.168.1.1`). Đang dần cạn kiệt.
* **IPv6:** 128-bit (VD: `2001:0db8::`). Sinh ra để giải quyết vấn đề thiếu hụt địa chỉ của IPv4.

## Cấu trúc IPv4

Một địa chỉ IPv4 gồm 2 phần, được phân tách bởi **Subnet Mask**:
1.  **Network Portion:** Định danh mạng (giống tên đường).
2.  **Host Portion:** Định danh thiết bị (giống số nhà).

Ví dụ: IP `192.168.1.10` với Subnet Mask `255.255.255.0` (/24) có nghĩa là: Mạng `192.168.1.0`, thiết bị số `10`.

## Public vs Private IP

* **Public IP:** Địa chỉ duy nhất trên toàn Internet, do ISP cấp phát.
* **Private IP:** Dùng trong mạng nội bộ (192.168.x.x, 10.x.x.x, 172.16-31.x.x), không định tuyến trên Internet.

## Subnetting

Subnetting là kỹ thuật chia một mạng lớn thành nhiều mạng con nhỏ hơn để:
- Tăng bảo mật
- Quản lý hiệu quả hơn
- Tiết kiệm IP

## Kết Luận

Địa chỉ IP là "căn cước công dân" của mọi thiết bị trên mạng. Hiểu rõ cách phân chia và quản lý IP là kỹ năng thiết yếu cho Network Engineer.
