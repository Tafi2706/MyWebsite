---
title: "Database Indexing: Tăng Tốc Truy Vấn SQL"
date: 2025-12-13
draft: false
excerpt: "Hiểu cách Database Index hoạt động, khi nào nên dùng B-Tree vs Hash Index, và cách tối ưu hóa query performance."
---

# Database Indexing: Chìa Khóa Của Performance

Một câu query chạy 5 giây trên development nhưng timeout 30 giây trên production với hàng triệu records? Nguyên nhân thường là **thiếu index** hoặc index không hiệu quả.

## 1. Index Là Gì?

Index trong database giống như **mục lục sách**. Thay vì đọc từng trang (Full Table Scan), bạn nhảy thẳng đến đúng trang cần tìm.

### Ví dụ không có Index

```sql
SELECT * FROM users WHERE email = 'tai@example.com';
-- Database phải scan toàn bộ 1,000,000 rows
```

### Sau khi thêm Index

```sql
CREATE INDEX idx_email ON users(email);
-- Giờ database chỉ cần O(log n) lookups thay vì O(n)
```

---

## 2. Các Loại Index

### B-Tree Index (Mặc định)
* Phù hợp với: Range queries (`>`, `<`, `BETWEEN`), equality (`=`).
* Cấu trúc: Cây nhị phân cân bằng, truy xuất O(log n).

```sql
-- Hiệu quả với B-Tree
WHERE age > 18
WHERE name LIKE 'Tai%' -- % ở cuối
```

### Hash Index
* Phù hợp với: Equality queries (`=`) only.
* Không hỗ trợ range queries.
* Cực nhanh O(1) cho exact match.

### Composite Index (Index tổng hợp)
Index trên nhiều cột. **Thứ tự cột quan trọng!**

```sql
CREATE INDEX idx_name_age ON users(name, age);

-- Hiệu quả
WHERE name = 'Tai' AND age = 20

-- KHÔNG hiệu quả (không dùng được index)
WHERE age = 20 -- Thiếu cột đầu tiên (name)
```

---

## 3. Trade-offs Của Index

### Ưu điểm
* Query nhanh hơn nhiều lần (đặc biệt với WHERE, JOIN, ORDER BY).

### Nhược điểm
* **Tốn dung lượng:** Mỗi index chiếm thêm bộ nhớ.
* **Chậm khi INSERT/UPDATE:** Database phải update cả index.

### Best Practices
* Chỉ index các cột **thường xuyên dùng trong WHERE/JOIN**.
* Tránh index cột có giá trị trùng lặp nhiều (ví dụ: `gender` chỉ có 2 giá trị).
* Sử dụng `EXPLAIN` để kiểm tra query plan.

```sql
EXPLAIN SELECT * FROM users WHERE email = 'tai@example.com';
-- Kiểm tra có dùng index không
```

## Kết Luận

Index là công cụ mạnh mẽ nhưng cần dùng đúng chỗ. Over-indexing cũng tệ không kém under-indexing. Luôn profile query và chỉ index khi thực sự cần thiết.
