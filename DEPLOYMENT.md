# Deployment Guide - Elegant Sarees E-commerce

## 🚀 Quick Deployment Options

### 1. Vercel (Recommended - Easiest)

**Step 1: Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit - Elegant Sarees E-commerce"
git branch -M main
git remote add origin https://github.com/yourusername/saree-store.git
git push -u origin main
```

**Step 2: Deploy to Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your repository
5. Configure:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Click "Deploy"

**Your site will be live at:** `https://your-project-name.vercel.app`

### 2. Netlify

**Step 1: Build Settings**
```bash
# Build command
npm run build

# Publish directory
out
```

**Step 2: Deploy**
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder OR connect GitHub
3. Set build settings:
   - Build command: `npm run build && npm run export`
   - Publish directory: `out`

### 3. AWS Amplify

**Step 1: Install Amplify CLI**
```bash
npm install -g @aws-amplify/cli
amplify configure
```

**Step 2: Initialize and Deploy**
```bash
amplify init
amplify add hosting
amplify publish
```

### 4. Docker Deployment

**Create Dockerfile:**
```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

**Build and Run:**
```bash
docker build -t saree-store .
docker run -p 3000:3000 saree-store
```

## 🔧 Environment Configuration

### Production Environment Variables
Create `.env.production`:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
```

### Development Environment Variables
Create `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

## 📊 Performance Optimization

### 1. Image Optimization
```bash
# Install sharp for better image optimization
npm install sharp
```

### 2. Bundle Analysis
```bash
# Analyze bundle size
npm install --save-dev @next/bundle-analyzer
```

Add to `next.config.mjs`:
```javascript
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer({
  // your config
});
```

### 3. Caching Strategy
```javascript
// next.config.mjs
export default {
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
```

## 🔒 Security Checklist

### 1. Content Security Policy
Add to `next.config.mjs`:
```javascript
export default {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};
```

### 2. Environment Variables Security
- Never commit `.env` files
- Use different keys for development/production
- Rotate API keys regularly

## 📈 Monitoring & Analytics

### 1. Google Analytics
Add to `app/layout.js`:
```javascript
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### 2. Error Monitoring
```bash
npm install @sentry/nextjs
```

## 🛠 Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as shown

### Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS records

## 📱 PWA Configuration (Optional)

Install PWA plugin:
```bash
npm install next-pwa
```

Update `next.config.mjs`:
```javascript
import withPWA from 'next-pwa';

export default withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
});
```

## 🔄 CI/CD Pipeline

### GitHub Actions
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run test
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📋 Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] Images optimized and compressed
- [ ] SEO metadata added to all pages
- [ ] Error boundaries implemented
- [ ] Loading states added
- [ ] Mobile responsiveness tested
- [ ] Cross-browser compatibility checked
- [ ] Performance audit completed (Lighthouse)
- [ ] Security headers configured
- [ ] Analytics tracking implemented
- [ ] Backup strategy in place

## 🚨 Troubleshooting

### Common Issues

**Build Errors:**
```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

**Image Loading Issues:**
- Check image paths are correct
- Ensure images are in `public/` directory
- Verify image formats are supported

**Styling Issues:**
- Check Tailwind CSS is properly configured
- Verify custom CSS doesn't conflict
- Test in different browsers

## 📞 Support

For deployment issues:
1. Check the deployment logs
2. Verify environment variables
3. Test locally first
4. Check platform-specific documentation

---

**🎉 Your Elegant Sarees E-commerce site is ready for the world!**