// blogs.tsx
"use client";

import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { ArrowRight, Search, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { samplePosts, slugify } from "../data/blogsData";
import { motion } from "framer-motion";

// Fallback Images
const fallbackImages = [
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800",
  "https://images.unsplash.com/photo-1510519138101-570d1dca3d6b?w=800",
  "https://images.unsplash.com/photo-1542435503-92144709f3e4?w=800",
];

const AnimatedText = ({ text, delay = 0, className = "" }) => {
  const isGradient = className.includes("bg-gradient");
  return (
    <span className={isGradient ? "" : className}>
      {text.split(" ").map((word, index) => (
        <span
          key={index}
          className={`animate-word inline-block ${isGradient ? className : ""}`}
          style={{ animationDelay: `${delay + index * 0}s` }}
        >
          {word}{" "}
        </span>
      ))}
    </span>
  );
};

const getRandomFallbackImage = () =>
  fallbackImages[Math.floor(Math.random() * fallbackImages.length)];

const handleImageError = (e) => {
  const img = e.target;
  if (!fallbackImages.includes(img.src)) {
    img.src = getRandomFallbackImage();
  } else {
    img.style.display = "none";
  }
};

// Categories
const allCategories = [
  "All Categories",
  ...new Set(samplePosts.map((post) => post.category)),
];

const Blogs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 1;

  const filteredPosts = samplePosts.filter((post) => {
    const bySearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const byCategory =
      selectedCategory === "All Categories" || post.category === selectedCategory;
    return bySearch && byCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIdx = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIdx, startIdx + postsPerPage);

  // PAGINATION FORMAT → 1 2 3 ... Next
  const visiblePages = 3;
  const pageArray = [...Array(totalPages)].map((_, i) => i + 1);
  const shownPages = pageArray.slice(0, visiblePages);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 overflow-x-hidden">
      <Navigation />

      {/* HERO SECTION (unchanged from your version) */}
      <section className="relative h-[65vh] md:h-[70vh] pt-16 bg-black flex items-center justify-center">
        <div
          className="absolute inset-0 transition-all duration-1000 ease-in-out opacity-100 z-10"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop&q=60)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/20 to-black/10"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white drop-shadow-lg">
              Expert{" "}
              <span className="bg-gradient-to-r from-insurance-blue to-insurance-blue-accent bg-clip-text text-transparent drop-shadow-lg">
                Insights
              </span>
            </h1>
            <p className="text-gray-100 mt-5 text-lg font-medium">
              <AnimatedText text="Stay informed with our latest articles and guides" />
              <AnimatedText
                text="insurance decisions"
                delay={0.6}
                className="bg-gradient-to-r from-insurance-blue to-insurance-blue-accent bg-clip-text text-transparent font-bold"
              />
            </p>
          </div>
        </div>
      </section>

      {/* SEARCH / FILTER SECTION (unchanged) */}
      <section className="py-8 -mt-20 relative z-30">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="bg-white backdrop-blur-xl p-6 rounded-3xl shadow-xl border flex flex-col gap-4 sm:flex-row">
            <div className="flex-1 flex items-center gap-3 bg-gray-50 border rounded-2xl px-5 py-3">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                className="w-full bg-transparent outline-none"
                placeholder="Search articles, guides, tips..."
                value={searchTerm}
                onChange={(e) => {
                  setCurrentPage(1);
                  setSearchTerm(e.target.value);
                }}
              />
            </div>

            <div className="relative min-w-[160px]">
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setCurrentPage(1);
                  setSelectedCategory(e.target.value);
                }}
                className="w-full bg-gray-50 border px-4 py-3 rounded-2xl appearance-none font-medium pr-10"
              >
                {allCategories.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* BLOG LIST + PAGINATION */}
      <section className="flex-1 pb-24">
        <div className="container mx-auto px-4 lg:px-12">


          {/* ================= MOBILE: Paginated Cards ================= */}
          <div className="block sm:hidden">

            {paginatedPosts.map((post, i) => {
              const slug = slugify(post.title);

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mb-6"
                >
                  <Link to={`/blogs/${slug}`}>
                    <article className="bg-white rounded-3xl shadow-lg border">
                      <img
                        src={post.image || getRandomFallbackImage()}
                        onError={handleImageError}
                        className="aspect-video w-full object-cover rounded-t-3xl"
                      />
                      <div className="p-5">
                        <span className="text-xs bg-blue-50 text-blue-600 py-1 px-3 rounded-xl">
                          {post.category}
                        </span>
                        <h3 className="text-base font-semibold mt-3 line-clamp-2">
                          {post.title}
                        </h3>
                        <div className="flex justify-between items-center text-blue-600 mt-4">
                          <span>Read More</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              );
            })}


            {/* ================= PAGINATION: 1 2 3 … Next ================= */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-3 mt-6">

                {/* First few page buttons */}
                {shownPages.map((p) => (
                  <button
                    key={p}
                    onClick={() => setCurrentPage(p)}
                    className={`px-4 py-2 rounded-full ${
                      currentPage === p
                        ? "bg-gradient-to-r from-insurance-blue to-insurance-blue-accent text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {p}
                  </button>
                ))}

                {/* Ellipsis */}
                {totalPages > visiblePages && (
                  <span className="text-gray-500 text-lg font-semibold">...</span>
                )}

                {/* NEXT */}
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="px-4 py-2 bg-gradient-to-r from-insurance-blue to-insurance-blue-accent text-white rounded-full disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            )}
          </div>


          {/* ================= DESKTOP GRID (unchanged) ================= */}
          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredPosts.map((post, i) => {
              const slug = slugify(post.title);

              return (
                <Link key={i} to={`/blogs/${slug}`}>
                  <div className="bg-white rounded-3xl border shadow hover:shadow-xl transition">
                    <img
                      src={post.image || getRandomFallbackImage()}
                      onError={handleImageError}
                      className="aspect-video w-full object-cover rounded-t-3xl"
                    />
                    <div className="p-6">
                      <h3 className="font-semibold line-clamp-2">{post.title}</h3>
                      <div className="flex justify-between items-center text-blue-600 mt-4">
                        <span>Read More</span>
                        <ArrowRight />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
