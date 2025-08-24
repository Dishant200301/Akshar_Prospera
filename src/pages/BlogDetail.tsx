import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BookOpen, ArrowLeft } from 'lucide-react';

const BlogDetail: React.FC = () => {
  const { slug } = useParams();

  // Sample blog data - in a real app, this would come from an API
  const blog = {
    title: (slug || '')
      .split('-')
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(' '),
    image: null, // Set to null for no image, or provide image URL like '/image/blog1.jpg'
    author: 'Akshar Prospera',
    readTime: '7 min read',
    content: 'This is a placeholder for the blog content. In production, content would be loaded based on the URL slug and rendered here with rich formatting and media.'
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative h-[80vh] overflow-hidden pt-16 bg-blue-100">
        {/* Background Image - if blog has an image, show it, otherwise just light blue background */}
        {blog?.image ? (
          <div 
            className="absolute inset-0 transition-all duration-1000 ease-in-out opacity-100 z-10"
            style={{
              backgroundImage: `url(${blog.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Light overlay to maintain readability */}
            <div className="absolute inset-0 bg-blue-100/60"></div>
          </div>
        ) : null}
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10 h-full">
          <div className="flex flex-col justify-center h-full text-center">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight text-gray-900">
                {blog.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium">
                Author: {blog.author}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <p>{blog.content}</p>
            <p>
              You can navigate back to the blogs list to read more articles about insurance insights and tips.
            </p>
            <Link to="/blogs" className="inline-flex items-center text-blue-600 font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blogs
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogDetail;


