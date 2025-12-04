import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, Mail, Phone, MapPin, Linkedin, ExternalLink, ArrowUp, GraduationCap } from 'lucide-react';
// Rename the image file to use hyphens instead of spaces
import ProfileImage from '../assets/WhatsApp Image 2025-12-04 at 20.09.59.jpeg';
import { typography, colors, spacing, transitions } from '../constants/styles';

// Lazy load html2pdf to reduce initial bundle size
let html2pdf;
if (typeof window !== 'undefined') {
  import('html2pdf.js').then(module => {
    html2pdf = module.default || module;
  });
}

const ResumeSection = ({ darkMode: propDarkMode = true }) => {
  const [darkMode, setDarkMode] = useState(propDarkMode);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef(null);

  // Sync with parent component's dark mode if provided
  useEffect(() => {
    if (propDarkMode !== undefined) {
      setDarkMode(propDarkMode);
    }
  }, [propDarkMode]);

  // Check if footer is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resumeData = {
    name: 'Niraj Kumar Tiwari',
    location: 'Gurgaon, India',
    email: 'nirajtiwari0020@gmail.com',
    phone: '8924838683',
    linkedin: 'linkedin.com/in/niraj-kumar-tiwari-76a720211',
    objective: 'Frontend Developer with 3.6+ years of experience in building scalable and responsive web applications using Angular (up to v18) and React.js.',
    
    skills: {
      frontend: ['Angular 18+', 'React.js', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'Angular Material'],
      languages: ['TypeScript', 'JavaScript (ES6+)', 'Python'],
      stateManagement: ['RxJS', 'NgRx'],
      backend: ['Node.js', 'RESTful APIs', 'GraphQL'],
      databases: ['MongoDB', 'PostgreSQL', 'Firebase', 'MySQL', 'Redis'],
      cloud: ['AWS (EC2, S3, Lambda)', 'Azure', 'Google Cloud Platform', 'Firebase'],
      devTools: ['Git', 'GitHub', 'GitLab', 'Docker', 'Kubernetes', 'Jira', 'VS Code', 'WebStorm']
    },
    
    experience: [
      {
        company: 'Anviam Solutions, Mohali',
        position: 'Senior Frontend Developer',
        duration: 'May 2023 – Present',
        project: 'HealthOrbitAI',
        description: 'AI-powered healthcare management and analytics platform',
        technologies: ['Angular 18+', 'TypeScript', 'RxJS', 'NgRx', 'Tailwind CSS'],
        achievements: [
          'Architected and led development of modular frontend',
          'Integrated REST and GraphQL APIs for real-time data',
          'Optimized performance by 40% through lazy loading'
        ]
      },
      {
        company: 'Agelix Consulting',
        position: 'Frontend Developer',
        duration: 'Jan 2022 – April 2023',
        project: 'Contract Management System',
        description: 'Enterprise-grade web application for contract management',
        technologies: ['Angular 15+', 'TypeScript', 'RxJS', 'NgRx'],
        achievements: [
          'Developed reusable UI components',
          'Implemented real-time collaboration features',
          'Reduced page load time by 35%'
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

  const renderExperience = (exp, index) => (
    <motion.div 
      key={index}
      className={`p-6 rounded-xl mb-6 ${darkMode ? 'bg-slate-700/30 hover:bg-slate-700/50' : 'bg-gray-50 hover:bg-gray-100'} transition-colors`}
      variants={itemVariants}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <div>
          <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {exp.position}
          </h3>
          <p className={`${darkMode ? 'text-blue-300' : 'text-blue-600'} font-medium`}>
            {exp.company}
          </p>
        </div>
        <span className={`text-sm px-3 py-1 rounded-full ${darkMode ? 'bg-slate-600 text-gray-200' : 'bg-blue-100 text-blue-800'}`}>
          {exp.duration}
        </span>
      </div>
      
      {exp.project && (
        <div className="mb-4">
          <h4 className={`text-md font-semibold mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Project: {exp.project}
          </h4>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {exp.description}
          </p>
        </div>
      )}
      
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

  const handleDownload = async () => {
    if (typeof window === 'undefined') {
      console.error('PDF generation only works in the browser');
      return;
    }

    let downloadBtn;
    let originalText;
    let tempContainer;
    
    try {
      // Show loading state
      downloadBtn = document.querySelector('.download-btn');
      originalText = downloadBtn?.textContent;
      if (downloadBtn) {
        downloadBtn.disabled = true;
        const span = document.createElement('span');
        span.className = 'animate-pulse';
        span.textContent = 'Preparing PDF...';
        downloadBtn.innerHTML = '';
        downloadBtn.appendChild(span);
      }

      const resumeContent = document.getElementById('resume-content');
      if (!resumeContent) {
        throw new Error('Resume content not found');
      }

      const contentClone = resumeContent.cloneNode(true);
      
      // Add About Me section
      const aboutMeSection = document.createElement('div');
      aboutMeSection.className = 'about-me-section p-6 mb-6 rounded-xl';
      aboutMeSection.style.backgroundColor = darkMode ? 'rgba(51, 65, 85, 0.5)' : 'rgba(243, 244, 246, 0.8)';
      aboutMeSection.innerHTML = `
        <h2 class="text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}">About Me</h2>
        <p class="${darkMode ? 'text-gray-300' : 'text-gray-700'}">
          ${resumeData.objective}
        </p>
      `;
      
      contentClone.insertBefore(aboutMeSection, contentClone.firstChild);

      tempContainer = document.createElement('div');
      tempContainer.style.position = 'absolute';
      tempContainer.style.left = '-9999px';
      tempContainer.style.width = '210mm';
      tempContainer.style.padding = '20px';
      tempContainer.style.backgroundColor = darkMode ? '#0f172a' : '#ffffff';
      tempContainer.appendChild(contentClone);
      document.body.appendChild(tempContainer);

      const opt = {
        margin: [15, 10, 15, 10],
        filename: `Niraj_Kumar_Tiwari_Resume_${new Date().toISOString().split('T')[0]}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 1.8,
          useCORS: true,
          logging: true,
          windowWidth: 794,
          windowHeight: 1123,
          scrollX: 0,
          scrollY: 0,
          dpi: 300,
          letterRendering: true,
          allowTaint: true
        },
        jsPDF: { 
          unit: 'mm', 
          format: 'a4', 
          orientation: 'portrait',
          hotfixes: ['px_scaling']
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      };

      // Use the already loaded html2pdf or load it
      const pdfLib = html2pdf || (await import('html2pdf.js')).default;
      
      await pdfLib()
        .set(opt)
        .from(tempContainer)
        .save()
        .catch(async (err) => {
          console.error('PDF generation error:', err);
          const fallbackOpt = {
            ...opt,
            html2canvas: { 
              scale: 1.5,
              useCORS: true
            }
          };
          
          return pdfLib()
            .set(fallbackOpt)
            .from(tempContainer)
            .save()
            .catch((fallbackErr) => {
              console.error('Fallback PDF generation failed:', fallbackErr);
              window.print();
              throw fallbackErr;
            });
        });

    } catch (error) {
      console.error('Error in download handler:', error);
      // Fallback to opening a new tab with a print view if available
      if (typeof window !== 'undefined') {
        window.open('/resume', '_blank');
      }
    } finally {
      // Clean up
      if (tempContainer && tempContainer.parentNode) {
        document.body.removeChild(tempContainer);
      }
      if (downloadBtn) {
        downloadBtn.disabled = false;
        if (originalText) {
          downloadBtn.textContent = originalText;
        } else {
          downloadBtn.innerHTML = 'Download CV';
        }
      }
    }
  };

  return (
    <div 
      ref={resumeRef}
      id="resume-content"
      className={`min-h-screen py-16 px-4 sm:px-6 lg:px-8 ${
        darkMode ? 'bg-gradient-to-b from-slate-900 to-slate-950' : 'bg-gradient-to-b from-gray-50 to-gray-100'
      } transition-colors duration-300`}
      style={{ width: '90%', maxWidth: '1200px', margin: '0 auto' }}
    >
      <div className={`space-y-16 ${spacing.container}`}>
        {/* About Me Section */}
        <motion.section
          className={`${spacing.section} ${colors.bg.secondary} rounded-2xl p-8`}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <div className={`p-8 rounded-2xl ${colors.bg.primary} shadow-lg`}>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div 
                className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-blue-500/20"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <img 
                  src={ProfileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="flex-1 text-center md:text-left">
                <h1 className={`${typography.h1} ${colors.text.primary} mb-2`}>
                  Niraj Kumar Tiwari
                </h1>
                <p className={`${typography.h5} ${colors.text.accent} mb-4`}>
                  Frontend Developer
                </p>
                <p className={`${typography.body1} ${colors.text.secondary} mb-6`}>
                  Passionate about creating beautiful, responsive, and user-friendly web applications. 
                  I love turning ideas into reality through clean and efficient code.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <a 
                    href="/contact" 
                    className={`px-5 py-2 rounded-full font-medium ${
                      darkMode 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-blue-100 hover:bg-blue-200 text-blue-800'
                    } ${transitions.default} ${transitions.hover} ${transitions.active}`}
                  >
                    Contact Me
                  </a>
                  <a 
                    href="#" 
                    onClick={handleDownload}
                    className={`px-5 py-2 rounded-full font-medium ${
                      darkMode 
                        ? 'bg-slate-700 hover:bg-slate-600 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    } ${transitions.default} ${transitions.hover} ${transitions.active}`}
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        {/* Work Experience Section */}
        <motion.section 
          className={`${spacing.section}`}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <h2 className={`${typography.h2} ${colors.text.primary} mb-8`}>
            Work Experience
          </h2>
          <div className="space-y-6">
            {resumeData.experience.map((exp, index) => renderExperience(exp, index))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section 
          className={`${spacing.section}`}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <h2 className={`${typography.h2} ${colors.text.primary} mb-8`}>
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {resumeData.education.map((edu, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-xl ${
                  darkMode ? `${colors.bg.secondary} hover:bg-opacity-80` : 'bg-white hover:bg-gray-50'
                } ${transitions.default} ${colors.border.primary} shadow-lg`}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl ${
                    darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'
                  }`}>
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h1 className={`${typography.h1} ${colors.text.primary} mb-2`}>
                      {edu.degree}
                    </h1>
                    <p className={`${typography.h5} ${colors.text.accent} mb-4`}>
                      {edu.institution}
                    </p>
                    <p className={`${typography.body1} ${colors.text.secondary} mb-6`}>
                      {edu.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    darkMode ? 'bg-slate-700/50 text-gray-200' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {edu.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="mb-16"
        >
          <h2 className={`${typography.h2} ${colors.text.primary} mb-8`}>
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(resumeData.skills).map(([category, skills], index) => (
              <motion.div 
                key={category}
                variants={itemVariants}
                className={`p-6 rounded-xl ${
                  darkMode ? `${colors.bg.secondary} hover:bg-opacity-80` : 'bg-white hover:bg-gray-50'
                } ${transitions.default} ${colors.border.primary} shadow-lg`}
              >
                <h3 className={`text-lg font-semibold mb-4 ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <span 
                      key={i}
                      className={`${typography.caption} px-3 py-1 rounded-full ${
                        darkMode 
                          ? 'bg-slate-700/50 text-blue-300' 
                          : 'bg-blue-50 text-blue-700'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Download Button */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.button
            onClick={handleDownload}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium ${
              darkMode 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-blue-100 hover:bg-blue-200 text-blue-800'
            } ${transitions.default} ${transitions.hover} ${transitions.active}`}
          >
            <Download size={18} />
            Download Resume
          </motion.button>
          <motion.a
            href="/contact"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium ${
              darkMode 
                ? 'bg-slate-800 text-gray-200 hover:bg-slate-700' 
                : 'bg-white text-gray-800 hover:bg-gray-50 shadow'
            } ${transitions.default} ${transitions.hover} ${transitions.active}`}
          >
            <Mail size={18} className="flex-shrink-0" />
            Contact Me
          </motion.a>
        </motion.div>
      </div>
      
      {/* Footer reference element */}
      <div ref={footerRef} className="h-1 w-full"></div>
    </div>
  );
};

export default ResumeSection;
