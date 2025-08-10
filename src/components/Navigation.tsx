
import React, { useState } from 'react';
import { Shield, ChevronDown, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [activePanel, setActivePanel] = useState<string | null>(null);

  const serviceTypes = [
    {
      id: 'health',
      name: 'Health Insurance',
      description: 'Comprehensive health coverage for individuals and families',
      features: ['Emergency Care', 'Prescription Coverage', 'Specialist Visits']
    },
    {
      id: 'travel',
      name: 'Travel Insurance',
      description: 'Protection for domestic and international travel',
      features: ['Trip Cancellation', 'Medical Coverage', 'Lost Baggage']
    },
    {
      id: 'visitor',
      name: 'Visitor Visa Insurance',
      description: 'Coverage for visitors to Canada and USA',
      features: ['Emergency Medical', 'Repatriation', 'Extended Stay Options']
    },
    {
      id: 'other',
      name: 'Other Plans',
      description: 'Specialized insurance solutions',
      features: ['Life Insurance', 'Disability', 'Critical Illness']
    }
  ];

  return (
    <nav className="bg-white shadow-card sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Shield className="w-8 h-8 text-insurance-blue" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-xl font-bold text-gray-900">Akshar Prospera</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-insurance-blue transition-colors">
              Home
            </a>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveSubmenu('services')}
              onMouseLeave={() => {
                setActiveSubmenu(null);
                setActivePanel(null);
              }}
            >
              <button className="flex items-center text-gray-700 hover:text-insurance-blue transition-colors">
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              <div className={`mega-menu ${activeSubmenu === 'services' ? 'show' : ''}`}>
                <div className="container-custom py-8">
                  <div className="grid grid-cols-2 gap-8">
                    {/* Left Column - Service Types */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Insurance Types</h3>
                      <div className="space-y-2">
                        {serviceTypes.map((service) => (
                          <button
                            key={service.id}
                            className="block w-full text-left p-3 rounded-lg hover:bg-insurance-blue-light/10 transition-colors"
                            onMouseEnter={() => setActivePanel(service.id)}
                          >
                            <div className="font-medium text-gray-900">{service.name}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Right Column - Dynamic Panel */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      {activePanel && serviceTypes.find(s => s.id === activePanel) && (
                        <div className={`mega-menu-panel ${activePanel ? 'active' : ''}`}>
                          {(() => {
                            const service = serviceTypes.find(s => s.id === activePanel);
                            return service ? (
                              <>
                                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                                  {service.name}
                                </h4>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <ul className="space-y-2">
                                  {service.features.map((feature, index) => (
                                    <li key={index} className="flex items-center text-sm text-gray-600">
                                      <div className="w-1.5 h-1.5 bg-insurance-gold rounded-full mr-3"></div>
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                                <button className="btn-primary mt-4">
                                  Learn More
                                </button>
                              </>
                            ) : null;
                          })()}
                        </div>
                      )}
                      {!activePanel && (
                        <div className="text-center text-gray-500">
                          Hover over a service type to see details
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a href="/about" className="text-gray-700 hover:text-insurance-blue transition-colors">
              About Us
            </a>
            <a href="/resources" className="text-gray-700 hover:text-insurance-blue transition-colors">
              Resources
            </a>
            <a href="/contact" className="text-gray-700 hover:text-insurance-blue transition-colors">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <button className="hidden md:block btn-hero">
            Get a Free Quote
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t animate-fade-in">
            <div className="py-4 space-y-4">
              <a href="/" className="block text-gray-700 hover:text-insurance-blue transition-colors">
                Home
              </a>
              <a href="/services" className="block text-gray-700 hover:text-insurance-blue transition-colors">
                Services
              </a>
              <a href="/about" className="block text-gray-700 hover:text-insurance-blue transition-colors">
                About Us
              </a>
              <a href="/resources" className="block text-gray-700 hover:text-insurance-blue transition-colors">
                Resources
              </a>
              <a href="/contact" className="block text-gray-700 hover:text-insurance-blue transition-colors">
                Contact
              </a>
              <button className="btn-primary w-full">
                Get a Free Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
