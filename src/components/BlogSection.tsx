"use client";
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const OurWorkSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const allBlogs = [
    {
      title: "Navigating Mortgage Options for First-Time Homebuyers",
      image:
        "https://plus.unsplash.com/premium_photo-1680721444743-2a94a309a24a?auto=format&w=1200",
    },
    {
      title: "Understanding Critical Illness Insurance",
      image:
        "https://plus.unsplash.com/premium_photo-1661290355102-e40f95a6b6ba?auto=format&w=1200",
    },
    {
      title: "Your Complete Guide to Health Insurance Options",
      image:
        "https://images.unsplash.com/photo-1718128120449-74cc8535277d?auto=format&w=1200",
    },
  ];

  // Duplicate list → infinite loop
  const infiniteBlogs = [...allBlogs, ...allBlogs];

  const slugify = (title: string) =>
    title.toLowerCase().replace(/\s+/g, "-");

  // === Auto Slide Logic ===
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let autoplay: any;

    const startAutoSlide = () => {
      autoplay = setInterval(() => {
        container.scrollBy({ left: container.clientWidth, behavior: "smooth" });

        setTimeout(() => {
          if (container.scrollLeft >= container.scrollWidth / 2) {
            container.scrollTo({ left: 0, behavior: "instant" });
          }
        }, 500);
      }, 3000);
    };

    startAutoSlide();
    return () => clearInterval(autoplay);
  }, []);

  const scrollNext = () => {
    const container = scrollRef.current;
    if (!container) return;

    container.scrollBy({ left: container.clientWidth, behavior: "smooth" });

    setTimeout(() => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollTo({ left: 0, behavior: "instant" });
      }
    }, 300);
  };

  const scrollPrev = () => {
    const container = scrollRef.current;
    if (!container) return;

    if (container.scrollLeft === 0) {
      container.scrollTo({
        left: container.scrollWidth / 2,
        behavior: "instant",
      });
    }
    container.scrollBy({ left: -container.clientWidth, behavior: "smooth" });
  };

  return (
     <section className="py-20 sm:py-12 lg:py-8 bg-gray-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-12 max-w-6xl">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
          Insurance{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Insights
          </span>{" "}
          & Tips
        </h2>
        </motion.div>

        {/* MOBILE CAROUSEL */}
        <div className="relative sm:hidden">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
            style={{ scrollPadding: "0 15px" }}
          >
            {infiniteBlogs.map((blog, index) => {
              const slug = slugify(blog.title);
              return (
                <div
                  key={index}
                  className="w-full flex-shrink-0 snap-center px-4 py-4 "
                >
                  <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                    <Link to={`/blogs/${slug}`}>
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-56 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                          {blog.title}
                        </h3>
                        <div className="border-t border-gray-300 my-3"></div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">
                            Read More
                          </span>
                          <ChevronRight className="w-5 h-5" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ARROWS */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {allBlogs.map((blog, index) => {
            const slug = slugify(blog.title);
            return (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <Link to={`/blogs/${slug}`}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {blog.title}
                    </h3>
                    <div className="border-t border-gray-300 my-4"></div>
                    <div className="flex items-center justify-between">
                      <span>Read More</span>
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default OurWorkSection;
