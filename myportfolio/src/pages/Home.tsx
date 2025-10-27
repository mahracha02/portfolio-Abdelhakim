import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import profilePic from '../assets/profile.png';
import { FaEnvelope, FaLinkedin, FaGithub, FaReact, FaNodeJs, FaPython, FaPhp, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiMongodb, SiMysql, SiSymfony, SiBootstrap, SiHtml5, SiCss3, SiDocker } from 'react-icons/si';
import CV from '../../public/files/Développeur Full-Stack.pdf';

const Home = () => {
  const { t } = useTranslation();

  const skills = [
    { icon: FaReact, name: 'React', color: '#61DAFB' },
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: FaNodeJs, name: 'Node.js', color: '#339933' },
    { icon: FaPython, name: 'Python', color: '#3776AB' },
    { icon: FaPhp, name: 'PHP', color: '#777BB4' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' },
    { icon: SiBootstrap, name: 'Bootstrap', color: '#7952B3' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
    { icon: SiSymfony, name: 'Symfony', color: '#000000' },
    { icon: FaGitAlt, name: 'Git', color: '#F05032' },
    { icon: SiDocker, name: 'Docker', color: '#2496ED' },
    { icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
    { icon: SiCss3, name: 'CSS3', color: '#1572B6' },
    { icon: FaDatabase, name: 'Database', color: '#336791' }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#18122B] px-4 md:px-0 relative overflow-hidden">
      {/* Animated Geometric Shapes */}
      <motion.div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-purple-400/30" animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }} />
      <motion.div className="absolute bottom-10 right-10 w-10 h-10 rounded-full bg-purple-400/40" animate={{ x: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }} />
      <motion.div className="absolute top-1/2 left-1/4 w-8 h-8 bg-purple-300 rotate-45" style={{ borderRadius: '20%' }} animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }} />
      {/* Main Content */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-12 z-10">
        {/* Profile Image with Purple Circle */}
        <div className="relative flex flex-col items-center">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-purple-400 via-purple-500 to-purple-700 flex items-center justify-center shadow-2xl relative">
            <img src={profilePic} alt="Abdelhakim Mahracha" className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-xl" />
            {/* Animated Accent */}
            <motion.div className="absolute -top-4 -right-4 w-8 h-8 bg-white/30 rounded-full" animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }} />
          </div>
        </div>
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2">
            Abdelhakim <span className="block text-purple-400">Mahracha</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-purple-300">
            Full-Stack Developer
          </h2>
          <p className="text-gray-200 max-w-md mb-6">
            Passionné, rigoureux et doté d'un excellent esprit d'analyse, je combine compétences techniques solides et capacité d'adaptation rapide. Motivé pour contribuer à des projets innovants tout en développant continuellement mes compétences.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 justify-center md:justify-start mb-6">
            <a href="mailto:abdelhakim22mahraccha@gmail.com" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white text-2xl transition-colors"><FaEnvelope /></a>
            <a href="https://linkedin.com/in/abdelhakim-mahraccha" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white text-2xl transition-colors"><FaLinkedin /></a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white text-2xl transition-colors"><FaGithub /></a>
          </div>
          {/* Download CV Button */}
          <motion.a
            href={CV}
            download
            whileHover={{ scale: 1.05, boxShadow: '0 0 24px #a78bfa' }}
            className="inline-block bg-purple-400 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-purple-500 transition-colors text-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 animation-pulse animation-duration-2000"
            style={{ boxShadow: '0 0 16px #a78bfa' }}
          >
            Télécharger CV
          </motion.a>
        </div>
      </div>

      {/* Skills Section with Auto-Sliding Carousel */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="w-full max-w-6xl mt-16 px-4"
      >

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8 items-center"
            animate={{ x: [0, -1920] }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ width: `${skills.length * 240}px` }}
          >
            {[...skills, ...skills].map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={`${skill.name}-${index}`}
                  className="flex-shrink-0 w-48 h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 flex flex-col items-center justify-center shadow-lg border border-gray-700 hover:border-purple-400 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: `0 10px 30px ${skill.color}40`
                  }}
                >
                  <IconComponent 
                    className="text-4xl mb-3 transition-colors duration-300" 
                    style={{ color: skill.color }}
                  />
                  <span className="text-white font-semibold text-sm text-center">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Skills Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          <div className="text-center p-6 bg-gradient-to-br from-purple-900/30 to-purple-800/30 rounded-xl border border-purple-700/50">
            <div className="text-3xl font-bold text-purple-300 mb-2">16+</div>
            <div className="text-gray-300">{t('skills.technologies', 'Technologies')}</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-900/30 to-blue-800/30 rounded-xl border border-blue-700/50">
            <div className="text-3xl font-bold text-blue-300 mb-2">5+</div>
            <div className="text-gray-300">{t('skills.frameworks', 'Frameworks')}</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-900/30 to-green-800/30 rounded-xl border border-green-700/50">
            <div className="text-3xl font-bold text-green-300 mb-2">3+</div>
            <div className="text-gray-300">{t('skills.databases', 'Bases de données')}</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home; 