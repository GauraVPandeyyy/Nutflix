import React from 'react';
import { motion } from 'framer-motion';
import { L, Shield, Zap, Heart } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Leaf,
      title: '100% Natural',
      description: 'No artificial preservatives, colors, or flavors. Just pure, natural goodness.',
      color: 'text-accent'
    },
    {
      icon: Shield,
      title: 'Rich in Protein',
      description: 'Packed with plant-based protein to fuel your active lifestyle.',
      color: 'text-primary'
    },
    {
      icon: Zap,
      title: 'Crispy & Fresh',
      description: 'Perfectly roasted for that satisfying crunch in every bite.',
      color: 'text-orange-500'
    },
    {
      icon: Heart,
      title: 'Heart Healthy',
      description: 'Low in calories, high in nutrients. Perfect for guilt-free snacking.',
      color: 'text-red-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
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
            Why Choose NUTFLIX?
          </h2>
          <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of taste and nutrition with our premium makhana
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-neutral-dark mb-3">
                  {feature.title}
                </h3>
                <p className="font-sans text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;