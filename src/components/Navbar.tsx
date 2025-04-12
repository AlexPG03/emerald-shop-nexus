
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="h-10 w-10 bg-teal-500 text-white flex items-center justify-center font-bold text-xl angular-border">
                ES
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">EmeraldShop</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-teal-500 px-3 py-2 font-medium">
              Home
            </Link>
            <Link to="/companies" className="text-gray-700 hover:text-teal-500 px-3 py-2 font-medium">
              Companies
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-teal-500 px-3 py-2 font-medium">
              Products
            </Link>
            <Link to="/categories" className="text-gray-700 hover:text-teal-500 px-3 py-2 font-medium">
              Categories
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 bg-teal-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button className="bg-teal-500 hover:bg-teal-600 text-white angular-button">
              Sign In
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/companies" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Companies
            </Link>
            <Link 
              to="/products" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/categories" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <div className="flex items-center space-x-2 pt-3">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button className="bg-teal-500 hover:bg-teal-600 text-white w-full angular-button">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
