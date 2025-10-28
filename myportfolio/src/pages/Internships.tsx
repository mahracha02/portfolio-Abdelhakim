import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaCode, 
  FaBuilding,
  FaArrowRight,
  FaStar,
  FaLaptopCode,
  FaProjectDiagram,
  FaClock,
  FaAward,
  FaRocket,
  FaTrophy
} from 'react-icons/fa';

const Internships = () => {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<number>(0);
  
  // Get experiences from translation files
  const experiences = t('internships.experiences', { returnObjects: true }) as Array<{
    title: string;
    company: string;
    location: string;
    period: string;
    description: string;
    technologies: string[];
  }>;

  // Company stats and achievements
  const experienceStats = [
    { label: 'Total Experience', value: '14+ months', icon: FaClock },
    { label: 'Projects Completed', value: '4+', icon: FaProjectDiagram },
    { label: 'Technologies Used', value: '14+', icon: FaCode },
    { label: 'Companies Worked', value: '4', icon: FaBuilding }
  ];

  const getTechColor = (index: number) => {
    const colors = [
      'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30 hover:from-purple-500/30 hover:to-pink-500/30',
      'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border-blue-500/30 hover:from-blue-500/30 hover:to-cyan-500/30',
      'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border-green-500/30 hover:from-green-500/30 hover:to-emerald-500/30',
      'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 border-yellow-500/30 hover:from-yellow-500/30 hover:to-orange-500/30',
      'bg-gradient-to-r from-pink-500/20 to-rose-500/20 text-pink-300 border-pink-500/30 hover:from-pink-500/30 hover:to-rose-500/30',
      'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border-indigo-500/30 hover:from-indigo-500/30 hover:to-purple-500/30',
    ];
    return colors[index % colors.length];
  };

  const getCompanyGradient = (index: number) => {
    const gradients = [
      'from-purple-500/10 via-blue-500/10 to-purple-500/10',
      'from-blue-500/10 via-cyan-500/10 to-blue-500/10',
      'from-green-500/10 via-emerald-500/10 to-green-500/10',
      'from-orange-500/10 via-red-500/10 to-orange-500/10'
    ];
    return gradients[index % gradients.length];
  };

  // Floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));

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
              <FaRocket className="text-4xl text-purple-400 mx-auto" />
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-8 tracking-tight pb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t('internships.title')}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('internships.description')}
          </motion.p>

          {/* Professional Stats Dashboard */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {experienceStats.map((stat, index) => (
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

        {/* Timeline Layout with Interactive Cards */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 transform md:-translate-x-0.5"></div>
          
          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: index * 0.3,
                  duration: 0.8,
                  type: 'spring',
                  stiffness: 100
                }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Timeline Node */}
                <motion.div
                  className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transform md:-translate-x-1/2 z-20 border-4 border-gray-900"
                  whileHover={{ scale: 1.5 }}
                  animate={{ 
                    scale: hoveredIndex === index ? 1.3 : 1,
                    boxShadow: hoveredIndex === index ? '0 0 20px rgba(147, 51, 234, 0.6)' : '0 0 0px rgba(147, 51, 234, 0)'
                  }}
                />

                {/* Experience Card */}
                <motion.div
                  className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => setSelectedExperience(index)}
                >
                  <div className={`p-6 md:p-8 bg-gradient-to-br ${getCompanyGradient(index)} backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 cursor-pointer ${
                    selectedExperience === index ? 'ring-2 ring-purple-500/50' : ''
                  }`}>
                    {/* Company Header with Achievement Badge */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <FaTrophy className="text-yellow-400 mr-2" />
                          <span className="text-sm font-medium text-yellow-300 uppercase tracking-wider">
                            {index === 0 ? 'Latest Experience' : `Experience ${experiences.length - index}`}
                          </span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight hover:text-purple-300 transition-colors">
                          {exp.title}
                        </h2>
                      </div>
                      <motion.div
                        className="p-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl"
                        whileHover={{ rotate: 10 }}
                      >
                        <FaLaptopCode className="text-2xl text-purple-400" />
                      </motion.div>
                    </div>
                    
                    {/* Company Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center text-purple-300 bg-purple-500/10 p-3 rounded-xl">
                        <FaBuilding className="mr-3 text-lg flex-shrink-0" />
                        <div>
                          <div className="text-xs text-gray-400 uppercase">Company</div>
                          <div className="font-semibold text-sm">{exp.company}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-blue-300 bg-blue-500/10 p-3 rounded-xl">
                        <FaMapMarkerAlt className="mr-3 text-lg flex-shrink-0" />
                        <div>
                          <div className="text-xs text-gray-400 uppercase">Location</div>
                          <div className="font-semibold text-sm">{exp.location}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-cyan-300 bg-cyan-500/10 p-3 rounded-xl">
                        <FaCalendarAlt className="mr-3 text-lg flex-shrink-0" />
                        <div>
                          <div className="text-xs text-gray-400 uppercase">Duration</div>
                          <div className="font-semibold text-sm">{exp.period}</div>
                        </div>
                      </div>
                    </div>

                    {/* Description with Enhanced Styling */}
                    <div className="mb-6 p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    {/* Technologies with Enhanced Animation */}
                    <div className="space-y-4">
                      <div className="flex items-center text-gray-400">
                        <FaCode className="mr-3 text-lg" />
                        <span className="text-sm font-bold uppercase tracking-wider">Tech Stack</span>
                        <div className="flex-1 h-px bg-gradient-to-r from-gray-600 to-transparent ml-4"></div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${getTechColor(techIndex)} backdrop-blur-sm cursor-pointer`}
                            whileHover={{ 
                              scale: 1.1, 
                              y: -2,
                              boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
                            }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: (index * 0.3) + (techIndex * 0.1) }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Achievement Indicator */}
                    <motion.div
                      className="mt-6 flex items-center justify-between p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.3 + 0.5 }}
                    >
                      <div className="flex items-center">
                        <FaAward className="text-green-400 mr-2" />
                        <span className="text-green-300 text-sm font-medium">Project Completed Successfully</span>
                      </div>
                      <FaArrowRight className="text-green-400" />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

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
                Parcours en évolution constante
              </h3>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Toujours à la recherche de nouveaux défis et opportunités d'apprentissage.
              </p>
              
              <motion.div
                className="flex items-center justify-center space-x-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
              >
                {[FaStar, FaTrophy, FaRocket].map((Icon, index) => (
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

export default Internships; 