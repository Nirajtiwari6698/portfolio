import React from 'react';
import { motion } from 'framer-motion';
import { typography, colors, transitions } from '../constants/styles';

export default function SkillCard({ skill, darkMode, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, y: -8, rotateZ: 2 }}
      whileTap={{ scale: 0.95 }}
      className={`glass rounded-xl p-6 text-center cursor-pointer group ${
        darkMode 
          ? 'bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700 hover:border-blue-500' 
          : 'bg-white/40 hover:bg-white/70 border border-white hover:border-blue-300'
      } ${transitions.default} ${transitions.hover} ${transitions.active}`}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
        className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300"
      >
        {skill.icon}
      </motion.div>
      <h3 className={`${typography.h5} ${colors.text.primary} mb-1`}>
        {skill.name}
      </h3>
      <p className={`${typography.caption} ${colors.text.secondary}`}>
        {skill.category}
      </p>
    </motion.div>
  )
}
