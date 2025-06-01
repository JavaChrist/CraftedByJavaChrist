import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const skills = [
    { category: 'Frontend', techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Mobile', techs: ['Flutter', 'React Native', 'Dart'] },
    { category: 'Backend', techs: ['Node.js', 'Firebase', 'API REST', 'Authentication'] },
    { category: 'Outils', techs: ['Git', 'GitHub', 'VS Code', 'Figma', 'Vercel'] },
    { category: 'Paiements', techs: ['Stripe', 'PayPal', 'Facturation automatisée'] },
  ];

  const experiences = [
    {
      period: '2023 - Présent',
      title: 'Développeur Freelance Full Stack',
      company: 'CraftedByJavaChrist',
      description: 'Développement d\'applications web et mobiles sur mesure pour des clients variés. Spécialisation dans les solutions SaaS et les plateformes e-commerce.',
    },
    {
      period: '2022 - 2023',
      title: 'Développeur React/Next.js',
      company: 'EDF (Unitep)',
      description: 'Développement d\'une application Next.js professionnelle pour la gestion de fichiers via NAS avec authentification Firebase.',
    },
    {
      period: '2019 - 2022',
      title: 'Développeur Full Stack',
      company: 'Projets personnels & Formation',
      description: 'Début de ma carrière en développement avec la création de nombreuses applications web, apprentissage des technologies modernes et développement de plus de 90 projets et outils.',
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
            À propos de moi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Développeur passionné avec plus de 5 ans d'expérience dans la création
            d'applications web et mobiles modernes et performantes.
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Mon parcours
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Passionné par le développement depuis mon plus jeune âge, j'ai transformé
                cette passion en expertise professionnelle. Spécialisé dans l'écosystème
                React et les technologies modernes, je crée des solutions qui allient
                performance technique et expérience utilisateur exceptionnelle.
              </p>
              <p>
                Mon approche se concentre sur la création d'applications robustes,
                scalables et maintenables. J'accorde une attention particulière à
                l'architecture du code et aux bonnes pratiques de développement.
              </p>
              <p>
                En tant que freelance, j'accompagne mes clients de la conception
                à la mise en production, en passant par le développement et le déploiement
                de leurs projets.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center p-1">
                <div className="w-full h-full bg-white rounded-full overflow-hidden flex items-center justify-center">
                  <img
                    src="/images/Christian.png"
                    alt="Christian - Développeur Full Stack"
                    className="w-full h-full object-cover rounded-full scale-130"
                    style={{ objectPosition: 'center top' }}
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">JavaChrist</h3>
              <p className="text-gray-600">Développeur Full Stack</p>
            </div>
          </div>
        </motion.div>

        {/* Expériences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Expérience professionnelle
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="border-l-4 border-blue-500 pl-6 py-4"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <span className="text-sm text-blue-600 font-medium">{exp.period}</span>
                </div>
                <p className="text-gray-700 font-medium mb-2">{exp.company}</p>
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compétences techniques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Stack technique
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {skillGroup.category}
                </h3>
                <div className="space-y-2">
                  {skillGroup.techs.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block bg-white px-3 py-1 rounded-md text-sm text-gray-700 mr-2 mb-2 border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications & Formation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gray-50 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Formation continue
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Toujours en veille technologique, je me forme continuellement aux dernières
            technologies et bonnes pratiques du développement web et mobile.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border">
              <h3 className="font-semibold text-gray-900 mb-2">Autoformation</h3>
              <p className="text-gray-600 text-sm">Documentation officielle, tutoriels, projets personnels</p>
            </div>
            <div className="bg-white rounded-lg p-6 border">
              <h3 className="font-semibold text-gray-900 mb-2">Communauté</h3>
              <p className="text-gray-600 text-sm">GitHub, Stack Overflow, forums spécialisés</p>
            </div>
            <div className="bg-white rounded-lg p-6 border">
              <h3 className="font-semibold text-gray-900 mb-2">Projets réels</h3>
              <p className="text-gray-600 text-sm">Expérience pratique sur des projets clients variés</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About; 