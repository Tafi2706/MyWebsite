# Personal IT Blog & Portfolio

A professional, minimalist personal blog and portfolio website for a Network Security Engineer, built with Next.js 14+ and vanilla CSS.

## Features

- ✨ **Modern Dark Mode Theme** - Cyber security-inspired color scheme with teal/blue accents
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🎨 **Clean Design** - Minimalist, professional aesthetic
- ⚡ **Fast Performance** - Built with Next.js 14+ App Router
- 🔒 **Security Focus** - Blog content focused on network programming and security

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS with CSS Variables
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter)

## Pages

### 🏠 Home
- 2-column responsive layout
- Blog post feed with network security topics
- Search bar for content discovery
- "About Me" widget sidebar

### 👤 About
- Professional bio sections
- Skills showcase
- Journey timeline

### 💼 Portfolio
- Project showcase with cards
- GitHub repository links
- Technology badges
- Featured projects:
  - Relo Social Network
  - MusicResu

### 📧 Contact
- Minimalist Wix-inspired design
- Contact information display
- Functional contact form
- Email and location details

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

Due to PowerShell execution policy restrictions, you'll need to install dependencies manually:

1. **Install dependencies**:
   ```bash
   # You may need to adjust your PowerShell execution policy first
   # Run PowerShell as Administrator and execute:
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

   # Then install dependencies:
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
MyWebsite/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with Navbar & Footer
│   │   ├── page.tsx            # Home page
│   │   ├── page.css
│   │   ├── globals.css         # Global styles & CSS variables
│   │   ├── about/
│   │   │   ├── page.tsx
│   │   │   └── about.css
│   │   ├── portfolio/
│   │   │   ├── page.tsx
│   │   │   └── portfolio.css
│   │   └── contact/
│   │       ├── page.tsx
│   │       └── contact.css
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Navbar.css
│   │   ├── Footer.tsx
│   │   ├── Footer.css
│   │   ├── BlogCard.tsx
│   │   ├── BlogCard.css
│   │   ├── SearchBar.tsx
│   │   ├── SearchBar.css
│   │   ├── AboutWidget.tsx
│   │   ├── AboutWidget.css
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectCard.css
│   │   ├── ContactForm.tsx
│   │   └── ContactForm.css
│   └── data/
│       ├── blogData.ts         # Blog post dummy data
│       └── projectsData.ts     # Portfolio projects data
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## Customization

### Update Content

1. **Blog Posts**: Edit `src/data/blogData.ts`
2. **Projects**: Edit `src/data/projectsData.ts`
3. **Contact Info**: Edit `src/app/contact/page.tsx`
4. **About Content**: Edit `src/app/about/page.tsx`

### Styling

All styles use CSS variables defined in `src/app/globals.css`. Customize the theme by modifying:

- Color palette
- Typography (fonts, sizes)
- Spacing
- Border radius
- Shadows
- Transitions

### Color Scheme

The current dark mode theme uses:
- Primary Background: `#0a0e27`
- Accent Primary: `#14b8a6` (Teal)
- Accent Secondary: `#06b6d4` (Cyan)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

## Author

Network Security Engineer & Developer

---

Made with ❤️ using Next.js 14+
