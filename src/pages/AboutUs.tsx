import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Users, Target, Heart, Award, CheckCircle, Phone, Mail } from 'lucide-react';

const AboutUs: React.FC = () => {
  const chipClass = "inline-flex items-center px-3 py-1.5 rounded-full border border-gray-200 bg-white text-sm text-gray-700 whitespace-nowrap";
  const values = [
    { icon: Heart, title: 'Customer First', desc: 'We design every policy and interaction around your needs.' },
    { icon: Shield, title: 'Trust & Transparency', desc: 'Clear terms, honest guidance, and dependable coverage.' },
    { icon: Target, title: 'Results Driven', desc: 'We focus on outcomes that protect what matters most.' },
  ];

  const highlights = [
    { label: 'Happy Clients', value: '10,000+' },
    { label: 'Claims Assisted', value: '5,000+' },
    { label: 'Carriers Partnered', value: '25+' },
    { label: 'Years Experience', value: '15+' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 min-h-[50vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">We Protect What Matters Most</h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Your trusted, client-focused insurance advisory. We help families and travelers across North America make confident protection decisions.
            </p>
          </div>
        </div>
      </section>
      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Our Values
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What We Stand For</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Principles that guide how we serve you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((v, i) => (
              <div key={i} className="p-8 rounded-2xl border-2 border-gray-200 bg-white shadow-card">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-insurance-blue to-insurance-blue-accent text-white flex items-center justify-center mb-4">
                  <v.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" /> Trusted Advisors
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Families Choose Akshar Prospera</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We blend expert guidance with a warm, personal approach—so you get clear advice, flexible options,
                and support at every step for health, travel, visitor, and life insurance.
              </p>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 rounded-2xl border-2 border-gray-200 bg-white hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-insurance-blue to-insurance-blue-accent text-white flex items-center justify-center mb-4">
                  <Heart className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Guidance</h3>
                <p className="text-gray-600">Recommendations tailored to your family, budget, and goals.</p>
              </div>
              <div className="p-8 rounded-2xl border-2 border-gray-200 bg-white hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-insurance-blue to-insurance-blue-accent text-white flex items-center justify-center mb-4">
                  <Shield className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Top Carrier Access</h3>
                <p className="text-gray-600">Choice from leading Canadian and U.S. insurers with transparent terms.</p>
              </div>
              <div className="p-8 rounded-2xl border-2 border-gray-200 bg-white hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-insurance-blue to-insurance-blue-accent text-white flex items-center justify-center mb-4">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">End‑to‑End Support</h3>
                <p className="text-gray-600">From quotes to claims, we handle details so you stay confident.</p>
              </div>
            </div>

            {/* Key metrics (moved highlights here) */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {highlights.map((item, i) => (
                <div key={i} className="text-center p-6 rounded-xl border-2 border-gray-100 shadow-sm bg-gradient-to-br from-white to-slate-50">
                  <div className="text-3xl font-extrabold text-insurance-blue">{item.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your Expert Advisor */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-insurance-blue/10 text-insurance-blue rounded-full text-sm font-medium mb-6">
                <Users className="w-4 h-4 mr-2" />
                Meet Your Expert Advisor
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Your Trusted
                <span className="bg-gradient-to-r from-insurance-blue to-insurance-blue-accent bg-clip-text text-transparent"> Insurance</span>
                <br />
                <span className="text-gray-900">Advisor</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Meet the dedicated professional who will guide you through every step of your insurance journey
              </p>
            </div>
            
            {/* Profile Card */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden max-w-5xl mx-auto">
              {/* Header Section */}
              <div className="relative">
                {/* Profile Info */}
                <div className="px-6 md:px-10 pt-8 pb-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    {/* Profile Avatar and Name */}
                    <div className="flex items-center gap-6">
                      <div className="w-28 h-28 bg-gradient-to-br from-insurance-blue to-insurance-blue-accent rounded-full p-2 shadow-xl ring-4 ring-gray-100">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-insurance-blue to-insurance-blue-accent flex items-center justify-center text-white text-4xl font-bold">AI</div>
                      </div>
                      <div>
                        <h3 className="text-4xl font-bold text-gray-900 mb-2">Arun Isamaliya</h3>
                        <div className="text-xl text-insurance-blue font-semibold">Founder & Lead Advisor</div>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
                      <button className="bg-white text-insurance-blue border-2 border-insurance-blue px-6 py-3 rounded-xl font-semibold hover:bg-insurance-blue hover:text-white transition-all duration-200 inline-flex items-center justify-center shadow-sm">
                        <Phone className="w-5 h-5 mr-2" /> Call Arun
                      </button>
                      <button className="bg-insurance-blue text-white px-6 py-3 rounded-xl font-semibold hover:bg-insurance-blue/90 transition-all duration-200 inline-flex items-center justify-center shadow-sm">
                        <Mail className="w-5 h-5 mr-2" /> Email Arun
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="px-6 md:px-10 pt-8 pb-10">
                {/* Description */}
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Trusted advisor helping families across Canada and the U.S. choose clear, right‑fit coverage.
                </p>

                {/* Statistics Row */}
                <div className="grid grid-cols-3 gap-6 mb-10">
                  <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-3xl font-bold text-insurance-blue mb-1">15+</div>
                    <div className="text-sm text-gray-600 font-medium">Years</div>
                  </div>
                  <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-3xl font-bold text-insurance-blue mb-1">10k+</div>
                    <div className="text-sm text-gray-600 font-medium">Families</div>
                  </div>
                  <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-3xl font-bold text-insurance-blue mb-1">4.9★</div>
                    <div className="text-sm text-gray-600 font-medium">Rating</div>
                  </div>
                </div>

                {/* Specialties and Credentials */}
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Specialties
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Health Insurance Planning</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Travel & Visitor Coverage</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Family Life Insurance</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-insurance-blue" />
                      Licenses & Credentials
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <Shield className="w-4 h-4 text-insurance-blue mt-0.5 flex-shrink-0" />
                        <span>Licensed Advisor: Canada & USA</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Award className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span>15+ Years Experience</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1.5fr] gap-x-5 gap-y-4">
                  <div className="space-y-4">
                    <h5 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <Users className="w-5 h-5 text-insurance-blue" />
                      Languages
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-4 py-2 rounded-full border-2 border-gray-200 bg-white text-sm text-gray-700 font-medium hover:border-insurance-blue hover:text-insurance-blue transition-colors">English</span>
                      <span className="inline-flex items-center px-4 py-2 rounded-full border-2 border-gray-200 bg-white text-sm text-gray-700 font-medium hover:border-insurance-blue hover:text-insurance-blue transition-colors">Gujarati</span>
                      <span className="inline-flex items-center px-4 py-2 rounded-full border-2 border-gray-200 bg-white text-sm text-gray-700 font-medium hover:border-insurance-blue hover:text-insurance-blue transition-colors">Hindi</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h5 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <Target className="w-5 h-5 text-insurance-blue" />
                      Serving
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-4 py-2 rounded-full border-2 border-gray-200 bg-white text-sm text-gray-700 font-medium hover:border-insurance-blue hover:text-insurance-blue transition-colors">Canada</span>
                      <span className="inline-flex items-center px-4 py-2 rounded-full border-2 border-gray-200 bg-white text-sm text-gray-700 font-medium hover:border-insurance-blue hover:text-insurance-blue transition-colors">United States</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h5 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-insurance-blue" />
                      Availability
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-4 py-2 rounded-full border-2 border-gray-200 bg-white text-sm text-gray-700 font-medium hover:border-insurance-blue hover:text-insurance-blue transition-colors">Virtual Meetings</span>
                      <span className="inline-flex items-center px-4 py-2 rounded-full border-2 border-gray-200 bg-white text-sm text-gray-700 font-medium hover:border-insurance-blue hover:text-insurance-blue transition-colors">In‑Person</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Quote */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-insurance-blue/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-insurance-blue-accent/10 rounded-full blur-2xl"></div>
            <div className="relative rounded-3xl border-2 border-gray-100 bg-white p-10 text-center shadow-xl">
              <div className="text-4xl text-insurance-blue mb-4">“</div>
              <p className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
                Your financial security is my mission. Let's build a protected future for you and your family.
              </p>
              <div className="mt-5 text-insurance-blue font-bold">- Arun Isamaliya</div>
              <div className="text-gray-500 text-sm">Founder & Lead Advisor</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;



