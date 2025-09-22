import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Package, Truck, ArrowRight, Download } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderId, orderData, total } = location.state || {};

  // Redirect if no order data
  useEffect(() => {
    if (!orderId) {
      navigate('/');
    }
  }, [orderId, navigate]);

  if (!orderId) {
    return null;
  }

  return (
    <div className="min-h-screen bg-neutral-light pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle className="h-12 w-12 text-green-500" />
          </motion.div>

          {/* Success Message */}
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
            Order Confirmed!
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Thank you for your order! We've received your payment and will start processing your 
            NUTFLIX makhana right away.
          </p>

          {/* Order Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-8 text-left max-w-2xl mx-auto"
          >
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold text-neutral-dark mb-2">Order Summary</h2>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Order ID:</span>
                <span className="font-mono text-primary font-semibold">{orderId}</span>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Customer:</span>
                <span className="font-medium">
                  {orderData?.firstName} {orderData?.lastName}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Email:</span>
                <span className="font-medium">{orderData?.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Amount:</span>
                <span className="font-bold text-primary text-lg">${total?.toFixed(2)}</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-neutral-dark mb-2">Shipping Address</h3>
              <div className="text-sm text-gray-600">
                <p>{orderData?.address}</p>
                {orderData?.apartment && <p>{orderData.apartment}</p>}
                <p>{orderData?.city}, {orderData?.state} {orderData?.zipCode}</p>
              </div>
            </div>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-8 max-w-2xl mx-auto"
          >
            <h2 className="text-xl font-semibold text-neutral-dark mb-6 text-center">
              What Happens Next?
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-neutral-dark">Order Confirmation</h3>
                  <p className="text-sm text-gray-600">
                    You'll receive a confirmation email shortly with your order details.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Package className="h-5 w-5 text-yellow-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-neutral-dark">Processing</h3>
                  <p className="text-sm text-gray-600">
                    We'll carefully package your NUTFLIX makhana within 1-2 business days.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Truck className="h-5 w-5 text-blue-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-neutral-dark">Shipping</h3>
                  <p className="text-sm text-gray-600">
                    Your order will be shipped and you'll receive tracking information.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => navigate('/track-order')}
              className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
            >
              <Package className="h-5 w-5" />
              <span>Track Your Order</span>
            </button>

            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center space-x-2 border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors duration-200"
            >
              <span>Continue Shopping</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-4">
              Questions about your order? Contact us at{' '}
              <a href="mailto:support@nutflix.com" className="text-primary hover:underline">
                support@nutflix.com
              </a>
            </p>
            <p className="text-sm text-gray-500">
              Thank you for choosing NUTFLIX - Chill with Nutflix, just like Netflix! 🍿
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConfirmationPage;