
import React from 'react';
import { ArrowRight, Shield, Users, Globe, Building2, Landmark, Mountain, Zap, Star, CheckCircle, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden -mt-16 pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Geometric Patterns */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-32 left-16 w-24 h-24 border border-blue-300/40 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute top-48 right-32 w-16 h-16 border border-indigo-300/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 border border-purple-300/40 rotate-45 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <div className="animate-fade-in max-w-5xl">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/10 backdrop-blur-sm border border-blue-300/30 rounded-full text-blue-800 text-sm font-medium mb-8">
              <Shield className="w-4 h-4 mr-2 text-blue-600" />
              Trusted by 10,000+ Families Since 2010
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-800 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Protecting
              </span>
              <br />
              <span className="text-slate-800">Your Future</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Comprehensive insurance solutions for Health, Travel, and Visitor coverage across 
              <span className="text-blue-600 font-semibold"> Canada & USA</span>. 
              Your trusted partner in financial security.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-indigo-500 overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Talk to an Advisor
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-blue-200 text-slate-700 font-semibold rounded-2xl hover:bg-white hover:text-slate-900 hover:border-blue-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <span className="flex items-center">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button className="group px-6 py-4 text-slate-600 hover:text-slate-800 transition-colors duration-300">
                <span className="flex items-center">
                  <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center mr-3 group-hover:bg-white group-hover:shadow-lg transition-all">
                    <Play className="w-5 h-5 ml-1 text-blue-600" />
                  </div>
                  Watch Video
                </span>
              </button>
            </div>


          </div>
        </div>
      </div>


    </section>
  );
};

export default HeroSection;
