import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPhp, FaJs, FaHtml5, FaCss3Alt, FaJava, FaReact, FaBootstrap, FaGitAlt, FaDocker, FaGlobe, FaUsers, FaComments } from 'react-icons/fa';
import { SiSymfony, SiTailwindcss, SiMongodb, SiMysql, SiTypescript, SiPython, SiCplusplus, SiFramer } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Langages de Programmation',
    gradient: 'from-purple-500 to-pink-600',
    borderColor: 'border-purple-400',
    glowColor: 'shadow-purple-500/25',
    skills: [
      { name: 'PHP', icon: <FaPhp className="text-purple-400" />, level: 90, color: '#8B5CF6' },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, level: 85, color: '#F59E0B' },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" />, level: 80, color: '#3B82F6' },
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-400" />, level: 95, color: '#F97316' },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-300" />, level: 90, color: '#06B6D4' },
      { name: 'Java', icon: <FaJava className="text-red-400" />, level: 70, color: '#EF4444' },
      { name: 'Python', icon: <SiPython className="text-yellow-200" />, level: 75, color: '#FDE047' },
      { name: 'C++', icon: <SiCplusplus className="text-blue-500" />, level: 65, color: '#3B82F6' },
    ],
  },
  {
    title: 'Frameworks & Bibliothèques',
    gradient: 'from-cyan-500 to-blue-600',
    borderColor: 'border-cyan-400',
    glowColor: 'shadow-cyan-500/25',
    skills: [
      { name: 'Symfony', icon: <SiSymfony className="text-gray-200" />, level: 85, color: '#E5E7EB' },
      { name: 'React', icon: <FaReact className="text-cyan-400" />, level: 90, color: '#22D3EE' },
      { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-400" />, level: 85, color: '#A855F7' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-300" />, level: 95, color: '#67E8F9' },
      { name: 'Framer Motion', icon: <SiFramer className="text-pink-400" />, level: 80, color: '#F472B6' },
    ],
  },
  {
    title: 'Bases de Données',
    gradient: 'from-green-500 to-emerald-600',
    borderColor: 'border-green-400',
    glowColor: 'shadow-green-500/25',
    skills: [
      { name: 'MySQL', icon: <SiMysql className="text-yellow-300" />, level: 85, color: '#FDE047' },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-400" />, level: 75, color: '#4ADE80' },
    ],
  },
  {
    title: 'Outils & DevOps',
    gradient: 'from-orange-500 to-red-600',
    borderColor: 'border-orange-400',
    glowColor: 'shadow-orange-500/25',
    skills: [
      { name: 'Git', icon: <FaGitAlt className="text-orange-400" />, level: 90, color: '#FB923C' },
      { name: 'Docker', icon: <FaDocker className="text-blue-300" />, level: 70, color: '#93C5FD' },
    ],
  },
  {
    title: 'Langues',
    gradient: 'from-indigo-500 to-purple-600',
    borderColor: 'border-indigo-400',
    glowColor: 'shadow-indigo-500/25',
    skills: [
      { name: 'Français', level: 100, description: 'Bilingue', icon: <FaGlobe className="text-blue-400" />, color: '#3B82F6' },
      { name: 'Arabe', level: 100, description: 'Maternelle', icon: <FaGlobe className="text-green-400" />, color: '#10B981' },
      { name: 'Anglais', level: 85, description: 'Technique', icon: <FaGlobe className="text-red-400" />, color: '#EF4444' },
      { name: 'Espagnol', level: 90, description: 'Bilingue', icon: <FaGlobe className="text-yellow-400" />, color: '#F59E0B' },
    ],
  },
  {
    title: 'Compétences Transversales',
    gradient: 'from-rose-500 to-pink-600',
    borderColor: 'border-rose-400',
    glowColor: 'shadow-rose-500/25',
    skills: [
      { name: "Travail d'équipe", level: 95, icon: <FaUsers className="text-blue-400" />, color: '#3B82F6' },
      { name: 'Communication', level: 90, icon: <FaComments className="text-green-400" />, color: '#10B981' },
      { name: 'Autonomie', level: 95, icon: <FaUsers className="text-purple-400" />, color: '#A855F7' },
    ],
  },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#18122B] px-4 md:px-0 relative overflow-hidden py-16">
      {/* Advanced Background Effects */}
      <motion.div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-purple-400/20" animate={{ y: [0, 30, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }} />
      <motion.div className="absolute bottom-10 right-10 w-12 h-12 rounded-full bg-cyan-400/25" animate={{ x: [0, 25, 0] }} transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }} />
      <motion.div className="absolute top-1/3 right-1/4 w-8 h-8 bg-purple-300/30 rotate-45" style={{ borderRadius: '20%' }} animate={{ scale: [1, 1.3, 1], rotate: [45, 90, 45] }} transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }} />
      
      {/* Floating Tech Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400/30 to-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -120, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-7xl mx-auto z-10">
        {/* Modern Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 mb-6">
            Expertise
          </h1>
          <div className="h-1.5 w-40 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez mes compétences techniques et transversales avec des niveaux de maîtrise détaillés
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: categoryIndex * 0.15,
                type: "spring",
                stiffness: 100
              }}
              className={`relative group bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-xl rounded-3xl p-8 border ${category.borderColor}/20 hover:border-white/30 transition-all duration-500 ${category.glowColor} hover:shadow-2xl`}
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${category.gradient} rounded-full mb-4`}>
                  <h2 className="text-lg font-bold text-white tracking-wide">
                    {category.title}
                  </h2>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="relative group/skill"
                  >
                    {/* Skill Item */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        {skill.icon && (
                          <div className="text-2xl transform group-hover/skill:scale-110 transition-transform duration-300">
                            {skill.icon}
                          </div>
                        )}
                        <div>
                          <span className="text-white font-semibold text-lg">
                            {skill.name}
                          </span>
                          {'description' in skill && skill.description && (
                            <p className="text-gray-400 text-sm">
                              {skill.description}
                            </p>
                          )}
                        </div>
                      </div>
                      {skill.level && (
                        <span className="text-sm font-bold text-gray-300 bg-gray-800/50 px-2 py-1 rounded-lg">
                          {skill.level}%
                        </span>
                      )}
                    </div>

                    {/* Progress Bar */}
                    {skill.level && (
                      <div className="relative">
                        <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 1.5, 
                              delay: categoryIndex * 0.2 + skillIndex * 0.1,
                              ease: "easeOut"
                            }}
                            className="h-full rounded-full relative"
                            style={{
                              background: `linear-gradient(90deg, ${skill.color}40, ${skill.color})`
                            }}
                          >
                            <div 
                              className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full"
                              style={{
                                boxShadow: hoveredSkill === skill.name ? `0 0 20px ${skill.color}80` : 'none'
                              }}
                            />
                          </motion.div>
                        </div>
                        
                        {/* Skill Level Indicator */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: hoveredSkill === skill.name ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute -top-8 left-0 bg-gray-900 text-white px-2 py-1 rounded text-xs font-semibold border border-gray-600"
                          style={{ left: `${Math.min(skill.level, 90)}%` }}
                        >
                          {skill.level}%
                        </motion.div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Category Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
              
              {/* Border Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Langages', value: '8+', color: 'from-purple-500 to-pink-500' },
            { label: 'Frameworks', value: '5+', color: 'from-cyan-500 to-blue-500' },
            { label: 'Années Exp.', value: '3+', color: 'from-green-500 to-emerald-500' },
            { label: 'Projets', value: '10+', color: 'from-orange-500 to-red-500' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.7 + index * 0.1, duration: 0.5 }}
              className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-white/20 transition-all duration-300"
            >
              <div className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-300 font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills; 