import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Contact from './pages/Contact'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved ? JSON.parse(saved) : true
  })

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <Router>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`min-h-screen transition-smooth ${darkMode ? 'dark bg-slate-950' : 'bg-white'}`}
      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/about" element={<About darkMode={darkMode} />} />
            <Route path="/projects" element={<Projects darkMode={darkMode} />} />
            <Route path="/experience" element={<Experience darkMode={darkMode} />} />
            <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          </Routes>
        </main>

        <Footer darkMode={darkMode} />
      </motion.div>
    </Router>
  )
}

export default App
