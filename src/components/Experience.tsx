import React from 'react';
import Slider from 'react-slick';
import { Calendar, MapPin, ExternalLink, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Integration Developer',
      company: 'CommerceV3',
      period: '2024 - Present',
      location: 'Florida, FL',
      type: 'Full-time',
      description: 'Leading integration projects for enterprise ecommerce clients, specializing in payment gateway implementations and third-party API connections.',
      achievements: [
        'Implemented Authorize.Net for multi-vendor marketplace, processing $2M+ monthly',
        'Built custom API bridges connecting 15+ third-party services',
        'Reduced payment processing errors by 85% through enhanced error handling',
        'Led team of 4 developers in delivering complex integration projects'
      ],
      technologies: ['React', 'Node.js', 'Stripe API', 'REST APIs', 'PostgreSQL', 'AWS'],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Ecommerce Integration Developer',
      company: 'CommerceV3',
      period: '2023 - 2024',
      location: 'Florida, FL',
      type: 'Full-time',
      description: 'Specialized in connecting ecommerce platforms with various business systems, payment processors, and marketing tools.',
      achievements: [
        'Integrated PayPal, Authorize.Net, and Merchant-E gateways for 30+ clients',
        'Developed automated inventory sync between Commercev3 and Orderbot Order Management systems',
        'Created custom APIs to support scalable integrations and business logic',
        'Improved checkout conversion rates by 25% through payment optimization'
      ],
      technologies: ['React', 'Nodejs', 'PayPal API', 'GraphQL', 'Postgres', 'Docker'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Full Stack Developer',
      company: 'WebDev Agency',
      period: '2019 - 2020',
      location: 'Austin, TX',
      type: 'Full-time',
      description: 'Developed and maintained ecommerce solutions for small to medium businesses, focusing on payment processing and user experience.',
      achievements: [
        'Built end-to-end ecommerce platform serving 500+ merchants',
        'Implemented subscription billing system with Stripe Billing',
        'Developed mobile-responsive checkout process with 40% mobile conversion',
        'Created analytics dashboard tracking $5M+ in transactions'
      ],
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Authorize.Net', 'Redis', 'Docker'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Junior Developer',
      company: 'WebDev Agency',
      period: '2020 - 2022',
      location: 'Gurgaon, HR',
      type: 'Full-time',
      description: 'Started career building custom ecommerce websites and learning payment integration fundamentals.',
      achievements: [
        'Developed 20+ custom ecommerce websites using WordPress/WooCommerce',
        'Integrated basic payment gateways (PayPal, Stripe) for small businesses',
        'Learned API integration basics and RESTful service consumption',
        'Contributed to team knowledge base on ecommerce best practices'
      ],
      technologies: ['WordPress', 'PHP', 'JavaScript', 'MySQL', 'PayPal API', 'CSS3'],
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey in ecommerce development and integration specialization
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={4000}
            arrows={false}
            className="experience-slider"
          >
            {experiences.map((experience, currentSlide) => (
              <div key={currentSlide} className="outline-none">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 animate-slide-in-up">
                  <div className="space-y-6 animate-fade-in">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {experience.title}
                  </h3>
                  <h4 className={`text-xl font-semibold bg-gradient-to-r ${experience.color} bg-clip-text text-transparent`}>
                    {experience.company}
                  </h4>
                </div>
                <div className="flex flex-col md:items-end mt-4 md:mt-0">
                  <div className="flex items-center text-gray-600 mb-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="font-medium">{experience.period}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>

                    <p className="text-gray-600 leading-relaxed text-lg">
                {experience.description}
              </p>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                  Key Achievements:
                </h5>
                <ul className="space-y-3">
                  {experience.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start animate-slide-in-left" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className={`w-2 h-2 bg-gradient-to-r ${experience.color} rounded-full mt-2 mr-4 flex-shrink-0`}></div>
                      <span className="text-gray-600 leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-4">Technologies Used:</h5>
                <div className="flex flex-wrap gap-3">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`bg-gradient-to-r ${experience.color} bg-opacity-10 text-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:shadow-md transition-all duration-300 animate-scale-in`}
                      style={{ animationDelay: `${index * 50}ms` }}
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
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Experience;
