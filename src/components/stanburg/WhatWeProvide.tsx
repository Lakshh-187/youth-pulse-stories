
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Code, Smartphone, Bot, Globe, CreditCard, Wrench, Camera, Megaphone, Palette, Video, FileText, Mic, Shield, Zap, Users } from 'lucide-react';

const techServices = [
  { 
    icon: Globe, 
    title: "Website Development", 
    description: "Custom responsive websites with modern design",
    details: "WordPress, React, Custom CMS, E-commerce integration",
    price: "Worth ₹50,000+",
    timeline: "7-14 days"
  },
  { 
    icon: Smartphone, 
    title: "Mobile App Creation", 
    description: "iOS & Android apps with cross-platform support",
    details: "React Native, Flutter, Native development",
    price: "Worth ₹1,00,000+",
    timeline: "15-30 days"
  },
  { 
    icon: Bot, 
    title: "AI-Powered Tools", 
    description: "Custom chatbots and automation solutions",
    details: "OpenAI integration, Custom AI models, Workflow automation",
    price: "Worth ₹75,000+",
    timeline: "10-20 days"
  },
  { 
    icon: Code, 
    title: "Custom Software", 
    description: "Tailored software solutions for your needs",
    details: "CRM systems, Inventory management, Custom dashboards",
    price: "Worth ₹2,00,000+",
    timeline: "30-45 days"
  },
  { 
    icon: Globe, 
    title: "Domain & Hosting", 
    description: "Complete web presence setup with SSL",
    details: "Domain registration, Cloud hosting, SSL certificates",
    price: "Worth ₹15,000+",
    timeline: "1-2 days"
  },
  { 
    icon: Wrench, 
    title: "Free Bug Fixing & Mentorship", 
    description: "Ongoing technical support and guidance",
    details: "24/7 support, Code reviews, Technical mentorship",
    price: "Worth ₹25,000+",
    timeline: "Ongoing"
  },
  { 
    icon: CreditCard, 
    title: "Payment Gateway Integration", 
    description: "Secure payment processing setup",
    details: "Razorpay, Stripe, PayPal integration",
    price: "Worth ₹20,000+",
    timeline: "3-5 days"
  },
  { 
    icon: Smartphone, 
    title: "Dropshipping Setup", 
    description: "Complete e-commerce automation",
    details: "Product sourcing, Order automation, Inventory sync",
    price: "Worth ₹40,000+",
    timeline: "7-10 days"
  }
];

const mediaServices = [
  { 
    icon: FileText, 
    title: "News & Magazine Publishing", 
    description: "Professional content creation and publishing",
    details: "Press releases, Article writing, Media distribution",
    price: "Worth ₹30,000+",
    timeline: "3-7 days"
  },
  { 
    icon: Camera, 
    title: "Media Coverage", 
    description: "Press coverage and news distribution",
    details: "TV interviews, Newspaper features, Online coverage",
    price: "Worth ₹50,000+",
    timeline: "7-14 days"
  },
  { 
    icon: Palette, 
    title: "Branding & PR Strategy", 
    description: "Complete brand development and strategy",
    details: "Logo design, Brand guidelines, PR campaigns",
    price: "Worth ₹1,00,000+",
    timeline: "10-15 days"
  },
  { 
    icon: Megaphone, 
    title: "Digital Campaigns", 
    description: "Targeted marketing and advertisement",
    details: "Social media ads, Google ads, Influencer marketing",
    price: "Worth ₹75,000+",
    timeline: "Ongoing"
  },
  { 
    icon: FileText, 
    title: "Pitch Deck Creation", 
    description: "Investor-ready presentations",
    details: "Design, Content writing, Financial projections",
    price: "Worth ₹25,000+",
    timeline: "5-7 days"
  },
  { 
    icon: Video, 
    title: "Video & Voiceovers", 
    description: "Professional video content creation",
    details: "Explainer videos, Promotional content, Voice recording",
    price: "Worth ₹60,000+",
    timeline: "7-10 days"
  }
];

const WhatWeProvide = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            ⚙️ What We Provide
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Complete Tech & Media Support for Your Success
          </p>
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
            <Shield className="h-5 w-5" />
            <span className="font-semibold">100% FREE • No Hidden Charges • Lifetime Support</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technology Services */}
          <Card className="border-youth-purple/20 shadow-lg">
            <CardHeader className="text-center bg-gradient-to-r from-youth-purple/10 to-youth-blue/10">
              <CardTitle className="text-3xl font-bold text-youth-purple flex items-center justify-center">
                <Code className="mr-3 h-8 w-8" />
                Technology Services
              </CardTitle>
              <p className="text-gray-600 mt-2">End-to-end technical solutions</p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {techServices.map((service, index) => (
                  <div key={index} className="border border-gray-100 rounded-lg p-4 hover:border-youth-purple/30 transition-all hover:shadow-md">
                    <div className="flex items-start space-x-4">
                      <div className="bg-youth-purple/10 p-3 rounded-lg">
                        <service.icon className="h-6 w-6 text-youth-purple" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-gray-800">{service.title}</h4>
                          <Badge className="bg-green-100 text-green-800">FREE</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                        <p className="text-xs text-gray-500 mb-2">{service.details}</p>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-youth-purple font-semibold">{service.price}</span>
                          <span className="text-gray-500">⏱️ {service.timeline}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 space-y-3">
                <Button className="w-full bg-youth-purple hover:bg-youth-purple/90 text-lg py-3">
                  <Zap className="mr-2 h-5 w-5" />
                  Apply for Tech Services
                </Button>
                <Button variant="outline" className="w-full border-youth-purple text-youth-purple hover:bg-youth-purple hover:text-white">
                  Request Technical Demo
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Media Services */}
          <Card className="border-youth-blue/20 shadow-lg">
            <CardHeader className="text-center bg-gradient-to-r from-youth-blue/10 to-youth-orange/10">
              <CardTitle className="text-3xl font-bold text-youth-blue flex items-center justify-center">
                <Camera className="mr-3 h-8 w-8" />
                Media Services
              </CardTitle>
              <p className="text-gray-600 mt-2">Complete media and PR support</p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {mediaServices.map((service, index) => (
                  <div key={index} className="border border-gray-100 rounded-lg p-4 hover:border-youth-blue/30 transition-all hover:shadow-md">
                    <div className="flex items-start space-x-4">
                      <div className="bg-youth-blue/10 p-3 rounded-lg">
                        <service.icon className="h-6 w-6 text-youth-blue" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-gray-800">{service.title}</h4>
                          <Badge className="bg-green-100 text-green-800">FREE</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                        <p className="text-xs text-gray-500 mb-2">{service.details}</p>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-youth-blue font-semibold">{service.price}</span>
                          <span className="text-gray-500">⏱️ {service.timeline}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 space-y-3">
                <Button className="w-full bg-youth-blue hover:bg-youth-blue/90 text-lg py-3">
                  <Users className="mr-2 h-5 w-5" />
                  Apply for Media Services
                </Button>
                <Button variant="outline" className="w-full border-youth-blue text-youth-blue hover:bg-youth-blue hover:text-white">
                  Request Media Kit
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Combined Services Info */}
        <div className="mt-12 text-center bg-gradient-to-r from-youth-purple/5 to-youth-blue/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">🎯 Why Choose Our Combined Approach?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-youth-purple mb-2">₹10,00,000+</div>
              <div className="text-gray-600">Total Value of Services</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-youth-blue mb-2">100%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-youth-orange mb-2">0₹</div>
              <div className="text-gray-600">Your Investment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeProvide;
