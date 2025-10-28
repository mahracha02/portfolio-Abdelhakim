import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  FaCode, 
  FaRocket, 
  FaStar, 
  FaArrowRight,
  FaLaptopCode,
  FaProjectDiagram,
  FaAward,
  FaGithub,
  FaExternalLinkAlt
} from 'react-icons/fa';
import galerie from '../assets/galerie.png';
import utopia from '../assets/logo.png';
import swissPadel  from '../assets/swissPadel.png';
import escapeGame from '../assets/escapeGame.png';  
import appMobile from '../assets/mobileApp.png';
import landingPage from '../assets/landingPage.jpg';
import analyseMeidicale from '../assets/analyses-medicales-logo.png';

const projects = [
  {
    slug: 'galerie-art-toulousaine',
    titleKey: 'projects.items.0.title',
    descriptionKey: 'projects.items.0.description',
    technologies: ['Symfony', 'React', 'PHP', 'JavaScript', 'Tailwind CSS', 'MySQL', 'API REST','Boutique E-commerce'],
    image: galerie,
    link: 'https://github.com/mahracha02/galerieFrontend',
    demoUrl: 'https://www.lemetais.com/test/', // site web réel
  },
  {
    slug: 'restaurant-utopia',
    titleKey: 'projects.items.1.title',
    descriptionKey: 'projects.items.1.description',
    technologies: ['React', 'HTML5', 'JavaScript', 'Tailwind CSS'],
    image: utopia,
    link: 'https://github.com/mahracha02/UtopiaResto',
    demoUrl: 'https://restaurantutopia.netlify.app/', // site web réel
  },
  {
    slug: 'swiss-padel-stars',
    titleKey: 'projects.items.2.title',
    descriptionKey: 'projects.items.2.description',
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Symfony', 'MySQL', 'API REST','PHP'],
    image: swissPadel,
    link: 'https://github.com/mahracha02/swissPadel',
    demoUrl: 'https://mahracha02.github.io/swissApp/', // site web réel
  },
  {
    slug: 'escape-the-web',
    titleKey: 'projects.items.3.title',
    descriptionKey: 'projects.items.3.description',
    technologies: ['TypeScript', 'HTML5', 'Tailwind CSS', 'Jest', 'Github Actions', 'Game Development'],
    image: escapeGame,
    link: 'https://github.com/mahracha02/escape2',
    demoUrl: 'https://mahracha02.github.io/escape2/', // site web réel
  },
  {
    slug: 'supermarket-app',
    titleKey: 'projects.items.4.title',
    descriptionKey: 'projects.items.4.description',
    technologies: ['ReactNative', 'TypeScript', 'Expo', 'E-commerce', 'Tailwind CSS'],
    image: appMobile,
    link: 'https://github.com/mahracha02/superAppMobile',
    demoUrl: 'https://mahracha02.github.io/superAppMobile/', // site web réel
  },
  {
    slug: 'landingpage-ecommerce-watch',
    titleKey: 'projects.items.5.title',
    descriptionKey: 'projects.items.5.description',
    technologies: ['HTML5', 'CSS3', 'Tailwind CSS', 'Figma'],
    image: landingPage,
    link: 'https://github.com/mahracha02/landing-page',
    demoUrl: ' https://mahracha02.github.io/landingPageProduct/', // site web réel
  },
  {
    slug: 'gestion-analyses-medicales',
    titleKey: 'projects.items.6.title',
    descriptionKey: 'projects.items.6.description',
    technologies: ['HTML5', 'CSS3', 'PHP', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'CSV', 'MVC'],
    image: analyseMeidicale,
    link: 'https://github.com/mahracha02/analyseMedical',
    demoUrl: '#', // Add demo URL when available
  },
];

