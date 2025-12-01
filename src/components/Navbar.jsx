import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' }
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${darkMode ? 'bg-slate-900 bg-opacity-90 border-slate-700' : 'bg-white bg-opacity-90 border-gray-200'} backdrop-blur-xl border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className={`text-2xl font-bold gradient-text`}
            >
              NT
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-lg transition-smooth hover:${darkMode ? 'bg-slate-800' : 'bg-gray-100'} ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-smooth ${darkMode ? 'bg-slate-800 text-yellow-400' : 'bg-gray-100 text-gray-700'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`md:hidden pb-4 space-y-2 ${darkMode ? 'bg-slate-800' : 'bg-gray-50'}`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg transition-smooth ${darkMode ? 'text-gray-300 hover:bg-slate-700' : 'text-gray-700 hover:bg-gray-200'}`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  )
}
