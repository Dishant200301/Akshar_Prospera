
import React, { useState, useEffect } from 'react';
import { ArrowRight, Shield, Heart, Users, TrendingUp } from 'lucide-react';

const AnimatedText = ({ text, delay = 0, className = '' }) => {
  const isGradient = className.includes('bg-gradient');
  
  return (
    <span className={isGradient ? '' : className}>
      {text.split(' ').map((word, index) => (
        <span
          key={index}
          className={`animate-word ${isGradient ? className : ''}`}
          style={{ animationDelay: `${delay + index * 0.05}s` }}
        >
          {word}{' '}
        </span>
      ))}
    </span>
  );
};

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://plus.unsplash.com/premium_photo-1726736437312-61096a0df6e8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNhbCUyMGluc3VyYW5jZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600',
      icon: Shield,
      tagline: 'Secure Your',
      highlight: 'Health',
      continuation: ' Today',
      description: 'Trusted and comprehensive insurance solutions that protect your\nfamily\'s future and health in',
      location: ' Canada & USA',
      additionalText: ' Your trusted partner in life\'s uncertainties.',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1517554558809-9b4971b38f39?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxpZmUlMjBpbnN1cmFuY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
      icon: Heart,
      tagline: 'Protect Your',
      highlight: 'Loved',
      continuation: ' Ones',
      description: 'Family protection plans shield your\nloved ones from life\'s uncertainties, providing security for',
      location: ' every milestone',
      additionalText: ' Your trusted partner in life\'s uncertainties.',
    },
    {
      id: 3,
      image: '/3.png',
      icon: Users,
      tagline: 'Empower Your',
      highlight: 'Dreams',
      continuation: ' Always',
      description: 'Wellness programs that empower your\nwellbeing through health coverage, ensuring vitality for',
      location: ' every aspiration',
      additionalText: ' Your trusted partner in life\'s uncertainties.',
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getCurrentSlideData = () => slides[currentSlide];

  return (
    <section className="relative min-h-screen overflow-hidden pt-16 bg-black">
      {/* Background Images with Smooth Transitions */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide 
              ? 'opacity-100 transform translate-x-0 z-10' 
              : index < currentSlide 
                ? 'opacity-0 transform -translate-x-full z-0'
                : 'opacity-0 transform translate-x-full z-0'
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
      <div className="hidden sm:flex absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-20 flex-col mt-12 space-y-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 ${
              currentSlide === index
                ? 'bg-white shadow-lg'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Button */}
      <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 z-20">
        <button 
          onClick={() => {
            const nextSection = document.querySelector('section:nth-of-type(2)');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:scale-110 transition-all duration-300 group"
          aria-label="Scroll down to next section"
        >
          <svg 
            className="w-6 h-6 sm:w-8 sm:h-8 mt-32 text-white transform group-hover:translate-y-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      
     {/* Update the main container and content alignment */}
<div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10 h-full flex items-center justify-center">
  <div className="w-full max-w-4xl mx-auto text-center">
    <div className="animate-fade-in mt-40" key={currentSlide}>
      {/* Dynamic Main Headline - Centered */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight text-center">
        <span className="text-white drop-shadow-2xl font-extrabold">
          <AnimatedText text={getCurrentSlideData().tagline} />
        </span>
        <br className="hidden sm:block" />
        <AnimatedText 
          text={getCurrentSlideData().highlight} 
          delay={getCurrentSlideData().tagline.split(' ').length * 0.05}
          className="bg-gradient-to-r from-insurance-blue to-insurance-blue-accent bg-clip-text text-transparent drop-shadow-2xl font-extrabold"
        />
        <span className="text-white drop-shadow-2xl font-extrabold">
          <AnimatedText 
            text={getCurrentSlideData().continuation} 
            delay={(getCurrentSlideData().tagline.split(' ').length + getCurrentSlideData().highlight.split(' ').length) * 0.05} 
          />
        </span>
      </h1>

      {/* Dynamic Subheadline - Centered */}
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 sm:mb-12 leading-relaxed font-semibold drop-shadow-2xl max-w-3xl mx-auto">
        <AnimatedText text={getCurrentSlideData().description.split('\\n').join(' ')} />
        <AnimatedText 
          text={getCurrentSlideData().location} 
          delay={getCurrentSlideData().description.split(' ').length * 0.05}
          className="bg-gradient-to-r from-insurance-blue to-insurance-blue-accent bg-clip-text text-transparent font-bold drop-shadow-lg"
        />
        <br className="hidden sm:block" />
        <AnimatedText 
          text={getCurrentSlideData().additionalText} 
          delay={(getCurrentSlideData().description.split(' ').length + getCurrentSlideData().location.split(' ').length) * 0.05} 
        />
      </p>

      {/* CTA Buttons - Centered */}
<div className="flex flex-row sm:flex-row gap-4 sm:gap-6 justify-between sm:justify-center">

  <button className="w-[48%] sm:w-auto bg-gradient-to-r from-insurance-blue to-insurance-blue-accent text-white px-4 sm:px-8 py-3 rounded-xl font-bold transition-all duration-300 inline-flex items-center justify-center shadow-2xl text-base sm:text-lg hover:scale-105">
    <span>Talk Advisor</span>
    <ArrowRight className="w-5 h-5 ml-2" />
  </button>

  <button className="w-[48%] sm:w-auto bg-transparent text-white border-2 border-white px-4 sm:px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-blue-700 hover:border-white transition-all duration-300 inline-flex items-center justify-center shadow-2xl text-base sm:text-lg hover:scale-105">
    <span>Free Quote</span>
    <ArrowRight className="w-5 h-5 ml-2" />
  </button>

</div>

    </div>
  </div>
</div>


    </section>
  );
};

export default HeroSection;
