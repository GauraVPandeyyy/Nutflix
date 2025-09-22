import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Heart, BarChart3, Coffee } from 'lucide-react';

const ProductInfoSection = () => {
  const [activeTab, setActiveTab] = useState('story');

  const tabs = [
    {
      id: 'story',
      label: 'The Story',
      icon: BookOpen,
      content: {
        title: 'Our Journey to Premium Makhana',
        text: 'NUTFLIX was born from a simple idea: creating the perfect healthy snack that doesn\'t compromise on taste. We source our makhana from the pristine waters of Bihar, India, where they\'ve been cultivated for centuries. Each batch is carefully selected, cleaned, and roasted to perfection using traditional methods combined with modern quality standards.',
        highlights: [
          'Sourced from certified organic farms',
          'Traditional roasting methods',
          'Zero artificial additives',
          'Sustainable farming practices'
        ]
      }
    },
    {
      id: 'benefits',
      label: 'Health Benefits',
      icon: Heart,
      content: {
        title: 'Nutritional Powerhouse',
        text: 'Makhana is a superfood that\'s been treasured in Ayurvedic medicine for its incredible health benefits. Our NUTFLIX makhana retains all the natural goodness while providing a delicious snacking experience.',
        highlights: [
          'High in protein and fiber',
          'Low glycemic index',
          'Rich in antioxidants',
          'Supports heart health',
          'Aids in weight management',
          'Gluten-free and vegan'
        ]
      }
    },
    {
      id: 'nutrition',
      label: 'Nutrition Facts',
      icon: BarChart3,
      content: {
        title: 'Per 100g Serving',
        text: 'Our makhana is naturally nutritious and perfect for health-conscious snacking. Here\'s what you get in every serving:',
        highlights: [
          'Calories: 347 kcal',
          'Protein: 9.7g',
          'Carbohydrates: 76.9g',
          'Fiber: 14.5g',
          'Fat: 0.1g',
          'Calcium: 60mg',
          'Iron: 1.4mg'
        ]
      }
    },
    {
      id: 'enjoy',
      label: 'How to Enjoy',
      icon: Coffee,
      content: {
        title: 'Perfect for Every Moment',
        text: 'NUTFLIX makhana is incredibly versatile and can be enjoyed in many ways. Whether you\'re binge-watching your favorite series or need a quick energy boost, we\'ve got you covered.',
        highlights: [
          'Straight from the bag for pure crunch',
          'Mix with nuts and dried fruits',
          'Add to your morning cereal',
          'Perfect movie night companion',
          'Pre or post-workout snack',
          'Travel-friendly energy boost'
        ]
      }
    }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-secondary/20 to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
            Everything About NUTFLIX
          </h2>
          <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the story, benefits, and science behind our premium makhana
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 bg-white rounded-2xl p-2 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-neutral-dark hover:bg-gray-100'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <h3 className="font-serif text-3xl font-bold text-neutral-dark mb-6">
                  {activeTabData.content.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {activeTabData.content.text}
                </p>
                <ul className="space-y-3">
                  {activeTabData.content.highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-neutral-dark">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl flex items-center justify-center">
                  <activeTabData.icon className="h-32 w-32 text-primary/30" />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-accent/20 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/20 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfoSection;