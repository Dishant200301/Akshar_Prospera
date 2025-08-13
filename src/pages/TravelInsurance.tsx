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
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 min-h-[50vh] flex items-center">
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
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Plane className="w-4 h-4 mr-2" />
              Why Choose Us
            </div>
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
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Plane className="w-4 h-4 mr-2" />
              Choose Your Plan
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Travel Plan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible plans designed for different travel styles and budgets
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

      {/* Coverage Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <CheckCircle className="w-4 h-4 mr-2" />
              What's Covered
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Covered in Your Travel Insurance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Globe className="w-4 h-4 mr-2" />
              Global Coverage
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Global Coverage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Emergency Information
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Need Help While Traveling?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
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
