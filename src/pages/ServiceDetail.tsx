import React from 'react';
import {
  Shield, Heart, Plane, Home, Car,
  CheckCircle, XCircle, Plus, Check, X,
  DollarSign, Clock, Award, Users, Globe,
  FileText, TrendingUp, Zap, Lock
} from 'lucide-react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ServiceDetailData } from '../data/ServiceDetail';
import { Link } from 'react-router-dom';

// Icon mapping for services
const serviceIcons: Record<string, React.ElementType> = {
  'Health Insurance': Heart,
  'Travel Insurance': Plane,
  'Life Insurance': Shield,
  'Home Insurance': Home,
  'Auto Insurance': Car
};

// Feature icons mapping
const featureIconMap: Record<string, React.ReactNode> = {
  'Cashless': <DollarSign className="w-10 h-10" />,
  'Tax': <FileText className="w-10 h-10" />,
  'Lifetime': <TrendingUp className="w-10 h-10" />,
  'Claim': <Award className="w-10 h-10" />,
  'Support': <Clock className="w-10 h-10" />,
  'Network': <Globe className="w-10 h-10" />,
  'Online': <Zap className="w-10 h-10" />,
  'Protection': <Shield className="w-10 h-10" />,
  'Security': <Lock className="w-10 h-10" />,
  'Family': <Users className="w-10 h-10" />
};

// Get icon for feature based on title keywords
const getFeatureIcon = (title: string): React.ReactNode => {
  const lowerTitle = title.toLowerCase();
  for (const [key, icon] of Object.entries(featureIconMap)) {
    if (lowerTitle.includes(key.toLowerCase())) {
      return icon;
    }
  }
  return <CheckCircle className="w-10 h-10" />;
};


