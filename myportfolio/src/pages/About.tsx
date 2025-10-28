import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { 
  FaGraduationCap, 
  FaBriefcase, 
  FaCode, 
  FaRocket, 
  FaStar, 
  FaCalendarAlt,
  FaBuilding,
  FaLaptopCode,
  FaAward,
  FaUser,
  FaHeart,
  FaLightbulb
} from 'react-icons/fa';

const education = [
  {
    degree: 'MBA Développeur Full-Stack',
    school: 'MyDigitalSchool',
    years: '2025 – 2027',
  },
  {
    degree: 'Bachelor Développeur Web',
    school: 'MyDigitalSchool - Toulouse',
    years: '2024 – 2025',
  },
  {
    degree: 'BTS SIO Option SLAM',
    school: 'Lycée Suzanne Valadon - Limoges',
    years: '2022 – 2024',
  },
];

const experience = [
  {
    title: 'Développeur Full-Stack',
    company: 'Galerie d’art Toulousaine',
    period: 'Février 2025 - Octobre 2025',
    description: 'Développement d’une application web pour la gestion des expositions, des évènements et des artistes. Stack: Symfony, React, PHP, JavaScript, Tailwind.'
  },
  {
    title: 'Développeur Full-Stack',
    company: 'École 3IL – Limoges',
    period: 'janvier 2024 - Mars 2024',
    description: 'Développement d’une application web d’analyse médicale en modèle MVC. Stack: HTML, CSS, Bootstrap, PHP.'
  },
  {
    title: 'Développeur Web',
    company: 'Broussaud Textiles – Limoges',
    period: 'Mai 2023 - Juillet 2023',
    description: 'Développement de requêtes MySQL en PHP pour la gestion des stocks. Stack: HTML, Bootstrap, JavaScript, PHP.'
  },
];

const About = () => {
  const { t } = useTranslation();
  const [hoveredEducation, setHoveredEducation] = useState<number | null>(null);
  const [hoveredExperience, setHoveredExperience] = useState<number | null>(null);

  // Floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));

  // Personal stats
  const personalStats = [
    { label: 'Years of Learning', value: '3+', icon: FaLightbulb },
    { label: 'Projects Completed', value: '7+', icon: FaCode },
    { label: 'Technologies', value: '14+', icon: FaLaptopCode },
    { label: 'Passion Level', value: '100%', icon: FaHeart }
  ];

  // Get translated data with proper typing
  const educationData = (t('about.education.degrees', { returnObjects: true }) as typeof education) || education;
  const experienceData = (t('about.experience.jobs', { returnObjects: true }) as typeof experience) || experience;

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
        {/* Ultra-Modern Header Section */}
        <div className="text-center mb-20">
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="p-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl backdrop-blur-sm border border-purple-500/20">
              <FaUser className="text-4xl text-purple-400 mx-auto" />
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-8 tracking-tight pb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t('about.title', 'About Me')}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('about.description')}
          </motion.p>

          {/* Personal Stats Dashboard */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {personalStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="p-4 md:p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <stat.icon className="text-2xl md:text-3xl text-purple-400 mb-3 mx-auto" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl mr-4">
                  <FaGraduationCap className="text-2xl text-purple-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {t('about.education.title', 'Education')}
                </h2>
              </div>
            </div>
            
            <div className="space-y-6">
              {educationData.map((edu, idx) => (
                <motion.div
                  key={idx}
                  className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 p-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 + 0.5 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  onMouseEnter={() => setHoveredEducation(idx)}
                  onMouseLeave={() => setHoveredEducation(null)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl border border-purple-500/30 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                      <FaAward className="text-purple-400 text-xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 mb-2">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <FaBuilding className="text-purple-400" />
                        <span className="text-purple-300 font-semibold">{edu.school}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaCalendarAlt className="text-blue-400" />
                        <span className="text-gray-400 text-sm">{edu.years}</span>
                      </div>
                    </div>
                    {hoveredEducation === idx && (
                      <motion.div
                        className="flex-shrink-0"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaStar className="text-yellow-400 text-xl" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl mr-4">
                  <FaBriefcase className="text-2xl text-blue-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {t('about.experience.title', 'Experience')}
                </h2>
              </div>
            </div>
            
            <div className="space-y-6">
              {experienceData.map((exp, idx) => (
                <motion.div
                  key={idx}
                  className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 p-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 + 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  onMouseEnter={() => setHoveredExperience(idx)}
                  onMouseLeave={() => setHoveredExperience(null)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl border border-blue-500/30 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                      <FaLaptopCode className="text-blue-400 text-xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <FaBuilding className="text-blue-400" />
                        <span className="text-blue-300 font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-2 mb-3">
                        <FaCalendarAlt className="text-cyan-400" />
                        <span className="text-gray-400 text-sm">{exp.period}</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-sm group-hover:text-white transition-colors duration-300">
                        {exp.description}
                      </p>
                    </div>
                    {hoveredExperience === idx && (
                      <motion.div
                        className="flex-shrink-0"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaRocket className="text-blue-400 text-xl" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="text-center mt-32"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
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
                Passionné par l'Innovation
              </h3>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Toujours prêt à relever de nouveaux défis technologiques
              </p>
              
              <motion.div
                className="flex items-center justify-center space-x-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                {[FaStar, FaAward, FaHeart].map((Icon, index) => (
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
    </div>
  );
};

export default About; 