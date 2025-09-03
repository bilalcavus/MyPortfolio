import React, { useEffect, useState } from 'react';
import avatarImage from '../../assets/avatar/avatar_profile.png';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-200">
              <img 
                src={avatarImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <button
              onClick={() => scrollToSection('hero')}
              className={`text-lg font-medium transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Bilal Çavuş
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('projects')}
              className={`text-sm font-normal transition-colors hover:opacity-70 ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`text-sm font-normal transition-colors hover:opacity-70 ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
