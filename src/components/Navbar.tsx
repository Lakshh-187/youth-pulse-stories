
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-youth-purple">Youngburg</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-youth-purple transition-colors">Home</Link>
            <Link to="/frontliner" className="font-medium hover:text-youth-purple transition-colors">Frontliner</Link>
            <Link to="/top-one-percent" className="font-medium hover:text-youth-purple transition-colors">Top 1%</Link>
            <Link to="/sep-700" className="font-medium hover:text-youth-purple transition-colors">SEP-700</Link>
            <Link to="/iep" className="font-medium hover:text-youth-purple transition-colors">IEP</Link>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="https://linktr.ee/youngburg" target="_blank" rel="noopener noreferrer">
              <Button className="bg-youth-purple hover:bg-youth-purple/90">Get More</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden pt-4 pb-3 border-t mt-3">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="px-3 py-2 rounded-md hover:bg-gray-100" onClick={toggleMenu}>Home</Link>
              <Link to="/frontliner" className="px-3 py-2 rounded-md hover:bg-gray-100" onClick={toggleMenu}>Frontliner</Link>
              <Link to="/top-one-percent" className="px-3 py-2 rounded-md hover:bg-gray-100" onClick={toggleMenu}>Top 1%</Link>
              <Link to="/sep-700" className="px-3 py-2 rounded-md hover:bg-gray-100" onClick={toggleMenu}>SEP-700</Link>
              <Link to="/iep" className="px-3 py-2 rounded-md hover:bg-gray-100" onClick={toggleMenu}>IEP</Link>
              <div className="pt-2 flex items-center">
                <Button variant="ghost" size="icon" className="mr-2">
                  <Search className="h-5 w-5" />
                </Button>
                <Link to="https://linktr.ee/youngburg" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="bg-youth-purple hover:bg-youth-purple/90 w-full">Get More</Button>
                </Link>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};

export default Navbar;
