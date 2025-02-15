import { HeartIcon } from "lucide-react";

const TopBar2 = () => {
  return (
    <div className="bg-[#EDF4F4] text-gray-500 py-3 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center text-black px-40 ">
          {/* Navigation Links */}
          <div className="flex items-center gap-x-8">
            <button className="text-lg  hover:text-gray-300 cursor-pointer">Home </button>
            <button className="text-lg  hover:text-gray-300 cursor-pointer">Shop</button>
            <button className="text-lg  hover:text-gray-300 cursor-pointer">About Us</button>
            <button className="text-lg  hover:text-gray-300 cursor-pointer">Contact</button>
            {/* Wishlist with Icon */}
            <div className="flex items-center gap-x-2 cursor-pointer hover:text-gray-300">
              <HeartIcon className="w-5 h-5" />
              <button className="text-lg ">Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar2;
