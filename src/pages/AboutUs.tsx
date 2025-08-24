import React, { useState, useRef } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Users, Target, Heart, Award, CheckCircle, Phone, Mail } from 'lucide-react';

const AboutUs: React.FC = () => {
  const [tiltedCards, setTiltedCards] = useState<{ [key: number]: { x: number; y: number } }>({});
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    
    setTiltedCards(prev => ({
      ...prev,
      [index]: { x: rotateX, y: rotateY }
    }));
  };

  const handleMouseLeave = (index: number) => {
    setTiltedCards(prev => ({
      ...prev,
      [index]: { x: 0, y: 0 }
    }));
  };

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
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 h-[80vh] flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between">
            <div className="text-left max-w-2xl lg:max-w-xl xl:max-w-2xl ml-16 sm:ml-24 lg:ml-32">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Your Trusted<br /><span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Insurance Advisor</span></h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl lg:max-w-xl xl:max-w-2xl">
                With over 15 years of experience, Arun Isamaliya brings warmth, expertise, and genuine care to every client relationship.
              </p>
            </div>
            
            {/* Agent Photo */}
            <div className="flex-shrink-0 mr-16 sm:mr-24 lg:mr-32 mt-20 sm:mt-24 lg:mt-32">
              <div className="w-48 h-56 sm:w-56 sm:h-64 lg:w-64 lg:h-72 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <img 
                  src="/image/arun.png" 
                  alt="Arun Isamaliya - Insurance Agent"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center mt-3">
                <p className="text-sm font-semibold text-gray-800">Arun Isamaliya</p>
                <p className="text-xs text-gray-600">Licensed Insurance Agent</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Why Families Choose <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Akshar Prospera</span></h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  We blend expert guidance with a warm, personal approach to deliver exceptional insurance solutions.
                </p>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group block perspective-1000">
                <div 
                  ref={el => cardRefs.current[0] = el}
                  onMouseMove={(e) => handleMouseMove(0, e)}
                  onMouseLeave={() => handleMouseLeave(0)}
                  className="h-full"
                >
                  <div 
                    className="p-8 rounded-2xl border-2 border-gray-200 bg-white transition-all duration-300 ease-out transform-gpu group-hover:shadow-2xl group-hover:scale-105 h-full"
                    style={{
                      transform: `perspective(1000px) rotateX(${tiltedCards[0]?.x || 0}deg) rotateY(${tiltedCards[0]?.y || 0}deg)`,
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center mb-4">
                      <Heart className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Guidance</h3>
                    <p className="text-gray-600">Recommendations tailored to your family, budget, and goals.</p>
                  </div>
                </div>
              </div>
              <div className="group block perspective-1000">
                <div 
                  ref={el => cardRefs.current[1] = el}
                  onMouseMove={(e) => handleMouseMove(1, e)}
                  onMouseLeave={() => handleMouseLeave(1)}
                  className="h-full"
                >
                  <div 
                    className="p-8 rounded-2xl border-2 border-gray-200 bg-white transition-all duration-300 ease-out transform-gpu group-hover:shadow-2xl group-hover:scale-105 h-full"
                    style={{
                      transform: `perspective(1000px) rotateX(${tiltedCards[1]?.x || 0}deg) rotateY(${tiltedCards[1]?.y || 0}deg)`,
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center mb-4">
                      <Shield className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Top Carrier Access</h3>
                    <p className="text-gray-600">Choice from leading Canadian and U.S. insurers with transparent terms.</p>
                  </div>
                </div>
              </div>
              <div className="group block perspective-1000">
                <div 
                  ref={el => cardRefs.current[2] = el}
                  onMouseMove={(e) => handleMouseMove(2, e)}
                  onMouseLeave={() => handleMouseLeave(2)}
                  className="h-full"
                >
                  <div 
                    className="p-8 rounded-2xl border-2 border-gray-200 bg-white transition-all duration-300 ease-out transform-gpu group-hover:scale-105 h-full"
                    style={{
                      transform: `perspective(1000px) rotateX(${tiltedCards[2]?.x || 0}deg) rotateY(${tiltedCards[2]?.y || 0}deg)`,
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center mb-4">
                      <Target className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">End‑to‑End Support</h3>
                    <p className="text-gray-600">From quotes to claims, we handle details so you stay confident.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Statistics */}
            <div className="mt-12 max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {highlights.map((item, i) => (
                  <div key={i} className="text-center p-6 rounded-xl border-2 border-gray-100 shadow-sm bg-white hover:shadow-md transition-shadow">
                    <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{item.value}</div>
                    <div className="text-sm text-gray-600 mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">What We <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Stand For</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Core principles that drive our commitment to exceptional service and client satisfaction.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((v, i) => (
              <div key={i} className="group block perspective-1000">
                <div 
                  ref={el => cardRefs.current[i + 3] = el}
                  onMouseMove={(e) => handleMouseMove(i + 3, e)}
                  onMouseLeave={() => handleMouseLeave(i + 3)}
                  className="h-full"
                >
                  <div 
                    className="p-8 rounded-2xl border-2 border-gray-200 bg-white transition-all duration-300 ease-out transform-gpu group-hover:shadow-2xl group-hover:scale-105 h-full"
                    style={{
                      transform: `perspective(1000px) rotateX(${tiltedCards[i + 3]?.x || 0}deg) rotateY(${tiltedCards[i + 3]?.y || 0}deg)`,
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center mb-4">
                      <v.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{v.title}</h3>
                    <p className="text-gray-600">{v.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional descriptive text */}
          <div className="mt-12 max-w-6xl mx-auto">
            <div className="p-8 rounded-2xl border-2 border-gray-200 bg-white shadow-card">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                These core values aren't just words on paper—they're the foundation of every interaction we have with our clients. 
                When you choose Akshar Prospera, you're choosing a partner who puts your family's security above everything else. 
                We believe that exceptional service isn't about selling policies; it's about building lasting relationships based on 
                trust, understanding, and genuine care for your future. Every decision we make, every recommendation we provide, 
                and every policy we help you choose is guided by these principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your Expert Advisor */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Your Trusted <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Insurance Advisor</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Meet the dedicated professional who will guide you through every step of your insurance journey
              </p>
            </div>
            
            {/* Profile Card */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden max-w-5xl mx-auto">
              {/* Header Section */}
              <div className="px-6 py-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  {/* Profile Avatar and Name */}
                  <div className="flex items-center gap-6">
                    <div className="w-28 h-28 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full p-2 shadow-xl ring-4 ring-gray-100">
                      <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white text-4xl font-bold">AI</div>
                    </div>
                    <div>
                      <h3 className="text-4xl font-bold text-gray-900 mb-2">Arun Isamaliya</h3>
                      <div className="text-xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold">Founder & Lead Advisor</div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
                    <button className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white transition-all duration-200 inline-flex items-center justify-center shadow-sm">
                      <Phone className="w-5 h-5 mr-2" /> Call Arun
                    </button>
                    <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 inline-flex items-center justify-center shadow-sm">
                      <Mail className="w-5 h-5 mr-2" /> Email Arun
                    </button>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="px-6 py-6">
                {/* Description */}
                <p className="text-lg text-gray-600 mb-8 leading-relaxed text-center">
                  Trusted advisor helping families across Canada and the U.S. choose clear, right‑fit coverage.
                </p>

                {/* Statistics Row */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-4 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">15+</div>
                    <div className="text-sm text-gray-600 font-medium">Years</div>
                  </div>
                  <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-4 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">10k+</div>
                    <div className="text-sm text-gray-600 font-medium">Families</div>
                  </div>
                  <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-4 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">25+</div>
                    <div className="text-sm text-gray-600 font-medium">Team Members</div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3 text-center">
                    <h5 className="text-base font-semibold text-gray-900 flex items-center justify-center gap-2">
                      <Users className="w-4 h-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent" />
                      Languages
                    </h5>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-gray-200 bg-white text-sm text-gray-700 font-medium hover:border-blue-600 hover:text-blue-600 transition-colors">English</span>
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-gray-200 bg-white text-sm text-gray-700 font-medium hover:border-blue-600 hover:text-blue-600 transition-colors">Gujarati</span>
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-gray-200 bg-white text-sm text-gray-700 font-medium hover:border-blue-600 hover:text-blue-600 transition-colors">Hindi</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-center">
                    <h5 className="text-base font-semibold text-gray-900 flex items-center justify-center gap-2">
                      <Target className="w-4 h-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent" />
                      Serving
                    </h5>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-gray-200 bg-white text-sm text-gray-700 font-medium hover:border-blue-600 hover:text-blue-600 transition-colors">Canada</span>
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-gray-200 bg-white text-sm text-gray-700 font-medium hover:border-blue-600 hover:text-blue-600 transition-colors">United States</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-center">
                    <h5 className="text-base font-semibold text-gray-900 flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent" />
                      Availability
                    </h5>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-gray-200 bg-white text-sm text-gray-700 font-medium hover:border-blue-600 hover:text-blue-600 transition-colors">Virtual Meetings</span>
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-gray-200 bg-white text-sm text-gray-700 font-medium hover:border-blue-600 hover:text-blue-600 transition-colors">In‑Person</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;



