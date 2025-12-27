# Blog Lập Trình Mạng - Taf1 IT BLOG

Website blog cá nhân về lập trình mạng, backend development và bảo mật, được xây dựng bằng Hugo Static Site Generator.

## ✨ Tính Năng

- 🎨 **Giao Diện Monochrome** - Thiết kế tối giản với tông màu trắng, xám và đen
- 📱 **Responsive Hoàn Toàn** - Tối ưu cho mọi thiết bị
- ⚡ **Tốc Độ Cao** - Static site generation với Hugo
- 🔍 **Tìm Kiếm Nội Dung** - Thanh tìm kiếm bài viết thông minh
- 📝 **10 Bài Blog** - Nội dung chất lượng về Java, JavaScript, Docker, Database, API, v.v.

## 🛠️ Công Nghệ

- **Framework**: Hugo Static Site Generator
- **Styling**: Vanilla CSS với CSS Variables
- **Language**: Vietnamese
- **Font**: Inter (Google Fonts)

## 📄 Các Trang

### 🏠 Trang Chủ (Home)
- Layout 1 cột đơn giản
- Thanh tìm kiếm nổi bật ở đầu trang
- Grid hiển thị 10+ bài blog
- Blog posts về:
  - Lập trình mạng (TCP/IP, TLS/SSL, DDoS, Socket Security)
  - Backend (Java Memory, Docker, Database Indexing, JWT Auth, Redis)
  - Frontend (JavaScript Event Loop)
  - API Design (REST vs GraphQL)

### 👤 Giới Thiệu (About)
- Thông tin cá nhân
- Avatar và giới thiệu ngắn
- Nội dung về lý lịch và mục tiêu

### 💼 Dự Án (Portfolio)
- Showcase 2 dự án chính:
  - **MusicResu** - Website nghe nhạc với AI recommendation (React + ASP.NET Core + MongoDB)
  - **Relo Social Network** - Mạng xã hội real-time (Flutter + Python FastAPI + Firebase)
- Link GitHub repositories
- Tech stack badges
- Mô tả tính năng chi tiết

### 📧 Liên Hệ (Contact)
- Thông tin liên hệ (Email, Số điện thoại)
- Form gửi tin nhắn
- Icon rõ ràng, dễ nhìn

## 🚀 Hướng Dẫn Chạy

### Yêu Cầu

- Hugo Extended version 0.100+
- Git

### Cài Đặt

1. **Clone repository**:
   ```bash
   git clone https://github.com/yourusername/MyWebsite.git
   cd MyWebsite
   ```

2. **Chạy server development**:
   ```bash
   hugo server
   ```

3. **Mở trình duyệt**:
   Truy cập [http://localhost:1313](http://localhost:1313)

### Build Production

```bash
hugo
```

Output sẽ nằm trong folder `public/`

## 📁 Cấu Trúc Thư Mục

```
MyWebsite/
├── content/
│   ├── blog/              # Các bài blog (markdown files)
│   │   ├── ddos-mitigation.md
│   │   ├── tcp-ip-handshake.md
│   │   ├── tls-ssl-deep-dive.md
│   │   ├── socket-security-practices.md
│   │   ├── java-memory-garbage-collection.md
│   │   ├── javascript-event-loop.md
│   │   ├── rest-vs-graphql.md
│   │   ├── docker-containers.md
│   │   ├── database-indexing.md
│   │   ├── jwt-authentication.md
│   │   └── redis-caching.md
│   ├── about.html         # Trang giới thiệu
│   ├── portfolio.html     # Trang dự án
│   └── contact.html       # Trang liên hệ
├── layouts/
│   ├── index.html         # Template trang chủ
│   ├── _default/
│   │   ├── baseof.html    # Base template
│   │   ├── single.html    # Template bài viết đơn
│   │   └── page.html
│   └── partials/
│       ├── navbar.html
│       └── footer.html
├── static/
│   ├── css/
│   │   └── style.css      # CSS chính (3300+ dòng)
│   ├── img/
│   │   └── avatar.jpg
│   └── js/
│       └── search.js      # JavaScript cho search
├── config.toml            # Cấu hình Hugo
└── README.md
```

## 🎨 Tùy Chỉnh

### Cập Nhật Nội Dung

1. **Thêm bài blog mới**: Tạo file `.md` trong `content/blog/`
   ```markdown
   ---
   title: "Tiêu đề bài viết"
   date: 2025-12-27
   draft: false
   excerpt: "Mô tả ngắn gọn"
   ---
   
   Nội dung bài viết...
   ```

2. **Sửa thông tin cá nhân**: Edit `config.toml`
3. **Cập nhật Portfolio**: Edit `content/portfolio.html`
4. **Thay đổi About**: Edit `content/about.html`

### Theme Colors

Website sử dụng theme monochrome với CSS variables trong `static/css/style.css`:

```css
:root {
    --color-bg-primary: #0f0f0f;      /* Nền đen chính */
    --color-text-primary: #ffffff;     /* Text trắng */
    --color-accent-primary: #ffffff;   /* Accent trắng */
    --color-border: #404040;           /* Border xám */
}
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 👨‍💻 Tác Giả

**Nguyễn Thành Tài**
- Sinh viên năm cuối Công nghệ Phần mềm - HUTECH
- Đam mê Backend Development và Network Security
- Email: nguyenthanhtai270604@gmail.com
- GitHub: [Tafi2706](https://github.com/Tafi2706)

## 📝 License

Project này là mã nguồn mở và có thể sử dụng cho mục đích cá nhân.

---

Được xây dựng với ❤️ bằng Hugo Static Site Generator
