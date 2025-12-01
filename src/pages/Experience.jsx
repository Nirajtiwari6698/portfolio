import React from 'react'
import { motion } from 'framer-motion'
import { experience } from '../data/personalData'
import TimelineItem from '../components/TimelineItem'

export default function Experience({ darkMode }) {
  return (
    <div className={`min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className={`text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Work Experience
          </h1>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            My professional journey
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8">
          {experience.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              darkMode={darkMode}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { label: 'Years of Experience', value: '3.7+' },
            { label: 'Companies Worked', value: '2' },
            { label: 'Technologies Mastered', value: '10+' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass rounded-lg p-6 text-center ${darkMode ? 'bg-slate-800 bg-opacity-50' : 'bg-gray-50 bg-opacity-50'}`}
            >
              <div className="text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
