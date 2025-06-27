# Kartik Vinayak's Portfolio

A modern, mobile-first portfolio website showcasing motion graphics and game development work, built with **Lit** web components.

## ✨ Features

- **Modern Design**: Clean, contemporary UI with mobile-first responsive design
- **Web Components**: Built with Lit for maintainable, reusable components
- **Performance**: Optimized loading with lazy loading and modern CSS
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation
- **Dark Mode**: Automatic dark mode support based on system preferences
- **SEO Optimized**: Meta tags, structured data, and social media cards

## 🚀 Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/Kartik2D/Kartik2D.github.io.git
   cd Kartik2D.github.io
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:8000
   ```

## 🏗️ Architecture

### Component Structure

```
src/
├── components/
│   ├── base-component.js      # Base class for all components
│   ├── portfolio-card.js      # Card component for projects
│   ├── media-player.js        # Video/image player component
│   ├── tech-tag.js           # Technology tags
│   ├── action-button.js      # Interactive buttons
│   └── navigation.js         # Navigation component
└── portfolio-app.js          # Main application component
```

### Design System

- **CSS Variables**: Centralized design tokens in `index.css`
- **Mobile-First**: Responsive breakpoints starting from mobile
- **Fluid Typography**: Clamp-based scaling for optimal readability
- **Modern Shadows**: Layered shadows for depth and hierarchy

## 🎨 Design Tokens

The design system uses CSS custom properties for consistency:

```css
:root {
  /* Colors */
  --primary-color: #6366f1;
  --text-color: #1e293b;
  --card-background: #ffffff;

  /* Typography */
  --font-primary: "Inter", sans-serif;
  --text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);

  /* Spacing */
  --space-4: clamp(1rem, 0.8rem + 1vw, 1.5rem);

  /* Shadows */
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}
```

## 📱 Browser Support

- Chrome/Edge 88+
- Firefox 84+
- Safari 14+
- Mobile browsers with ES modules support

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start Vite development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run serve    # Serve production build on port 8000
```

### Adding New Projects

Edit the `portfolioData` array in `src/portfolio-app.js`:

```javascript
{
  id: 'project-id',
  title: 'Project Title',
  description: 'Project description...',
  media: [{ src: 'path/to/media.mp4', type: 'video' }],
  tools: ['Tool1', 'Tool2'],
  links: [{ href: 'https://example.com', label: 'View Project' }]
}
```

## 🚀 Deployment

The site is automatically deployed to GitHub Pages. For manual deployment:

1. Ensure all assets are in the correct paths
2. Push to the `master` branch
3. GitHub Pages will serve the site automatically

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!

## 🤝 Contact

- **Email**: kartikvinayak3@gmail.com
- **Portfolio**: [kartik2d.github.io](https://kartik2d.github.io)
- **CanvasCode**: [Vector graphics editor](https://kartik2d.github.io/CanvasCode)

---

Built with ❤️ using [Lit](https://lit.dev) web components

## 🚀 GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment

1. Push your changes to the `master` branch
2. GitHub Actions will automatically build and deploy your site
3. Your site will be available at `https://kartik2d.github.io`

### Manual Deployment

If you prefer to deploy manually:

```bash
# Install dependencies
npm install

# Build and deploy
npm run deploy
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Project Structure

```
src/
├── components/          # Lit web components
├── portfolio-app.ts    # Main application component
└── types.ts           # TypeScript type definitions

public/                # Static assets
├── .nojekyll         # Prevents Jekyll processing
└── favicon.ico       # Site favicon

dist/                 # Build output (generated)
```

## 🔧 Configuration

- **Vite**: Modern build tool with TypeScript support
- **Lit**: Lightweight web components library
- **GitHub Pages**: Automatic deployment via GitHub Actions
- **TypeScript**: Type-safe development

## 📱 Features

- Responsive design
- Modern web components architecture
- Optimized build with code splitting
- Automatic deployment to GitHub Pages
- Progressive Web App ready

## 🌐 Live Site

Visit the live portfolio at: [https://kartik2d.github.io](https://kartik2d.github.io)
