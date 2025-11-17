import React from 'react'
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { samplePosts, slugify, BlogPost, BlogSection } from '../data/blogsData';
import 
import { slugify } from '../utils/slugify';
// Framer Motion variants (unchanged)
const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.3, 0.5, 0.4, 0.9],
    },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

 // Related blogs (same category, exclude current)
  const relatedBlogs = samplePosts
    .filter(post => post.category === blog.category && slugify(post.title) !== slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

const RelatedBlogs:React.FC = () => {
  return (
    <>
    <div>
        {/* Related Blogs (adapted with theme) */}
      {relatedBlogs.length > 0 && (
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInUpVariants}
              className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-10 md:mb-12 text-center"
            >
              More from {blog.category}
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto"
            >
              {relatedBlogs.map((relatedBlog: BlogPost) => (
                <motion.div
                  key={slugify(relatedBlog.title)}
                  variants={fadeInUpVariants}
                  className="group block rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <Link to={`/blogs/${slugify(relatedBlog.title)}`} className="block h-full">
                    <div className="p-4">
                      <div className="aspect-video overflow-hidden rounded-xl">
                        <img
                          src={relatedBlog.image || getRandomFallbackImage()}
                          alt={relatedBlog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          onError={handleImageError}
                        />
                      </div>
                    </div>
                    <div className="px-6 pb-6 flex flex-col">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-600 mb-3">
                        <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                          {relatedBlog.category}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2 min-h-[3.5rem] leading-snug mb-4">
                        {relatedBlog.title}
                      </h3>
                      <div className="border-t border-gray-200 my-4"></div>
                      <div className="flex items-center justify-between group-hover:text-green-600 transition-colors">
                        <span className="text-sm sm:text-base font-medium">Read More</span>
                        <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}
      </div>
    </>
  )
}

export default RelatedBlogs

