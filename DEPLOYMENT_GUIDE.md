# 🚀 Deployment Guide - Push & Deploy Your Portfolio

Your portfolio is ready to deploy! Follow these steps to push your code to GitHub and deploy it live.

---

## 📋 Prerequisites

Before deploying, make sure you have:
- ✅ Git installed on your computer
- ✅ GitHub account created
- ✅ GitHub repository created (empty)
- ✅ Portfolio code ready

---

## 🚀 Quick Deployment (Windows)

### Option 1: Automatic Script (Easiest)

1. **Open Command Prompt** in your portfolio folder
2. **Run the deployment script:**
   ```bash
   DEPLOY.bat
   ```
3. **Follow the prompts** - Enter your GitHub repository URL when asked
4. **Done!** Your code is pushed to GitHub

### Option 2: Manual Steps (Windows)

1. **Open Command Prompt** in your portfolio folder

2. **Initialize Git:**
   ```bash
   git init
   git branch -M main
   ```

3. **Add all files:**
   ```bash
   git add .
   ```

4. **Commit changes:**
   ```bash
   git commit -m "Deploy portfolio"
   ```

5. **Add remote repository:**
   ```bash
   git remote add origin https://github.com/Nirajtiwari6698/portfolio.git
   ```

6. **Push to GitHub:**
   ```bash
   git push -u origin main
   ```

---

## 🚀 Quick Deployment (Mac/Linux)

### Option 1: Automatic Script (Easiest)

1. **Open Terminal** in your portfolio folder
2. **Make script executable:**
   ```bash
   chmod +x DEPLOY.sh
   ```
3. **Run the deployment script:**
   ```bash
   ./DEPLOY.sh
   ```
4. **Follow the prompts** - Enter your GitHub repository URL when asked
5. **Done!** Your code is pushed to GitHub

### Option 2: Manual Steps (Mac/Linux)

Same as Windows manual steps above.

---

## 📤 Enable GitHub Pages

After pushing your code to GitHub:

1. **Go to your GitHub repository:**
   - https://github.com/Nirajtiwari6698/portfolio

2. **Go to Settings:**
   - Click "Settings" tab at the top right

3. **Go to Pages:**
   - Click "Pages" in the left sidebar

4. **Select main branch:**
   - Under "Source", select "main" branch
   - Select "/ (root)" folder
   - Click "Save"

5. **Wait for deployment:**
   - GitHub will build and deploy your portfolio
   - This takes 1-2 minutes

6. **Your portfolio is live!**
   - Visit: https://Nirajtiwari6698.github.io/portfolio

---

## 🔧 Build Commands

### Development
```bash
npm run dev
# Runs on http://localhost:3000
```

### Production Build
```bash
npm run build
# Creates optimized build in dist/ folder
```

### Preview Build
```bash
npm run preview
# Preview production build locally
```

---

## 📊 Deployment Checklist

- [ ] Git installed
- [ ] GitHub account created
- [ ] GitHub repository created
- [ ] Portfolio code ready
- [ ] Run `npm install`
- [ ] Run `npm run build`
- [ ] Run deployment script or manual steps
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Portfolio is live!

---

## ✅ Verify Deployment

After deployment, verify your portfolio:

1. **Visit your portfolio:**
   - https://Nirajtiwari6698.github.io/portfolio

2. **Check all pages:**
   - Home page loads
   - Navigation works
   - Dark mode toggle works
   - All links work
   - Footer displays correctly

3. **Test on mobile:**
   - Open on phone/tablet
   - Check responsive design
   - Test touch interactions

4. **Test dark mode:**
   - Toggle dark mode
   - Verify all pages work in dark mode

---

## 🐛 Troubleshooting

### Git not found
- Install Git from: https://git-scm.com/

### GitHub authentication failed
- Generate personal access token: https://github.com/settings/tokens
- Use token as password when pushing

### Build failed
- Run `npm install` to install dependencies
- Check for errors in console
- Make sure Node.js is installed

### Pages not deploying
- Go to Settings > Pages
- Make sure main branch is selected
- Wait 2-3 minutes for deployment
- Check Actions tab for build status

### Portfolio shows 404
- Make sure GitHub Pages is enabled
- Check repository name matches URL
- Wait for deployment to complete

---

## 📱 Update Your Portfolio

To update your portfolio after deployment:

1. **Make changes** to your code
2. **Run:**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```
3. **GitHub Pages** will automatically rebuild
4. **Changes** will be live in 1-2 minutes

---

## 🎯 Next Steps

After deployment:

1. **Share your portfolio:**
   - Share link with recruiters
   - Add to LinkedIn profile
   - Share on social media

2. **Keep it updated:**
   - Add new projects
   - Update skills
   - Improve design

3. **Monitor analytics:**
   - Track visitors
   - See which projects interest people
   - Improve based on feedback

---

## 📞 Support

If you encounter issues:

1. **Check GitHub Pages status:**
   - Go to repository Settings > Pages
   - Check build status in Actions tab

2. **Check console errors:**
   - Open browser DevTools (F12)
   - Check Console tab for errors

3. **Verify build:**
   - Run `npm run build`
   - Check dist/ folder exists
   - Check for build errors

---

## 🎉 Congratulations!

Your portfolio is now live and deployed! 🚀

**Portfolio URL:** https://Nirajtiwari6698.github.io/portfolio

**Share it with the world!** ✨
