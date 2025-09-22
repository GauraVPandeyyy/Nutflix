import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Package, Truck, CheckCircle, Clock, Search } from 'lucide-react';

const TrackOrderPage = () => {
  const [orderStatus, setOrderStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock order tracking logic
      if (data.orderId.startsWith('NUTFLIX-') && data.email === 'demo@nutflix.com') {
        setOrderStatus({
          orderId: data.orderId,
          status: 'shipped',
          estimatedDelivery: '2024-01-25',
          trackingNumber: 'NF123456789',
          timeline: [
            { status: 'confirmed', date: '2024-01-20', time: '10:30 AM', completed: true },
            { status: 'processing', date: '2024-01-21', time: '2:15 PM', completed: true },
            { status: 'shipped', date: '2024-01-22', time: '9:45 AM', completed: true },
            { status: 'delivered', date: '2024-01-25', time: 'Estimated', completed: false }
          ]
        });
      } else {
        setOrderStatus({ error: 'Order not found. Please check your order ID and email.' });
      }
      setIsLoading(false);
    }, 1500);
  };

  const getStatusIcon = (status, completed) => {
    const iconClass = `h-6 w-6 ${completed ? 'text-green-500' : 'text-gray-400'}`;
    
    switch (status) {
      case 'confirmed':
        return <CheckCircle className={iconClass} />;
      case 'processing':
        return <Package className={iconClass} />;
      case 'shipped':
        return <Truck className={iconClass} />;
      case 'delivered':
        return <CheckCircle className={iconClass} />;
      default:
        return <Clock className={iconClass} />;
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'confirmed':
        return 'Order Confirmed';
      case 'processing':
        return 'Processing';
      case 'shipped':
        return 'Shipped';
      case 'delivered':
        return 'Delivered';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-light pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              Track Your Order
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Enter your order details to get real-time updates on your NUTFLIX delivery
            </p>
          </div>

          {/* Tracking Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-dark mb-2">
                  Order ID *
                </label>
                <input
                  type="text"
                  {...register('orderId', { required: 'Order ID is required' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="NUTFLIX-1234567890"
                />
                {errors.orderId && (
                  <p className="mt-1 text-sm text-red-600">{errors.orderId.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-dark mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Please enter a valid email'
                    }
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Tracking...</span>
                  </>
                ) : (
                  <>
                    <Search className="h-5 w-5" />
                    <span>Track Order</span>
                  </>
                )}
              </button>
            </form>

            {/* Demo Info */}
            <div className="mt-6 p-4 bg-secondary/20 rounded-lg">
              <p className="text-sm text-neutral-dark mb-2">Demo tracking info:</p>
              <p className="text-sm text-gray-600">
                Use any order ID starting with "NUTFLIX-" and email "demo@nutflix.com"
              </p>
            </div>
          </div>

          {/* Order Status */}
          {orderStatus && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              {orderStatus.error ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-dark mb-2">Order Not Found</h3>
                  <p className="text-gray-600">{orderStatus.error}</p>
                </div>
              ) : (
                <div>
                  {/* Order Header */}
                  <div className="border-b border-gray-200 pb-6 mb-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-2xl font-serif font-bold text-neutral-dark mb-2">
                          Order #{orderStatus.orderId}
                        </h3>
                        <p className="text-gray-600">
                          Tracking Number: {orderStatus.trackingNumber}
                        </p>
                      </div>
                      <div className="mt-4 md:mt-0 text-right">
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          orderStatus.status === 'delivered' 
                            ? 'bg-green-100 text-green-800'
                            : orderStatus.status === 'shipped'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {getStatusLabel(orderStatus.status)}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          Est. Delivery: {orderStatus.estimatedDelivery}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="space-y-6">
                    <h4 className="text-lg font-semibold text-neutral-dark">Order Timeline</h4>
                    <div className="space-y-6">
                      {orderStatus.timeline.map((item, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                            item.completed ? 'bg-green-100' : 'bg-gray-100'
                          }`}>
                            {getStatusIcon(item.status, item.completed)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h5 className={`text-lg font-medium ${
                                item.completed ? 'text-neutral-dark' : 'text-gray-500'
                              }`}>
                                {getStatusLabel(item.status)}
                              </h5>
                              <div className="text-right">
                                <p className={`text-sm ${
                                  item.completed ? 'text-neutral-dark' : 'text-gray-500'
                                }`}>
                                  {item.date}
                                </p>
                                <p className={`text-xs ${
                                  item.completed ? 'text-gray-600' : 'text-gray-400'
                                }`}>
                                  {item.time}
                                </p>
                              </div>
                            </div>
                            {index < orderStatus.timeline.length - 1 && (
                              <div className={`w-0.5 h-8 ml-6 mt-2 ${
                                item.completed ? 'bg-green-200' : 'bg-gray-200'
                              }`} />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-neutral-dark mb-2">Need Help?</h5>
                        <p className="text-sm text-gray-600 mb-2">
                          Contact our customer service team for any questions about your order.
                        </p>
                        <a href="mailto:support@nutflix.com" className="text-primary text-sm hover:underline">
                          support@nutflix.com
                        </a>
                      </div>
                      <div>
                        <h5 className="font-medium text-neutral-dark mb-2">Delivery Instructions</h5>
                        <p className="text-sm text-gray-600">
                          Your package will be delivered to your doorstep. Please ensure someone is available to receive it.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default TrackOrderPage;