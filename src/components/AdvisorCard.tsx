import { Phone, Mail, Award, Users, Briefcase } from "lucide-react";
import React from "react";

const AdvisorCard = () => {
  const stats = [
    {
      icon: <Award size={24} className="text-blue-500" />,
      value: "15+",
      label: "Years Experience",
    },
    {
      icon: <Users size={24} className="text-blue-500" />,
      value: "10K+",
      label: "Familie Protected",
    },
    {
      icon: <Briefcase size={24} className="text-blue-500" />,
      value: "25+",
      label: "Expert Team",
    },
  ];

  return (
    <section className=" py-16 bg-gray-50 sm:py-20 lg:py-24 relative overflow-hidden">
      
      {/* Heading */}
      <div className="text-center mb-8 px-6 ">
        
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
          
          Your {" "}
          <span className="bg-gradient-to-r from-insurance-blue to-insurance-blue-accent bg-clip-text text-transparent">
            
            Insurance Advisor
          </span>
        </h2>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto  rounded-3xl  overflow-hidden flex flex-col lg:flex-row">
          {/* LEFT SIDE - CONTENT */}
          <div className=" p-4 sm:p-6 lg:pt-16 lg:pl-12 lg:pr-0 ">
            <div>
              

              <h1 className=" text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Arun Isamaliya
              </h1>

              <h2 className="mt-2 text-xl font-semibold bg-gradient-to-r from-insurance-blue to-insurance-blue-accent bg-clip-text text-transparent">
                Founder & Lead Advisor
              </h2>

              <p className="mt-5 text-gray-600 text-md max-w-lg leading-relaxed">
                As a trusted advisor, I help families across North America
                choose clear, right-fit coverage with confidence. Let's secure
                your future together.
              </p>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 mt-8 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="
                    group relative overflow-hidden
                    bg-gradient-to-br from-white to-blue-50/30
                    border border-blue-100
                    rounded-lg p-2
                    transition-all duration-500 ease-out
                    hover:shadow-xl hover:shadow-blue-500/10
                    hover:border-blue-300
                    hover:-translate-y-1
                    hover:scale-105
                  "
                >
                  {/* Gradient overlay on hover */}
                  <div className="
                    absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500
                  " />
                  
                 
                  
                  {/* Stats content */}
                  <div className="relative">
                    <p className="
                      text-2xl sm:text-2xl md:text-3xl font-extrabold 
                      bg-gradient-to-r from-gray-900 to-gray-700
                      bg-clip-text text-transparent
                      mb-1
                      group-hover:from-insurance-blue group-hover:to-insurance-blue-accent
                      transition-all duration-500
                    ">
                      {stat.value}
                    </p>
                    <p className="
                      text-xs sm:text-sm font-medium text-gray-600
                      group-hover:text-gray-900
                      transition-colors duration-300
                    ">
                      {stat.label}
                    </p>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="
                    absolute top-0 right-0 w-20 h-20
                    bg-gradient-to-br from-blue-400/10 to-transparent
                    rounded-bl-full
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                  " />
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href="tel:YOUR_PHONE_NUMBER"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-insurance-blue to-insurance-blue-accent text-white font-semibold rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl "
              >
                <Phone size={18} />
                Call Arun
              </a>
              <a
                href="mailto:YOUR_EMAIL_ADDRESS"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 hover:bg-gradient-to-r from-insurance-blue to-insurance-blue-accent hover:text-white font-semibold rounded-xl transform transition-all duration-300 hover:bg-blue-50 "
              >
                <Mail size={18} />
                Email Arun
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="lg:w-2/6">
  <div className="w-full h-full min-h-[400px] lg:min-h-0 pl-10 py-8 hidden lg:block">
    <img
      src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop"
      alt="Arun Isamaliya, Founder & Lead Advisor"
      className="object-cover object-top w-full h-full rounded-xl"
    />
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default AdvisorCard;
