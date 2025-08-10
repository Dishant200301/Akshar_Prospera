
import React from 'react';
import { Clock, MapPin, DollarSign, Award, Shield, Phone } from 'lucide-react';

const WhyChooseUsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: '24/7 Customer Support',
      description: 'Round-the-clock assistance whenever you need help with claims, questions, or emergencies.',
      stat: '99.8%',
      statLabel: 'Customer Satisfaction'
    },
    {
      icon: MapPin,
      title: 'North America Coverage',
      description: 'Comprehensive protection across Canada and USA with extensive network of healthcare providers.',
      stat: '50K+',
      statLabel: 'Network Providers'
    },
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      description: 'Affordable premiums without compromising on coverage quality. Best value guaranteed.',
      stat: '30%',
      statLabel: 'Average Savings'
    },
    {
      icon: Award,
      title: 'Licensed Advisors',
      description: 'Expert guidance from certified insurance professionals who understand your needs.',
      stat: '25+',
      statLabel: 'Years Experience'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-section-title">Why Choose NorthGuard Insurance?</h2>
          <p className="text-section-subtitle max-w-3xl mx-auto">
            We're more than just an insurance company. We're your trusted partners in 
            protecting your health, travel, and financial future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center group animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-insurance-blue-light/20 rounded-xl mb-4 group-hover:bg-insurance-blue group-hover:text-white transition-all duration-300">
                <benefit.icon className="w-8 h-8 text-insurance-blue group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{benefit.description}</p>
              <div className="text-center">
                <div className="text-2xl font-bold text-insurance-gold">{benefit.stat}</div>
                <div className="text-xs text-gray-500">{benefit.statLabel}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted & Regulated</h3>
            <p className="text-gray-600">
              Licensed in all Canadian provinces and US states where we operate
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="text-center">
              <Shield className="w-12 h-12 text-insurance-blue mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-900">FSRA Licensed</div>
              <div className="text-xs text-gray-500">Ontario</div>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-insurance-blue mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-900">A+ Rating</div>
              <div className="text-xs text-gray-500">Better Business Bureau</div>
            </div>
            <div className="text-center">
              <Phone className="w-12 h-12 text-insurance-blue mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-900">ISO Certified</div>
              <div className="text-xs text-gray-500">Quality Management</div>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-insurance-blue mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-900">Multi-State</div>
              <div className="text-xs text-gray-500">USA Licensed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
