import React from 'react'
import { motion } from 'framer-motion'

export default function SkillCard({ skill, darkMode, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, y: -8, rotateZ: 2 }}
      whileTap={{ scale: 0.95 }}
      className={`glass rounded-xl p-6 text-center transition-all duration-300 cursor-pointer group ${darkMode ? 'bg-slate-800 bg-opacity-40 hover:bg-opacity-70 border border-slate-700 hover:border-blue-500' : 'bg-white bg-opacity-40 hover:bg-opacity-70 border border-white hover:border-blue-300'}`}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
        className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300"
      >
        {skill.icon}
      </motion.div>
      <h3 className={`font-bold text-lg mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        {skill.name}
      </h3>
      <p className={`text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        {skill.category}
      </p>
    </motion.div>
  )
}
