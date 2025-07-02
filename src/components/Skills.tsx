import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'React', level: 85 },
        { name: 'Next.js', level: 75 },
      ]
    },
    {
      title: 'Styling & Frameworks',
      skills: [
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Bootstrap', level: 85 },
        { name: 'Responsive Design', level: 95 },
        { name: 'CSS Grid & Flexbox', level: 90 },
        { name: 'SASS/SCSS', level: 70 },
        { name: 'Material-UI', level: 65 },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 80 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 70 },
        { name: 'Chrome DevTools', level: 85 },
        { name: 'NPM/Yarn', level: 80 },
        { name: 'Webpack/Vite', level: 65 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's a comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Journey */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">My Learning Journey</h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
              
              <div className="space-y-8">
                <div className="flex items-center justify-center">
                  <div className="bg-white border-4 border-blue-600 rounded-full p-4 shadow-lg">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-50 rounded-lg p-6 max-w-md mx-auto">
                    <h4 className="font-bold text-gray-900 mb-2">iTech Academy</h4>
                    <p className="text-gray-600 mb-2">2024 - 2025</p>
                    <p className="text-sm text-gray-700">
                      Comprehensive frontend development program covering HTML, CSS, JavaScript, 
                      React, Next.js, TypeScript, and modern web development practices.
                    </p>
                  </div>
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