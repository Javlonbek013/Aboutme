import React from 'react';
import { Calendar, MapPin, GraduationCap, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know more about who I am, what I do, and what skills I have
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get to know me!</h3>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                I'm a passionate <strong>Frontend Developer</strong> who loves creating beautiful, 
                functional, and user-friendly websites and applications. I enjoy the process of 
                turning ideas into reality using code.
              </p>
              <p>
                I've been learning and working with web technologies since 2024, constantly 
                improving my skills and staying up-to-date with the latest trends in web development.
              </p>
              <p>
                I'm open to job opportunities where I can contribute, learn and grow. If you have 
                a good opportunity that matches my skills and experience, then don't hesitate to 
                contact me.
              </p>
            </div>

            {/* Personal Details */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Born: February 17, 2013</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Location: Uzbekistan</span>
              </div>
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">iTech Academy</span>
              </div>
              <div className="flex items-center space-x-3">
                <Heart className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Coding Enthusiast</span>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg inline-block"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Skills Overview */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Skills</h3>
            <p className="text-gray-600 mb-8">
              Here are the technologies and tools I work with to bring ideas to life:
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                'HTML5',
                'CSS3',
                'JavaScript',
                'TypeScript',
                'React',
                'Next.js',
                'Bootstrap',
                'Tailwind CSS',
                'Git',
                'Responsive Design',
                'UI/UX Design',
                'Problem Solving'
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-gray-50 px-4 py-3 rounded-lg text-center font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;