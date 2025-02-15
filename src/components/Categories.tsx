import React from 'react';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Industrial Equipment',
    description: 'High-quality machinery and tools for industrial use',
    image: 'https://images.unsplash.com/photo-1581092160607-7bodqw6c1b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    itemCount: 150
  },
  {
    id: 2,
    name: 'Safety Gear',
    description: 'Complete protection solutions for workplace safety',
    image: 'https://images.unsplash.com/photo-1581092160498-a6e0f8cf4a77?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    itemCount: 89
  },
  {
    id: 3,
    name: 'Power Tools',
    description: 'Professional-grade power tools for every job',
    image: 'https://images.unsplash.com/photo-1581092160384-7a66834e5f1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    itemCount: 124
  }
];

const Categories = () => {
  return (
    <section className="py-12">
      <div className="hidden md:flex container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Shop by Category</h2>
            <p className="text-gray-600">Browse our wide range of industrial products</p>
          </div>
          <a href="#" className="hidden md:flex items-center text-blue-600 hover:text-blue-700 font-medium">
            View All Categories
            <ArrowRight className="ml-2 h-4 w-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group cursor-pointer">
              <div className="relative h-80 rounded-xl overflow-hidden">
                {/* Background Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-200 mb-4 line-clamp-2">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white">{category.itemCount} items</span>
                    <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white hover:text-gray-900 transition-colors flex items-center">
                      Shop Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;