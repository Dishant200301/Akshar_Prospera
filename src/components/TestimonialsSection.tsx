import { useState } from "react";
import { Star, ArrowRight, Quote } from "lucide-react";
import { motion, AnimatePresence  } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Williams",
      position: "Director, Global Enterprises",
      rating: 5,
      text: "Incredible support during our most challenging time. The team went above and beyond to ensure we had the coverage we needed.",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      name: "David Rodriguez",
      position: "Founder, Small Business Network",
      rating: 5,
      text: "Comprehensive coverage that gives me real peace of mind. Best decision I made for my business.",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 3,
      name: "Emily Chen",
      position: "CEO, Tech Innovations",
      rating: 5,
      text: "Professional service with a personal touch. They truly understand the needs of modern businesses and deliver exceptional value.",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: 4,
      name: "Michael Thompson",
      position: "Operations Manager, Retail Corp",
      rating: 5,
      text: "Fast claims processing and excellent customer support. They made a stressful situation so much easier to handle.",
      avatar: "https://i.pravatar.cc/150?img=7",
    },
    {
      id: 5,
      name: "Jessica Martinez",
      position: "Director, Healthcare Solutions",
      rating: 5,
      text: "Outstanding service and attention to detail. Highly recommend to anyone looking for reliable insurance coverage.",
      avatar: "https://i.pravatar.cc/150?img=9",
    },
    {
      id: 6,
      name: "Robert Johnson",
      position: "Founder, Creative Agency",
      rating: 5,
      text: "The transparency and clarity in their policies is refreshing. Finally, an insurance company that speaks plain English!",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
  ];

  const column1 = [testimonials[0], testimonials[1], testimonials[2]];
  const column2 = [testimonials[3], testimonials[4], testimonials[5]];

  const column1Data = [...column1, ...column1, ...column1];
  const column2Data = [...column2, ...column2, ...column2];

  const renderStars = (rating) => (
    <div className="flex gap-0.5">
      {[...Array(rating)].map((_, index) => (
        <Star
          key={index}
          size={18}
          className="fill-primary text-primary"
        />
      ))}
    </div>
  );

  const TestimonialCard = ({ testimonial }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-background rounded-2xl p-6 mb-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/20 group"
  >
    {/* Rest of your card content remains the same */}
    <div className="flex justify-between items-start mb-4">
      {renderStars(testimonial.rating)}
      <Quote size={24} className="text-primary/20 group-hover:text-primary/40 transition-colors" />
    </div>
    <p className="text-text-secondary mb-6 leading-relaxed text-sm">
      "{testimonial.text}"
    </p>
    <div className="flex items-center gap-3 pt-4 border-t border-border">
      <div className="relative">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
        />
      </div>
      <div>
        <h4 className="font-bold text-text-primary text-sm">{testimonial.name}</h4>
        <p className="text-xs text-text-muted">{testimonial.position}</p>
      </div>
    </div>
  </motion.div>
);

  return (
    <section className="py-8 md:py-10 lg:py-12 relative overflow-hidden bg-gray-50">
      


      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-0 xl:px-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Left Section */}
          <div className="flex flex-col justify-center lg:order-1">
            <div className="inline-flex items-center gap-2 bg-background px-4 py-2 rounded-full shadow-sm border border-border mb-6 w-fit">
              <div className="flex -space-x-2">
                {[1, 3, 5].map((img) => (
                  <img
                    key={img}
                    src={`https://i.pravatar.cc/40?img=${img}`}
                    alt="Client"
                    className="w-7 h-7 rounded-full border-2 border-background"
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-text-secondary">
                500+ Happy Clients
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
              What our {""}
              <span className="text-gradient bg-clip-text text-transparent">
                clients say
              </span>
            </h2>

            <p className="text-text-secondary text-base md:text-lg mb-8 max-w-md">
              Real stories from people who trust us with their most important assets and financial security
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                View all 
                <ArrowRight size={18} />
              </button>
              <button className="px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold border-2 border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 flex items-center justify-center gap-2">
                Share your story
              </button>
            </div> */}

            
          </div>

          {/* Right Section - Infinite Scroll Columns */}
          <div className="relative h-[500px] md:h-[600px] overflow-hidden order-1 lg:order-2">
  <div className="flex gap-4 h-full">
    {/* Column 1 (scrolls up) */}
    <div className="flex-1 overflow-hidden">
      <motion.div
        className="space-y-4"
        animate={{ y: ["0%", "-50%"] }}
        transition={{ 
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {[...column1, ...column1].map((testimonial, index) => (
          <TestimonialCard
            key={`col1-${index}`}
            testimonial={testimonial}
          />
        ))}
      </motion.div>
    </div>

    {/* Column 2 (scrolls down) - Hidden on mobile */}
    <div className="flex-1 overflow-hidden hidden sm:block">
      <motion.div
        className="space-y-4"
        animate={{ y: ["-50%", "0%"] }}
        transition={{ 
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {[...column2, ...column2].map((testimonial, index) => (
          <TestimonialCard
            key={`col2-${index}`}
            testimonial={testimonial}
          />
        ))}
      </motion.div>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;