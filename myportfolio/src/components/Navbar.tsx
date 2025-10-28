import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  FaBars, 
  FaTimes, 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub, 
  FaHome,
  FaUser,
  FaCode,
  FaGraduationCap,
  FaCogs,
  FaEye,
  FaPhone,
  FaGlobe,
  FaMicrochip
} from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: t('nav.home'), icon: FaHome },
    { path: '/about', label: t('nav.about'), icon: FaUser },
    { path: '/internships', label: t('nav.internships'), icon: FaGraduationCap },
    { path: '/projects', label: t('nav.projects'), icon: FaCode },
    { path: '/skills', label: t('nav.skills'), icon: FaCogs },
    { path: '/tech-watch', label: t('nav.techWatch'), icon: FaEye },
    { path: '/contact', label: t('nav.contact'), icon: FaPhone },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  // Language toggle
  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };



  return (
    <>
      {/* Floating Particles Background */}
      <div className="fixed inset-0 pointer-events-none z-[1]">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: '10px',
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Principal Navbar */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-black/80 backdrop-blur-2xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/20' 
            : 'bg-gradient-to-r from-gray-900/60 via-black/70 to-gray-900/60 backdrop-blur-xl'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
        style={{
          background: scrolled 
            ? 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(17,24,39,0.95) 50%, rgba(0,0,0,0.9) 100%)'
            : 'linear-gradient(135deg, rgba(17,24,39,0.7) 0%, rgba(0,0,0,0.8) 50%, rgba(17,24,39,0.7) 100%)',
          backdropFilter: 'blur(20px)',
          borderImage: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.5), transparent) 1',
        }}
      >
        <div className="container mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Ultra-Modern Logo */}
            <motion.div 
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
            <Link 
              to="/" 
              className="flex items-center space-x-6 group relative"
            >
              {/* Futuristic Tech Icon */}
              <div className="relative">
                {/* Main Logo Container */}
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/30 border border-cyan-400/30"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1,
                    boxShadow: "0 0 40px rgba(6,182,212,0.6)"
                  }}
                  transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
                >
                  <FaMicrochip className="text-white text-xl" />
                </motion.div>
                
                {/* Orbital Rings */}
                <motion.div 
                  className="absolute inset-0 w-12 h-12 border border-cyan-400/20 rounded-2xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute -inset-1 w-14 h-14 border border-blue-400/10 rounded-2xl"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Floating Tech Particles */}
                <motion.div 
                  className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                  animate={{ 
                    scale: [1, 1.4, 1],
                    opacity: [0.7, 1, 0.7],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
                <motion.div 
                  className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.6, 1],
                    opacity: [0.5, 0.9, 0.5],
                    y: [0, -8, 0]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                />

                {/* Energy Pulses */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 w-20 h-20 border border-cyan-400/10 rounded-full -translate-x-1/2 -translate-y-1/2"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeOut" 
                  }}
                />
              </div>

              {/* Enhanced Text Logo */}
              <div className="flex flex-col relative">
                <motion.span 
                  className="text-xl md:text-2xl lg:text-3xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:from-cyan-200 group-hover:via-blue-300 group-hover:to-purple-400 transition-all duration-500"
                  whileHover={{ scale: 1.02 }}
                >
                  Abdelhakim
                </motion.span>
                <div className="flex items-center space-x-3">
                  <motion.span 
                    className="text-xs md:text-sm text-cyan-400/80 group-hover:text-cyan-300 transition-colors duration-500 tracking-[0.2em] uppercase font-semibold"
                    animate={{ 
                      opacity: [0.8, 1, 0.8],
                      letterSpacing: ["0.2em", "0.25em", "0.2em"]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    Full Stack Developer
                  </motion.span>
                  

                </div>
                
                {/* Futuristic Underline */}
                <motion.div 
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              {/* Advanced Binary Matrix */}
              <motion.div 
                className="hidden lg:flex flex-col text-xs text-cyan-400/40 font-mono leading-tight ml-4"
                animate={{ 
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                >
                  1101
                </motion.span>
                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                >
                  0110
                </motion.span>
                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                >
                  1010
                </motion.span>
              </motion.div>

              {/* Simple ONLINE Status - Next to Logo */}
              <div className="hidden md:flex items-center space-x-2 ml-6">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm font-medium text-green-400 uppercase tracking-wide">ONLINE</span>
              </div>


            </Link>
          </motion.div>

            {/* Contact Link & Language Toggle & Social Icons */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              {/* Contact Link */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.2, 
                  type: 'spring',
                  stiffness: 300,
                  damping: 20
                }}
                className="relative"
              >
                <Link
                  to="/contact"
                  className={`group relative flex items-center space-x-2 lg:space-x-3 px-4 lg:px-6 py-2 lg:py-3 rounded-2xl transition-all duration-500 overflow-hidden ${
                    location.pathname === '/contact'
                      ? 'bg-gradient-to-r from-cyan-500/20 via-blue-500/25 to-purple-600/20 text-cyan-300 shadow-lg shadow-cyan-500/30 border border-cyan-400/30'
                      : 'text-gray-300 hover:text-cyan-300 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:via-blue-500/15 hover:to-purple-600/10 hover:shadow-lg hover:shadow-cyan-500/20 hover:border hover:border-cyan-400/20'
                  }`}
                >
                  {/* Background Animation */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-blue-500/5 to-purple-600/0"
                    animate={location.pathname === '/contact' ? {
                      x: ['-100%', '100%'],
                      opacity: [0, 0.3, 0]
                    } : {}}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Icon with Advanced Animation */}
                  <motion.div
                    className="relative z-10"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: location.pathname === '/contact' ? 0 : 5,
                    }}
                    animate={location.pathname === '/contact' ? {
                      scale: [1, 1.1, 1],
                      rotate: [0, 3, -3, 0]
                    } : {}}
                    transition={{
                      duration: location.pathname === '/contact' ? 2 : 0.3,
                      repeat: location.pathname === '/contact' ? Infinity : 0,
                      ease: "easeInOut"
                    }}
                  >
                    <FaPhone className={`text-sm md:text-base lg:text-lg transition-all duration-300 ${
                      location.pathname === '/contact' ? 'text-cyan-300 drop-shadow-lg' : 'group-hover:text-cyan-300'
                    }`} />
                  </motion.div>
                  
                  {/* Text with Glow Effect */}
                  <motion.span 
                    className={`text-xs md:text-sm lg:text-sm font-semibold tracking-wide relative z-10 ${
                      location.pathname === '/contact' ? 'text-cyan-200' : 'group-hover:text-cyan-200'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {t('nav.contact')}
                    {location.pathname === '/contact' && (
                      <motion.span
                        className="absolute inset-0 text-cyan-300/50 blur-sm"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {t('nav.contact')}
                      </motion.span>
                    )}
                  </motion.span>

                  {/* Active Indicator */}
                  {location.pathname === '/contact' && (
                    <>
                      <motion.div
                        className="absolute bottom-1 left-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"
                        layoutId="activeIndicator"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        style={{ x: '-50%' }}
                      />
                      <motion.div
                        className="absolute top-1 right-1 w-2 h-2 bg-cyan-400 rounded-full opacity-60"
                        animate={{ 
                          scale: [1, 1.3, 1],
                          opacity: [0.6, 1, 0.6]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </>
                  )}

                  {/* Hover Particles */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${20 + i * 20}%`,
                        }}
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0, 1, 0],
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </motion.div>
                </Link>
              </motion.div>

              {/* Separator */}
              <div className="w-px h-8 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"></div>

              {/* Language Toggle & Social Icons Container */}
              <div className="flex items-center space-x-4 lg:space-x-6">
            {/* Futuristic Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              className="relative flex items-center space-x-2 px-3  py-2 rounded-2xl bg-gradient-to-r from-cyan-500/15 via-blue-500/20 to-purple-600/15 text-cyan-300 hover:from-cyan-500/25 hover:via-blue-500/30 hover:to-purple-600/25 transition-all duration-500 border border-cyan-400/25 hover:border-cyan-400/40 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Background Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-500/15 to-purple-600/10"
                animate={{
                  x: ['-100%', '100%'],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <FaGlobe className="text-lg relative z-10" />
              </motion.div>
              
              <span className="text-xs lg:text-sm font-bold uppercase tracking-wider relative z-10 group-hover:text-cyan-200">
                {i18n.language}
              </span>
              
              {/* Orbital Ring */}
              <motion.div
                className="absolute inset-0 border border-cyan-400/20 rounded-2xl"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
            </motion.button>

            {/* Enhanced Social Icons */}
            <div className="flex items-center space-x-3  border-l border-gradient-to-b from-transparent via-cyan-400/30 to-transparent pl-4 relative">
              {/* Animated Border */}
              <motion.div 
                className="absolute left-0 top-1/2 w-px h-8 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent"
                animate={{ 
                  opacity: [0.3, 1, 0.3],
                  height: [20, 32, 20]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ transform: 'translateY(-50%)' }}
              />
              
              {[
                { 
                  href: 'mailto:abdelhakim22mahracha@gmail.com', 
                  icon: FaEnvelope, 
                  label: 'Email',
                  color: 'from-red-400 to-orange-400',
                  hoverColor: 'red-400'
                },
                { 
                  href: 'https://www.linkedin.com/in/abdelhakim-mahracha-b750a6298/', 
                  icon: FaLinkedin, 
                  label: 'LinkedIn',
                  color: 'from-blue-400 to-cyan-400',
                  hoverColor: 'blue-400'
                },
                { 
                  href: 'https://github.com/mahracha02', 
                  icon: FaGithub, 
                  label: 'GitHub',
                  color: 'from-gray-400 to-slate-300',
                  hoverColor: 'gray-300'
                },
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.div
                    key={social.href}
                    className="relative group"
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      delay: 0.8 + index * 0.15,
                      type: 'spring',
                      stiffness: 300,
                      damping: 20
                    }}
                  >
                    <motion.a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative p-2 lg:p-3 rounded-2xl bg-gradient-to-br ${social.color}/10 hover:${social.color}/20 border border-${social.hoverColor}/20 hover:border-${social.hoverColor}/40 shadow-lg hover:shadow-${social.hoverColor}/25 transition-all duration-500 flex items-center justify-center group overflow-hidden`}
                      whileHover={{ 
                        scale: 1.15, 
                        y: -5,
                        rotate: 5
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {/* Glow Effect */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${social.color}/20 opacity-0 group-hover:opacity-100 blur-xl`}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Icon */}
                      <IconComponent className={`text-lg lg:text-xl text-${social.hoverColor} relative z-10 group-hover:text-white transition-colors duration-300`} />
                      
                      {/* Hover Particles */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      >
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className={`absolute w-1 h-1 bg-${social.hoverColor} rounded-full`}
                            style={{
                              left: `${20 + i * 20}%`,
                              top: `${20 + i * 20}%`,
                            }}
                            animate={{
                              y: [0, -15, 0],
                              opacity: [0, 1, 0],
                              scale: [1, 1.5, 1],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </motion.div>

                      {/* Tooltip */}
                      <motion.div
                        className="absolute -top-12 left-1/2 px-3 py-1 bg-gray-900/90 text-white text-xs rounded-lg border border-cyan-400/30 whitespace-nowrap opacity-0 group-hover:opacity-100 backdrop-blur-sm"
                        style={{ transform: 'translateX(-50%)' }}
                        initial={{ y: 10, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {social.label}
                        <div className="absolute top-full left-1/2 w-2 h-2 bg-gray-900 border-r border-b border-cyan-400/30 transform rotate-45 -translate-x-1/2 -translate-y-1/2" />
                      </motion.div>
                    </motion.a>
                  </motion.div>
                );
              })}
              </div>
            </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Independent Mobile Menu Button - Always Visible */}
      <motion.button
        className="md:hidden fixed top-4 right-4 z-[10000] p-3 rounded-full bg-cyan-500/30 text-cyan-200 hover:bg-cyan-500/50 transition-all duration-300 border-2 border-cyan-400/60 shadow-lg shadow-cyan-500/50"
        onClick={() => setMenuOpen(!menuOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ 
          position: 'fixed',
          top: '16px',
          right: '16px',
          zIndex: 10000,
          backgroundColor: menuOpen ? 'rgba(6, 182, 212, 0.5)' : 'rgba(6, 182, 212, 0.3)',
          boxShadow: '0 0 20px rgba(6, 182, 212, 0.6)'
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {menuOpen ? (
            <motion.div
              key="close-btn"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaTimes 
                className="text-2xl font-black" 
                style={{ 
                  color: '#ffffff',
                  textShadow: '0 0 15px rgba(0, 255, 255, 1)',
                  filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.8))'
                }} 
              />
            </motion.div>
          ) : (
            <motion.div
              key="menu-btn"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaBars className="text-xl text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Ultra-Modern Sub-Menu Navigation */}
      <motion.div 
        className={`fixed top-20 left-0 right-0 z-40 hidden md:block transition-all duration-500 mb-12 ${
          scrolled 
            ? 'bg-black/70 backdrop-blur-xl border-b border-cyan-500/20 shadow-xl shadow-cyan-500/10' 
            : 'bg-gradient-to-r from-gray-900/40 via-black/50 to-gray-900/40 backdrop-blur-lg'
        }`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, type: 'spring', stiffness: 150 }}
        style={{
          background: scrolled 
            ? 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(17,24,39,0.85) 50%, rgba(0,0,0,0.8) 100%)'
            : 'linear-gradient(135deg, rgba(17,24,39,0.5) 0%, rgba(0,0,0,0.6) 50%, rgba(17,24,39,0.5) 100%)',
          backdropFilter: 'blur(15px)',
          borderImage: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.3), transparent) 1',
        }}
      >
        <div className="container mx-auto py-3">
          <div className="flex items-center justify-center">
            {/* Navigation Links excluding Contact */}
            <div className="flex items-center space-x-1 lg:space-x-2">
              {navLinks.filter(link => link.path !== '/contact').map((link, index) => {
                const IconComponent = link.icon;
                const isActive = location.pathname === link.path;
                
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: -20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      delay: index * 0.08, 
                      type: 'spring',
                      stiffness: 250,
                      damping: 25
                    }}
                    className="relative"
                  >
                    <Link
                      to={link.path}
                      className={`group relative flex items-center space-x-2 px-3 lg:px-4 py-2 rounded-xl transition-all duration-400 overflow-hidden ${
                        isActive
                          ? 'bg-gradient-to-r from-cyan-500/15 via-blue-500/20 to-purple-600/15 text-cyan-300 shadow-md shadow-cyan-500/20 border border-cyan-400/25'
                          : 'text-gray-400 hover:text-cyan-300 hover:bg-gradient-to-r hover:from-cyan-500/8 hover:via-blue-500/12 hover:to-purple-600/8 hover:shadow-md hover:shadow-cyan-500/15 hover:border hover:border-cyan-400/15'
                      }`}
                    >
                      {/* Background Shimmer */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-blue-500/3 to-purple-600/0"
                        animate={isActive ? {
                          x: ['-100%', '100%'],
                          opacity: [0, 0.2, 0]
                        } : {}}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />

                      {/* Icon with Subtle Animation */}
                      <motion.div
                        className="relative z-10"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: isActive ? 0 : 3,
                        }}
                        animate={isActive ? {
                          scale: [1, 1.05, 1],
                          rotate: [0, 2, -2, 0]
                        } : {}}
                        transition={{
                          duration: isActive ? 3 : 0.2,
                          repeat: isActive ? Infinity : 0,
                          ease: "easeInOut"
                        }}
                      >
                        <IconComponent className={`text-sm lg:text-base transition-all duration-300 ${
                          isActive ? 'text-cyan-300 drop-shadow-sm' : 'group-hover:text-cyan-300'
                        }`} />
                      </motion.div>
                      
                      {/* Text with Subtle Glow */}
                      <motion.span 
                        className={`text-xs lg:text-sm font-medium tracking-wide relative z-10 ${
                          isActive ? 'text-cyan-200' : 'group-hover:text-cyan-200'
                        }`}
                        whileHover={{ scale: 1.02 }}
                      >
                        {link.label}
                        {isActive && (
                          <motion.span
                            className="absolute inset-0 text-cyan-300/30 blur-sm"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 3, repeat: Infinity }}
                          >
                            {link.label}
                          </motion.span>
                        )}
                      </motion.span>

                      {/* Active Indicator */}
                      {isActive && (
                        <>
                          <motion.div
                            className="absolute bottom-0.5 left-1/2 w-6 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"
                            layoutId="subActiveIndicator"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: 'spring', stiffness: 250, damping: 25 }}
                            style={{ x: '-50%' }}
                          />
                          <motion.div
                            className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-50"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              opacity: [0.5, 0.8, 0.5]
                            }}
                            transition={{ duration: 2.5, repeat: Infinity }}
                          />
                        </>
                      )}

                      {/* Hover Micro-Particles */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {[...Array(2)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-0.5 h-0.5 bg-cyan-400/50 rounded-full"
                            style={{
                              left: `${25 + i * 30}%`,
                              top: `${25 + i * 25}%`,
                            }}
                            animate={{
                              y: [0, -6, 0],
                              opacity: [0, 0.8, 0],
                              scale: [1, 1.3, 1],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Spacer for Sub-Menu - Ensures content doesn't overlap */}
      <div className="hidden md:block h-16 mt-12"></div>

      {/* Ultra-Modern Mobile Menu Overlay - Full Screen */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen z-[9998] bg-black/95 backdrop-blur-2xl md:hidden overflow-hidden "
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              zIndex: 9998
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Advanced Animated Background */}
            <div className="absolute inset-0">
              {/* Matrix Grid */}
              <motion.div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, cyan 1px, transparent 0)`,
                  backgroundSize: '50px 50px',
                }}
                animate={{ 
                  backgroundPosition: ['0px 0px', '50px 50px'],
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              />

              {/* Floating Orbs */}
              <motion.div 
                className="absolute top-20 left-10 w-40 h-40 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/30 to-purple-600/20 blur-3xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 360],
                  x: [0, 50, 0],
                  y: [0, -30, 0]
                }}
                transition={{ 
                  duration: 12, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              <motion.div 
                className="absolute bottom-32 right-12 w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/25 via-cyan-500/30 to-blue-500/25 blur-2xl"
                animate={{ 
                  scale: [1.2, 0.8, 1.2],
                  rotate: [360, 0],
                  x: [0, -40, 0],
                  y: [0, 40, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              <motion.div 
                className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/25 blur-xl"
                animate={{ 
                  scale: [0.8, 1.4, 0.8],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 2
                }}
              />

              {/* Scanning Lines */}
              <motion.div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.1) 50%, transparent 100%)',
                  width: '200%',
                }}
                animate={{ x: ['-100%', '0%'] }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full min-h-screen px-6 py-20"
                 style={{ width: '100vw', height: '100vh' }}>
              {/* Navigation Links */}
              <motion.div 
                className="flex flex-col items-center justify-center space-y-6 mb-10 mt-6 w-full max-w-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {navLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  const isActive = location.pathname === link.path;
                  
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative group"
                    >
                      <Link
                        to={link.path}
                        className={`relative flex items-center justify-center space-x-4 pl-2 pr-4 py-4 rounded-2xl transition-all duration-500 overflow-hidden w-full max-w-xs ${
                          isActive
                            ? 'bg-gradient-to-r from-cyan-500/30 via-blue-500/35 to-purple-600/30 text-cyan-200 shadow-2xl shadow-cyan-500/30 border border-cyan-400/40'
                            : 'text-gray-300 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-500/15 hover:via-blue-500/20 hover:to-purple-600/15 hover:border hover:border-cyan-400/25'
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {/* Background Shimmer */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                          animate={isActive ? {
                            x: ['-100%', '100%'],
                            opacity: [0, 0.3, 0]
                          } : {}}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.3
                          }}
                        />

                        <motion.div
                          className="relative z-10"
                          animate={isActive ? {
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.1, 1]
                          } : {}}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          >
                            <IconComponent className={`text-xl ${isActive ? 'text-cyan-300' : 'group-hover:text-cyan-300'}`} />
                          </motion.div>
                        
                        <span className={`text-lg font-semibold tracking-wide ${isActive ? 'text-cyan-100' : 'group-hover:text-cyan-100'}`}>
                          {link.label}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Mobile ONLINE Status - Simple */}
              <div className="flex items-center justify-center space-x-2 mb-6">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm font-medium text-green-400 uppercase tracking-wide">ONLINE</span>
              </div>

              {/* Enhanced Language Toggle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="mb-8"
              >
                <motion.button
                  onClick={() => {
                    toggleLanguage();
                    setMenuOpen(false);
                  }}
                  className="relative flex items-center justify-center space-x-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/25 to-purple-600/20 text-cyan-300 hover:from-cyan-500/30 hover:via-blue-500/35 hover:to-purple-600/30 transition-all duration-500 border border-cyan-400/30 hover:border-cyan-400/50 shadow-lg shadow-cyan-500/25 overflow-hidden group w-full max-w-xs"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <FaGlobe className="text-2xl" />
                  </motion.div>
                  <span className="text-base font-semibold">
                    {i18n.language === 'fr' ? 'Français' : 'English'}
                  </span>
                  
                  {/* Orbital Ring */}
                  <motion.div
                    className="absolute inset-0 border border-cyan-400/20 rounded-3xl"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  />
                </motion.button>
              </motion.div>

              {/* Ultra-Modern Social Icons */}
              <motion.div 
                className="flex items-center justify-center space-x-6 w-full mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {[
                  { 
                    href: 'mailto:abdelhakim22mahracha@gmail.com', 
                    icon: FaEnvelope,
                    color: 'from-red-400 to-orange-400'
                  },
                  { 
                    href: 'https://linkedin.com/in/abdelhakim-mahracha', 
                    icon: FaLinkedin,
                    color: 'from-blue-400 to-cyan-400'
                  },
                  { 
                    href: 'https://github.com/mahracha02', 
                    icon: FaGithub,
                    color: 'from-gray-400 to-slate-300'
                  },
                ].map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative p-4 rounded-2xl bg-gradient-to-br ${social.color}/10 hover:${social.color}/25 border border-white/10 hover:border-white/25 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 }}
                      whileHover={{ 
                        scale: 1.15, 
                        y: -8,
                        rotate: 10
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {/* Glow Effect */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${social.color}/20 opacity-0 group-hover:opacity-100 blur-xl`}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <IconComponent className="text-2xl text-white relative z-10" />
                      
                      {/* Orbital Particles */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      >
                        {[...Array(4)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-white/60 rounded-full"
                            style={{
                              left: `${20 + i * 20}%`,
                              top: `${20 + i * 20}%`,
                            }}
                            animate={{
                              rotate: [0, 360],
                              scale: [1, 1.5, 1],
                              opacity: [0.4, 1, 0.4],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.3,
                            }}
                          />
                        ))}
                      </motion.div>
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
