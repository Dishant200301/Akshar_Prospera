
import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Jane R.',
      text: 'Akshar Prospera helped me find the perfect travel insurance plan in minutes!',
      rating: 5
    },
    {
      name: 'Mark L.',
      text: 'Excellent service, very professional and caring.',
      rating: 5
    },
    {
      name: 'Sarah M.',
      text: 'The team at Akshar Prospera made the insurance process so simple and stress-free.',
      rating: 5
    },
    {
      name: 'David K.',
      text: 'Highly recommend! They found me better coverage at a lower price.',
      rating: 5
    },
    {
      name: 'Emily T.',
      text: 'Outstanding customer service and expert advice throughout the entire process.',
      rating: 5
    },
    {
      name: 'Robert P.',
      text: 'Professional, reliable, and truly care about their clients\' needs.',
      rating: 5
    }
  ];

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4 mr-2" />
            Client Testimonials
          </div>
          <h2 className="text-section-title">What Our Clients Say</h2>
          <p className="text-section-subtitle max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white border-2 border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:border-insurance-blue flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white border-2 border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:border-insurance-blue flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Testimonials Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gradient-to-br from-slate-50 to-gray-50 border-2 border-gray-200 rounded-xl p-8 shadow-card max-w-2xl mx-auto">
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-insurance-gold fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic text-lg leading-relaxed text-center">"{testimonial.text}"</p>
                    <p className="font-semibold text-gray-900 text-lg text-center">— {testimonial.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-insurance-blue scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
