import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, CheckCircle, Shield, Globe, Clock, Star, ArrowRight, Phone, Mail, MapPin, FileText, Award } from 'lucide-react';

const VisitorVisaInsurance = () => {
  const features = [
    'Visa Application Compliance Guarantee',
    'Comprehensive Medical Coverage',
    'Emergency Medical Evacuation',
    '24/7 Multilingual Support',
    'Family Coverage Options',
    'Pre-existing Condition Coverage',
    'Trip Interruption Protection',
    'Documentation & Claims Assistance'
  ];

  const plans = [
    {
      name: 'Basic Visitor Plan',
      price: 'Starting from $39/month',
      features: ['Visa Compliance', 'Basic Medical Coverage', 'Emergency Support', 'Documentation Help'],
      popular: false
    },
    {
      name: 'Comprehensive Visitor Plan',
      price: 'Starting from $69/month',
      features: ['All Basic Features', 'Extended Medical Coverage', 'Family Coverage', 'Pre-existing Conditions', 'Trip Protection'],
      popular: true
    },
    {
      name: 'Premium Visitor Plan',
      price: 'Starting from $119/month',
      features: ['All Comprehensive Features', 'Concierge Services', 'Priority Support', 'Higher Coverage Limits', 'Customizable Options'],
      popular: false
    }
  ];

  const visaTypes = [
    { name: 'Tourist Visa', coverage: 'Full Coverage', icon: '🏖️' },
    { name: 'Business Visa', coverage: 'Full Coverage', icon: '💼' },
    { name: 'Student Visa', coverage: 'Full Coverage', icon: '🎓' },
    { name: 'Family Visit', coverage: 'Full Coverage', icon: '👨‍👩‍👧‍👦' },
    { name: 'Medical Treatment', coverage: 'Full Coverage', icon: '🏥' },
    { name: 'Work Permit', coverage: 'Full Coverage', icon: '🔧' }
  ];

  const countries = [
    { name: 'Canada', flag: '🇨🇦', requirements: 'Super Visa, Regular Visitor' },
    { name: 'United States', flag: '🇺🇸', requirements: 'B1/B2 Visa, ESTA' },
    { name: 'United Kingdom', flag: '🇬🇧', requirements: 'Standard Visitor Visa' },
    { name: 'Australia', flag: '🇦🇺', requirements: 'Visitor Visa (600)' },
    { name: 'New Zealand', flag: '🇳🇿', requirements: 'Visitor Visa' },
    { name: 'Schengen Area', flag: '🇪🇺', requirements: 'Schengen Visa' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 min-h-[50vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Visa Requirements
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Visitor Visa</span> Insurance
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Meet all visa requirements with our comprehensive visitor insurance coverage. 
              Designed specifically for international travelers visiting Canada, USA, and worldwide destinations.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Visitor Visa Insurance?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized coverage designed for visa compliance and visitor protection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visa Compliance</h3>
              <p className="text-gray-600 text-sm">Guaranteed to meet all visa requirements</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Coverage</h3>
              <p className="text-gray-600 text-sm">Protection worldwide for all destinations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Multilingual assistance anytime, anywhere</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Guidance</h3>
              <p className="text-gray-600 text-sm">Professional visa and insurance support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Choose Your Plan
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Visitor Insurance Plan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible plans designed for different visa types and stay durations
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
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Types Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <FileText className="w-4 h-4 mr-2" />
              Visa Types
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Coverage for All Visa Types
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive protection regardless of your travel purpose
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {visaTypes.map((visa, index) => (
              <div key={index} className="text-center bg-gray-50 p-6 rounded-xl">
                <div className="text-4xl mb-3">{visa.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{visa.name}</h3>
                <p className="text-sm text-blue-600 font-medium">{visa.coverage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Globe className="w-4 h-4 mr-2" />
              Popular Destinations
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visa insurance coverage for major international destinations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {countries.map((country, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-3xl">{country.flag}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{country.name}</h3>
                    <p className="text-sm text-gray-600">{country.requirements}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-green-600 font-medium">Full Coverage Available</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <CheckCircle className="w-4 h-4 mr-2" />
              What's Included
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Included in Your Visitor Insurance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive protection designed specifically for international visitors
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

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Clock className="w-4 h-4 mr-2" />
              Simple Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple 3-Step Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get your visitor visa insurance in minutes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Choose Your Plan</h3>
              <p className="text-gray-600">Select the coverage that best fits your visa requirements and budget</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Instant Quote</h3>
              <p className="text-gray-600">Receive your personalized quote and policy details immediately</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Download & Travel</h3>
              <p className="text-gray-600">Download your policy documents and travel with confidence</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Your Visitor Visa Insurance?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ensure your visa application success with our comprehensive visitor insurance coverage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              <FileText className="w-5 h-5 mr-2" />
              Get Instant Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Speak to Expert
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VisitorVisaInsurance;
