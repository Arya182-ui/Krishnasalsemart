import React from 'react';
import { Phone, Mail } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-cyan text-black py-3 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center font-outfit">
            <span className="text-sm" >✅ <span className="text-sm font-bold">Free Delivery</span> on all our products
              </span>
            </div>
            <div className="flex items-center">
            <span className="text-sm" >✅ <span className="text-sm font-bold">Premium Automobile products</span> for an affordable price</span>
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <a href="#" className="text-sm hover:text-gray-200">Services</a>
            <span className="text-gray-400"></span>
            <a href="#" className="text-sm hover:text-gray-200">FAQ's</a>
            <span className="text-gray-300"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;