import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalData';
import { typography, colors, transitions } from '../constants/styles';

export default function Footer({ darkMode }) {
  const [showScroll, setShowScroll] = useState(false);

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: personalInfo.github },
    { icon: Linkedin, label: 'LinkedIn', url: personalInfo.linkedin },
    { icon: Mail, label: 'Email', url: `mailto:${personalInfo.email}` },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <footer className={`relative ${darkMode ? 'bg-slate-900' : 'bg-gray-50'} pt-16 pb-8`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* About Section */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className={`transition-all duration-300 ${darkMode ? 'hover:opacity-80' : 'hover:opacity-90'}`}
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">NT</span>
              </div>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Niraj Tiwari
              </h3>
            </div>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm leading-relaxed mb-4`}>
              Frontend Developer crafting beautiful, responsive, and user-friendly web experiences with modern technologies.
            </p>
            <div className="flex items-center space-x-3">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.2 }}
                className={`p-2 rounded-lg transition-all ${darkMode ? 'bg-slate-700 text-gray-400 hover:bg-blue-600 hover:text-white' : 'bg-gray-200 text-gray-600 hover:bg-blue-600 hover:text-white'}`}
                title="Email"
              >
                <Mail size={18} />
              </motion.a>
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className={`p-2 rounded-lg transition-all ${darkMode ? 'bg-slate-700 text-gray-400 hover:bg-blue-600 hover:text-white' : 'bg-gray-200 text-gray-600 hover:bg-blue-600 hover:text-white'}`}
                title="GitHub"
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className={`p-2 rounded-lg transition-all ${darkMode ? 'bg-slate-700 text-gray-400 hover:bg-blue-600 hover:text-white' : 'bg-gray-200 text-gray-600 hover:bg-blue-600 hover:text-white'}`}
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="space-y-4"
            variants={itemVariants}
          >
            <h3 className={`${typography.h4} ${colors.text.primary}`}>
              {personalInfo.name}
            </h3>
            <p className={`${typography.body1} ${colors.text.secondary}`}>
              {personalInfo.tagline}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full ${
                    darkMode
                      ? 'text-gray-400 hover:text-white hover:bg-slate-800'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200'
                  } ${transitions.default} ${transitions.hover} ${transitions.active}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="transition-all duration-300"
          >
            <h4 className={`${typography.h5} ${colors.text.primary} mb-4`}>
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className={`w-5 h-5 mt-0.5 flex-shrink-0 ${colors.text.accent}`} />
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className={`${typography.body1} ${
                    darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  } ${transitions.default} ${transitions.hover}`}
                >
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className={`w-5 h-5 mt-0.5 flex-shrink-0 ${colors.text.accent}`} />
                <a 
                  href={`tel:${personalInfo.phone.replace(/\D/g, '')}`}
                  className={`${typography.body1} ${
                    darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  } ${transitions.default} ${transitions.hover}`}
                >
                  {personalInfo.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className={`w-5 h-5 mt-0.5 flex-shrink-0 ${colors.text.accent}`} />
                <span className={`${typography.body1} ${colors.text.secondary}`}>
                  {personalInfo.location}
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`text-center text-sm py-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
        >
          <p className="font-semibold"> {currentYear} Niraj Kumar Tiwari. All rights reserved.</p>
        </motion.div>
      </div>
      {showScroll && (
        <motion.button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg ${
            darkMode
              ? 'bg-slate-800 text-white hover:bg-slate-700'
              : 'bg-white text-gray-900 hover:bg-gray-100'
          } ${transitions.default} focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            darkMode ? 'focus:ring-blue-500' : 'focus:ring-blue-400'
          }`}
          aria-label="Scroll to top"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </footer>
  )
}
