import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Shield,
  Award,
  Send,
  MessageSquare,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    insuranceType: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <MessageSquare className="w-4 h-4 mr-2" />
            Get In Touch
          </div>
          <h2 className="text-section-title">Get Your Free Quote Today</h2>
          <p className="text-section-subtitle max-w-3xl mx-auto">
            Ready to protect what matters most? Contact our licensed advisors
            for a personalized insurance quote with no obligation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="card-premium">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-insurance-blue focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-insurance-blue focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-insurance-blue focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="insuranceType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Insurance Type *
                  </label>
                  <select
                    id="insuranceType"
                    name="insuranceType"
                    value={formData.insuranceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-insurance-blue focus:border-transparent transition-all"
                    required
                  >
                    <option value="">Select Insurance Type</option>
                    <option value="health">Health Insurance</option>
                    <option value="travel">Travel Insurance</option>
                    <option value="visitor">Visitor Visa Insurance</option>
                    <option value="other">Other Plans</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Tell us about your needs
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-insurance-blue focus:border-transparent transition-all resize-none"
                  placeholder="Please describe your specific insurance needs..."
                ></textarea>
              </div>

              <button type="submit" className="btn-hero w-full group">
                Get Your Free Quote
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Trust Badges */}
              <div className="flex items-center justify-center space-x-6 mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Shield className="w-4 h-4 text-insurance-blue" />
                  <span>SSL Secured</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Award className="w-4 h-4 text-insurance-blue" />
                  <span>Licensed Provider</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-insurance-blue" />
                  <span>24hr Response</span>
                </div>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="card-premium">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-insurance-blue mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Phone</div>
                    <div className="text-gray-600">1-800-AKSHAR-PRO</div>
                    <div className="text-gray-600">(1-800-257-4277)</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-insurance-blue mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <div className="text-gray-600">
                      quotes@aksharprospera.com
                    </div>
                    <div className="text-gray-600">
                      support@aksharprospera.com
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-insurance-blue mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">
                      Business Hours
                    </div>
                    <div className="text-gray-600">Mon-Fri: 8AM-8PM EST</div>
                    <div className="text-gray-600">Sat-Sun: 9AM-5PM EST</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="card-premium">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Office Locations
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-insurance-blue mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Toronto, ON</div>
                    <div className="text-sm text-gray-600">
                      123 Bay Street, Suite 1000
                      <br />
                      Toronto, ON M5K 1A1
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-insurance-blue mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">
                      Vancouver, BC
                    </div>
                    <div className="text-sm text-gray-600">
                      456 Robson Street, Suite 800
                      <br />
                      Vancouver, BC V6B 6L5
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-insurance-blue mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">
                      New York, NY
                    </div>
                    <div className="text-sm text-gray-600">
                      789 Broadway, Suite 1200
                      <br />
                      New York, NY 10003
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-gradient-hero rounded-xl p-6 text-white text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-insurance-gold" />
              <h4 className="text-lg font-semibold mb-2">
                Quick Response Guarantee
              </h4>
              <p className="text-sm text-white/90">
                We respond to all quote requests within 24 hours, often much
                sooner during business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
