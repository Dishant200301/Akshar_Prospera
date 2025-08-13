import React from 'react';
import { BookOpen, Calendar, ArrowRight, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const allBlogs = [
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

  // Get any 3 random blogs from the list
  const getRandomBlogs = () => {
    const shuffled = [...allBlogs].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  const blogs = getRandomBlogs();

  const slugify = (title: string) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Lightbulb className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Blogs
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Insurance
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Insights</span>
            <span className="text-gray-900"> & Tips</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Stay informed with our latest articles and guides to help you make the best insurance decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {blogs.map((blog, index) => {
            const slug = slugify(blog.title);
            return (
              <Link
                to={`/blogs/${slug}`}
                key={index}
                className="group block rounded-xl border border-gray-200 bg-white overflow-hidden hover:border-blue-600/60 hover:shadow-md transition-all duration-300 max-w-sm mx-auto sm:mx-0"
              >
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-medium">{blog.category}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {blog.readTime}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                    {blog.title}
                  </h3>
                  <div className="text-xs text-gray-500 mb-3">{blog.date}</div>
                  <div className="inline-flex items-center text-sm bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-medium">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <a href="/blogs" className="bg-white text-blue-600 border-2 border-blue-600 px-4 sm:px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:bg-gradient-to-r transition-all duration-200 inline-flex items-center justify-center shadow-sm">
            View All Blogs
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
