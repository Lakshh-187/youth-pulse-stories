
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold text-youth-purple mb-4">YoungBurg</h3>
          <p className="text-gray-600 mb-6 max-w-md">
            The premier platform for stories that matter to young people, covering culture, education, and the issues that shape their future.
          </p>
          
          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8 w-full max-w-2xl">
            <Link to="/" className="text-gray-600 hover:text-youth-purple transition-colors">Home</Link>
            <Link to="/frontliner" className="text-gray-600 hover:text-youth-purple transition-colors">Frontliner</Link>
            <Link to="/top-one-percent" className="text-gray-600 hover:text-youth-purple transition-colors">Top 1%</Link>
            <Link to="/sep-700" className="text-gray-600 hover:text-youth-purple transition-colors">SEP-700</Link>
            <Link to="/iep" className="text-gray-600 hover:text-youth-purple transition-colors">IEP</Link>
            <Link to="/campaign-leaders" className="text-gray-600 hover:text-youth-purple transition-colors">Campaign Leaders</Link>
            <Link to="/career" className="text-gray-600 hover:text-youth-purple transition-colors">Careers</Link>
            <Link to="/ylc" className="text-gray-600 hover:text-youth-purple transition-colors">YLC</Link>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a href="https://www.linkedin.com/company/unikall" className="text-gray-400 hover:text-youth-purple transition-colors" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-youth-purple transition-colors" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://instagram.com/iyoungburg" className="text-gray-400 hover:text-youth-purple transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.youtube.com/@YoungBurg-z8f" className="text-gray-400 hover:text-youth-purple transition-colors" aria-label="Youtube">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row gap-4 text-gray-600 mb-6">
            <a href="mailto:contact@youthpulse.com" className="flex items-center hover:text-youth-purple transition-colors">
              <Mail className="h-4 w-4 mr-2" /> info@youngburg.com
            </a>
            <a href="https://wa.me/message/UDZ5KXII2XDAM1" className="flex items-center hover:text-youth-purple transition-colors">
              <Phone className="h-4 w-4 mr-2" /> WhatsApp Community
            </a>
          </div>
          
          {/* Copyright and Legal */}
          <div className="text-center text-gray-500 text-sm">
            <p className="mb-2">&copy; {new Date().getFullYear()} Youngburg. All rights reserved.</p>
            <Link to="/legal" className="text-youth-purple hover:underline">Legal Information</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
