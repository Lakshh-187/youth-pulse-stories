
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, HelpCircle } from 'lucide-react';

const SupportSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Need Help?</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Our career support team is here to help you with any questions about our open positions or application process.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="flex flex-col items-center p-6">
              <div className="w-12 h-12 rounded-full bg-youth-purple/10 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-youth-purple" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email Us</h3>
              <p className="text-center text-gray-600 mb-4">
                We'll respond to your email within 24 hours during business days.
              </p>
              <Button variant="outline" asChild>
                <a href="mailto:careers@youngburg.com">careers@youngburg.com</a>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="flex flex-col items-center p-6">
              <div className="w-12 h-12 rounded-full bg-youth-purple/10 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-youth-purple" />
              </div>
              <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
              <p className="text-center text-gray-600 mb-4">
                Connect with our recruitment team directly via WhatsApp for quick inquiries.
              </p>
              <Button variant="outline" asChild>
                <a href="https://wa.me/message/UDZ5KXII2XDAM1" target="_blank" rel="noopener noreferrer">
                  Connect on WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="flex flex-col items-center p-6">
              <div className="w-12 h-12 rounded-full bg-youth-purple/10 flex items-center justify-center mb-4">
                <HelpCircle className="h-6 w-6 text-youth-purple" />
              </div>
              <h3 className="font-semibold text-lg mb-2">FAQ</h3>
              <p className="text-center text-gray-600 mb-4">
                Find answers to commonly asked questions about our hiring process.
              </p>
              <Button variant="outline">
                View FAQ
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
