---
title: "JS Essentials 1: Biến, Kiểu Dữ Liệu và Strict Mode"
date: 2024-03-01
draft: false
excerpt: "Khởi đầu với JavaScript: Sự khác biệt giữa let, const, var và các kiểu dữ liệu nguyên thủy (Primitive Types). Tại sao nên dùng Strict Mode?"
---

# Nhập Môn JavaScript

Khóa học **JavaScript Essentials 1** tập trung vào cú pháp cốt lõi. Dưới đây là những điểm nhấn quan trọng.

## 1. Khai Báo Biến: Var, Let, Const
* **`var`**: Scope hàm (function scope), dễ gây lỗi hoisting. Hạn chế dùng.
* **`let`**: Scope khối (block scope `{}`), dùng cho biến có thể thay đổi.
* **`const`**: Scope khối, dùng cho hằng số (không thể gán lại).

```javascript
// Ví dụ
var x = 10;      // function scope
let y = 20;      // block scope
const PI = 3.14; // constant
```

## 2. Kiểu Dữ Liệu (Primitives)
JS là ngôn ngữ *dynamic typing* (kiểu động).
* **String:** Chuỗi ký tự (`"Hello"`)
* **Number:** Số (`42`, `3.14`)
* **Boolean:** `true` hoặc `false`
* **BigInt:** Số cực lớn
* **Null & Undefined:** Khác nhau như thế nào?
  - `null`: Giá trị rỗng có chủ đích
  - `undefined`: Biến chưa được gán giá trị
* **Symbol:** Giá trị duy nhất

## 3. Strict Mode
Luôn bắt đầu file JS bằng `"use strict";`. Chế độ này giúp:
- Bắt các lỗi ẩn
- Ngăn chặn sử dụng biến chưa khai báo
- Làm code an toàn hơn

```javascript
"use strict";

x = 10; // Lỗi! Phải khai báo bằng let/const/var
```

## Kết Luận

Nắm vững cơ bản về biến và kiểu dữ liệu là bước đầu tiên để trở thành JavaScript developer. Luôn sử dụng `const` khi có thể, chỉ dùng `let` khi cần thay đổi giá trị.
