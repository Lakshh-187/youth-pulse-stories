
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, RefreshCw, Building2, AlertTriangle, Users, Shield, Heart, Zap } from 'lucide-react';

const differences = [
  {
    icon: Clock,
    title: "Time-AID Support",
    description: "Financial support for those struggling to start",
    details: "We understand that many brilliant ideas fail due to lack of initial funding. Our Time-AID program provides immediate technical and media support while you focus on building your vision.",
    benefits: ["No upfront costs", "Immediate project start", "Flexible payment terms", "Revenue-sharing options"]
  },
  {
    icon: RefreshCw,
    title: "Barter System",
    description: "Exchange skills or social work for services",
    details: "Can't afford services? No problem! Contribute your expertise, volunteer for social causes, or help other community members. We believe in the power of collaboration over cash.",
    benefits: ["Skill exchange programs", "Social work credits", "Community service hours", "Knowledge sharing platforms"]
  },
  {
    icon: Building2,
    title: "CSR-Powered Funding",
    description: "Backed by grants, NGOs, & philanthropists",
    details: "Our sustainable model is powered by Corporate Social Responsibility funds, government grants, and philanthropic organizations committed to social impact.",
    benefits: ["Sustainable funding model", "No dependency on clients", "Continuous support", "Community-driven approach"]
  },
  {
    icon: AlertTriangle,
    title: "Mission-Driven Approach",
    description: "Zero taxes, registration charges, or profit motives",
    details: "Unlike commercial agencies, we operate as a social enterprise. Every rupee goes back into supporting more frontliners and expanding our impact.",
    benefits: ["No hidden charges", "Transparent operations", "Community ownership", "Social impact focus"]
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're not just another service provider - we're your mission-driven partners committed to social transformation
          </p>
          
          {/* Comparison Badge */}
          <div className="inline-flex items-center space-x-4 bg-white rounded-full p-2 shadow-lg mb-8">
            <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm">
              <span className="font-semibold">Traditional Agencies:</span> ₹5-10 Lakh+ fees
            </div>
            <span className="text-gray-400">vs</span>
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm">
              <span className="font-semibold">Stanburg:</span> ₹0 fees, 100% free
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {differences.map((item, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-youth-purple/20 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-youth-purple/10 rounded-full group-hover:bg-youth-purple/20 transition-colors mr-4">
                    <item.icon className="h-8 w-8 text-youth-purple" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-youth-purple font-semibold">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.details}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Benefits:</h4>
                  {item.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-youth-purple rounded-full"></div>
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Action Section */}
        <div className="bg-gradient-to-r from-youth-purple to-youth-blue rounded-2xl p-8 text-white text-center mb-8">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h3>
          <p className="text-xl mb-6 opacity-90">
            Join 500+ organizations who chose impact over profit
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button size="lg" className="bg-white text-youth-purple hover:bg-gray-100 flex-1">
              <Users className="mr-2 h-5 w-5" />
              Check Eligibility
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-youth-purple flex-1">
              <Heart className="mr-2 h-5 w-5" />
              Partner with Us
            </Button>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <Shield className="h-8 w-8 text-youth-purple mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">100%</div>
            <div className="text-gray-600 text-sm">Transparent</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <Heart className="h-8 w-8 text-youth-blue mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">500+</div>
            <div className="text-gray-600 text-sm">Lives Impacted</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <Zap className="h-8 w-8 text-youth-orange mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">24/7</div>
            <div className="text-gray-600 text-sm">Support</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <Users className="h-8 w-8 text-youth-purple mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">50+</div>
            <div className="text-gray-600 text-sm">Partners</div>
          </div>
        </div>
        
        {/* Quote Section */}
        <div className="mt-12 text-center">
          <blockquote className="text-2xl font-bold text-gray-800 mb-4 max-w-3xl mx-auto">
            "Join a community where your impact matters more than your wallet"
          </blockquote>
          <p className="text-gray-600 italic">- The Stanburg Philosophy</p>
        </div>
      </div>
    </section>
  );
};

export default HowDifferent;
