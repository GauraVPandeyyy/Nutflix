import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import GallerySection from '../components/home/GallerySection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ProductInfoSection from '../components/home/ProductInfoSection';
import CTASection from '../components/home/CTASection';
import Demo from '../components/home/demo';

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <GallerySection />
      {/* <Demo /> */}

      <De
      <TestimonialsSection />
      <ProductInfoSection />
      <CTASection />
    </div>
  );
};

export default HomePage;