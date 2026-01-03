import React from 'react';
import { Users, Target, Award, TrendingUp, Briefcase, Heart } from 'lucide-react';

export default function AboutCompOne() {
  const stats = [
    { number: '500K+', label: 'Active Job Seekers' },
    { number: '50K+', label: 'Companies Trust Us' },
    { number: '1M+', label: 'Jobs Posted' },
    { number: '95%', label: 'Success Rate' }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Our Mission',
      description: 'To connect talented professionals with their dream careers and help companies build exceptional teams.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community First',
      description: 'We believe in building a supportive community where job seekers and employers thrive together.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Over Quantity',
      description: 'Every job listing is verified and every candidate profile is authentic, ensuring the best matches.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Continuous Growth',
      description: 'We invest in tools and resources that help both job seekers and employers achieve their goals.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
     
      {/* Stats Section */}
      <section className="py-16 px-4 -mt-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg mb-4">
                Founded in 2020, we started with a simple belief: finding the right job shouldn't be complicated. What began as a small platform has grown into one of the most trusted job boards, serving millions of professionals and thousands of companies worldwide.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                We've built our platform on the principles of transparency, authenticity, and innovation. Every feature we develop is designed with both job seekers and employers in mind, ensuring a seamless experience for everyone.
              </p>
              <p className="text-gray-600 text-lg">
                Today, we're proud to be the bridge that connects ambition with opportunity, helping people build careers they love and companies build teams that excel.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 p-1">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center">
                <Briefcase className="w-16 h-16 text-yellow-900" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Drives Us</h2>
            <p className="text-xl text-gray-600">The values that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}