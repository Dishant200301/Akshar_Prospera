import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {
  ArrowRight,
  CheckCircle,
  MapPin,
  Briefcase,
  Award,
  Globe,
  Home,
  Shield,
  Layers,
  Target,
  Users,
  Calendar,
  Mail,
} from "lucide-react";
import AdvisorCard from "../components/AdvisorCard";
import { Link } from "react-router-dom";

/* ------------------ Fallback Images ------------------ */
const fallbackImages: string[] = [
  "https://images.unsplash.com/photo-1579154467008-01584288b39c?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1527613488883-bee0904d6428?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511632765486-a019805ad52c?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0c7a5d17?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542740334-a167096d2a8b?q=80&w=2000&auto=format&fit=crop",
];

const getRandomFallbackImage = () =>
  fallbackImages[Math.floor(Math.random() * fallbackImages.length)];

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const img = e.currentTarget;
  if (!fallbackImages.includes(img.src)) img.src = getRandomFallbackImage();
  else img.style.display = "none";
};

/* ------------------ Small AnimatedText helper ------------------ */
const AnimatedText = ({ text, delay = 0, className = "" }) => {
  const isGradient = className.includes("bg-gradient");
  return (
    <span className={isGradient ? "" : className}>
      {text.split(" ").map((w: string, i: number) => (
        <span
          key={i}
          className={`animate-word ${isGradient ? className : ""}`}
          style={{ animationDelay: `${delay + i * 0.05}s` }}
        >
          {w}{" "}
        </span>
      ))}
    </span>
  );
};

