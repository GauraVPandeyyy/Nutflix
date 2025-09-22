import React from 'react';
import { motion } from 'framer-motion';

const GallerySection = () => {
  const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg'
  ];

  // Fallback images from Unsplash
  const fallbackImages = [
    'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1606787366850-de6ba5e65b0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ];

  // Duplicate arrays for seamless infinite scroll
  const duplicatedImages = [...images, ...images];
  const duplicatedFallbacks = [...fallbackImages, ...fallbackImages];

  return (
    <section className="py-20 bg-secondary/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
            Premium Quality Gallery
          </h2>
          <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Take a closer look at our carefully selected and perfectly roasted makhana
          </p>
        </motion.div>
      </div>

      {/* Infinite Scrolling Gallery */}
      <div className="relative">
        <motion.div
          className="flex space-x-6"
          animate={{ x: [0, -50 * 8] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          style={{ width: `${duplicatedImages.length * 320}px` }}
        >
          {duplicatedImages.map((src, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-80 h-64 rounded-2xl overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05, zIndex: 10 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={src}
                alt={`Makhana Gallery ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = duplicatedFallbacks[index % fallbackImages.length];
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-secondary/20 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-secondary/20 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default GallerySection;