import React from 'react';
import avatarImage from '../../assets/avatar/avatar_profile.png';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-white flex items-center justify-center pt-8 sm:pt-12 pb-2 sm:pb-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xs sm:max-w-md lg:max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 p-4 sm:p-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 gap-2 h-full">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="text-white text-center text-lg">+</div>
                  ))}
                </div>
              </div>
              
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
              
              <div className="relative z-10 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30 scale-110"></div>
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl ring-4 ring-white/10">
                    <img 
                      src={avatarImage} 
                      alt="Bilal Çavuş" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 sm:p-6 text-center">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Bilal Çavuş
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                Mobile Developer
              </p>
              <p className="text-gray-700 leading-relaxed max-w-sm sm:max-w-xl mx-auto mb-4 sm:mb-6 text-xs sm:text-sm">
                I'm a mobile developer with a passion for building fast, scalable, and user-friendly solutions with Flutter, Kotlin and Node.js.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-between pt-4 sm:pt-6 border-t border-gray-100 space-y-3 sm:space-y-0">
                <div className="flex space-x-2 sm:space-x-3">
                  <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-gray-300 transition-colors">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </button>
                  <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-gray-300 transition-colors">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                  <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-gray-300 transition-colors">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
                
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-black text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs font-medium hover:bg-gray-800 transition-colors"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
