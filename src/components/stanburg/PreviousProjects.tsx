
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Rural Women's Cooperative App",
    description: "Built a complete mobile app for connecting rural women entrepreneurs with urban markets",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=400&h=300&fit=crop",
    tags: ["Mobile App", "Social Impact", "E-commerce"],
    category: "Startup Support"
  },
  {
    title: "Climate Action NGO Website",
    description: "Developed a donation platform and awareness website that increased funding by 400%",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=300&fit=crop",
    tags: ["Website", "NGO", "Donations"],
    category: "Free CSR Support"
  },
  {
    title: "Young Activist Media Coverage",
    description: "Provided complete media strategy and coverage for a 16-year-old environmental activist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
    tags: ["Media Coverage", "PR Strategy", "Youth"],
    category: "Media + Tech Combo"
  },
  {
    title: "Local Support Center AI Chatbot",
    description: "Created an AI-powered chatbot for a mental health support center serving 1000+ users daily",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=300&fit=crop",
    tags: ["AI Chatbot", "Healthcare", "Support"],
    category: "AI + Media Combo"
  },
  {
    title: "Farmer's Market E-commerce",
    description: "Built an online marketplace connecting local farmers directly with consumers",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=300&fit=crop",
    tags: ["E-commerce", "Agriculture", "Local Business"],
    category: "Tech Support"
  },
  {
    title: "Education Non-Profit Platform",
    description: "Developed a learning management system for underprivileged children's education",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
    tags: ["Education", "LMS", "Social Impact"],
    category: "Free CSR Support"
  }
];

const PreviousProjects = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            📂 Previous Projects & Real Examples
          </h2>
          <p className="text-xl text-gray-600">
            See how we've transformed ideas into impactful realities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-youth-purple text-white">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-youth-purple transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button className="w-full bg-youth-blue hover:bg-youth-blue/90">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Read Full Story
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-youth-purple text-youth-purple hover:bg-youth-purple hover:text-white">
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PreviousProjects;
