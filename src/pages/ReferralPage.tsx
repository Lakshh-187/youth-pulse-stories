
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ReferralPage = () => {
  const { storyId } = useParams();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Button variant="ghost" asChild className="mb-8">
            <Link to="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-6">Weekly Referral Links</h1>
            <p className="text-gray-600 mb-8">
              This page contains special deals and referral opportunities related to story ID: {storyId}. 
              These links are updated weekly to provide you with the latest opportunities.
            </p>
            
            <div className="space-y-6">
              <div className="p-4 border rounded-md hover:border-youth-purple transition-colors">
                <h3 className="text-xl font-semibold mb-2">Special Offer #1</h3>
                <p className="text-gray-600 mb-4">
                  Exclusive discount on educational resources related to this topic.
                </p>
                <Button className="bg-youth-purple hover:bg-youth-purple/90">
                  <a href="https://example.com/special-offer-1" target="_blank" rel="noopener noreferrer">
                    Get Discount
                  </a>
                </Button>
              </div>
              
              <div className="p-4 border rounded-md hover:border-youth-purple transition-colors">
                <h3 className="text-xl font-semibold mb-2">Partnership Opportunity</h3>
                <p className="text-gray-600 mb-4">
                  Learn about how you can partner with leading youth organizations.
                </p>
                <Button className="bg-youth-purple hover:bg-youth-purple/90">
                  <a href="https://example.com/partnership" target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </div>
              
              <div className="p-4 border rounded-md hover:border-youth-purple transition-colors">
                <h3 className="text-xl font-semibold mb-2">Weekly Newsletter</h3>
                <p className="text-gray-600 mb-4">
                  Subscribe to our newsletter for weekly updates and exclusive content.
                </p>
                <Button className="bg-youth-purple hover:bg-youth-purple/90">
                  <a href="https://example.com/newsletter" target="_blank" rel="noopener noreferrer">
                    Subscribe
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ReferralPage;
