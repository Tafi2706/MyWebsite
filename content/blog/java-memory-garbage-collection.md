---
title: "Java: Quản Lý Bộ Nhớ và Garbage Collection"
date: 2025-12-18
draft: false
excerpt: "Khám phá cách Java quản lý bộ nhớ (Heap vs Stack) và cơ chế dọn dẹp rác tự động (Garbage Collection) để tối ưu hóa hiệu suất ứng dụng."
---

# Java Memory Management & Garbage Collection

Khác với C++, Java giải phóng lập trình viên khỏi gánh nặng quản lý bộ nhớ thủ công nhờ vào cơ chế **Garbage Collection (GC)**. Tuy nhiên, hiểu rõ cách JVM sử dụng bộ nhớ là điều kiện tiên quyết để viết ứng dụng hiệu năng cao và tránh lỗi `OutOfMemoryError`.

## 1. Cấu Trúc Bộ Nhớ JVM

Bộ nhớ trong Java chủ yếu được chia thành hai phần chính: **Stack** và **Heap**.

### Stack Memory (Ngăn xếp)
* **Chức năng:** Lưu trữ các biến cục bộ (local variables) và lời gọi hàm (method calls).
* **Đặc điểm:** Truy xuất cực nhanh, dữ liệu tự động bị xóa khi block code kết thúc (LIFO - Last In First Out).
* **Lưu trữ:** Primitive types (int, boolean...) và tham chiếu (reference) đến đối tượng trong Heap.

### Heap Memory (Đống)
* **Chức năng:** Lưu trữ tất cả các **Object** (đối tượng) được tạo ra bằng từ khóa `new`.
* **Đặc điểm:** Được chia sẻ giữa các luồng (Thread-safe issues), quản lý phức tạp hơn Stack.
* **Cấu trúc Heap:**
    * **Young Generation:** Nơi chứa các object mới sinh ra.
    * **Old Generation:** Nơi chứa các object tồn tại lâu đời.
    * **Metaspace:** Lưu trữ metadata của class (từ Java 8 trở đi).

---

## 2. Garbage Collection (GC) Hoạt Động Như Thế Nào?

GC là tiến trình chạy ngầm (Daemon Thread) để tìm và xóa các object không còn được tham chiếu đến.

### Quy trình cơ bản (Mark and Sweep)
1.  **Mark (Đánh dấu):** GC duyệt qua cây object, đánh dấu những object nào đang được sử dụng (Reachable).
2.  **Sweep (Dọn dẹp):** Xóa các object không được đánh dấu.
3.  **Compact (Sắp xếp):** (Tùy chọn) Dồn các object còn lại về một phía để chống phân mảnh bộ nhớ.

### Các thuật toán GC phổ biến
* **Serial GC:** Dùng cho ứng dụng nhỏ, đơn luồng.
* **Parallel GC:** Dùng nhiều luồng để dọn dẹp (Mặc định trong nhiều version Java cũ).
* **G1 GC (Garbage First):** Tối ưu cho Heap lớn, chia Heap thành các vùng nhỏ (Region) để dọn dẹp song song. Mặc định từ Java 9.

---

## 3. Các Vấn Đề Thường Gặp

### Memory Leak (Rò rỉ bộ nhớ)
Dù có GC, Java vẫn có thể bị memory leak nếu bạn giữ tham chiếu đến object không còn dùng (ví dụ: quên đóng kết nối DB, static list lưu trữ vô hạn).

```java
// Ví dụ về Memory Leak
public class BadCache {
    // List này sẽ lớn mãi mãi vì là static
    private static List<Object> cache = new ArrayList<>(); 

    public void addData(Object data) {
        cache.add(data);
    }
}
```

### Tuning JVM
Để tối ưu, chúng ta thường cấu hình các tham số khởi chạy:
* `-Xms`: Kích thước Heap khởi điểm.
* `-Xmx`: Kích thước Heap tối đa.

## Kết Luận

Hiểu sâu về Stack, Heap và GC giúp bạn không chỉ viết code chạy đúng mà còn chạy nhanh và ổn định, đặc biệt là trong các hệ thống Backend chịu tải cao.
