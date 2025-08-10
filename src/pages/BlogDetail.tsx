import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BookOpen, ArrowLeft } from 'lucide-react';

const BlogDetail: React.FC = () => {
  const { slug } = useParams();

  // In a real app, fetch by slug. For now, render the slug as title-case.
  const title = (slug || '')
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ');

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-24 pb-10 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Blog
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h1>
            <p className="text-gray-600">By Akshar Prospera • 7 min read</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <p>
              This is a placeholder for the blog content. In production, content would be loaded based on
              the URL slug and rendered here with rich formatting and media.
            </p>
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


