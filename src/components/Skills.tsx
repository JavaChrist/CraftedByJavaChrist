import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'React', level: 90, color: 'bg-blue-500' },
    { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
    { name: 'Node.js', level: 80, color: 'bg-green-500' },
    { name: 'Python', level: 75, color: 'bg-yellow-500' },
    { name: 'MongoDB', level: 70, color: 'bg-green-600' },
    { name: 'PostgreSQL', level: 75, color: 'bg-blue-700' },
  ];

  const tools = [
    'Git & GitHub',
    'Docker',
    'AWS',
    'Figma',
    'VS Code',
    'Postman',
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Mes Compétences
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">
                Technologies
              </h3>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Others */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">
                Outils & Autres
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool) => (
                  <div
                    key={tool}
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{tool}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Soft Skills */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  Compétences transversales
                </h4>
                <div className="flex flex-wrap gap-3">
                  {['Travail d\'équipe', 'Communication', 'Résolution de problèmes', 'Créativité', 'Adaptabilité'].map((softSkill) => (
                    <span
                      key={softSkill}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {softSkill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 