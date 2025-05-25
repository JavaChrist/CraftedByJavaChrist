import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">JavaChrist</h3>
              <p className="text-gray-300 leading-relaxed">
                Développeur Full Stack passionné par la création d'expériences web
                modernes et performantes.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#hero" className="text-gray-300 hover:text-white transition-colors duration-300">
                    Accueil
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">
                    À propos
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">
                    Projets
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p>📧 contact@javachrist.dev</p>
                <p>📱 +33 6 12 34 56 78</p>
                <p>📍 Paris, France</p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <span className="text-sm font-bold">Li</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <span className="text-sm font-bold">Gh</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <span className="text-sm font-bold">Tw</span>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © {currentYear} JavaChrist. Tous droits réservés. Fait avec ❤️ et React.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 