import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'New York, NY',
      rating: 5,
      text: 'NUTFLIX has completely changed my snacking game! The makhana is incredibly fresh and crispy. I love that it\'s healthy without compromising on taste.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9c5b3d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Mike Chen',
      location: 'San Francisco, CA',
      rating: 5,
      text: 'As a fitness enthusiast, I\'m always looking for healthy snacks. NUTFLIX makhana is perfect - high protein, low calories, and absolutely delicious!',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Emily Rodriguez',
      location: 'Austin, TX',
      rating: 5,
      text: 'I ordered both the 250g and 500g bags. The quality is outstanding and the packaging keeps them fresh. Will definitely be ordering again!',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'David Kumar',
      location: 'Chicago, IL',
      rating: 5,
      text: 'My kids love NUTFLIX! It\'s rare to find a snack that\'s both healthy and something they actually want to eat. Thank you for this amazing product!',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Lisa Park',
      location: 'Seattle, WA',
      rating: 5,
      text: 'The tagline says it all - I really do chill with NUTFLIX just like Netflix! Perfect for movie nights and guilt-free snacking.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
            What Our Customers Say
          </h2>
          <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made NUTFLIX their go-to healthy snack
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-primary hover:bg-primary hover:text-white"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-primary hover:bg-primary hover:text-white"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Testimonial Card */}
          <div className="relative h-80 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-3xl p-8 md:p-12 h-full flex flex-col justify-center">
                  <div className="text-center">
                    {/* Avatar */}
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
                    />

                    {/* Stars */}
                    <div className="flex justify-center space-x-1 mb-6">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-lg md:text-xl text-neutral-dark mb-6 leading-relaxed italic">
                      "{testimonials[currentIndex].text}"
                    </blockquote>

                    {/* Author */}
                    <div className="text-center">
                      <p className="font-semibold text-neutral-dark text-lg">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-gray-600">
                        {testimonials[currentIndex].location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;