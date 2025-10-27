import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
    description: 'Application web pour la gestion des expositions, des évènements et des artistes. Système de gestion des œuvres avec base de données intégrée et interface responsive.',
    technologies: ['Symfony', 'React', 'PHP', 'JavaScript', 'Tailwind CSS', 'MySQL', 'API REST','Boutique E-commerce'],
    image: galerie,
    link: '#',
    demoUrl: 'https://www.lemetais.com/test/', // site web réel
  },
  {
    slug: 'restaurant-utopia',
    title: 'Restaurant Utopia',
    description: 'Site web vitrine responsive dédié à un restaurant. Conception UI/UX moderne avec animations et appel à l\'action optimisé pour l\'expérience utilisateur.',
    technologies: ['React', 'HTML5', 'JavaScript', 'Tailwind CSS'],
    image: utopia,
    link: '#',
    demoUrl: 'https://restaurantutopia.netlify.app/', // site web réel
  },
  {
    slug: 'swiss-padel-stars',
    title: 'Swiss Padel Stars',
    description: 'Développement du site internet de Swiss Padel Stars pour établir la marque comme référence incontournable du padel en Suisse. Site e-commerce premium pour la vente de tables de padel ping-pong aux particuliers.',
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Symfony', 'MySQL', 'API REST','PHP'],
    image: swissPadel,
    link: '#',
    demoUrl: 'https://mahracha02.github.io/swissApp/', // site web réel
  },
  {
    slug: 'escape-the-web',
    title: 'Escape The Web',
    description: 'Jeu interactif où les joueurs doivent résoudre des énigmes en interagissant avec une interface web. Chaque énigme est validée par des tests unitaires et E2E pour garantir une expérience utilisateur optimale.',
    technologies: ['TypeScript', 'HTML5', 'Tailwind CSS', 'Jest', 'Github Actions', 'Game Development'],
    image: escapeGame,
    link: '#',
    demoUrl: 'https://mahracha02.github.io/escape2/', // site web réel
  },
  {
    slug: 'supermarket-app',
    title: 'SuperMarket App',
    description: 'Application mobile pour un supermarché permettant aux utilisateurs de parcourir les produits, gérer leur panier et passer des commandes en ligne.',
    technologies: ['ReactNative', 'TypeScript', 'Expo', 'E-commerce', 'Tailwind CSS'],
    image: appMobile,
    link: '#',
    demoUrl: 'https://mahracha02.github.io/superAppMobile/', // site web réel
  },
  {
    slug: 'landingpage-ecommerce-watch',
    title: 'Landing Page E-commerce Montres',
    description: 'Page d\'atterrissage pour une boutique en ligne de montres, optimisée pour la conversion avec un design épuré et des appels à l\'action clairs.',
    technologies: ['HTML5', 'CSS3', 'Tailwind CSS', 'Figma'],
    image: landingPage,
    link: '#',
    demoUrl: ' https://mahracha02.github.io/landingPageProduct/', // site web réel
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#18122B] px-4 md:px-0 relative overflow-hidden py-16">
      {/* Animated Geometric Shapes */}
      <motion.div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-purple-400/30" animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }} />
      <motion.div className="absolute bottom-10 right-10 w-10 h-10 rounded-full bg-purple-400/40" animate={{ x: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }} />
      <motion.div className="absolute top-1/2 left-1/4 w-8 h-8 bg-purple-300 rotate-45" style={{ borderRadius: '20%' }} animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }} />
      <div className="w-full max-w-6xl mx-auto z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8 text-center">
          My <span className="text-purple-400">Projects</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="bg-[#221a38] rounded-xl shadow-md border-l-4 border-purple-400 overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -8, boxShadow: '0 8px 32px #a78bfa55' }}
            >
              <div className="relative h-48 bg-gray-700 flex items-center justify-center">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="object-fill w-full h-full" />
                ) : (
                  <div className="text-gray-500">[Project Image]</div>
                )}
              </div>
              <div className="flex-1 flex flex-col p-6">
                <h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 mt-auto">
                  <Link to={`/projects/${project.slug}`} className="bg-purple-400 text-white px-4 py-2 rounded-full font-bold hover:bg-purple-500 transition-colors text-sm shadow text-center w-full">
                    See Project
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 