import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { typography, colors, transitions } from '../constants/styles';

export default function ProjectCard({ project, darkMode, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`group relative overflow-hidden rounded-xl transition-all duration-300 ${
        darkMode 
          ? 'bg-slate-800/50 hover:bg-slate-800/70 border border-slate-700/50 hover:border-slate-600/70' 
          : 'bg-white hover:bg-gray-50 border border-gray-100 hover:border-gray-200'
      } shadow-sm hover:shadow-md`}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 z-10" />
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          initial={{ opacity: 0.9 }}
          whileInView={{ opacity: 1 }}
        />
        
        {/* Featured Badge */}
        {project.featured && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.2 }}
            className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full text-[11px] font-medium flex items-center space-x-1.5 shadow-lg backdrop-blur-sm bg-opacity-90"
          >
            <Sparkles size={12} className="inline-block" />
            <span className="inline-block tracking-wide">FEATURED</span>
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex flex-col h-full">
          <div className="flex-1">
            <h3 className={`text-xl font-bold mb-2 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {project.title}
            </h3>
            
            <p className={`text-sm mb-4 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            } line-clamp-3 leading-relaxed`}>
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mt-4 mb-5">
            {project.technologies.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className={`text-xs px-2.5 py-1 rounded-full ${
                  darkMode
                    ? 'bg-slate-700/60 text-blue-300/90'
                    : 'bg-blue-50 text-blue-700'
                } font-medium`}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-gray-400">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-slate-700/50">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 2 }}
              className="text-sm font-medium flex items-center space-x-1.5 group/link"
            >
              <span className={darkMode ? 'text-blue-400 group-hover/link:text-blue-300' : 'text-blue-600 group-hover/link:text-blue-700'}>
                View Project
              </span>
              <ExternalLink 
                size={14} 
                className={darkMode ? 'text-blue-400 group-hover/link:text-blue-300' : 'text-blue-500 group-hover/link:text-blue-600'} 
              />
            </motion.a>
            
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -1 }}
              className={`p-2 rounded-lg ${
                darkMode
                  ? 'text-gray-400 hover:bg-slate-700/50 hover:text-white'
                  : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
              } transition-colors`}
              aria-label="View code on GitHub"
            >
              <Github size={18} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
