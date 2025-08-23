import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, CheckCircle, Users, Clock, Star, ArrowRight, Phone, Mail, MapPin, Heart, Calculator, Award } from 'lucide-react';

const AnimatedText = ({ text, delay = 0, className = '' }) => {
  const isGradient = className.includes('bg-gradient');
  
  return (
    <span className={isGradient ? '' : className}>
      {text.split(' ').map((word, index) => (
        <span
          key={index}
          className={`animate-word ${isGradient ? className : ''}`}
          style={{ animationDelay: `${delay + index * 0.05}s` }}
        >
          {word}{' '}
        </span>
      ))}
    </span>
  );
};

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
      <section className="relative h-[80vh] overflow-hidden pt-16 bg-black">
        {/* Background Image */}
        <div 
          className="absolute inset-0 transition-all duration-1000 ease-in-out opacity-100 z-10"
          style={{
            backgroundImage: 'url(/image/life.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'right top',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10 h-full">
          <div className="flex flex-col justify-end h-full text-left pb-20">
            <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl ml-16 sm:ml-24 lg:ml-32">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
                <span className="text-white drop-shadow-2xl font-extrabold">
                  Secure Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-2xl font-extrabold">
                  Family{' '}
                </span>
                <span className="text-white drop-shadow-2xl font-extrabold">
                  Future
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 sm:mb-12 leading-relaxed font-semibold drop-shadow-2xl animate-fade-in">
                <AnimatedText text="Reliable life insurance coverage for your family's financial security and" />
                <AnimatedText 
                  text="future protection" 
                  delay={0.6}
                  className="bg-gradient-to-r from-blue-300 to-indigo-400 bg-clip-text text-transparent font-bold drop-shadow-lg"
                />
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
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Choose Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Life Insurance Plan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Flexible plans designed for different life stages and financial goals
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
                
                <button className="w-full py-3 px-4 rounded-lg font-semibold text-base transition-all duration-300 bg-white text-blue-600 border-2 border-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:shadow-lg">
                  Get Started
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
