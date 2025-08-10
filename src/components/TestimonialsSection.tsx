
import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
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
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-section-title">What Our Clients Say</h2>
          <p className="text-section-subtitle max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-insurance-gold fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-900">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
