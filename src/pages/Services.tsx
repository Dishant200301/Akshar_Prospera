"use client";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { SERVICES, SERVICES_HERO } from "../data/services";

const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const AnimatedText = ({ text, delay = 0, className = '' }: { text: string; delay?: number; className?: string }) => {
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

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[65vh] md:h-[70vh] overflow-hidden pt-16 bg-black flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${SERVICES_HERO.image})` }}
        >
          <div className={`absolute inset-0 ${SERVICES_HERO.overlayOpacity}`}></div>
        </div>

     <div className="container mx-auto px-6 lg:px-12 relative z-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight">
            {SERVICES_HERO.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              {SERVICES_HERO.title.split(" ").slice(-1)}
            </span>
          </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 sm:mb-12 leading-relaxed font-semibold drop-shadow-2xl animate-fade-in">
              <AnimatedText text="Stay informed with our latest articles and guides to help you make the best" />
              <AnimatedText 
                text="insurance decisions" 
                delay={0.6}
                className="bg-gradient-to-r from-blue-300 to-indigo-400 bg-clip-text text-transparent font-bold drop-shadow-lg"
              />
            {SERVICES_HERO.subtitle}
            </p>
      
        </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"
          >
            {SERVICES.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group rounded-3xl overflow-hidden bg-white border border-gray-400 transition-all duration-300 hover:shadow-lg hover:border-blue-600"
              >
                <Link to={`/services/${service.slug}`} className="block h-full">
                  <div className="p-4">
                    <div className="overflow-hidden rounded-md">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-56 sm:h-64 object-cover rounded-md group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="px-6 pb-6 flex flex-col">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-between text-blue-600 font-medium group-hover:text-indigo-700 transition-colors">
                      <span>Learn More</span>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
