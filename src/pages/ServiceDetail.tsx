// src/components/ServiceDetail.tsx
import React from 'react';
import Navigation from '../components/Navigation'; // Assuming Navigation is in the same components folder
import Footer from '../components/Footer';     // Assuming Footer is in the same components folder
import { CheckCircle, AlertTriangle } from 'lucide-react'; // Import common icons

// Import all specific Lucide icons that might be used in the data
// You can also pass the icon component directly in your data as done in serviceDetailData.ts
// (Shield, Users, Clock, Star, Globe, FileText, Award, Calculator, Phone, Mail, Heart) are imported in serviceDetailData.ts
// but if you were to use them *within* ServiceDetail.tsx directly for generic components, you'd import them here.

import { ServiceDetailType } from '../types/serviceTypes'; // Adjust path as needed

// Helper for AnimatedText-like components (can be moved to a separate utils file if desired)
const AnimatedText = ({ text, delay = 0, className = '' }: { text: string; delay?: number; className?: string }) => {
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

interface ServiceDetailProps {
  service: ServiceDetailType | undefined; // Service can be undefined if not found
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service }) => {
  if (!service) {
    // Handle case where service data is not found (e.g., 404 page)
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold text-gray-800">Service Not Found</h1>
        <p className="text-lg text-gray-600 mt-4">The service you are looking for does not exist.</p>
        <a href="/" className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">Go to Home</a>
      </div>
    );
  }

  const {
    hero,
    whyChoose,
    plans,
    whatsIncluded,
    destinations,
    emergencyInfo,
    visaTypes,
    countries,
    process,
    benefits,
    riders,
  } = service;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[65vh] md:h-[70vh] overflow-hidden pt-16 bg-black flex items-center justify-center">
        <div
          className="absolute inset-0 transition-all duration-1000 ease-in-out opacity-100 z-10"
          style={{
            backgroundImage: `url(${hero.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'right top',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight">
                <span className="text-white drop-shadow-2xl font-extrabold">
                  {hero.titlePrimary}
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-2xl font-extrabold">
                  {hero.titleGradient}{' '}
                </span>
                {hero.titleSecondary && ( // Only render if titleSecondary exists
                  <span className="text-white drop-shadow-2xl font-extrabold">
                    {hero.titleSecondary}
                  </span>
                )}
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 sm:mb-12 leading-relaxed font-semibold drop-shadow-2xl animate-fade-in">
              <AnimatedText text="Stay informed with our latest articles and guides to help you make the best" />
              <AnimatedText 
                text="insurance decisions" 
                delay={0.6}
                className="bg-gradient-to-r from-blue-300 to-indigo-400 bg-clip-text text-transparent font-bold drop-shadow-lg"
              />
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {whyChoose.titlePrimary}{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{whyChoose.titleGradient}</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {whyChoose.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.cards.map((card, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <card.icon className="w-8 h-8 text-white" /> {/* Render icon component */}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {plans.titlePrimary}{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{plans.titleGradient}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {plans.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.cards.map((plan, index) => (
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

      {/* What's Included / Coverage Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {whatsIncluded.titlePrimary}{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{whatsIncluded.titleGradient}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {whatsIncluded.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {whatsIncluded.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700 text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Sections start here based on service type */}

      {/* Destinations Section (Travel Insurance specific) */}
      {destinations && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {destinations.titlePrimary}{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{destinations.titleGradient}</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {destinations.description}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
              {destinations.cards.map((destination, index) => (
                <div key={index} className="text-center bg-white p-6 rounded-xl shadow-md">
                  <div className="text-4xl mb-3">{destination.icon}</div> {/* Emoji icon */}
                  <h3 className="font-semibold text-gray-900 mb-1">{destination.name}</h3>
                  <p className="text-sm text-blue-600 font-medium">{destination.coverage}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Emergency Info Section (Travel Insurance specific) */}
      {emergencyInfo && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-6">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Emergency Information
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {emergencyInfo.titlePrimary}{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{emergencyInfo.titleGradient}</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                {emergencyInfo.description}
              </p>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <emergencyInfo.hotline.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{emergencyInfo.hotline.title}</h3>
                    <p className="text-2xl font-bold text-red-600">{emergencyInfo.hotline.number}</p>
                    <p className="text-gray-600">{emergencyInfo.hotline.note}</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <emergencyInfo.email.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{emergencyInfo.email.title}</h3>
                    <p className="text-lg font-semibold text-blue-600">{emergencyInfo.email.address}</p>
                    <p className="text-gray-600">{emergencyInfo.email.note}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Visa Types Section (Visitor Visa Insurance specific) */}
      {visaTypes && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {visaTypes.titlePrimary}{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{visaTypes.titleGradient}</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {visaTypes.description}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
              {visaTypes.cards.map((visa, index) => (
                <div key={index} className="text-center bg-gray-50 p-6 rounded-xl">
                  <div className="text-4xl mb-3">{visa.icon}</div> {/* Emoji icon */}
                  <h3 className="font-semibold text-gray-900 mb-1">{visa.name}</h3>
                  <p className="text-sm text-blue-600 font-medium">{visa.coverage}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Countries Section (Visitor Visa Insurance specific) */}
      {countries && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {countries.titlePrimary}{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{countries.titleGradient}</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {countries.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {countries.cards.map((country, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-3xl">{country.flag}</div> {/* Emoji flag */}
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
      )}

      {/* Benefits Section (Life Insurance specific) */}
      {benefits && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {benefits.titlePrimary}{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{benefits.titleGradient}</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {benefits.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {benefits.cards.map((benefit, index) => (
                <div key={index} className="text-center bg-gray-50 p-6 rounded-xl">
                  <div className="text-4xl mb-4">{benefit.icon}</div> {/* Emoji icon */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.name}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Riders Section (Life Insurance specific) */}
      {riders && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {riders.titlePrimary}{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{riders.titleGradient}</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {riders.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {riders.cards.map((rider, index) => (
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
      )}

      {/* Process Section (Visitor Visa & Life Insurance specific, different content) */}
      {process && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {process.titlePrimary}{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{process.titleGradient}</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {process.description}
              </p>
            </div>

            {/* Adjust grid columns based on the number of steps */}
            <div className={`grid grid-cols-1 md:grid-cols-${process.steps.length === 4 ? 4 : 3} gap-8 max-w-5xl mx-auto`}>
              {process.steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                    {step.stepNumber}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ServiceDetail;