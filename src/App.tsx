import React, { useState, useEffect, useCallback } from 'react';
import { Menu, ShoppingCart, Search, User, Heart, Sun, Moon } from 'lucide-react';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Categories from './components/Categories';
import About from './components/About';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';
import TopBar from './components/TopBar';
import TopBar2 from './components/top2';
import CategoryDropdown from './components/dropdown';
import { debounce } from 'lodash';
import MShoppingCart from './components/shopingcart';
import Aboutus from './Aboutus';

// Define Product type
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  quantity?: number; // Added quantity for cart items
}

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isMShoppingCart, setIsMShoppingCart] = useState(false);

  // Sample product data
  const products: Product[] = [
    { id: 1, name: 'Product 1', category: 'Category 1', price: 100 },
    { id: 2, name: 'Product 2', category: 'Category 2', price: 200 },
    { id: 3, name: 'Product 3', category: 'Category 1', price: 150 },
    { id: 4, name: 'Product 4', category: 'Category 2', price: 250 },
  ];

  const cartItemCount = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);

  const handleSearch = useCallback(
    debounce(() => {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }, 500),
    [searchQuery]
  );

  useEffect(() => {
    const filtered = products.filter(product =>
      (selectedCategory ? product.category === selectedCategory : true) &&
      (selectedPriceRange ? product.price <= parseFloat(selectedPriceRange) : true) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory, selectedPriceRange]);

  const handleAddToCart = (product: Product) => {
    setCartItems(prevItems => {
      const itemExists = prevItems.find(item => item.id === product.id);
      if (itemExists) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (itemId: number) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const handleAddToWishlist = (product: Product) => {
    if (!wishlist.some(item => item.id === product.id)) {
      setWishlist(prevItems => [...prevItems, product]);
    }
  };

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <TopBar />
      <header className="bg-[#0b3954] shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 flex items-center justify-between py-2">
          <button
            className="p-2 md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="h-7 w-7 text-white" />
          </button>

          <div className="flex-shrink-0">
            <img
              src="https://krishnasalesmart.com/wp-content/uploads/2024/10/Untitled-design-2024-10-19T114958.293.png"
              className="h-10 md:h-15"
              alt="Krishna Sales Mart Logo"
              decoding="async"
            />
          </div>

          <div id="Arya" className="hidden md:flex flex-1 items-center justify-center space-x-4">
            <CategoryDropdown setSelectedCategory={setSelectedCategory} />
            <div className="relative w-full max-w-[500px]">
              <input
                type="text"
                placeholder="What are you looking for?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pr-12 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-400 shadow-md"
                aria-label="Search products"
              />
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={handleSearch}
                aria-label="Search"
              >
                <Search className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="hidden md:flex flex-col relative ">
            <User className="md:h-9 md:w-9 text-white" />
          </div>

          <div className="flex items-center space-x-6">
            <button className="p-2 relative" aria-label="Cart" onClick={() => setIsMShoppingCart(true)}>
              <ShoppingCart className="h-7 w-7 md:h-9 md:w-9 text-white" />
              <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            </button>
            {/* Mobile Shopping Cart Component */}
            {isMShoppingCart && (
              <MShoppingCart isOpen={isMShoppingCart} onClose={() => setIsMShoppingCart(false)} />
            )}
          </div>
        </div>
      </header>

      <TopBar2 />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <div className="md:hidden bg-[#0b3954] py-2 px-6">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="What are you looking for?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 pr-12 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-400 shadow-md"
            aria-label="Search products"
          />
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
            onClick={handleSearch}
            aria-label="Search"
          >
            <Search className="w-6 h-6" />
          </button>
        </div>
      </div>

      <main>
        <Hero />
        <FeaturedProducts
          products={filteredProducts}
          handleAddToCart={handleAddToCart}
          handleAddToWishlist={handleAddToWishlist}
        />
        <Categories setSelectedCategory={setSelectedCategory} setSelectedPriceRange={setSelectedPriceRange} />
        <About />
      </main>

      <Footer />

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="grid grid-cols-4 gap-1 p-2">
          <button
            className="flex flex-col items-center justify-center p-2"
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-5 w-5 text-gray-600" />
            <span className="text-xs mt-1">Menu</span>
          </button>

          <button className="flex flex-col items-center justify-center p-2" aria-label="Search">
            <Search className="h-5 w-5 text-gray-600" />
            <span className="text-xs mt-1">Search</span>
          </button>

          <button className="flex flex-col items-center justify-center p-2" aria-label="Wishlist">
            <Heart className="h-5 w-5 text-gray-600" />
            <span className="text-xs mt-1">Wishlist</span>
          </button>

          <button
            className="flex flex-col items-center justify-center p-2"
            aria-label="Cart"
            onClick={() => setIsMShoppingCart(true)}
          >
            <ShoppingCart className="h-5 w-5 text-gray-600" />
            <span className="text-xs mt-1">Cart</span>
          </button>

          {/* Mobile Shopping Cart Component */}
          {isMShoppingCart && (
            <MShoppingCart isOpen={isMShoppingCart} onClose={() => setIsMShoppingCart(false)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
