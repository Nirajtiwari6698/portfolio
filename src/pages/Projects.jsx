import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/personalData'
import ProjectCard from '../components/ProjectCard'

export default function Projects({ darkMode }) {
  const [filter, setFilter] = useState('all')

  const categories = ['all', ...new Set(projects.flatMap(p => p.technologies))]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.technologies.includes(filter))

  return (
    <div className={`min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className={`text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            My Projects
          </h1>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Explore my recent work and side projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.slice(0, 8).map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-smooth capitalize ${
                filter === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : darkMode
                  ? 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              darkMode={darkMode}
              index={index}
            />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              No projects found for this filter.
            </p>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          {[
            { label: 'Projects Completed', value: projects.length },
            { label: 'Featured Projects', value: projects.filter(p => p.featured).length },
            { label: 'Technologies Used', value: new Set(projects.flatMap(p => p.technologies)).size }
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
                {stat.value}+
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
