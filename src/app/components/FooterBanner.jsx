import React from 'react';
import Image from 'next/image';

const FooterBanner = ({ 
  badge = "Latest Insights",
  title = "Our Blog",
  titleHighlight = "Blog",
  subtitle = "Discover insights on renewable energy, sustainable agriculture, and India's clean energy revolution",
  categories = [
    {
      icon: "☀️",
      title: "Bio CBG",
      description: "Future of Power",
      bgColor: "bg-teal-400"
    },
    {
      icon: "🌱",
      title: "Agriculture",
      description: "Sustainable Growth",
      bgColor: "bg-teal-400"
    },
    {
      icon: "IN",
      title: "Clean India",
      description: "Green Revolution",
      bgColor: "bg-teal-400"
    }
  ],
  backgroundImage = "/blog-background.jpg"
}) => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Blog background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">

        {/* Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
          Our{' '}
          <span className="bg-teal-400 bg-clip-text text-transparent">
            {titleHighlight}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/90 text-lg md:text-xl max-w-md mb-8 leading-relaxed">
          {subtitle}
        </p>

        {/* Category Cards */}
        <div className="flex flex-wrap gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`${category.bgColor} backdrop-blur-sm rounded-2xl px-6 py-2 flex items-center gap-4 hover:scale-105 transition-transform duration-300 cursor-pointer border border-white/10`}
            >
              <div className="text-3xl">{category.icon}</div>
              <div>
                <h3 className="text-white font-semibold text-lg">{category.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;