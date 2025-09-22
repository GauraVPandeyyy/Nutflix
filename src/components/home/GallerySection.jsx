import React from 'react';
import { motion } from 'framer-motion';
import image1 from '../../assets/01.jpg';
import image2 from '../../assets/02.jpg';
import image3 from '../../assets/03.jpg';
import image4 from '../../assets/04.jpg';
import image5 from '../../assets/05.jpg';
import image6 from '../../assets/06.jpg';
import image7 from '../../assets/07.jpg';
import image8 from '../../assets/08.jpg';
import image9 from '../../assets/09.jpg';
import image10 from '../../assets/10.jpg';
import image11 from '../../assets/11.jpg';
import image12 from '../../assets/12.jpg';



const GallerySection = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12
  ];



  // Duplicate arrays for seamless infinite scroll
  const duplicatedImages = [...images, ...images];

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