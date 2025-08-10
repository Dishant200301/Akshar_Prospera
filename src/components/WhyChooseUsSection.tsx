
import React from 'react';
import { Shield, DollarSign, Target, Clock, CheckCircle, Star, ArrowRight } from 'lucide-react';

const WhyChooseUsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Licensed & Experienced',
      description: 'Our advisors have 15+ years of experience and are fully licensed across Canada and USA.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      description: 'Get the best rates with our transparent pricing and no hidden fees policy.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Target,
      title: 'Personalized Coverage',
      description: 'Tailored insurance solutions that perfectly match your unique needs and lifestyle.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for claims, questions, and emergency situations.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group text-center p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center mx-auto">
            Learn More About Us
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
