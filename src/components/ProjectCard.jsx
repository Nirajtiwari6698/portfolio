import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { typography, colors, transitions } from '../constants/styles';

export default function ProjectCard({ project, darkMode, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.12, duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -15, scale: 1.02 }}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
        darkMode
          ? 'bg-slate-700/50 text-blue-400 hover:bg-slate-600/50'
          : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
      } ${transitions.default} ${transitions.hover}`}
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
            <Sparkles size={14} className="inline-block" />
            <span className="inline-block">Featured</span>
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className="p-7">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.12 + 0.1 }}
          className={`${typography.h3} ${colors.text.primary} mb-3`}
        >
          {project.title}
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.12 + 0.15 }}
          className={`${typography.body1} ${colors.text.secondary} mb-4 line-clamp-3`}
        >
          {project.description}
        </motion.p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-3 mt-6">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className={`${typography.caption} px-3 py-1 rounded-full ${
                darkMode
                  ? 'bg-slate-700/50 text-blue-300'
                  : 'bg-blue-50 text-blue-700'
              }`}
            >
              {tech}
            </span>
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
