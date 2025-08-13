
import React, { useRef, useState } from 'react';
import { Star, MessageCircle, Quote } from 'lucide-react';

type Testimonial = {
  name: string;
  role?: string;
  rating: number;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Jane Roberts',
    role: 'Travel Enthusiast',
    rating: 5,
    text:
      'Akshar Prospera took the confusion out of insurance. They listened to what I needed and matched me with a plan that made total sense. I felt informed and protected the whole time.',
  },
  {
    name: 'Mark Lewis',
    role: 'Young Parent',
    rating: 5,
    text:
      'Exceptionally professional. They explained every detail in simple language and helped us get the right coverage for our family without overselling anything.',
  },
  {
    name: 'Sarah Miller',
    role: 'Remote Professional',
    rating: 5,
    text:
      'Seamless, stress-free and fast. I compared multiple options in one place and actually understood the differences. Could not have asked for a smoother experience.',
  },
  {
    name: 'David Kim',
    role: 'Frequent Flyer',
    rating: 5,
    text:
      'I ended up with stronger coverage and a lower premium. The team guided me through each choice like a trusted advisor, not a salesperson. Highly recommended.',
  },
  {
    name: 'Emily Turner',
    role: 'New Homeowner',
    rating: 5,
    text:
      'Courteous, quick and knowledgeable. They helped me understand what truly mattered for my situation and optimized my plan accordingly. Real peace of mind.',
  },
  {
    name: 'Robert Patel',
    role: 'Small Business Owner',
    rating: 5,
    text:
      'Responsive and reliable from day one. Claims guidance was clear and prompt, and renewals have been effortless. It feels like having an expert on my side.',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-5 h-5 text-insurance-gold fill-current" />
      ))}
    </div>
  );
}

const TestimonialsSection: React.FC = () => {
  const [tiltedCards, setTiltedCards] = useState<{ [key: number]: { x: number; y: number } }>({});
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;

    setTiltedCards(prev => ({
      ...prev,
      [index]: { x: rotateX, y: rotateY },
    }));
  };

  const handleMouseLeave = (index: number) => {
    setTiltedCards(prev => ({
      ...prev,
      [index]: { x: 0, y: 0 },
    }));
  };
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Client Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            What Our
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Customers</span>
            <span className="text-gray-900"> Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Real stories from people who simplified insurance with the right guidance.
          </p>
        </div>

        {/* Static grid with interactive hover tilt like ServicesSection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((t, idx) => (
            <div key={`${t.name}-${idx}`} className="group block perspective-1000">
              <div
                ref={el => (cardRefs.current[idx] = el)}
                onMouseMove={e => handleMouseMove(idx, e)}
                onMouseLeave={() => handleMouseLeave(idx)}
                className="h-full"
              >
                <article
                  className="relative rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-white to-slate-50 p-4 sm:p-6 shadow-card transition-all duration-300 ease-out transform-gpu group-hover:shadow-2xl group-hover:scale-105 h-full"
                  style={{
                    transform: `perspective(1000px) rotateX(${tiltedCards[idx]?.x || 0}deg) rotateY(${tiltedCards[idx]?.y || 0}deg)`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Accent ring */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 group-hover:ring-insurance-blue/30"></div>

                  {/* Quote icon */}
                  <div className="absolute -top-2 sm:-top-3 -left-2 sm:-left-3 h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-blue-600/10 text-blue-700 flex items-center justify-center shadow-sm">
                    <Quote className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  {/* Header */}
                  <div className="flex items-start justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 leading-tight text-sm sm:text-base">{t.name}</h3>
                      {t.role && <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{t.role}</p>}
                    </div>
                    <Stars count={t.rating} />
                  </div>

                  {/* Body */}
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">"{t.text}"</p>
                </article>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 sm:mt-12 text-center">
          <a
            href="#contact"
            className="bg-white text-blue-600 border-2 border-blue-600 px-4 sm:px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:bg-gradient-to-r transition-all duration-200 inline-flex items-center justify-center shadow-sm"
          >
            Get a free consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
