"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

const faqs = [
    {
      question: "What digital marketing services do you offer?",
      answer:
        "We provide SEO, social media marketing, PPC, content strategy, and full campaign management tailored to your business goals.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We specialize in real estate, healthcare, travel, and finance sectors — crafting data-driven campaigns that deliver measurable results.",
    },
    {
      question: "How much do your digital marketing services cost?",
      answer:
        "Pricing depends on your goals and scope, but we always offer transparent and customizable plans that fit your budget.",
    },
    {
      question: "Can I review content before it’s published?",
      answer:
        "Absolutely. All campaigns, designs, and copies go through your review before launch for complete satisfaction.",
    },
    {
      question: "Is there a minimum contract period?",
      answer:
        "No. You can start or stop anytime, though we recommend at least 3 months for measurable performance growth.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-12 lg:py-8 bg-gray-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-12 max-w-4xl">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Question?{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Look Here.
            </span>
          </h2>
          
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div
                className={`rounded-2xl backdrop-blur-sm transition-all duration-300 overflow-hidden ${
                  activeIndex === index
                    ? "bg-[#2563eb] border border-blue-500/30 shadow-lg shadow-blue-500/20"
                    : "bg-white border hover:border-gray-600/50"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 sm:px-8 py-5 text-left focus:outline-none group"
                >
                  <span className={`font-semibold text-base sm:text-lg leading-relaxed pr-4 transition-colors ${
                    activeIndex === index ? "text-white" : "text-black"
                  }`}>
                    {faq.question}
                  </span>
                  
                  <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                    activeIndex === index 
                      ? "bg-gradient-to-br from-blue-500 to-indigo-500 text-white rotate-180" 
                      : "bg-white text-gray-400"
                  }`}>
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="text-sm"
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6">
                        <div className="text-sm sm:text-base leading-relaxed text-white pt-2 border-t border-gray-300">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default FAQSection;