
import React, { useState, useRef } from 'react';
import { Shield, DollarSign, Target, Clock, CheckCircle, Star, ArrowRight } from 'lucide-react';

const WhyChooseUsSection = () => {
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

  const benefits = [
    {
      icon: Shield,
      title: 'Licensed & Experienced',
      description: 'Our advisors have 15+ years of experience and are fully licensed across Canada and USA.',
      color: 'from-insurance-blue to-insurance-blue-accent'
    },
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      description: 'Get the best rates with our transparent pricing and no hidden fees policy.',
      color: 'from-insurance-blue to-insurance-blue-accent'
    },
    {
      icon: Target,
      title: 'Personalized Coverage',
      description: 'Tailored insurance solutions that perfectly match your unique needs and lifestyle.',
      color: 'from-insurance-blue to-insurance-blue-accent'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for claims, questions, and emergency situations.',
      color: 'from-insurance-blue to-insurance-blue-accent'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            The Trusted Choice for
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Insurance Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're committed to providing you with the best insurance experience through personalized service and comprehensive coverage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="group block perspective-1000">
              <div 
                ref={el => cardRefs.current[index] = el}
                onMouseMove={(e) => handleMouseMove(index, e)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="h-full"
              >
                <div 
                  className={`bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-6 h-full border-2 border-gray-200 transition-all duration-300 ease-out transform-gpu group-hover:shadow-2xl group-hover:scale-105`}
                  style={{
                    transform: `perspective(1000px) rotateX(${tiltedCards[index]?.x || 0}deg) rotateY(${tiltedCards[index]?.y || 0}deg)`,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-base">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="group px-6 py-3 bg-white border-2 border-gray-200 text-slate-700 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-50 hover:text-slate-900 hover:border-blue-300 flex items-center mx-auto">
            Learn More About Us
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
