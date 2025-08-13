
import React, { useState, useEffect } from 'react';
import { ArrowRight, Shield, Users, Globe, Building2, Landmark, Mountain, Zap, Star, CheckCircle, Play } from 'lucide-react';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    '/src/assets/family-insurance.jpg',
    '/src/assets/travel-insurance.jpg', 
    '/src/assets/health-insurance.jpg',
    '/src/assets/life-insurance.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gray-50 overflow-hidden -mt-16 pt-16">
      {/* Clean, minimal background - removed busy animated elements */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
          {/* Left Section - Content */}
          <div className="flex-1 text-left max-w-4xl sm:max-w-3xl lg:max-w-2xl mb-8 sm:mb-12 lg:mb-0">
            <div className="animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2.5 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 mt-8 sm:mt-0">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                <span className="sm:hidden">Trusted Since 2010</span>
                <span className="hidden sm:inline">Trusted by 10,000+ Families Since 2010</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 sm:mb-8 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Secure Your
                </span>
                <br />
                <span className="text-slate-800">Tomorrow Today</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 mb-8 sm:mb-12 leading-relaxed font-light">
                Comprehensive insurance solutions that protect your family's future, 
                health, and dreams across 
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold"> Canada & USA</span>. 
                Your trusted partner in life's uncertainties.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6">
                <button className="flex-1 sm:flex-none bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 sm:px-6 py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 inline-flex items-center justify-center shadow-sm text-sm sm:text-base">
                  <ArrowRight className="hidden sm:block w-5 h-5 mr-2" /> Talk to an Advisor
                </button>
                
                <button className="flex-1 sm:flex-none bg-white text-blue-600 border-2 border-blue-600 px-3 sm:px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:bg-gradient-to-r transition-all duration-200 inline-flex items-center justify-center shadow-sm text-sm sm:text-base">
                  <ArrowRight className="hidden sm:block w-5 h-5 mr-2" /> Get Free Quote
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - Image Carousel */}
          <div className="flex-1 flex justify-center lg:justify-end mt-12 sm:mt-8 lg:mt-0">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              {/* Main Image */}
              <div className="relative w-full h-80 sm:h-80 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImages[currentImageIndex]} 
                  alt="Insurance Protection"
                  className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Image Indicators */}
              <div className="flex justify-center space-x-3 mt-6 sm:mt-6">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-blue-600 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
