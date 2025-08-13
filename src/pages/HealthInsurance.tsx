import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Heart, CheckCircle, Shield, Users, Clock, Star, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const HealthInsurance = () => {
  const features = [
    '24/7 Medical Support & Consultation',
    'Comprehensive Prescription Coverage',
    'Dental & Vision Care Benefits',
    'Mental Health Services & Counseling',
    'Preventive Care & Wellness Programs',
    'Emergency Medical Transportation',
    'Specialist Referrals & Second Opinions',
    'Family Coverage Options'
  ];

  const plans = [
    {
      name: 'Basic Health Plan',
      price: 'Starting from $89/month',
      features: ['Essential Medical Coverage', 'Prescription Benefits', '24/7 Support', 'Network Access'],
      popular: false
    },
    {
      name: 'Comprehensive Health Plan',
      price: 'Starting from $149/month',
      features: ['Full Medical Coverage', 'Dental & Vision', 'Mental Health Services', 'Preventive Care', 'Family Coverage'],
      popular: true
    },
    {
      name: 'Premium Health Plan',
      price: 'Starting from $249/month',
      features: ['All Comprehensive Features', 'International Coverage', 'Concierge Services', 'Priority Support', 'Customizable Options'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 min-h-[50vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Medical Protection
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Health</span> Insurance
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Secure your health and your family's future with complete coverage for medical care and wellness protection.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Health Insurance?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive coverage with exceptional service and support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Coverage</h3>
              <p className="text-gray-600 text-sm">Complete protection for all your healthcare needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Family Plans</h3>
              <p className="text-gray-600 text-sm">Coverage for the entire family at competitive rates</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Round-the-clock assistance whenever you need it</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Top Providers</h3>
              <p className="text-gray-600 text-sm">Access to the best healthcare networks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Choose Your Plan
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Health Plan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible plans designed to meet your specific healthcare needs and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 ${
                plan.popular ? 'border-blue-500 scale-105' : 'border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-4">{plan.price}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <CheckCircle className="w-4 h-4 mr-2" />
              What's Included
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Included in Your Coverage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive benefits designed to keep you and your family healthy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700 text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default HealthInsurance;
