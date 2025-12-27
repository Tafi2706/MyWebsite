---
title: "Control Flow: Vòng Lặp và Điều Kiện trong JS"
date: 2024-03-05
draft: false
excerpt: "Làm chủ luồng chạy của ứng dụng với if-else, switch-case và các loại vòng lặp for, while, do-while."
---

# Điều Khiển Luồng (Control Flow)

Logic của chương trình được quyết định bởi các cấu trúc điều khiển.

## 1. Điều Kiện (Conditional)

### If / Else If / Else
Kiểm tra điều kiện đúng/sai.

```javascript
let score = 85;
if (score >= 90) {
    console.log("Xuất sắc");
} else if (score >= 75) {
    console.log("Giỏi");
} else {
    console.log("Trung bình");
}
```

### Switch / Case
Lựa chọn giữa nhiều giá trị cụ thể (dùng `break` để thoát).

```javascript
switch(day) {
    case 'Monday':
        console.log("Đầu tuần");
        break;
    case 'Friday':
        console.log("Cuối tuần");
        break;
    default:
        console.log("Ngày thường");
}
```

### Toán tử 3 ngôi (Ternary)
`condition ? true : false`

```javascript
let age = 18;
let status = age >= 18 ? "Người lớn" : "Trẻ em";
```

## 2. Vòng Lặp (Loops)

### For Loop
Dùng khi biết trước số lần lặp.

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}
```

### While Loop
Lặp khi điều kiện còn đúng.

```javascript
let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}
```

### Do...While
Chạy ít nhất 1 lần rồi mới kiểm tra điều kiện.

```javascript
let num = 5;
do {
    console.log(num); // Chạy 1 lần
    num++;
} while (num < 5);
```

> **Lưu ý:** Cẩn thận với vòng lặp vô hạn (Infinite Loop) có thể làm treo trình duyệt!

## Break và Continue

* **break:** Thoát khỏi vòng lặp ngay lập tức
* **continue:** Bỏ qua lần lặp hiện tại, chuyển sang lần tiếp theo

## Kết Luận

Control flow là xương sống của mọi chương trình. Hiểu rõ khi nào dùng if-else, switch hay các loại loop sẽ giúp code của bạn hiệu quả và dễ đọc hơn.
