
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Heart, Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const StoreNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount] = useState(3);

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/store" className="flex items-center">
            <img
              src="https://i.ibb.co/8DHFjncx/youngburg-1.jpg"
              alt="Store Logo"
              className="w-8 h-8 mr-2"
            />
            <span className="text-xl font-bold text-youth-purple">Store</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/store" className="text-gray-700 hover:text-youth-purple">
              Home
            </Link>
            <Link to="/store/products" className="text-gray-700 hover:text-youth-purple">
              Products
            </Link>
            <Link to="/store/digital" className="text-gray-700 hover:text-youth-purple">
              Digital Store
            </Link>
            <Link to="/store/membership" className="text-gray-700 hover:text-youth-purple">
              Membership
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search products..."
                className="pl-10 w-full"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Heart className="h-5 w-5" />
            </Button>
            
            <Link to="/store/cart">
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>
            
            <Button variant="ghost" size="sm">
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search products..." className="pl-10 w-full" />
            </div>
            
            <nav className="space-y-2">
              <Link to="/store" className="block py-2 text-gray-700 hover:text-youth-purple">
                Home
              </Link>
              <Link to="/store/products" className="block py-2 text-gray-700 hover:text-youth-purple">
                Products
              </Link>
              <Link to="/store/digital" className="block py-2 text-gray-700 hover:text-youth-purple">
                Digital Store
              </Link>
              <Link to="/store/membership" className="block py-2 text-gray-700 hover:text-youth-purple">
                Membership
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default StoreNavbar;
