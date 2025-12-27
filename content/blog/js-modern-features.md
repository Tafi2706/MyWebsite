---
title: "Arrow Functions và Các Tính Năng Hiện Đại"
date: 2024-04-05
draft: false
excerpt: "Cú pháp Arrow Function ngắn gọn, Template Literals, Destructuring và Spread Operator - Những công cụ mạnh mẽ của ES6+."
---

# Modern JavaScript (ES6+)

Khóa học JSE2 giới thiệu nhiều cú pháp hiện đại giúp code ngắn gọn hơn.

## 1. Arrow Functions (`=>`)

Cú pháp ngắn gọn cho hàm, đặc biệt hữu ích khi làm việc với callback.

### Cú Pháp Cơ Bản

```javascript
// Function truyền thống
const sum = function(a, b) { 
    return a + b; 
};

// Arrow function
const sum = (a, b) => a + b;

// Một tham số, không cần ngoặc
const square = x => x * x;

// Nhiều dòng, cần return
const complex = (x, y) => {
    let result = x + y;
    return result * 2;
};
```

### Lexical 'this'

Arrow function không có `this` riêng, nó kế thừa `this` từ scope cha (lexical scope).

```javascript
const obj = {
    name: "MyObject",
    showName: function() {
        setTimeout(() => {
            console.log(this.name); // "MyObject" (lexical this)
        }, 1000);
    }
};
```

## 2. Template Literals

Sử dụng backticks (`` ` ``) để nhúng biến vào chuỗi dễ dàng.

```javascript
const name = "Tài";
const age = 21;

// Cũ
console.log("Tôi là " + name + ", " + age + " tuổi");

// Mới
console.log(`Tôi là ${name}, ${age} tuổi`);

// Multi-line strings
const html = `
    <div>
        <h1>${name}</h1>
        <p>Age: ${age}</p>
    </div>
`;
```

## 3. Destructuring

Trích xuất dữ liệu từ mảng/object.

### Array Destructuring

```javascript
const colors = ['red', 'green', 'blue'];
const [first, second] = colors;
console.log(first); // "red"
```

### Object Destructuring

```javascript
const user = { name: 'Tài', age: 21, city: 'HCM' };
const { name, age } = user;
console.log(name); // "Tài"
```

## 4. Spread Operator (`...`)

Sao chép hoặc gộp mảng/object.

```javascript
// Copy array
const original = [1, 2, 3];
const copy = [...original];

// Merge arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2]; // [1, 2, 3, 4]

// Copy object
const obj1 = { x: 1, y: 2 };
const obj2 = { ...obj1, z: 3 }; // { x: 1, y: 2, z: 3 }
```

## 5. Default Parameters

```javascript
function greet(name = "Guest") {
    return `Hello, ${name}`;
}
greet(); // "Hello, Guest"
```

## Kết Luận

ES6+ đã làm JavaScript trở nên hiện đại và mạnh mẽ hơn rất nhiều. Những tính năng này không chỉ giúp code ngắn gọn mà còn dễ đọc và maintain hơn.
