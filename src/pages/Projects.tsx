import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ui/ProjectCard';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const completedProjects = projects.filter(p => p.status === 'Terminé');
  const ongoingProjects = projects.filter(p => p.status === 'En cours');

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
            Mes Projets
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez une sélection de mes réalisations, des applications web aux solutions mobiles,
            chacune conçue avec passion et expertise technique.
          </p>
        </motion.div>

        {/* Projets terminés */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Projets terminés ({completedProjects.length})
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projets en cours */}
        {ongoingProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Projets en cours ({ongoingProjects.length})
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ongoingProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vous avez un projet en tête ?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Que ce soit pour une application web, mobile ou une solution sur mesure,
              je serais ravi de discuter de votre projet et de vous accompagner dans sa réalisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact#contactez-moi"
                className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                Discutons de votre projet
              </Link>
              <a
                href="https://github.com/javachrist"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Voir mon GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 