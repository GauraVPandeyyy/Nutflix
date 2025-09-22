import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Check, ArrowLeft, ArrowRight, CreditCard, Lock } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { items, getTotalPrice, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const subtotal = getTotalPrice();
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const steps = [
    { number: 1, title: 'User Info', icon: '👤' },
    { number: 2, title: 'Shipping', icon: '📦' },
    { number: 3, title: 'Payment', icon: '💳' }
  ];

  // Redirect if cart is empty
  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  // Redirect if not authenticated
  if (!isAuthenticated) {
    navigate('/');
    return null;
  }

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = (data) => {
    if (currentStep < 3) {
      nextStep();
    } else {
      // Process order
      const orderId = `NUTFLIX-${Date.now()}`;
      clearCart();
      navigate('/confirmation', { state: { orderId, orderData: data, total } });
    }
  };

  const renderUserInfo = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif font-bold text-neutral-dark mb-6">Contact Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-neutral-dark mb-2">
            First Name *
          </label>
          <input
            type="text"
            {...register('firstName', { required: 'First name is required' })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="John"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-dark mb-2">
            Last Name *
          </label>
          <input
            type="text"
            {...register('lastName', { required: 'Last name is required' })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Doe"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-neutral-dark mb-2">
            Email *
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
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-neutral-dark mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            {...register('phone', { required: 'Phone number is required' })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="+1 (555) 123-4567"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>
      </div>
    </div>
  );

  const renderShipping = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif font-bold text-neutral-dark mb-6">Shipping Address</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-neutral-dark mb-2">
            Street Address *
          </label>
          <input
            type="text"
            {...register('address', { required: 'Address is required' })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="123 Main Street"
          />
          {errors.address && (
            <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-dark mb-2">
            Apartment, suite, etc. (optional)
          </label>
          <input
            type="text"
            {...register('apartment')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Apt 4B"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-neutral-dark mb-2">
              City *
            </label>
            <input
              type="text"
              {...register('city', { required: 'City is required' })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="New York"
            />
            {errors.city && (
              <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-dark mb-2">
              State *
            </label>
            <select
              {...register('state', { required: 'State is required' })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Select State</option>
              <option value="NY">New York</option>
              <option value="CA">California</option>
              <option value="TX">Texas</option>
              <option value="FL">Florida</option>
              {/* Add more states as needed */}
            </select>
            {errors.state && (
              <p className="mt-1 text-sm text-red-600">{errors.state.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-dark mb-2">
              ZIP Code *
            </label>
            <input
              type="text"
              {...register('zipCode', { required: 'ZIP code is required' })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="10001"
            />
            {errors.zipCode && (
              <p className="mt-1 text-sm text-red-600">{errors.zipCode.message}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderPayment = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif font-bold text-neutral-dark mb-6">Payment Information</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-neutral-dark mb-2">
            Card Number *
          </label>
          <div className="relative">
            <input
              type="text"
              {...register('cardNumber', { required: 'Card number is required' })}
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="1234 5678 9012 3456"
            />
            <CreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          {errors.cardNumber && (
            <p className="mt-1 text-sm text-red-600">{errors.cardNumber.message}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-neutral-dark mb-2">
              Expiry Date *
            </label>
            <input
              type="text"
              {...register('expiryDate', { required: 'Expiry date is required' })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="MM/YY"
            />
            {errors.expiryDate && (
              <p className="mt-1 text-sm text-red-600">{errors.expiryDate.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-dark mb-2">
              CVV *
            </label>
            <input
              type="text"
              {...register('cvv', { required: 'CVV is required' })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="123"
            />
            {errors.cvv && (
              <p className="mt-1 text-sm text-red-600">{errors.cvv.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-dark mb-2">
            Name on Card *
          </label>
          <input
            type="text"
            {...register('cardName', { required: 'Name on card is required' })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="John Doe"
          />
          {errors.cardName && (
            <p className="mt-1 text-sm text-red-600">{errors.cardName.message}</p>
          )}
        </div>

        {/* Order Review */}
        <div className="bg-gray-50 rounded-lg p-6 mt-8">
          <h3 className="font-semibold text-neutral-dark mb-4">Order Review</h3>
          <div className="space-y-3">
            {items.map((item) => (
              <div key={`${item.id}-${item.size}`} className="flex justify-between text-sm">
                <span>{item.name} ({item.size}) × {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t border-gray-300 pt-3 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg border-t border-gray-300 pt-2">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 bg-green-50 p-3 rounded-lg">
          <Lock className="h-4 w-4 text-green-600" />
          <span>Your payment information is encrypted and secure</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-neutral-light pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex justify-center">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full text-sm font-semibold ${
                    currentStep >= step.number
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {currentStep > step.number ? (
                      <Check className="h-6 w-6" />
                    ) : (
                      step.icon
                    )}
                  </div>
                  <div className="ml-3 mr-8">
                    <p className={`text-sm font-medium ${
                      currentStep >= step.number ? 'text-primary' : 'text-gray-600'
                    }`}>
                      Step {step.number}
                    </p>
                    <p className="text-sm text-gray-600">{step.title}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-1 mr-8 ${
                      currentStep > step.number ? 'bg-primary' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              {currentStep === 1 && renderUserInfo()}
              {currentStep === 2 && renderShipping()}
              {currentStep === 3 && renderPayment()}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-12">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                    currentStep === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <ArrowLeft className="h-5 w-5" />
                  <span>Back</span>
                </button>

                <button
                  type="submit"
                  className="flex items-center space-x-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
                >
                  <span>{currentStep === 3 ? 'Place Order' : 'Continue'}</span>
                  {currentStep < 3 && <ArrowRight className="h-5 w-5" />}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CheckoutPage;