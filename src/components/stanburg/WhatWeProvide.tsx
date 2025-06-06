
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Smartphone, Bot, Globe, CreditCard, Wrench, Camera, Megaphone, Palette, Video, FileText, Mic } from 'lucide-react';

const techServices = [
  { icon: Globe, title: "Website Development", description: "Custom websites tailored to your needs" },
  { icon: Smartphone, title: "App Creation", description: "Mobile apps for iOS and Android" },
  { icon: Bot, title: "AI-Powered Tools", description: "Chatbots and automation solutions" },
  { icon: Code, title: "Software Development", description: "Custom software solutions" },
  { icon: Globe, title: "Domain + Hosting Setup", description: "Complete web presence setup" },
  { icon: Wrench, title: "Free Bug Fixing & Mentorship", description: "Ongoing technical support" },
  { icon: CreditCard, title: "Payment Gateway Integration", description: "Secure payment processing" },
  { icon: Smartphone, title: "Dropshipping Setup", description: "E-commerce automation" }
];

const mediaServices = [
  { icon: FileText, title: "News & Magazine Publishing", description: "Professional content creation" },
  { icon: Camera, title: "Media Coverage", description: "Press releases and news coverage" },
  { icon: Palette, title: "Branding & PR Strategy", description: "Complete brand development" },
  { icon: Megaphone, title: "Advertisement & Digital Campaigns", description: "Targeted marketing campaigns" },
  { icon: FileText, title: "Pitch Deck Assistance", description: "Investor-ready presentations" },
  { icon: Video, title: "Video Creation & Voiceovers", description: "Professional video content" }
];

const WhatWeProvide = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            ⚙️ What We Provide
          </h2>
          <p className="text-xl text-gray-600">
            Complete Tech & Media Support for Your Success
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technology Services */}
          <Card className="border-youth-purple/20">
            <CardHeader className="text-center bg-youth-purple/5">
              <CardTitle className="text-2xl font-bold text-youth-purple flex items-center justify-center">
                <Code className="mr-2" />
                Technology Services
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {techServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <service.icon className="h-6 w-6 text-youth-purple mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">{service.title}</h4>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 space-y-3">
                <Button className="w-full bg-youth-purple hover:bg-youth-purple/90">
                  Apply for Service
                </Button>
                <Button variant="outline" className="w-full border-youth-purple text-youth-purple hover:bg-youth-purple hover:text-white">
                  Request Demo
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Media Services */}
          <Card className="border-youth-blue/20">
            <CardHeader className="text-center bg-youth-blue/5">
              <CardTitle className="text-2xl font-bold text-youth-blue flex items-center justify-center">
                <Camera className="mr-2" />
                Media Services
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {mediaServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <service.icon className="h-6 w-6 text-youth-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">{service.title}</h4>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 space-y-3">
                <Button className="w-full bg-youth-blue hover:bg-youth-blue/90">
                  Apply for Service
                </Button>
                <Button variant="outline" className="w-full border-youth-blue text-youth-blue hover:bg-youth-blue hover:text-white">
                  Request Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhatWeProvide;
