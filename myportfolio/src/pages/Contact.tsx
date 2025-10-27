import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const contactInfo = [
  { icon: <FaEnvelope />, text: 'abdelhakim22mahracha@gmail.com', href: 'mailto:abdelhakim22mahracha@gmail.com' },
  { icon: <FaPhone />, text: '0652049943', href: 'tel:0652049943' },
  { icon: <FaMapMarkerAlt />, text: 'Toulouse, France', href: '#' },
  { icon: <FaLinkedin />, text: 'LinkedIn', href: 'https://linkedin.com/in/abdelhakim-mahracha' },
  { icon: <FaGithub />, text: 'GitHub', href: 'https://github.com/mahracha02' },
];

const Contact = () => {
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
        setError('An error occurred. Please try again.');
      }
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#18122B] px-4 md:px-0 relative overflow-hidden py-16">
      {/* Animated Geometric Shapes */}
      <motion.div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-purple-400/30" animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }} />
      <motion.div className="absolute bottom-10 right-10 w-10 h-10 rounded-full bg-purple-400/40" animate={{ x: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }} />
      <motion.div className="absolute top-1/2 left-1/4 w-8 h-8 bg-purple-300 rotate-45" style={{ borderRadius: '20%' }} animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }} />

      <div className="w-full max-w-4xl mx-auto z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8 text-center">
          Get in <span className="text-purple-400">Touch</span>
        </h1>
        <div className="bg-[#221a38] rounded-xl p-8 shadow-lg border border-purple-400/30 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            {success ? (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center text-green-400 text-lg font-semibold py-12">
                Thank you! Your message has been sent successfully.
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full bg-[#1a1333] border border-purple-400/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-400" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="w-full bg-[#1a1333] border border-purple-400/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-400" />
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required rows={5} className="w-full bg-[#1a1333] border border-purple-400/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-400" />
                {error && <div className="text-red-400 text-sm text-center">{error}</div>}
                <motion.button type="submit" whileHover={{ scale: 1.05, boxShadow: '0 0 16px #a78bfa' }} className="w-full bg-purple-400 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-purple-500 transition-colors" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            )}
          </div>
          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-4">
            {contactInfo.map(info => (
              <a key={info.text} href={info.href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-200 hover:text-purple-300 transition-colors">
                <span className="text-xl text-purple-400">{info.icon}</span>
                <span className="break-all">{info.text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 