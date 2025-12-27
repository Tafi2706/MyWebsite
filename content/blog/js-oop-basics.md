---
title: "JS Essentials 2: Hướng Đối Tượng (OOP)"
date: 2024-04-01
draft: false
excerpt: "Chuyển từ lập trình thủ tục sang hướng đối tượng. Tìm hiểu về Object, Class, Constructor và từ khóa 'this' trong JavaScript."
---

# Object-Oriented JavaScript

Khóa học **JavaScript Essentials 2** đi sâu vào các khái niệm nâng cao, mở đầu là OOP.

## 1. Object Literal

Cách đơn giản nhất để tạo đối tượng:

```javascript
const sinhVien = {
    ten: "Tài",
    tuoi: 21,
    nganh: "Công nghệ phần mềm",
    chao() { 
        console.log("Xin chào, tôi là " + this.ten); 
    }
};

sinhVien.chao(); // "Xin chào, tôi là Tài"
```

## 2. Classes (ES6)

JS ngày nay hỗ trợ cú pháp `class` quen thuộc như Java/C#.

### Constructor
Hàm khởi tạo được gọi khi tạo object mới.

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Hello, I'm ${this.name}`;
    }
}

const person1 = new Person("Tài", 21);
```

### Kế thừa (Inheritance)

* **Extends:** Kế thừa từ lớp cha
* **Super:** Gọi constructor/phương thức của lớp cha

```javascript
class Student extends Person {
    constructor(name, age, major) {
        super(name, age); // Gọi constructor lớp cha
        this.major = major;
    }
    
    study() {
        return `${this.name} is studying ${this.major}`;
    }
}
```

## 3. Từ Khóa 'this'

`this` tham chiếu đến đối tượng hiện tại (context). Giá trị của `this` phụ thuộc vào cách hàm được gọi:

```javascript
const obj = {
    name: "MyObj",
    showThis() {
        console.log(this.name); // "MyObj"
    }
};
```

## 4. Encapsulation (Đóng Gói)

Sử dụng # để tạo private fields (ES2022+):

```javascript
class BankAccount {
    #balance = 0; // Private field
    
    deposit(amount) {
        this.#balance += amount;
    }
    
    getBalance() {
        return this.#balance;
    }
}
```

## Kết Luận

OOP giúp tổ chức code theo mô hình thực tế, dễ bảo trì và mở rộng. JavaScript hỗ trợ OOP mạnh mẽ với cú pháp hiện đại của ES6+.
