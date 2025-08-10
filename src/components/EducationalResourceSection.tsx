import React from 'react';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';

const EducationalResourceSection = () => {
  const resources = [
    {
      title: '5 Things to Know Before Buying Travel Insurance',
      category: 'Travel Tips',
      readTime: '5 min read',
      image: '/placeholder.svg'
    },
    {
      title: 'Health Insurance Options for New Immigrants in Canada',
      category: 'Health Guide',
      readTime: '7 min read',
      image: '/placeholder.svg'
    },
    {
      title: 'Understanding Visitor Visa Insurance Requirements',
      category: 'Visitor Guide',
      readTime: '6 min read',
      image: '/placeholder.svg'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-section-title">Insurance Insights & Tips</h2>
          <p className="text-section-subtitle max-w-3xl mx-auto">
            Stay informed with our latest articles and guides to help you make the best insurance decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 cursor-pointer group">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <BookOpen className="w-12 h-12 text-gray-400" />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-xs font-medium text-insurance-blue bg-insurance-blue-light/20 px-2 py-1 rounded-full">
                    {resource.category}
                  </span>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="w-3 h-3 mr-1" />
                    {resource.readTime}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-insurance-blue transition-colors">
                  {resource.title}
                </h3>
                <button className="inline-flex items-center text-insurance-blue font-medium hover:text-insurance-blue-dark transition-colors group-hover:translate-x-1 transition-transform">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-outline">
            View All Resources
          </button>
        </div>
      </div>
    </section>
  );
};

export default EducationalResourceSection;
