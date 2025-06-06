
import React from 'react';
import { Check, Quote } from 'lucide-react';

const uniqueFeatures = [
  "Zero Tax or Service Fee",
  "Run by Philanthropists + Non-Profits", 
  "Personalized Mentorship with Every Project",
  "Available to NGOs, Startups, Founders",
  "Multi-layered Support (Tech + Media + Mentorship)",
  "Barter System for Service Exchange",
  "CSR-Powered Sustainable Model",
  "Community-Driven Development"
];

const WhyUnique = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            🌟 Why Stanburg is Unique?
          </h2>
          <p className="text-xl text-gray-600">
            More than a service - we're your silent co-founder
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {uniqueFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-youth-light rounded-lg hover:bg-youth-purple/10 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-youth-purple rounded-full flex items-center justify-center">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                </div>
                <span className="text-lg font-medium text-gray-800">{feature}</span>
              </div>
            ))}
          </div>
          
          {/* Quote Section */}
          <div className="relative bg-gradient-to-r from-youth-purple to-youth-blue rounded-2xl p-8 text-center text-white">
            <Quote className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <blockquote className="text-2xl md:text-3xl font-bold mb-4">
              "Stanburg is not just a service, it's your silent co-founder."
            </blockquote>
            <p className="text-lg opacity-90">
              We believe in empowering change-makers with the tools they need to transform communities
            </p>
            
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-20 h-20 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-16 h-16 bg-white/10 rounded-full"></div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 text-center">
            <div>
              <div className="text-3xl font-bold text-youth-purple">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-youth-blue">50+</div>
              <div className="text-gray-600">NGOs Supported</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-youth-orange">100%</div>
              <div className="text-gray-600">Free Service</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-youth-purple">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUnique;
