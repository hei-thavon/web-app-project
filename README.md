# React Portfolio - Cross-Platform

A modern, responsive React portfolio application built with cross-platform compatibility in mind.

## 🌍 Cross-Platform Features

- **Web**: Responsive design for all modern browsers
- **Mobile**: Mobile-first approach with touch-friendly interactions
- **PWA**: Progressive Web App support for app-like experience
- **Desktop**: Optimized for desktop and tablet devices
- **Accessibility**: WCAG compliant with keyboard navigation support

## 🚀 Quick Start

### Prerequisites

- **Node.js**: Version 18.19.0 or higher
- **npm**: Version 8.0.0 or higher
- **Git**: For version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd react-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📱 Cross-Platform Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:prod` - Build with production optimizations
- `npm run build:dev` - Build with development settings
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage
- `npm run clean` - Clean build directory

### Browser Support

- **Chrome**: 58+
- **Firefox**: 57+
- **Safari**: 11+
- **Edge**: 16+
- **iOS Safari**: 12+
- **Android Chrome**: 8+

### Responsive Breakpoints

- **Extra Small**: 0px - 575px
- **Small**: 576px - 767px
- **Medium**: 768px - 991px
- **Large**: 992px - 1199px
- **Extra Large**: 1200px+

## 🛠️ Technology Stack

- **Frontend**: React 19, React Router DOM
- **Build Tool**: Vite 7
- **Styling**: CSS with CSS Variables
- **Linting**: ESLint 9
- **Testing**: Vitest
- **PWA**: Service Worker support

## 📁 Project Structure

```
react-portfolio/
├── public/                 # Static assets
│   ├── manifest.json      # PWA manifest
│   └── vite.svg          # App icon
├── src/                   # Source code
│   ├── assets/           # Images and icons
│   ├── components/       # React components
│   ├── App.jsx          # Main app component
│   ├── index.css        # Global styles
│   └── main.jsx         # App entry point
├── .editorconfig         # Editor configuration
├── .eslintrc.json       # ESLint configuration
├── .gitignore           # Git ignore rules
├── .nvmrc               # Node version
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.js       # Vite configuration
└── README.md            # This file
```

## 🌐 Cross-Platform Considerations

### CSS Variables
The project uses CSS custom properties for consistent theming across platforms:

```css
:root {
  --primary-color: #007bff;
  --font-family-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', ...;
  --spacing-md: 1rem;
}
```

### Responsive Design
Mobile-first approach with utility classes:

```css
.d-xs-none { display: none !important; }
.d-md-block { display: block !important; }
```

### Touch-Friendly
All interactive elements are optimized for touch devices with appropriate sizing and spacing.

### Accessibility
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- High contrast focus indicators

## 🔧 Configuration Files

### Vite Configuration
- Cross-platform build targets
- Path aliases for better imports
- Optimized chunk splitting
- Source maps for debugging

### TypeScript Configuration
- Modern ES2020 target
- Strict type checking
- Path mapping for clean imports
- JSX support for React

### ESLint Configuration
- React-specific rules
- Cross-platform compatibility
- Modern JavaScript support

## 📱 PWA Features

- **Manifest**: App-like installation
- **Service Worker**: Offline support (ready for implementation)
- **Responsive Icons**: Multiple sizes for different devices
- **Theme Colors**: Consistent branding

## 🚀 Deployment

### Build for Production
```bash
npm run build:prod
```

### Deploy to Various Platforms
- **Netlify**: Drag and drop `dist/` folder
- **Vercel**: Connect GitHub repository
- **GitHub Pages**: Use GitHub Actions
- **Firebase**: Use Firebase CLI

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different platforms
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the code examples

---

**Built with ❤️ for cross-platform compatibility**
