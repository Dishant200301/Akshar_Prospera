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
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
              <Plane className="w-4 h-4 mr-2" />
              Travel Insurance
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Travel with
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Confidence</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore the world worry-free with comprehensive travel insurance coverage. 
              From medical emergencies to trip cancellations, we've got you covered worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Travel Insurance?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive protection for every type of traveler and destination
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Worldwide Coverage</h3>
              <p className="text-gray-600 text-sm">Protection wherever your journey takes you</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Round-the-clock assistance worldwide</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Protection</h3>
              <p className="text-gray-600 text-sm">Coverage for all travel scenarios</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Service</h3>
              <p className="text-gray-600 text-sm">Exceptional customer experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
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
                plan.popular ? 'border-green-500 scale-105' : 'border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-3xl font-bold text-green-600 mb-4">{plan.price}</p>
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
                    ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600' 
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
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
                <p className="text-sm text-green-600 font-medium">{destination.coverage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Info Section */}
      <section className="py-16 bg-red-50">
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Travel with Confidence?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Get your travel insurance quote today and start planning your next adventure worry-free
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Plane className="w-5 h-5 mr-2" />
              Get Travel Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call for Assistance
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TravelInsurance;
