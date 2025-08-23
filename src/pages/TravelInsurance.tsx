import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Plane, CheckCircle, Shield, Globe, Clock, Star, ArrowRight, Phone, Mail, MapPin, AlertTriangle } from 'lucide-react';

const TravelInsurance = () => {
  const features = [
    'Emergency Medical Coverage Worldwide',
    'Trip Cancellation & Interruption Protection',
    'Baggage & Personal Belongings Coverage',
    '24/7 Global Travel Assistance',
    'Flight Accident Coverage',
    'Rental Car Damage Protection',
    'Pre-existing Medical Condition Coverage',
    'Adventure Sports & Activities Coverage'
  ];

  const plans = [
    {
      name: 'Basic Travel Plan',
      price: 'Starting from $29/trip',
      features: ['Emergency Medical Coverage', 'Trip Cancellation', 'Baggage Protection', '24/7 Support'],
      popular: false
    },
    {
      name: 'Comprehensive Travel Plan',
      price: 'Starting from $59/trip',
      features: ['All Basic Features', 'Trip Interruption', 'Rental Car Coverage', 'Adventure Sports', 'Pre-existing Conditions'],
      popular: true
    },
    {
      name: 'Premium Travel Plan',
      price: 'Starting from $99/trip',
      features: ['All Comprehensive Features', 'Concierge Services', 'Priority Support', 'Higher Coverage Limits', 'Customizable Options'],
      popular: false
    }
  ];

  const destinations = [
    { name: 'Canada', coverage: 'Full Coverage', icon: '🍁' },
    { name: 'United States', coverage: 'Full Coverage', icon: '🇺🇸' },
    { name: 'Europe', coverage: 'Full Coverage', icon: '🇪🇺' },
    { name: 'Asia', coverage: 'Full Coverage', icon: '🌏' },
    { name: 'Australia', coverage: 'Full Coverage', icon: '🇦🇺' },
    { name: 'South America', coverage: 'Full Coverage', icon: '🌎' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 min-h-[75vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Plane className="w-4 h-4 mr-2" />
              Travel Protection
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Travel</span> Insurance
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Travel with confidence worldwide with comprehensive coverage for medical emergencies and trip protection.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Travel Insurance</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive travel protection for every type of adventurer and destination worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Worldwide Coverage</h3>
              <p className="text-gray-600 text-sm">Protection wherever your journey takes you</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Round-the-clock assistance worldwide</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Protection</h3>
              <p className="text-gray-600 text-sm">Coverage for all travel scenarios</p>
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
              Choose Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Travel Plan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Flexible plans designed for different travel styles and budgets
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

      {/* Coverage Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              What's Covered in Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Travel Insurance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive protection for all your travel needs
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

      {/* Destinations Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Global</span> Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Travel insurance that works worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {destinations.map((destination, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl mb-3">{destination.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{destination.name}</h3>
                <p className="text-sm text-blue-600 font-medium">{destination.coverage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Emergency Information
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Need Help While <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Traveling</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Our 24/7 emergency assistance team is available worldwide to help you with any travel-related issues
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Emergency Hotline</h3>
                  <p className="text-2xl font-bold text-red-600">1-800-AKSHAR-PRO</p>
                  <p className="text-gray-600">Available 24/7 worldwide</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Support</h3>
                  <p className="text-lg font-semibold text-blue-600">emergency@aksharprospera.com</p>
                  <p className="text-gray-600">Quick response guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default TravelInsurance;
