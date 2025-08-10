
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
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
            {/* Left Section - Content */}
            <div className="flex-1 text-left max-w-2xl mb-12 lg:mb-0">
            <div className="animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-8">
                <Shield className="w-4 h-4 mr-2" />
                Trusted by 10,000+ Families Since 2010
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-8 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Secure Your
                </span>
                <br />
                <span className="text-slate-800">Tomorrow Today</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed font-light">
                Comprehensive insurance solutions that protect your family's future, 
                <span className="text-blue-600 font-semibold"> health, and dreams</span> across 
                <span className="text-blue-600 font-semibold"> Canada & USA</span>. 
                Your trusted partner in life's uncertainties.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="bg-insurance-blue text-white px-6 py-3 rounded-xl font-semibold hover:bg-insurance-blue/90 transition-all duration-200 inline-flex items-center justify-center shadow-sm">
                  <ArrowRight className="w-5 h-5 mr-2" /> Talk to an Advisor
                </button>
                
                <button className="bg-white text-insurance-blue border-2 border-insurance-blue px-6 py-3 rounded-xl font-semibold hover:bg-insurance-blue hover:text-white transition-all duration-200 inline-flex items-center justify-center shadow-sm">
                  <ArrowRight className="w-5 h-5 mr-2" /> Get Free Quote
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - Image Carousel */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Main Image */}
              <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImages[currentImageIndex]} 
                  alt="Insurance Protection"
                  className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Image Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
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
      </div>
    </section>
  );
};

export default HeroSection;
