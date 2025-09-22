import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Package, Truck, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Package,
      text: 'Premium Quality Guaranteed'
    },
    {
      icon: Truck,
      text: 'Free Shipping on Orders Over $50'
    },
    {
      icon: Shield,
      text: '100% Money Back Guarantee'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full" />
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full" />
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full" />
        <div className="absolute bottom-32 right-10 w-24 h-24 bg-white rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Ready to Start Snacking Smart?
            </h2>
            <p className="font-sans text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Join thousands of health-conscious snackers who have made NUTFLIX their go-to choice. 
              Chill with Nutflix, just like Netflix!
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 text-white/90"
                >
                  <feature.icon className="h-6 w-6" />
                  <span className="font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                onClick={() => navigate('/product')}
                className="inline-flex items-center space-x-2 bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Shop Now</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>

              <motion.button
                onClick={() => navigate('/track-order')}
                className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Track Your Order</span>
              </motion.button>
            </div>

            {/* Special Offer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 max-w-md mx-auto"
            >
              <p className="text-lg font-semibold mb-2">🎉 Limited Time Offer</p>
              <p className="text-white/90">Get 15% off your first order with code: NUTFLIX15</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;