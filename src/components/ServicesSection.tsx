
import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, CheckCircle, Star, Clock, Award, Lock } from 'lucide-react';
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
    
    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;
    
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
      title: 'Health Insurance',
      description: 'Comprehensive health coverage that puts your well-being first. Get access to top-tier medical facilities and 24/7 support.',
      features: ['24/7 Medical Support', 'Prescription Coverage', 'Dental & Vision', 'Mental Health Services'],
      href: '/health-insurance',
      highlight: 'Most Popular'
    },
    {
      title: 'Travel Insurance',
      description: 'Explore the world with confidence. Our travel protection covers everything from medical emergencies to trip disruptions.',
      features: ['Emergency Medical', 'Trip Cancellation', 'Baggage Protection', '24/7 Travel Support'],
      href: '/travel-insurance',
      highlight: 'Worldwide Coverage'
    },
    {
      title: 'Visitor Visa Insurance',
      description: 'Specialized coverage for visitors to Canada and USA. Ensure compliance and peace of mind during your stay.',
      features: ['Visa Compliance', 'Medical Coverage', 'Emergency Evacuation', 'Family Plans'],
      href: '/visitor-visa-insurance',
      highlight: 'Visa Compliant'
    },
    {
      title: 'Life Insurance',
      description: 'Secure your family\'s future with flexible life insurance plans. Build wealth while protecting your loved ones.',
      features: ['Flexible Coverage', 'Cash Value Options', 'Family Protection', 'Tax Benefits'],
      href: '/life-insurance',
      highlight: 'Family Protection'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-semibold mb-6 shadow-lg">
            <Star className="w-4 h-4 mr-2" />
            Our Premium Services
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Insurance</span>
            <span className="text-gray-900"> Solutions</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive coverage designed to protect what matters most to you and your family, 
            with personalized solutions for every stage of life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group block perspective-1000">
              <div 
                ref={el => cardRefs.current[index] = el}
                onMouseMove={(e) => handleMouseMove(index, e)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="h-full"
              >
                <div 
                  className="relative bg-white rounded-2xl p-6 h-full border border-gray-200 transition-all duration-500 ease-out transform-gpu group-hover:shadow-xl group-hover:scale-[1.02] group-hover:border-blue-200 overflow-hidden"
                  style={{
                    transform: `perspective(1000px) rotateX(${tiltedCards[index]?.x || 0}deg) rotateY(${tiltedCards[index]?.y || 0}deg)`,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Highlight Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-xs font-semibold shadow-md">
                    {service.highlight}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 pr-20">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 p-0.5 flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-full h-full text-white" />
                        </div>
                        <span className="text-sm text-gray-700 font-medium leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Button */}
                  <Link 
                    to={service.href}
                    className="w-full bg-white text-blue-600 border-2 border-blue-600 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:bg-gradient-to-r transition-all duration-200 inline-flex items-center justify-center text-xs sm:text-sm shadow-sm"
                  >
                    <span className="mr-2">Learn More</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Link>

                  {/* Subtle decorative accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 opacity-5 rounded-full -translate-y-12 translate-x-12"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 text-gray-600 mb-4">
            <Clock className="w-5 h-5" />
            <span className="text-sm font-medium">24/7 Customer Support</span>
            <span className="text-gray-300">•</span>
            <Award className="w-5 h-5" />
            <span className="text-sm font-medium">Trusted by 50,000+ Customers</span>
            <span className="text-gray-300">•</span>
            <Lock className="w-5 h-5" />
            <span className="text-sm font-medium">100% Secure & Confidential</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
