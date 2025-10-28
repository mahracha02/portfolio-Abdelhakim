import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  FaArrowLeft, 
  FaCode, 
  FaStar, 
  FaEye, 
  FaCalendarAlt,
  FaBuilding,
  FaExternalLinkAlt,
  FaGithub,
  FaAward,
  FaLaptopCode,
  FaCheckCircle,
  FaTimes
} from 'react-icons/fa';
import galerie from '../assets/galerie.png';
import utopia from '../assets/logo.png';
import swissPadel  from '../assets/swissPadel.png';
import escapeGame from '../assets/escapeGame.png';
import appMobile from '../assets/mobileApp.png';
import landingPage from '../assets/landingPage.jpg';
import analyseMeidicale from '../assets/analyses-medicales-logo.png';

// Medical analysis images for slideshow
import analyseMedicale1 from '../assets/analyses-medicales-1.png';
import analyseMedicale2 from '../assets/analyses-medicales-2.png';
import analyseMedicale3 from '../assets/analyses-medicales-3.png';
import analyseMedicale4 from '../assets/analyses-medicales-4.png';
import analyseMedicale5 from '../assets/analyses-medicales-5.png';
import analyseMedicale6 from '../assets/analyses-medicales-6.png';
import analyseMedicale7 from '../assets/analyses-medicales-7.png';

// Type definitions for projects
interface BaseProject {
  slug: string;
  technologies: string[];
  image: string;
  link: string;
  demoUrl: string;
  location?: string;
  type?: string;
}

interface ProjectWithText extends BaseProject {
  title: string;
  description: string;
  fullDescription?: string;
  features?: string[];
  duration: string;
  company: string;
}

interface ProjectWithKeys extends BaseProject {
  titleKey: string;
  descriptionKey: string;
  fullDescriptionKey: string;
  featuresKey: string;
  durationKey: string;
  companyKey: string;
}

type Project = ProjectWithText | ProjectWithKeys;

// Helper functions for project handling
const getProjectTitle = (project: Project, t: (key: string) => string): string => {
  return 'titleKey' in project ? t(project.titleKey) : project.title;
};

const getProjectDescription = (project: Project, t: (key: string) => string): string => {
  return 'descriptionKey' in project ? t(project.descriptionKey) : project.description;
};

