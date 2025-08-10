
import React from 'react';
import { ArrowRight, Shield, Users, Globe } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-24 h-24 rounded-full bg-white/20"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-16 h-16 rounded-full bg-white/15"></div>
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-20 h-20 rounded-full bg-white/10"></div>
        </div>
      </div>

      {/* Landmark Icons */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10">
          <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
            <Globe className="w-16 h-16" />
          </div>
        </div>
        <div className="absolute bottom-1/4 right-10">
          <div className="w-28 h-28 bg-white rounded-lg flex items-center justify-center">
            <Shield className="w-14 h-14" />
          </div>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <div className="animate-fade-in">
            {/* Trust Badges */}
            <div className="flex items-center justify-center space-x-6 mb-8">
              <div className="flex items-center space-x-2 text-white/90">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">Licensed & Regulated</span>
              </div>
              <div className="w-1 h-1 bg-white/50 rounded-full"></div>
              <div className="flex items-center space-x-2 text-white/90">
                <Users className="w-5 h-5" />
                <span className="text-sm font-medium">500K+ Protected</span>
              </div>
              <div className="w-1 h-1 bg-white/50 rounded-full"></div>
              <div className="flex items-center space-x-2 text-white/90">
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium">North America Wide</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-hero mb-6 text-balance">
              Protecting Your Health, Travel, and Future 
              <span className="block text-insurance-gold">Across North America</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed text-balance">
              Comprehensive insurance solutions for Canadians and Americans. 
              Get covered in minutes with our trusted, licensed advisors.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <button className="btn-hero group">
                Get Your Free Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-outline bg-white/10 border-white text-white hover:bg-white hover:text-insurance-blue">
                Learn About Our Plans
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-insurance-gold mb-2">24/7</div>
                <div className="text-white/80">Customer Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-insurance-gold mb-2">$50M+</div>
                <div className="text-white/80">Claims Processed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-insurance-gold mb-2">48hrs</div>
                <div className="text-white/80">Average Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-12 fill-white">
          <path d="M0,120 L0,80 Q300,0 600,80 T1200,80 L1200,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
