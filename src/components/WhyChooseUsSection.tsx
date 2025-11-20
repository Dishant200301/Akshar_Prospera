"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  faShieldAlt,
  faDollarSign,
  faBullseye,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DotLottieAnimation from "./DotLottieAnimation";

const WhyChooseUsSection: React.FC = () => {
  const benefits = [
    {
      icon: faShieldAlt,
      title: "Licensed & Experienced",
      description:
        "Our advisors have 15+ years of experience and are fully licensed across Canada and USA.",
    },
    {
      icon: faDollarSign,
      title: "Competitive Pricing",
      description:
        "Get the best rates with our transparent pricing and no hidden fees policy.",
    },
    {
      icon: faBullseye,
      title: "Personalized Coverage",
      description:
        "Tailored insurance solutions that perfectly match your unique needs and lifestyle.",
    },
    {
      icon: faClock,
      title: "24/7 Support",
      description:
        "Round-the-clock assistance for claims, questions, and emergency situations.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 ">
        {/* Header */}
        <div className="text-center ">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 ">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-insurance-blue to-insurance-blue-accent bg-clip-text text-transparent">
              Akshar Prospera
            </span>
          </h2>
         
        </div>

        {/* Grid Layout for Image + Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left: Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex items-center justify-center w-full"
          >
           <DotLottieAnimation
  src="https://lottie.host/f74c0153-6dd0-4d25-b93f-6f253719bee9/uB5GQsbAnW.lottie"
  className="w-[350px] sm:w-[500px] md:w-[650px] lg:w-[650px] xl:w-[750px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] xl:h-[600px] -mx-60"
 />

          </motion.div>

          {/* Right: Feature Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-sm flex flex-col justify-start"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-gradient-to-r from-insurance-blue to-insurance-blue-accent">
                  <FontAwesomeIcon icon={benefit.icon} className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
