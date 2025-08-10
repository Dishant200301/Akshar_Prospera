import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Users, Target, Heart, Award, CheckCircle, Phone, Mail } from 'lucide-react';

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
            
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-insurance-blue/5 to-insurance-blue-accent/5 rounded-full -translate-y-32 translate-x-32"></div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="text-center lg:text-left">
                  <div className="w-40 h-40 mx-auto lg:mx-0 mb-8 bg-gradient-to-br from-insurance-blue to-insurance-blue-accent rounded-full flex items-center justify-center shadow-2xl hover:shadow-insurance-blue/25 transition-all duration-300 hover:scale-105">
                    <span className="text-white text-5xl font-bold">AI</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    Arun Isamaliya
                  </h3>
                  <p className="text-xl text-insurance-blue font-semibold mb-6">
                    Your Dedicated Insurance Advisor
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Welcome to Akshar Prospera, where securing your future and protecting your loved ones is my top priority. 
                    I am committed to helping you navigate the complexities of insurance planning and ensure peace of mind 
                    for you and your family across Canada and the United States.
                  </p>
                  
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="text-center p-4 bg-white border-2 border-gray-200 rounded-2xl">
                      <div className="text-2xl font-bold text-insurance-blue">15+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div className="text-center p-4 bg-white border-2 border-gray-200 rounded-2xl">
                      <div className="text-2xl font-bold text-insurance-blue">10,000+</div>
                      <div className="text-sm text-gray-600">Families Protected</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-6 p-6 bg-white border-2 border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-insurance-blue to-insurance-blue-accent rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Expert Guidance</h4>
                      <p className="text-gray-600 leading-relaxed">Professional advice tailored to your unique situation with personalized insurance solutions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6 p-6 bg-white border-2 border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-insurance-blue to-insurance-blue-accent rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Family Protection</h4>
                      <p className="text-gray-600 leading-relaxed">Comprehensive coverage ensuring your loved ones are financially secure for life</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6 p-6 bg-white border-2 border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-insurance-blue to-insurance-blue-accent rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Future Planning</h4>
                      <p className="text-gray-600 leading-relaxed">Strategic insurance planning for long-term security and wealth building</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
                  <p className="text-xl text-gray-700 font-medium mb-4 italic">
                    "Your financial security is my mission. Let's work together to build a protected future for you and your family."
                  </p>
                  <p className="text-insurance-blue font-bold text-lg">- Arun Isamaliya</p>
                  <p className="text-gray-500 text-sm mt-2">Founder & Lead Advisor, Akshar Prospera</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Have Questions? Talk to an Advisor</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">We're here to help you pick the right coverage.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-insurance-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-insurance-blue/90 transition-colors flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" /> 1-800-AKSHAR-PRO
            </button>
            <button className="border-2 border-insurance-blue text-insurance-blue px-8 py-4 rounded-lg font-semibold hover:bg-insurance-blue hover:text-white transition-colors flex items-center justify-center">
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



