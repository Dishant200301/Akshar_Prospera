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
      label: "Families Protected",
    },
    {
      icon: <Briefcase size={24} className="text-blue-500" />,
      value: "25+",
      label: "Expert Team",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Heading */}
      <div className="mb-8 px-6 md:ml-0">
  <h2
    className="
      text-3xl sm:text-4xl md:text-5xl
      font-bold text-gray-900
      mb-4 sm:mb-6 leading-tight
      text-center
    "
  >
    Your{" "}
    <span className="bg-gradient-to-r from-insurance-blue to-insurance-blue-accent bg-clip-text text-transparent">
      Insurance Advisor
    </span>
  </h2>
</div>


      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* LEFT SIDE CONTENT */}
          <div className="p-4 sm:p-6 lg:pt-16 lg:pl-12 lg:pr-0">

            {/* Name + Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight text-center md:text-center lg:text-left">
              Arun Isamaliya
            </h1>

            <h2 className="mt-2 text-xl font-semibold bg-gradient-to-r from-insurance-blue to-insurance-blue-accent bg-clip-text text-transparent text-center md:text-center lg:text-left">
              Founder & Lead Advisor
            </h2>

            {/* Paragraph */}
<p className="mt-5 text-gray-600 text-md max-w-lg leading-relaxed text-center md:text-center md:ml-24 lg:ml-0 lg:text-left">
              As a trusted advisor, I help families across North America choose
              clear, right-fit coverage with confidence. Let's secure your future
              together.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-2 mt-8 pt-8 border-t border-gray-200 text-center md:text-center lg:text-left">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="
                    group relative overflow-hidden
                    bg-gradient-to-br from-white to-blue-50/30
                    border border-blue-100 rounded-lg p-2
                    transition-all duration-500 ease-out
                    text-center md:text-center lg:text-left
                  "
                >
                  <div className="relative">
                    <p
                      className="
                        text-2xl md:text-3xl font-extrabold 
                        bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-1
                        transition-all duration-500 text-center md:text-center lg:text-left
                      "
                    >
                      {stat.value}
                    </p>

                    <p className="text-xs sm:text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors duration-300 text-center md:text-center lg:text-left">
                      {stat.label}
                    </p>
                  </div>

                  <div
                    className="
                      absolute top-0 right-0 w-20 h-20
                      bg-gradient-to-br from-blue-400/10 to-transparent
                      rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    "
                  />
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div
              className="
                flex justify-between gap-4 mt-10 
                text-center
                sm:justify-between
                md:justify-center
                lg:justify-start
              "
            >
              <a
                href="tel:YOUR_PHONE_NUMBER"
                className="
                  w-1/2 sm:w-auto
                  inline-flex items-center justify-center gap-2
                  px-4 sm:px-6 py-3 
                  bg-gradient-to-r from-insurance-blue to-insurance-blue-accent 
                  text-white font-semibold rounded-xl shadow-lg 
                  transform transition-all duration-300 hover:shadow-xl
                "
              >
                <Phone size={18} />
                <span className="hidden sm:inline">Call Arun</span>
                <span className="sm:hidden">Call</span>
              </a>

              <a
                href="mailto:YOUR_EMAIL_ADDRESS"
                className="
                  w-1/2 sm:w-auto
                  inline-flex items-center justify-center gap-2
                  px-4 sm:px-6 py-3 
                  bg-white text-blue-600 border-2 border-blue-600
                  hover:bg-gradient-to-r from-insurance-blue to-insurance-blue-accent 
                  hover:text-white font-semibold rounded-xl 
                  transform transition-all duration-300
                "
              >
                <Mail size={18} />
                <span className="hidden sm:inline">Email Arun</span>
                <span className="sm:hidden">Email</span>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="lg:w-2/6">
            <div className="w-full h-full min-h-[400px] lg:min-h-0 pl-10 py-8 hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop"
                alt="Arun Isamaliya"
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
