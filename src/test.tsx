<header className="bg-[#0b3954] shadow-sm sticky top-0 z-50">
  <div className="container mx-auto px-4 flex items-center justify-between py-4">
    {/* Left: Logo */}
    <div className="flex-shrink-0">
      {/* ... logo code ... */}
    </div>

    {/* Middle: Search Bar & Contact */}
    <div className="flex items-center flex-1 mx-6 relative"> {/* Make this relative for positioning */}

      {/* Search Bar */}
      <div className="w-full max-w-lg"> {/* Removed relative positioning from here */}
        {/* ... search bar input and button ... */}
      </div>

      {/* Contact Info (hidden on mobile) */}
      <div className="hidden md:flex flex-col items-end space-y-1 ml-6 absolute right-0 top-1/2 transform -translate-y-1/2">
        <p className="text-white font-semibold">+91 9991687421</p>
        <p className="text-white text-sm">info@krishnasalesmart.com</p>
      </div>
    </div>

    {/* Right: User and Cart Icons */}
    <div className="flex items-center space-x-5">
      {/* ... user and cart icons ... */}
    </div>
  </div>
</header>

