"use client";

import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import FeaturedJobCard from './FeaturedJobCard';

const HomeCompTwo = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Fetch featured jobs from API
  useEffect(() => {
    const fetchFeaturedJobs = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/jobs/featured`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch featured jobs');
        }

        const data = await response.json();
        setJobs(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching featured jobs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedJobs();
  }, []);

  // Handle View Details
  const handleViewDetails = (job) => {
    const jobId = job._id || job.id;

    if (job.department?.toLowerCase() === "tech") {
      router.push(`/tech/${jobId}`);
    } else {
      router.push(`/non-tech/${jobId}`);
    }
  };

  // Handle Bookmark
  const handleBookmark = (job) => {
    // Add your bookmark logic here
    console.log('Bookmarked:', job);
  };

  // Loading state
  if (loading) {
    return (
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <Loader2 className="w-12 h-12 text-teal-600 animate-spin mx-auto mb-4" />
              <p className="text-gray-600">Loading featured jobs...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <p className="text-red-600 mb-2">Error loading jobs</p>
              <p className="text-gray-600 text-sm">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // No jobs found
  if (jobs.length === 0) {
    return (
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Jobs
            </h2>
          </div>
          <div className="flex items-center justify-center min-h-[200px]">
            <p className="text-gray-600">No featured jobs available at the moment.</p>
          </div>
        </div>
      </div>
    );
  }

  // Limit to 8 jobs (2 rows of 4 columns)
  const displayedJobs = jobs.slice(0, 8);

  return (
    <div className="py-8 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className='text-teal-600'>Jobs</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore top opportunities across Tech and Non-Tech domains from leading global brands.
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedJobs.map((job) => (
            <FeaturedJobCard
              key={job._id}
              job={job}
              onViewDetails={handleViewDetails}
              onBookmark={handleBookmark}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCompTwo;