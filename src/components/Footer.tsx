
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold text-youth-purple mb-4">Youth Pulse</h3>
          <p className="text-gray-600 mb-6 max-w-md">
            The premier platform for stories that matter to young people, covering culture, education, and the issues that shape their future.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a href="https://facebook.com" className="text-gray-400 hover:text-youth-purple transition-colors" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-youth-purple transition-colors" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-youth-purple transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://youtube.com" className="text-gray-400 hover:text-youth-purple transition-colors" aria-label="Youtube">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 text-gray-600 mb-6">
            <a href="mailto:contact@youthpulse.com" className="flex items-center hover:text-youth-purple transition-colors">
              <Mail className="h-4 w-4 mr-2" /> contact@youthpulse.com
            </a>
            <a href="https://wa.me/1234567890?text=I'm%20interested%20in%20joining%20the%20Youth%20Pulse%20community" className="flex items-center hover:text-youth-purple transition-colors">
              <Phone className="h-4 w-4 mr-2" /> WhatsApp Community
            </a>
          </div>
          
          <div className="text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Youth Pulse Stories. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
