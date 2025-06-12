import React, { useState } from 'react';
import Slider from 'react-slick';
import { ExternalLink, Github, Filter, Star, TrendingUp } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', color: 'from-gray-500 to-gray-600' },
    { id: 'ecommerce', name: 'Ecommerce', color: 'from-green-500 to-emerald-600' },
    { id: 'integration', name: 'Integrations', color: 'from-blue-500 to-indigo-600' },
    { id: 'payment', name: 'Payment Systems', color: 'from-purple-500 to-pink-600' }
  ];

  const projects = [
    {
      title: 'Enterprise Marketplace Platform',
      category: 'ecommerce',
      description: 'Built a multi-vendor marketplace with integrated payment processing, inventory management, and real-time analytics.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      technologies: ['React', 'Node.js', 'Stripe Connect', 'PostgreSQL', 'Redis'],
      features: [
        'Multi-vendor payment splitting',
        'Real-time inventory sync',
        'Advanced analytics dashboard',
        'Mobile-responsive design'
      ],
      metrics: {
        users: '10K+',
        transactions: '$2M+',
        uptime: '99.9%'
      },
      links: {
        demo: '#',
        github: '#'
      },
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Payment Gateway Orchestrator',
      category: 'payment',
      description: 'Developed a unified payment system that routes transactions across multiple payment providers based on success rates and costs.',
      image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      technologies: ['Node.js', 'Stripe', 'PayPal', 'Razorpay', 'MongoDB', 'Docker'],
      features: [
        'Smart payment routing',
        'Real-time failure handling',
        'Cost optimization',
        'Fraud detection integration'
      ],
      metrics: {
        providers: '5+',
        success: '98.5%',
        latency: '<200ms'
      },
      links: {
        demo: '#',
        github: '#'
      },
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Shopify Inventory Sync App',
      category: 'integration',
      description: 'Created a Shopify app that syncs inventory across multiple sales channels and warehouse management systems.',
      image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      technologies: ['React', 'Shopify API', 'GraphQL', 'Webhooks', 'AWS Lambda'],
      features: [
        'Real-time inventory updates',
        'Multi-channel synchronization',
        'Automated reorder points',
        'Detailed reporting'
      ],
      metrics: {
        installs: '5K+',
        accuracy: '99.8%',
        channels: '10+'
      },
      links: {
        demo: '#',
        github: '#'
      },
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Subscription Commerce Platform',
      category: 'ecommerce',
      description: 'Built a complete subscription ecommerce solution with flexible billing, customer management, and analytics.',
      image: 'https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      technologies: ['Next.js', 'Stripe Billing', 'Prisma', 'PostgreSQL', 'Vercel'],
      features: [
        'Flexible subscription plans',
        'Dunning management',
        'Customer portal',
        'Revenue analytics'
      ],
      metrics: {
        subscribers: '2K+',
        retention: '92%',
        mrr: '$50K+'
      },
      links: {
        demo: '#',
        github: '#'
      },
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'API Integration Hub',
      category: 'integration',
      description: 'Developed a centralized platform for managing and monitoring all third-party API integrations across multiple ecommerce stores.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      technologies: ['Vue.js', 'Express.js', 'Redis', 'MongoDB', 'Docker'],
      features: [
        'API health monitoring',
        'Automated retry logic',
        'Rate limit management',
        'Integration marketplace'
      ],
      metrics: {
        apis: '25+',
        uptime: '99.95%',
        requests: '1M+/day'
      },
      links: {
        demo: '#',
        github: '#'
      },
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Cryptocurrency Payment Gateway',
      category: 'payment',
      description: 'Implemented a crypto payment solution supporting multiple cryptocurrencies with automatic conversion and settlement.',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
      technologies: ['React', 'Web3.js', 'Ethereum', 'Bitcoin', 'Node.js'],
      features: [
        'Multi-crypto support',
        'Automatic conversion',
        'Smart contract integration',
        'Real-time exchange rates'
      ],
      metrics: {
        currencies: '15+',
        volume: '$500K+',
        fees: '<1%'
      },
      links: {
        demo: '#',
        github: '#'
      },
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const selectedCategory = categories.find(cat => cat.id === filter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing my expertise in ecommerce development, payment integrations, and third-party API connections
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 animate-slide-in-up ${
                filter === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md hover:shadow-lg'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Project Slider */}
        <div className="max-w-6xl mx-auto">
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={4000}
            arrows={false}
            className="project-slider"
          >
            {filteredProjects.map((project, index) => (
              <div key={index} className="outline-none">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-slide-in-up">
                  <div className="grid md:grid-cols-2 gap-0 min-h-[500px]">
                    <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-96 md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                    style={{ objectPosition: 'center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${project.color} px-3 py-1 rounded-full`}>
                    <span className="text-white text-sm font-medium capitalize">{project.category}</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  </div>
                </div>

                    <div className="p-8 lg:p-12">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className={`w-5 h-5 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`} />
                      <span className="text-sm text-gray-500 font-medium">Featured Project</span>
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4 animate-slide-in-left">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed animate-slide-in-left animation-delay-200">
                    {project.description}
                  </p>

                  <div className="mb-6 animate-slide-in-left animation-delay-400">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600 animate-fade-in-right" style={{ animationDelay: `${index * 100}ms` }}>
                          <div className={`w-1.5 h-1.5 bg-gradient-to-r ${project.color} rounded-full mr-2`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6 animate-slide-in-up animation-delay-600">
                    {Object.entries(project.metrics).map(([key, value], index) => (
                      <div key={key} className="text-center p-3 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                        <div className={`text-lg font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6 animate-slide-in-left animation-delay-800">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:shadow-md transition-all duration-300 animate-fade-in-up"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4 animate-slide-in-up animation-delay-1000">
                    <a
                      href={project.links.demo}
                      className={`flex items-center bg-gradient-to-r ${project.color} hover:shadow-lg text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Demo
                    </a>
                    <a
                      href={project.links.github}
                      className="flex items-center border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </a>
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

export default Projects;
