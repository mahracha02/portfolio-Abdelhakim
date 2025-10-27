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
  FaGlobe
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

  // Language toggle
  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      y: -50,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    },
    exit: { opacity: 0, y: -20, scale: 0.8 },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { type: 'spring', stiffness: 400, damping: 17 }
    },
    exit: { opacity: 0, scale: 0, rotate: 180 },
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-lg border-b border-purple-500/20 shadow-lg shadow-purple-500/10' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/" 
              className="flex items-center space-x-3 group"
            >
              {/* Tech Icon/Symbol */}
              <div className="relative">
                <motion.div 
                  className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300"
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
                >
                  <FaCode className="text-white text-lg" />
                </motion.div>
                
                {/* Floating particles */}
                <motion.div 
                  className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
                <motion.div 
                  className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-300 rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
              </div>

              {/* Text Logo */}
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-blue-300 transition-all duration-300">
                  Abdelhakim
                </span>
                <span className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 tracking-wider uppercase">
                  Full Stack Dev
                </span>
              </div>

              {/* Binary decoration */}
              <motion.div 
                className="hidden md:flex flex-col text-xs text-purple-400/30 font-mono leading-none ml-2"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span>101</span>
                <span>010</span>
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => {
              const IconComponent = link.icon;
              const isActive = location.pathname === link.path;
              
              return (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`group flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-purple-500/20 text-purple-300 shadow-lg shadow-purple-500/25'
                        : 'text-gray-300 hover:text-purple-300 hover:bg-purple-500/10'
                    }`}
                  >
                    <IconComponent className={`text-sm transition-transform duration-300 ${
                      isActive ? 'scale-110' : 'group-hover:scale-110'
                    }`} />
                    <span className="text-sm font-medium">{link.label}</span>
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 w-1 h-1 bg-purple-400 rounded-full"
                        layoutId="activeIndicator"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Language Toggle & Social Icons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300 border border-purple-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGlobe className="text-sm" />
              <span className="text-sm font-medium uppercase">{i18n.language}</span>
            </motion.button>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 border-l border-gray-600 pl-4">
              {[
                { href: 'mailto:abdelhakim22mahracha@gmail.com', icon: FaEnvelope, label: 'Email' },
                { href: 'https://linkedin.com/in/abdelhakim-mahracha', icon: FaLinkedin, label: 'LinkedIn' },
                { href: 'https://github.com/mahracha02', icon: FaGithub, label: 'GitHub' },
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full text-gray-400 hover:text-purple-300 hover:bg-purple-500/20 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <IconComponent className="text-lg" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden relative z-[200] p-2 rounded-full bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes className="text-xl" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars className="text-xl" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[150] bg-gray-900/98 backdrop-blur-xl lg:hidden"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Animated background elements */}
            <motion.div 
              className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
            <motion.div 
              className="absolute bottom-32 right-12 w-24 h-24 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl"
              animate={{ 
                scale: [1.2, 1, 1.2],
                x: [0, 30, 0],
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />

            <div className="flex flex-col items-center justify-center min-h-screen px-8">
              {/* Navigation Links */}
              <motion.div 
                className="flex flex-col items-center space-y-6 mb-12"
                variants={menuVariants}
              >
                {navLinks.map((link) => {
                  const IconComponent = link.icon;
                  const isActive = location.pathname === link.path;
                  
                  return (
                    <motion.div
                      key={link.path}
                      variants={linkVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to={link.path}
                        className={`flex items-center space-x-4 px-6 py-3 rounded-2xl transition-all duration-300 ${
                          isActive
                            ? 'bg-gradient-to-r from-purple-500/30 to-blue-500/30 text-white shadow-lg shadow-purple-500/25'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        <IconComponent className={`text-xl ${isActive ? 'text-purple-300' : ''}`} />
                        <span className="text-xl font-medium">{link.label}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Language Toggle */}
              <motion.div
                variants={linkVariants}
                className="mb-8"
              >
                <motion.button
                  onClick={() => {
                    toggleLanguage();
                    setMenuOpen(false);
                  }}
                  className="flex items-center space-x-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300 border border-purple-500/30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGlobe className="text-lg" />
                  <span className="text-lg font-medium">
                    {i18n.language === 'fr' ? 'Français' : 'English'}
                  </span>
                </motion.button>
              </motion.div>

              {/* Social Icons */}
              <motion.div 
                className="flex items-center space-x-6"
                variants={menuVariants}
              >
                {[
                  { href: 'mailto:abdelhakim22mahracha@gmail.com', icon: FaEnvelope },
                  { href: 'https://linkedin.com/in/abdelhakim-mahracha', icon: FaLinkedin },
                  { href: 'https://github.com/mahracha02', icon: FaGithub },
                ].map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-full bg-white/5 text-purple-300 hover:text-white hover:bg-purple-500/20 transition-all duration-300"
                      variants={iconVariants}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconComponent className="text-2xl" />
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
