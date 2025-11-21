import React, { useLayoutEffect, useRef, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Lenis from "lenis";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// ============================================================================
// Scroll Stack Item
// ============================================================================

const ScrollStackItem = ({
  children,
  itemClassName = "",
  style = {},
}) => (
  <div
    className={`scroll-stack-card absolute left-0 right-0 mx-auto ${itemClassName.trim()}`}
    style={{
      willChange: "transform, opacity",
      backfaceVisibility: "hidden",
      transformStyle: "flat",
      isolation: "isolate",
      ...style,
    }}
  >
    {children}
  </div>
);

// ============================================================================
// Scroll Stack Container
// ============================================================================

const ScrollStack = ({
  children,
  className = "",
 itemDistance=50, // height-spacing between cards
itemStackDistance=40, // how much they overlap when stuck
stackPosition="25%", // where stacking begins
}) => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const metricsRef = useRef({ cards: [], containerTop: 0, stackOffsetPx: 0 });

  const measure = useCallback(() => {
    if (!containerRef.current) return;

    const screenHeight = window.innerHeight;
    const stackOffsetPx = (parseFloat(stackPosition) / 100) * screenHeight;
    const containerRect = containerRef.current.getBoundingClientRect();
    const absoluteContainerTop = containerRect.top + window.scrollY;

    const cardMetrics = cardsRef.current.map((card, i) => {
      const originalTop = parseFloat(card.style.top || "0");
      return { el: card, originalTop, index: i };
    });

    metricsRef.current = {
      cards: cardMetrics,
      containerTop: absoluteContainerTop,
      stackOffsetPx,
    };
  }, [stackPosition]);

  const updateCards = useCallback(
    (scrollPos) => {
      const { cards, containerTop, stackOffsetPx } = metricsRef.current;

      cards.forEach((cardData, i) => {
        const { el, originalTop } = cardData;
        const cardAbsoluteTop = containerTop + originalTop;
        const stickPoint =
          cardAbsoluteTop - stackOffsetPx - i * itemStackDistance;

        let delta = 0;
        let scale = 1;
        let opacity = 1;
        let filter = 0;

        if (scrollPos > stickPoint) {
          delta = scrollPos - stickPoint;
          scale = Math.max(0, 1 - delta * 0);

          const nextCard = cards[i + 1];
          if (nextCard) {
            const nextCardAbsoluteTop =
              containerTop + nextCard.originalTop;
            const nextStickPoint =
              nextCardAbsoluteTop -
              stackOffsetPx -
              (i + 1) * itemStackDistance;

            if (scrollPos > nextStickPoint) {
              const overlap = scrollPos - nextStickPoint;
              opacity = Math.max(0, 1 - overlap * 0);
              filter = Math.min(0, overlap * 0);
            }
          }
        }

        el.style.transform = `translate3d(0, ${delta}px, 0) scale(${scale})`;
        el.style.opacity = opacity.toString();
        el.style.filter = filter > 0 ? `brightness(${1 - filter})` : "none";
      });
    },
    [itemStackDistance]
  );

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const cards = Array.from(
      containerRef.current.querySelectorAll(".scroll-stack-card")
    );
    cardsRef.current = cards;

    let currentTop = 0;
    cards.forEach((card, i) => {
      card.style.position = "absolute";
      card.style.top = `${currentTop}px`;
      card.style.zIndex = `${i + 10}`;

      const h = card.offsetHeight || 460;
      currentTop += h + itemDistance;
    });

    const totalScrollHeight = currentTop + window.innerHeight * 0.5;
    containerRef.current.style.height = `${totalScrollHeight}px`;

    measure();

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenis.on("scroll", ({ scroll }) => {
      updateCards(scroll);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const onResize = () => {
      measure();
      updateCards(lenis.scroll);
    };
    window.addEventListener("resize", onResize);

    return () => {
      lenis.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [itemDistance, measure, updateCards]);

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {children}
    </div>
  );
};

// ============================================================================
// DATA
// ============================================================================

const LOTTIE_URLS = {
  HEALTH: "https://lottie.host/f14039bd-802f-45cf-a854-b8f1c7733eb3/L7b5jKyXDd.lottie",
  TRAVEL: "https://lottie.host/0339e2dc-5552-460e-b5ed-f58851703937/QWxxEwAuHq.lottie",
  LIFE: "https://lottie.host/a52da1b6-52e4-4269-80df-2bee4421f5a7/0uLwNuVPKN.lottie",
  HOME: "https://lottie.host/af0ecafe-bebe-4dca-82e7-90d20f6a6735/AAUnV1KS7Z.lottie",
  AUTO: "https://lottie.host/eb1b58b5-3b70-4929-a9b3-16998849c5fe/JYWTHd5lTB.lottie",
};

// ============================================================================
// MAIN SECTION
// ============================================================================

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

 const CardContent = ({ service, isMobile = false }) => (
  <div className="flex flex-col items-center text-center w-full relative z-10">

    <div className="flex justify-center items-center mb-3 w-full shrink-0">
      <div
        className={`relative transition-transform duration-500 ease-out ${
          isMobile ? "w-32 h-32" : "w-40 h-40"
        }`}
      >
        <DotLottieReact
          src={service.lottieSrc}
          loop
          autoplay
          className="w-full h-full object-contain"
        />
      </div>
    </div>

    <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-2">
      {service.title}
    </h3>

    {/* 🔥 Removed flex-grow gap */}

    <Link
      to={service.link}
      className="
        w-full bg-transparent text-gray-900 border border-gray-200 hover:bg-gradient-to-br from-insurance-blue to-insurance-blue-accent
        py-3 px-4 rounded-xl font-bold tracking-wide
        hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-lg
        transition-all duration-300 ease-out inline-flex items-center justify-center text-sm
      "
    >
      <span className="mr-2">View Details</span>
      <ArrowRight className="w-4 h-4 transition-transform duration-300" />
    </Link>
  </div>
);


  return (
    <section className="py-20 lg:py-32 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16 lg:mb-24 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Comprehensive
            <span className="relative inline-block mx-3 text-blue-600">
              Insurance
            </span>
            Solutions
          </h2>
        
        </div>

        {/* MOBILE STACK */}
        <div className="block lg:hidden w-full max-w-md mx-auto relative">
          <ScrollStack itemDistance={10} itemStackDistance={20} stackPosition="0%">
            {services.map((service, index) => (
             <ScrollStackItem
  key={index}
  itemClassName="
    bg-white rounded-3xl 
  "
  style={{ minHeight: "auto" }}
>

                <div className="p-8 h-full flex flex-col bg-white relative">
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white to-transparent z-0 pointer-events-none" />
                  <div className="relative z-10 h-full flex ">
                    <CardContent service={service} isMobile />
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                group relative bg-white rounded-2xl p-6 
                border border-transparent transition-all duration-500 ease-out
                 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]
                h-full
              "
            >
              <CardContent service={service} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
