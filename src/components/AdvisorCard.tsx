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
      <div className="text-center mb-8">
        
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
          
          Your Trusted {" "}
          <span className="bg-gradient-to-r from-insurance-blue to-insurance-blue-accent bg-clip-text text-transparent">
            
            Insurance Advisor
          </span>
        </h2>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto  rounded-3xl  overflow-hidden flex flex-col lg:flex-row">
          {/* LEFT SIDE - CONTENT */}
          <div className=" p-8 sm:p-12 lg:pt-16 lg:pl-12 lg:pr-0 ">
            <div>
              

              <h1 className=" text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Arun Isamaliya
              </h1>

              <h2 className="mt-2 text-xl font-semibold bg-gradient-to-r from-insurance-blue to-insurance-blue-accent bg-clip-text text-transparent">
                Founder & Lead Advisor
              </h2>

              <p className="mt-5 text-gray-600 text-lg max-w-xl leading-relaxed">
                As a trusted advisor, I help families across North America
                choose clear, right-fit coverage with confidence. Let's secure
                your future together.
              </p>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6 pt-6 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-gradient">{stat.icon}</div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
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
