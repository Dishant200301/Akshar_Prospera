import React from 'react';
import { BookOpen, Calendar, ArrowRight, Lightbulb } from 'lucide-react';

const BlogSection = () => {
  const blogs = [
    {
      title: '5 Things to Know Before Buying Travel Insurance',
      category: 'Travel Tips',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop&crop=center'
    },
    {
      title: 'Health Insurance Options for New Immigrants in Canada',
      category: 'Health Guide',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop&crop=center'
    },
    {
      title: 'Understanding Visitor Visa Insurance Requirements',
      category: 'Visitor Guide',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&crop=center'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Lightbulb className="w-4 h-4 mr-2" />
            Blogs
          </div>
          <h2 className="text-section-title">Insurance Insights & Tips</h2>
          <p className="text-section-subtitle max-w-3xl mx-auto">
            Stay informed with our latest articles and guides to help you make the best insurance decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group max-w-sm">
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-xs font-medium text-blue-700 bg-blue-200 px-2 py-1 rounded-full">
                    {blog.category}
                  </span>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <Calendar className="w-3 h-3 mr-1" />
                    {blog.readTime}
                  </div>
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors group-hover:translate-x-1 transition-transform text-sm">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/blogs" className="inline-flex items-center px-6 py-3 bg-white text-insurance-blue border-2 border-insurance-blue rounded-lg font-semibold hover:bg-insurance-blue hover:text-white transition-all duration-200 shadow-sm">
            View All Blogs
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
