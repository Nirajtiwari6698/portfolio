import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, Mail, Phone, MapPin, Linkedin, ExternalLink, Code, Cpu, Database, CpuIcon, Code2, Monitor, Server, Smartphone, GitBranch, Cloud, Layers, Award, GraduationCap } from 'lucide-react';

export default function ResumeSection({ darkMode }) {
  const resumeData = {
    name: 'Niraj Kumar Tiwari',
    location: 'Gurgaon, India',
    email: 'nirajtiwari0020@gmail.com',
    phone: '8924838683',
    linkedin: 'linkedin.com/in/niraj-kumar-tiwari-76a720211',
    objective: 'Frontend Developer with 3.6+ years of experience in building scalable and responsive web applications using Angular (up to v18) and React.js. Adept at crafting clean, maintainable code with TypeScript, RxJS, and NgRx, and integrating complex APIs (REST/GraphQL) to deliver seamless user experiences.',
    
    skills: {
      frontend: ['Angular 18+', 'React.js', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'Angular Material'],
      languages: ['TypeScript', 'JavaScript (ES6+)', 'Python'],
      stateManagement: ['RxJS', 'NgRx'],
      backend: ['Node.js', 'RESTful APIs', 'GraphQL'],
      databases: ['MongoDB', 'PostgreSQL', 'Firebase', 'MySQL', 'Redis'],
      cloud: ['AWS (EC2, S3, Lambda)', 'Azure', 'Google Cloud Platform', 'Firebase'],
      devTools: ['Git', 'GitHub', 'GitLab', 'Docker', 'Kubernetes', 'Jira', 'VS Code', 'WebStorm']
    },
    
    aiTools: [
      {
        name: 'AI/ML',
        items: ['TensorFlow', 'PyTorch', 'OpenAI API', 'Hugging Face', 'LangChain']
      },
      {
        name: 'Data Visualization',
        items: ['D3.js', 'Chart.js', 'Tableau', 'Power BI', 'Matplotlib']
      },
      {
        name: 'Code Editors',
        items: ['VS Code', 'WebStorm', 'Jupyter Notebook', 'Google Colab']
      },
      {
        name: 'Testing',
        items: ['Jest', 'Karma', 'Jasmine', 'Cypress', 'Selenium']
      }
    ],
    
    experience: [
      {
        company: 'Anviam Solutions, Mohali',
        position: 'Senior Frontend Developer',
        duration: 'May 2023 – Present',
        project: 'HealthOrbitAI',
        description: 'AI-powered healthcare management and analytics platform for managing patient records, diagnostics, and predictive health insights.',
        technologies: ['Angular 18+', 'TypeScript', 'RxJS', 'NgRx', 'Tailwind CSS', 'Node.js', 'RESTful APIs', 'GraphQL', 'Docker', 'Azure'],
        achievements: [
          'Architected and led development of modular, scalable frontend using Angular 18+ and RxJS',
          'Integrated REST and GraphQL APIs for real-time data synchronization across the platform',
          'Optimized performance by 40% through lazy loading and virtual scrolling implementations',
          'Enhanced UI/UX with Tailwind CSS and Angular Material, improving user engagement by 30%',
          'Mentored junior developers and conducted code reviews to maintain code quality'
        ]
      },
      {
        company: 'Agelix Consulting (formerly known as Agelix)',
        position: 'Frontend Developer',
        duration: 'Jan 2022 – April 2023',
        projects: [
          {
            name: 'Contract Management System',
            description: 'Enterprise-grade web application for end-to-end contract lifecycle management',
            achievements: [
              'Developed reusable UI components using Angular Material and custom design system',
              'Implemented real-time collaboration features using WebSockets',
              'Reduced page load time by 35% through code splitting and bundle optimization'
            ],
            technologies: ['Angular 15+', 'TypeScript', 'RxJS', 'NgRx', 'REST APIs', 'GraphQL', 'Tailwind CSS']
          },
          {
            name: 'Field Service Management',
            description: 'Comprehensive solution for managing field operations, workforce, and asset tracking',
            achievements: [
              'Built interactive dashboards with real-time data visualization',
              'Integrated with mapping services for field technician tracking',
              'Improved form handling and validation for complex data entry'
            ],
            technologies: ['Angular 16+', 'RxJS', 'RESTful APIs', 'GraphQL', 'Docker', 'AWS', 'Mapbox']
          },
          {
            name: 'Asset Tracking System',
            description: 'Web-based system for tracking and managing assets',
            technologies: ['Angular 18+', 'Node.js', 'Python', 'REST APIs', 'GraphQL']
          }
        ]
      }
    ],
    
    education: [
      {
        degree: 'Master of Computer Applications (MCA)',
        institution: 'Sharda University, Greater Noida',
        year: '2019 – 2021'
      },
      {
        degree: 'Bachelor of Computer Applications (BCA)',
        institution: 'Babu Banarasi Das College of Engineering, Lucknow',
        year: '2016 – 2019'
      }
    ]
  };

  const resumeRef = useRef(null);
  const isInView = useInView(resumeRef, { once: true, amount: 0.1 });

  const renderExperience = (exp, index) => (
    <motion.div 
      key={index}
      className="rounded-2xl p-8 mb-12 overflow-hidden relative"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10"></div>
      <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-700 shadow-lg">
              {/* Replace with your profile image */}
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">NT</span>
              </div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Skills */}
            <motion.div 
              className={`rounded-2xl p-8 ${darkMode ? 'bg-slate-800/50' : 'bg-white'} shadow-xl`}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={sectionVariants}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                  <Code2 size={20} />
                </div>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Skills & Expertise
                </h3>
              </div>
              <div className="space-y-8">
                {Object.entries(resumeData.skills).map(([category, skills], index) => {
                  let icon;
                  switch(category) {
                    case 'frontend':
                      icon = <Monitor size={18} className="flex-shrink-0" />;
                      break;
                    case 'languages':
                      icon = <Code size={18} className="flex-shrink-0" />;
                      break;
                    case 'stateManagement':
                      icon = <Layers size={18} className="flex-shrink-0" />;
                      break;
                    case 'backend':
                      icon = <Server size={18} className="flex-shrink-0" />;
                      break;
                    case 'tools':
                      icon = <GitBranch size={18} className="flex-shrink-0" />;
                      break;
                    default:
                      icon = <Cpu size={18} className="flex-shrink-0" />;
                  }
                  
                  return (
                    <motion.div 
                      key={category}
                      className="space-y-3"
                      variants={itemVariants}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`p-1.5 rounded-md ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                          {icon}
                        </div>
                        <h4 className={`font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                          {category.split(/(?=[A-Z])/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, i) => (
                          <motion.span 
                            key={i}
                            className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                              darkMode 
                                ? 'bg-slate-700/50 text-gray-200 hover:bg-slate-700' 
                                : 'bg-blue-50 text-blue-800 hover:bg-blue-100'
                            } transition-colors`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const handleDownload = () => {
    // Replace with your actual resume file path
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Niraj_Kumar_Tiwari_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

      
      {exp.technologies && (
        <div className="flex flex-wrap gap-2 mb-4">
          {exp.technologies.map((tech, i) => (
            <span 
              key={i}
              className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                darkMode 
                  ? 'bg-slate-700/50 text-blue-300' 
                  : 'bg-blue-50 text-blue-700'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      
      {exp.achievements && (
        <div className="space-y-2">
          <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Key Achievements:
          </p>
          <ul className="space-y-2">
            {exp.achievements.map((achievement, i) => (
              <motion.li 
                key={i}
                className={`flex items-start gap-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className={`mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></span>
                <span>{achievement}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );

  return (
    <div 
      ref={resumeRef}
      className={`min-h-screen py-16 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gradient-to-b from-slate-900 to-slate-950' : 'bg-gradient-to-b from-gray-50 to-gray-100'}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 ${darkMode ? 'bg-slate-800 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
              Professional Resume
            </span>
            <motion.h1 
              className={`text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${darkMode ? 'from-blue-400 to-purple-500' : 'from-blue-600 to-purple-700'}`}
              variants={itemVariants}
            >
              My Professional Journey
            </motion.h1>
            <motion.p 
              className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
              variants={itemVariants}
            >
              A detailed overview of my skills, experience, and education
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mt-8"
            variants={itemVariants}
          >
            <motion.a
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleDownload}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all shadow-lg ${darkMode 
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-blue-500/20' 
                : 'bg-gradient-to-r from-blue-600 to-purple-700 text-white hover:from-blue-700 hover:to-purple-800 shadow-blue-500/30'}`}
            >
              <Download size={20} className="flex-shrink-0" />
              Download Resume
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${darkMode 
                ? 'bg-slate-800 text-gray-200 hover:bg-slate-700' 
                : 'bg-white text-gray-800 hover:bg-gray-50 shadow'}`}
            >
              <Mail size={18} className="flex-shrink-0" />
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Personal Info Card */}
        <motion.div 
          className={`rounded-2xl p-8 mb-12 overflow-hidden relative ${darkMode ? 'bg-slate-800/50' : 'bg-white'} shadow-xl`}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10"></div>
          <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-700 shadow-lg">
                  {/* Replace with your profile image */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">NT</span>
                  </div>
                </div>
              </motion.div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {/* Skills */}
                <motion.div 
                  className={`rounded-2xl p-8 ${darkMode ? 'bg-slate-800/50' : 'bg-white'} shadow-xl`}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={sectionVariants}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2 rounded-lg ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                      <Code2 size={20} />
                    </div>
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Skills & Expertise
                    </h3>
                  </div>
                  <div className="space-y-8">
                    {Object.entries(resumeData.skills).map(([category, skills], index) => {
                      let icon;
                      switch(category) {
                        case 'frontend':
                          icon = <Monitor size={18} className="flex-shrink-0" />;
                          break;
                        case 'languages':
                          icon = <Code size={18} className="flex-shrink-0" />;
                          break;
                        case 'stateManagement':
                          icon = <Layers size={18} className="flex-shrink-0" />;
                          break;
                        case 'backend':
                          icon = <Server size={18} className="flex-shrink-0" />;
                          break;
                        case 'tools':
                          icon = <GitBranch size={18} className="flex-shrink-0" />;
                          break;
                        default:
                          icon = <Cpu size={18} className="flex-shrink-0" />;
                      }
                      
                      return (
                        <motion.div 
                          key={category}
                          className="space-y-3"
                          variants={itemVariants}
                        >
                          <div className="flex items-center gap-2">
                            <div className={`p-1.5 rounded-md ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                              {icon}
                            </div>
                            <h4 className={`font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                              {category.split(/(?=[A-Z])/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {skills.map((skill, i) => (
                              <motion.span 
                                key={i}
                                className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                                  darkMode 
                                    ? 'bg-slate-700/50 text-gray-200 hover:bg-slate-700' 
                                    : 'bg-blue-50 text-blue-800 hover:bg-blue-100'
                                } transition-colors`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Experience */}
                <motion.div 
                  className={`lg:col-span-2 space-y-8`}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.2
                      }
                    }
                  }}
                >
                  {resumeData.experience.map((exp, index) => renderExperience(exp, index))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* AI & Development Tools */}
          {renderAIToolsSection()}
          
          {/* Database & Cloud */}
          {renderDatabaseSection()}
          
          {/* Skills */}
          <motion.div 
            className={`rounded-2xl p-8 ${darkMode ? 'bg-slate-800/50' : 'bg-white'} shadow-xl`}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={sectionVariants}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 rounded-lg ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                <Code2 size={20} />
              </div>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Skills & Expertise
              </h3>
            </div>
            
            <div className="space-y-8">
              {Object.entries(resumeData.skills).map(([category, skills], index) => {
                let icon;
                switch(category) {
                  case 'frontend':
                    icon = <Monitor size={18} className="flex-shrink-0" />;
                    break;
                  case 'languages':
                    icon = <Code size={18} className="flex-shrink-0" />;
                    break;
                  case 'stateManagement':
                    icon = <Layers size={18} className="flex-shrink-0" />;
                    break;
                  case 'backend':
                    icon = <Server size={18} className="flex-shrink-0" />;
                    break;
                  case 'tools':
                    icon = <GitBranch size={18} className="flex-shrink-0" />;
                    break;
                  default:
                    icon = <Cpu size={18} className="flex-shrink-0" />;
                }
                
                return (
                  <motion.div 
                    key={category}
                    className="space-y-3"
                    variants={itemVariants}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`p-1.5 rounded-md ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                        {icon}
                      </div>
                      <h4 className={`font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                        {category.split(/(?=[A-Z])/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, i) => (
                        <motion.span 
                          key={i}
                          className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                            darkMode 
                              ? 'bg-slate-700/50 text-gray-200 hover:bg-slate-700' 
                              : 'bg-blue-50 text-blue-800 hover:bg-blue-100'
                          } transition-colors`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div 
            className={`lg:col-span-2 space-y-8`}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
          >
            <div className={`rounded-2xl p-8 ${darkMode ? 'bg-slate-800/50' : 'bg-white'} shadow-xl`}>
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-2 rounded-lg ${darkMode ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>
                  <Award size={20} />
                </div>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Work Experience
                </h3>
              </div>
              
              <div className="space-y-8">
                {resumeData.experience.map((exp, i) => (
                  <motion.div 
                    key={i}
                    className={`relative pl-8 pb-8 border-l-2 ${darkMode ? 'border-slate-700' : 'border-gray-200'} last:border-transparent`}
                    variants={itemVariants}
                  >
                    <div className={`absolute w-4 h-4 rounded-full -left-[9px] ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
                    
                    <div className={`absolute -left-[5px] top-6 w-[2px] h-full ${darkMode ? 'bg-gradient-to-b from-blue-400' : 'bg-gradient-to-b from-blue-600'}`}></div>
                    
                    <div className={`p-1 rounded-full absolute -left-3 top-0 ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
                      <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
                    </div>
                    
                    <div className="mb-2">
                      <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {exp.position}
                      </h4>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                        <span className={`text-sm font-medium ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                          {exp.company}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${darkMode ? 'bg-slate-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                    
                    {exp.project && (
                      <div className="mb-3">
                        <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Project: <span className="font-semibold">{exp.project}</span>
                        </p>
                        <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {exp.description}
                        </p>
                      </div>
                    )}
                    
                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.technologies.map((tech, ti) => (
                          <span 
                            key={ti}
                            className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                              darkMode 
                                ? 'bg-slate-700/50 text-blue-300' 
                                : 'bg-blue-50 text-blue-700'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {exp.achievements && (
                      <div className="space-y-2">
                        <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Key Achievements:
                        </p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, ai) => (
                            <motion.li 
                              key={ai}
                              className={`flex items-start gap-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                              whileHover={{ x: 5 }}
                              transition={{ type: 'spring', stiffness: 300 }}
                            >
                              <span className={`mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></span>
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <motion.div 
              className={`rounded-2xl p-8 ${darkMode ? 'bg-slate-800/50' : 'bg-white'} shadow-xl`}
              variants={itemVariants}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-2 rounded-lg ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'}`}>
                  <GraduationCap size={20} />
                </div>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Education
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {resumeData.education.map((edu, i) => (
                  <motion.div 
                    key={i}
                    className={`p-6 rounded-xl ${darkMode ? 'bg-slate-700/30 hover:bg-slate-700/50' : 'bg-gray-50 hover:bg-gray-100'} transition-colors`}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-2.5 rounded-lg ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'}`}>
                        <GraduationCap size={20} />
                      </div>
                      <div>
                        <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {edu.degree}
                        </h4>
                        <p className={`text-sm mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {edu.institution}
                        </p>
                        <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {edu.year}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Call to Action */}
              <div className="mt-10 text-center">
                <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Interested in working together?
                </h4>
                <motion.a
                  href="#contact"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    darkMode 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700' 
                      : 'bg-gradient-to-r from-blue-600 to-purple-700 text-white hover:from-blue-700 hover:to-purple-800'
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get In Touch
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
