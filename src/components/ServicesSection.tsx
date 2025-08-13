
import React, { useState, useRef, useEffect } from 'react';
import { Heart, Plane, Users, Shield, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const [tiltedCards, setTiltedCards] = useState<{ [key: number]: { x: number; y: number } }>({});
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    
    setTiltedCards(prev => ({
      ...prev,
      [index]: { x: rotateX, y: rotateY }
    }));
  };

  const handleMouseLeave = (index: number) => {
    setTiltedCards(prev => ({
      ...prev,
      [index]: { x: 0, y: 0 }
    }));
  };

  const services = [
    {
      icon: Heart,
      title: 'Health Insurance',
      description: 'Comprehensive health coverage for you and your family with complete protection.',
      features: ['24/7 Medical Support', 'Prescription Coverage', 'Dental & Vision', 'Mental Health Services'],
      color: 'from-insurance-blue to-insurance-blue-accent',
      bgColor: 'from-slate-50 to-gray-50',
      buttonColor: 'from-insurance-blue to-insurance-blue-accent',
      href: '/health-insurance'
    },
    {
      icon: Plane,
      title: 'Travel Insurance',
      description: 'Worldwide travel protection with emergency medical coverage and full support.',
      features: ['Emergency Medical', 'Trip Cancellation', 'Baggage Protection', '24/7 Travel Support'],
      color: 'from-insurance-blue to-insurance-blue-accent',
      bgColor: 'from-slate-50 to-gray-50',
      buttonColor: 'from-insurance-blue to-insurance-blue-accent',
      href: '/travel-insurance'
    },
    {
      icon: Users,
      title: 'Visitor Visa Insurance',
      description: 'Specialized coverage for visitors to Canada and USA with complete protection.',
      features: ['Visa Compliance', 'Medical Coverage', 'Emergency Evacuation', 'Family Plans'],
      color: 'from-insurance-blue to-insurance-blue-accent',
      bgColor: 'from-slate-50 to-gray-50',
      buttonColor: 'from-insurance-blue to-insurance-blue-accent',
      href: '/visitor-visa-insurance'
    },
    {
      icon: Shield,
      title: 'Life Insurance',
      description: 'Secure your family\'s future with flexible life insurance plans and protection.',
      features: ['Flexible Coverage', 'Cash Value Options', 'Family Protection', 'Tax Benefits'],
      color: 'from-insurance-blue to-insurance-blue-accent',
      bgColor: 'from-slate-50 to-gray-50',
      buttonColor: 'from-insurance-blue to-insurance-blue-accent',
      href: '/life-insurance'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Our Premium Services
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Comprehensive
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Insurance</span>
            <span className="text-gray-900"> Solutions</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Comprehensive coverage designed to protect what matters most to you and your family, 
            with personalized solutions for every stage of life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <div key={index} className="group block perspective-1000">
              <div 
                ref={el => cardRefs.current[index] = el}
                onMouseMove={(e) => handleMouseMove(index, e)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="h-full"
              >
                <div 
                  className={`bg-gradient-to-br ${service.bgColor} rounded-2xl p-4 sm:p-6 h-full border-2 border-gray-200 transition-all duration-300 ease-out transform-gpu group-hover:shadow-2xl group-hover:scale-105`}
                  style={{
                    transform: `perspective(1000px) rotateX(${tiltedCards[index]?.x || 0}deg) rotateY(${tiltedCards[index]?.y || 0}deg)`,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg">
                    <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{service.title}</h3>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-4 sm:mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                        <span className="text-base sm:text-base text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Button - Only this is clickable now */}
                  <Link 
                    to={service.href}
                    className="w-full bg-white text-blue-600 border-2 border-blue-600 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:bg-gradient-to-r transition-all duration-200 inline-flex items-center justify-center text-xs sm:text-sm shadow-sm"
                  >
                    <span className="mr-2">Learn More</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
