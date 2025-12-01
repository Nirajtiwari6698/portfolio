import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar } from 'lucide-react'

export default function TimelineItem({ item, darkMode, isLeft }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`flex gap-6 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
    >
      {/* Timeline dot */}
      <div className="flex flex-col items-center">
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2"
        />
        <div className={`w-1 flex-1 ${darkMode ? 'bg-slate-700' : 'bg-gray-300'}`} />
      </div>

      {/* Content */}
      <motion.div
        whileHover={{ y: -5 }}
        className={`glass rounded-lg p-6 flex-1 ${darkMode ? 'bg-slate-800 bg-opacity-50' : 'bg-white bg-opacity-50'}`}
      >
        <div className="flex items-start justify-between mb-2">
          <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {item.position}
          </h3>
          <span className={`text-xs px-3 py-1 rounded-full ${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
            {item.duration}
          </span>
        </div>

        <div className="flex items-center space-x-4 mb-3">
          <div className="flex items-center space-x-2 text-sm">
            <Briefcase size={16} className="text-blue-500" />
            <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
              {item.company}
            </span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <MapPin size={16} className="text-purple-500" />
            <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
              {item.location}
            </span>
          </div>
        </div>

        {/* Responsibilities */}
        <ul className="space-y-2 mb-4">
          {item.responsibilities.map((resp, idx) => (
            <li key={idx} className={`text-sm flex items-start space-x-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <span className="text-blue-500 mt-1">•</span>
              <span>{resp}</span>
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-slate-700 text-blue-300' : 'bg-blue-100 text-blue-700'}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
