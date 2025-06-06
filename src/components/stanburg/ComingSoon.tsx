
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Scale, FileCheck, Users, Heart, DollarSign, Bell } from 'lucide-react';

const comingSoonServices = [
  {
    icon: Scale,
    title: "Legal Support",
    description: "Free legal consultation and documentation support",
    eta: "Coming Q2 2024"
  },
  {
    icon: FileCheck,
    title: "Compliance Registration",
    description: "Business registration and compliance assistance",
    eta: "Coming Q3 2024"
  },
  {
    icon: Users,
    title: "HR Automation",
    description: "Automated HR systems for growing organizations",
    eta: "Coming Q2 2024"
  },
  {
    icon: Heart,
    title: "Volunteer Recruiting Tools",
    description: "Platform to find and manage volunteers",
    eta: "Coming Q3 2024"
  },
  {
    icon: DollarSign,
    title: "Donation Collecting Tools",
    description: "Advanced fundraising and donation management",
    eta: "Coming Q4 2024"
  }
];

const ComingSoon = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            💡 Services Coming Soon
          </h2>
          <p className="text-xl text-gray-600">
            We're constantly expanding our support to better serve you
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {comingSoonServices.map((service, index) => (
            <Card key={index} className="relative group hover:shadow-lg transition-all duration-300 opacity-75 hover:opacity-90">
              {/* Coming Soon Badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-youth-orange text-white">
                  Coming Soon
                </Badge>
              </div>
              
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-gray-100 rounded-full group-hover:bg-youth-purple/10 transition-colors">
                    <service.icon className="h-8 w-8 text-gray-400 group-hover:text-youth-purple transition-colors" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 mb-4">
                  {service.description}
                </p>
                
                <Badge variant="secondary" className="mb-4">
                  {service.eta}
                </Badge>
                
                <Button 
                  variant="outline" 
                  className="w-full border-gray-300 text-gray-500 hover:border-youth-purple hover:text-youth-purple"
                  disabled
                >
                  <Bell className="mr-2 h-4 w-4" />
                  Notify Me When Live
                </Button>
              </CardContent>
              
              {/* Overlay to indicate coming soon */}
              <div className="absolute inset-0 bg-white/50 rounded-lg pointer-events-none"></div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            Want to be the first to know when these services launch?
          </p>
          <Button size="lg" className="bg-youth-orange hover:bg-youth-orange/90">
            <Bell className="mr-2 h-5 w-5" />
            Get Early Access Notifications
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
