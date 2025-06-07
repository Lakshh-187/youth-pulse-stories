
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Quote, Shield, Heart, Zap, Users, Star, Trophy, Sparkles, Crown, Gift } from 'lucide-react';

const uniqueFeatures = [
  {
    icon: Shield,
    title: "Zero Tax or Service Fee",
    description: "100% free services with no hidden charges",
    color: "from-green-400 to-emerald-600"
  },
  {
    icon: Heart,
    title: "Non-Profit Driven",
    description: "Run by philanthropists & NGOs",
    color: "from-red-400 to-pink-600"
  },
  {
    icon: Users,
    title: "Personalized Mentorship",
    description: "1-on-1 guidance with every project",
    color: "from-blue-400 to-indigo-600"
  },
  {
    icon: Zap,
    title: "Multi-layered Support",
    description: "Tech + Media + Mentorship combined",
    color: "from-yellow-400 to-orange-600"
  },
  {
    icon: Star,
    title: "Available to All",
    description: "NGOs, Startups, Founders welcome",
    color: "from-purple-400 to-violet-600"
  },
  {
    icon: Trophy,
    title: "CSR-Powered Model",
    description: "Sustainable funding from grants",
    color: "from-cyan-400 to-teal-600"
  },
  {
    icon: Gift,
    title: "Barter System",
    description: "Exchange skills for services",
    color: "from-pink-400 to-rose-600"
  },
  {
    icon: Crown,
    title: "Community-Driven",
    description: "Built by and for change-makers",
    color: "from-indigo-400 to-blue-600"
  }
];

const WhyUnique = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-youth-purple/5 via-white to-youth-blue/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-youth-purple/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-youth-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-youth-orange/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-youth-purple to-youth-blue rounded-full px-6 py-3 mb-6">
            <Sparkles className="h-6 w-6 text-white animate-pulse" />
            <span className="text-white font-semibold">What Makes Us Special</span>
            <Sparkles className="h-6 w-6 text-white animate-pulse" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-youth-purple via-youth-blue to-youth-orange bg-clip-text text-transparent">
              🌟 Why Stanburg is Unique?
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            More than a service - we're your <strong className="text-youth-purple">silent co-founder</strong>
          </p>
        </div>
        
        {/* Features Grid with Enhanced Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {uniqueFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Icon container */}
              <div className="relative z-10 mb-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-youth-purple transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Hover effect decoration */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Check className="h-6 w-6 text-green-500" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced Quote Section */}
        <div className="relative mb-16">
          <div className="bg-gradient-to-r from-youth-purple via-youth-blue to-youth-orange rounded-3xl p-1">
            <div className="bg-white rounded-3xl p-12 text-center relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 left-4 w-8 h-8 border-2 border-youth-purple rounded-full"></div>
                <div className="absolute top-12 right-8 w-6 h-6 border-2 border-youth-blue rounded-full"></div>
                <div className="absolute bottom-8 left-12 w-10 h-10 border-2 border-youth-orange rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-2 border-youth-purple rounded-full"></div>
              </div>
              
              <Quote className="h-16 w-16 mx-auto mb-6 text-youth-purple opacity-30" />
              <blockquote className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-youth-purple to-youth-blue bg-clip-text text-transparent">
                "Stanburg is not just a service, it's your silent co-founder."
              </blockquote>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We believe in empowering change-makers with the tools they need to transform communities and create lasting impact.
              </p>
            </div>
          </div>
        </div>
        
        {/* Stats Section with Better Design */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { number: "500+", label: "Projects Completed", icon: Trophy, color: "text-youth-purple" },
            { number: "50+", label: "NGOs Supported", icon: Heart, color: "text-youth-blue" },
            { number: "100%", label: "Free Service", icon: Gift, color: "text-youth-orange" },
            { number: "24/7", label: "Support Available", icon: Zap, color: "text-youth-purple" }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow group">
              <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform`} />
              <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-youth-purple to-youth-blue rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Vision?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join 500+ visionaries who chose impact over profit
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button size="lg" className="bg-white text-youth-purple hover:bg-gray-100 flex-1">
                <Users className="mr-2 h-5 w-5" />
                Apply Now (FREE)
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-youth-purple flex-1">
                <Heart className="mr-2 h-5 w-5" />
                Partner with Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUnique;
