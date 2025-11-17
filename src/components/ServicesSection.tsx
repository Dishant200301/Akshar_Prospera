import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import DotLottieAnimation from "./DotLottieAnimation";

// --- Lottie URL Mapping ---
const LOTTIE_URLS = {
  HEALTH: "https://lottie.host/f14039bd-802f-45cf-a854-b8f1c7733eb3/L7b5jKyXDd.lottie",
  TRAVEL: "https://lottie.host/0339e2dc-5552-460e-b5ed-f58851703937/QWxxEwAuHq.lottie",
  LIFE: "https://lottie.host/a2c6fde9-2023-4908-bdc7-5d87bf952ce6/y0BV7NfJhS.lottie",
  HOME: "https://lottie.host/7bf0c4a9-bf4a-4e1e-bed6-e725f3d87e48/sNMZn4XTRn.lottie",
  AUTO: "https://lottie.host/cf1ea106-5ed9-4a36-845e-d7875344ffaa/ISTlLr9wQN.lottie",
};

const ServicesSection = () => {
  const services = [
    {
      title: "Health Insurance",
      description:
        "Safeguard medical expenses with comprehensive health coverage tailored for individuals & families.",
      lottieSrc: LOTTIE_URLS.HEALTH,
      link: "/health-insurance",
    },
    {
      title: "Travel Insurance",
      description:
        "Enjoy global travel protection from trip cancellations to emergency medical support.",
      lottieSrc: LOTTIE_URLS.TRAVEL,
      link: "/travel-insurance",
    },
    {
      title: "Life Insurance",
      description:
        "Provide long-term financial protection to your loved ones through flexible plans.",
      lottieSrc: LOTTIE_URLS.LIFE,
      link: "/life-insurance",
    },
    {
      title: "Home Insurance",
      description:
        "Protect your home and belongings with reliable damage & loss protection.",
      lottieSrc: LOTTIE_URLS.HOME,
      link: "/home-insurance",
    },
    {
      title: "Auto Insurance",
      description:
        "Secure your vehicle with coverage for accidents, theft, and damages.",
      lottieSrc: LOTTIE_URLS.AUTO,
      link: "/auto-insurance",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-5">
        
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}Insurance
            </span>
            <span className="text-gray-900"> Solutions</span>
          </h2>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {services.map((service, index) => (
            <div
  key={index}
  className="
    group relative bg-white rounded-2xl p-6 sm:p-8 md:p-6 lg:p-8 xl:p-4 
    h-full border border-gray-200 flex flex-col items-center text-center 
    transition-all duration-500
    hover:scale-[1.06] hover:-translate-y-2 hover:shadow-2xl
     hover:shadow-blue-200
  "
>
  {/* Glow ring */}
  <div
    className="
      absolute inset-0 rounded-2xl border-2 border-blue-500 opacity-0 scale-105
      group-hover:opacity-40 group-hover:scale-100 transition-all duration-500
    "
  />

  {/* Animation */}
  <div className="flex justify-center items-center mb-6 w-full">
    <div
      className="
        relative w-40 h-40 transition-all duration-500
        group-hover:-translate-y-2
      "
    >
      <DotLottieAnimation
        src={service.lottieSrc}
        className="w-full h-full object-contain"
      />

    </div>
  </div>

  {/* Heading */}
  <h3
    className="
      text-lg sm:text-xl md:text-2xl font-extrabold text-gray-900 mb-4 
      transition-all duration-500 group-hover:-translate-y-2
    "
  >
    {service.title}
  </h3>

  <div className="flex-grow" />

  {/* Button */}
  <Link
    to={service.link}
    className="
       
      group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
      w-full bg-white text-blue-600 border-2 border-blue-600 
      py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl font-semibold 
      hover:bg-blue-600 hover:text-white transition-all duration-300 
      inline-flex items-center justify-center text-sm shadow-md
    "
  >
    <span className="mr-2">View Details</span>
    <ArrowRight className="w-4 h-4" />
  </Link>
</div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
