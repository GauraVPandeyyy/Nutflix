import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Plus, Minus, ShoppingCart, Truck, Shield, RotateCcw, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import image1 from '../assets/01.jpg';
import image2 from '../assets/02.jpg';
import image3 from '../assets/03.jpg';
import image4 from '../assets/04.jpg';

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState('250g');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addItem } = useCart();

  const product = {
    id: 'nutflix-makhana',
    name: 'NUTFLIX Premium Makhana',
    description: 'Premium quality fox nuts that are 100% natural, protein-rich, and irresistibly crispy. Perfect for healthy snacking anytime, anywhere.',
    sizes: [
      { size: '250g', price: 24.99, originalPrice: 29.99 },
      { size: '500g', price: 44.99, originalPrice: 54.99 }
    ],
    images: [
      image1,
      image2,
      image3,
      image4,
    ],
    rating: 4.0,
    reviews: 127,
    features: [
      '100% Natural & Organic',
      'High in Protein & Fiber',
      'Zero Artificial Additives',
      'Gluten-Free & Vegan',
      'Low Glycemic Index',
      'Rich in Antioxidants'
    ]
  };

  const selectedSizeData = product.sizes.find(s => s.size === selectedSize);
  const savings = selectedSizeData.originalPrice - selectedSizeData.price;
  const savingsPercentage = Math.round((savings / selectedSizeData.originalPrice) * 100);

  const handleAddToCart = () => {
    const item = {
      id: product.id,
      name: product.name,
      size: selectedSize,
      price: selectedSizeData.price,
      quantity: quantity,
      image: product.images[0]
    };
    addItem(item);
    
    // Show success feedback
    alert(`Added ${quantity}x ${product.name} (${selectedSize}) to cart!`);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-white pt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4 px-20 flex justify-start items-center">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="a bg-gray-100 rounded-2xl overflow-hidden relative group"
            >
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200">
                <Heart className="h-5 w-5 text-gray-600" />
              </button>
            </motion.div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    selectedImage === index ? 'border-primary' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Product Title & Rating */}
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-neutral-dark mb-3">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {renderStars(product.rating)}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl font-bold text-primary">
                  ${selectedSizeData.price}
                </span>
                <span className="text-xl text-gray-500 line-through">
                  ${selectedSizeData.originalPrice}
                </span>
                <span className="bg-accent text-white px-2 py-1 rounded-full text-sm font-medium">
                  Save {savingsPercentage}%
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-neutral-dark mb-3">Size</h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.sizes.map((sizeOption) => (
                    <button
                      key={sizeOption.size}
                      onClick={() => setSelectedSize(sizeOption.size)}
                      className={`p-4 border-2 rounded-lg text-left transition-all duration-200 ${
                        selectedSize === sizeOption.size
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-semibold">{sizeOption.size}</div>
                      <div className="text-sm text-gray-600">${sizeOption.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-neutral-dark mb-3">Quantity</h3>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <motion.button
                onClick={handleAddToCart}
                className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Add to Cart - ${(selectedSizeData.price * quantity).toFixed(2)}</span>
              </motion.button>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Guarantees */}
              <div className="border-t border-gray-200 pt-6 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3">
                    <Truck className="h-5 w-5 text-primary" />
                    <span className="text-sm text-gray-600">Free shipping over $50</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="text-sm text-gray-600">Quality guaranteed</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RotateCcw className="h-5 w-5 text-primary" />
                    <span className="text-sm text-gray-600">30-day returns</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;