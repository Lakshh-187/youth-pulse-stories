
import React from 'react';
import { Button } from '@/components/ui/button';

const CareerHero = () => {
  const scrollToOpenRoles = () => {
    const element = document.getElementById('open-roles');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-youth-purple/10 via-youth-blue/5 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800">
              Find Your Next Role. <br />
              <span className="text-youth-purple">Build a Career That Matters.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              View open roles, apply directly, and unlock your full potential with us.
              Join our team of passionate individuals making a difference.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={scrollToOpenRoles} size="lg">
                View Open Roles
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToOpenRoles}>
                Submit Application
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8 relative">
            <div className="relative bg-white rounded-lg shadow-xl overflow-hidden h-80 w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-youth-purple/20 to-youth-blue/20 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-youth-purple/10 rounded-full w-20 h-20 md:w-32 md:h-32 animate-pulse"></div>
            <div className="absolute -top-4 -left-4 bg-youth-blue/10 rounded-full w-16 h-16 md:w-24 md:h-24 animate-pulse delay-700"></div>
          </div>
        </div>
      </div>
      
      {/* Animated wave shape */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#f9fafb" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,218.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default CareerHero;
