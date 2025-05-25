import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Projets', path: '/projects' },
    { name: 'À propos', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
            CraftedByJavaChrist
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${isActive(item.path)
                    ? 'text-black'
                    : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-2 text-sm font-medium transition-colors ${isActive(item.path)
                    ? 'text-black'
                    : 'text-gray-600 hover:text-gray-900'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar; 