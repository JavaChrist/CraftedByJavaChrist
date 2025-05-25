import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Une plateforme e-commerce complète avec panier, paiement et gestion des commandes.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Application de gestion de tâches collaborative avec notifications en temps réel.',
      technologies: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL'],
      image: '📋',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Dashboard météo interactif avec prévisions et cartes météorologiques.',
      technologies: ['React', 'API REST', 'Chart.js', 'Tailwind CSS'],
      image: '🌤️',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Social Media App',
      description: 'Réseau social avec posts, commentaires, likes et messagerie instantanée.',
      technologies: ['React', 'Firebase', 'Material-UI', 'PWA'],
      image: '📱',
      demoUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Mes Projets
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="text-6xl mb-4 text-center">{project.image}</div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
                    >
                      Voir le projet
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex-1 border-2 border-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 font-medium"
                    >
                      Code source
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold"
            >
              Discutons de votre projet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 