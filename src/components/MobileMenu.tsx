import React from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={onClose} className="p-2">
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <nav className="space-y-4">
            <a href="#" className="block py-2 text-gray-600 hover:text-blue-600">Home</a>
            <a href="#" className="block py-2 text-gray-600 hover:text-blue-600">Shop</a>
            <a href="#" className="block py-2 text-gray-600 hover:text-blue-600">Categories</a>
            <a href="#" className="block py-2 text-gray-600 hover:text-blue-600">About</a>
            <a href="#" className="block py-2 text-gray-600 hover:text-blue-600">Contact</a>
          </nav>

          <div className="mt-8 pt-8 border-t">
            <div className="space-y-4">
              <a href="#" className="block py-2 text-gray-600 hover:text-blue-600">Login</a>
              <a href="#" className="block py-2 text-gray-600 hover:text-blue-600">Register</a>
              <a href="#" className="block py-2 text-gray-600 hover:text-blue-600">Track Order</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;