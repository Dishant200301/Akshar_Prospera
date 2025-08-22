
import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16" style={{
      backgroundImage: 'url(/1.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/80"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <div className="max-w-4xl sm:max-w-3xl lg:max-w-2xl">
            <div className="animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2.5 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 mt-8 sm:mt-0">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                <span className="sm:hidden">Trusted Since 2010</span>
                <span className="hidden sm:inline">Trusted by 10,000+ Families Since 2010</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Secure Your
                </span>
                <br />
                <span className="text-white">Tomorrow Today</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 sm:mb-12 leading-relaxed font-light">
                Comprehensive insurance solutions that protect your family's future, 
                health, and dreams across 
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent font-semibold"> Canada & USA</span>. 
                Your trusted partner in life's uncertainties.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-6">
                <button className="flex-1 sm:flex-none bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 sm:px-6 py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 inline-flex items-center justify-center shadow-sm text-sm sm:text-base">
                  <ArrowRight className="hidden sm:block w-5 h-5 mr-2" /> Talk to an Advisor
                </button>
                
                <button className="flex-1 sm:flex-none bg-white text-blue-600 border-2 border-blue-600 px-3 sm:px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:bg-gradient-to-r transition-all duration-200 inline-flex items-center justify-center shadow-sm text-sm sm:text-base">
                  <ArrowRight className="hidden sm:block w-5 h-5 mr-2" /> Get Free Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
