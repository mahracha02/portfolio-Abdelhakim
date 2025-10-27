import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const education = [
  {
    degree: 'MBA Développeur Full-Stack',
    school: 'MyDigitalSchool',
    years: '2025 – 2027',
  },
  {
    degree: 'Bachelor Développeur Web',
    school: 'MyDigitalSchool - Toulouse',
    years: '2024 – 2025',
  },
  {
    degree: 'BTS SIO Option SLAM',
    school: 'Lycée Suzanne Valadon - Limoges',
    years: '2022 – 2024',
  },
];

const experience = [
  {
    title: 'Développeur Full-Stack',
    company: 'Galerie d’art Toulousaine',
    period: 'Février 2025 - Octobre 2025',
    description: 'Développement d’une application web pour la gestion des expositions, des évènements et des artistes. Stack: Symfony, React, PHP, JavaScript, Tailwind.'
  },
  {
    title: 'Développeur Full-Stack',
    company: 'École 3IL – Limoges',
    period: 'janvier 2024 - Mars 2024',
    description: 'Développement d’une application web d’analyse médicale en modèle MVC. Stack: HTML, CSS, Bootstrap, PHP.'
  },
  {
    title: 'Développeur Web',
    company: 'Broussaud Textiles – Limoges',
    period: 'Mai 2023 - Juillet 2023',
    description: 'Développement de requêtes MySQL en PHP pour la gestion des stocks. Stack: HTML, Bootstrap, JavaScript, PHP.'
  },
];

const About = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#18122B] px-4 md:px-0 relative overflow-hidden py-16">
      {/* Animated Geometric Shapes */}
      <motion.div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-purple-400/30" animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }} />
      <motion.div className="absolute bottom-10 right-10 w-10 h-10 rounded-full bg-purple-400/40" animate={{ x: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }} />
      <motion.div className="absolute top-1/2 left-1/4 w-8 h-8 bg-purple-300 rotate-45" style={{ borderRadius: '20%' }} animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }} />
      <div className="w-full max-w-4xl mx-auto z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8 text-center">
          <span className="text-purple-400"> {t('about.title', 'About')} </span>
        </h1>
        <p className="text-lg text-gray-200 mb-12 text-center max-w-2xl mx-auto"> 
          {t('about.description')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div> 
            <h2 className="text-2xl font-bold text-purple-300 mb-4">{t('about.education.title', 'Éducation')}</h2> 
            <div className="space-y-4">
              {(t('about.education.degrees', { returnObjects: true }) as any[] || education).map((edu: any, idx: number) => (
                <motion.div key={idx} className="bg-[#221a38] rounded-xl p-5 shadow-md border-l-4 border-purple-400" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.2 }}>
                  <div className="font-semibold text-white">{edu.degree}</div>
                  <div className="text-purple-300">{edu.school}</div>
                  <div className="text-gray-400 text-sm">{edu.years}</div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Experience */}
          <div>
            <h2 className="text-2xl font-bold text-purple-300 mb-4">{t('about.experience.title', 'Expérience')}</h2>
            <div className="space-y-4">
              {(t('about.experience.jobs', { returnObjects: true }) as any[] || experience).map((exp: any, idx: number) => (
                <motion.div key={idx} className="bg-[#221a38] rounded-xl p-5 shadow-md border-l-4 border-purple-400" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.2 }}>
                  <div className="font-semibold text-white">{exp.title}</div>
                  <div className="text-purple-300">{exp.company}</div>
                  <div className="text-gray-400 text-sm mb-2">{exp.period}</div>
                  <div className="text-gray-200 text-sm">{exp.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 