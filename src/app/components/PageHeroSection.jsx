import React from 'react';
import { Shield } from 'lucide-react';

const PageHeroSection = ({ 
  icon: Icon = Shield,
  title = "Privacy Policy",
  subtitle = "Your privacy is important to us. Learn how we collect, use, and protect your data.",
  backgroundImage = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=600&fit=crop",
  backgroundImageAlt = "Background image",
  gradientFrom = "from-gray-600",
  gradientTo = "to-gray-700",
  showDecorations = true,
  iconBgColor = "bg-white/10",
  subtitleColor = "text-blue-100"
}) => {
  return (
    <section className={`relative overflow-hidden bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white py-20 px-4`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={backgroundImageAlt}
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center">
          <div className="flex text-center items-center justify-center gap-4">
            <div className={`inline-flex items-center justify-center w-20 h-20 ${iconBgColor} backdrop-blur-sm rounded-full mb-6`}>
              <Icon className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {title}
            </h1>
          </div>
          <p className={`text-xl md:text-2xl ${subtitleColor} max-w-2xl mx-auto mb-4`}>
            {subtitle}
          </p>
        </div>
      </div>

      {/* Decorative Blur Elements */}
      {showDecorations && (
        <>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 -mr-48 -mt-48 z-0"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl opacity-20 -ml-48 -mb-48 z-0"></div>
        </>
      )}
    </section>
  );
};

export default PageHeroSection;