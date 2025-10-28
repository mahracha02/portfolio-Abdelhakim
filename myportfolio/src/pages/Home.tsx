import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import profilePic from '../assets/profile.png';
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub, 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaPhp, 
  FaDatabase, 
  FaGitAlt,
  FaRocket,
  FaStar,
  FaCode,
  FaLaptopCode,
  FaDownload,
  FaEye,
  FaHeart,
  FaGraduationCap,
  FaTimes
} from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiMongodb, SiMysql, SiSymfony, SiBootstrap, SiHtml5, SiCss3, SiDocker } from 'react-icons/si';
import CV from '../../public/files/Développeur Full-Stack.pdf';

const Home = () => {
  const { t } = useTranslation();
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const skills = [
    { icon: FaReact, name: 'React', color: '#61DAFB', level: 90 },
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E', level: 85 },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6', level: 80 },
    { icon: FaNodeJs, name: 'Node.js', color: '#339933', level: 75 },
    { icon: FaPhp, name: 'PHP', color: '#777BB4', level: 95 },
    { icon: SiBootstrap, name: 'Bootstrap', color: '#7952B3', level: 90 },
    { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4', level: 95 },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248', level: 75 },
    { icon: SiMysql, name: 'MySQL', color: '#4479A1', level: 95 },
    { icon: SiSymfony, name: 'Symfony', color: '#000000', level: 90 },
    { icon: FaGitAlt, name: 'Git', color: '#F05032', level: 95 },
    { icon: FaGithub, name: 'GitHub', color: '#752626ff', level: 90 },
    { icon: SiDocker, name: 'Docker', color: '#2496ED', level: 70 },
    { icon: SiHtml5, name: 'HTML5', color: '#E34F26', level: 100 },
    { icon: SiCss3, name: 'CSS3', color: '#1572B6', level: 90 },
    { icon: FaDatabase, name: 'Database', color: '#336791', level: 90 },
    { icon: FaPython, name: 'Python', color: '#3776AB', level: 30 },
  ];

  // Floating particles
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));

  // Personal stats
  const personalStats = [
    { labelKey: 'home.stats.projects', value: '10+', icon: FaCode },
    { labelKey: 'home.stats.technologies', value: '14+', icon: FaLaptopCode },
    { labelKey: 'home.stats.study', value: '3+', icon: FaGraduationCap },
    { labelKey: 'home.stats.passion', value: '100%', icon: FaHeart }
  ];

  // Social links with enhanced data
  const socialLinks = [
    { 
      icon: FaEnvelope, 
      href: 'mailto:abdelhakim22mahraccha@gmail.com', 
      label: 'Email',
      color: '#EA4335'
    },
    { 
      icon: FaLinkedin, 
      href: 'https://www.linkedin.com/in/abdelhakim-mahracha-b750a6298/', 
      label: 'LinkedIn',
      color: '#0077B5'
    },
    { 
      icon: FaGithub, 
      href: 'https://github.com/mahracha02', 
      label: 'GitHub',
      color: '#333'
    }
  ];

  // Auto-rotate skills every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [skills.length]);

  // Handle window resize for responsive orbital radius
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen py-8 px-4 relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Hero Section */}
        <div className="min-h-screen flex flex-col items-center justify-center">
          {/* Personal Stats Dashboard */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {personalStats.map((stat, index) => (
              <motion.div
                key={stat.labelKey}
                className="p-4 md:p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300 text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <stat.icon className="text-2xl md:text-3xl text-purple-400 mb-3 mx-auto" />
                <div className="text-xl md:text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-400 font-medium">{t(stat.labelKey)}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Hero Content */}
          <div className="flex flex-col xl:flex-row items-center justify-between gap-20 xl:gap-32 max-w-7xl mx-auto">
            {/* Enhanced Profile Section */}
            <motion.div
              className="relative flex flex-col items-center flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Animated Profile Container */}
              <div className="relative">
                {/* Floating Rings */}
                <motion.div
                  className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full border-2 border-purple-400/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-3 w-74 h-74 md:w-90 md:h-90 lg:w-[26rem] lg:h-[26rem] rounded-full border border-blue-400/20"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Profile Image */}
                <div className="relative w-72 h-72 md:w-88 md:h-88 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-purple-400/30 flex items-center justify-center shadow-2xl">
                  <motion.img 
                    src={profilePic} 
                    alt="Abdelhakim Mahracha" 
                    className="w-64 h-64 md:w-80 md:h-80 lg:w-88 lg:h-88 rounded-full object-cover border-4 border-white/10 shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Floating Skill Indicator */}
                  <motion.div
                    className="absolute -top-8 -right-[-4rem] md:-top-14 md:-right-2 p-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl shadow-lg"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <div className="text-center">
                      <div className="text-white font-bold text-sm">
                        {skills[currentSkillIndex].name}
                      </div>
                      <div className="text-white/80 text-xs">
                        {skills[currentSkillIndex].level}%
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Animated Tech Icons Around Profile */}
              {[0, 1, 2, 3, 4, 5].map((index) => {
                const skill = skills[index * 2];
                const IconComponent = skill.icon;
                const angle = (index * 60) * (Math.PI / 180);
                // Responsive radius: closer on mobile, further on desktop
                const radius = windowWidth < 768 ? 146 : windowWidth < 1024 ? 170 : 200;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <motion.div
                    key={skill.name}
                    className="absolute p-2  md:p-3 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-lg"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, delay: index * 0.3 }
                    }}
                    whileHover={{ scale: 1.2, z: 10 }}
                  >
                    <IconComponent 
                      className="text-2xl"
                      style={{ color: skill.color }}
                    />
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Enhanced Text Content */}
            <motion.div
              className="flex-1 flex flex-col items-center xl:items-start text-center xl:text-left max-w-3xl xl:ml-16"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6 tracking-tight leading-tight"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Abdelhakim
                <span className="block text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Mahracha
                </span>
              </motion.h1>
              
              <motion.div
                className="flex items-center space-x-3 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div className="p-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl">
                  <FaCode className="text-2xl text-purple-400" />
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-white">
                  {t('home.developer')}
                </h2>
              </motion.div>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {t('home.description')}
              </motion.p>
              
              {/* Enhanced Social Links */}
              <motion.div 
                className="flex space-x-6 justify-center lg:justify-start mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={() => setHoveredSocial(social.label)}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    <social.icon 
                      className="text-2xl text-gray-400 group-hover:text-white transition-colors duration-300"
                      style={{ color: hoveredSocial === social.label ? social.color : undefined }}
                    />
                  </motion.a>
                ))}
              </motion.div>
              
              {/* Enhanced CV Download Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href={CV}
                  download
                  className="group flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl text-white font-bold shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload className="group-hover:animate-bounce" />
                  <span>{t('home.downloadCV')}</span>
                </motion.a>
                
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center space-x-3 px-8 py-4 bg-gray-800/50 backdrop-blur-xl rounded-2xl text-gray-300 font-bold border border-gray-700/50 hover:text-white hover:border-purple-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEye />
                  <span>{t('home.viewPortfolio')}</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Skills Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4 pb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              {t('home.techStack')}
            </motion.h3>
            <motion.p 
              className="text-gray-400 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              {t('home.techDescription')}
            </motion.p>
          </div>

          {/* Enhanced Skills Grid */}
          <div className="relative overflow-hidden rounded-3xl">
            <motion.div
              className="flex gap-6 items-center py-8"
              animate={{ x: [0, -1920] }}
              transition={{ 
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ width: `${skills.length * 200}px` }}
            >
              {[...skills, ...skills, ...skills].map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={`${skill.name}-${index}`}
                    className="group flex-shrink-0 w-48 h-36 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 flex flex-col items-center justify-center p-6"
                    whileHover={{ 
                      scale: 1.05,
                      y: -10,
                      boxShadow: `0 20px 40px ${skill.color}20`
                    }}
                  >
                    <IconComponent 
                      className="text-4xl mb-4 transition-all duration-300 group-hover:scale-110" 
                      style={{ color: skill.color }}
                    />
                    <span className="text-white font-semibold text-sm text-center group-hover:text-purple-300 transition-colors duration-300">
                      {skill.name}
                    </span>
                    <div className="w-full bg-gray-700 rounded-full h-1 mt-3 overflow-hidden">
                      <motion.div
                        className="h-1 rounded-full"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: "0%" }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: 1.5 + index * 0.1, duration: 1 }}
                      />
                    </div>
                    <span className="text-xs text-gray-400 mt-1">{skill.level}%</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Enhanced Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          >
            <div className="text-center p-8 bg-gradient-to-br from-purple-500/10 via-purple-600/10 to-purple-700/10 backdrop-blur-xl rounded-3xl border border-purple-700/30 shadow-2xl">
              <div className="text-4xl font-bold text-purple-300 mb-3">14+</div>
              <div className="text-gray-300 text-lg font-medium">{t('skills.technologies', 'Technologies')}</div>
              <div className="mt-4 flex justify-center space-x-2">
                {[FaReact, SiJavascript, FaNodeJs].map((Icon, i) => (
                  <Icon key={i} className="text-purple-400 text-xl" />
                ))}
              </div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-blue-500/10 via-blue-600/10 to-blue-700/10 backdrop-blur-xl rounded-3xl border border-blue-700/30 shadow-2xl">
              <div className="text-4xl font-bold text-blue-300 mb-3">4+</div>
              <div className="text-gray-300 text-lg font-medium">{t('skills.frameworks', 'Frameworks')}</div>
              <div className="mt-4 flex justify-center space-x-2">
                {[SiTailwindcss, SiBootstrap, SiSymfony].map((Icon, i) => (
                  <Icon key={i} className="text-blue-400 text-xl" />
                ))}
              </div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-green-500/10 via-green-600/10 to-green-700/10 backdrop-blur-xl rounded-3xl border border-green-700/30 shadow-2xl">
              <div className="text-4xl font-bold text-green-300 mb-3">3+</div>
              <div className="text-gray-300 text-lg font-medium">{t('skills.databases', 'Databases')}</div>
              <div className="mt-4 flex justify-center space-x-2">
                {[SiMysql, SiMongodb, FaDatabase].map((Icon, i) => (
                  <Icon key={i} className="text-green-400 text-xl" />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="text-center mt-32"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className="relative p-8 md:p-12 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5 backdrop-blur-xl rounded-3xl border border-purple-500/20 max-w-4xl mx-auto overflow-hidden">
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 opacity-50"></div>
            
            <div className="relative z-10">
              <motion.div
                className="inline-block p-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaRocket className="text-4xl text-purple-400" />
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
                {t('home.ctaSection.title')}
              </h3>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                {t('home.ctaSection.subtitle')}
              </p>
              
              <motion.div
                className="flex items-center justify-center space-x-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
              >
                {[FaStar, FaHeart, FaRocket].map((Icon, index) => (
                  <motion.div
                    key={index}
                    className="p-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 2,
                      delay: index * 0.2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <Icon className="text-2xl text-purple-400" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* PDF Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                <h3 className="text-xl font-bold">CV - Abdelhakim Mahracha</h3>
                <motion.button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes className="text-xl" />
                </motion.button>
              </div>

              {/* PDF Viewer */}
              <div className="w-full h-full">
                <iframe
                  src={`${CV}#toolbar=1&navpanes=1&scrollbar=1&page=1&view=FitH`}
                  className="w-full h-full border-none"
                  title="CV - Abdelhakim Mahracha"
                />
              </div>

              {/* Modal Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900/90 to-transparent">
                <div className="flex items-center justify-center space-x-4">
                  <motion.a
                    href={CV}
                    download
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaDownload />
                    <span>{t('home.modal.download')}</span>
                  </motion.a>
                  <motion.a
                    href={CV}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaEye />
                    <span>{t('home.modal.openNewTab')}</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home; 