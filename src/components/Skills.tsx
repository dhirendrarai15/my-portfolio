import React from 'react';
import Slider from 'react-slick';
import { 
  Code, 
  CreditCard, 
  ShoppingCart, 
  Database, 
  Cloud, 
  Smartphone,
  Globe,
  Zap,
  Users,
  Mail,
  BarChart,
  Truck,
  Share2
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Ecommerce Platforms',
      icon: ShoppingCart,
      color: 'from-green-500 to-emerald-600',
      skills: [
        { name: 'Shopify', level: 95 },
        { name: 'WooCommerce', level: 90 },
        { name: 'Magento', level: 85 },
        { name: 'BigCommerce', level: 80 }
      ]
    },
    {
      title: 'Payment Gateways',
      icon: CreditCard,
      color: 'from-blue-500 to-cyan-600',
      skills: [
        { name: 'Stripe', level: 95 },
        { name: 'PayPal', level: 90 },
        { name: 'Razorpay', level: 88 },
        { name: 'Square', level: 85 }
      ]
    },
    {
      title: 'Third-party APIs',
      icon: Globe,
      color: 'from-purple-500 to-pink-600',
      skills: [
        { name: 'REST APIs', level: 95 },
        { name: 'GraphQL', level: 90 },
        { name: 'Webhooks', level: 92 },
        { name: 'OAuth', level: 88 }
      ]
    },
    {
      title: 'Development',
      icon: Code,
      color: 'from-orange-500 to-red-600',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'Node.js', level: 90 },
        { name: 'TypeScript', level: 88 },
        { name: 'Python', level: 85 }
      ]
    }
  ];

  const integrations = [
    { name: 'Inventory Management', description: 'Real-time sync across platforms', icon: Database, color: 'from-blue-500 to-indigo-600' },
    { name: 'CRM Integration', description: 'Customer data synchronization', icon: Users, color: 'from-green-500 to-emerald-600' },
    { name: 'Email Marketing', description: 'Automated campaign triggers', icon: Mail, color: 'from-purple-500 to-pink-600' },
    { name: 'Analytics', description: 'Custom tracking & reporting', icon: BarChart, color: 'from-orange-500 to-red-600' },
    { name: 'Shipping APIs', description: 'Multi-carrier rate calculation', icon: Truck, color: 'from-cyan-500 to-blue-600' },
    { name: 'Social Commerce', description: 'Social media selling integration', icon: Share2, color: 'from-pink-500 to-rose-600' }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized in ecommerce integrations, payment processing, and building scalable digital commerce solutions
          </p>
        </div>

        <Slider
          className="mb-16 skills-slider"
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={4}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={3000}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]}
        >
          {skillCategories.map((category, index) => (
            <div key={index} className="px-3">
              <div 
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-slide-in-up group h-full"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`bg-gradient-to-r ${category.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="animate-fade-in-right" style={{ animationDelay: `${(index * 150) + (skillIndex * 100)}ms` }}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(index * 150) + (skillIndex * 100) + 500}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12 animate-fade-in-up">Integration Specializations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-gray-200 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`bg-gradient-to-r ${integration.color} w-10 h-10 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300`}>
                    <integration.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900">{integration.name}</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{integration.description}</p>
                <div className="mt-4 flex items-center text-xs text-gray-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Active Integration
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
