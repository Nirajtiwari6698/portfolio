import React from 'react'
import { motion } from 'framer-motion'
import { personalInfo, skills, education } from '../data/personalData'

export default function About({ darkMode }) {
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
    <div className={`min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className={`text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            About Me
          </h1>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Get to know me better
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`glass rounded-xl p-8 mb-12 ${darkMode ? 'bg-slate-800 bg-opacity-50' : 'bg-gray-50 bg-opacity-50'}`}
        >
          <motion.div variants={itemVariants}>
            <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Who Am I?
            </h2>
            <p className={`text-lg leading-relaxed mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {personalInfo.bio}
            </p>
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              With a strong foundation in computer science and 3.7 years of professional experience, I've worked on diverse projects ranging from asset management systems to healthcare platforms. I'm passionate about writing clean, maintainable code and creating intuitive user interfaces that solve real-world problems.
            </p>
          </motion.div>
        </motion.section>

        {/* Career Objective */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`glass rounded-xl p-8 mb-12 ${darkMode ? 'bg-slate-800 bg-opacity-50' : 'bg-gray-50 bg-opacity-50'}`}
        >
          <motion.div variants={itemVariants}>
            <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Career Objective
            </h2>
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {personalInfo.careerObjective}
            </p>
          </motion.div>
        </motion.section>

        {/* Skills by Category */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            Skills & Expertise
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                variants={itemVariants}
                className={`glass rounded-xl p-6 ${darkMode ? 'bg-slate-800 bg-opacity-50' : 'bg-gray-50 bg-opacity-50'}`}
              >
                <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className={`px-4 py-2 rounded-lg transition-smooth ${darkMode ? 'bg-slate-700 text-blue-300' : 'bg-blue-100 text-blue-700'}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            Education
          </motion.h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className={`glass rounded-xl p-6 border-l-4 border-gradient-to-b from-blue-500 to-purple-600 ${darkMode ? 'bg-slate-800 bg-opacity-50' : 'bg-gray-50 bg-opacity-50'}`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {edu.degree}
                    </h3>
                    <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {edu.institution}
                    </p>
                  </div>
                  <span className={`text-sm px-3 py-1 rounded-full ${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                    {edu.year}
                  </span>
                </div>
                <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                  {edu.location}
                </p>
                <p className={`text-sm mt-2 font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  CGPA: {edu.cgpa}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}
