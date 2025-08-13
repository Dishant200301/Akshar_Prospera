import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, CheckCircle, Users, Clock, Star, ArrowRight, Phone, Mail, MapPin, Heart, Calculator, Award } from 'lucide-react';

const LifeInsurance = () => {
  const features = [
    'Flexible Coverage Amounts & Terms',
    'Cash Value Accumulation Options',
    'Family Protection & Income Replacement',
    'Tax-Advantaged Growth & Benefits',
    'Critical Illness & Disability Riders',
    'Estate Planning & Wealth Transfer',
    'Guaranteed Premiums & Benefits',
    'Professional Financial Planning Services'
  ];

  const plans = [
    {
      name: 'Term Life Insurance',
      price: 'Starting from $25/month',
      features: ['Affordable Premiums', 'Guaranteed Death Benefit', 'Flexible Terms', 'Convertible Options'],
      popular: false
    },
    {
      name: 'Whole Life Insurance',
      price: 'Starting from $89/month',
      features: ['Lifetime Coverage', 'Cash Value Growth', 'Guaranteed Premiums', 'Dividend Potential', 'Estate Planning'],
      popular: true
    },
    {
      name: 'Universal Life Insurance',
      price: 'Starting from $149/month',
      features: ['Flexible Premiums', 'Adjustable Coverage', 'Cash Value Options', 'Investment Choices', 'Tax Benefits'],
      popular: false
    }
  ];

  const benefits = [
    { name: 'Family Protection', icon: '👨‍👩‍👧‍👦', description: 'Ensure your family\'s financial security' },
    { name: 'Income Replacement', icon: '💰', description: 'Replace lost income for dependents' },
    { name: 'Debt Coverage', icon: '🏠', description: 'Pay off mortgages and other debts' },
    { name: 'Education Funding', icon: '🎓', description: 'Fund children\'s education expenses' },
    { name: 'Estate Planning', icon: '📋', description: 'Efficient wealth transfer strategies' },
    { name: 'Business Continuity', icon: '🏢', description: 'Protect business interests and partners' }
  ];

  const riders = [
    { name: 'Critical Illness', description: 'Coverage for serious health conditions' },
    { name: 'Disability Income', description: 'Monthly income if you become disabled' },
    { name: 'Accidental Death', description: 'Additional benefit for accidental death' },
    { name: 'Long-term Care', description: 'Coverage for nursing home or home care' },
    { name: 'Child Protection', description: 'Coverage for children at no extra cost' },
    { name: 'Waiver of Premium', description: 'Waive premiums if you become disabled' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 min-h-[50vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Family Security
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Life</span> Insurance
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Secure your family's future with reliable life insurance coverage and expert financial planning guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Life Insurance</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive life protection with flexible options designed for every stage of your journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Family Protection</h3>
              <p className="text-gray-600 text-sm">Ensure your loved ones are financially secure</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Options</h3>
              <p className="text-gray-600 text-sm">Customize coverage to fit your needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Guidance</h3>
              <p className="text-gray-600 text-sm">Professional financial planning support</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Service</h3>
              <p className="text-gray-600 text-sm">Exceptional customer experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Choose Your Plan
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Choose Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Life Insurance Plan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Flexible plans designed for different life stages and financial goals
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

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Life Insurance Benefits
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Life Insurance <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive protection that goes beyond just a death benefit
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-gray-50 p-6 rounded-xl">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.name}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Riders Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Additional Coverage
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Additional <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Coverage Options</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Customize your policy with optional riders for enhanced protection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {riders.map((rider, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{rider.name}</h3>
                    <p className="text-gray-600 text-sm">{rider.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <CheckCircle className="w-4 h-4 mr-2" />
              What's Included
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              What's Included in Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Life Insurance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive protection designed for long-term financial security
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Clock className="w-4 h-4 mr-2" />
              Simple Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Simple <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Application Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get your life insurance coverage in just a few easy steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Quote</h3>
              <p className="text-gray-600">Receive a personalized quote based on your needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Choose Plan</h3>
              <p className="text-gray-600">Select the coverage that best fits your goals</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Apply Online</h3>
              <p className="text-gray-600">Complete your application in minutes</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Covered</h3>
              <p className="text-gray-600">Receive your policy and start protecting your family</p>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default LifeInsurance;
