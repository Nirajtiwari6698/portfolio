import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { typography, colors, transitions } from '../constants/styles';

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
          className={`w-4 h-4 rounded-full mt-2 bg-gradient-to-r from-blue-500 to-purple-600 ${transitions.default}`}
        />
        <p className={`${typography.body2} ${colors.text.secondary} mb-4`}>
          {item.description}
        </p>
        <div className={`w-1 flex-1 ${darkMode ? 'bg-slate-700' : 'bg-gray-300'}`} />
      </div>

      {/* Content */}
      <motion.div
        whileHover={{ y: -5 }}
        className={`glass rounded-lg p-6 flex-1 ${transitions.default} ${
          darkMode ? 'bg-slate-800/50 hover:bg-slate-800/70' : 'bg-white/50 hover:bg-white/70'
        }`}
      >
        <div className="flex items-start justify-between mb-2">
          <h3 className={`${typography.h4} ${colors.text.primary}`}>
            {item.position}
          </h3>
          <span className={`${typography.caption} px-3 py-1 rounded-full ${
            darkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-700'
          }`}>
            {item.duration}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4 mb-3">
          <div className="flex items-center space-x-2">
            <Briefcase size={16} className={colors.text.accent} />
            <span className={`${typography.body2} ${colors.text.secondary}`}>
              {item.company}
            </span>
          </div>
          {item.website && (
            <a 
              href={item.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-blue-500 hover:underline"
            >
              <ExternalLink size={14} />
              <span className="text-sm">Website</span>
            </a>
          )}
          <div className="flex items-center space-x-2">
            <MapPin size={16} className="text-purple-500" />
            <span className={`${typography.body2} ${colors.text.secondary}`}>
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
          {item.technologies.map((tech, index) => (
            <span
              key={index}
              className={`${typography.caption} px-2 py-1 rounded ${
                darkMode
                  ? 'bg-slate-700/50 text-blue-300'
                  : 'bg-blue-50 text-blue-700'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
