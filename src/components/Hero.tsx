import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const Hero = () => {
  return <div className="relative w-full overflow-hidden mb-12">
      <div className="absolute inset-0 bg-gradient-to-r from-youth-purple/90 to-youth-blue/70 mix-blend-multiply"></div>
      <div className="relative bg-cover bg-center h-[70vh] md:h-[80vh]" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80')"
    }}>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center bg-red-600">
          <div className="max-w-2xl text-white">
            <span className="inline-block px-3 py-1 bg-youth-orange/90 text-white text-sm font-medium rounded-full mb-4">
              Featured Story
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
              The Digital Revolution Reshaping Youth Education
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-6">
              How technology is creating new opportunities and challenges for the next generation of learners.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-white text-youth-purple hover:bg-white/90">
                <Link to="/story/digital-revolution">
                  Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Explore More Stories
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;