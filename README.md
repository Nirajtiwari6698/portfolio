# Niraj Kumar Tiwari - Portfolio Website

A modern, responsive portfolio website built with **React**, **Tailwind CSS**, and **Framer Motion**. Features a beautiful glassmorphism design, dark mode toggle, and smooth animations.

## 🌟 Features

- ✨ **Modern Design** - Glassmorphism UI with gradient accents
- 🎨 **Dark Mode** - Toggle between light and dark themes
- 📱 **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- ⚡ **Smooth Animations** - Framer Motion animations throughout
- 🚀 **Fast Performance** - Built with Vite for optimal speed
- 📄 **SEO Friendly** - Meta tags and semantic HTML
- 🎯 **Multiple Pages** - Home, About, Projects, Experience, Contact

## 📋 Pages

1. **Home** - Hero section with tech stack and featured projects
2. **About** - Personal bio, skills by category, and education
3. **Projects** - Showcase of 6+ projects with filtering
4. **Experience** - Timeline of work experience
5. **Contact** - Contact form and social links

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **Build Tool**: Vite
- **Icons**: Lucide React

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone or extract the project**
```bash
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The application will open at `http://localhost:3000`

## 🚀 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── SkillCard.jsx
│   │   └── TimelineItem.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── personalData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── favicon.svg
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Customization

### Update Personal Information

Edit `src/data/personalData.js` to update:
- Personal info (name, email, phone, location)
- Skills and expertise
- Work experience
- Education
- Projects
- Tech stack

### Modify Colors

Edit `tailwind.config.js` to change the color scheme:
```js
colors: {
  primary: '#3B82F6',      // Blue
  secondary: '#8B5CF6',    // Purple
  accent: '#EC4899',       // Pink
}
```

### Update Project Images

Replace image URLs in `src/data/personalData.js` with your own project screenshots.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite and deploy

3. **Your site is live!**
   - Vercel provides a URL like `your-portfolio.vercel.app`

### Deploy to Netlify

1. **Build the project**
```bash
npm run build
```

2. **Drag and drop `dist/` folder**
   - Go to [netlify.com](https://netlify.com)
   - Drag the `dist/` folder to deploy

3. **Connect custom domain**
   - Add your domain in Netlify settings

### Deploy to GitHub Pages

1. **Update `vite.config.js`**
```js
export default {
  base: '/portfolio/',  // Replace with your repo name
  // ... rest of config
}
```

2. **Build and push**
```bash
npm run build
git add dist/
git commit -m "Deploy"
git push
```

3. **Enable GitHub Pages**
   - Go to repo Settings → Pages
   - Select `main` branch, `/root` folder

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint (if configured)

## 🎯 Features Breakdown

### Dark Mode
- Toggle between light and dark themes
- Preference saved to localStorage
- Smooth transitions

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly navigation

### Animations
- Page transitions
- Hover effects on cards and buttons
- Scroll animations
- Floating elements

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation support
- Proper color contrast

## 🔧 Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- --port 3001
```

### Build errors
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Dark mode not persisting
- Clear browser localStorage
- Check browser console for errors

## 📧 Contact Information

- **Email**: nirajtiwari0020@gmail.com
- **Phone**: 8924838683
- **Location**: Noida, India
- **LinkedIn**: [Add your profile]
- **GitHub**: [Add your profile]

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

- Built with [React](https://react.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Animated with [Framer Motion](https://www.framer.com/motion)
- Icons from [Lucide React](https://lucide.dev)
- Built with [Vite](https://vitejs.dev)

## 🚀 Next Steps

1. Update all personal information in `personalData.js`
2. Add your project screenshots
3. Update social media links
4. Deploy to your preferred platform
5. Share your portfolio!

---

**Happy coding! 🎉**
