
import React, { useState, useEffect } from 'react';
import { Shield, ChevronDown, Menu, X, MapPin, Star } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<typeof serviceTypes[0] | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const location = useLocation();

  // Function to check if a link is active
  const isActiveLink = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  // Function to get link classes based on active state
  const getLinkClasses = (path: string, isScrolled: boolean) => {
    const baseClasses = 'font-medium transition-all duration-300';
    
    if (isActiveLink(path)) {
      // Active link - always show gradient blue
      return `${baseClasses} bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent`;
    } else {
      // Inactive link - normal colors with blue hover
      return `${baseClasses} ${
        isScrolled 
          ? 'text-gray-700 hover:text-blue-600' 
          : 'text-slate-600 hover:text-blue-600'
      }`;
    }
  };

  // Function to get Services button classes
  const getServicesButtonClasses = (isScrolled: boolean) => {
    const baseClasses = 'flex items-center space-x-1 font-medium transition-all duration-300';
    
    if (isActiveLink('/health-insurance') || isActiveLink('/travel-insurance') || 
        isActiveLink('/visitor-visa-insurance') || isActiveLink('/life-insurance')) {
      // Active services page - always show gradient blue
      return `${baseClasses} bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent`;
    } else {
      // Inactive services - normal colors with blue hover
      return `${baseClasses} ${
        isScrolled 
          ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-50' 
          : 'text-slate-600 hover:text-blue-600 hover:bg-white/20'
      } ${isServicesOpen ? 'text-blue-600 bg-gray-50' : ''}`;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.services-dropdown')) {
        setIsServicesOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const serviceTypes = [
    { 
      name: 'Health Insurance', 
      href: '/health-insurance',
      description: 'Comprehensive health coverage for individuals and families, including medical, dental, and prescription benefits.',
      benefits: ['Medical Coverage', 'Dental Coverage', 'Prescription Coverage']
    },
    { 
      name: 'Travel Insurance', 
      href: '/travel-insurance',
      description: 'Protect your trips with coverage for medical emergencies, trip cancellation, lost luggage, and travel delays.',
      benefits: ['Medical Emergency Coverage', 'Trip Cancellation', 'Lost Luggage', 'Travel Delays']
    },
    { 
      name: 'Visitor Visa Insurance', 
      href: '/visitor-visa-insurance',
      description: 'Essential coverage for visitors to Canada and the US, meeting visa requirements and providing peace of mind.',
      benefits: ['Visa Requirements Coverage', 'Peace of Mind']
    },
    { 
      name: 'Life Insurance', 
      href: '/life-insurance',
      description: 'Secure your family\'s future with life insurance policies that provide financial protection and peace of mind.',
      benefits: ['Financial Protection', 'Peace of Mind']
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-4">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
                  <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              {/* Maple Leaf (Canada) */}
              <div className="absolute -top-1 -left-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
              {/* Star (USA) */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-insurance-gold rounded-full flex items-center justify-center">
                <Star className="w-1.5 h-1.5 text-white" />
              </div>
            </div>
            <span className="text-2xl font-bold text-gray-900">Akshar Prospera</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="font-medium text-gray-700 hover:text-blue-600 transition-all duration-300">
              Home
            </a>
            
            {/* Services Dropdown */}
            <div className="relative services-dropdown">
              <button
                className="flex items-center space-x-1 font-medium text-gray-700 hover:text-blue-600 transition-all duration-300"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div 
                  className={`absolute top-full left-0 mt-2 bg-white shadow-2xl border border-gray-100 rounded-2xl py-6 animate-in slide-in-from-top-2 duration-200 services-dropdown transition-all duration-300 ${
                    hoveredService ? 'w-[600px]' : 'w-64'
                  }`}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => {
                    setIsServicesOpen(false);
                    setHoveredService(null);
                  }}
                >
                  <div className="flex">
                    {/* Left Sidebar - Services List */}
                    <div className="w-64 border-r border-gray-100 px-4">
                      <h3 className="font-semibold text-gray-900 text-sm mb-4 px-2">Insurance Services</h3>
                      <div className="space-y-1">
                        {serviceTypes.map((service, index) => (
                          <div key={index} className="relative group">
                            <a
                              href={service.href}
                              className="flex items-center px-3 py-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 group-hover:scale-[1.02]"
                              onMouseEnter={() => {
                                setHoveredService(service);
                                setIsDropdownHovered(true);
                              }}
                              onMouseLeave={() => {
                                // Only clear if we're not hovering over the dropdown anymore
                                setTimeout(() => {
                                  if (!isDropdownHovered) {
                                    setHoveredService(null);
                                  }
                                }, 100);
                              }}
                              onClick={() => setIsServicesOpen(false)}
                            >
                              <Shield className="w-4 h-4 mr-3 text-blue-600" />
                              <span className="font-medium text-[15px] md:text-base">{service.name}</span>
                            </a>
                          </div>
                        ))}
                      </div>
                      
                      {/* Bottom Section */}
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <p className="text-xs text-gray-500 mb-2 px-2">Need help choosing?</p>
                        <a 
                          href="/contact" 
                          className="inline-flex items-center text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 px-2"
                        >
                          Talk to an expert
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    
                    {/* Right Panel - Content Area (Only shown when hovering service) */}
                    {hoveredService && (
                      <div className="flex-1 px-6 border-l border-gray-100 ml-4">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                              <Shield className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 text-lg">{hoveredService.name}</h4>
                              <p className="text-sm text-gray-500">Comprehensive Coverage</p>
                            </div>
                          </div>
                          
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {hoveredService.description}
                          </p>
                          
                          <div className="bg-gray-50 rounded-lg p-4">
                            <h5 className="font-semibold text-gray-800 text-sm mb-3">Key Benefits:</h5>
                            <ul className="space-y-2">
                              {hoveredService.benefits?.map((benefit, idx) => (
                                <li key={idx} className="flex items-center text-sm text-gray-600">
                                  <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mr-3"></div>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="pt-3 border-t border-gray-100">
                            <a 
                              href={hoveredService.href}
                              className="inline-flex items-center text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:from-blue-500 hover:to-indigo-500 transition-all duration-200"
                            >
                              Learn more about {hoveredService.name.toLowerCase()}
                              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            <a href="/about-us" className="font-medium text-gray-700 hover:text-blue-600 transition-all duration-300">
              About Us
            </a>
            <a href="/blogs" className="font-medium text-gray-700 hover:text-blue-600 transition-all duration-300">
              Blogs
            </a>
            <a href="/contact" className="font-medium text-gray-700 hover:text-blue-600 transition-all duration-300">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-full font-medium hover:from-blue-500 hover:to-indigo-500 transition-all duration-200">
              Talk to an Advisor
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t rounded-b-full transition-all duration-300 bg-white/80 backdrop-blur-md border-gray-200 mt-4 rounded-2xl">
            <div className="flex flex-col space-y-4 px-6">
              <a href="/" className="font-medium text-gray-700 hover:text-blue-600 transition-all duration-300">
                Home
              </a>
              
              {/* Mobile Services Dropdown */}
              <div className="services-dropdown">
                <button 
                  className="flex items-center space-x-1 font-medium text-gray-700 hover:text-blue-600 transition-all duration-300"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="mt-3 ml-4 space-y-2 bg-gray-50 rounded-xl p-3 border border-gray-100">
                    {serviceTypes.map((service, index) => (
                      <a
                        key={index}
                        href={service.href}
                        className="group flex items-center py-2.5 px-3 text-base text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="font-medium">{service.name}</span>
                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-200">
                          <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </a>
                    ))}
                    
                    {/* Mobile quick contact */}
                    <div className="pt-2 border-t border-gray-200">
                      <div className="text-xs text-gray-500 mb-1 px-3">Need help choosing?</div>
                      <a 
                        href="/contact" 
                        className="flex items-center text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:from-blue-500 hover:to-indigo-500 px-3 py-2 transition-all duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span>Talk to an expert</span>
                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                )}
              </div>
              
              <a href="/about-us" className="font-medium text-gray-700 hover:text-blue-600 transition-all duration-300">
                About Us
              </a>
              <a href="/blogs" className="font-medium text-gray-700 hover:text-blue-600 transition-all duration-300">
                Blogs
              </a>
              <a href="/contact" className="font-medium text-gray-700 hover:text-blue-600 transition-all duration-300">
                Contact
              </a>
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full font-medium hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 w-full mt-4">
                Talk to an Advisor
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
