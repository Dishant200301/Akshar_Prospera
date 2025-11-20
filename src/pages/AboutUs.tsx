import React from "react";
import { motion } from "framer-motion";
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

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
const AnimatedText = ({ text, delay = 0, className = "" }) => {
  const isGradient = className.includes("bg-gradient");

  return (
    <span className={isGradient ? "" : className}>
      {text.split(" ").map((word, index) => (
        <span
          key={index}
          className={`inline-block animate-word ${isGradient ? className : ""}`}
          style={{ animationDelay: `${delay + index * 0.05}s` }}
        >
          {word}{" "}
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

  /* -------- Why Choose Us Features (3 cards - NO ICONS) -------- */
  const whyChooseUsFeatures = [
    {
      title: "Expert Guidance",
      description:
        "Learn from top industry professionals providing tailored policies, techniques & real-world experience.",
    },
    {
      title: "Comprehensive Coverage",
      description:
        "Access a wide range of industry-leading policies to protect every aspect of your life.",
    },
    {
      title: "Seamless Claims Support",
      description:
        "Receive end-to-end assistance for quick, fair claims resolution & peace of mind. and auto insurance offerings. using data-driven campaigns that deliver measurable results.",
    },
  ];

  /* -------- Milestones (3 cards - NO ICONS) -------- */
  const milestones = [
    {
      title: "Founded with a Vision",
      description:
        "Established to provide transparent and client-focused insurance solutions.",
    },
    {
      title: "Expanded Service Portfolio",
      description:
        "Introduced comprehensive life and health insurance offerings.",
    },
    {
      title: "Specialized Home & Auto",
      description:
        "Launched dedicated services for property and vehicle protection. and auto insurance offerings. using data-driven campaigns that deliver measurable results.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-hidden font-body">
      <Navigation />

      {/* ------------------ HERO ------------------ */}
      <section className="relative h-[70vh] overflow-hidden pt-16 bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/image/about.jpg)',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>

        <div className=" mx-auto px-6 lg:px-12 relative z-20 text-center mt-24 lg:mt-32">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
              Your Reliable{' '}
              <span className="bg-gradient-to-r from-insurance-blue to-insurance-blue-accent bg-clip-text text-transparent">
                Partner
              </span>
            </h1>
 <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 sm:mb-12 leading-relaxed font-semibold drop-shadow-2xl animate-fade-in">
                <AnimatedText text=" Your trusted insurance partner helping families across North America make confident" />
                <AnimatedText
                  text=" protection decisions."
                  delay={0.6}
                  className="bg-gradient-to-r from-insurance-blue to-insurance-blue-accent bg-clip-text text-transparent font-bold drop-shadow-lg"
                />             
            </p>
          </motion.div>
        </div>
      </section>

      {/* ------------------ ABOUT OUR FIRM ------------------ */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
                About Our{" "}
                <span className="bg-gradient-to-r from-insurance-blue to-insurance-blue-accent bg-clip-text text-transparent">
                  Firm
                </span>
              </h2>
              <p className="text-sm text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                At Akshar Prospera, we pride ourselves on delivering tailored
                insurance solutions that genuinely protect what matters most.
                With over two decades of dedicated experience, our expert team
                is committed to guiding individuals and families through every
                stage of their insurance journey.
              </p>
              <div className="flex flex-row sm:flex-col gap-4 justify-center lg:justify-start mb-12">
  <Link
    to="/contact"
    className="inline-flex items-center px-4 py-3 bg-blue-600 text-white text-base font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:bg-blue-700"
  >
    Get a Quote <ArrowRight className="w-5 h-5 ml-2" />
  </Link>

  <Link
    to="/services"
    className="inline-flex items-center px-4 py-3 border-2 border-blue-600 text-blue-600 hover:bg-gradient-to-r from-insurance-blue to-insurance-blue-accent hover:textwhite text-base font-semibold rounded-xl transition-all duration-300 hover:bg-blue-50 hover:text-white"
  >
    Explore Services
  </Link>
</div>


              <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 text-left mt-8 max-w-lg mx-auto lg:mx-0">
                {firmStats.map((s, i) => (
                  <div
                    key={i}
                    className="group hover:scale-105 transition-transform duration-300   group relative overflow-hidden
                    bg-gradient-to-br from-white to-blue-50/30
                    border border-blue-100
                    rounded-lg p-2 
                    transition-all duration-500 ease-out
                    hover:shadow-xl hover:shadow-blue-500/10
                    hover:border-blue-300
                    hover:-translate-y-1
                    hover:scale-105"
                  >
                        <div className="text-3xl font-extrabold bg-gradient-to-r from-insurance-blue to-insurance-blue-accent bg-clip-text text-transparent">
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

      {/* ------------------ WHY CHOOSE US ------------------ */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-7xl relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choice {" "}<span className="bg-gradient-to-r from-insurance-blue to-insurance-blue-accent bg-clip-text text-transparent">Akshar Prospera</span> 
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Grid - First on mobile/tablet, Left on desktop */}
            <div className="order-1 lg:order-1">
              <div className="relative w-full max-w-md lg:max-w-lg h-[450px] sm:h-[500px] lg:h-[520px] mx-auto">
                {/* Main large image */}
                <div className="absolute top-20 right-10 w-[75%] h-[70%] rounded-3xl overflow-hidden border-4 border-gray-50 z-20 group">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1400"
                    alt="Team collaboration"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={handleImageError}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Top left small image */}
                <div className="absolute top-80 left-30 right-0 w-[45%] h-[35%] rounded-2xl overflow-hidden border-4 border-gray-50 z-40 group">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
                    alt="Professional meeting"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={handleImageError}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Bottom left small image */}
                <div className="absolute bottom-50 left-0 w-[48%] h-[40%] rounded-2xl overflow-hidden border-4 border-gray-50 z-30 group">
                  <img
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800"
                    alt="Team success"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={handleImageError}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>

            {/* Cards - Second on mobile/tablet, Right on desktop */}
            <div className="space-y-6 order-2 lg:order-2">
              {/* First Row - 2 Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyChooseUsFeatures.slice(0, 2).map((feature, index) => (
                  <div
                    key={index}
                    className="p-8 rounded-2xl shadow-lg border-2 border-gray-200 bg-white transition-all duration-300 transform  hover:shadow-xl hover:border-blue-300 group"
                  >
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-gradient transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-base leading-relaxed text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Second Row - 1 Card (Full Width) */}
              <div>
                <div className="p-8 rounded-2xl shadow-lg border-2 border-gray-200 bg-white transition-all duration-300 transform hover:shadow-xl hover:border-blue-300 group">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {whyChooseUsFeatures[2].title}
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600">
                    {whyChooseUsFeatures[2].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ MILESTONES ------------------ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Key{" "}
              <span className="bg-gradient-to-r from-insurance-blue to-insurance-blue-accent bg-clip-text text-transparent">
                Milestones
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Cards - Placed second for mobile, on the left for desktop */}
            <div className="space-y-6">
              {/* First Row - 2 Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {milestones.slice(0, 2).map((m, i) => (
                  <div
                    key={i}
                    className="p-8 rounded-2xl bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300 group"
                  >
                    <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gradient transition-colors">
                      {m.title}
                    </h4>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Second Row - 1 Card (Full Width) */}
              <div>
                <div className="p-8 rounded-2xl bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300 group">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {milestones[2].title}
                  </h4>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {milestones[2].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Image - Placed first for mobile, on the right for desktop */}
            <div className="order-first lg:order-last">
              <div className="relative w-full max-w-md lg:max-w-lg h-[520px] mx-auto">
                
                {/* Main Image */}
                <div className="absolute top-0 right-0 w-[75%] h-[75%] rounded-3xl overflow-hidden  border-4 border-gray-50">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1400"
                    alt="Main visual"
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                </div>

                {/* Secondary Image */}
                <div className="absolute bottom-0 left-0 w-[55%] h-[55%] rounded-3xl overflow-hidden border-4 border-gray-50">
                  <img
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"
                    alt="Secondary visual"
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                </div>

              </div>
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