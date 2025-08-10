import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Users, Target, Heart, Star, Award, CheckCircle, Phone, Mail } from 'lucide-react';

const AboutUs: React.FC = () => {
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
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">We Protect What Matters Most</h1>
            <p className="text-lg md:text-xl text-gray-700">
              Akshar Prospera is a client-focused insurance advisory helping families and travelers across
              Canada and the United States make confident protection decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {highlights.map((item, i) => (
              <div key={i} className="text-center p-6 rounded-xl border-2 border-gray-100 shadow-sm bg-gradient-to-br from-white to-slate-50">
                <div className="text-3xl font-extrabold text-insurance-blue">{item.value}</div>
                <div className="text-sm text-gray-600 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Core Values</h2>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium mb-4">
                <Award className="w-4 h-4 mr-2" /> Trusted Advisors
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Families Choose Akshar Prospera</h2>
              <p className="text-gray-600 mb-6">
                We combine deep insurance expertise with a personal touch—tailoring solutions for health,
                travel, visitor, and life insurance needs.
              </p>
              <ul className="space-y-3">
                {[
                  'Personalized guidance and transparent recommendations',
                  'Access to top North American carriers',
                  'End-to-end support—from quote to claim',
                  'Multilingual assistance and 24/7 availability',
                ].map((point, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-gray-200 p-8 bg-gradient-to-br from-blue-50 to-cyan-50">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-xl bg-insurance-blue text-white flex items-center justify-center">
                  <Shield className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-gray-900">Licensed & Experienced</div>
                  <div className="text-gray-600">Serving Canada and the United States</div>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-gray-200 text-center">
                  <div className="text-2xl font-bold text-insurance-blue">4.9★</div>
                  <div className="text-xs text-gray-600">Average Rating</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-gray-200 text-center">
                  <div className="text-2xl font-bold text-insurance-blue">98%</div>
                  <div className="text-xs text-gray-600">Claim Guidance Success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-insurance-blue to-insurance-blue-accent">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have Questions? Talk to an Advisor</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Were here to help you pick the right coverage.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-insurance-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" /> 1-800-AKSHAR-PRO
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-insurance-blue transition-colors flex items-center justify-center">
              <Mail className="w-5 h-5 mr-2" /> Get in Touch
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;


