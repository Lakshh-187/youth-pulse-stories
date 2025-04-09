
import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Facebook, Twitter, Instagram, Youtube, Rss } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-youth-purple mb-4">Youth Pulse</h3>
            <p className="text-gray-600 mb-6">
              The premier platform for stories that matter to young people, covering culture, education, and the issues that shape their future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-youth-purple">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-youth-purple">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-youth-purple">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-youth-purple">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-youth-purple">
                <Rss className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/education" className="text-gray-600 hover:text-youth-purple">Education</Link></li>
              <li><Link to="/culture" className="text-gray-600 hover:text-youth-purple">Culture</Link></li>
              <li><Link to="/technology" className="text-gray-600 hover:text-youth-purple">Technology</Link></li>
              <li><Link to="/environment" className="text-gray-600 hover:text-youth-purple">Environment</Link></li>
              <li><Link to="/health" className="text-gray-600 hover:text-youth-purple">Health & Wellness</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-youth-purple">About Us</Link></li>
              <li><Link to="/team" className="text-gray-600 hover:text-youth-purple">Our Team</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-youth-purple">Contact</Link></li>
              <li><Link to="/advertise" className="text-gray-600 hover:text-youth-purple">Advertise</Link></li>
              <li><Link to="/contribute" className="text-gray-600 hover:text-youth-purple">Contribute</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-600 hover:text-youth-purple">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-youth-purple">Privacy Policy</Link></li>
              <li><Link to="/cookie" className="text-gray-600 hover:text-youth-purple">Cookie Policy</Link></li>
              <li><Link to="/accessibility" className="text-gray-600 hover:text-youth-purple">Accessibility</Link></li>
            </ul>
          </div>
        </div>
        
        <Separator className="mb-6" />
        
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Youth Pulse Stories. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
