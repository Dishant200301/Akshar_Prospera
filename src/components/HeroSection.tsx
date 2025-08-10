
import React from 'react';
import { ArrowRight, Shield, Users, Globe, Building2, Landmark, Mountain, Zap, Star, CheckCircle, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden -mt-16 pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Geometric Patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 left-16 w-24 h-24 border border-white/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute top-48 right-32 w-16 h-16 border border-white/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 border border-white/20 rotate-45 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <div className="animate-fade-in max-w-5xl">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium mb-8">
              <Shield className="w-4 h-4 mr-2 text-blue-400" />
              Trusted by 10,000+ Families Since 2010
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-white to-indigo-400 bg-clip-text text-transparent">
                Protecting
              </span>
              <br />
              <span className="text-white">Your Future</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl lg:text-3xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Comprehensive insurance solutions for Health, Travel, and Visitor coverage across 
              <span className="text-blue-400 font-semibold"> Canada & USA</span>. 
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
              
              <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-semibold rounded-2xl hover:bg-white hover:text-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <span className="flex items-center">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button className="group px-6 py-4 text-white/90 hover:text-white transition-colors duration-300">
                <span className="flex items-center">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mr-3 group-hover:bg-white/20 transition-colors">
                    <Play className="w-5 h-5 ml-1" />
                  </div>
                  Watch Video
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">4.9/5</div>
                <div className="text-white/70 text-sm">Google Reviews</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">Licensed</div>
                <div className="text-white/70 text-sm">Insurance Provider</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">10,000+</div>
                <div className="text-white/70 text-sm">Happy Families</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-20 fill-white">
          <path d="M0,120 L0,60 Q300,0 600,60 T1200,60 L1200,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
