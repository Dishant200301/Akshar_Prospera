import React, { useLayoutEffect, useRef, useCallback } from "react";
import Lenis from "lenis";

const ScrollStack = ({
  children,
  className = "",
  itemDistance = 50,
  itemStackDistance = 40,
  stackPosition = "25%",
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

        // 👉 LAST CARD SHOULD NOT PIN / STICK
        if (i === cards.length - 1) {
          // Last card scrolls naturally into page, not pinned
el.style.position = "relative";
el.style.top = "0px";
el.style.transform = "none";
el.style.opacity = "1";

          return;
        }

        let delta = 0;
        let opacity = 1;

        if (scrollPos > stickPoint) {
          delta = scrollPos - stickPoint;

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
              opacity = Math.max(0, 1 - overlap * 0.0025);
            }
          }
        }

        el.style.transform = `translate3d(0, ${delta}px, 0)`;
        el.style.opacity = opacity.toString();
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

    // 🔥 FIX: no empty extra space, footer appears instantly
// ensure enough space for footer below last card
const totalScrollHeight = currentTop + window.innerHeight * 0.2;
    containerRef.current.style.height = `${totalScrollHeight}px`;

    measure();

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });

    lenis.on("scroll", ({ scroll }) => {
      updateCards(scroll);
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
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

export default ScrollStack;
