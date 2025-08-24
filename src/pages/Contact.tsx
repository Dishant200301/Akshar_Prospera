import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MessageSquare, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const AnimatedText = ({ text, delay = 0, className = '' }) => {
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (416) 555-0123', '+1 (647) 555-0124'],
      color: 'from-blue-600 to-indigo-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@aksharprospera.com', 'support@aksharprospera.com'],
      color: 'from-blue-600 to-indigo-600'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['123 Financial District', 'Toronto, ON M5X 1A1', 'Canada'],
      color: 'from-blue-600 to-indigo-600'
    }
  ];

  const subjects = [
    'General Inquiry',
    'Health Insurance',
    'Travel Insurance',
    'Life Insurance',
    'Visitor Visa Insurance',
    'Claims Support',
    'Policy Changes',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[80vh] overflow-hidden pt-16 bg-black">
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
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10 h-full">
          <div className="flex flex-col justify-end h-full text-left pb-20">
            <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl ml-16 sm:ml-24 lg:ml-32">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
                <span className="text-white drop-shadow-2xl font-extrabold">
                  Get In{' '}
                </span>
                <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-2xl font-extrabold">
                  Touch
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 sm:mb-12 leading-relaxed font-semibold drop-shadow-2xl animate-fade-in">
                <AnimatedText text="Ready to discuss your insurance needs? Let's connect and find the perfect coverage for you" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Ready to <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Connect</span>?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Let's discuss your insurance needs and find the perfect coverage for you and your family.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            
            {/* Contact Form */}
            <div className="space-y-6 min-h-[400px]">
              <div className="p-8 rounded-2xl border-2 border-gray-200 bg-white shadow-card">
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
                    <p className="text-green-600">Thank you for reaching out. We'll get back to you soon!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                        >
                          <option value="">Select a subject</option>
                          {subjects.map((subject, index) => (
                            <option key={index} value={subject}>{subject}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Tell us about your insurance needs..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 inline-flex items-center justify-center shadow-sm"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="p-8 rounded-2xl border-2 border-gray-200 bg-white shadow-card min-h-[400px]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <p className="text-gray-600 mb-6">
                Get in touch with us through any of these channels.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 mb-1 last:mb-0">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Immediate Assistance Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-8 md:p-12">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Need Immediate Assistance?</h3>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  For urgent insurance matters or immediate support, call our dedicated hotline.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <a
                    href="tel:+14165550123"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 inline-flex items-center justify-center shadow-sm"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                  <a
                    href="tel:+16475550124"
                    className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white transition-all duration-200 inline-flex items-center justify-center shadow-sm"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Alternative Line
                  </a>
                </div>
                <div className="inline-flex items-center px-3 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Available 24/7
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Located in <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Toronto's Heart</span></h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Located in the heart of Toronto's Financial District, our office is easily accessible by public transit and offers convenient parking options.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-card overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">Interactive Map Coming Soon</p>
                  <p className="text-gray-400 text-sm">123 Financial District, Toronto, ON M5X 1A1</p>
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
