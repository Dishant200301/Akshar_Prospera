import React from 'react';
import { ArrowRight, Shield, Star, CheckCircle, Users } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Clean, minimal background - removed busy animated elements */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-8">
            <Shield className="w-5 h-5 mr-2" />
            Your Financial Security Starts Here
          </div>

          {/* Main Content */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-8 leading-tight">
            Ready to
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Secure</span>
            <br />
            <span className="text-slate-800">Your Future?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Our licensed advisors are ready to help you navigate your options and find the perfect coverage 
            that fits your needs, lifestyle, and budget. Don't wait to protect what matters most.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-gray-200 rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Free Consultation</h4>
              <p className="text-slate-600 text-sm">No obligation, just expert advice</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-gray-200 rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Licensed Experts</h4>
              <p className="text-slate-600 text-sm">15+ years of experience</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-gray-200 rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Best Rates</h4>
              <p className="text-slate-600 text-sm">Competitive pricing guaranteed</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-base rounded-xl shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:from-blue-400 hover:to-cyan-400 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Talk to an Advisor
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group px-8 py-4 bg-white border-2 border-gray-200 text-slate-700 font-bold text-base rounded-xl hover:bg-gray-50 hover:text-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Free Quote
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-slate-600">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium">No Hidden Fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium">Instant Quotes</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
