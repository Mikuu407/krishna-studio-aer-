
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ['About', 'Portfolio', 'Packages', 'Testimonials', 'Contact'];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wider text-gray-800 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Krishna Studio
        </h1>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
            >
              {link}
            </button>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none">
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center py-4">
            {navLinks.map((link) => (
              <li key={link} className="w-full text-center">
                <button
                  onClick={() => scrollToSection(link)}
                  className="py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 w-full transition duration-300 ease-in-out"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;