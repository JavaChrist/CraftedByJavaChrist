import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique pour envoyer le formulaire
    console.log('Formulaire soumis:', formData);
    alert('Message envoyé ! Je vous répondrai dans les plus brefs délais.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'contact@javachrist.dev',
      link: 'mailto:contact@javachrist.dev',
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'JavaChrist',
      link: 'https://linkedin.com/in/javachrist',
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: 'javachrist',
      link: 'https://github.com/javachrist',
    },
    {
      icon: '📍',
      title: 'Localisation',
      value: 'France (Remote)',
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contactez-moi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Vous avez un projet en tête ? Une question ? N'hésitez pas à me contacter.
            Je serais ravi de discuter de vos besoins et de voir comment je peux vous aider.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Restons en contact
            </h2>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">{info.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="font-semibold text-gray-900 mb-4">
                Disponibilité
              </h3>
              <p className="text-gray-600 mb-4">
                Je suis actuellement disponible pour de nouveaux projets.
                Temps de réponse habituel : 24-48h.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-700 font-medium">Disponible</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Décrivez votre projet ou votre demande..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                Envoyer le message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Questions fréquentes
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white rounded-lg p-6 border">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Quels types de projets acceptez-vous ?
                </h3>
                <p className="text-gray-600 text-sm">
                  Applications web (React/Next.js), applications mobiles (Flutter),
                  solutions SaaS, sites e-commerce, et intégrations API.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Quel est votre délai de réponse ?
                </h3>
                <p className="text-gray-600 text-sm">
                  Je réponds généralement dans les 24-48h. Pour les urgences,
                  n'hésitez pas à le mentionner dans votre message.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Travaillez-vous en remote ?
                </h3>
                <p className="text-gray-600 text-sm">
                  Oui, je travaille principalement en remote avec des clients
                  partout en France et à l'international.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Proposez-vous de la maintenance ?
                </h3>
                <p className="text-gray-600 text-sm">
                  Oui, je propose des contrats de maintenance et d'évolution
                  pour assurer la pérennité de vos applications.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 