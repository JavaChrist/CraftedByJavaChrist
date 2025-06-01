import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            À propos de moi
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center p-2">
                <div className="w-72 h-72 bg-white rounded-full overflow-hidden flex items-center justify-center">
                  <img
                    src="/images/Christian.png"
                    alt="Christian - Développeur Full Stack"
                    className="w-full h-full object-cover rounded-full scale-130"
                    style={{ objectPosition: 'center top' }}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Passionné par le développement web depuis plusieurs années, je me spécialise
                dans la création d'applications modernes et performantes. Mon expertise couvre
                le développement front-end et back-end, avec une attention particulière portée
                à l'expérience utilisateur.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                J'aime relever de nouveaux défis techniques et apprendre constamment de
                nouvelles technologies. Mon objectif est de créer des solutions innovantes
                qui répondent aux besoins réels des utilisateurs.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">5+</div>
                  <div className="text-gray-600">Années d'expérience</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">90+</div>
                  <div className="text-gray-600">Projets & outils</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 