
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, Rocket, Brain, Leaf, Heart, Store } from 'lucide-react';

const empowerCategories = [
  {
    icon: Briefcase,
    title: "Entrepreneurs",
    description: "Turn your business ideas into reality with our tech support",
    testimonial: "Stanburg helped me launch my e-commerce platform in just 2 weeks!"
  },
  {
    icon: Rocket,
    title: "Startups",
    description: "Scale your startup with professional development and media coverage",
    testimonial: "From MVP to market leader - Stanburg was our silent co-founder"
  },
  {
    icon: Brain,
    title: "Innovators",
    description: "Bring innovative solutions to life with AI-powered tools",
    testimonial: "My AI chatbot idea became reality thanks to Stanburg's mentorship"
  },
  {
    icon: Leaf,
    title: "Social Activists",
    description: "Amplify your cause with powerful digital platforms and media reach",
    testimonial: "Our climate campaign reached 100K+ people through Stanburg's support"
  },
  {
    icon: Heart,
    title: "NGOs & Initiators",
    description: "Maximize your impact with custom websites and donation platforms",
    testimonial: "Stanburg built our donation portal - we raised 300% more funds!"
  },
  {
    icon: Store,
    title: "Small Businesses",
    description: "Compete with big brands using professional websites and apps",
    testimonial: "Our local bakery now has online orders thanks to Stanburg's app"
  }
];

const WhoWeEmpower = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            🔥 Who We Empower
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We support visionaries, changemakers, and leaders who are ready to transform their communities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {empowerCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <category.icon className="h-12 w-12 text-youth-purple group-hover:text-youth-blue transition-colors" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {category.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                
                <div className="bg-youth-light p-3 rounded-lg mb-4">
                  <p className="text-sm italic text-gray-700">
                    "{category.testimonial}"
                  </p>
                </div>
                
                <Button className="w-full bg-youth-purple hover:bg-youth-purple/90">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeEmpower;
