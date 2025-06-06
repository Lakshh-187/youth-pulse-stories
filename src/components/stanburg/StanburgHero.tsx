
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, Star, Users, Award } from 'lucide-react';

const StanburgHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-youth-purple/10 via-white to-youth-blue/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-youth-purple/5 to-youth-blue/5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-youth-orange/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-youth-purple/20 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-youth-blue/20 rounded-full animate-pulse"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg">
            <Award className="h-5 w-5 text-youth-orange" />
            <span className="text-sm font-semibold text-gray-700">Transforming Frontliners Since 2020</span>
            <div className="flex space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-youth-purple via-youth-blue to-youth-orange bg-clip-text text-transparent">
              Stanburg
            </span>
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            🌟 Where Frontliners Get Transformed
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto">
            Empowering <strong>Founders</strong>, <strong>Startups</strong>, <strong>Activists</strong> & <strong>NGOs</strong> with
          </p>
          
          <p className="text-lg md:text-xl text-youth-purple font-semibold mb-8">
            🆓 FREE Tech & Media Support • 🤝 Zero Service Fees • 💡 Complete Mentorship
          </p>
          
          {/* Statistics */}
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-center">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-youth-purple">500+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-youth-blue">₹0</div>
              <div className="text-sm text-gray-600">Service Fee</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-youth-orange">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-youth-purple hover:bg-youth-purple/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
              <Users className="mr-2 h-6 w-6" />
              Apply Now (FREE)
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button variant="outline" size="lg" className="border-2 border-youth-blue text-youth-blue hover:bg-youth-blue hover:text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
              Explore All Services
            </Button>
            
            <Button variant="ghost" size="lg" className="text-youth-orange hover:text-youth-orange/80 hover:bg-youth-orange/10 px-8 py-4 text-lg">
              <Play className="mr-2 h-6 w-6" />
              Watch Demo Video
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">Trusted by organizations worldwide</p>
            <div className="flex justify-center items-center space-x-6 text-xs text-gray-400">
              <span>🏢 50+ NGOs</span>
              <span>🚀 200+ Startups</span>
              <span>👥 100+ Activists</span>
              <span>💼 150+ Entrepreneurs</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-youth-purple rounded-full flex justify-center">
          <div className="w-1 h-3 bg-youth-purple rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default StanburgHero;
