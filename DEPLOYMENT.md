# Cross-Platform Deployment Guide

This guide covers deploying your React portfolio application to various platforms and hosting services.

## 🚀 Quick Deploy

### 1. Build for Production
```bash
npm run build:prod
```

This creates a `dist/` folder with optimized production files.

### 2. Test Production Build Locally
```bash
npm run preview
```

Visit `http://localhost:4173` to preview your production build.

## 🌐 Platform-Specific Deployment

### Netlify (Recommended for Beginners)

1. **Drag & Drop Method**
   - Go to [netlify.com](https://netlify.com)
   - Drag your `dist/` folder to the deploy area
   - Your site is live instantly!

2. **Git Integration (Recommended)**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Deploy automatically on every push

3. **Netlify Configuration**
   Create `netlify.toml` in your project root:
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"
   
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

### Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Vercel Configuration**
   Create `vercel.json`:
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "dist",
     "framework": "vite",
     "rewrites": [
       { "source": "/(.*)", "destination": "/index.html" }
     ]
   }
   ```

### GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add Scripts to package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **GitHub Actions (Optional)**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

### Firebase Hosting

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login and Initialize**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Configure firebase.json**
   ```json
   {
     "hosting": {
       "public": "dist",
       "ignore": [
         "firebase.json",
         "**/.*",
         "**/node_modules/**"
       ],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```

4. **Deploy**
   ```bash
   firebase deploy
   ```

### AWS S3 + CloudFront

1. **Install AWS CLI**
   ```bash
   # Follow AWS CLI installation guide
   ```

2. **Create S3 Bucket**
   ```bash
   aws s3 mb s3://your-bucket-name
   ```

3. **Upload Files**
   ```bash
   aws s3 sync dist/ s3://your-bucket-name --delete
   ```

4. **Configure for Static Website**
   ```bash
   aws s3 website s3://your-bucket-name --index-document index.html --error-document index.html
   ```

5. **Set Bucket Policy**
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::your-bucket-name/*"
       }
     ]
   }
   ```

## 📱 PWA Deployment Considerations

### Service Worker
- Ensure your service worker is properly registered
- Test offline functionality
- Verify cache strategies

### Manifest
- Check all icon sizes are available
- Verify theme colors and display settings
- Test "Add to Home Screen" functionality

### HTTPS
- All PWA features require HTTPS
- Most hosting platforms provide this automatically
- For custom domains, ensure SSL certificates are valid

## 🔧 Environment Configuration

### Environment Variables
Create `.env.production`:
```env
VITE_APP_TITLE=My Portfolio
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=GA_TRACKING_ID
```

### Build Optimization
```bash
# Analyze bundle size
npm install --save-dev vite-bundle-analyzer

# Add to vite.config.js
import { visualizer } from 'vite-bundle-analyzer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
});
```

## 🧪 Pre-Deployment Checklist

- [ ] Production build completes successfully
- [ ] All images and assets load correctly
- [ ] Responsive design works on all breakpoints
- [ ] PWA features function properly
- [ ] Service worker caches essential resources
- [ ] Performance metrics meet targets
- [ ] Accessibility features work correctly
- [ ] Cross-browser compatibility verified
- [ ] SEO meta tags are properly set
- [ ] Analytics tracking is configured

## 📊 Performance Monitoring

### Core Web Vitals
- Largest Contentful Paint (LCP) < 2.5s
- First Input Delay (FID) < 100ms
- Cumulative Layout Shift (CLS) < 0.1

### Tools
- Google PageSpeed Insights
- Lighthouse
- WebPageTest
- GTmetrix

## 🚨 Troubleshooting

### Common Issues

1. **404 on Refresh (SPA Routing)**
   - Ensure proper redirects are configured
   - Check hosting platform supports SPA routing

2. **Assets Not Loading**
   - Verify base path in Vite config
   - Check file paths in production build

3. **PWA Not Working**
   - Ensure HTTPS is enabled
   - Check service worker registration
   - Verify manifest file is accessible

4. **Performance Issues**
   - Optimize image sizes
   - Enable gzip compression
   - Implement lazy loading
   - Use CDN for static assets

### Debug Commands
```bash
# Check bundle size
npm run build && ls -la dist/assets/

# Analyze dependencies
npm ls --depth=0

# Check for vulnerabilities
npm audit

# Test production build locally
npm run preview
```

## 📚 Additional Resources

- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Deployment](https://create-react-app.dev/docs/deployment/)
- [PWA Deployment Best Practices](https://web.dev/pwa-checklist/)
- [Performance Optimization](https://web.dev/fast/)

---

**Happy Deploying! 🎉**





