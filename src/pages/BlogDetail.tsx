import React, { useEffect } from 'react';
import { Calendar, Clock, User, Tag, ArrowRight, TrendingUp, ChevronRight } from 'lucide-react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { samplePosts, slugify } from '../data/blogsData';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AdvisorCard from '@/components/AdvisorCard';

const BlogDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Find the post based on the slug
  const post = samplePosts.find(p => slugify(p.title) === slug);

  // Redirect to 404 or blogs list if post not found
  useEffect(() => {
    if (!post && slug) {
      // Optional: navigate('/404');
      // For now, just log or let it render a "not found" state
      console.warn(`Blog post not found for slug: ${slug}`);
    }
  }, [post, slug, navigate]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h2>
            <Link to="/blogs" className="text-insurance-blue hover:underline">
              Return to Blogs
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Filter related posts (exclude current post)
  const relatedPosts = samplePosts
    .filter(p => p.title !== post.title)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />

      {/* Breadcrumb Header */}
      <div className=" lg:md:pt-24 pt-16 pb-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-12 mt-6 md:mt-16 lg:mt-5 xl:pl-12">
          <nav className="flex items-center flex-wrap gap-x-2 gap-y-1 text-sm sm:text-base text-gray-600 pt-10 md:pt-0">
            <Link to="/" className="hover:text-green-600 transition-colors duration-200 font-medium whitespace-nowrap">Home</Link>
            <span className="text-gray-400 hidden sm:inline">/</span>
            <span className="text-gray-400 sm:hidden">/</span>
            <Link to="/blogs" className="hover:text-green-600 transition-colors duration-200 font-medium whitespace-nowrap">Blogs</Link>
            <span className="text-gray-400 hidden sm:inline">/</span>
            <span className="text-gray-400 sm:hidden">/</span>
            <span className="text-gray-900 font-medium truncate max-w-[100px] sm:max-w-md md:max-w-lg">{post.title}</span>
          </nav>
        </div>
      </div>

      <div className="flex-1">
        {/* Hero Section */}
        <section className="pt-8 pb-8 px-4 sm:px-6 md:px-0 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center lg:text-left mb-8">
              {/* <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
                <span className="inline-flex items-center px-4 py-1.5 bg-blue-50 text-insurance-blue rounded-full text-sm font-medium">
                  <Tag className="w-3.5 h-3.5 mr-1.5" />
                  {post.category}
                </span>
              </div> */}
              
              <h1 className="text-3xl sm:text-4xl lg:text-4 xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>
              
              {/* <p className="text-lg sm:text-xl text-gray-600 max-w-7xl mx-auto lg:mx-0 mb-6 leading-relaxed">
                {post.subtitle}
              </p> */}
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 border-b border-gray-200 pb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                    <User className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-gray-900">{post.author || 'Akshar Prospera'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="px-4 sm:px-6 lg:px-12 mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video sm:aspect-[21/9]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="px-4 sm:px-6 md:px-6 lg:px-12 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left Column - Main Article */}
              <article className="lg:col-span-2 space-y-8">
                {post.sections ? (
                  post.sections.map((section, index) => (
                    <div key={index} className={`bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 ${index % 2 === 1 ? 'bg-gradient-to-br from-blue-50/50 to-transparent' : ''}`}>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                        {section.heading}
                      </h2>
                      
                      {/* {section.layout === 'image-text' && section.image && (
                        <div className="mb-6 rounded-xl overflow-hidden shadow-md">
                          <img src={section.image} alt={section.imageAlt || section.heading} className="w-full h-auto object-cover" />
                        </div>
                      )} */}

                      <div 
                        className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: section.content }}
                      />
{/* 
                      {section.layout === 'text-image' && section.image && (
                        <div className="mt-8 rounded-xl overflow-hidden shadow-md">
                          <img src={section.image} alt={section.imageAlt || section.heading} className="w-full h-auto object-cover" />
                        </div>
                      )} */}
                    </div>
                  ))
                ) : (
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
                    <div 
                      className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: post.fullContent || '' }}
                    />
                  </div>
                )}

                {/* CTA Section */}
                {/* <div className="rounded-2xl p-8 text-white shadow-lg mt-12">
                 <AdvisorCard/>
                </div> */}
              </article>

              {/* Right Sidebar - Popular Posts */}
              <aside className="hidden lg:block space-y-8">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 pb-4 border-b border-gray-100">
                    <TrendingUp className="w-5 h-5 text-insurance-blue" />
                    Related Posts
                  </h3>
                  <div className="space-y-6">
                    {relatedPosts.map((p, i) => (
                      <Link key={i} to={`/blogs/${slugify(p.title)}`} className="block group">
                        <div className="flex gap-4 items-start">
                          <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden shadow-sm">
                            <img 
                              src={p.image} 
                              alt={p.title} 
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-insurance-blue transition-colors line-clamp-2 text-sm leading-snug">
                              {p.title}
                            </h4>
                            <span className="text-xs text-gray-500 flex items-center gap-1 mt-2">
                              <Calendar className="w-3 h-3" />
                              {p.date}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-4">Categories</h4>
                    <div className="flex flex-wrap gap-2">
                      {Array.from(new Set(samplePosts.map(p => p.category))).map((cat, idx) => (
                        <Link 
                          key={idx} 
                          to="/blogs" 
                          className="px-3 py-1.5 bg-gray-50 text-gray-600 rounded-lg text-xs font-medium hover:bg-blue-50 hover:text-insurance-blue transition-colors"
                        >
                          {cat}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogDetails;