import React, { useState } from 'react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
        id: 'mindflow',
        title: 'MindFlow',
        description: 'AI-powered analyze and chat application with intelligent conversation flow and context awareness. Published on Google Play Store.',
        technologies: ['Flutter', 'Openrouter, Groq, Together LLM APIs', 'Easy Localization', 'Firebase', 'Sqflite', 'Provider', 'Git'],
        mainImage: require('../../assets/project/mindflow/12.png'),
        images: [
          require('../../assets/project/mindflow/11.png'),
          require('../../assets/project/mindflow/12.png'),
          require('../../assets/project/mindflow/13.png'),
          require('../../assets/project/mindflow/14.png'),
          require('../../assets/project/mindflow/15.png'),
        ]
      },
    {
        id: 'farmodo',
        title: 'Farmodo',
        description: 'A Pomodoro-based app where you earn xp for completing tasks. Focus and earn xp. This way, you can improve your farming and buy new animals! Closed test on Google Play Store.',
        technologies: ['Flutter', 'Firebase', 'Git', 'Flame', 'GetX'],
        mainImage: require('../../assets/project/farmodo/farmodo-home.png'),
        images: [
          require('../../assets/project/farmodo/farmodo-home.png'),
          require('../../assets/project/farmodo/farmodo-reward.png'),
          require('../../assets/project/farmodo/farmodo-store.png')
        ]
      },
    {
      id: 'vpn',
      title: 'VPN App',
      description: 'Secure VPN application with multiple server locations and connection management. An interview case study.',
      technologies: ['Flutter', 'Git', 'Shared Preferences', 'GetX'],
      mainImage: require('../../assets/project/vpn/vpn-home.png'),
      images: [
        require('../../assets/project/vpn/vpn-home.png'),
        require('../../assets/project/vpn/vpn-home-dark.png'),
        require('../../assets/project/vpn/vpn-connect.png')
      ]
    },
    {
        id: 'takasla',
        title: 'Takasla',
        description: 'Barter and exchange platform with swiper interface for easy item discovery.',
        technologies: ['Flutter', 'Node.js', 'PostgreSQL', 'Socket.io', 'Git', 'GetX'],
        mainImage: require('../../assets/project/takasla/takasla-home.png'),
        images: [
          require('../../assets/project/takasla/takasla-home.png'),
          require('../../assets/project/takasla/takasla-swiper.png')
        ]
      },
    {
      id: 'bidynamic',
      title: 'BiDynamic',
      description: 'This application, which belongs to Functionair firm, allows webview integration and user -friendlyinterface to manage business processes more integrated and effectively. Development is ongoing.',
      technologies: ['Flutter', 'WebView', 'BiDynamic API', 'Git'],
      mainImage: require('../../assets/project/bidynamic/bidyno-login.jpg'),
      images: [
        require('../../assets/project/bidynamic/bidyno-login.jpg')
      ]
    },
    
    {
      id: 'film',
      title: 'Film House App',
      description: 'Movie discovery and recommendation app with user reviews and watchlist features.',
      technologies: ['Flutter', 'TMDB API', 'SQLite', 'Provider'],
      mainImage: require('../../assets/project/film/film-home.jpg'),
      images: [
        require('../../assets/project/film/film-home.jpg')
      ]
    },
    
    
    
  ];



  return (
    <section id="projects" className="pt-2 sm:pt-4 pb-8 sm:pb-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="relative">
          <div 
            ref={(el) => {
              if (el) {
                (el as any).scrollContainer = el;
              }
            }}
            className="overflow-x-auto scrollbar-hide"
          >
            <div className="flex space-x-4 sm:space-x-6 pb-4 px-2 sm:px-4" style={{ width: 'max-content' }}>
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex-shrink-0 w-64 sm:w-72 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div 
                    className="h-40 sm:h-48 overflow-hidden cursor-pointer relative group"
                    onClick={() => {
                      setSelectedProject(project);
                      setCurrentImageIndex(0);
                    }}
                  >
                    <img
                      src={project.mainImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 sm:p-4 flex-grow flex flex-col">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-3 text-xs leading-relaxed flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 text-gray-700 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 sm:p-4 pt-0">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => {
                          setSelectedProject(project);
                          setCurrentImageIndex(0);
                        }}
                        className="flex-1 bg-black text-white py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg text-xs font-medium hover:bg-gray-800 transition-colors"
                      >
                        View Gallery
                      </button>
                      <button className="px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-200 text-gray-700 rounded-lg text-xs font-medium hover:border-gray-300 transition-colors">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={() => {
              const container = document.querySelector('.overflow-x-auto') as HTMLElement;
              if (container) {
                container.scrollBy({ left: -300, behavior: 'smooth' });
              }
            }}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2 sm:p-3 hover:bg-gray-50 transition-colors z-10"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => {
              const container = document.querySelector('.overflow-x-auto') as HTMLElement;
              if (container) {
                container.scrollBy({ left: 300, behavior: 'smooth' });
              }
            }}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2 sm:p-3 hover:bg-gray-50 transition-colors z-10"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {selectedProject.images.length > 1 && (
              <>
                <button
                  onClick={() => {
                    setCurrentImageIndex(prev => 
                      prev === 0 ? selectedProject.images.length - 1 : prev - 1
                    );
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={() => {
                    setCurrentImageIndex(prev => 
                      prev === selectedProject.images.length - 1 ? 0 : prev + 1
                    );
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
            
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            
            {selectedProject.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {selectedProject.images.map((_: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
