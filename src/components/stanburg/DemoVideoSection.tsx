
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, ExternalLink } from 'lucide-react';

const DemoVideoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-youth-purple/10 to-youth-blue/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            🎥 See How Stanburg Transforms Ideas Into Reality
          </h2>
          
          <p className="text-xl text-gray-600 mb-8">
            A walkthrough video showing before-after transformation of real projects
          </p>
          
          {/* Video Placeholder */}
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
            <div className="aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-6 mb-4 inline-block">
                  <Play className="h-12 w-12 text-white" />
                </div>
                <p className="text-white text-lg">Demo Video Coming Soon</p>
                <p className="text-white/80">Watch real transformations in action</p>
              </div>
            </div>
            
            {/* Play overlay */}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                <Play className="mr-2 h-6 w-6" />
                Play Video
              </Button>
            </div>
          </div>
          
          <Button size="lg" className="bg-youth-orange hover:bg-youth-orange/90 text-white">
            <ExternalLink className="mr-2 h-5 w-5" />
            Watch Full Video on YouTube
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DemoVideoSection;
