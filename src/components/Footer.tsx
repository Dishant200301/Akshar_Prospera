import React from "react";
import {
  Shield,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const linkItemClasses =
    "text-gray-300 hover:hover-text-gradient transition-all duration-300 block font-sans hover:translate-x-1";

  return (
    <footer className="bg-gradient-to-b from-gray-950 to-gray-900 text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-6 py-16 md:pt-14 md:pb-8">
        {/* ===== Top Section ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-12 xl:gap-16">
          {/* === Brand Column === */}
          <div className="flex flex-col space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-insurance-blue to-insurance-blue-accent rounded-lg flex items-center justify-center shadow-lg group-hover:bg-gradient-primary transition-colors duration-300">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-insurance-blue to-insurance-blue-accent bg-clip-text text-transparent group-hover:bg-gradient-primary transition-colors duration-300">
                Akshar Prospera
              </span>
            </Link>

            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Your trusted partner for comprehensive insurance solutions across
              Canada and the United States. Protecting what matters most with
              reliability and care.
            </p>

            {/* === Social Icons === */}
            <div className="flex space-x-3 pt-2">
              {[
                { Icon: Linkedin, href: "https://linkedin.com" },
                { Icon: Instagram, href: "https://instagram.com" },
                { Icon: Facebook, href: "https://facebook.com" },
                { Icon: Youtube, href: "https://youtube.com" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${Icon.displayName || "social"} profile`}
                  className="bg-blue-900/50 text-blue-300 p-3 rounded-lg group-hover:bg-gradient-to-r from-insurance-blue to-insurance-blue-accent transition-colors duration-300 shadow-md"

                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* === Quick Links & Services === */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <div className="grid grid-cols-2 gap-8 lg:ml-16">
              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-bold mb-6 pb-2 border-b border-blue-900 inline-block">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {[
                    { label: "About Us", to: "/about-us" },
                    { label: "Our Services", to: "/services" },
                    { label: "Blog", to: "/blogs" },
                    { label: "Contact Us", to: "/contact" },
                  ].map(({ label, to }) => (
                    <li key={label}>
                      <Link to={to} className={linkItemClasses}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Services */}
              <div>
                <h3 className="text-xl font-bold mb-6 pb-2 border-b border-blue-900 inline-block">
                  Services
                </h3>
                <ul className="space-y-3">
                  {[
                    { label: "Auto Insurance", to: "/services/auto-insurance" },
                    { label: "Home Insurance", to: "/services/home-insurance" },
                    { label: "Life Insurance", to: "/services/life-insurance" },
                    { label: "Travel Insurance", to: "/services/travel-insurance" },
                    { label: "Health Insurance", to: "/services/health-insurance" },
                  ].map(({ label, to }) => (
                    <li key={label}>
                      <Link to={to} className={linkItemClasses}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* === Contact Info === */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-xl font-bold pb-2 border-b border-blue-900 inline-block">
              Get In Touch
            </h3>

            {/* Email */}
            <div className="flex items-start space-x-4 group">
              <div className="bg-blue-900/50 p-2 rounded-lg group-hover:bg-gradient-to-r from-insurance-blue to-insurance-blue-accent transition-colors duration-300 shadow-md">
                <Mail className="w-5 h-5 " />
              </div>
              <div>
                <div className="font-semibold text-white">Email Us</div>
                <a
                  href="mailto:quotes@aksharprospera.com"
                  className="text-gray-300 hover:text-gradient transition-colors duration-300 block text-sm md:text-base"
                >
                  quotes@aksharprospera.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4 group">
              <div className="bg-blue-900/50 p-2 rounded-lg group-hover:bg-gradient-to-r from-insurance-blue to-insurance-blue-accent transition-colors duration-300 shadow-md">
                <Phone className="w-5 h-5 text-blue-300" />
              </div>
              <div>
                <div className="font-semibold text-white">Call Us</div>
                <a
                  href="tel:+18002574277"
                  className="text-gray-300 hover:text-gradient transition-colors duration-300 block text-sm md:text-base"
                >
                  (1) 800-AKSHAR-PRO
                </a>
                <p className="text-gray-400 text-xs">(1-800-257-4277)</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-4 group">
              <div className="bg-blue-900/50 p-2 rounded-lg group-hover:bg-gradient-to-r from-insurance-blue to-insurance-blue-accent transition-colors duration-300 shadow-md">
                <MapPin className="w-5 h-5 text-blue-300" />
              </div>
              <div>
                <div className="font-semibold text-white">Our Office</div>
                <p className="text-gray-300 text-sm">
                  123 Insurance Ave, Suite 100
                </p>
                <p className="text-gray-400 text-sm">Toronto, ON M5V 2H1</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Bottom Bar ===== */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Akshar Prospera. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Developed by{" "}
            <a
              href="https://tryzeniq.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gradient-to-r from-insurance-blue to-insurance-blue-accent hover-text-gradient font-medium transition-colors duration-200"
            >
              TryzenIQ
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
