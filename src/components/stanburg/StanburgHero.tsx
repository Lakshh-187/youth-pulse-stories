
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, Star } from 'lucide-react';

const StanburgHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-youth-purple/10 via-white to-youth-blue/10">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url(https://i.ibb.co/PZPKx89L/a-stylized-award-show-backdrop-design-fe-Rn-Ly-ngn-QFy-T2pp-F9v9z3w-4zo-Gr-Qf8-Scyhe-EUlow-B13-Q.jpg)'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Star className="h-8 w-8 text-youth-orange mr-2" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-youth-purple to-youth-blue bg-clip-text text-transparent">
              Stanburg
            </h1>
            <Star className="h-8 w-8 text-youth-orange ml-2" />
          </div>
          
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-4">
            Where Frontliners Get Transformed
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Empowering Founders, Startups, Activists & NGOs with Free Tech & Media Support
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-youth-purple hover:bg-youth-purple/90 text-white px-8 py-3">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button variant="outline" size="lg" className="border-youth-blue text-youth-blue hover:bg-youth-blue hover:text-white px-8 py-3">
              Explore Services
            </Button>
            
            <Button variant="ghost" size="lg" className="text-youth-orange hover:text-youth-orange/80">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-youth-purple rounded-full flex justify-center">
          <div className="w-1 h-3 bg-youth-purple rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default StanburgHero;
