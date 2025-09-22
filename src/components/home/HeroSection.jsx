import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroVideo from '../../assets/hero-video.mp4';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Grain Texture Overlay */}
      <div className="absolute inset-0 grain-overlay opacity-30" />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            NUTFLIX
          </h1>
          <p className="font-sans text-xl md:text-2xl lg:text-3xl mb-4 text-gray-200">
            Chill with Nutflix, just like Netflix
          </p>
          <p className="font-sans text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Premium quality makhana (fox nuts) that's 100% natural, protein-rich, 
            and irresistibly crispy. Your perfect healthy snacking companion.
          </p>
          
          <motion.button
            onClick={() => navigate('/product')}
            className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Shop Now</span>
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-6 h-6 bg-primary/30 rounded-full"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute top-1/3 right-20 w-3 h-3 bg-accent/40 rounded-full"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 2 }}
      />
    </section>
  );
};

export default HeroSection;