import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Code2, Zap, Users } from 'lucide-react'
import { personalInfo, techStack, projects } from '../data/personalData'
import ProjectCard from '../components/ProjectCard'
import SkillCard from '../components/SkillCard'

export default function Home({ darkMode }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const featuredProjects = projects.filter(p => p.featured).slice(0, 3)

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-950' : 'bg-white'} transition-smooth`}>
      {/* Hero Section */}
      <section className={`pt-32 pb-24 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950' : 'bg-gradient-to-b from-white via-blue-50 to-white'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            {/* Avatar with Enhanced Animation */}
            <motion.div
              variants={itemVariants}
              className="mb-12"
            >
              <motion.div
                animate={{ y: [0, -25, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-40 h-40 mx-auto mb-10 rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 p-2 shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <div className={`w-full h-full rounded-full ${darkMode ? 'bg-slate-900' : 'bg-white'} flex items-center justify-center text-6xl font-black`}>
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">NT</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Main Heading with Enhanced Typography */}
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className={`text-6xl md:text-8xl font-black mb-4 leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Hi, I'm <span className="gradient-text">Niraj</span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
            </motion.div>

            {/* Professional Subtitle */}
            <motion.p
              variants={itemVariants}
              className={`text-2xl md:text-3xl font-semibold mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}
            >
              Frontend Developer & UI/UX Specialist
            </motion.p>

            {/* Experience Badge */}
            <motion.div
              variants={itemVariants}
              className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full mb-8 ${darkMode ? 'bg-slate-800 border border-slate-700' : 'bg-blue-50 border border-blue-200'}`}
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                3.7+ Years of Professional Experience
              </span>
            </motion.div>

            {/* Enhanced Description */}
            <motion.p
              variants={itemVariants}
              className={`text-lg max-w-3xl mx-auto mb-10 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
            >
              Specialized in building scalable, high-performance web applications with React and Angular. I combine modern design principles with clean code architecture to create digital experiences that users love.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50"
                >
                  <span>View My Work</span>
                  <motion.div whileHover={{ x: 5 }}>
                    <ArrowRight size={22} />
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className={`inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${darkMode ? 'bg-slate-800 text-white hover:bg-slate-700 hover:shadow-xl hover:shadow-slate-600/50 border border-slate-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200 hover:shadow-xl hover:shadow-gray-300/50 border border-gray-200'}`}
                >
                  <span>Get In Touch</span>
                  <ArrowRight size={22} />
                </Link>
              </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex justify-center"
            >
              <div className={`w-6 h-10 border-2 rounded-full flex items-start justify-center p-2 ${darkMode ? 'border-gray-600' : 'border-gray-400'}`}>
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className={`py-24 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gradient-to-b from-slate-950 to-slate-900' : 'bg-gradient-to-b from-white to-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Tech Stack
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Cutting-edge technologies I specialize in for building modern, scalable applications
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {techStack.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} darkMode={darkMode} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className={`py-24 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Featured Projects
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Showcase of my best work and innovative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} darkMode={darkMode} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold transition-smooth hover:shadow-lg"
            >
              <span>View All Projects</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Expertise Highlights */}
      <section className={`py-24 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gradient-to-b from-slate-900 to-slate-950' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Core Expertise
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Key areas where I deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: 'Frontend Development',
                description: 'Building responsive and interactive web applications with React, Angular, and modern CSS frameworks.'
              },
              {
                icon: Zap,
                title: 'Performance Optimization',
                description: 'Optimizing applications for speed and efficiency, improving load times and user experience.'
              },
              {
                icon: Users,
                title: 'User Experience',
                description: 'Creating intuitive interfaces with focus on accessibility and user-centric design principles.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`glass rounded-lg p-8 text-center transition-smooth ${darkMode ? 'bg-slate-800 bg-opacity-50' : 'bg-white bg-opacity-50'}`}
              >
                <item.icon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {item.title}
                </h3>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-28 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`glass rounded-3xl p-16 ${darkMode ? 'bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 border border-slate-700' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border border-blue-100'}`}
          >
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={`text-4xl md:text-5xl font-black mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            >
              Ready to Create Something Amazing?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className={`text-xl mb-10 max-w-2xl mx-auto leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              I'm always excited to collaborate on innovative projects and help bring your ideas to life. Let's connect and explore possibilities together.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-10 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50"
              >
                <span>Let's Get Started</span>
                <motion.div whileHover={{ x: 5 }}>
                  <ArrowRight size={24} />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