const getProjectFullDescription = (project: Project, t: (key: string) => string): string => {
  return 'fullDescriptionKey' in project ? t(project.fullDescriptionKey) : (project.fullDescription || project.description);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getProjectFeatures = (project: Project, t: (key: string, options?: any) => any): string[] => {
  if ('featuresKey' in project) {
    const features = t(project.featuresKey, { returnObjects: true });
    return Array.isArray(features) ? features : [];
  }
  return project.features || [];
};

const getProjectDuration = (project: Project, t: (key: string) => string): string => {
  return 'durationKey' in project ? t(project.durationKey) : project.duration;
};

const getProjectCompany = (project: Project, t: (key: string) => string): string => {
  return 'companyKey' in project ? t(project.companyKey) : project.company;
};

const projects: Project[] = [
  {
    slug: 'galerie-art-toulousaine',
    titleKey: 'projectDetails.items.0.title',
    descriptionKey: 'projectDetails.items.0.description',
    fullDescriptionKey: 'projectDetails.items.0.fullDescription',
    technologies: ['Symfony', 'React', 'PHP', 'JavaScript', 'Tailwind CSS'],
    featuresKey: 'projectDetails.items.0.features',
    durationKey: 'projectDetails.items.0.duration',
    companyKey: 'projectDetails.items.0.company',
    image: galerie,
    link: 'https://github.com/mahracha02/galerieFrontend',
    demoUrl: 'https://www.lemetais.com/test/', // site web réel
  },
  {
    slug: 'restaurant-utopia',
    titleKey: 'projectDetails.items.1.title',
    descriptionKey: 'projectDetails.items.1.description',
    fullDescriptionKey: 'projectDetails.items.1.fullDescription',
    technologies: ['React', 'HTML', 'JavaScript', 'Tailwind CSS'],
    featuresKey: 'projectDetails.items.1.features',
    durationKey: 'projectDetails.items.1.duration',
    companyKey: 'projectDetails.items.1.company',
    location: 'Toulouse',
    image: utopia,
    link: 'https://github.com/mahracha02/UtopiaResto',
    demoUrl: 'https://restaurantutopia.netlify.app/', // site web réel
  },
  {
    slug: 'swiss-padel-stars',
    titleKey: 'projectDetails.items.2.title',
    descriptionKey: 'projectDetails.items.2.description',
    fullDescriptionKey: 'projectDetails.items.2.fullDescription',
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Symfony', 'MySQL'],
    featuresKey: 'projectDetails.items.2.features',
    durationKey: 'projectDetails.items.2.duration',
    companyKey: 'projectDetails.items.2.company',
    location: 'Suisse',
    image: swissPadel,
    link: 'https://github.com/mahracha02/swissPadel',
    demoUrl: 'https://mahracha02.github.io/swissApp/', // site web réel
  },
  {
    slug: 'escape-the-web',
    titleKey: 'projectDetails.items.3.title',
    descriptionKey: 'projectDetails.items.3.description',
    fullDescriptionKey: 'projectDetails.items.3.fullDescription',
    technologies: ['TypeScript', 'HTML5', 'Tailwind CSS', 'Jest', 'Github Actions', 'Game Development'],
    featuresKey: 'projectDetails.items.3.features',
    durationKey: 'projectDetails.items.3.duration',
    companyKey: 'projectDetails.items.3.company',
    type: 'Game Development',
    image: escapeGame,
    link: 'https://github.com/mahracha02/escape2',
    demoUrl: 'https://mahracha02.github.io/escape2/', // site web réel
  },
  {
    slug: 'supermarket-app',
    titleKey: 'projectDetails.items.4.title',
    descriptionKey: 'projectDetails.items.4.description',
    fullDescriptionKey: 'projectDetails.items.4.fullDescription',
    technologies: ['ReactNative', 'TypeScript', 'Expo', 'E-commerce', 'Tailwind CSS'],
    featuresKey: 'projectDetails.items.4.features',
    durationKey: 'projectDetails.items.4.duration',
    companyKey: 'projectDetails.items.4.company',
    type: 'E-commerce',
    image: appMobile,
    link: 'https://github.com/mahracha02/superAppMobile',
    demoUrl: 'https://mahracha02.github.io/superAppMobile/', // site web réel
  },
  {
    slug: 'landingpage-ecommerce-watch',
    titleKey: 'projectDetails.items.5.title',
    descriptionKey: 'projectDetails.items.5.description',
    fullDescriptionKey: 'projectDetails.items.5.fullDescription',
    technologies: ['React', 'HTML', 'JavaScript', 'Tailwind CSS', 'Figma'],
    featuresKey: 'projectDetails.items.5.features',
    durationKey: 'projectDetails.items.5.duration',
    companyKey: 'projectDetails.items.5.company',
    type: 'E-commerce',
    image: landingPage,
    link: 'https://github.com/mahracha02/landing-page',
    demoUrl: 'https://mahracha02.github.io/landingPageProduct/',
  },
  {
    slug: 'gestion-analyses-medicales',
    titleKey: 'projectDetails.items.6.title',
    descriptionKey: 'projectDetails.items.6.description',
    fullDescriptionKey: 'projectDetails.items.6.fullDescription',
    technologies: ['HTML5', 'CSS3', 'PHP', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'CSV', 'MVC'],
    featuresKey: 'projectDetails.items.6.features',
    durationKey: 'projectDetails.items.6.duration',
    companyKey: 'projectDetails.items.6.company',
    location: 'Limoges',
    type: 'Application Médicale',
    image: analyseMeidicale,
    link: 'https://github.com/mahracha02/analyseMedical',
    demoUrl: '#', // Add demo URL when available
  },
];

const ProjectDetail = () => {
  const { t } = useTranslation();
  const { slug } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const project = projects.find(p => p.slug === slug);

  // Images for medical analysis slideshow
  const medicalAnalysisImages = [
    analyseMedicale1,
    analyseMedicale2,
    analyseMedicale3,
    analyseMedicale4,
    analyseMedicale5,
    analyseMedicale6,
    analyseMedicale7
  ];

  // Auto-slide effect for medical analysis project
  useEffect(() => {
    if (showModal && project?.slug === 'gestion-analyses-medicales') {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % medicalAnalysisImages.length);
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(interval);
    }
  }, [showModal, project?.slug, medicalAnalysisImages.length]);

  // Floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));

  // Project statistics
  const projectStats = project ? [
    { labelKey: 'projectDetails.technologiesUsed', value: project.technologies.length, icon: FaCode },
    { labelKey: 'projectDetails.keyFeatures', value: getProjectFeatures(project, t).length, icon: FaCheckCircle },
    { labelKey: 'projects.stats.completed', value: '100%', icon: FaAward },
    { labelKey: 'projects.stats.liveSites', value: 'Web App', icon: FaLaptopCode }
  ] : [];

  if (!project) {
    return <div className="text-center text-red-400 py-20">Project not found.</div>;
  }

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

      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* Ultra-Modern Navigation */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button 
            onClick={() => navigate(-1)} 
            className="group flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-700/50 text-gray-300 hover:text-white hover:border-purple-500/30 transition-all duration-300"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-semibold">{t('projectDetails.backToProjects')}</span>
          </button>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          className="relative mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <motion.h1 
              className="text-4xl md:text-6xl font-black bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6 tracking-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {getProjectTitle(project, t)}
            </motion.h1>
            
            {getProjectCompany(project, t) && (
              <motion.div
                className="flex items-center justify-center space-x-2 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <FaBuilding className="text-purple-400" />
                <span className="text-xl text-purple-300 font-semibold">{getProjectCompany(project, t)}</span>
              </motion.div>
            )}
            
            {getProjectDuration(project, t) && (
              <motion.div
                className="flex items-center justify-center space-x-2 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <FaCalendarAlt className="text-blue-400" />
                <span className="text-gray-400 font-medium">{getProjectDuration(project, t)}</span>
              </motion.div>
            )}
          </div>

          {/* Project Stats Dashboard */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {projectStats.map((stat, index) => (
              <motion.div
                key={stat.labelKey}
                className="p-4 md:p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300 text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <stat.icon className="text-2xl md:text-3xl text-purple-400 mb-3 mx-auto" />
                <div className="text-xl md:text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-400 font-medium">{t(stat.labelKey)}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Project Image & Actions */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-3xl border border-gray-700/50 overflow-hidden shadow-2xl">
              {/* Project Image */}
              <div className="relative h-80 md:h-96 overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={getProjectTitle(project, t)}
                  className="w-full h-full object-fill hover:scale-110 transition-transform duration-500"
                  whileHover={{ scale: 1.05 }}
                />
                
                {/* Image Overlay with Actions */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="flex space-x-4">
                    {project.demoUrl && project.demoUrl !== '#' && (
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl text-white font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt />
                        <span>{t('projectDetails.visitSite')}</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Actions */}
              <div className="p-6">
                <div className="flex flex-wrap gap-4 justify-center">
                  <motion.button
                    onClick={() => setShowModal(true)}
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl text-white font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaEye />
                    <span>{t('projectDetails.preview')}</span>
                  </motion.button>
                  
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-2xl text-gray-300 font-semibold hover:text-white hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub />
                    <span>{t('projectDetails.viewCode')}</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project Info Sidebar */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Description Card */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-6 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <FaLaptopCode className="text-purple-400 mr-3" />
                {t('projectDetails.aboutProject')}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {getProjectFullDescription(project, t)}
              </p>
            </div>

            {/* Technologies Used */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-6 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <FaCode className="text-blue-400 mr-3" />
                {t('projectDetails.technologiesUsed')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 rounded-full text-sm font-semibold border border-purple-500/30 backdrop-blur-sm hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Project Rating */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-6 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <FaAward className="text-yellow-400 mr-3" />
                {t('projectDetails.projectRating')}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">{t('projectDetails.rating.complexity')}</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">{t('projectDetails.rating.innovation')}</span>
                  <div className="flex space-x-1">
                    {[...Array(4)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                    <FaStar className="text-gray-600 text-sm" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">{t('projectDetails.rating.design')}</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Features Section */}
        {(getProjectFeatures(project, t).length > 0) && (
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                {t('projectDetails.keyFeatures')}
              </h2>
              <p className="text-gray-400 text-lg">
                {t('projectDetails.featuresDescription')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getProjectFeatures(project, t).map((feature: string, index: number) => (
                <motion.div
                  key={index}
                  className="group p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl border border-purple-500/30 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                      <FaCheckCircle className="text-purple-400 text-xl" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
        {/* Modal for Demo */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              className="fixed inset-0 z-40 flex items-center justify-center bg-black/80 p-4 pt-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
            >
              <motion.div
                className="bg-[#221a38] rounded-xl shadow-2xl w-full max-w-6xl h-full max-h-[85vh] relative flex flex-col border border-purple-400/30 mt-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 md:p-6 border-b border-purple-400/20">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{getProjectTitle(project, t)}</h3>
                    <p className="text-purple-300 text-sm md:text-base">{t('projectDetails.demoPreview')}</p>
                  </div>
                  <motion.button
                    className="text-purple-400 hover:text-white p-3 hover:bg-purple-600/20 rounded-2xl transition-all duration-200 border border-transparent hover:border-purple-500/30"
                    onClick={() => setShowModal(false)}
                    aria-label="Close"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaTimes className="text-xl" />
                  </motion.button>
                </div>

                {/* Modal Content */}
                <div className="flex-1 p-4 md:p-6 overflow-hidden">
                  {project.slug === 'gestion-analyses-medicales' ? (
                    // Auto-sliding images for medical analysis project
                    <div className="relative w-full h-full rounded-lg border-2 border-purple-400/50 shadow-lg overflow-hidden bg-gray-900">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentSlide}
                          src={medicalAnalysisImages[currentSlide]}
                          alt={`Medical Analysis Screenshot ${currentSlide + 1}`}
                          className="w-full h-full object-contain"
                          initial={{ opacity: 0, x: 300 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -300 }}
                          transition={{ duration: 0.5 }}
                        />
                      </AnimatePresence>
                      
                      {/* Slide Indicators */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {medicalAnalysisImages.map((_, index) => (
                          <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              index === currentSlide 
                                ? 'bg-purple-400 scale-125' 
                                : 'bg-white/30 hover:bg-white/50'
                            }`}
                            onClick={() => setCurrentSlide(index)}
                          />
                        ))}
                      </div>
                      
                      {/* Navigation Arrows */}
                      <button
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                        onClick={() => setCurrentSlide(prev => prev === 0 ? medicalAnalysisImages.length - 1 : prev - 1)}
                      >
                        ←
                      </button>
                      <button
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                        onClick={() => setCurrentSlide(prev => (prev + 1) % medicalAnalysisImages.length)}
                      >
                        →
                      </button>
                      
                      {/* Progress Bar */}
                      <div className="absolute top-4 left-4 right-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white text-sm font-medium">
                            {currentSlide + 1} / {medicalAnalysisImages.length}
                          </span>
                          <span className="text-white/80 text-xs">
                            Application Screenshots
                          </span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-1">
                          <motion.div
                            className="bg-purple-400 h-1 rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: `${((currentSlide + 1) / medicalAnalysisImages.length) * 100}%` }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      </div>
                    </div>
                  ) : project.demoUrl ? (
                    <iframe
                      src={project.demoUrl}
                      title="Project Demo"
                      className="w-full h-full rounded-lg border-2 border-purple-400/50 shadow-lg"
                      allowFullScreen
                      frameBorder="0"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center text-gray-300">
                        <div className="w-24 h-24 mx-auto mb-4 bg-purple-600/20 rounded-full flex items-center justify-center">
                          <span className="text-4xl">🚀</span>
                        </div>
                        <h4 className="text-xl font-semibold mb-2">{t('projectDetails.demoInProgressTitle')}</h4>
                        <p className="text-gray-400">{t('projectDetails.demoInProgressDescription')}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Modal Footer */}
                <div className="p-4 md:p-6 border-t border-purple-400/20 bg-purple-600/5">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.demoUrl && project.slug !== 'gestion-analyses-medicales' && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm"
                        >
                          Ouvrir dans un nouvel onglet
                        </a>
                      )}
                      <button
                        onClick={() => setShowModal(false)}
                        className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm"
                      >
                        Fermer
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectDetail; 