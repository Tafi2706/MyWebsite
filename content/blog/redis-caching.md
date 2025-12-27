---
title: "Redis Caching Strategy: Tăng Hiệu Năng Backend"
date: 2025-12-11
draft: false
excerpt: "Khám phá cách sử dụng Redis để cache dữ liệu, giảm database load, và các pattern caching phổ biến (Cache-Aside, Write-Through)."
---

# Redis Caching: Tăng Tốc Ứng Dụng 10-100 Lần

Khi database trở thành bottleneck của hệ thống, **caching** là giải pháp đầu tiên bạn nên nghĩ đến. Redis là in-memory data store phổ biến nhất cho việc này, giúp giảm database load và tăng response time đáng kể.

## 1. Tại Sao Cần Redis?

### Vấn Đề Thực Tế
Mỗi lần user truy cập profile, ứng dụng query database:

```sql
SELECT * FROM users WHERE id = 123;
```

Nếu có 10,000 requests/giây, database phải xử lý 10,000 queries cho **cùng một dữ liệu không đổi**. Lãng phí!

### Giải Pháp: Cache Với Redis

```javascript
// Lần đầu: Lấy từ DB + lưu vào Redis
const user = await db.query('SELECT * FROM users WHERE id = 123');
await redis.set('user:123', JSON.stringify(user), 'EX', 3600); // Cache 1 giờ

// Lần sau: Lấy trực tiếp từ Redis (cực nhanh)
const cachedUser = await redis.get('user:123');
```

---

## 2. Các Caching Pattern

### Cache-Aside (Lazy Loading)
Application tự quản lý cache. **Phổ biến nhất**.

**Flow:**
1. Check Redis trước.
2. Nếu miss, query DB rồi lưu vào Redis.
3. Nếu hit, trả về luôn.

```javascript
async function getUser(userId) {
  const cached = await redis.get(`user:${userId}`);
  if (cached) return JSON.parse(cached);
  
  const user = await db.findById(userId);
  await redis.set(`user:${userId}`, JSON.stringify(user), 'EX', 3600);
  return user;
}
```

### Write-Through
Mỗi lần write database, đồng thời write Redis.

**Ưu điểm:** Cache luôn đồng bộ.
**Nhược điểm:** Tốn tài nguyên cho data ít được đọc.

### Write-Behind (Write-Back)
Write vào Redis trước, rồi async write vào DB sau.

**Ưu điểm:** Write cực nhanh.
**Nhược điểm:** Rủi ro mất dữ liệu nếu Redis crash.

---

## 3. Cache Invalidation (Vấn Đề Khó Nhất)

> "There are only two hard things in Computer Science: cache invalidation and naming things." – Phil Karlton

Khi data trong DB thay đổi, làm sao để Redis biết và xóa cache cũ?

### TTL (Time To Live)
Đơn giản nhất: Đặt thời gian sống cho cache.

```javascript
redis.set('user:123', data, 'EX', 300); // Hết hạn sau 5 phút
```

### Manual Invalidation
Khi update DB, xóa cache tương ứng.

```javascript
async function updateUser(userId, newData) {
  await db.update(userId, newData);
  await redis.del(`user:${userId}`); // Xóa cache
}
```

---

## 4. Redis Không Chỉ Là Cache

Redis còn hỗ trợ nhiều cấu trúc dữ liệu khác:

* **Set:** Lưu danh sách unique (ví dụ: online users).
* **Sorted Set:** Leaderboard, ranking.
* **Pub/Sub:** Real-time messaging.
* **Stream:** Event sourcing.

## Kết Luận

Redis là "Swiss Army Knife" của backend engineering. Dùng đúng cách, nó có thể giúp bạn scale ứng dụng từ 1,000 lên 100,000 users mà không cần optimize database quá nhiều.