interface ServiceDetailProps {
  service?: ServiceDetailData;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const AnimatedText = ({ text, delay = 0, className = "" }) => {
  const isGradient = className.includes("bg-gradient");

  return (
    <span className={isGradient ? "" : className}>
      {text.split(" ").map((word, index) => (
        <span
          key={index}
          className={`inline-block animate-word ${isGradient ? className : ""}`}
          style={{ animationDelay: `${delay + index * 0.05}s` }}
        >
          {word}{" "}
        </span>
      ))}
    </span>
  );
};

const ServiceDetailComponent: React.FC<ServiceDetailProps> = ({ service }) => {
  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navigation />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center py-20 text-xl font-medium text-gray-500">
            Service details not found.
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 font-sans text-gray-900 overflow-x-hidden">
      <Navigation />

      {/* ------------------ HERO SECTION ------------------ */}
      <section className="relative h-[70vh] overflow-hidden pt-16 bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>

        <div className="mx-auto px-3 lg:px-12 relative z-20 text-center mt-24 lg:mt-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            {/* HEADING → Styled like ABOUT */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
              {(service.tagline || "").split(' ').slice(0, -3).join(' ')}{' '}
              <span className="bg-gradient-to-r from-insurance-blue to-insurance-blue-accent bg-clip-text text-transparent">
                {(service.tagline || "").split(' ').slice(-3).join(' ')}
              </span>
            </h1>

            {/* PARAGRAPH → Animated like ABOUT page */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 sm:mb-12 leading-relaxed font-semibold drop-shadow-2xl animate-fade-in">
              <AnimatedText text={service.shortDescription.split(" ").slice(0, 8).join(" ") + " "} />
              <AnimatedText
                text={service.shortDescription.split(" ").slice(8).join(" ")}
                delay={0.6}
                className="bg-gradient-to-r from-insurance-blue to-insurance-blue-accent bg-clip-text text-transparent font-bold drop-shadow-lg"
              />
            </p>


          </motion.div>
        </div>
      </section>


      {/* WHAT IS + WHY NEED */}
      <section className="py-16 md:pt-24">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-8">
            What is <span className="hover-text-gradient">{service.serviceName}</span>?
          </motion.h2>
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="space-y-6 text-lg leading-relaxed text-gray-600">
            <p>{service.whatIsInsurance}</p>
            <p className="font-medium">{service.whyNeed}</p>
          </motion.div>
        </div>
      </section>

      {/* ------------------ POLICY TYPES ------------------ */}
      <section className=" flex flex-col justify-center py-20 bg-gray-50 ">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Types of {" "}
              <span className="hover-text-gradient">Coverage</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {(service.policyTypes || []).map((policy, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-600 flex flex-col h-full"
              >

                <h3 className="text-xl font-bold text-gray-900 mb-4">{policy.name}</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">{policy.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ------------------ KEY FEATURES ------------------ */}
      <section className="min-h-screen flex flex-col justify-center py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Key {" "}
              <span className="text-blue-600">Features</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {(service.keyFeatures || []).map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="text-blue-600 mb-6 flex justify-center">
                  {getFeatureIcon(feature.title)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ------------------ WHY NECESSARY ------------------ */}
      <section className="flex flex-col justify-center py-20 ">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why It's {" "}
              <span className="hover-text-gradient"> Necessary</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {(service.whyNecessary || []).map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ------------------ WHY CHOOSE US & COMPARISON ------------------ */}
      <section className="flex flex-col justify-center py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 ml-2 mb-">
                Why
                <span className="hover-text-gradient"> Choose Us</span>?
              </h2>
              <div className="space-y-8">
                {(service.whyChooseProvider || []).map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 rounded-xl">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Comparison Table */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
            >
              <div className="p-6 bg-gray-50 border-b border-gray-200">
                <h3 className="text-xl font-bold text-center text-gray-900">Plan Comparison</h3>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="bg-white border-b border-gray-100">
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-gray-400 uppercase tracking-wider">Others</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-blue-600 uppercase tracking-wider bg-blue-50">Us</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {(service.comparison || []).map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        {row.basic ? (
                          <Check className="w-5 h-5 text-blue-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-500 mx-auto" />
                        )}
                      </td>
                      <td className="px-6 py-4 text-center bg-blue-50/30">
                        {row.comprehensive ? (
                          <Check className="w-6 h-6 text-blue-600 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-red-400 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ------------------ COVERAGE DETAILS ------------------ */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gray-50 py-6 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-6 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-6">
              <span className="hover-text-gradient">Coverage </span>Details
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center h-full">

            {/* What is Covered */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-5 sm:p-8 rounded-3xl shadow-xl border-t-8 border-blue-600 h-full"
            >
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">What is Covered</h3>
              </div>

              <ul className="space-y-3 sm:space-y-4">
                {(service.whatIsCovered || []).map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-base sm:text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* What is Not Covered */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-5 sm:p-8 rounded-3xl shadow-xl border-t-8 border-blue-600 h-full"
            >
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <XCircle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">What is Not Covered</h3>
              </div>

              <ul className="space-y-3 sm:space-y-4">
                {(service.whatIsNotCovered || []).map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-base sm:text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>



      {/* ------------------ ADD-ONS & BUYING ------------------ */}
      <section className="flex flex-col justify-center items-center py-24">
        <div className="container mx-auto px-6 lg:px-12">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Enhance Your <span className="hover-text-gradient">Coverage</span>
            </h2>
          </motion.div>

          {/* Smaller grid so everything fits in one screen */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-content-center">
            {(service.addOnCovers || []).map((addon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors h-full"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{addon.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{addon.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <section className=" flex flex-col justify-center  bg-gray-50 py-12 mb-24">
        <div className="container mx-auto px-6 lg:px-12">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              How to <span className="hover-text-gradient">Buy</span> Online
            </h2>
          </motion.div>

          <div className="relative w-full">
            {/* line */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2"></div>

            {/* grid centered to fit screen */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 place-items-center relative z-10">
              {(service.howToBuySteps || []).map((step, index) => (
                <div key={index} className="text-center group max-w-xs">
                  <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md border-4 border-gray-100  transition">
                    <span className="text-2xl font-bold text-gray-400 ">
                      {index + 1}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-gray-900 mb-2">{step.split(':')[0]}</h4>
                  <p className="text-sm text-gray-500">{step.split(':')[1]}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-gradient-to-r from-insurance-blue to-insurance-blue-accent text-white px-8 py-3 sm:px-10 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Buy Now
            </button>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetailComponent;