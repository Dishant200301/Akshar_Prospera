import React from 'react';

const AdvisorSection = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
      </div>

              <div className="container mx-auto px-10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Meet Your Expert Advisor
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Your Trusted
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Life Insurance</span>
              <br />
              <span className="text-gray-900">Advisor</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="text-center lg:text-left">
                <div className="w-40 h-40 mx-auto lg:mx-0 mb-8 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
                  <span className="text-white text-5xl font-bold">AI</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  Arun Isamaliya
                </h3>
                <p className="text-xl text-blue-600 font-semibold mb-6">
                  Your Dedicated Life Insurance Advisor
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Welcome to Akshar Prospera, where securing your future and protecting your loved ones is my top priority. 
                  I am committed to helping you navigate the complexities of financial planning and ensure peace of mind 
                  for you and your family.
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-gray-200 rounded-2xl">
                    <div className="text-2xl font-bold text-blue-600">15+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-gray-200 rounded-2xl">
                    <div className="text-2xl font-bold text-blue-600">1000+</div>
                    <div className="text-sm text-gray-600">Families Protected</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Expert Guidance</h4>
                    <p className="text-gray-600 leading-relaxed">Professional advice tailored to your unique financial situation with personalized solutions</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H7m10 0v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Family Protection</h4>
                    <p className="text-gray-600 leading-relaxed">Comprehensive coverage ensuring your loved ones are financially secure for life</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Future Planning</h4>
                    <p className="text-gray-600 leading-relaxed">Strategic financial planning for long-term security and wealth building</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200 text-center relative z-10">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
                <p className="text-xl text-gray-700 font-medium mb-4 italic">
                  "Your financial security is my mission. Let's work together to build a protected future for you and your family."
                </p>
                <p className="text-blue-600 font-bold text-lg">- Arun Isamaliya</p>
                <p className="text-gray-500 text-sm mt-2">Founder & Lead Advisor, Akshar Prospera</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisorSection;