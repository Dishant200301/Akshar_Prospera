import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Shield, ChevronDown, Menu, X, Heart, UserCheck, Home, Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Helper Hook: useLockBodyScroll
function useLockBodyScroll(locked) {
  useEffect(() => {
    if (locked) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [locked]);
}

// Hospital Icon Component (custom)
const Hospital = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 6v4m0 0v4m0-4h4m-4 0H8" />
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z" />
  </svg>
);

// Plane Icon Component (custom)
const Plane = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
  </svg>
);

// Service Data
const serviceTypes = [
  {
    name: 'Health Insurance',
    href: '/services/health-insurance',
    description: 'Comprehensive health coverage for individuals and families, including medical, dental, and prescription benefits.',
    benefits: ['Medical Coverage', 'Dental Coverage', 'Prescription Coverage'],
    icon: Hospital,
  },
  {
    name: 'Travel Insurance',
    href: '/services/travel-insurance',
    description: 'Protect your trips with coverage for medical emergencies, trip cancellation, lost luggage, and travel delays.',
    benefits: ['Medical Emergency Coverage', 'Trip Cancellation', 'Lost Luggage', 'Travel Delays'],
    icon: Plane,
  },
  {
    name: 'Life Insurance',
    href: '/services/life-insurance',
    description: "Secure your family's future with life insurance policies that provide financial protection and peace of mind.",
    benefits: ['Financial Protection', 'Peace of Mind'],
    icon: Heart,
  },
  {
    name: 'Home Insurance',
    href: '/services/home-insurance',
    description: 'Protect your home and belongings with comprehensive home insurance coverage.',
    benefits: ['Dwelling Coverage', 'Personal Property Coverage', 'Liability Protection'],
    icon: Home,
  },
  {
    name: 'Auto Insurance',
    href: '/services/auto-insurance',
    description: 'Protect your vehicle with comprehensive auto insurance coverage, including liability, collision, and theft protection.',
    benefits: ['Liability Coverage', 'Collision Coverage', 'Theft Protection'],
    icon: Car,
  }
];

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState(serviceTypes[0]);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimeout = useRef(null);
  const mobileMenuButtonRef = useRef(null);
  const firstMobileMenuItemRef = useRef(null);

  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = useCallback((href) => {
    const normalizedCurrentPath = currentPath === '/' ? '/' : currentPath.replace(/\/$/, '');
    const normalizedHref = href === '/' ? '/' : href.replace(/\/$/, '');

    if (normalizedCurrentPath === normalizedHref) {
      return true;
    }

    if (normalizedHref === '/blogs' && normalizedCurrentPath.startsWith('/blogs')) {
      return true;
    }

    return false;
  }, [currentPath]);

  const isAnyServiceActive = serviceTypes.some(service => isActive(service.href));

  useLockBodyScroll(isMobileMenuOpen);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
          mobileMenuButtonRef.current?.focus();
        }
        if (isDesktopServicesOpen) {
          setIsDesktopServicesOpen(false);
        }
        if (isMobileServicesOpen) {
          setIsMobileServicesOpen(false);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen, isDesktopServicesOpen, isMobileServicesOpen]);

  useEffect(() => {
    if (isMobileMenuOpen && firstMobileMenuItemRef.current) {
      firstMobileMenuItemRef.current.focus();
    }
  }, [isMobileMenuOpen]);

  const handleOutsideClick = useCallback((event) => {
    const target = event.target;
    if (isMobileMenuOpen && !target.closest('.mobile-menu-panel') && !target.closest('.mobile-menu-button')) {
      setIsMobileMenuOpen(false);
      mobileMenuButtonRef.current?.focus();
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMobileMenuOpen, handleOutsideClick]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      setIsMobileServicesOpen(false);
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes slideOutRight {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(100%);
          }
        }

        @keyframes expandHeight {
          from {
            max-height: 0;
            opacity: 0;
          }
          to {
            max-height: 500px;
            opacity: 1;
          }
        }

        @keyframes collapseHeight {
          from {
            max-height: 500px;
            opacity: 1;
          }
          to {
            max-height: 0;
            opacity: 0;
          }
        }

        .nav-link {
          position: relative;
          overflow: hidden;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #2563eb, #3b82f6);
          transform: translateX(-50%);
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-link:hover::before {
          width: 100%;
        }

        .dropdown-enter {
          animation: fadeInUp 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .dropdown-exit {
          animation: fadeInUp 0.2s cubic-bezier(0.4, 0, 0.2, 1) reverse forwards;
        }

        .mobile-menu-enter {
          animation: slideInRight 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .mobile-menu-exit {
          animation: slideOutRight 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .backdrop-enter {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .backdrop-exit {
          animation: fadeIn 0.2s ease-out reverse forwards;
        }

        .service-expand {
          animation: expandHeight 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          overflow: hidden;
        }

        .service-collapse {
          animation: collapseHeight 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          overflow: hidden;
        }

        .gradient-text {
          background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .icon-gradient {
          background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
        }

        .shadow-premium {
          box-shadow: 0 10px 40px -10px rgba(37, 99, 235, 0.2);
        }

        .shadow-premium-lg {
          box-shadow: 0 20px 60px -15px rgba(37, 99, 235, 0.3);
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .service-item {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-item:hover {
          transform: translateX(4px);
        }

        .cta-button {
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.5s, height 0.5s;
        }

        .cta-button:hover::before {
          width: 300px;
          height: 300px;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px -5px rgba(37, 99, 235, 0.5);
        }

        .logo-ring {
          position: absolute;
          inset: -3px;
          border-radius: 0.75rem;
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .logo-container:hover .logo-ring {
          opacity: 1;
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'pt-2' : 'pt-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-0 lg:px-0">
          <div className={`glass-effect rounded-3xl px-4 md:mx-6 lg:mx-10 py-5 flex items-center justify-between transition-all duration-500`}>
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 text-gray-900 " aria-label="Akshar Prospera Home">
              <div className="relative ">
                <div className="logo-ring"></div>
                <div className="relative w-9 h-9 bg-gradient-to-r from-insurance-blue to-insurance-blue-accent rounded-lg flex items-center justify-center transition-all duration-300 ">
                  <Shield className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-xl md:text-2xl font-extrabold text-gray-900 transition-all duration-300 ">
                Akshar Prospera
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8" aria-label="Primary Desktop Navigation">
              {/* Services Dropdown (Desktop) */}
              <div
                className="relative group"
                onMouseEnter={() => {
                  if (closeTimeout.current) clearTimeout(closeTimeout.current);
                  setIsDesktopServicesOpen(true);
                }}
                onMouseLeave={() => {
                  closeTimeout.current = setTimeout(() => {
                    setIsDesktopServicesOpen(false);
                    setHoveredService(serviceTypes[0]);
                  }, 200);
                }}
              >
                <button
                  className={`nav-link flex items-center space-x-1 font-semibold  transition-all duration-300 ${
                    isAnyServiceActive ? 'text-blue-600 font-bold' :
                    isDesktopServicesOpen ? 'text-blue-600' :
                    'text-gray-700 hover:text-blue-600'
                  }`}
                  onClick={() => setIsDesktopServicesOpen(!isDesktopServicesOpen)}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-all duration-300 ${isDesktopServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {isDesktopServicesOpen && (
                  <motion.div
                    id="services-dropdown-menu"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="services-dropdown-trigger"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute top-full left-[-230px] -translate-x-1/2 mt-1
                      bg-white backdrop-blur-md shadow-2xl border border-gray-100
                      rounded-2xl py-6 transition-all duration-300
                      ${hoveredService ? 'w-[700px]' : 'w-[700px]'}`}
                  >
                    <div className="flex">
                      {/* Left Sidebar - Services List */}
                      <ul className={`py-4 px-3 border-r border-gray-100 transition-all duration-300 ${hoveredService ? 'w-64' : 'w-full'}`} role="none">
                        <h3 className="font-bold text-gray-500 text-sm mb-3 uppercase px-3">Insurance Solutions</h3>
                        {serviceTypes.map((service, index) => (
                          <li key={service.name} role="none">
                            <a
                              href={service.href}
                              role="menuitem"
                              className={`flex items-center w-full px-3 py-2.5 rounded-lg text-gray-700  transition-colors duration-150
                                ${hoveredService?.name === service.name ? 'bg-blue-50 text-blue-600' : ''}`}
                              onMouseEnter={() => setHoveredService(service)}
                              onClick={() => setIsDesktopServicesOpen(false)}
                            >
                              {/* Service Icon (gradient circle with white icon) */}
                              <span className="w-7 h-7 mr-3 rounded-full flex items-center justify-center bg-gradient-to-r from-insurance-blue to-insurance-blue-accent">
                                <service.icon className="w-4 h-4 text-white" />
                              </span>
                              <span className="font-medium text-base">{service.name}</span>
                            </a>
                          </li>
                        ))}

                        
                      </ul>

                      {/* Right Panel - Service Details */}
                      {hoveredService && (
                        <motion.div
                          key={hoveredService.name}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          transition={{ duration: 0 }}
                          className="flex-1 p-6 bg-white rounded-xl "
                        >
                          <h4 className="font-bold text-blue-500 text-lg mb-2">{hoveredService.name}</h4>
                          <p className="text-sm text-gray-600 mb-4">{hoveredService.description}</p>

                          <div className="rounded-xl p-4">
                            <h5 className="font-semibold text-gray-800 text-sm mb-3">Key Benefits:</h5>
                            <ul className="space-y-2 text-sm text-gray-700">
                              {hoveredService.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-center">
                                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>

                        <div className="pt-4 border-t border-gray-100 mt-4">
  <a
    href={hoveredService.href}
    onClick={() => setIsDesktopServicesOpen(false)}
  className="inline-flex items-center gap-2 bg-gradient-to-r from-insurance-blue to-insurance-blue-accent text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-md hover:scale-[1.03] hover:shadow-lg transition-all duration-300"
  >
    Learn More
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </a>
</div>

                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>

              <Link to="/about-us" className={`nav-link font-semibold transition-all duration-300 ${isActive('/about-us') ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600'}`}>
                About Us
              </Link>
              <Link to="/blogs" className={`nav-link font-semibold transition-all duration-300 ${isActive('/blogs') ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600'}`}>
                Blogs
              </Link>
              <Link to="/contact" className={`nav-link font-semibold transition-all duration-300 ${isActive('/contact') ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600'}`}>
                Contact
              </Link>
            </nav>

            {/* CTA Button (Desktop) */}
            <div className="hidden lg:block">
              <Link to="/contact" className="bg-gradient-to-r from-insurance-blue to-insurance-blue-accent  text-white px-6 py-3 rounded-full font-bold shadow-md">
                <span className="relative z-10">Talk to an Advisor</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              ref={mobileMenuButtonRef}
              aria-label="Open mobile menu"
              className="lg:hidden p-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-all duration-300 mobile-menu-button"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div className="backdrop-enter absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />

            <div className="mobile-menu-enter mobile-menu-panel fixed top-0 right-0 h-full w-full max-w-xs glass-effect shadow-premium-lg overflow-y-auto">
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">Menu</h2>
                <button
                  aria-label="Close mobile menu"
                  className="p-2 text-gray-500 hover:text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="w-7 h-7" />
                </button>
              </div>

              <nav className="flex flex-col px-4 py-6 space-y-2">
                <Link
                  to="/"
                  ref={firstMobileMenuItemRef}
                  className={`block px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300 ${
                    isActive('/') ? 'bg-blue-50 text-blue-600 font-bold' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>

                {/* Mobile Services Dropdown */}
                <div>
                  <button
                    className={`flex items-center justify-between w-full px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300 ${
                      isAnyServiceActive || isMobileServicesOpen ? 'bg-blue-50 text-blue-600 font-bold' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-5 h-5 transition-all duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isMobileServicesOpen && (
                    <div className="service-expand mt-2 ml-4 space-y-1 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl overflow-hidden">
                      <ul className="py-2">
                        {serviceTypes.map((service) => (
                          <li key={service.name}>
                            <Link
                              to={service.href}
                              className={`flex items-center px-4 py-3 text-base rounded-xl transition-all duration-300 ${
                                isActive(service.href) ? 'bg-white text-blue-600 font-bold shadow-sm' : 'text-gray-700 hover:bg-white/50'
                              }`}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <span className="w-8 h-8 mr-3 rounded-lg flex items-center justify-center icon-gradient shadow-sm">
                                <service.icon className="w-4 h-4 text-white" />
                              </span>
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <Link
                  to="/about-us"
                  className={`block px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300 ${
                    isActive('/about-us') ? 'bg-blue-50 text-blue-600 font-bold' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/blogs"
                  className={`block px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300 ${
                    isActive('/blogs') ? 'bg-blue-50 text-blue-600 font-bold' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blogs
                </Link>
                <Link
                  to="/contact"
                  className={`block px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300 ${
                    isActive('/contact') ? 'bg-blue-50 text-blue-600 font-bold' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>

                {/* Mobile CTA */}
                <div className="pt-6">
                  <Link to="/contact" className="block text-center bg-gradient-to-r from-insurance-blue to-insurance-blue-accent text-white px-6 py-4 rounded-xl font-bold shadow-md">
                    <span className="relative z-10">Talk to an Advisor</span>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;