const AboutUs: React.FC = () => {
  /* -------- Stats -------- */
  const firmStats = [
    { value: "98%", label: "Client Trust & Satisfaction" },
    { value: "20+", label: "Years of Industry Experience" },
    { value: "10K+", label: "Families Protected Annually" },
  ];

  /* -------- Why Choose Us Features -------- */
  const whyChooseUsFeatures = [
    {
      icon: Users,
      title: "Expert Guidance",
      description:
        "Learn from top industry professionals providing tailored policies, techniques & real-world experience.",
      isHighlighted: false,
    },
    {
      icon: Layers,
      title: "Comprehensive Coverage",
      description:
        "Access a wide range of industry-leading policies to protect every aspect of your life.",
      isHighlighted: false,
    },
    {
      icon: CheckCircle,
      title: "Seamless Claims Support",
      description:
        "Receive end-to-end assistance for quick, fair claims resolution & peace of mind.",
      isHighlighted: false,
    },
    {
      icon: Target,
      title: "Personalized Solutions",
      description:
        "Tailored protection plans that evolve with your life, goals, and budget.",
      isHighlighted: true,
    },
  ];

  /* -------- Team Members -------- */
  const teamMembers = [
    {
      name: "Sarah Mitchell",
      role: "SENIOR INSURANCE ADVISOR",
      email: "sarah.mitchell@aksharprospera.com",
      image: "https://images.unsplash.com/photo-1573496359142-b8d877340b58?q=80&w=800&auto=format&fit=crop",
      shapeColor: "from-purple-400 to-pink-400",
    },
    {
      name: "Michael Chen",
      role: "LIFE INSURANCE SPECIALIST",
      email: "michael.chen@aksharprospera.com",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
      shapeColor: "from-indigo-400 to-purple-400",
    },
    {
      name: "Jessica Parker",
      role: "CLAIMS COORDINATOR",
      email: "jessica.parker@aksharprospera.com",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
      shapeColor: "from-purple-500 to-indigo-500",
    },
    {
      name: "David Rodriguez",
      role: "FINANCIAL PLANNING ADVISOR",
      email: "david.rodriguez@aksharprospera.com",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
      shapeColor: "from-pink-400 to-purple-500",
    },
  ];

  /* -------- Milestones -------- */
  const milestones = [
    {
      icon: MapPin,
      title: "Founded with a Vision",
      description:
        "Established to provide transparent and client-focused insurance solutions.",
      isPrimary: true,
    },
    {
      icon: Briefcase,
      title: "Expanded Service Portfolio",
      description:
        "Introduced comprehensive life and health insurance offerings.",
      isPrimary: false,
    },
    {
      icon: Home,
      title: "Specialized Home & Auto",
      description:
        "Launched dedicated services for property and vehicle protection.",
      isPrimary: false,
    },
    {
      icon: Globe,
      title: "Digital Transformation",
      description:
        "Implemented digital tools for quotes, e-sign and policy tracking.",
      isPrimary: false,
    },
    {
      icon: Award,
      title: "Awarded Top Brokerage",
      description:
        "Recognized for outstanding client service and innovation.",
      isPrimary: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navigation />

      {/* ------------------ HERO ------------------ */}
      <section className="relative h-[65vh] md:h-[70vh] overflow-hidden pt-16 bg-black flex items-center justify-center">
        <div
          className="absolute inset-0 transition-all duration-1000 ease-in-out opacity-100 z-10"
          style={{
            backgroundImage: 'url(/image/about.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight">
              <span className="text-white drop-shadow-2xl font-extrabold">
                Your Reliable{" "}
              </span>
              <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-2xl font-extrabold">
                Partner
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 sm:mb-12 leading-relaxed font-semibold drop-shadow-2xl animate-fade-in">
              <AnimatedText text="Your trusted insurance partner helping families across North America make confident" />
              <AnimatedText
                text="protection decisions"
                delay={0.6}
                className="bg-gradient-to-r from-blue-300 to-indigo-400 bg-clip-text text-transparent font-bold drop-shadow-lg"
              />
            </p>
          </div>
        </div>
      </section>

      {/* ------------------ ABOUT OUR FIRM ------------------ */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
                About Our{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Firm
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                At Akshar Prospera, we pride ourselves on delivering tailored
                insurance solutions that genuinely protect what matters most.
                With over two decades of dedicated experience, our expert team
                is committed to guiding individuals and families through every
                stage of their insurance journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white text-base font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:bg-blue-700"
                >
                  Get a Quote <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 text-base font-semibold rounded-xl transition-all duration-300 hover:bg-blue-50 hover:text-blue-700"
                >
                  Explore Services
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left mt-8 max-w-lg mx-auto lg:mx-0">
                {firmStats.map((s, i) => (
                  <div
                    key={i}
                    className="group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      {s.value}
                    </div>
                    <div className="text-sm text-gray-600 mt-1 group-hover:text-gray-900 transition-colors">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-first lg:order-last">
              <div className="relative w-full max-w-md lg:max-w-lg h-96 sm:h-[440px] md:h-[520px] lg:h-[560px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 mx-auto group">
                <img
                  src="https://images.unsplash.com/photo-1543693087-639a38025487?auto=format&fit=crop&q=60&w=1400"
                  alt="Our insurance team"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ MEET OUR TEAM ------------------ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-7xl relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Meet Our{" "}
<span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">                Team
              </span>
            </h3>
            
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center"
              >
                {/* Abstract Shape Background + Photo */}
                <div className="relative mb-6 w-full max-w-[280px]">
                  {/* Abstract curved shape */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.shapeColor} rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-30 group-hover:opacity-50 transition-opacity duration-500 transform group-hover:scale-110 group-hover:rotate-6`}></div>
                  
                  {/* Circular mask for photo */}
                  <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-white shadow-2xl z-10">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                      onError={handleImageError}
                    />
                  </div>
                </div>

                {/* Member Info */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                    {member.role}
                  </p>
                  <h4 className="text-xl font-bold text-gray-900">
                    {member.name}
                  </h4>
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  >
                    <Mail className="w-4 h-4 text-purple-600" />
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------ WHY CHOOSE US ------------------ */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-7xl relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Akshar Prospera</span> is the Right Choice for You
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {whyChooseUsFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl shadow-lg border-2 border-gray-200 bg-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-blue-300 group"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-base leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------ MILESTONES ------------------ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-7xl">
          <div className="text-center mb-14">
           

            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Key{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Milestones
              </span>
            </h3>

            
          </div>

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {milestones.slice(0, 3).map((m, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-300">
                    <m.icon className="w-6 h-6" />
                  </div>

                  <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {m.title}
                  </h4>

                  <p className="text-gray-600 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-2/3 mx-auto">
              {milestones.slice(3, 5).map((m, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-300">
                    <m.icon className="w-6 h-6" />
                  </div>

                  <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {m.title}
                  </h4>

                  <p className="text-gray-600 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AdvisorCard />
      <Footer />
    </div>
  );
};

export default AboutUs;