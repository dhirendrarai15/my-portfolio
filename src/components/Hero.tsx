import React, { useState, useEffect } from 'react';
import { ArrowDown, Code, ShoppingCart, CreditCard, Zap, ChevronLeft, ChevronRight, TrendingUp, Users, Globe } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Ecommerce Integration Specialist",
      subtitle: "Building Seamless Digital Commerce",
      description: "Transforming businesses with cutting-edge third-party integrations, payment gateways, and scalable ecommerce solutions.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
      stats: [
        { icon: ShoppingCart, value: "50+", label: "Ecommerce Projects" },
        { icon: CreditCard, value: "15+", label: "Payment Gateways" },
        { icon: Code, value: "100+", label: "API Integrations" }
      ]
    },
    {
      title: "Payment Gateway Expert",
      subtitle: "Secure & Scalable Solutions",
      description: "Specialized in implementing robust payment processing systems with Stripe, PayPal, Razorpay, and custom gateway solutions.",
      image: "https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1200",
      stats: [
        { icon: TrendingUp, value: "$5M+", label: "Processed Volume" },
        { icon: Zap, value: "99.9%", label: "Uptime Rate" },
        { icon: Users, value: "10K+", label: "Active Users" }
      ]
    },
    {
      title: "Third-Party Integration Master",
      subtitle: "Connecting Systems Seamlessly",
      description: "Expert in building bridges between platforms, APIs, and services to create unified, efficient business ecosystems.",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200",
      stats: [
        { icon: Globe, value: "25+", label: "API Partners" },
        { icon: Code, value: "5+", label: "Years Experience" },
        { icon: ShoppingCart, value: "98%", label: "Success Rate" }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-60 animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-indigo-400 rounded-full animate-bounce opacity-60 animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Content Side */}
          
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg animate-slide-in-left">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Available for new projects</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 animate-slide-in-left animation-delay-300">
                {currentSlideData.title.split(' ').map((word, index) => (
                  <span key={index} className={index === currentSlideData.title.split(' ').length - 1 ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </h1>

              <h2 className="text-2xl font-semibold text-blue-600 animate-slide-in-left animation-delay-500">
                {currentSlideData.subtitle}
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed animate-slide-in-left animation-delay-700">
                {currentSlideData.description}
              </p>
            </div>

            {/* Stats */}
            <div key={currentSlide} className="grid grid-cols-3 gap-6 max-w-2xl mx-auto relative">
              {currentSlideData.stats.map((stat, index) => (
                <div 
                  key={`${currentSlide}-${index}`}
                  className={`bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 transform-gpu animate-scale-in`}
                  style={{animationDelay: `${index * 150}ms`}}
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-2 mx-auto">
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 text-center">{stat.value}</div>
                  <div className="text-sm text-gray-600 text-center">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-up animation-delay-1100">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                View My Work
              </button>
              <button className="border-2 border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                Download Resume
              </button>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative animate-fade-in-right">
            <div className="h-[500px] relative">
              {/* Image Container with Blend */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
                <img
                  src={currentSlideData.image}
                  alt={currentSlideData.title}
                  className="w-full h-full object-cover transition-transform duration-700 opacity-60 mix-blend-multiply"
                />
              </div>
              
              {/* Slide Indicators */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-blue-600 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-gray-600">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 text-gray-600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
