import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
// Assuming contactSVG is still used somewhere, otherwise it can be removed if not needed.
// import contactSVG from "../assets/contact_SVG.svg";
import {
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Users, // Example for "Our Office" icon if needed, though MapPin is fine
} from "lucide-react";

// Custom AnimatedText component - already good, just ensure it uses the 'word' animation from tailwind.config.js
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

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "", // Changed from 'name'
    lastName: "",  // New field
    email: "",
    phone: "",
    serviceCategory: "", // Changed from 'subject'
    country: "", // New field
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        serviceCategory: "",
        country: "",
        message: "",
      });
    }, 3000);
  };

  // NEW: Data for "Select Service" dropdown
  const serviceCategories = [
    { value: "", label: "Select Service" }, // Placeholder
    { value: "real_estate_services", label: "Real Estate Services" },
    { value: "mortgage_consultation", label: "Mortgage Consultation" },
    { value: "insurance_planning", label: "Insurance Planning" },
    { value: "investment_consulting", label: "Investment Consulting" },
  ];

  // Data for the new contact info cards (left section)
  const contactInfoCards = [
    {
      id: "email",
      icon: Mail,
      title: "Email Us",
      detail: "support@webapp.com", // Simplified to one line as per image
      href: "mailto:support@webapp.com",
    },
    {
      id: "call",
      icon: Phone,
      title: "Call Us",
      detail: "+1 (555) 123-4567", // Simplified to one line as per image
      href: "tel:+15551234567",
    },
    {
      id: "office",
      icon: MapPin,
      title: "Our Office",
      detail: "123 Innovation Drive, Tech City, 12345", // Simplified to one line as per image
      href: "https://maps.google.com/?q=123 Innovation Drive, Tech City, 12345",
    },
  ];

  // Dummy list of countries for the dropdown
  const countries = [
    { value: "", label: "Select Country" },
    { value: "United States", label: "United States" },
    { value: "Canada", label: "Canada" },
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "Australia", label: "Australia" },
    // Add more countries as needed
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden font-body">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden pt-16 bg-black">
        {/* Background Image */}
        <div
          className="absolute inset-0 transition-all duration-1000 ease-in-out opacity-100 z-10"
          style={{
            backgroundImage: 'url(/image/contact.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-20 text-center mt-24 lg:mt-32">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight">
                <span className="text-white drop-shadow-2xl font-extrabold">
                  Get In{' '}
                </span>
                <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-2xl font-extrabold">
                  Touch
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 sm:mb-12 leading-relaxed font-semibold drop-shadow-2xl animate-fade-in">
                <AnimatedText text="Ready to discuss your insurance needs? Let's connect and find the perfect" />
                <AnimatedText
                  text="coverage for you"
                  delay={0.6}
                  className="bg-gradient-to-r from-blue-300 to-indigo-400 bg-clip-text text-transparent font-bold drop-shadow-lg"
                />
              </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section: Info Cards & Form */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

            {/* Left Column: Contact Info Cards & Map */}
            <div className="space-y-6">
              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfoCards.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-base font-semibold text-gray-800">{item.title}</h3>
                      <a
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                        target={item.id === "office" ? "_blank" : "_self"}
                        rel={item.id === "office" ? "noopener noreferrer" : ""}
                      >
                        {item.detail}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Map */}
              <div className="mt-8 bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden h-[300px] lg:h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.8280290211147!2d-79.38318092346474!3d43.647526871101475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2sCN%20Tower!5e0!3m2!1sen!2sca!4v1699999999999!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location Map"
                ></iframe>
              </div>
            </div>

            {/* Right Column: Leave a Message Form */}
            <div className="lg:order-last"> {/* Ensures form is on the right */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Leave a Message</h2>
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-pop-in">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-heading font-bold text-green-800 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-green-600 font-body">
                      Thank you for reaching out. We'll get back to you soon!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 sr-only">First Name</label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                          placeholder="First Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 sr-only">Last Name</label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 sr-only">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 sr-only">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                        placeholder="+1 (555) 987-6543"
                      />
                    </div>

                    {/* NEW: Country Dropdown */}
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700 sr-only">Country</label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 appearance-none bg-white pr-8"
                      >
                        {countries.map((option, index) => (
                          <option key={index} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {/* Custom arrow for select if default is hidden, or use custom styling directly */}
                      {/* You might need a wrapper div and an SVG for a custom dropdown arrow */}
                    </div>

                    {/* NEW: Select Service Dropdown */}
                    <div>
                      <label htmlFor="serviceCategory" className="block text-sm font-medium text-gray-700 sr-only">Select Service</label>
                      <select
                        id="serviceCategory"
                        name="serviceCategory"
                        value={formData.serviceCategory}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 appearance-none bg-white pr-8"
                      >
                        {serviceCategories.map((option, index) => (
                          <option key={index} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 sr-only">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative w-full bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-md
                                 hover:bg-blue-700 active:scale-[0.98]
                                 transition-all duration-300 inline-flex items-center justify-center overflow-hidden group"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <span className="relative z-10">Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

 


      {/* Immediate Assistance Section (Unchanged, keep original styling) */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto animate-fade-in-up delay-300">
            {" "}
            {/* Added animation */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-modern-lg p-8 md:p-12">
              {" "}
              {/* Modern shadow */}
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  For urgent insurance matters or immediate support, call our
                  dedicated hotline.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <a
                    href="tel:+16471234567"
                    className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-7 py-3 rounded-xl font-semibold shadow-md
                               hover:from-blue-500 hover:to-indigo-500 hover:scale-[1.02] active:scale-[0.98]
                               transition-all duration-300 inline-flex items-center justify-center overflow-hidden group"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-full group-hover:h-32 opacity-10"></span>
                    <Phone className="w-5 h-5 mr-2 relative z-10" />
                    <span className="relative z-10">Call Now</span>
                  </a>
                  <a
                    href="tel:+14169876543"
                    className="relative bg-white text-blue-600 border border-blue-600 px-7 py-3 rounded-xl font-semibold shadow-md
                               hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:scale-[1.02] active:scale-[0.98]
                               transition-all duration-300 inline-flex items-center justify-center overflow-hidden group"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-full group-hover:h-32 opacity-10"></span>
                    <Phone className="w-5 h-5 mr-2 relative z-10" />
                    <span className="relative z-10">Alternative Line</span>
                  </a>
                </div>
                <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2 animate-pulse"></span>{" "}
                  {/* Added pulse animation */}
                  Available 24/7
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;