import React from 'react';
import { ShoppingCart, Heart, Eye } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Industrial Pump XL-5000',
    price: '₹29,999',
    originalPrice: '₹34,999',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    discount: '14%',
    rating: 4.5,
    reviews: 128
  },
  {
    id: 2,
    name: 'Heavy Duty Electric Motor',
    price: '₹19,999',
    originalPrice: '₹24,999',
    image: 'https://images.unsplash.com/photo-1581092160607-7bodqw6c1b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    discount: '20%',
    rating: 4.8,
    reviews: 95
  },
  {
    id: 3,
    name: 'Premium Safety Kit',
    price: '₹14,999',
    originalPrice: '₹17,999',
    image: 'https://images.unsplash.com/photo-1581092160498-a6e0f8cf4a77?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    discount: '16%',
    rating: 4.7,
    reviews: 156
  },
  {
    id: 4,
    name: 'Professional Power Tool Set',
    price: '₹39,999',
    originalPrice: '₹44,999',
    image: 'https://images.unsplash.com/photo-1581092160384-7a66834e5f1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    discount: '11%',
    rating: 4.9,
    reviews: 203
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
            View All Products
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative">
                {/* Discount Badge */}
                {product.discount && (
                  <span className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm">
                    -{product.discount}
                  </span>
                )}
                
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Quick Actions */}
                <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white p-2 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-colors">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-colors">
                    <Eye className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="p-4">
                {/* Product Info */}
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xl font-bold text-blue-600">{product.price}</span>
                  <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;