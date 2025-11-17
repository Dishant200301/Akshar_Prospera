import React, { useState, useEffect, useRef, useCallback } from 'react';
// Added new icons for services: Hospital, Plane, Passport, Heart
import { Shield, ChevronDown, Menu, X, Star, Hospital, Plane, Heart, UserCheck, House, Car } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Helper Hook: useLockBodyScroll ---
// Prevents scrolling on the body element when a component is active.
function useLockBodyScroll(locked: boolean): void {
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

// --- Type Definitions ---
type ServiceType = {
  name: string;
  href: string;
  description: string;
  benefits: string[];
  icon: React.ElementType; // Added icon property
};

// --- Data for Services ---
const serviceTypes: ServiceType[] = [
  {
    name: 'Health Insurance',
    href: '/services/health-insurance',
    description:
      'Comprehensive health coverage for individuals and families, including medical, dental, and prescription benefits.',
    benefits: ['Medical Coverage', 'Dental Coverage', 'Prescription Coverage'],
    icon: Hospital, // Assigned icon
  },
  {
    name: 'Travel Insurance',
    href: '/services/travel-insurance',
    description:
      'Protect your trips with coverage for medical emergencies, trip cancellation, lost luggage, and travel delays.',
    benefits: ['Medical Emergency Coverage', 'Trip Cancellation', 'Lost Luggage', 'Travel Delays'],
    icon: Plane, // Assigned icon
  },
  {
    name: 'Life Insurance',
    href: '/services/life-insurance',
    description:
      "Secure your family's future with life insurance policies that provide financial protection and peace of mind.",
    benefits: ['Financial Protection', 'Peace of Mind'],
    icon: Heart, // Assigned icon
  },
  {
    name: 'Home Insurance',
    href: '/services/home-insurance',
    description:
      'Protect your home and belongings with comprehensive home insurance coverage.',
    benefits: ['Dwelling Coverage', 'Personal Property Coverage', 'Liability Protection'],
    icon: House, // Assigned icon
  },
  {
    name: 'Auto Insurance',
    href: '/services/auto-insurance',
    description:
      'Protect your vehicle with comprehensive auto insurance coverage, including liability, collision, and theft protection.',
    benefits: ['Liability Coverage', 'Collision Coverage', 'Theft Protection'],
    icon: Car, // Assigned icon 
  }
];

// --- Navigation Component ---
const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<ServiceType | null>(serviceTypes[0]);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileMenuItemRef = useRef<HTMLAnchorElement>(null);

  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';

  // Helper function to check if a link is active
  const isActive = useCallback((href: string) => {
    const normalizedCurrentPath = currentPath === '/' ? '/' : currentPath.replace(/\/$/, '');
    const normalizedHref = href === '/' ? '/' : href.replace(/\/$/, '');

    // Exact match for most pages or root
    if (normalizedCurrentPath === normalizedHref) {
      return true;
    }

    // Special handling for blogs and their sub-pages
    // If the href is '/blogs' and currentPath starts with '/blogs', it's active
    if (normalizedHref === '/blogs' && normalizedCurrentPath.startsWith('/blogs')) {
      return true;
    }

    // Special handling for services and their sub-pages (if you pass the base path like '/services')
    // However, for this setup, individual service hrefs are checked, and the parent is handled by isAnyServiceActive
    // If you had a base '/services' link, you might add:
    // if (normalizedHref === '/services' && normalizedCurrentPath.startsWith('/services')) {
    //   return true;
    // }

    return false;
  }, [currentPath]);

  // Determine if any service link is active to highlight the "Services" parent link
  const isAnyServiceActive = serviceTypes.some(service => isActive(service.href));

  useLockBodyScroll(isMobileMenuOpen);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
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

  const handleOutsideClick = useCallback((event: MouseEvent) => {
    const target = event.target as HTMLElement;
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
    <nav className="fixed top-0 left-0 right-0 z-50 pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-0 lg:px-0">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl px-6 md:mx-6 lg:mx-0 py-5 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 text-gray-900 group" aria-label="Akshar Prospera Home">
            <div className="relative">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                <Shield className="w-5 h-5 text-white" />
              </div>
              
            </div>
            <span className="text-xl md:text-2xl font-extrabold text-gray-900 transition-colors duration-300 ">
              Akshar Prospera
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 lg:space-x-8" aria-label="Primary Desktop Navigation">
            

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
                id="services-dropdown-trigger"
                aria-haspopup="true"
                aria-expanded={isDesktopServicesOpen}
                aria-controls="services-dropdown-menu"
                className={`flex items-center space-x-1 font-semibold transition-colors duration-200 py-2 rounded-md
                  ${isAnyServiceActive ? 'text-blue-600 font-bold' :
                    isDesktopServicesOpen ? 'text-blue-600' :
                      'text-gray-600 hover:text-blue-600'}`}
                onClick={() => setIsDesktopServicesOpen(!isDesktopServicesOpen)}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDesktopServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
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
                      ${hoveredService ? 'w-[700px]' : 'w-[600px]'}`}
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
                              className={`flex items-center w-full px-3 py-2.5 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150
                                ${hoveredService?.name === service.name ? 'bg-blue-50 text-blue-600' : ''}`}
                              onMouseEnter={() => setHoveredService(service)}
                              onClick={() => setIsDesktopServicesOpen(false)}
                            >
                              {/* Service Icon */}
                              <service.icon className="w-5 h-5 mr-3 text-blue-500" />
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
    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-md hover:scale-[1.03] hover:shadow-lg transition-all duration-300"
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
              </AnimatePresence>
            </div>

            <a
              href="/about-us"
              className={`text-gray-600 hover:text-blue-600 font-semibold transition-colors duration-200 ${isActive('/about-us') ? 'text-blue-600 font-bold' : ''}`}
            >
              About Us
            </a>
            <a
              href="/blogs"
              className={`text-gray-600 hover:text-blue-600 font-semibold transition-colors duration-200 ${isActive('/blogs') ? 'text-blue-600 font-bold' : ''}`}
            >
              Blogs
            </a>
            <a
              href="/contact"
              className={`text-gray-600 hover:text-blue-600 font-semibold transition-colors duration-200 ${isActive('/contact') ? 'text-blue-600 font-bold' : ''}`}
            >
              Contact
            </a>
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:block">
            <a href="/contact" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2.5 rounded-full font-bold shadow-md hover:from-blue-400 hover:to-indigo-500 transition-all duration-300">
              Talk to an Advisor
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={mobileMenuButtonRef}
            aria-label="Open mobile menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu-panel"
            className="lg:hidden p-2 text-gray-700 rounded-md mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay and Side Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop for blur effect and outside click */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

            {/* Mobile Menu Content Panel */}
            <motion.div
              id="mobile-menu-panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby="mobile-menu-title"
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
              className="mobile-menu-panel fixed top-0 right-0 h-full w-full max-w-xs bg-white border-l border-gray-200 shadow-xl overflow-y-auto"
            >
              <div className="flex justify-between items-center p-5 border-b border-gray-200">
                <h2 id="mobile-menu-title" className="text-xl font-bold text-gray-900">Menu</h2>
                <button
                  aria-label="Close mobile menu"
                  className="p-2 text-gray-500 hover:text-blue-600 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="w-7 h-7" />
                </button>
              </div>
              <nav className="flex flex-col px-4 py-6 space-y-1" aria-label="Mobile Navigation">
                <a
                  href="/"
                  ref={firstMobileMenuItemRef}
                  className={`block px-4 py-3 text-lg font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200
                    ${isActive('/') ? 'bg-blue-50 text-blue-600 font-bold' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>

                {/* Mobile Services Dropdown */}
                <div className="w-full">
                  <button
                    id="mobile-services-trigger"
                    aria-haspopup="true"
                    aria-expanded={isMobileServicesOpen}
                    aria-controls="mobile-services-menu"
                    className={`flex items-center justify-between w-full px-4 py-3 text-lg font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200
                      ${isAnyServiceActive || isMobileServicesOpen ? 'bg-blue-50 text-blue-600 font-bold' : ''}`}
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isMobileServicesOpen && (
                      <motion.div
                        id="mobile-services-menu"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="mobile-services-trigger"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="mt-2 ml-4 space-y-1 bg-blue-50 rounded-lg overflow-hidden"
                      >
                        <ul className="py-2" role="none">
                          {serviceTypes.map((service) => (
                            <li key={service.name} role="none">
                              <a
                                href={service.href}
                                role="menuitem"
                                className={`flex items-center px-4 py-2 text-base text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-lg transition-colors duration-200
                                  ${isActive(service.href) ? 'bg-blue-100 text-blue-600 font-bold' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {/* Service Icon */}
                                <service.icon className="w-5 h-5 mr-3 text-blue-500 inline-block" />
                                {service.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a
                  href="/about-us"
                  className={`block px-4 py-3 text-lg font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200
                    ${isActive('/about-us') ? 'bg-blue-50 text-blue-600 font-bold' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </a>
                <a
                  href="/blogs"
                  className={`block px-4 py-3 text-lg font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200
                    ${isActive('/blogs') ? 'bg-blue-50 text-blue-600 font-bold' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blogs
                </a>
                <a
                  href="/contact"
                  className={`block px-4 py-3 text-lg font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200
                    ${isActive('/contact') ? 'bg-blue-50 text-blue-600 font-bold' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>

                {/* CTA Button (Mobile) */}
                <div className="pt-6">
                  <a href="/contact" className="block text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold shadow-md hover:from-blue-400 hover:to-indigo-500 transition-all duration-300 w-full">
                    Talk to an Advisor
                  </a>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;