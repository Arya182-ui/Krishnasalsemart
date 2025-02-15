// Product type used across the app
export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    quantity?: number; // Optional, added for cart management
  }
  
  // Props for Header component
  export interface HeaderProps {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    handleSearch: () => void;
    cartItemCount: number;
  }
  
  // Props for FeaturedProducts component
  export interface FeaturedProductsProps {
    filteredProducts: Product[];
    handleAddToCart: (product: Product) => void;
    handleAddToWishlist: (product: Product) => void;
  }
  
  // Props for Categories component
  export interface CategoriesProps {
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
    setSelectedPriceRange: React.Dispatch<React.SetStateAction<string>>;
  }
  
  // Props for MobileFooterMenu component
  export interface MobileFooterMenuProps {
    cartItemCount: number;
  }
  
  // Props for ThemeToggle component
  export interface ThemeToggleProps {
    theme: 'light' | 'dark';
    setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
  }
  