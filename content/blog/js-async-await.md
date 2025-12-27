---
title: "Bất Đồng Bộ: Promises và Async/Await"
date: 2024-04-10
draft: false
excerpt: "Xử lý các tác vụ tốn thời gian (API call, Timer) mà không làm treo ứng dụng. Từ Callback Hell đến giải pháp hiện đại Async/Await."
---

# Asynchronous JavaScript

Đây là phần khó nhưng quan trọng nhất trong JSE2. JS đơn luồng, nên cần cơ chế để xử lý việc "chờ đợi" (như tải dữ liệu từ server).

## 1. Synchronous vs Asynchronous

* **Synchronous (Đồng bộ):** Chạy tuần tự, dòng 1 xong mới tới dòng 2.
* **Asynchronous (Bất đồng bộ):** Chạy song song, không chặn luồng chính.

```javascript
// Synchronous
console.log("Start");
console.log("End");

// Asynchronous
console.log("Start");
setTimeout(() => {
    console.log("Timer done");
}, 1000);
console.log("End"); // In ra trước "Timer done"
```

## 2. Callbacks (Cũ)

```javascript
function getData(callback) {
    setTimeout(() => {
        callback("Data loaded");
    }, 1000);
}

getData((data) => {
    console.log(data);
});
```

**Vấn đề:** Callback Hell khi lồng nhiều tầng.

## 3. Promises

Promise đại diện cho một giá trị sẽ có trong tương lai (hoặc lỗi). Có 3 trạng thái:
- **Pending:** Đang chờ
- **Fulfilled:** Thành công
- **Rejected:** Thất bại

```javascript
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve("Thành công!");
        } else {
            reject("Lỗi rồi!");
        }
    }, 1000);
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.error(error));
```

### Promise Chaining

```javascript
fetch('https://api.example.com/user')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## 4. Async / Await (Hiện Đại)

Cú pháp "syntactic sugar" giúp viết code async trông như code sync, dễ đọc hơn rất nhiều.

```javascript
async function layDuLieu() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Lỗi mạng:", error);
    }
}

layDuLieu();
```

### Async/Await với Multiple Promises

```javascript
// Chạy tuần tự (chậm)
async function sequential() {
    const user = await getUser();
    const posts = await getPosts();
    return { user, posts };
}

// Chạy song song (nhanh hơn)
async function parallel() {
    const [user, posts] = await Promise.all([
        getUser(),
        getPosts()
    ]);
    return { user, posts };
}
```

## 5. Fetch API

```javascript
async function getWeather(city) {
    try {
        const response = await fetch(`https://api.weather.com/${city}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error.message);
    }
}
```

## Kết Luận

Async/Await là game changer cho JavaScript. Nó giúp code bất đồng bộ trở nên dễ đọc và dễ debug hơn rất nhiều so với Callbacks và Promises thuần.