const Projects = () => {
  const { t } = useTranslation();
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');

  // Project categories for filtering
  const categories = [
    { key: 'all', labelKey: 'projects.filters.all' },
    { key: 'web', labelKey: 'projects.filters.web' },
    { key: 'mobile', labelKey: 'projects.filters.mobile' },
    { key: 'e-commerce', labelKey: 'projects.filters.ecommerce' },
    { key: 'game', labelKey: 'projects.filters.game' }
  ];
  
  // Enhanced project data with categories
  const enhancedProjects = projects.map((project, index) => ({
    ...project,
    category: index === 0 ? 'web' : index === 1 ? 'web' : index === 2 ? 'e-commerce' : index === 3 ? 'game' : index === 4 ? 'mobile' : index === 5 ? 'e-commerce' : 'web',
    featured: index < 3,
    stars: index === 0 ? 5 : index === 1 ? 5 : index === 2 ? 5 : index === 3 ? 4.5 : index === 4 ? 4.5 : index === 5 ? 4.5 : 4
  }));

  const filteredProjects = filter === 'all' 
    ? enhancedProjects 
    : enhancedProjects.filter(project => project.category === filter);

  // Floating particles
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));

  // Project statistics
  const stats = [
    { labelKey: 'projects.stats.totalProjects', value: projects.length, icon: FaProjectDiagram },
    { labelKey: 'projects.stats.technologies', value: '14+', icon: FaCode },
    { labelKey: 'projects.stats.completed', value: '100%', icon: FaAward },
    { labelKey: 'projects.stats.liveSites', value: '6', icon: FaRocket }
  ];

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
              <FaLaptopCode className="text-4xl text-purple-400 mx-auto" />
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-8 tracking-tight pb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t('projects.title')}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('projects.description')}
          </motion.p>

          {/* Project Stats Dashboard */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.labelKey}
                className="p-4 md:p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <stat.icon className="text-2xl md:text-3xl text-purple-400 mb-3 mx-auto" />
                <div className="text-xl md:text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-400 font-medium">{t(stat.labelKey)}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Filter Categories */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.key}
                onClick={() => setFilter(category.key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm border ${
                  filter === category.key
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white border-purple-500/50 shadow-lg shadow-purple-500/25'
                    : 'bg-gray-800/50 text-gray-300 border-gray-700/50 hover:border-purple-500/30 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t(category.labelKey)}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: idx * 0.1,
                duration: 0.6,
                type: 'spring',
                stiffness: 100
              }}
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Featured Badge */}
              {project.featured && (
                <motion.div
                  className="absolute -top-3 -right-3 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-full shadow-lg"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaStar className="text-white text-sm" />
                </motion.div>
              )}

              <motion.div
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-3xl border border-gray-700/50 overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 h-full flex flex-col"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={t(project.titleKey)}
                    className="w-full h-full object-fill group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Quick Action Buttons */}
                  <motion.div
                    className="absolute bottom-4 right-4 flex space-x-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: hoveredProject === idx ? 1 : 0, 
                      scale: hoveredProject === idx ? 1 : 0.8 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.demoUrl !== '#' && (
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-purple-500/80 backdrop-blur-sm rounded-full text-white hover:bg-purple-600/80 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt className="text-sm" />
                      </motion.a>
                    )}
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800/80 backdrop-blur-sm rounded-full text-white hover:bg-gray-700/80 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub className="text-sm" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Project Header */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
                        {project.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => {
                          const starValue = i + 1;
                          const isFullStar = starValue <= Math.floor(project.stars);
                          const isHalfStar = starValue === Math.ceil(project.stars) && project.stars % 1 !== 0;
                          
                          return (
                            <div key={i} className="relative">
                              <FaStar
                                className={`text-xs ${
                                  isFullStar ? 'text-yellow-400' : 'text-gray-600'
                                }`}
                              />
                              {isHalfStar && (
                                <FaStar
                                  className="text-xs text-yellow-400 absolute top-0 left-0 overflow-hidden"
                                  style={{ clipPath: 'inset(0 50% 0 0)' }}
                                />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors leading-tight">
                      {t(project.titleKey)}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                    {t(project.descriptionKey)}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 rounded-full text-xs font-semibold border border-purple-500/30 backdrop-blur-sm"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 + techIndex * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 bg-gray-700/50 text-gray-400 rounded-full text-xs font-semibold">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link
                    to={`/projects/${project.slug}`}
                    className="group/btn inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-purple-500/25 mt-auto"
                  >
                    <span className="mr-2">{t('projects.exploreProject')}</span>
                    <FaArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
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
                {t('projects.cta.title')}
              </h3>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                {t('projects.cta.description')}
              </p>
              
              <motion.div
                className="flex items-center justify-center space-x-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                {[FaStar, FaAward, FaRocket].map((Icon, index) => (
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

export default Projects; 