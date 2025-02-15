import { MapPin, Phone, Mail } from "react-feather"; // Import required icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shop</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Product Categories</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Industrial Equipment</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safety Gear</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Power Tools</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Machinery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Spare Parts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Electrical Equipment</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Measuring Tools</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>123 Industrial Area, Phase II, New Delhi, India - 110001</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>+91 1234567890</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>info@krishnasalesmart.com</span>
              </div>
              <div className="pt-4">
                <h5 className="text-white font-semibold mb-2">Business Hours</h5>
                <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left">© 2024 KrishnaSalesMart. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <img src="https://krishnasalesmart.com/wp-content/uploads/2024/03/payment-methods.png" alt="Payment Methods" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
