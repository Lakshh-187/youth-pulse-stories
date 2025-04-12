
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden mb-12">
      <div className="absolute inset-0 bg-gradient-to-r from-[#ea384c]/90 to-[#FFDEE2]/70 mix-blend-multiply"></div>
      <div 
        className="relative bg-cover bg-center h-[70vh] md:h-[80vh]" 
        style={{
          backgroundImage: "url('https://risingunicorn.com/blog/dailydoseimage3.jpg')"
        }}
      >
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <span className="inline-block px-3 py-1 bg-youth-orange/90 text-white text-sm font-medium rounded-full mb-4">
              Youth Leadership
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
              Empowering Tomorrow's Leaders Today
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-6">
              Innovation • Leadership • Opportunities • Cohorts • Uni-talks • Uni-pitch
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-white text-[#ea384c] hover:bg-white/90">
                <Link to="/frontliner">
                  Explore Opportunities <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Discover Programs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
