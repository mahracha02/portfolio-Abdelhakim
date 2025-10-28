import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaUser, FaAt, FaCommentDots } from 'react-icons/fa';

const contactInfo = [
  { icon: <FaEnvelope />, text: 'abdelhakim22mahracha@gmail.com', href: 'mailto:abdelhakim22mahracha@gmail.com' },
  { icon: <FaPhone />, text: '0652049943', href: 'tel:0652049943' },
  { icon: <FaMapMarkerAlt />, text: 'Toulouse, France', href: '#' },
  { icon: <FaLinkedin />, text: 'LinkedIn', href: 'https://www.linkedin.com/in/abdelhakim-mahracha-b750a6298/' },
  { icon: <FaGithub />, text: 'GitHub', href: 'https://github.com/mahracha02' },
];

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('https://formspree.io/f/mdkzbzel', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(e.target as HTMLFormElement),
      });
      const data = await res.json();
      if (data.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError(t('contact.error'));
      }
    } catch {
      setError(t('contact.error'));
    } finally {
      setLoading(false);
    }
  };

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
        {/* Ultra-Modern Header Section */}
        <div className="text-center mb-20">
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="p-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl backdrop-blur-sm border border-purple-500/20">
              <FaEnvelope className="text-4xl text-purple-400 mx-auto" />
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-8 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t('contact.title')}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Ultra-Modern Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-8 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                <FaPaperPlane className="text-purple-400 mr-3" />
                {t('contact.form.title')}
              </h2>
              <p className="text-gray-400">{t('contact.form.description')}</p>
            </div>

            {success ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="text-center py-16"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaPaperPlane className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{t('contact.form.success.title')}</h3>
                <p className="text-green-400 text-lg">{t('contact.form.success.message')}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400" />
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder={t('contact.form.name')} 
                    required 
                    className="w-full bg-gray-800/50 border border-gray-700/50 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <FaAt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400" />
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder={t('contact.form.email')} 
                    required 
                    className="w-full bg-gray-800/50 border border-gray-700/50 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <FaCommentDots className="absolute left-4 top-6 text-purple-400" />
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder={t('contact.form.message')} 
                    required 
                    rows={6}
                    className="w-full bg-gray-800/50 border border-gray-700/50 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                  />
                </div>

                {error && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    className="p-4 bg-red-500/10 border border-red-500/30 rounded-2xl"
                  >
                    <p className="text-red-400 text-center">{error}</p>
                  </motion.div>
                )}

                <motion.button 
                  type="submit" 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center space-x-3"
                  disabled={loading}
                >
                  <FaPaperPlane className={`${loading ? 'animate-bounce' : ''}`} />
                  <span>{loading ? t('contact.form.sending') : t('contact.form.send')}</span>
                </motion.button>
              </form>
            )}
          </motion.div>
          {/* Ultra-Modern Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">{t('contact.info.title')}</h2>
              <p className="text-gray-400">{t('contact.info.description')}</p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.text}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="group flex items-center space-x-4 p-6 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-purple-500/30 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                    <span className="text-purple-400 text-xl group-hover:text-purple-300 transition-colors">
                      {info.icon}
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="text-white font-semibold group-hover:text-purple-200 transition-colors break-all">
                      {info.text}
                    </span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional Contact Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-12 grid grid-cols-2 gap-4"
            >
              <div className="text-center p-4 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl border border-gray-700/30">
                <div className="text-2xl font-bold text-purple-400 mb-1">24h</div>
                <div className="text-sm text-gray-400">{t('contact.stats.responseTime')}</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl border border-gray-700/30">
                <div className="text-2xl font-bold text-blue-400 mb-1">100%</div>
                <div className="text-sm text-gray-400">{t('contact.stats.replyRate')}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact; 