# Portfolio Features & Components

Complete documentation of all features and components in your portfolio.

## 🎯 Pages Overview

### 1. Home Page (`src/pages/Home.jsx`)
**Features:**
- Hero section with animated avatar
- Tech stack showcase with hover effects
- Featured projects grid (3 projects)
- Expertise highlights section
- Call-to-action section
- Smooth scroll animations

**Components Used:**
- Navbar
- ProjectCard
- SkillCard
- Footer

---

### 2. About Page (`src/pages/About.jsx`)
**Features:**
- Personal bio section
- Career objective
- Skills organized by category
- Education timeline
- CGPA display
- Glassmorphism cards

**Sections:**
- Who Am I?
- Career Objective
- Skills & Expertise (4 categories)
- Education (2 entries)

---

### 3. Projects Page (`src/pages/Projects.jsx`)
**Features:**
- All 6 projects displayed
- Filter by technology
- Project statistics
- Featured project badges
- Responsive grid layout

**Filters:**
- All projects
- By technology (React, Angular, TypeScript, etc.)
- Dynamic category generation

---

### 4. Experience Page (`src/pages/Experience.jsx`)
**Features:**
- Timeline layout
- Company information
- Position and duration
- Responsibilities list
- Technologies used
- Statistics section

**Timeline Items:**
- Agelix Consulting (2022-2025)
- Anviam Solutions (2025)

---

### 5. Contact Page (`src/pages/Contact.jsx`)
**Features:**
- Contact form with validation
- Contact information cards
- Social media links
- Success message animation
- Email, phone, location display

**Form Fields:**
- Name (required)
- Email (required)
- Subject (required)
- Message (required)

---

## 🧩 Reusable Components

### Navbar Component (`src/components/Navbar.jsx`)
```jsx
<Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
```

**Features:**
- Fixed navigation bar
- Mobile hamburger menu
- Dark mode toggle
- Smooth transitions
- Active link highlighting

**Props:**
- `darkMode` (boolean) - Current theme
- `setDarkMode` (function) - Toggle theme

---

### Footer Component (`src/components/Footer.jsx`)
```jsx
<Footer darkMode={darkMode} />
```

**Features:**
- About section
- Quick links
- Contact information
- Social media links
- Copyright notice
- Responsive grid

**Props:**
- `darkMode` (boolean) - Current theme

---

### ProjectCard Component (`src/components/ProjectCard.jsx`)
```jsx
<ProjectCard project={project} darkMode={darkMode} index={index} />
```

**Features:**
- Project image with overlay
- Featured badge
- Technology tags
- Live demo button
- GitHub link button
- Hover animations

**Props:**
- `project` (object) - Project data
- `darkMode` (boolean) - Current theme
- `index` (number) - For stagger animation

**Project Object Structure:**
```js
{
  id: 1,
  title: 'Project Title',
  description: 'Short description',
  longDescription: 'Detailed description',
  image: 'image-url',
  technologies: ['React', 'Tailwind'],
  link: 'project-url',
  github: 'github-url',
  featured: true
}
```

---

### SkillCard Component (`src/components/SkillCard.jsx`)
```jsx
<SkillCard skill={skill} darkMode={darkMode} index={index} />
```

**Features:**
- Skill icon display
- Skill name
- Category label
- Hover scale animation
- Glassmorphism design

**Props:**
- `skill` (object) - Skill data
- `darkMode` (boolean) - Current theme
- `index` (number) - For stagger animation

**Skill Object Structure:**
```js
{
  name: 'React',
  icon: '⚛️',
  category: 'Frontend'
}
```

---

### TimelineItem Component (`src/components/TimelineItem.jsx`)
```jsx
<TimelineItem item={item} darkMode={darkMode} isLeft={isLeft} />
```

**Features:**
- Timeline dot with gradient
- Company and position info
- Duration badge
- Responsibilities list
- Technologies tags
- Alternating layout

**Props:**
- `item` (object) - Experience data
- `darkMode` (boolean) - Current theme
- `isLeft` (boolean) - Layout direction

