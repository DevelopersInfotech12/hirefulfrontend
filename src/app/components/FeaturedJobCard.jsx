import React from 'react';
import { MapPin, Bookmark } from 'lucide-react';

const FeaturedJobCard = ({ job, onViewDetails, onBookmark }) => {
  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div
      className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-teal-200 transition-all duration-300 cursor-pointer flex flex-col"
      onClick={() => onViewDetails(job)}
    >
      {/* Company Logo and Name - Same Row */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center overflow-hidden flex-shrink-0">
          {job.logo ? (
            <img
              src={job.logo}
              alt={`${job.company} logo`}
              className="w-10 h-10 object-contain"
            />
          ) : (
            <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
              <span className="text-teal-700 font-bold text-lg">
                {job.company.charAt(0)}
              </span>
            </div>
          )}
        </div>
        <h4 className="text-base font-semibold text-gray-900">
          {job.company}
        </h4>
      </div>

      {/* Job Title - Left Aligned */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 leading-tight text-left">
          {job.title}
        </h3>
      </div>

      {/* Location/Mode Badge */}
      {(job.mode || job.location) && (
        <div className="mb-3">
          <span className="inline-flex items-center gap-1.5 text-sm text-pink-600 bg-pink-50 px-3 py-0.5 rounded">
            <span>📍</span>
            {job.location}
          </span>
        </div>
      )}

      {/* Category, Experience, Education */}
      <div className="space-y-2 mb-4">
        {job.category && (
          <div className="flex gap-2 items-center">
            <span className="text-sm text-gray-500">Category:</span>
            <span className="text-sm font-medium text-gray-900">{job.category}</span>
          </div>
        )}
        {job.experience && (
          <div className="flex gap-2 items-center">
            <span className="text-sm text-gray-500">Experience:</span>
            <span className="text-sm font-medium text-gray-900">{job.experience}</span>
          </div>
        )}
        {job.education && (
          <div className=" gap-2">
            <span className="text-sm text-gray-500 mr-2">Education:</span>
            <span className="text-sm font-medium text-gray-900">{job.education}</span>
          </div>
        )}
      </div>

      {/* Preferred Skills */}
     {/* Preferred Skills */}
      {job.tags && job.tags.length > 0 && (
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-900 mb-2">
            Preferred Skills:
          </p>
          <div className="flex flex-wrap gap-2">
            {job.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs bg-teal-50 text-teal-700 px-2.5 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Spacer to push button to bottom */}
      <div className="flex-grow"></div>

      {/* View Details Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onViewDetails(job);
        }}
        className="w-full py-3 text-sm font-semibold bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors"
      >
        View Details
      </button>
    </div>
  );
};

export default FeaturedJobCard;