
import React from 'react';
import { Shield, DollarSign, Target, Clock, CheckCircle, Star, ArrowRight } from 'lucide-react';

const WhyChooseUsSection: React.FC = () => {
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
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Why Choose
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Akshar Prospera</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            We're committed to providing you with the best insurance experience through personalized service and comprehensive coverage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="group block">
              <div className="h-full">
                <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-4 sm:p-6 h-full border-2 border-gray-200 hover:border-blue-600/60 hover:shadow-md transition-all duration-300">
                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{benefit.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-white text-blue-600 border-2 border-blue-600 px-4 sm:px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:bg-gradient-to-r transition-all duration-200 inline-flex items-center justify-center shadow-sm mx-auto">
            Learn More About Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