**Experience Object Structure:**
```js
{
  id: 1,
  company: 'Company Name',
  position: 'Your Position',
  duration: 'Jan 2022 – Dec 2023',
  location: 'City, Country',
  responsibilities: ['Resp 1', 'Resp 2'],
  technologies: ['React', 'Node.js']
}
```

---

## 🎨 Styling Features

### Glassmorphism Effect
```css
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### Gradient Text
```css
.gradient-text {
  background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Animations
- `float` - Floating animation (3s)
- `glow` - Glowing effect (2s)
- `slide-in` - Slide in animation (0.5s)

---

## 🌓 Dark Mode

### Implementation
- Toggle button in Navbar
- Preference saved to localStorage
- Smooth color transitions
- All components support dark mode

### Color Scheme
**Light Mode:**
- Background: White
- Text: Gray-900
- Cards: Gray-50

**Dark Mode:**
- Background: Slate-950
- Text: White
- Cards: Slate-800

---

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: > 1024px (lg)

### Mobile Optimizations
- Hamburger menu on small screens
- Stack layout for cards
- Touch-friendly buttons
- Optimized font sizes

---

## ⚡ Animations

### Framer Motion Features
- Page transitions
- Stagger animations
- Hover effects
- Scroll animations
- Floating elements

### Animation Examples
```jsx
// Stagger container
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {/* Children animate with stagger */}
</motion.div>

// Hover effect
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>

// Scroll animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

---

## 🔧 Customization Guide

### Add New Project
Edit `src/data/personalData.js`:
```js
export const projects = [
  // ... existing projects
  {
    id: 7,
    title: 'New Project',
    description: 'Description',
    longDescription: 'Detailed description',
    image: 'https://image-url.com/image.jpg',
    technologies: ['React', 'Node.js'],
    link: 'https://project-link.com',
    github: 'https://github.com/project',
    featured: false
  }
]
```

### Add New Skill
```js
export const skills = [
  {
    category: 'New Category',
    items: ['Skill 1', 'Skill 2', 'Skill 3']
  }
]
```

### Add New Experience
```js
export const experience = [
  // ... existing experiences
  {
    id: 3,
    company: 'New Company',
    position: 'Position',
    duration: 'Start – End',
    location: 'City, Country',
    responsibilities: ['Resp 1', 'Resp 2'],
    technologies: ['Tech 1', 'Tech 2']
  }
]
```

---

## 📊 Data Structure

### personalData.js
```js
export const personalInfo = { ... }
export const skills = [ ... ]
export const experience = [ ... ]
export const education = [ ... ]
export const projects = [ ... ]
export const techStack = [ ... ]
```

---

## 🚀 Performance Optimizations

### Implemented
- Code splitting with React Router
- Lazy loading with Framer Motion
- Optimized images with srcset
- CSS minification with Tailwind
- JavaScript minification with Vite

### Best Practices
- Memoization for expensive components
- Debouncing for scroll events
- Image optimization
- CSS-in-JS optimization

---

## ♿ Accessibility

### Features
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Color contrast compliance
- Focus indicators
- Alt text for images

---

## 🔍 SEO

### Implemented
- Meta tags in HTML
- Semantic HTML structure
- Open Graph tags
- Mobile viewport
- Structured data ready

### To Enhance
- Add JSON-LD schema
- Create sitemap.xml
- Add robots.txt
- Submit to search engines

---

## 📦 Dependencies

### Core
- React 18.2.0
- React Router 6.20.0
- Framer Motion 10.16.4
- Tailwind CSS 3.3.6

### Development
- Vite 5.0.0
- PostCSS 8.4.31
- Autoprefixer 10.4.16

---

## 🎯 Future Enhancements

- [ ] Blog section
- [ ] Project detail pages
- [ ] Testimonials section
- [ ] Newsletter signup
- [ ] Search functionality
- [ ] Comments on projects
- [ ] Admin dashboard
- [ ] CMS integration

---

## 📞 Support

For issues or questions:
1. Check README.md
2. Review QUICKSTART.md
3. Check DEPLOYMENT.md
4. Review component code comments

---

**Happy building! 🚀**
