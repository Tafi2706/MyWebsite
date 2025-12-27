---
title: "Hiểu Sâu Về Event Loop Trong JavaScript"
date: 2025-12-16
draft: false
excerpt: "Giải mã cơ chế bất đồng bộ của JavaScript: Call Stack, Callback Queue, Microtask Queue và cách V8 Engine xử lý tác vụ bất đồng bộ."
---

# JavaScript Event Loop: Trái Tim Của Asynchronous

JavaScript là ngôn ngữ **đơn luồng (single-threaded)**. Điều này có nghĩa là tại một thời điểm, nó chỉ có thể thực hiện một tác vụ duy nhất. Vậy tại sao Node.js có thể xử lý hàng nghìn request đồng thời hay trình duyệt có thể vừa tải ảnh vừa phản hồi click chuột? Câu trả lời nằm ở **Event Loop**.

## 1. Các Thành Phần Chính

Để hiểu Event Loop, chúng ta cần nắm 3 khái niệm:

### Call Stack (Ngăn xếp thực thi)
Nơi chứa các hàm đang được chạy. Vì JS đơn luồng, chỉ có 1 Call Stack. Hàm nào vào sau ra trước (LIFO).

### Web APIs / Node APIs
Các tác vụ nặng (như `setTimeout`, `fetch`, đọc file) không được thực thi trực tiếp trên Call Stack của JS mà được đẩy sang môi trường API của trình duyệt hoặc C++ của Node.js để chạy ngầm.

### Callback Queue (Hàng đợi)
Sau khi Web API chạy xong, nó đẩy callback (kết quả) vào hàng đợi này để chờ được thực thi.

---

## 2. Event Loop Hoạt Động Ra Sao?

Event Loop có một nhiệm vụ cực kỳ đơn giản:
> **Nó liên tục kiểm tra xem Call Stack có trống không. Nếu Call Stack trống VÀ có việc trong Queue, nó sẽ đẩy việc từ Queue lên Stack để chạy.**

### Ví dụ kinh điển

```javascript
console.log("1. Start");

setTimeout(() => {
    console.log("2. Timeout");
}, 0);

console.log("3. End");
```

**Kết quả:** `1. Start` -> `3. End` -> `2. Timeout`.
**Giải thích:** Dù timeout là 0ms, nó vẫn bị đẩy sang Web API -> Callback Queue. Nó phải chờ `console.log("3. End")` chạy xong (Stack trống) thì mới được Event Loop đưa lên.

---

## 3. Microtasks vs Macrotasks

Không phải hàng đợi nào cũng giống nhau. ES6 giới thiệu **Microtask Queue** (dành cho `Promise`).

* **Macrotask:** `setTimeout`, `setInterval`, I/O.
* **Microtask:** `Promise.then`, `process.nextTick`, `MutationObserver`.

**Quy tắc vàng:**
> Event Loop sẽ ưu tiên xử lý **HẾT** Microtask Queue trước khi chuyển sang xử lý Macrotask Queue.

```javascript
console.log('Start');

setTimeout(() => console.log('Timeout'), 0); // Macrotask

Promise.resolve().then(() => console.log('Promise')); // Microtask

console.log('End');
```

**Kết quả:** `Start` -> `End` -> `Promise` -> `Timeout`.

## Kết Luận

Nắm vững Event Loop giúp bạn tránh được những lỗi logic khó hiểu khi làm việc với API, Database và các tác vụ bất đồng bộ. Đây là kiến thức phân loại trình độ giữa Junior và Senior JS Developer.
