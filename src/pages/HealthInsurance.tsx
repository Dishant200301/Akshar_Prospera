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
      <section className="relative min-h-screen overflow-hidden pt-16 bg-black">
        {/* Background Image */}
        <div 
          className="absolute inset-0 transition-all duration-1000 ease-in-out opacity-100 z-10"
          style={{
            backgroundImage: 'url(/image/health.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="flex flex-col justify-center min-h-screen text-left">
            <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl ml-8 sm:ml-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
                <span className="text-white drop-shadow-2xl font-extrabold">
                  Your Health
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-2xl font-extrabold">
                  Our{' '}
                </span>
                <span className="text-white drop-shadow-2xl font-extrabold">
                  Priority
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 sm:mb-12 leading-relaxed font-semibold drop-shadow-2xl">
                Comprehensive health insurance solutions for your family's complete protection and{' '}
                <span className="bg-gradient-to-r from-blue-300 to-indigo-400 bg-clip-text text-transparent font-bold drop-shadow-lg">
                  peace of mind
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Health Insurance</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We deliver comprehensive health coverage with exceptional service and dedicated support for your family
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
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Choose Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Health Plan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Flexible plans designed to meet your specific healthcare needs and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className="relative bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-300">
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{plan.name}</h3>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 font-medium mb-1">Starting from</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight">{plan.price.split('Starting from ')[1]}</p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-4 rounded-lg font-semibold text-base transition-all duration-300 bg-white text-blue-600 border-2 border-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:shadow-lg`}>
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
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              What's Included in Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Coverage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
