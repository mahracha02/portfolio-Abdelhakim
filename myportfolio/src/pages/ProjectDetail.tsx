import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import galerie from '../assets/galerie.png';
import utopia from '../assets/logo.png';
import swissPadel  from '../assets/swissPadel.png';
import escapeGame from '../assets/escapeGame.png';
import appMobile from '../assets/mobileApp.png';
import landingPage from '../assets/landingPage.jpg';

const projects = [
  {
    slug: 'galerie-art-toulousaine',
    title: 'Galerie d\'art Toulousaine',
    description: 'Application web complète pour la gestion d\'une galerie d\'art moderne. Cette application permet de gérer les expositions, les événements et les profils d\'artistes avec un système avancé de gestion des œuvres.',
    fullDescription: 'Développement d\'une application web robuste pour la gestion complète d\'une galerie d\'art. Le projet inclut un système de gestion des expositions avec planification d\'événements, un catalogue numérique des œuvres avec métadonnées complètes, et des profils détaillés d\'artistes. L\'interface responsive optimise l\'expérience utilisateur sur tous les appareils.',
    technologies: ['Symfony', 'React', 'PHP', 'JavaScript', 'Tailwind CSS'],
    features: [
      'Gestion des expositions et événements',
      'Système de catalogage des œuvres d\'art',
      'Profils d\'artistes avec portfolios',
      'Interface d\'administration complète',
      'Design responsive et moderne',
      'Base de données optimisée'
    ],
    duration: '9 mois | 2025',
    company: 'Galerie d\'art Toulousaine',
    image: galerie,
    link: '#',
    demoUrl: 'https://www.lemetais.com/test/', // site web réel
  },
  {
    slug: 'restaurant-utopia',
    title: 'Restaurant Utopia',
    description: 'Site web vitrine responsive moderne dédié à un restaurant gastronomique. Conception d\'une expérience utilisateur immersive avec interface élégante et fonctionnalités optimisées.',
    fullDescription: 'Création complète d\'un site web vitrine pour Restaurant Utopia, mettant l\'accent sur l\'expérience utilisateur et l\'interface moderne. Le projet combine design responsive, animations fluides et architecture front-end optimisée pour présenter l\'identité culinaire du restaurant avec un appel à l\'action efficace.',
    technologies: ['React', 'HTML', 'JavaScript', 'Tailwind CSS'],
    features: [
      'Design responsive multi-appareils',
      'Interface utilisateur moderne et élégante',
      'Animations fluides et interactives',
      'Optimisation UX/UI avancée',
      'Appel à l\'action stratégique',
      'Performance et accessibilité optimisées'
    ],
    duration: '2025',
    company: 'Restaurant Utopia',
    location: 'Toulouse',
    image: utopia,
    link: '#',
    demoUrl: 'https://restaurantutopia.netlify.app/', // site web réel
  },
  {
    slug: 'swiss-padel-stars',
    title: 'Swiss Padel Stars',
    description: 'Site internet premium pour Swiss Padel Stars, la référence incontournable du padel en Suisse. Plateforme e-commerce dédiée à la vente de tables de padel ping-pong exclusives pour particuliers.',
    fullDescription: 'Développement complet du site internet de Swiss Padel Stars avec pour objectif d\'établir la marque comme la référence incontournable dans le domaine du padel en Suisse. Le projet met en avant l\'expertise et les partenariats de qualité premium de la marque, tout en proposant une plateforme e-commerce pour la vente de tables de padel ping-pong aux particuliers. L\'objectif est de créer une présence en ligne percutante et engageante, valorisant les offres de Swiss Padel Stars et renforçant la notoriété de la marque dans un secteur de plus en plus compétitif.',
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Symfony', 'MySQL'],
    features: [
      'Site vitrine premium avec identité de marque forte',
      'Plateforme e-commerce pour particuliers',
      'Mise en avant des partenariats stratégiques',
      'Interface moderne et engageante',
      'Système de gestion produits exclusifs',
      'Optimisation pour la communauté padel suisse'
    ],
    duration: '2025',
    company: 'Swiss Padel Stars',
    location: 'Suisse',
    image: swissPadel,
    link: '#',
    demoUrl: 'https://mahracha02.github.io/swissApp/', // site web réel
  },
  {
    slug: 'escape-the-web',
    title: 'Escape The Web',
    description: 'Jeu interactif innovant où les joueurs doivent résoudre des énigmes complexes en interagissant avec une interface web immersive. Projet axé sur la qualité avec validation complète par tests unitaires et E2E.',
    fullDescription: 'Création d\'un jeu web interactif unique où les joueurs sont plongés dans un univers d\'énigmes à résoudre directement via l\'interface web. Chaque énigme est soigneusement conçue pour offrir une expérience de jeu engageante et intuitive. Le projet met l\'accent sur la qualité et la fiabilité avec une couverture complète de tests unitaires et de tests E2E (End-to-End) pour garantir que chaque interaction fonctionne parfaitement et que l\'expérience utilisateur soit optimale à tous les niveaux.',
    technologies: ['TypeScript', 'HTML5', 'Tailwind CSS', 'Jest', 'Github Actions', 'Game Development'],
    features: [
      'Système d\'énigmes interactives complexes',
      'Interface web immersive et intuitive',
      'Tests unitaires complets avec Jest',
      'Tests E2E automatisés avec Cypress',
      'Expérience utilisateur optimisée',
      'Mécaniques de jeu innovantes'
    ],
    duration: '2025',
    company: 'Projet Personnel',
    type: 'Game Development',
    image: escapeGame,
    link: '#',
    demoUrl: 'https://mahracha02.github.io/escape2/', // site web réel
  },
  {
    slug: 'supermarket-app',
    title: 'SuperMarket App',
    description: 'Application mobile pour un supermarché permettant aux utilisateurs de parcourir les produits, gérer leur panier et passer des commandes en ligne.',
    technologies: ['ReactNative', 'TypeScript', 'Expo', 'E-commerce', 'Tailwind CSS'],
    features : [
      'Parcours de produits intuitif',
      'Gestion de panier fluide',
      'Passer des commandes en ligne facilement',
      'Interface utilisateur moderne',
      'Optimisation pour les utilisateurs',
      'Système de gestion de produits'
    ],
    duration: '2025',
    company: 'Projet Personnel',
    type: 'E-commerce',
    image: appMobile,
    link: '#',
    demoUrl: 'https://mahracha02.github.io/superAppMobile/', // site web réel
  },
  {
    slug: 'landingpage-ecommerce-watch',
    title: 'Landing Page E-commerce Montres',
    description: 'Page d\'atterrissage pour une boutique en ligne de montres, optimisée pour la conversion avec un design épuré et des appels à l\'action clairs.',
    technologies: ['React', 'HTML', 'JavaScript', 'Tailwind CSS', 'Figma'],
    features: [
      'Design responsive',
      'Interface utilisateur moderne',
      'Animations fluides',
      'Appel à l\'action clair',
      'Optimisation UX/UI avancée',
      'utilisation de figma pour le design'  
    ],
    duration: '2025',
    company: 'Projet Personnel',
    type: 'E-commerce',
    image: landingPage,
    link: '#',
    demoUrl: 'https://mahracha02.github.io/landingPageProduct/',
  },
];

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <div className="text-center text-red-400 py-20">Project not found.</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#18122B] px-4 md:px-0 relative overflow-hidden py-16">
      {/* Animated Geometric Shapes */}
      <motion.div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-purple-400/30" animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }} />
      <motion.div className="absolute bottom-10 right-10 w-10 h-10 rounded-full bg-purple-400/40" animate={{ x: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }} />
      <motion.div className="absolute top-1/2 left-1/4 w-8 h-8 bg-purple-300 rotate-45" style={{ borderRadius: '20%' }} animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }} />
      <div className="w-full max-w-4xl mx-auto z-10">
        <button onClick={() => navigate(-1)} className="mb-6 text-purple-300 hover:text-white font-semibold">← Back to Projects</button>
        
        <div className="bg-[#221a38] rounded-xl shadow-md border-l-4 border-purple-400 overflow-hidden mb-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 flex items-center justify-center p-6">
              {project.image ? (
                <img src={project.image} alt={project.title} className="object-fill w-full h-64 rounded-xl" />
              ) : (
                <div className="w-full h-64 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">Project Preview</span>
                </div>
              )}
            </div>
            <div className="md:w-1/2 flex flex-col p-6">
              <h1 className="text-3xl font-bold text-white mb-2">{project.title}</h1>
              {project.company && (
                <p className="text-purple-300 font-semibold mb-2">{project.company}</p>
              )}
              {project.duration && (
                <p className="text-gray-400 text-sm mb-3">{project.duration}</p>
              )}
              <p className="text-gray-300 mb-4">{project.fullDescription || project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
              <button
                className="inline-block bg-purple-400 text-white px-4 py-2 rounded-full font-bold hover:bg-purple-500 transition-colors text-sm shadow mb-2 w-max"
                onClick={() => setShowModal(true)}
              >
                See Demo
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        {project.features && (
          <div className="bg-[#221a38] rounded-xl shadow-md border-l-4 border-purple-400 p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Fonctionnalités principales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center p-3 bg-purple-600/10 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
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
                    <h3 className="text-xl md:text-2xl font-bold text-white">{project.title}</h3>
                    <p className="text-purple-300 text-sm md:text-base">Demo Preview</p>
                  </div>
                  <button
                    className="text-purple-400 hover:text-white text-3xl font-bold p-2 hover:bg-purple-600/20 rounded-lg transition-all duration-200"
                    onClick={() => setShowModal(false)}
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>

                {/* Modal Content */}
                <div className="flex-1 p-4 md:p-6 overflow-hidden">
                  {project.demoUrl ? (
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
                        <h4 className="text-xl font-semibold mb-2">Demo en cours de développement</h4>
                        <p className="text-gray-400">La démo sera bientôt disponible</p>
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
                      {project.demoUrl && (
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