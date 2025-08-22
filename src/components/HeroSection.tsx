
import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16" style={{
      backgroundImage: 'url(/1.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'right center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Semi-transparent dark overlay to reduce image brightness */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="flex flex-col justify-center min-h-screen text-left">
          <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl">
            <div className="animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2.5 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 mt-8 sm:mt-0 shadow-lg">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                <span className="sm:hidden">Est. 2010</span>
                <span className="hidden sm:inline">Est. 2010</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight drop-shadow-2xl">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
                  Secure Your
                </span>
                <br />
                <span className="text-white drop-shadow-2xl">Tomorrow Today</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 sm:mb-12 leading-relaxed font-semibold drop-shadow-xl">
                Comprehensive insurance solutions that protect your family's future, 
                health, and dreams across 
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent font-bold drop-shadow-lg"> Canada & USA</span>. 
                Your trusted partner in life's uncertainties.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
                <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 sm:px-6 py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 inline-flex items-center justify-center shadow-lg text-sm sm:text-base">
                  <ArrowRight className="hidden sm:block w-5 h-5 mr-2" /> Talk to an Advisor
                </button>
                
                <button className="w-full sm:w-auto bg-white text-blue-600 border-2 border-blue-600 px-3 sm:px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:bg-gradient-to-r transition-all duration-200 inline-flex items-center justify-center shadow-lg text-sm sm:text-base">
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
