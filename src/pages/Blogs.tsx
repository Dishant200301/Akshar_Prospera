import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BookOpen, Calendar, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 min-h-[75vh] flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-left max-w-2xl lg:max-w-xl xl:max-w-2xl ml-16 sm:ml-24 lg:ml-32">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Blogs
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Expert <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Insights</span></h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl lg:max-w-xl xl:max-w-2xl">
              Explore our latest articles and expert tips to make smarter decisions about your insurance needs.
            </p>
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


