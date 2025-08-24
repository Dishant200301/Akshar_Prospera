import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BookOpen, Calendar, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const AnimatedText = ({ text, delay = 0, className = '' }) => {
  const isGradient = className.includes('bg-gradient');
  
  return (
    <span className={isGradient ? '' : className}>
      {text.split(' ').map((word, index) => (
        <span
          key={index}
          className={`animate-word ${isGradient ? className : ''}`}
          style={{ animationDelay: `${delay + index * 0.05}s` }}
        >
          {word}{' '}
        </span>
      ))}
    </span>
  );
};

const samplePosts = [
  {
    title: '5 Things to Know Before Buying Travel Insurance',
    category: 'Travel Tips',
    readTime: '5 min read',
    date: 'Aug 10, 2025',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop&crop=center'
  },
  {
    title: 'Health Insurance Options for New Immigrants in Canada',
    category: 'Health Guide',
    readTime: '7 min read',
    date: 'Aug 7, 2025',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop&crop=center'
  },
  {
    title: 'Understanding Visitor Visa Insurance Requirements',
    category: 'Visitor Guide',
    readTime: '6 min read',
    date: 'Aug 2, 2025',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&crop=center'
  },
  {
    title: 'Life Insurance Planning for Young Families',
    category: 'Life Insurance',
    readTime: '8 min read',
    date: 'Jul 28, 2025',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&crop=center'
  },
  {
    title: 'Comparing Health Insurance Plans: HMO vs PPO',
    category: 'Health Guide',
    readTime: '6 min read',
    date: 'Jul 25, 2025',
    image: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=400&h=250&fit=crop&crop=center'
  },
  {
    title: 'Travel Insurance for Adventure Sports',
    category: 'Travel Tips',
    readTime: '7 min read',
    date: 'Jul 20, 2025',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&crop=center'
  }
];

const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

const Blogs: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[80vh] overflow-hidden pt-16 bg-black">
        {/* Background Image */}
        <div 
          className="absolute inset-0 transition-all duration-1000 ease-in-out opacity-100 z-10"
          style={{
            backgroundImage: 'url(/image/blogs.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10 h-full">
          <div className="flex flex-col justify-end h-full text-center pb-20">
            <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
                <span className="text-white drop-shadow-2xl font-extrabold">
                  Expert{' '}
                </span>
                <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-2xl font-extrabold">
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
        </div>
      </section>

      {/* Search / Filters (placeholder) */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto flex items-center gap-3 border-2 border-gray-200 rounded-xl px-4 py-3 bg-gradient-to-br from-white to-slate-50">
            <Search className="w-5 h-5 text-gray-500" />
            <input
              className="w-full bg-transparent outline-none text-gray-700"
              placeholder="Search blog posts (coming soon)"
            />
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {samplePosts.map((post) => {
              const slug = slugify(post.title);
              return (
                <Link
                  to={`/blogs/${slug}`}
                  key={slug}
                  className="group block rounded-xl border border-gray-200 bg-white overflow-hidden hover:border-blue-600/60 hover:shadow-md transition-all duration-300 max-w-sm"
                >
                  <div className="aspect-video bg-gray-100 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-medium">{post.category}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                      {post.title}
                    </h3>
                    <div className="text-xs text-gray-500 mb-3">{post.date}</div>
                    <div className="inline-flex items-center text-sm bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-medium">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
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


