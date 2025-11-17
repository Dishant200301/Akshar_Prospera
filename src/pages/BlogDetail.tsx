// src/pages/BlogDetails.tsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calendar, ArrowLeft, Clock, User, BookOpen, ArrowRight, Share2, User as UserIcon } from 'lucide-react';
import { samplePosts, slugify, BlogPost, BlogSection } from '../data/blogsData';
import { Helmet } from 'react-helmet';
import { motion, Variants } from 'framer-motion';

// --- Image Fallback Data and Helpers (unchanged) ---
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
    imgElement.style.display = 'none';
  }
};

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

// Default avatar for author
const defaultAuthorAvatar = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face';

const BlogDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = samplePosts.find(post => slugify(post.title) === slug);
  const [mainImageSrc, setMainImageSrc] = useState(blog?.image || '');

  useEffect(() => {
    if (blog) {
      setMainImageSrc(blog.image || getRandomFallbackImage());
    }
  }, [blog]);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col bg-white text-gray-900 font-body">
        <Navigation />
        <div className="flex-1 flex items-center justify-center p-8 text-center pt-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            className="max-w-md mx-auto bg-white p-8 rounded-xl border border-gray-200 shadow-lg"
          >
            <h1 className="text-3xl font-heading font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
            <p className="text-gray-600 mb-6">
              The blog post you are looking for does not exist or has been moved.
            </p>
            <Link
              to="/blogs"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-brown-600 text-white text-base font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blogs
            </Link>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  // Popular posts for sidebar (random 3, exclude current)
  const popularPosts = samplePosts
    .filter(post => slugify(post.title) !== slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

 

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-body">
      <Navigation />
      <Helmet>
        <title>{blog.title} | Akshar Prospera</title>
        <meta name="description" content={blog.excerpt || blog.subtitle || ''} />
        <meta name="author" content={blog.author || ''} />
        {mainImageSrc && <meta property="og:image" content={mainImageSrc} />}
      </Helmet>

      {/* Breadcrumbs (unchanged) */}
      <div className="bg-white pt-24 pb-4 bg-gradient-to-r from-green-50 via-yellow-50 to-brown-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-12 mt-6 md:mt-16 lg:mt-5 xl:pl-32">
          <nav className="flex items-center flex-wrap gap-x-2 gap-y-1 text-sm sm:text-base text-gray-600">
            <Link to="/" className="hover:text-green-600 transition-colors duration-200 font-medium whitespace-nowrap">
              Home
            </Link>
            <span className="text-gray-400 hidden sm:inline">&raquo;</span>
            <span className="text-gray-400 sm:hidden">/</span>
            <Link to="/blogs" className="hover:text-green-600 transition-colors duration-200 font-medium whitespace-nowrap">
              Blogs
            </Link>
            <span className="text-gray-400 hidden sm:inline">&raquo;</span>
            <span className="text-gray-400 sm:hidden">/</span>
            <span className="text-gray-900 font-medium truncate max-w-[100px] sm:max-w-md md:max-w-lg">
              {blog.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero Section: Full-width featured image with soft blur edges and slight overlay */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 z-10"></div> {/* Subtle gradient overlay */}
        <img
          src={mainImageSrc}
          alt={blog.title}
          className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover blur-sm" // Soft blur on entire image for edges effect
          onError={(e) => {
            const imgElement = e.target as HTMLImageElement;
            if (!fallbackImages.includes(imgElement.src)) {
              setMainImageSrc(getRandomFallbackImage());
            } else {
              imgElement.style.display = 'none';
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-20"></div> {/* Additional readability gradient */}
        <div className="relative z-30 flex flex-col justify-end h-full px-4 sm:px-6 lg:px-12 py-12 sm:py-16 md:py-20 text-center text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 leading-tight drop-shadow-lg">
              {blog.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-body max-w-3xl mx-auto opacity-90 drop-shadow-md">
              {blog.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Author + Meta Info Row */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center space-x-4">
              <img
                src={blog.authorAvatar || defaultAuthorAvatar}
                alt={blog.author}
                className="w-12 h-12 rounded-full object-cover shadow-md border-2 border-white"
                onError={handleImageError}
              />
              <div>
                <div className="flex items-center space-x-2">
                  <UserIcon className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-900">{blog.author}</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                {blog.category}
              </span>
              <div className="flex items-center space-x-2 text-gray-500">
                <Share2 className="w-4 h-4 hover:text-green-600 cursor-pointer transition-colors" />
                {/* Add more social icons as needed, e.g., Twitter, LinkedIn */}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Layout with Sidebar */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12 md:gap-16">
            {/* Main Content */}
            <motion.article className="lg:col-span-2 space-y-12 md:space-y-16" initial="hidden" animate="visible" variants={fadeInUpVariants}>
              {blog.sections && blog.sections.length > 0 ? (
                <div className="space-y-16 lg:space-y-20">
                  {blog.sections.map((section: BlogSection, index: number) => (
                    <motion.div
                      key={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      variants={fadeInUpVariants}
                      className="space-y-8"
                    >
                      {section.heading && (
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900">
                          {section.heading}
                        </h2>
                      )}
                      {section.layout === 'text-only' ? (
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: section.content }} />
                      ) : (
                        <div className={`grid gap-8 md:gap-12 ${section.layout === 'text-image' ? 'md:grid-cols-2 md:grid-flow-row-dense' : 'md:grid-cols-2'}`}>
                          <div>
                            <img
                              src={section.image || getRandomFallbackImage()}
                              alt={section.imageAlt || section.heading}
                              className="w-full h-auto rounded-2xl shadow-lg object-cover hover:scale-[1.02] transition-transform duration-300"
                              onError={handleImageError}
                            />
                          </div>
                          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed flex flex-col justify-center space-y-4">
                            <div dangerouslySetInnerHTML={{ __html: section.content }} />
                          </div>
                        </div>
                      )}
                      <hr className="border-gray-200 my-8" /> {/* Light gray divider */}
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUpVariants}>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8" dangerouslySetInnerHTML={{ __html: blog.fullContent || blog.excerpt || '' }} />
                </motion.div>
              )}
            </motion.article>

            {/* Sidebar: Popular Posts */}
            <motion.aside className="lg:col-span-1 space-y-6" initial="hidden" animate="visible" variants={fadeInUpVariants}>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-6 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-green-600" />
                  Popular Posts
                </h3>
                <div className="space-y-4">
                  {popularPosts.map((post) => (
                    <Link
                      key={slugify(post.title)}
                      to={`/blogs/${slugify(post.title)}`}
                      className="block p-4 rounded-xl hover:bg-green-50 transition-colors duration-200 border border-gray-100"
                    >
                      <img
                        src={post.image || getRandomFallbackImage()}
                        alt={post.title}
                        className="w-full h-24 object-cover rounded-lg mb-3"
                        onError={handleImageError}
                      />
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-2 mb-2">{post.title}</h4>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Author Info Box (unchanged, but with theme colors) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUpVariants}
        className="py-12 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-5xl mx-auto p-8 bg-white rounded-xl shadow-lg text-center border border-gray-200">
            <p className="text-lg font-heading font-semibold text-black mb-2">
              Written by: <span className="text-green-600">{blog.author || 'Akshar Prospera Team'}</span>
            </p>
            <p className="text-sm text-gray-700 font-body">
              Published on: <span className="font-medium text-black">{blog.date}</span>
            </p>
          </div>
        </div>
      </motion.section>

  
      <Footer />
    </div>
  );
};

export default BlogDetails;