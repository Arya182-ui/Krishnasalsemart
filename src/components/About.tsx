import React from 'react';
import { Shield, Truck, Headphones, Package, PenTool as Tool, Award } from 'lucide-react';

const About = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose AryaSalesMart</h2>
          <p className="text-gray-600">
            We are committed to providing quality industrial products with exceptional service and support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Shield className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Quality Guaranteed</h3>
            <p className="text-gray-600">
              All our products meet the highest industry standards and come with warranty protection
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Truck className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Fast Delivery</h3>
            <p className="text-gray-600">
              Quick and reliable shipping across India with real-time order tracking
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Headphones className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
            <p className="text-gray-600">
              Our dedicated customer service team is always ready to assist you
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Package className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Secure Packaging</h3>
            <p className="text-gray-600">
              Products are carefully packed to ensure safe delivery to your doorstep
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Tool className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Expert Consultation</h3>
            <p className="text-gray-600">
              Get professional advice from our team of industry experts
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Award className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Best Prices</h3>
            <p className="text-gray-600">
              Competitive prices with regular deals and discounts for our customers
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
            <div className="text-gray-600">Products</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">5K+</div>
            <div className="text-gray-600">Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;