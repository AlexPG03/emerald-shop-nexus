
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-teal-500 text-white flex items-center justify-center font-bold text-xl angular-border">
                ES
              </div>
              <span className="ml-2 text-xl font-bold">EmeraldShop</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your premier destination for products from premium brands across multiple categories with a modern angular design.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-teal-500">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-teal-500">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-teal-500">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-teal-500">Home</Link>
              </li>
              <li>
                <Link to="/companies" className="text-gray-400 hover:text-teal-500">Companies</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-teal-500">Products</Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-400 hover:text-teal-500">Categories</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-teal-500">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-teal-500">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/electronics" className="text-gray-400 hover:text-teal-500">Electronics</Link>
              </li>
              <li>
                <Link to="/category/clothing" className="text-gray-400 hover:text-teal-500">Clothing</Link>
              </li>
              <li>
                <Link to="/category/home-kitchen" className="text-gray-400 hover:text-teal-500">Home & Kitchen</Link>
              </li>
              <li>
                <Link to="/category/sports" className="text-gray-400 hover:text-teal-500">Sports</Link>
              </li>
              <li>
                <Link to="/category/beauty" className="text-gray-400 hover:text-teal-500">Beauty</Link>
              </li>
              <li>
                <Link to="/category/food" className="text-gray-400 hover:text-teal-500">Food</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                <span className="text-gray-400">123 Commerce St, Market City, EC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-teal-500 mr-2" />
                <span className="text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-teal-500 mr-2" />
                <span className="text-gray-400">info@emeraldshop.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2025 EmeraldShop. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-8">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-teal-500 text-sm">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-teal-500 text-sm">Terms of Service</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-400 hover:text-teal-500 text-sm">Shipping Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
