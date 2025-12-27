---
title: "Hàm (Functions) và Xử Lý Lỗi trong JS"
date: 2024-03-10
draft: false
excerpt: "Cách khai báo hàm, tham số, giá trị trả về. Sử dụng khối try-catch-finally để xử lý ngoại lệ (Exception Handling)."
---

# Functions & Error Handling

## 1. Functions (Hàm)

Hàm giúp tái sử dụng code và module hóa chương trình.

### Function Declaration

```javascript
function chao(ten) {
    return "Xin chào " + ten;
}
console.log(chao("Tài")); // "Xin chào Tài"
```

### Function Expression

```javascript
const tinhTong = function(a, b) {
    return a + b;
};
```

### Tham Số và Giá Trị Trả Về

```javascript
function multiply(x, y = 1) { // y có giá trị mặc định
    return x * y;
}
```

### First-Class Functions

Trong JS, hàm cũng là một object (First-class citizen), có thể được:
- Gán cho biến
- Truyền như tham số
- Trả về từ hàm khác

## 2. Xử Lý Lỗi (Exceptions)

Chương trình không phải lúc nào cũng chạy suôn sẻ. JS cung cấp cơ chế `try...catch` để bắt lỗi.

### Try-Catch-Finally

```javascript
try {
    // Code có thể gây lỗi
    let result = JSON.parse('invalid json');
} catch (error) {
    // Xử lý khi lỗi xảy ra
    console.log("Lỗi rồi: " + error.message);
} finally {
    // Luôn chạy dù có lỗi hay không
    console.log("Dọn dẹp tài nguyên");
}
```

### Throw (Ném Lỗi)

```javascript
function kiemTraTuoi(age) {
    if (age < 0) {
        throw new Error("Tuổi không thể âm!");
    }
    return age;
}
```

### Các Loại Lỗi Thường Gặp

* **SyntaxError:** Lỗi cú pháp
* **ReferenceError:** Biến không tồn tại
* **TypeError:** Sai kiểu dữ liệu
* **RangeError:** Giá trị ngoài phạm vi

## Best Practices

1. Luôn validate input để tránh lỗi
2. Sử dụng try-catch cho code có thể lỗi (API call, file I/O)
3. Đặt tên hàm rõ ràng, mô tả chức năng
4. Một hàm nên làm một việc duy nhất

## Kết Luận

Functions giúp code có tổ chức và dễ maintain. Error handling đảm bảo ứng dụng không crash khi gặp lỗi bất ngờ. Hai kỹ năng này là nền tảng để viết JavaScript chuyên nghiệp.
