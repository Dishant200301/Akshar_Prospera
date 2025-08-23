
import React, { useState, useEffect } from 'react';
import { ArrowRight, Shield, Heart, Users, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/1.jpg',
      badge: 'Excellence Since 2010',
      icon: Shield,
      tagline: 'Secure Your',
      highlight: 'Health',
      continuation: ' Today',
      description: 'Comprehensive insurance solutions that protect your family\'s future, health, and dreams across',
      location: ' Canada & USA',
      additionalText: '. Your trusted partner in life\'s uncertainties.',
    },
    {
      id: 2,
      image: '/2.jpg',
      badge: 'Family Protection',
      icon: Heart,
      tagline: 'Protect Your',
      highlight: 'Loved',
      continuation: ' Ones',
      description: 'Life insurance policies designed to protect your family\'s financial security, health, and dreams across',
      location: ' Canada & USA',
      additionalText: '. Your trusted partner in life\'s uncertainties.',
    },
    {
      id: 3,
      image: '/3.png',
      badge: 'Future Planning',
      icon: Users,
      tagline: 'Secure Your',
      highlight: 'Future',
      continuation: ' Today',
      description: 'Premium health insurance coverage that protects your family\'s future, health, and dreams across',
      location: ' Canada & USA',
      additionalText: '. Your trusted partner in life\'s uncertainties.',
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getCurrentSlideData = () => slides[currentSlide];

  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      {/* Background Images with Smooth Transitions */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide 
              ? 'opacity-100 transform translate-x-0' 
              : index < currentSlide 
                ? 'opacity-0 transform -translate-x-full'
                : 'opacity-0 transform translate-x-full'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-20 flex flex-col space-y-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
              currentSlide === index
                ? 'bg-white shadow-lg'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="flex flex-col justify-center min-h-screen text-left">
          <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl ml-8 sm:ml-16">
            <div className="animate-fade-in">
              {/* Dynamic Badge */}
              <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2.5 bg-white/90 backdrop-blur-sm text-blue-800 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 mt-8 sm:mt-0 shadow-xl border border-white/20 transition-all duration-500">
                {React.createElement(getCurrentSlideData().icon, {
                  className: "w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-600"
                })}
                <span className="sm:hidden">{getCurrentSlideData().badge}</span>
                <span className="hidden sm:inline">{getCurrentSlideData().badge}</span>
              </div>

              {/* Dynamic Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
                <span className="text-white drop-shadow-2xl font-extrabold">
                  {getCurrentSlideData().tagline}
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-2xl font-extrabold">
                  {getCurrentSlideData().highlight}
                </span>
                <span className="text-white drop-shadow-2xl font-extrabold">{getCurrentSlideData().continuation}</span>
              </h1>

              {/* Dynamic Subheadline */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 sm:mb-12 leading-relaxed font-semibold drop-shadow-2xl">
                {getCurrentSlideData().description}
                <span className="bg-gradient-to-r from-blue-300 to-indigo-400 bg-clip-text text-transparent font-bold drop-shadow-lg">{getCurrentSlideData().location}</span>
                {getCurrentSlideData().additionalText}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
                <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white px-6 sm:px-8 py-4 rounded-xl font-bold hover:from-blue-500 hover:via-blue-600 hover:to-indigo-600 transition-all duration-300 inline-flex items-center justify-center shadow-2xl text-sm sm:text-base transform hover:scale-105">
                  <ArrowRight className="hidden sm:block w-5 h-5 mr-2" /> Talk to an Advisor
                </button>
                
                <button className="w-full sm:w-auto bg-transparent text-white border-2 border-white px-6 sm:px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-700 hover:border-white transition-all duration-300 inline-flex items-center justify-center shadow-2xl text-sm sm:text-base transform hover:scale-105">
                  <ArrowRight className="hidden sm:block w-5 h-5 mr-2" /> Get Free Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Progress Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-1 transition-all duration-300 ${
                currentSlide === index ? 'w-8 bg-white' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
