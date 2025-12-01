# Complete Installation & Setup Guide

Step-by-step guide to get your portfolio running.

---

## 📋 Prerequisites

Before starting, make sure you have:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (optional, for version control) - [Download](https://git-scm.com/)
- **Code Editor** (VS Code recommended) - [Download](https://code.visualstudio.com/)

### Verify Installation
```bash
node --version    # Should show v14 or higher
npm --version     # Should show 6 or higher
git --version     # Optional
```

---

## 🚀 Installation Steps

### Step 1: Navigate to Project Directory
```bash
cd portfolio
```

### Step 2: Install Dependencies
```bash
npm install
```

This will:
- Download all required packages
- Create `node_modules/` folder
- Create `package-lock.json` file
- Takes 2-5 minutes depending on internet speed

**Expected Output:**
```
added XXX packages in Xs
```

### Step 3: Start Development Server
```bash
npm run dev
```

**Expected Output:**
```
  VITE v5.0.0  ready in XXX ms

  ➜  Local:   http://localhost:3000/
  ➜  press h to show help
```

### Step 4: Open in Browser
- Automatically opens at `http://localhost:3000`
- Or manually visit the URL
- You should see your portfolio homepage!

---

## ✅ Verify Installation

Check that all pages work:
- [ ] Home page loads
- [ ] Navigation links work
- [ ] Dark mode toggle works
- [ ] Mobile menu works (resize browser)
- [ ] All pages accessible
- [ ] No console errors (F12 → Console)

---

## 🎨 Customize Your Data

### Edit Personal Information
1. Open `src/data/personalData.js`
2. Update `personalInfo` object:
   ```js
   export const personalInfo = {
     name: 'Your Name',
     email: 'your@email.com',
     phone: 'Your Phone',
     location: 'Your City',
     // ... update all fields
   }
   ```
3. Save the file
4. Browser auto-refreshes with changes

### Add Your Projects
1. In `src/data/personalData.js`
2. Update `projects` array:
   ```js
   export const projects = [
     // ... existing projects
     {
       id: 7,
       title: 'Your Project',
       description: 'Description',
       image: 'https://image-url.jpg',
       technologies: ['React', 'Tailwind'],
       link: 'https://project-link.com',
       github: 'https://github.com/project',
       featured: true
     }
   ]
   ```
3. Save and see changes live

### Update Experience
1. In `src/data/personalData.js`
2. Update `experience` array with your jobs
3. Save and refresh

### Add Skills
1. In `src/data/personalData.js`
2. Update `skills` array by category
3. Save and refresh

### Update Education
1. In `src/data/personalData.js`
2. Update `education` array
3. Save and refresh

---

## 🔧 Common Customizations

### Change Colors
1. Open `tailwind.config.js`
2. Update colors:
   ```js
   colors: {
     primary: '#YOUR_COLOR',
     secondary: '#YOUR_COLOR',
     accent: '#YOUR_COLOR',
   }
   ```
3. Save and refresh

### Update Favicon
1. Replace `public/favicon.svg` with your logo
2. Refresh browser (Ctrl+Shift+R for hard refresh)

### Change Fonts
1. Open `src/index.css`
2. Update font-family in body styles
3. Save and refresh

### Add Social Links
1. Open `src/data/personalData.js`
2. Update social links:
   ```js
   export const personalInfo = {
     linkedin: 'https://linkedin.com/in/your-profile',
     github: 'https://github.com/your-username',
   }
   ```
3. Save and refresh

---

## 🧪 Testing

### Test Locally
```bash
npm run dev
```
- Visit `http://localhost:3000`
- Test all pages
- Test dark mode
- Test mobile view (F12 → Toggle device toolbar)

### Build for Production
```bash
npm run build
```
- Creates optimized `dist/` folder
- Check for build errors
- Should complete successfully

### Preview Production Build
```bash
npm run preview
```
- Preview the production build locally
- Verify everything works

---

## 📦 Project Structure After Installation

```
portfolio/
├── node_modules/           ← Created by npm install
├── dist/                   ← Created by npm run build
├── src/
│   ├── components/
│   ├── pages/
│   ├── data/
│   │   └── personalData.js ← EDIT THIS
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── favicon.svg
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## 🚀 Deploy Your Portfolio

### Option 1: Vercel (Recommended)

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Select your portfolio repository
   - Click "Deploy"
   - Done! Your site is live

### Option 2: Netlify

1. **Build Project**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Drag `dist/` folder to deploy
   - Done! Your site is live

### Option 3: GitHub Pages

1. **Update vite.config.js**
   ```js
   export default {
     base: '/portfolio/',  // Replace with your repo name
     // ... rest of config
   }
   ```

2. **Build and Deploy**
   ```bash
   npm run build
   git add dist/
   git commit -m "Deploy"
   git push origin main
   ```

3. **Enable GitHub Pages**
   - Go to repo Settings → Pages
   - Select `main` branch
   - Click Save

---

## 🐛 Troubleshooting

### npm install fails
```bash
# Clear npm cache
npm cache clean --force

# Try installing again
npm install
```

### Port 3000 already in use
```bash
# Use different port
npm run dev -- --port 3001
```

### Changes not showing
```bash
# Hard refresh browser
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)
```

### Dark mode not working
```bash
# Clear browser storage
# F12 → Application → Local Storage → Clear All
# Refresh page
```

### Build fails
```bash
# Check error message
npm run build

# If still fails, try:
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Styles not applying
```bash
# Restart dev server
# Stop: Ctrl + C
# Start: npm run dev
```

---

## 📊 Performance Tips

1. **Optimize Images**
   - Use compressed images
   - Use appropriate sizes
   - Use modern formats (WebP)

2. **Lazy Load**
   - Images load on scroll
   - Already implemented

3. **Minimize Dependencies**
   - Only install what you need
   - Check `package.json` before adding

4. **Test Performance**
   - Run Lighthouse audit (F12 → Lighthouse)
   - Aim for 90+ score

---

## 🔐 Security Checklist

- [ ] No API keys in code
- [ ] Use environment variables for secrets
- [ ] Keep dependencies updated: `npm update`
- [ ] Check for vulnerabilities: `npm audit`
- [ ] Use HTTPS for deployment
- [ ] Don't commit `node_modules/`

---

## 📝 Environment Variables (Optional)

1. **Create `.env` file**
   ```
   VITE_APP_NAME=My Portfolio
   VITE_API_URL=https://api.example.com
   ```

2. **Access in code**
   ```js
   const appName = import.meta.env.VITE_APP_NAME
   ```

3. **Never commit `.env`**
   - Already in `.gitignore`

---

## 🎯 Deployment Checklist

Before deploying:

- [ ] All personal info updated
- [ ] Projects added with real images
- [ ] Experience updated
- [ ] Skills added
- [ ] Education updated
- [ ] Social links configured
- [ ] Local testing complete
- [ ] Build succeeds: `npm run build`
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Dark mode works
- [ ] All links working

---

## 📞 Getting Help

### Common Issues
1. Check browser console (F12)
2. Check terminal output
3. Review error messages
4. Check documentation files

### Resources
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Docs](https://vitejs.dev)
- [Framer Motion](https://www.framer.com/motion)

---

## 🎉 You're All Set!

Your portfolio is installed and ready to customize. Follow the steps above and you'll have your portfolio live in minutes!

### Quick Commands Reference
```bash
npm install              # Install dependencies
npm run dev             # Start dev server
npm run build           # Build for production
npm run preview         # Preview production build
npm run lint            # Check code quality
```

### Next Steps
1. Customize `src/data/personalData.js`
2. Test with `npm run dev`
3. Build with `npm run build`
4. Deploy to your platform
5. Share your portfolio!

---

**Happy coding! 🚀**
