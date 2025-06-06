
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, RefreshCw, Building2, AlertTriangle } from 'lucide-react';

const differences = [
  {
    icon: Clock,
    title: "Time-AID",
    description: "We support those struggling to start due to funding constraints",
    details: "Get immediate access to resources without waiting for funding approval"
  },
  {
    icon: RefreshCw,
    title: "Barter System",
    description: "Contribute skills or social work in exchange for services",
    details: "No money? No problem! Exchange your expertise for our tech and media support"
  },
  {
    icon: Building2,
    title: "CSR-Powered",
    description: "Backed by grants, NGOs, & philanthropists",
    details: "Sustainable funding model ensures long-term support for your projects"
  },
  {
    icon: AlertTriangle,
    title: "Mission-Driven",
    description: "No taxes, registration charges, or profit motives",
    details: "Purely focused on social impact and community empowerment"
  }
];

const HowDifferent = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-youth-light via-white to-youth-purple/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            🛠️ How Stanburg is Different?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another service provider - we're your mission-driven partners
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {differences.map((item, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-youth-purple/20">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-youth-purple/10 rounded-full group-hover:bg-youth-purple/20 transition-colors">
                    <item.icon className="h-8 w-8 text-youth-purple" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-3 font-medium">
                  {item.description}
                </p>
                
                <p className="text-sm text-gray-500">
                  {item.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-youth-purple hover:bg-youth-purple/90">
              Request Eligibility Check
            </Button>
            <Button size="lg" variant="outline" className="border-youth-blue text-youth-blue hover:bg-youth-blue hover:text-white">
              Join as a Partner
            </Button>
          </div>
          
          <p className="text-lg text-gray-600 italic max-w-2xl mx-auto">
            "Join a community where your impact matters more than your wallet"
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowDifferent;
