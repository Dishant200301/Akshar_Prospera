import React from 'react';
import { Phone, ArrowRight, MessageCircle, Clock, Shield } from 'lucide-react';

const QuickContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white/90 text-sm font-medium mb-8">
            <Shield className="w-4 h-4 mr-2" />
            Get Expert Advice Today
          </div>

          {/* Main Content */}
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Get
            <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent"> Protected?</span>
          </h3>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Have questions about insurance? Our licensed advisors are here to help you find the perfect coverage for your needs.
          </p>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Call Us</h4>
              <p className="text-white/80 text-sm">Speak directly with an advisor</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Live Chat</h4>
              <p className="text-white/80 text-sm">Get instant answers online</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Schedule Call</h4>
              <p className="text-white/80 text-sm">Book a time that works for you</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105 hover:bg-gray-50 flex items-center">
              <Phone className="w-6 h-6 mr-3" />
              Talk to an Advisor
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center">
              <MessageCircle className="w-6 h-6 mr-3" />
              Start Live Chat
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/80">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm font-medium">Available 24/7</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-sm font-medium">Licensed Advisors</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span className="text-sm font-medium">Free Consultation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickContactSection;
