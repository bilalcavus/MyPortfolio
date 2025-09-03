import React from 'react';
import { experiences, skills } from '../../data/mockData';

const About: React.FC = () => {
  const skillCategories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    mobile: skills.filter(skill => skill.category === 'mobile'),
    tools: skills.filter(skill => skill.category === 'tools'),
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Hakkımda
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Teknoloji tutkusu ile modern web çözümleri geliştiren bir yazılım geliştiricisiyim.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Hikayem</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                5 yılı aşkın süredir yazılım geliştirme alanında çalışıyorum. Modern web teknolojileri 
                ve kullanıcı deneyimi odaklı çözümler geliştirme konusunda tutkulum var.
              </p>
              <p>
                React, TypeScript ve Node.js ekosisteminde uzmanlaşmış durumda, sürekli öğrenmeye 
                ve yeni teknolojileri projelerime entegre etmeye odaklanıyorum.
              </p>
              <p>
                Kod kalitesi, performans optimizasyonu ve kullanıcı deneyimi konularında titiz 
                çalışarak, her projede en iyi sonucu vermeye çalışıyorum.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Yeteneklerim</h3>
            <div className="space-y-6">
              {Object.entries(skillCategories).map(([category, categorySkills]) => (
                <div key={category}>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 capitalize">
                    {category === 'frontend' ? 'Frontend' : 
                     category === 'backend' ? 'Backend' :
                     category === 'mobile' ? 'Mobile' : 'Araçlar'}
                  </h4>
                  <div className="space-y-3">
                    {categorySkills.map((skill) => (
                      <div key={skill.id}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.proficiency}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.proficiency}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Deneyimlerim</h3>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="relative">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-4 h-4 bg-primary-500 rounded-full mt-2 relative z-10"></div>
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-2 top-6 w-0.5 h-full bg-gray-300 -z-10"></div>
                  )}
                  <div className="ml-6 flex-grow">
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">{experience.position}</h4>
                        <span className="text-sm text-gray-500 mt-1 sm:mt-0">
                          {experience.startDate} - {experience.endDate || 'Devam ediyor'}
                        </span>
                      </div>
                      <p className="text-primary-600 font-medium mb-3">{experience.company}</p>
                      <p className="text-gray-600 mb-4">{experience.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

