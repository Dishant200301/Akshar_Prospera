
import React from 'react';
import { Heart, Plane, UserCheck, Plus, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: 'Health Insurance',
      description: 'Comprehensive health coverage including emergency care, prescription drugs, and specialist visits for you and your family.',
      features: ['Emergency Medical Coverage', 'Prescription Benefits', 'Specialist Care', 'Preventive Services'],
      color: 'text-red-500'
    },
    {
      icon: Plane,
      title: 'Travel Insurance',
      description: 'Complete protection for domestic and international travel with coverage for medical emergencies and trip disruptions.',
      features: ['Trip Cancellation', 'Medical Emergencies', 'Lost Baggage', 'Flight Delays'],
      color: 'text-blue-500'
    },
    {
      icon: UserCheck,
      title: 'Visitor Visa Insurance',
      description: 'Essential coverage for visitors to Canada and USA, meeting visa requirements and providing peace of mind.',
      features: ['Visa Compliance', 'Emergency Medical', 'Repatriation Coverage', 'Extended Stay Options'],
      color: 'text-green-500'
    },
    {
      icon: Plus,
      title: 'Other Plans',
      description: 'Specialized insurance solutions including life, disability, and critical illness coverage tailored to your needs.',
      features: ['Life Insurance', 'Disability Coverage', 'Critical Illness', 'Custom Solutions'],
      color: 'text-purple-500'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-section-title">Our Insurance Solutions</h2>
          <p className="text-section-subtitle max-w-3xl mx-auto">
            From health and travel to specialized coverage, we offer comprehensive insurance 
            solutions designed to protect what matters most to you and your family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card-service group animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className={`p-3 rounded-xl bg-gray-100 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-insurance-gold rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between">
                <button className="btn-primary group">
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="text-insurance-blue hover:text-insurance-blue-dark font-medium text-sm transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="card-premium max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Not sure which plan is right for you?
            </h3>
            <p className="text-gray-600 mb-6">
              Our licensed insurance advisors are here to help you find the perfect coverage 
              for your unique needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="btn-hero">
                Schedule Free Consultation
              </button>
              <button className="btn-outline">
                Compare All Plans
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
