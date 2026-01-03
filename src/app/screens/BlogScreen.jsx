'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, Heart, Clock, Calendar, User, ArrowRight, Shield } from 'lucide-react';
import { blogData } from '@/app/data/blogData';
import PageHeroSection from '../components/PageHeroSection';

export default function BlogScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(blogData.map(blog => blog.category))];

  const filteredBlogs = selectedCategory === 'All'
    ? blogData
    : blogData.filter(blog => blog.category === selectedCategory);

  const featuredBlogs = blogData.filter(blog => blog.featured);
  const regularBlogs = filteredBlogs.filter(blog => !blog.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
     <PageHeroSection
        icon={Shield}
        title="Our Blog"
        subtitle="Discover insights on careers, hiring trends, and opportunities shaping the future workforce"
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=600&fit=crop"
      />

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-3">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === category
                  ? 'bg-gradient-to-r from-orange-500 to-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Articles */}
      {selectedCategory === 'All' && featuredBlogs.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center mb-6">
            <h2 className="text-[40px] font-bold">
              <span className="text-orange-500">Featured</span>{' '}
              <span className="text-green-600">Articles</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredBlogs.map(blog => (
              <Link href={`/blogs/${blog.slug}`}>
              <article
                key={blog.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full">
                      {blog.category}
                    </span>
                    <span className="px-3 py-1 bg-green-600 text-white text-sm font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Eye size={16} />
                        <span>{blog.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart size={16} />
                        <span>{blog.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>

                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="flex items-center gap-2 text-white px-2 py-1 rounded-lg font-semibold hover:gap-3 transition-all bg-green-600"
                    >
                      Read More <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </article>
           </Link>
           ))}
          </div>
        </div>
      )}

      {/* Regular Articles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">
        {selectedCategory !== 'All' && (
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-gray-900">{selectedCategory}</span>
            <span className="text-gray-400 text-2xl ml-2">
              {filteredBlogs.length} {filteredBlogs.length === 1 ? 'Article' : 'Articles'}
            </span>
          </h2>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {(selectedCategory === 'All' ? regularBlogs : filteredBlogs).map(blog => (
            <article
              key={blog.id}
              className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-medium rounded-full">
                  {blog.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                  {blog.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <User size={14} />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Eye size={14} />
                      <span>{blog.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart size={14} />
                      <span>{blog.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="flex items-center gap-2 text-white px-2 py-1 rounded-lg bg-green-600 font-semibold text-md hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      
    </div>
  );
}