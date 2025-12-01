import React from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { personalInfo } from '../data/personalData'

export default function Footer({ darkMode }) {
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
    <footer className={`${darkMode ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-slate-800' : 'bg-gradient-to-b from-white to-gray-50 border-gray-200'} border-t transition-smooth`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
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
            variants={itemVariants}
            className="transition-all duration-300"
          >
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase()}`}
                    className={`text-sm font-medium transition-all duration-300 hover:translate-x-1 inline-block ${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="transition-all duration-300"
          >
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className={`flex items-center space-x-2 text-sm font-medium transition-all duration-300 hover:translate-x-1 ${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}
              >
                <Mail size={18} className="flex-shrink-0" />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className={`flex items-center space-x-2 text-sm font-medium transition-all duration-300 hover:translate-x-1 ${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}
              >
                <Phone size={18} className="flex-shrink-0" />
                <span>{personalInfo.phone}</span>
              </a>
              <div className={`flex items-center space-x-2 text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <MapPin size={18} className="flex-shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`text-center text-sm py-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
        >
          <p className="font-semibold">© {currentYear} Niraj Kumar Tiwari. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
