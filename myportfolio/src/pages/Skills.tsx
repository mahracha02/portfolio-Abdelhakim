import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaPhp, FaJs, FaHtml5, FaCss3Alt, FaJava, FaReact, FaBootstrap, FaGitAlt, FaDocker, FaGlobe, FaUsers, FaComments } from 'react-icons/fa';
import { SiSymfony, SiTailwindcss, SiMongodb, SiMysql, SiTypescript, SiPython } from 'react-icons/si';

// Type definitions for skills
interface BaseSkill {
  level: number;
  icon: React.ReactElement;
  color: string;
}

interface SkillWithName extends BaseSkill {
  name: string;
  description?: string;
}

interface SkillWithKeys extends BaseSkill {
  nameKey: string;
  descriptionKey?: string;
}

type Skill = SkillWithName | SkillWithKeys;

interface SkillCategory {
  titleKey: string;
  gradient: string;
  borderColor: string;
  glowColor: string;
  skills: Skill[];
}

// Helper functions for skill handling
const getSkillKey = (skill: Skill): string => {
  return 'nameKey' in skill ? skill.nameKey : skill.name;
};

const getSkillName = (skill: Skill, t: (key: string) => string): string => {
  return 'nameKey' in skill ? t(skill.nameKey) : skill.name;
};

const getSkillDescription = (skill: Skill, t: (key: string) => string): string | undefined => {
  if ('descriptionKey' in skill && skill.descriptionKey) {
    return t(skill.descriptionKey);
  }
  if ('description' in skill) {
    return skill.description;
  }
  return undefined;
};

const hasDescription = (skill: Skill): boolean => {
  return ('description' in skill && !!skill.description) || ('descriptionKey' in skill && !!skill.descriptionKey);
};

const skillCategories: SkillCategory[] = [
  {
    titleKey: 'skills.categories.0.title',
    gradient: 'from-purple-500 to-pink-600',
    borderColor: 'border-purple-400',
    glowColor: 'shadow-purple-500/25',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-400" />, level: 100, color: '#F97316' },
      { name: 'PHP', icon: <FaPhp className="text-purple-400" />, level: 95, color: '#8B5CF6' },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, level: 90, color: '#F59E0B' },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-300" />, level: 90, color: '#06B6D4' },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" />, level: 80, color: '#3B82F6' },
      { name: 'Java', icon: <FaJava className="text-red-400" />, level: 70, color: '#EF4444' },
      { name: 'Python', icon: <SiPython className="text-yellow-200" />, level: 30, color: '#FDE047' },
    ],
  },
  {
    titleKey: 'skills.categories.1.title',
    gradient: 'from-cyan-500 to-blue-600',
    borderColor: 'border-cyan-400',
    glowColor: 'shadow-cyan-500/25',
    skills: [
      { name: 'Symfony', icon: <SiSymfony className="text-gray-200" />, level: 95, color: '#E5E7EB' },
      { name: 'React', icon: <FaReact className="text-cyan-400" />, level: 95, color: '#22D3EE' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-300" />, level: 90, color: '#67E8F9' },
      { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-400" />, level: 85, color: '#A855F7' },
    ],
  },
  {
    titleKey: 'skills.categories.2.title',
    gradient: 'from-green-500 to-emerald-600',
    borderColor: 'border-green-400',
    glowColor: 'shadow-green-500/25',
    skills: [
      { name: 'MySQL', icon: <SiMysql className="text-yellow-300" />, level: 90, color: '#FDE047' },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-400" />, level: 75, color: '#4ADE80' },
    ],
  },
  {
    titleKey: 'skills.categories.3.title',
    gradient: 'from-orange-500 to-red-600',
    borderColor: 'border-orange-400',
    glowColor: 'shadow-orange-500/25',
    skills: [
      { name: 'Git', icon: <FaGitAlt className="text-orange-400" />, level: 90, color: '#FB923C' },
      { name: 'Docker', icon: <FaDocker className="text-blue-300" />, level: 70, color: '#93C5FD' },
    ],
  },
  {
    titleKey: 'skills.categories.4.title',
    gradient: 'from-indigo-500 to-purple-600',
    borderColor: 'border-indigo-400',
    glowColor: 'shadow-indigo-500/25',
    skills: [
      { nameKey: 'skills.categories.4.skills.0.name', level: 100, descriptionKey: 'skills.categories.4.skills.0.description', icon: <FaGlobe className="text-blue-400" />, color: '#3B82F6' },
      { nameKey: 'skills.categories.4.skills.1.name', level: 100, descriptionKey: 'skills.categories.4.skills.1.description', icon: <FaGlobe className="text-green-400" />, color: '#10B981' },
      { nameKey: 'skills.categories.4.skills.2.name', level: 90, descriptionKey: 'skills.categories.4.skills.2.description', icon: <FaGlobe className="text-yellow-400" />, color: '#F59E0B' },
      { nameKey: 'skills.categories.4.skills.3.name', level: 85, descriptionKey: 'skills.categories.4.skills.3.description', icon: <FaGlobe className="text-red-400" />, color: '#EF4444' },
    ],
  },
  {
    titleKey: 'skills.categories.5.title',
    gradient: 'from-rose-500 to-pink-600',
    borderColor: 'border-rose-400',
    glowColor: 'shadow-rose-500/25',
    skills: [
      { nameKey: 'skills.categories.5.skills.0.name', level: 100, icon: <FaUsers className="text-blue-400" />, color: '#3B82F6' },
      { nameKey: 'skills.categories.5.skills.1.name', level: 100, icon: <FaComments className="text-green-400" />, color: '#10B981' },
      { nameKey: 'skills.categories.5.skills.2.name', level: 95, icon: <FaUsers className="text-purple-400" />, color: '#A855F7' },
    ],
  },
];

const Skills = () => {
  const { t } = useTranslation();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

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
        {/* Modern Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 mb-6 pb-4">
            {t('skills.title')}
          </h1>
          <div className="h-1.5 w-40 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('skills.description')}
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.titleKey}
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
                    {t(category.titleKey)}
                  </h2>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={getSkillKey(skill)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    onMouseEnter={() => setHoveredSkill(getSkillKey(skill))}
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
                            {getSkillName(skill, t)}
                          </span>
                          {hasDescription(skill) && (
                            <p className="text-gray-400 text-sm">
                              {getSkillDescription(skill, t)}
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
                                boxShadow: hoveredSkill === getSkillKey(skill) ? `0 0 20px ${skill.color}80` : 'none'
                              }}
                            />
                          </motion.div>
                        </div>
                        
                        {/* Skill Level Indicator */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: hoveredSkill === getSkillKey(skill) ? 1 : 0 }}
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
            { label: 'Langages', value: '7+', color: 'from-purple-500 to-pink-500' },
            { label: 'Frameworks', value: '5+', color: 'from-cyan-500 to-blue-500' },
            { label: 'Années Exp.', value: '2+', color: 'from-green-500 to-emerald-500' },
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
      </motion.div>
    </div>
  );
};

export default Skills; 