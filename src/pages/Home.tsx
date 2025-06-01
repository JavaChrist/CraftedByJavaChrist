import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Développeur
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Full Stack
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Développeur web & mobile freelance spécialisé dans la création d'applications
            modernes et performantes. Expert React, Next.js, Flutter et Firebase.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/projects"
              className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Voir mes projets
            </Link>
            <Link
              to="/contact"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Me contacter
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8 text-center"
        >
          <div className="p-6">
            <div className="text-4xl font-bold text-gray-900 mb-2">90+</div>
            <div className="text-gray-600">Projets réalisés</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-gray-900 mb-2">5+</div>
            <div className="text-gray-600">Années d'expérience</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
            <div className="text-gray-600">Satisfaction client</div>
          </div>
        </motion.div>
      </section>

      {/* Technologies Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Technologies maîtrisées</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'Next.js', 'TypeScript', 'Flutter', 'Firebase',
              'Node.js', 'Tailwind CSS', 'Stripe', 'GitHub API'
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center bg-gray-50 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Discutons de vos besoins et créons ensemble une solution sur mesure
            qui répond parfaitement à vos attentes.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            Démarrer un projet
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home; 