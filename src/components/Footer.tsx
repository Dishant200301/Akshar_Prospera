
import React from 'react';
import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Shield className="w-8 h-8 text-insurance-blue" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
              <span className="text-xl font-bold">NorthGuard Insurance</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Protecting your health, travel, and future across North America with 
              comprehensive insurance solutions you can trust.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-insurance-blue transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-insurance-blue transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-insurance-blue transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-insurance-blue transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Our Services</a></li>
              <li><a href="/resources" className="text-gray-300 hover:text-white transition-colors">Resources</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Insurance Types</h3>
            <ul className="space-y-3">
              <li><a href="/health-insurance" className="text-gray-300 hover:text-white transition-colors">Health Insurance</a></li>
              <li><a href="/travel-insurance" className="text-gray-300 hover:text-white transition-colors">Travel Insurance</a></li>
              <li><a href="/visitor-insurance" className="text-gray-300 hover:text-white transition-colors">Visitor Visa Insurance</a></li>
              <li><a href="/life-insurance" className="text-gray-300 hover:text-white transition-colors">Life Insurance</a></li>
              <li><a href="/disability-insurance" className="text-gray-300 hover:text-white transition-colors">Disability Insurance</a></li>
              <li><a href="/critical-illness" className="text-gray-300 hover:text-white transition-colors">Critical Illness</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-insurance-blue mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">1-800-NORTHGUARD</div>
                  <div className="text-gray-300 text-sm">(1-800-667-8442)</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-insurance-blue mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">quotes@northguard.com</div>
                  <div className="text-gray-300 text-sm">support@northguard.com</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-insurance-blue mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Toronto Head Office</div>
                  <div className="text-gray-300 text-sm">123 Bay Street, Suite 1000</div>
                  <div className="text-gray-300 text-sm">Toronto, ON M5K 1A1</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations Map */}
        <div className="py-12 border-t border-gray-800">
          <h3 className="text-2xl font-bold text-center mb-8">Our Locations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-insurance-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Canada</h4>
              <div className="text-gray-300 text-sm space-y-1">
                <div>Toronto, ON • Vancouver, BC</div>
                <div>Montreal, QC • Calgary, AB</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-insurance-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">United States</h4>
              <div className="text-gray-300 text-sm space-y-1">
                <div>New York, NY • Los Angeles, CA</div>
                <div>Chicago, IL • Miami, FL</div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Coverage Area</h4>
              <div className="text-gray-300 text-sm space-y-1">
                <div>All Canadian Provinces</div>
                <div>All US States</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © 2024 NorthGuard Insurance. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a>
              <a href="/cookies" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>

          {/* Regulatory Info */}
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <div className="text-xs text-gray-400 space-y-1">
              <div>Licensed in all Canadian provinces and US states where we operate.</div>
              <div>FSRA License #12345 • Better Business Bureau A+ Rating • ISO 9001:2015 Certified</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
