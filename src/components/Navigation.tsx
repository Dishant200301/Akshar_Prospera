
import React, { useState, useEffect } from 'react';
import { Shield, ChevronDown, Menu, X, MapPin, Star } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceTypes = [
    'Health Insurance',
    'Travel Insurance', 
    'Visitor Visa Insurance',
    'Other Plans'
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-insurance-blue to-insurance-blue-accent rounded-lg flex items-center justify-center">
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
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-slate-800'
            }`}>Akshar Prospera</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className={`font-medium transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-insurance-blue' : 'text-slate-600 hover:text-slate-800'
            }`}>
              Home
            </a>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className={`flex items-center space-x-1 font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-insurance-blue' : 'text-slate-600 hover:text-slate-800'
              }`}>
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-premium border border-gray-100 rounded-lg py-4 mt-2">
                  {serviceTypes.map((service, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-6 py-3 text-gray-700 hover:bg-insurance-blue hover:text-white transition-colors"
                    >
                      {service}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            <a href="#" className={`font-medium transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-insurance-blue' : 'text-slate-600 hover:text-slate-800'
            }`}>
              About Us
            </a>
            <a href="#" className={`font-medium transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-insurance-blue' : 'text-slate-600 hover:text-slate-800'
            }`}>
              Resources
            </a>
            <a href="#" className={`font-medium transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-insurance-blue' : 'text-slate-600 hover:text-slate-800'
            }`}>
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="btn-primary bg-gradient-to-r from-insurance-blue to-insurance-blue-accent hover:from-insurance-blue-dark hover:to-insurance-blue-hover">
              Talk to an Advisor
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-gray-700' : 'text-slate-700'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden py-4 border-t rounded-b-lg transition-all duration-300 ${
            isScrolled 
              ? 'border-gray-200 bg-white/95 backdrop-blur-sm' 
              : 'border-slate-200 bg-white/90 backdrop-blur-sm'
          }`}>
            <div className="flex flex-col space-y-4">
              <a href="#" className={`font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-insurance-blue' : 'text-slate-600 hover:text-slate-800'
              }`}>
                Home
              </a>
              <a href="#" className={`font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-insurance-blue' : 'text-white/80 hover:text-white'
              }`}>
                Services
              </a>
              <a href="#" className={`font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-insurance-blue' : 'text-slate-600 hover:text-slate-800'
              }`}>
                About Us
              </a>
              <a href="#" className={`font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-insurance-blue' : 'text-white/80 hover:text-white'
              }`}>
                Resources
              </a>
              <a href="#" className={`font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-insurance-blue' : 'text-slate-600 hover:text-slate-800'
              }`}>
                Contact
              </a>
              <button className="btn-primary w-full mt-4">
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
