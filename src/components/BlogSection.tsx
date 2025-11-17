"use client";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const OurWorkSection: React.FC = () => {
  const colors = {
    border: "#6b7280", // Tailwind gray-500
    textDark: "#111827",
  };

  const allBlogs = [
    {
      title: "Understanding Health Insurance: A Complete Guide for Families",
      tags: ["Health Insurance"],
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop",
    },
    {
      title:
        "Top 5 Tips for Choosing the Right Travel Insurance Plan and Staying Safe Abroad",
      tags: ["Travel Insurance"],
      image:
        "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsJTIwaW5zdXJhbmNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    },
    {
      title: "Life Insurance 101: Protecting Your Family's Future",
      tags: ["Life Insurance"],
      image:
        "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2000&auto=format&fit=crop",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slugify = (title: string) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Insurance{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Insights
            </span>{" "}
            & Tips
          </h2>
         
        </div>

        {/* Responsive Blog Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
        >
          {allBlogs.map((blog, index) => {
            const slug = slugify(blog.title);
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group rounded-3xl overflow-hidden bg-white border border-gray-500 transition-all duration-300 hover:shadow-lg"
              >
                <Link to={`/blogs/${slug}`} className="block h-full">
                  {/* Blog Image */}
                  <div className="p-4">
                    <div className="overflow-hidden rounded-sm">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-auto object-cover rounded-sm group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Blog Info */}
                  <div className="px-6 pb-6 flex flex-col">
                    {/* Title (Force 2 lines) */}
                    <h1 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 line-clamp-2 min-h-[3.5rem] leading-snug">
                      {blog.title}
                    </h1>

                    {/* Divider Line */}
                    <div className="border-t border-gray-500 my-4"></div>

                    {/* Read More */}
                    <div className="flex items-center justify-between group-hover:text-blue-600 transition-colors">
                      <span className="text-sm sm:text-base font-medium">
                        Read More
                      </span>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default OurWorkSection;
