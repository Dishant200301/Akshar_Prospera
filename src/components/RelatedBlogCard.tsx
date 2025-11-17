import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import HighlightedTitle from './HighlightedTitle.tsx';

interface RelatedBlogCardProps {
  slug: string;
  title: string;
  image: string;
  publishDate: string;
  description: string;
}

const RelatedBlogCard: React.FC<RelatedBlogCardProps> = ({
  slug,
  title,
  image,
  publishDate,
  description,
}) => {

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Link
      to={`/blogs/${slug}`}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-[1.03] border border-gray-100"
    >
      {/* Image */}
      <div className="relative w-full h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Date Badge */}
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-4 h-4 text-orange-500" />
          <p className="text-xs font-medium text-gray-500">
            {formatDate(publishDate)}
          </p>
        </div>
        
        {/* Title */}
        <HighlightedTitle
          title={title}
          highlightWord="Insurance"
          className="text-lg md:text-xl font-bold leading-tight mb-4 flex-grow text-gray-900 transition-colors duration-300"
        />

        <p className="text-sm text-gray-500 mb-4">
          {description}
        </p>
        
        {/* Read More Link */}
        <div className="flex items-center gap-2 text-sm font-semibold mt-auto text-orange-600 group-hover:gap-3 transition-all duration-300">
          Read More
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
};

export default RelatedBlogCard;