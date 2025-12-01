# Deployment Guide

Complete guide to deploy your portfolio website to various platforms.

## 🚀 Quick Start

### Prerequisites
- Node.js installed
- Git installed (for GitHub deployment)
- Account on deployment platform

## 1️⃣ Vercel (Recommended - Easiest)

### Step 1: Prepare Your Code
```bash
cd portfolio
npm install
npm run build
```

### Step 2: Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 3: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select "Import Git Repository"
4. Paste your GitHub repo URL
5. Click "Import"
6. Vercel auto-detects Vite configuration
7. Click "Deploy"

### Step 4: Custom Domain (Optional)
1. Go to project settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS instructions

**Result**: Your site is live at `your-portfolio.vercel.app` or your custom domain!

---

## 2️⃣ Netlify

### Step 1: Build the Project
```bash
npm run build
```

### Step 2: Deploy via Drag & Drop
1. Go to [netlify.com](https://netlify.com)
2. Sign up/login
3. Drag the `dist/` folder to the drop zone
4. Done! Your site is live

### Step 3: Connect GitHub (Optional)
1. Click "Connect to Git"
2. Select GitHub
3. Choose your repository
4. Netlify auto-deploys on every push

### Step 4: Custom Domain
1. Go to "Domain settings"
2. Click "Add custom domain"
3. Follow instructions

---

## 3️⃣ GitHub Pages

### Step 1: Update Vite Config
Edit `vite.config.js`:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',  // Replace 'portfolio' with your repo name
  server: {
    port: 3000,
    open: true
  }
})
```

### Step 2: Build and Deploy
```bash
npm run build
git add dist/
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### Step 3: Enable GitHub Pages
1. Go to repository Settings
2. Scroll to "Pages"
3. Select "Deploy from a branch"
4. Choose `main` branch and `/root` folder
5. Click Save

**Result**: Your site is at `https://YOUR_USERNAME.github.io/portfolio/`

---

## 4️⃣ AWS Amplify

### Step 1: Push to GitHub
```bash
git push origin main
```

### Step 2: Connect to AWS Amplify
1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Click "New app" → "Host web app"
3. Select GitHub
4. Authorize and select your repository
5. Select branch (main)
6. Accept build settings (auto-detected)
7. Click "Save and deploy"

### Step 3: Monitor Deployment
- Amplify shows build logs in real-time
- Once complete, you get a live URL

---

## 5️⃣ Railway

### Step 1: Create Railway Account
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub

### Step 2: Deploy
1. Click "New Project"
2. Select "Deploy from GitHub repo"
3. Choose your portfolio repository
4. Railway auto-detects and deploys

### Step 3: Custom Domain
1. Go to project settings
2. Add custom domain
3. Update DNS records

---

## 6️⃣ Render

### Step 1: Create Account
1. Go to [render.com](https://render.com)
2. Sign up with GitHub

### Step 2: Deploy
1. Click "New +"
2. Select "Static Site"
3. Connect GitHub repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Click "Create Static Site"

---

## 🔧 Environment Variables (if needed)

Create `.env` file:
```
VITE_API_URL=https://api.example.com
VITE_APP_NAME=Niraj Portfolio
```

Access in code:
```js
const apiUrl = import.meta.env.VITE_API_URL
```

---

## 📊 Performance Optimization

### Before Deployment

1. **Optimize Images**
```bash
# Use tools like ImageOptim or TinyPNG
# Replace image URLs with optimized versions
```

2. **Check Bundle Size**
```bash
npm run build
# Check dist/ folder size
```

3. **Test Performance**
```bash
npm run preview
# Open in browser and test
```

### Lighthouse Audit
1. Build the project: `npm run build`
2. Preview: `npm run preview`
3. Open Chrome DevTools → Lighthouse
4. Run audit and fix issues

---

## 🔐 Security Checklist

- [ ] No API keys in code
- [ ] Use environment variables for secrets
- [ ] Enable HTTPS (all platforms do this)
- [ ] Update dependencies regularly
- [ ] Check for vulnerabilities: `npm audit`

---

## 📱 Post-Deployment

### Update Social Links
Edit `src/data/personalData.js`:
```js
export const personalInfo = {
  linkedin: 'https://linkedin.com/in/your-profile',
  github: 'https://github.com/your-username',
  // ...
}
```

### Add Google Analytics (Optional)
Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Add Favicon
Replace `public/favicon.svg` with your own favicon.

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 Errors on Refresh
- For GitHub Pages: Update `base` in `vite.config.js`
- For other platforms: Enable SPA routing in settings

### Slow Performance
1. Check bundle size: `npm run build`
2. Optimize images
3. Enable gzip compression (usually automatic)

### Domain Not Working
- Check DNS records
- Wait 24-48 hours for propagation
- Clear browser cache

---

## 📞 Support

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **GitHub Pages**: https://pages.github.com
- **Vite Docs**: https://vitejs.dev

---

## ✅ Deployment Checklist

- [ ] All personal info updated
- [ ] Project images added
- [ ] Social links configured
- [ ] Build succeeds locally
- [ ] No console errors
- [ ] Responsive on mobile
- [ ] Dark mode working
- [ ] All links working
- [ ] Performance optimized
- [ ] Deployed and live!

---

**Your portfolio is ready to go live! 🎉**
