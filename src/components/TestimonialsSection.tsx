
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Toronto, ON',
      image: '/placeholder.svg',
      rating: 5,
      text: 'NorthGuard Insurance saved me thousands when I had a medical emergency in Florida. Their 24/7 support team was incredible, handling everything while I focused on recovery.',
      plan: 'Travel Insurance'
    },
    {
      name: 'Michael Chen',
      location: 'Vancouver, BC',
      image: '/placeholder.svg',
      rating: 5,
      text: 'As a frequent traveler for business, I needed reliable coverage. Their travel insurance has protected me on dozens of trips across North America with zero hassles.',
      plan: 'Travel Insurance'
    },
    {
      name: 'Maria Rodriguez',
      location: 'Miami, FL',
      image: '/placeholder.svg',
      rating: 5,
      text: 'When my parents visited from Mexico, NorthGuard\'s visitor insurance gave us peace of mind. The coverage was comprehensive and the claims process was seamless.',
      plan: 'Visitor Visa Insurance'
    },
    {
      name: 'David Thompson',
      location: 'Calgary, AB',
      image: '/placeholder.svg',
      rating: 5,
      text: 'Their health insurance filled the gaps in my provincial coverage perfectly. The online portal makes managing my policy so easy, and their rates are unbeatable.',
      plan: 'Health Insurance'
    },
    {
      name: 'Jennifer Lee',
      location: 'Seattle, WA',
      image: '/placeholder.svg',
      rating: 5,
      text: 'After comparing multiple providers, NorthGuard offered the best value for comprehensive coverage. Their licensed advisors helped me find exactly what I needed.',
      plan: 'Health Insurance'
    },
    {
      name: 'Robert Wilson',
      location: 'Montreal, QC',
      image: '/placeholder.svg',
      rating: 5,
      text: 'Professional, reliable, and affordable. When I needed to make a claim, they handled everything quickly and fairly. Highly recommend their services.',
      plan: 'Travel Insurance'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-section-title">What Our Clients Say</h2>
          <p className="text-section-subtitle max-w-3xl mx-auto">
            Real stories from real people who trust us with their insurance needs. 
            Join thousands of satisfied customers across North America.
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial Slider */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-2xl p-8 md:p-12 shadow-card mx-4 md:mx-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                      {/* Quote Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-insurance-blue-light/20 rounded-full flex items-center justify-center">
                          <Quote className="w-8 h-8 text-insurance-blue" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-center md:text-left">
                        {/* Stars */}
                        <div className="flex items-center justify-center md:justify-start mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-insurance-gold text-insurance-gold" />
                          ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                          "{testimonial.text}"
                        </blockquote>

                        {/* Author */}
                        <div className="flex items-center justify-center md:justify-start space-x-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-semibold text-gray-900">{testimonial.name}</div>
                            <div className="text-sm text-gray-600">{testimonial.location}</div>
                            <div className="text-xs text-insurance-blue font-medium">{testimonial.plan}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-card hover:shadow-card-hover flex items-center justify-center text-insurance-blue hover:bg-insurance-blue hover:text-white transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-card hover:shadow-card-hover flex items-center justify-center text-insurance-blue hover:bg-insurance-blue hover:text-white transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-insurance-blue scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-insurance-blue mb-2">500K+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-insurance-blue mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-insurance-blue mb-2">$50M+</div>
            <div className="text-gray-600">Claims Processed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-insurance-blue mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
