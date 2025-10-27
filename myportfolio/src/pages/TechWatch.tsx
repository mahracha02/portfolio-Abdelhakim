import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { FaRobot, FaGraduationCap, FaUsers, FaNewspaper, FaCode, FaShieldAlt, FaGithub, FaBook, FaLaptopCode } from 'react-icons/fa';

const TechWatch = () => {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false);

  const techWatchItems = [
    {
      id: 1,
      title: 'Utilisation de ChatGPT',
      description: 'L\'utilisation de ChatGPT s\'est répandue dans divers domaines, allant de l\'éducation à la gestion des services clients. ChatGPT aide à automatiser les tâches de rédaction, offre un soutien interactif aux utilisateurs et améliore l\'efficacité des processus en fournissant des réponses instantanées et précises.',
      icon: FaRobot,
      category: 'Intelligence Artificielle',
      color: 'from-cyan-500 to-blue-600',
      borderColor: 'border-cyan-400',
      glowColor: 'shadow-cyan-500/25'
    },
    {
      id: 2,
      title: 'Cours sur Udemy et YouTube',
      description: 'Les plateformes d\'apprentissage en ligne telles qu\'Udemy et YouTube sont des ressources inestimables pour les développeurs souhaitant acquérir de nouvelles compétences ou approfondir leurs connaissances. Ces plateformes offrent une vaste gamme de cours et de tutoriels.',
      icon: FaGraduationCap,
      category: 'Formation Continue',
      color: 'from-purple-500 to-indigo-600',
      borderColor: 'border-purple-400',
      glowColor: 'shadow-purple-500/25'
    },
    {
      id: 3,
      title: 'Groupes de Développeurs',
      description: 'Les réseaux sociaux professionnels et communautaires comme LinkedIn, Reddit, et Stack Overflow sont des plateformes idéales pour les développeurs souhaitant rester informés des dernières tendances et partager des informations.',
      icon: FaUsers,
      category: 'Communauté Tech',
      color: 'from-green-500 to-emerald-600',
      borderColor: 'border-green-400',
      glowColor: 'shadow-green-500/25'
    },
    {
      id: 4,
      title: 'Articles Tech & Innovation',
      description: 'La lecture d\'articles et de blogs technologiques est cruciale pour rester à jour avec les innovations et les développements récents. Des sites comme TechCrunch, Wired, et Medium offrent des analyses approfondies et des nouvelles de l\'industrie technologique.',
      icon: FaNewspaper,
      category: 'Actualités Tech',
      color: 'from-orange-500 to-red-600',
      borderColor: 'border-orange-400',
      glowColor: 'shadow-orange-500/25'
    },
    {
      id: 5,
      title: 'W3Schools - Programmation',
      description: 'W3Schools est une ressource incontournable pour les débutants en programmation. Le site offre des tutoriels interactifs et des exercices pratiques sur divers langages de programmation et technologies web.',
      icon: FaCode,
      category: 'Apprentissage Code',
      color: 'from-yellow-500 to-amber-600',
      borderColor: 'border-yellow-400',
      glowColor: 'shadow-yellow-500/25'
    },
    {
      id: 6,
      title: 'Sites de Cybersécurité',
      description: 'La cybersécurité est une préoccupation majeure pour les développeurs et les entreprises. Des sites spécialisés comme Krebs on Security, SecurityWeek, et le blog de l\'OWASP fournissent des informations vitales sur les menaces actuelles et les meilleures pratiques de sécurité.',
      icon: FaShieldAlt,
      category: 'Sécurité',
      color: 'from-rose-500 to-pink-600',
      borderColor: 'border-rose-400',
      glowColor: 'shadow-rose-500/25'
    }
  ];

  const additionalTechWatchItems = [
    {
      id: 7,
      title: 'GitHub & Open Source',
      description: 'Exploration des projets open source sur GitHub pour découvrir de nouvelles technologies, étudier du code de qualité et contribuer à la communauté. GitHub Trending permet de suivre les technologies émergentes et les librairies populaires dans l\'écosystème du développement.',
      icon: FaGithub,
      category: 'Open Source',
      color: 'from-gray-600 to-gray-800',
      borderColor: 'border-gray-400',
      glowColor: 'shadow-gray-500/25'
    },
    {
      id: 8,
      title: 'Documentation Technique',
      description: 'Lecture régulière de la documentation officielle des frameworks et technologies (React, Vue, Angular, Node.js). Les changelogs et release notes permettent de suivre les évolutions, nouvelles fonctionnalités et bonnes pratiques recommandées par les créateurs des technologies.',
      icon: FaBook,
      category: 'Documentation',
      color: 'from-teal-500 to-cyan-600',
      borderColor: 'border-teal-400',
      glowColor: 'shadow-teal-500/25'
    },
    {
      id: 9,
      title: 'Coding Challenges & Hackathons',
      description: 'Participation à des défis de programmation sur des plateformes comme HackerRank, CodeWars, et LeetCode. Les hackathons et concours de développement permettent de découvrir de nouvelles approches, tester des technologies récentes et améliorer ses compétences de résolution de problèmes.',
      icon: FaLaptopCode,
      category: 'Pratique & Défis',
      color: 'from-indigo-500 to-purple-600',
      borderColor: 'border-indigo-400',
      glowColor: 'shadow-indigo-500/25'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#18122B] px-4 md:px-0 relative overflow-hidden py-16">
      {/* Animated Background Elements */}
      <motion.div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-purple-400/20" animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }} />
      <motion.div className="absolute bottom-10 right-10 w-10 h-10 rounded-full bg-cyan-400/30" animate={{ x: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }} />
      <motion.div className="absolute top-1/2 left-1/4 w-8 h-8 bg-purple-300/40 rotate-45" style={{ borderRadius: '20%' }} animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }} />
      
      {/* Floating Tech Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-7xl mx-auto z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-600 mb-6">
            Veille Technologique
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez mes 6 sources principales de veille technologique pour rester à la pointe de l'innovation et du développement web moderne
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
                    {item.category}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
                    {item.description}
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
                Ressources Supplémentaires
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
                        {item.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
                        {item.description}
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
                {showMore ? 'Masquer les Ressources' : 'Explorer Plus de Ressources'}
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechWatch; 