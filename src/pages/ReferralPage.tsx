
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
            <h1 className="text-3xl font-bold mb-6"> Secret Drops of the Week</h1>
            <p className="text-gray-600 mb-8">
            Handpicked. Powerful. Just for you.
            Every week, we drop 3 super-useful confidential docs — packed with tips, tools, and treasures to help you grow smarter, faster, and better.
            </p>
            
            <div className="space-y-6">
              <div className="p-4 border rounded-md hover:border-youth-purple transition-colors">
                <h3 className="text-xl font-semibold mb-2">Big Brain Episode #1</h3>
                <p className="text-gray-600 mb-4">
                Your first dose of brilliance — get insights that make things click.
                </p>
                <Button className="bg-youth-purple hover:bg-youth-purple/90">
                  <a href="https://example.com/special-offer-1" target="_blank" rel="noopener noreferrer">
                    start now
                  </a>
                </Button>
              </div>
              
              <div className="p-4 border rounded-md hover:border-youth-purple transition-colors">
                <h3 className="text-xl font-semibold mb-2">The Briefcase</h3>
                <p className="text-gray-600 mb-4">
                Get exclusive access to top-secret insights, premium documents, and powerful strategies — updated weekly just for our trusted members.
                </p>
                <Button className="bg-youth-purple hover:bg-youth-purple/90">
                  <a href="https://example.com/partnership" target="_blank" rel="noopener noreferrer">
                    Let's see
                  </a>
                </Button>
              </div>
              
              <div className="p-4 border rounded-md hover:border-youth-purple transition-colors">
                <h3 className="text-xl font-semibold mb-2">Strategic Sheets</h3>
                <p className="text-gray-600 mb-4">
                Not FBI-level, but close enough.
                </p>
                <Button className="bg-youth-purple hover:bg-youth-purple/90">
                  <a href="https://example.com/newsletter" target="_blank" rel="noopener noreferrer">
                    May be
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
