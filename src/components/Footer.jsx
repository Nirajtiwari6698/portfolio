import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalData';
import { typography, colors, transitions } from '../constants/styles';

export default function Footer({ darkMode }) {
  const [showScroll, setShowScroll] = useState(false);
  const currentYear = new Date().getFullYear();

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Social links data
  const socialLinks = [
    { 
      icon: Github, 
      label: 'GitHub', 
      url: personalInfo.github,
      color: 'hover:bg-gray-800 dark:hover:bg-white dark:hover:text-gray-900',
      iconColor: 'text-gray-700 dark:text-gray-300'
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      url: personalInfo.linkedin,
      color: 'hover:bg-blue-600 hover:text-white',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    { 
      icon: Mail, 
      label: 'Email', 
      url: `mailto:${personalInfo.email}`,
      color: 'hover:bg-red-500 hover:text-white',
      iconColor: 'text-red-500 dark:text-red-400'
    },
  ];

  // Footer sections
  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '/' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
      ]
    },
    {
      title: 'Contact',
      items: [
        { icon: Mail, text: personalInfo.email, href: `mailto:${personalInfo.email}` },
        { icon: Phone, text: personalInfo.phone, href: `tel:${personalInfo.phone}` },
        { icon: MapPin, text: personalInfo.location },
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <footer className={`relative overflow-hidden ${darkMode ? 'bg-slate-900' : 'bg-gray-50'} border-t ${darkMode ? 'border-slate-800' : 'border-gray-200'}`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">NT</span>
              </div>
              <h3 className={`text-2xl font-bold bg-gradient-to-r ${darkMode ? 'from-blue-400 to-indigo-400' : 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
                Niraj Tiwari
              </h3>
            </div>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Crafting exceptional digital experiences with modern web technologies. Let's build something amazing together.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2.5 rounded-xl transition-all ${darkMode ? 'bg-slate-800/50 hover:bg-slate-700/70' : 'bg-white shadow-sm hover:shadow-md'} ${link.color} group`}
                    title={link.label}
                    aria-label={link.label}
                  >
                    <Icon size={18} className={`${link.iconColor} group-hover:text-white transition-colors`} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Generate other sections */}
          {footerSections.map((section, index) => (
            <motion.div key={index} variants={itemVariants} className="space-y-5">
              <h3 className={`text-base font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} tracking-wide`}>
                {section.title}
              </h3>
              
              <ul className="space-y-3">
                {(section.links || section.items).map((item, itemIndex) => (
                  <motion.li 
                    key={itemIndex}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    className="transition-transform duration-200"
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        className={`flex items-center space-x-3 text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                      >
                        {item.icon && <item.icon size={16} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />}
                        <span>{item.text || item.name}</span>
                      </a>
                    ) : (
                      <div className="flex items-center space-x-3 text-sm">
                        {item.icon && <item.icon size={16} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />}
                        <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{item.text}</span>
                      </div>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter Section */}
          <motion.div variants={itemVariants} className="space-y-5">
            <h3 className={`text-base font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} tracking-wide`}>
              Newsletter
            </h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Get the latest articles and resources sent straight to your inbox.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <Mail size={16} className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                <input
                  type="email"
                  placeholder="Your email address"
                  className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 outline-none transition-all ${
                    darkMode 
                      ? 'bg-slate-800/50 border border-slate-700 text-white placeholder-gray-500 focus:border-blue-500' 
                      : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-400 shadow-sm'
                  }`}
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Copyright and Bottom Bar */}
        <motion.div 
          className="pt-8 border-t border-gray-200 dark:border-slate-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              &copy; {currentYear} Niraj Tiwari. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <a 
                href="#" 
                className={`text-xs ${darkMode ? 'text-gray-500 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'} transition-colors`}
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className={`text-xs ${darkMode ? 'text-gray-500 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'} transition-colors`}
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className={`text-xs ${darkMode ? 'text-gray-500 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'} transition-colors`}
              >
                Cookies
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      {showScroll && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className={`fixed bottom-6 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-xl backdrop-blur-sm transition-all z-50 ${
            darkMode 
              ? 'bg-slate-800/80 text-blue-400 hover:bg-slate-700/90 hover:text-white border border-slate-700/50' 
              : 'bg-white/90 text-blue-600 hover:bg-white border border-gray-200 hover:shadow-2xl hover:-translate-y-0.5'
          }`}
          aria-label="Scroll to top"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp size={20} className="transform transition-transform group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </footer>
  )
}
