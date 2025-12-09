import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { typography, colors, transitions } from '../constants/styles';

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/', exact: true },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' }
  ];
  
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed w-full top-0 z-50 ${transitions.default} ${
      darkMode 
        ? 'bg-slate-900/90 border-slate-700' 
        : 'bg-white/90 border-gray-200'
    } backdrop-blur-xl border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className={`${typography.h2} gradient-text`}
              aria-label="Home"
            >
              NT
            </motion.div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = link.exact 
                ? location.pathname === link.path
                : location.pathname.startsWith(link.path) && link.path !== '/';
                
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.exact}
                  className={({ isActive }) => 
                    `px-3 py-2 rounded-lg ${transitions.default} ${
                      isActive 
                        ? darkMode 
                          ? 'bg-blue-900/30 text-blue-400' 
                          : 'bg-blue-100 text-blue-700'
                        : `${
                            darkMode 
                              ? 'text-gray-300 hover:bg-slate-800 hover:text-white' 
                              : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                          } ${transitions.hover} ${transitions.active}`
                    }`
                  }
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.name}
                </NavLink>
              );
            })}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${transitions.default} ${
                darkMode 
                  ? 'text-yellow-300 hover:bg-slate-800' 
                  : 'text-gray-700 hover:bg-gray-100'
              } ${transitions.hover} ${transitions.active}`}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

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
          <div className={`md:hidden fixed inset-x-0 top-16 bg-black/50 z-40 transition-opacity ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`} onClick={() => setIsOpen(false)}>
            <div className={`absolute top-0 left-0 right-0 transform transition-transform ${
              isOpen ? 'translate-y-0' : '-translate-y-full'
            } ${darkMode ? 'bg-slate-900 border-b border-slate-700' : 'bg-white border-b border-gray-200'} shadow-2xl`} onClick={e => e.stopPropagation()}>
              <div className="p-4 space-y-2 max-h-[60vh] overflow-y-auto">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    end={link.exact}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => 
                      `block px-4 py-3 rounded-lg text-base font-medium ${transitions.default} ${
                        isActive 
                          ? darkMode 
                            ? 'bg-blue-900/50 text-blue-300 border border-blue-700' 
                            : 'bg-blue-100 text-blue-700 border border-blue-300'
                          : `${
                              darkMode 
                                ? 'text-gray-200 hover:bg-slate-800 hover:text-white border border-transparent' 
                                : 'text-gray-800 hover:bg-gray-100 hover:text-gray-900 border border-transparent'
                            } ${transitions.hover} ${transitions.active}`
                      }`
                    }
                    aria-current={location.pathname === link.path ? 'page' : undefined}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
