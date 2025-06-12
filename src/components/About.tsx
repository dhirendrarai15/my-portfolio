import React from 'react';
import { Users, Trophy, Clock, Star, CheckCircle, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '50+', label: 'Projects Completed', color: 'from-blue-500 to-cyan-500' },
    { icon: Trophy, value: '5+', label: 'Years Experience', color: 'from-green-500 to-emerald-500' },
    { icon: Clock, value: '24/7', label: 'Support Available', color: 'from-orange-500 to-red-500' },
    { icon: Star, value: '98%', label: 'Client Satisfaction', color: 'from-purple-500 to-pink-500' }
  ];

  const achievements = [
    {
      icon: TrendingUp,
      title: 'Revenue Growth',
      description: 'Helped clients achieve 150% average revenue increase through optimized payment flows',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: CheckCircle,
      title: 'Integration Success',
      description: '100% success rate in complex third-party API integrations and payment gateway implementations',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Led cross-functional teams of 8+ developers in delivering enterprise-level ecommerce solutions',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about creating seamless digital experiences through innovative integrations and ecommerce solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-3xl font-bold text-gray-900">Crafting Digital Commerce Solutions</h3>
            <p className="text-gray-600 leading-relaxed">
              With over 5 years of experience in ecommerce development, I specialize in building robust integrations 
              that connect businesses with their customers. My expertise spans across payment gateway implementations, 
              third-party API integrations, and creating scalable ecommerce platforms.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I've worked with leading ecommerce companies, helping them streamline their operations through 
              automated workflows, secure payment processing, and seamless data synchronization across multiple platforms.
            </p>
            <div className="flex flex-wrap gap-3">
              {['React', 'Node.js', 'API Integration', 'Payment Gateways', 'Ecommerce', 'Third-party Services'].map((skill, index) => (
                <span 
                  key={skill} 
                  className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:shadow-md transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Key Achievements</h4>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-50 hover:to-purple-50 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className={`bg-gradient-to-r ${achievement.color} p-3 rounded-lg shadow-lg`}>
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">{achievement.title}</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                <div className={`bg-gradient-to-r ${stat.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;