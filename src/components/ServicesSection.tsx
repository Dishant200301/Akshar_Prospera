
import React, { useState, useRef, useEffect } from 'react';
import { Heart, Plane, Users, Shield, ArrowRight, CheckCircle, Star } from 'lucide-react';

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
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
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
      description: 'Comprehensive health coverage for you and your family with access to top healthcare providers across Canada and USA.',
      features: ['24/7 Medical Support', 'Prescription Coverage', 'Dental & Vision', 'Mental Health Services'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      buttonColor: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Plane,
      title: 'Travel Insurance',
      description: 'Worldwide travel protection with emergency medical coverage, trip cancellation, and baggage protection for peace of mind.',
      features: ['Emergency Medical', 'Trip Cancellation', 'Baggage Protection', '24/7 Travel Support'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      buttonColor: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Visitor Visa Insurance',
      description: 'Specialized coverage for visitors to Canada and USA, meeting all visa requirements and providing comprehensive peace of mind.',
      features: ['Visa Compliance', 'Medical Coverage', 'Emergency Evacuation', 'Family Plans'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      buttonColor: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Life Insurance',
      description: 'Secure your family\'s future with flexible life insurance plans tailored to your specific needs and long-term financial security goals.',
      features: ['Flexible Coverage', 'Cash Value Options', 'Family Protection', 'Tax Benefits'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      buttonColor: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Our Premium Services
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Insurance Solutions That
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Protect Everything</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive coverage designed to protect what matters most to you and your family, 
            with personalized solutions for every stage of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative perspective-1000"
              ref={el => cardRefs.current[index] = el}
              onMouseMove={(e) => handleMouseMove(index, e)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div 
                className={`bg-gradient-to-br ${service.bgColor} rounded-2xl p-6 h-full border-2 border-gray-200 transition-all duration-300 ease-out transform-gpu hover:shadow-2xl hover:scale-105`}
                style={{
                  transform: `perspective(1000px) rotateX(${tiltedCards[index]?.x || 0}deg) rotateY(${tiltedCards[index]?.y || 0}deg)`,
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{service.description}</p>
                
                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Button */}
                <button className={`group/btn w-full bg-gradient-to-r ${service.buttonColor} text-white font-semibold py-3 px-4 rounded-lg shadow-lg flex items-center justify-center text-sm transition-all duration-300 hover:shadow-xl`}>
                  <span className="mr-2">Learn More</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
