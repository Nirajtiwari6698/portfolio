# Quick Start Guide

Get your portfolio up and running in 5 minutes!

## ⚡ Installation (2 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Your portfolio will open at `http://localhost:3000` 🎉

---

## 🎨 Customize Your Portfolio (3 minutes)

### Step 1: Update Personal Information
Edit `src/data/personalData.js`:

```js
export const personalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  phone: 'Your Phone',
  email: 'your@email.com',
  location: 'Your City, Country',
  linkedin: 'https://linkedin.com/in/your-profile',
  github: 'https://github.com/your-username',
  bio: 'Your bio here...',
  careerObjective: 'Your career objective...',
}
```

### Step 2: Update Skills
In the same file, modify the `skills` array:

```js
export const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Vue', 'Angular', 'TypeScript']
  },
  // Add more categories...
]
```

### Step 3: Add Your Projects
Update the `projects` array with your real projects:

```js
export const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Brief description',
    longDescription: 'Detailed description',
    image: 'https://your-image-url.com/image.jpg',
    technologies: ['React', 'Tailwind CSS'],
    link: 'https://project-link.com',
    github: 'https://github.com/your-project',
    featured: true
  },
  // Add more projects...
]
```

### Step 4: Update Experience
Modify the `experience` array:

```js
export const experience = [
  {
    id: 1,
    company: 'Company Name',
    position: 'Your Position',
    duration: 'Jan 2022 – Dec 2023',
    location: 'City, Country',
    responsibilities: [
      'Responsibility 1',
      'Responsibility 2',
    ],
    technologies: ['React', 'Node.js']
  },
  // Add more experiences...
]
```

---

## 🚀 Deploy in 2 Minutes

### Option 1: Vercel (Easiest)
```bash
npm run build
git push origin main
```
Then connect your GitHub repo to [vercel.com](https://vercel.com)

### Option 2: Netlify
```bash
npm run build
```
Drag the `dist/` folder to [netlify.com](https://netlify.com)

### Option 3: GitHub Pages
```bash
npm run build
git add dist/
git commit -m "Deploy"
git push origin main
```

---

## 📝 File Structure

```
portfolio/
├── src/
│   ├── components/          # Reusable components
│   ├── pages/              # Page components
│   ├── data/
│   │   └── personalData.js # ← EDIT THIS FILE
│   ├── App.jsx
│   └── index.css
├── public/
│   └── favicon.svg         # Your favicon
├── index.html              # Main HTML
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## 🎯 Common Customizations

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: '#3B82F6',      // Change blue
  secondary: '#8B5CF6',    // Change purple
  accent: '#EC4899',       // Change pink
}
```

### Add Your Logo
Replace `public/favicon.svg` with your logo

### Update Social Links
In `src/data/personalData.js`:
```js
export const personalInfo = {
  linkedin: 'YOUR_LINKEDIN_URL',
  github: 'YOUR_GITHUB_URL',
}
```

### Change Font
Edit `src/index.css` and update the font-family

---

## ✅ Pre-Deployment Checklist

- [ ] Updated all personal information
- [ ] Added your projects with real images
- [ ] Updated work experience
- [ ] Changed social media links
- [ ] Tested locally: `npm run dev`
- [ ] Build succeeds: `npm run build`
- [ ] No console errors
- [ ] Responsive on mobile (test with DevTools)
- [ ] Dark mode works
- [ ] All links are working

---

## 🐛 Troubleshooting

### Port 3000 in use?
```bash
npm run dev -- --port 3001
```

### Build fails?
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Dark mode not working?
Clear localStorage in DevTools → Application → Local Storage

---

## 📚 Learn More

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Vite Docs](https://vitejs.dev)

---

## 🎉 You're All Set!

Your portfolio is ready to customize and deploy. Happy coding!

**Next Steps:**
1. Edit `src/data/personalData.js`
2. Run `npm run dev`
3. See your changes live
4. Deploy to Vercel/Netlify
5. Share with the world! 🚀
