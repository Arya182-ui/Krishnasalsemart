import React, { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";


const CategoryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  let timeoutId = null;

  // Open dropdown immediately on hover
  const handleMouseEnter = () => {
    clearTimeout(timeoutId); // Clear any scheduled closing
    setIsOpen(true);
  };

  // Close dropdown after a short delay
  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsOpen(false);
    }, 500); // Delay before closing
  };

  return (
    <div 
      className="relative" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Button */}
      <button className="bg-yellow-500 text-white px-11 py-3 rounded-md flex items-center font-semibold min-w-[200px]">
        <Menu className="w-5 h-5 mr-3" />
        <span>All Categories</span>
        <ChevronDown className="w-5 h-5 ml-2" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div 
          className="absolute left-0 mt-2 w-[250px] bg-white shadow-lg rounded-md border border-gray-200"
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave} 
        >
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Accessories</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Fuel Pump Assembly/Modules</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Fuel Pump Motor</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
