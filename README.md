# TCHER Portfolio

A modern, responsive portfolio website built with Next.js and Once UI System, showcasing the work of Teach Akarachat - Product Engineer specializing in UX/UI design and development.

![TCHER Portfolio](public/images/og/home.avif)

## ✨ Features

### 🎨 **Design & UX**
- Modern, responsive design optimized for all screen sizes
- Dark/light theme switching with system preference detection
- Smooth animations and micro-interactions
- Thai language support with proper typography

### 🚀 **Technical Features**
- Built with **Next.js 15** and **React 19**
- **Once UI System** for consistent design tokens and components
- **TypeScript** for type safety
- **MDX** support for rich content creation
- **Static Site Generation** for optimal performance
- **Image optimization** with Next.js Image component

### 📱 **Content Management**
- Easy project showcase with MDX files
- About page with work experience and skills
- Newsletter subscription integration
- Social media links
- SEO optimized with meta tags and Open Graph

### 🔒 **Security**
- Password protection for sensitive routes
- Secure cookie handling
- Environment variable management

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.1
- **UI System**: Once UI System
- **Language**: TypeScript
- **Styling**: SCSS + CSS Modules
- **Content**: MDX
- **Fonts**: Kanit (Thai support), Geist Mono
- **Linting**: Biome + ESLint
- **Deployment**: Vercel ready

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/tcher-portfolio.git
cd tcher-portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values

# Run development server
npm run dev
```

### Environment Variables

Create `.env.local` file:

```bash
PAGE_ACCESS_PASSWORD=your_secure_password_here
NODE_ENV=development
```

## 📁 Project Structure

```
src/
├── app/                   # Next.js App Router
│   ├── about/             # About page
│   ├── work/              # Work/projects pages
│   ├── api/               # API routes
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
├── resources/             # Configuration & content
│   ├── content.tsx        # Main content data
│   └── once-ui.config.ts  # UI system config
├── types/                 # TypeScript type definitions
└── utils/                 # Utility functions
```

## ⚙️ Configuration

### Content Configuration
Edit `src/resources/content.tsx` to update:
- Personal information
- Work experience
- Skills and education
- Social media links

### UI Configuration
Edit `src/resources/once-ui.config.ts` to customize:
- Color schemes
- Typography
- Layout effects
- Base URL and SEO settings

### Adding New Projects
1. Create new `.mdx` file in `src/app/work/projects/`
2. Add metadata (title, description, images, etc.)
3. Projects automatically appear on work page

## 🎯 Customization

### Colors & Themes
The portfolio uses Once UI System with customizable:
- Brand colors (cyan, blue, indigo, etc.)
- Neutral colors (gray, sand, slate)
- Accent colors
- Surface styles (translucent, filled)

### Typography
- **Heading**: Kanit (Thai + Latin support)
- **Body**: Kanit (Thai + Latin support)  
- **Code**: Geist Mono

### Layout Effects
- Background gradients
- Animated dots
- Grid patterns
- Interactive masks

## 📱 Responsive Design

- **Mobile First** approach
- Optimized for all screen sizes
- Touch-friendly interactions
- Performance optimized images

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Deploy to Vercel
npm run build
vercel --prod
```

### Other Platforms
```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run biome-write  # Format code with Biome
```

### Code Quality
- **Biome**: Code formatting and linting
- **ESLint**: Next.js recommended rules
- **TypeScript**: Strict type checking
- **Pre-commit hooks**: Automatic formatting

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized
- **Bundle Size**: Optimized with Next.js
- **Image Optimization**: Automatic WebP conversion

## 🌐 SEO Features

- **Meta Tags**: Automatic generation
- **Open Graph**: Social media sharing
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine optimization
- **Structured Data**: Schema.org markup

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the CC BY-NC 4.0 License.

## 👨‍💻 Author

**Teach Akarachat** - Product Engineer
- Email: teach.akarachat@gmail.com
- GitHub: [@Tcher911](https://github.com/Tcher911)
- TikTok: [@tcher.co](https://www.tiktok.com/@tcher.co)

## 🙏 Acknowledgments

- Built with [Once UI System](https://once-ui.com)
- Powered by [Next.js](https://nextjs.org)
- Design inspiration from modern portfolio trends

---

