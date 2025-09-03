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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-200">
              <img 
                src={avatarImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <button
              onClick={() => scrollToSection('hero')}
              className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Bilal Çavuş
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('projects')}
              className={`text-xs font-normal transition-colors hover:opacity-70 ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`text-xs font-normal transition-colors hover:opacity-70 ${
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
