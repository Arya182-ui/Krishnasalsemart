import React from 'react';
import { X } from 'lucide-react';
import  '../cart.css'

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
}

const MShoppingCart: React.FC<ShoppingCartProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2>SHOPPING CART</h2>
        <p>No products in the cart.</p>
        <button className="return-button" onClick={onClose}>
          Return To Shop
        </button>
      </div>
    </div>
  );
};

export default MShoppingCart;
