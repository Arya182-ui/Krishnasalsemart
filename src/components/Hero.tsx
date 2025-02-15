import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Hero"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      {/* Main Hero Content */}
      <div className="relative container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 py-16 md:py-24">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Quality Industrial Products at Competitive Prices
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Your trusted partner for industrial equipment, tools, and safety gear
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors inline-flex items-center">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
          
          {/* Featured Categories Preview */}
          <div className="hidden md:grid grid-cols-2 gap-4 self-center">
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Industrial Equipment</h3>
                <p className="text-gray-200 text-sm">High-quality machinery and tools</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Safety Gear</h3>
                <p className="text-gray-200 text-sm">Complete protection solutions</p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Power Tools</h3>
                <p className="text-gray-200 text-sm">Professional-grade equipment</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Spare Parts</h3>
                <p className="text-gray-200 text-sm">Genuine replacement parts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;