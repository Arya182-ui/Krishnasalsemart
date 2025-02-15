import React from 'react';
import { ShoppingCart, Search, Heart, Menu } from 'lucide-react';

interface Props {
  cartItemCount: number;
}

const MobileFooterMenu: React.FC<Props> = ({ cartItemCount }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="grid grid-cols-5 gap-1 p-2">
        <button className="flex flex-col items-center justify-center p-2" aria-label="Menu">
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

        <button className="flex flex-col items-center justify-center p-2" aria-label="Cart">
          <ShoppingCart className="h-5 w-5 text-gray-600" />
          <span className="text-xs mt-1">{cartItemCount}</span>
        </button>
      </div>
    </div>
  );
};

export default MobileFooterMenu;
