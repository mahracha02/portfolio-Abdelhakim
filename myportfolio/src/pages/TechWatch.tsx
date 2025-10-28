import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaRobot, FaGraduationCap, FaUsers, FaNewspaper, FaCode, FaShieldAlt, FaGithub, FaBook, FaLaptopCode } from 'react-icons/fa';

const TechWatch = () => {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false);

  const techWatchItems = [
    {
      id: 1,
      titleKey: 'techWatch.items.0.title',
      descriptionKey: 'techWatch.items.0.description',
      categoryKey: 'techWatch.items.0.category',
      icon: FaRobot,
      color: 'from-cyan-500 to-blue-600',
      borderColor: 'border-cyan-400',
      glowColor: 'shadow-cyan-500/25'
    },
    {
      id: 2,
      titleKey: 'techWatch.items.1.title',
      descriptionKey: 'techWatch.items.1.description',
      categoryKey: 'techWatch.items.1.category',
      icon: FaGraduationCap,
      color: 'from-purple-500 to-indigo-600',
      borderColor: 'border-purple-400',
      glowColor: 'shadow-purple-500/25'
    },
    {
      id: 3,
      titleKey: 'techWatch.items.2.title',
      descriptionKey: 'techWatch.items.2.description',
      categoryKey: 'techWatch.items.2.category',
      icon: FaUsers,
      color: 'from-green-500 to-emerald-600',
      borderColor: 'border-green-400',
      glowColor: 'shadow-green-500/25'
    },
    {
      id: 4,
      titleKey: 'techWatch.items.3.title',
      descriptionKey: 'techWatch.items.3.description',
      categoryKey: 'techWatch.items.3.category',
      icon: FaNewspaper,
      color: 'from-orange-500 to-red-600',
      borderColor: 'border-orange-400',
      glowColor: 'shadow-orange-500/25'
    },
    {
      id: 5,
      titleKey: 'techWatch.items.4.title',
      descriptionKey: 'techWatch.items.4.description',
      categoryKey: 'techWatch.items.4.category',
      icon: FaCode,
      color: 'from-yellow-500 to-amber-600',
      borderColor: 'border-yellow-400',
      glowColor: 'shadow-yellow-500/25'
    },
    {
      id: 6,
      titleKey: 'techWatch.items.5.title',
      descriptionKey: 'techWatch.items.5.description',
      categoryKey: 'techWatch.items.5.category',
      icon: FaShieldAlt,
      color: 'from-rose-500 to-pink-600',
      borderColor: 'border-rose-400',
      glowColor: 'shadow-rose-500/25'
    }
  ];

  const additionalTechWatchItems = [
    {
      id: 7,
      titleKey: 'techWatch.additionalItems.0.title',
      descriptionKey: 'techWatch.additionalItems.0.description',
      categoryKey: 'techWatch.additionalItems.0.category',
      icon: FaGithub,
      color: 'from-gray-600 to-gray-800',
      borderColor: 'border-gray-400',
      glowColor: 'shadow-gray-500/25'
    },
    {
      id: 8,
      titleKey: 'techWatch.additionalItems.1.title',
      descriptionKey: 'techWatch.additionalItems.1.description',
      categoryKey: 'techWatch.additionalItems.1.category',
      icon: FaBook,
      color: 'from-teal-500 to-cyan-600',
      borderColor: 'border-teal-400',
      glowColor: 'shadow-teal-500/25'
    },
    {
      id: 9,
      titleKey: 'techWatch.additionalItems.2.title',
      descriptionKey: 'techWatch.additionalItems.2.description',
      categoryKey: 'techWatch.additionalItems.2.category',
      icon: FaLaptopCode,
      color: 'from-indigo-500 to-purple-600',
      borderColor: 'border-indigo-400',
      glowColor: 'shadow-indigo-500/25'
    }
  ];

  // Floating particles
  const particles = Array.from({ length: 25 }, (_, i) => ({
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
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-600 mb-6 pb-4">
            {t('techWatch.title')}
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('techWatch.description')}
          </p>
        </motion.div>

        {/* Tech Watch Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techWatchItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className={`relative group bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-2xl p-6 border ${item.borderColor}/30 hover:border-white/20 transition-all duration-300 ${item.glowColor} hover:shadow-2xl`}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                {/* Icon Section */}
                <div className="relative z-10 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-2xl text-white" />
                  </div>
                  <span className={`inline-block px-3 py-1 bg-gradient-to-r ${item.color} bg-opacity-20 text-white rounded-full text-xs font-semibold tracking-wider uppercase`}>
                    {t(item.categoryKey)}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-2xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {t(item.titleKey)}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-base md:text-md group-hover:text-gray-200 transition-colors duration-300">
                    {t(item.descriptionKey)}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Resources Section */}
        {showMore && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
                {t('techWatch.additionalResources.title')}
              </h2>
              <div className="h-0.5 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalTechWatchItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      y: -8, 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    className={`relative group bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-2xl p-6 border ${item.borderColor}/30 hover:border-white/20 transition-all duration-300 ${item.glowColor} hover:shadow-2xl`}
                  >
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                    
                    {/* Icon Section */}
                    <div className="relative z-10 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="text-2xl text-white" />
                      </div>
                      <span className={`inline-block px-3 py-1 bg-gradient-to-r ${item.color} bg-opacity-20 text-white rounded-full text-xs font-semibold tracking-wider uppercase`}>
                        {t(item.categoryKey)}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-2xl md:text-2xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                        {t(item.titleKey)}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-base md:text-md group-hover:text-gray-200 transition-colors duration-300">
                        {t(item.descriptionKey)}
                      </p>
                    </div>

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-block p-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full">
            <button 
              onClick={() => setShowMore(!showMore)}
              className="bg-[#18122B] text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-900 transition-all duration-300 group"
            >
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-white">
                {showMore ? t('techWatch.hideResources') : t('techWatch.exploreResources')}
              </span>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TechWatch; 