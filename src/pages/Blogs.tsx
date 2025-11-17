// blogs.tsx
"use client";
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BookOpen, Calendar, ArrowRight, Search, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { samplePosts, slugify } from '../data/blogsData'; // Ensure correct path for blogsData
import { motion } from 'framer-motion';

// Helper component for animated text
const AnimatedText = ({ text, delay = 0, className = '' }) => {
  const isGradient = className.includes('bg-gradient');
  
  return (
    <span className={isGradient ? '' : className}>
      {text.split(' ').map((word, index) => (
        <span
          key={index}
          className={`animate-word inline-block ${isGradient ? className : ''}`}
          style={{ animationDelay: `${delay + index * 0.05}s` }}
        >
          {word}{' '}
        </span>
      ))}
    </span>
  );
};

// --- Start: Image Fallback Data and Helpers (Copied from BlogDetails.tsx) ---
const fallbackImages: string[] = [
  'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9mZmljZSUyMGxhbmRzY2FwZXxlbnwwfHwwfHwwfHww',
  'https://images.unsplash.com/photo-1510519138101-570d1dca3d6b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXIlMjBzdHVkeXxlbnwwfHwwfHwwfDA%3D',
  'https://images.unsplash.com/photo-1542435503-92144709f3e4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2clMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsb2clMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsb2clMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1498049794561-7780e723ee3d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRpZ2l0YWwlMjBibG9nfGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1487017159836-417e0885c1d1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJsb2clMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww',
];

const getRandomFallbackImage = (): string => {
  const randomIndex = Math.floor(Math.random() * fallbackImages.length);
  return fallbackImages[randomIndex];
};

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const imgElement = e.target as HTMLImageElement;
  if (!fallbackImages.includes(imgElement.src)) {
    imgElement.src = getRandomFallbackImage();
  } else {
    imgElement.style.display = 'none'; // If even fallback fails, hide it
  }
};
// --- End: Image Fallback Data and Helpers ---

// Dynamically get categories from samplePosts
const allCategories = ['All Categories', ...new Set(samplePosts.map(post => post.category))];

// Framer Motion Variants - Copied from OurWorkSection
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
// End Framer Motion Variants

const Blogs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const filteredPosts = samplePosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />

      {/* Hero Section - Kept as is */}
      <section className="relative h-[65vh] md:h-[70vh] overflow-hidden pt-16 bg-black flex items-center justify-center">
        <div 
          className="absolute inset-0 transition-all duration-1000 ease-in-out opacity-100 z-10"
          style={{
            backgroundImage: 'url(/image/blogs.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight">
              <span className="text-white drop-shadow-lg">Expert </span>
              <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg">
                Insights
              </span>
            </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 sm:mb-12 leading-relaxed font-semibold drop-shadow-2xl animate-fade-in">
              <AnimatedText text="Stay informed with our latest articles and guides to help you make the best" />
              <AnimatedText 
                text="insurance decisions" 
                delay={0.6}
                className="bg-gradient-to-r from-blue-300 to-indigo-400 bg-clip-text text-transparent font-bold drop-shadow-lg"
              />
            </p>
          </div>
        </div>
      </section>

      {/* Search / Filters Section - Kept as is */}
      <section className="py-8 -mt-20 relative z-30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4 bg-white p-5 rounded-2xl shadow-xl border border-gray-100">
            {/* Search Input */}
            <div className="flex-1 flex items-center gap-3 border border-gray-200 rounded-full px-5 py-3 bg-white w-full sm:w-auto">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Dropdown */}
            <div className="relative w-full sm:w-auto min-w-[200px]">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-5 pr-10 rounded-full leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
              >
                {allCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section - UPDATED with OurWorkSection design */}
      <section className="py-12 md:py-16 bg-gray-50 flex-1">
        <div className="container mx-auto px-6 lg:px-12">
          {filteredPosts.length === 0 ? (
            <div className="text-center text-gray-600 text-lg py-10">
              No blog posts found matching your criteria.
            </div>
          ) : (
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {filteredPosts.map((post, index) => {
                const slug = slugify(post.title);
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group block rounded-3xl bg-white border border-gray-500 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <Link to={`/blogs/${slug}`} className="block h-full">
                      {/* Blog Image */}
                      <div className="p-4"> {/* Padding around the image */}
                        <div className="aspect-video overflow-hidden rounded-sm"> {/* Combined aspect ratio with inner rounded corners */}
                          <img
                            src={post.image || getRandomFallbackImage()} // Use fallback here
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                            onError={handleImageError} // Error handler
                          />
                        </div>
                      </div>

                      {/* Blog Info */}
                      <div className="px-6 pb-6 flex flex-col">
                        {/* Meta Info (Category, Read Time, Date) - UPDATED STYLING */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-600 mb-3">
                          {/* Category */}
                          <span className="inline-block px-3 py-1 rounded-xl bg-blue-100 text-blue-700 text-sm font-medium">
                            {post.category}
                          </span>

                         
                        </div>

                        {/* Title */}
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 min-h-[3.5rem] leading-snug mb-4">
                          {post.title}
                        </h3>

                        {/* Divider Line */}
                        <div className="border-t border-gray-500 my-4"></div>

                        {/* Read More */}
                        <div className="flex items-center justify-between group-hover:text-blue-600 transition-colors">
                          <span className="text-sm sm:text-base font-medium">
                            Read More
                          </span>
                          <ArrowRight
                            className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;