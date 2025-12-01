import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Sparkles } from 'lucide-react'

export default function ProjectCard({ project, darkMode, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.12, duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -15, scale: 1.02 }}
      className={`group glass rounded-2xl overflow-hidden transition-all duration-500 ${darkMode ? 'bg-slate-800 bg-opacity-40 hover:bg-opacity-60 border border-slate-700 hover:border-blue-500' : 'bg-white bg-opacity-40 hover:bg-opacity-70 border border-white hover:border-blue-300'}`}
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-110"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Featured Badge */}
        {project.featured && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: index * 0.12 + 0.2, type: "spring" }}
            className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg"
          >
            <Sparkles size={14} />
            <span>Featured</span>
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className="p-7">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.12 + 0.1 }}
          className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}
        >
          {project.title}
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.12 + 0.15 }}
          className={`text-sm mb-5 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
        >
          {project.description}
        </motion.p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, idx) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.12 + (idx * 0.05) }}
              whileHover={{ scale: 1.1 }}
              className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-300 ${darkMode ? 'bg-gradient-to-r from-blue-900 to-purple-900 text-blue-200 hover:from-blue-800 hover:to-purple-800' : 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 hover:from-blue-200 hover:to-purple-200'}`}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08, x: 5 }}
            whileTap={{ scale: 0.92 }}
            className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/50"
          >
            <span>Live Demo</span>
            <motion.div whileHover={{ x: 3 }}>
              <ExternalLink size={16} />
            </motion.div>
          </motion.a>
          
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08, x: -5 }}
            whileTap={{ scale: 0.92 }}
            className={`flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 ${darkMode ? 'bg-slate-700 text-gray-200 hover:bg-slate-600 hover:shadow-lg hover:shadow-slate-600/50' : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-lg hover:shadow-gray-300/50'}`}
          >
            <span>Code</span>
            <motion.div whileHover={{ x: -3 }}>
              <Github size={16} />
            </motion.div>
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}
