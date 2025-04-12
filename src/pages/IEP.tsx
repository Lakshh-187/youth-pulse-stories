import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { 
  Building, GraduationCap, BookOpen, Lightbulb, 
  Download, Image, FileText, Users, Award, Globe,
  ArrowRight, Send, ExternalLink
} from "lucide-react";
import { 
  Card, CardContent, CardDescription, 
  CardFooter, CardHeader, CardTitle 
} from "@/components/ui/card";
import { 
  Accordion, AccordionContent, 
  AccordionItem, AccordionTrigger 
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  Form, FormControl, FormDescription, 
  FormField, FormItem, FormLabel, FormMessage 
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const IEP = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);
  const [showPremiumPopup, setShowPremiumPopup] = useState(false);

  const handlePremiumFeatureClick = () => {
    setShowPremiumPopup(true);
  };

  const closePremiumPopup = () => {
    setShowPremiumPopup(false);
  };

  const isPremiumMember = false; // Replace with actual premium member check


  const handleComponentClick = (componentId: string) => {
    setActiveComponent(activeComponent === componentId ? null : componentId);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7E69AB]/90 to-[#D6BCFA]/70 mix-blend-multiply"></div>
        <div 
          className="relative bg-cover bg-center py-24" 
          style={{
            backgroundImage: "url('https://risingunicorn.com/blog/dailydoseimage4.jpg')"
          }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <Badge variant="success" className="mb-4">International Standards</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                International Educational Program
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Transforming educational institutions to meet international standards through innovative 
                curriculum, modern infrastructure, and global best practices.
              </p>
              <Button asChild size="lg" className="bg-white text-[#7E69AB] hover:bg-white/90">
                <Link to="#programs">
                  Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Core Components Section */}
      <section id="programs" className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-2">Transform Your Institution</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Components of IEP</h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto mb-8">
              Our International Educational Program offers comprehensive solutions to elevate your 
              institution to global standards through these key pillars.
            </p>
          </div>

          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
            {/* Component Navigation */}
            <div className="md:w-1/3 lg:w-1/4 space-y-3">
              <Button 
                onClick={() => handleComponentClick('programs')}
                className={`w-full justify-start text-left py-6 ${activeComponent === 'programs' ? 'bg-[#FEF7CD] text-[#7E69AB] hover:bg-[#FEF7CD]/50' : 'bg-white hover:bg--100'}`}
              >
                <GraduationCap className={`h-5 w-5 mr-3 ${activeComponent === 'programs' ? 'text-[#7E69AB]' : ''}`} />
                Academic Programs
              </Button>
              
              <Button 
                onClick={() => handleComponentClick('establishments')}
                className={`w-full justify-start text-left py-6 ${activeComponent === 'establishments' ? 'bg-[#FEF7CD] text-[#7E69AB] hover:bg-[#FEF7CD]/90' : 'bg-white hover:bg-gray-100'}`}
              >
                <Building className={`h-5 w-5 mr-3 ${activeComponent === 'establishments' ? 'text-[#7E69AB]' : ''}`} />
                Establishments
              </Button>
              
              <Button 
                onClick={() => handleComponentClick('curriculum')}
                className={`w-full justify-start text-left py-6 ${activeComponent === 'curriculum' ? 'bg-[#FEF7CD] text-[#7E69AB] hover:bg-[#FEF7CD]/90' : 'bg-white hover:bg-gray-100'}`}
              >
                <BookOpen className={`h-5 w-5 mr-3 ${activeComponent === 'curriculum' ? 'text-[#7E69AB]' : ''}`} />
                Curriculum
              </Button>
              
              <Button 
                onClick={() => handleComponentClick('innovation')}
                className={`w-full justify-start text-left py-6 ${activeComponent === 'innovation' ? 'bg-[#FEF7CD] text-[#7E69AB] hover:bg-[#FEF7CD]/90' : 'bg-white hover:bg-gray-100'}`}
              >
                <Lightbulb className={`h-5 w-5 mr-3 ${activeComponent === 'innovation' ? 'text-[#7E69AB]' : ''}`} />
                Innovation
              </Button>
            </div>
            
            {/* Component Content */}
            <div className="md:w-2/3 lg:w-3/4 bg-white rounded-xl shadow-md overflow-hidden">
              {activeComponent === 'programs' && (
                <div className="p-6 md:p-8 animate-fade-in">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-[#7E69AB] mb-2">Academic Programs</h3>
                      <p className="text-gray-600">Internationally accredited programs that enhance learning outcomes</p>
                    </div>
                    <GraduationCap className="h-16 w-16 text-[#7E69AB]/20" />
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">K-12 International Programs</h4>
                      <p className="text-gray-600">Comprehensive educational frameworks aligned with global standards for primary and secondary education.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">STEM Excellence Initiative</h4>
                      <p className="text-gray-600">Advanced science, technology, engineering, and mathematics programs with hands-on learning approaches.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Global Languages Framework</h4>
                      <p className="text-gray-600">Multilingual education strategies to prepare students for international communication and cultural exchange.</p>
                    </div>
                  </div>
                  
                  <Button className="mt-8 bg-[#7E69AB] hover:bg-[#7E69AB]/90">
                    Explore All Programs <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
              
              {activeComponent === 'establishments' && (
                <div className="p-6 md:p-8 animate-fade-in">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-[#7E69AB] mb-2">Establishments</h3>
                      <p className="text-gray-600">Infrastructure and facilities that meet global standards</p>
                    </div>
                    <Building className="h-16 w-16 text-[#7E69AB]/20" />
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Smart Campus Development</h4>
                      <p className="text-gray-600">Technologically advanced infrastructure with IoT integration for improved learning and administrative efficiency.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Sustainable School Design</h4>
                      <p className="text-gray-600">Eco-friendly campus development with renewable energy integration and sustainable architectural principles.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Digital Infrastructure</h4>
                      <p className="text-gray-600">Comprehensive technological foundation including high-speed networks, cloud systems, and digital learning platforms.</p>
                    </div>
                  </div>
                  
                  <Button className="mt-8 bg-[#7E69AB] hover:bg-[#7E69AB]/90">
                    Explore All Facilities <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
              
              {activeComponent === 'curriculum' && (
                <div className="p-6 md:p-8 animate-fade-in">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-[#7E69AB] mb-2">Curriculum</h3>
                      <p className="text-gray-600">Modern, engaging syllabus aligned with global standards</p>
                    </div>
                    <BookOpen className="h-16 w-16 text-[#7E69AB]/20" />
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Competency-Based Learning</h4>
                      <p className="text-gray-600">Curriculum focused on skills development and practical application rather than rote memorization.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Cross-Cultural Integration</h4>
                      <p className="text-gray-600">Educational content that incorporates global perspectives while preserving local cultural context.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Future-Ready Skills Framework</h4>
                      <p className="text-gray-600">Curriculum elements focused on digital literacy, critical thinking, collaboration, and adaptability for future careers.</p>
                    </div>
                  </div>
                  
                  <Button className="mt-8 bg-[#7E69AB] hover:bg-[#7E69AB]/90">
                    Explore Curriculum Models <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
              
              {activeComponent === 'innovation' && (
                <div className="p-6 md:p-8 animate-fade-in">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-[#7E69AB] mb-2">Innovation</h3>
                      <p className="text-gray-600">Cutting-edge educational technologies and methodologies</p>
                    </div>
                    <Lightbulb className="h-16 w-16 text-[#7E69AB]/20" />
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">AI-Assisted Learning</h4>
                      <p className="text-gray-600">Integration of artificial intelligence for personalized learning paths and adaptive educational content.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Virtual Reality Classrooms</h4>
                      <p className="text-gray-600">Immersive learning environments that transform abstract concepts into interactive experiences.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Project-Based Learning Labs</h4>
                      <p className="text-gray-600">Dedicated spaces and methodologies for hands-on, collaborative problem-solving and innovation.</p>
                    </div>
                  </div>
                  
                  <Button className="mt-8 bg-[#7E69AB] hover:bg-[#7E69AB]/90">
                    Explore All Innovations <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
              
              {!activeComponent && (
                <div className="flex items-center justify-center h-full p-12 text-center">
                  <div>
                    <Lightbulb className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-gray-500">Select a component to see details</h3>
                    <p className="text-gray-400 mt-2">Click on one of the options on the left to explore</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Application Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-2">Join Our Network</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Apply for IEP Integration</h2>
            <p className="text-lg text-gray-600 mb-8">
              Transform your educational institution by integrating our International Educational Program. 
              Complete our simple application form to start the journey toward global standards.
            </p>
            
            <div className="bg-[#F9FAFB] rounded-xl p-8 shadow-sm">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0 bg-[#EDE9F7] h-20 w-20 rounded-full flex items-center justify-center">
                  <Send className="h-8 w-8 text-[#7E69AB]" />
                </div>
                <div className="flex-grow text-left max-w-md">
                  <h3 className="text-xl font-bold mb-2">Ready to transform your institution?</h3>
                  <p className="text-gray-600 mb-4">Our application process is simple and our team will guide you through every step.</p>
                  <Button asChild size="lg" className="bg-[#7E69AB] hover:bg-[#7E69AB]/90">
                    <a href="https://forms.google.com/iep-application" target="_blank" rel="noopener noreferrer">
                      Apply Now <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Image Gallery with Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">Success Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">International Schools Gallery</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how educational institutions around the world have transformed through our 
              International Educational Program.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <div className="p-1">
                    <div className="overflow-hidden rounded-xl">
                      <img 
                        src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                        alt="International School Building" 
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="p-6 bg-white">
                        <Badge className="mb-2" variant="outline">North America</Badge>
                        <h3 className="text-xl font-bold">Cambridge International School</h3>
                        <p className="text-gray-600">A model of excellence in international education standards with state-of-the-art facilities.</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <div className="overflow-hidden rounded-xl">
                      <img 
                        src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                        alt="Digital Learning Environment" 
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="p-6 bg-white">
                        <Badge className="mb-2" variant="outline">Europe</Badge>
                        <h3 className="text-xl font-bold">Global Tech Academy</h3>
                        <p className="text-gray-600">Pioneering digital learning environments and innovative teaching methodologies.</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <div className="overflow-hidden rounded-xl">
                      <img 
                        src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                        alt="Innovative Learning Environment" 
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="p-6 bg-white">
                        <Badge className="mb-2" variant="outline">Asia</Badge>
                        <h3 className="text-xl font-bold">Innovation Learning Hub</h3>
                        <p className="text-gray-600">Merging tradition with cutting-edge educational technology for holistic development.</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <div className="flex justify-center mt-6">
                <CarouselPrevious className="relative static translate-y-0 left-0 mr-2" />
                <CarouselNext className="relative static translate-y-0 right-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Publications Section with Tabs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">Knowledge Resources</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Publications & Case Studies</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access our comprehensive research, reports, and case studies on international education 
              transformation and best practices.
            </p>
          </div>

          <Tabs defaultValue="reports" className="w-full">
            <TabsList className="w-full flex justify-center mb-8 p-1 bg-[#EDE9F7] rounded-lg max-w-md mx-auto">
              <TabsTrigger value="reports" className="rounded-md data-[state=active]:bg-[#7E69AB] data-[state=active]:text-white">
                Reports
              </TabsTrigger>
              <TabsTrigger value="casestudies" className="rounded-md data-[state=active]:bg-[#7E69AB] data-[state=active]:text-white">
                Case Studies
              </TabsTrigger>
              <TabsTrigger value="research" className="rounded-md data-[state=active]:bg-[#7E69AB] data-[state=active]:text-white">
                Research Papers
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="reports" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <Badge variant="secondary" className="mb-2 w-fit">Annual Report</Badge>
                    <CardTitle>Global Education Trends 2025</CardTitle>
                    <CardDescription>Analysis of emerging trends in international education</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      This comprehensive report examines the evolving landscape of global education and 
                      forecasts key trends that will shape international educational standards.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <FileText className="h-4 w-4 mr-2" />
                      <span>PDF • 24 pages • 4.2 MB</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#7E69AB] hover:bg-[#7E69AB]/90" onClick={handlePremiumFeatureClick}>
                      <Download className="mr-2 h-4 w-4" /> Loading.....
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <Badge variant="info" className="mb-2 w-fit">Impact Study</Badge>
                    <CardTitle>Digital Transformation in Education</CardTitle>
                    <CardDescription>How technology is reshaping global learning</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Explore how digital technologies are transforming educational institutions and 
                      creating new opportunities for enhanced learning experiences.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <FileText className="h-4 w-4 mr-2" />
                      <span>PDF • 18 pages • 3.5 MB</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#7E69AB] hover:bg-[#7E69AB]/90" onClick={handlePremiumFeatureClick}>
                      <Download className="mr-2 h-4 w-4" /> Loading....
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <Badge variant="warning" className="mb-2 w-fit">Whitepaper</Badge>
                    <CardTitle>Curriculum Development Framework</CardTitle>
                    <CardDescription>Building globally competitive educational programs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      A detailed framework for developing curricula that align with international 
                      standards while preserving cultural context and relevance.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <FileText className="h-4 w-4 mr-2" />
                      <span>PDF • 32 pages • 5.7 MB</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#7E69AB] hover:bg-[#7E69AB]/90" onClick={handlePremiumFeatureClick}>
                      <Download className="mr-2 h-4 w-4" /> Loading...
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="casestudies">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <Badge variant="success" className="mb-2 w-fit">Success Story</Badge>
                    <CardTitle>International School of Helsinki</CardTitle>
                    <CardDescription>Complete transformation in 24 months</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      How a traditional school transformed into a global leader in education 
                      through comprehensive implementation of IEP standards.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#7E69AB] hover:bg-[#7E69AB]/90" onClick={isPremiumMember ? () => {} : handlePremiumFeatureClick}>
                      Read Case Study
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <Badge variant="success" className="mb-2 w-fit">Success Story</Badge>
                    <CardTitle>Singapore Global Academy</CardTitle>
                    <CardDescription>Curriculum innovation in Asia</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      A detailed look at how curriculum innovation transformed learning outcomes 
                      and student engagement at this prestigious institution.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#7E69AB] hover:bg-[#7E69AB]/90" onClick={isPremiumMember ? () => {} : handlePremiumFeatureClick}>
                      Read Case Study
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <Badge variant="success" className="mb-2 w-fit">Success Story</Badge>
                    <CardTitle>Brazilian Tech Institute</CardTitle>
                    <CardDescription>Technology integration in education</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      How a traditional institution embraced digital transformation to become 
                      a model for technology-enhanced learning.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#7E69AB] hover:bg-[#7E69AB]/90" onClick={isPremiumMember ? () => {} : handlePremiumFeatureClick}>
                      Read Case Study
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="research">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <Badge variant="secondary" className="mb-2 w-fit">Research</Badge>
                    <CardTitle>Effectiveness of Hybrid Learning Models</CardTitle>
                    <CardDescription>A comparative analysis across 12 countries</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      This research paper examines the impact of hybrid learning models on 
                      educational outcomes across diverse global contexts.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#7E69AB] hover:bg-[#7E69AB]/90" onClick={isPremiumMember ? () => {} : handlePremiumFeatureClick}>
                      <Download className="mr-2 h-4 w-4" /> Download Paper
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <Badge variant="secondary" className="mb-2 w-fit">Research</Badge>
                    <CardTitle>Cultural Integration in Global Curricula</CardTitle>
                    <CardDescription>Balancing standardization and cultural context</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      An examination of successful approaches to integrating cultural context 
                      within internationally standardized educational frameworks.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#7E69AB] hover:bg-[#7E69AB]/90" onClick={isPremiumMember ? () => {} : handlePremiumFeatureClick}>
                      <Download className="mr-2 h-4 w-4" /> Download Paper
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <Badge variant="secondary" className="mb-2 w-fit">Research</Badge>
                    <CardTitle>Impact of Physical Learning Spaces</CardTitle>
                    <CardDescription>Infrastructure design for optimal outcomes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      This research explores how physical environment design impacts learning 
                      outcomes and student wellbeing in educational institutions.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#7E69AB] hover:bg-[#7E69AB]/90" onClick={isPremiumMember ? () => {} : handlePremiumFeatureClick}>
                      <Download className="mr-2 h-4 w-4" /> Download Paper
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Downloads Section - Interactive Clickable Buttons */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">Educational Resources</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Download Materials</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access our comprehensive suite of educational resources to enhance your institution's 
              journey towards international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Resource Categories as Interactive Cards */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
              <div className="h-2 bg-[#9b87f5]"></div>
              <div className="p-6 text-center">
                <div className="w-16 h-16 mx-auto bg-[#EDE9F7] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#9b87f5] transition-colors duration-300">
                  <BookOpen className="h-8 w-8 text-[#7E69AB] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3">Curriculum Frameworks</h3>
                <p className="text-gray-600 mb-6">
                  Access internationally-aligned educational frameworks for various subjects and grade levels.
                </p>
                <Button className="w-full bg-[#7E69AB] hover:bg-[#7E69AB]/90" onClick={handlePremiumFeatureClick}>
                  <Download className="mr-2 h-4 w-4" /> Loading...
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
              <div className="h-2 bg-[#6E59A5]"></div>
              <div className="p-6 text-center">
                <div className="w-16 h-16 mx-auto bg-[#EDE9F7] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#6E59A5] transition-colors duration-300">
                  <FileText className="h-8 w-8 text-[#7E69AB] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3">E-Books</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive guides and references on modern educational methodologies and best practices.
                </p>
                <Button className="w-full bg-[#7E69AB] hover:bg-[#7E69AB]/90" onClick={handlePremiumFeatureClick}>
                  <Download className="mr-2 h-4 w-4" /> Loading...
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
              <div className="h-2 bg-[#8B5CF6]"></div>
              <div className="p-6 text-center">
                <div className="w-16 h-16 mx-auto bg-[#EDE9F7] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#8B5CF6] transition-colors duration-300">
                  <FileText className="h-8 w-8 text-[#7E69AB] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3">Data & Reports</h3>
                <p className="text-gray-600 mb-6">
                  Research findings and statistical information on global education trends and outcomes.
                </p>
                <Button className="w-full bg-[#7E69AB] hover:bg-[#7E69AB]/90" onClick={handlePremiumFeatureClick}>
                  <Download className="mr-2 h-4 w-4" /> Loading....
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
              <div className="h-2 bg-[#D6BCFA]"></div>
              <div className="p-6 text-center">
                <div className="w-16 h-16 mx-auto bg-[#EDE9F7] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#D6BCFA] transition-colors duration-300">
                  <Download className="h-8 w-8 text-[#7E69AB] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3">Templates & Tools</h3>
                <p className="text-gray-600 mb-6">
                  Practical resources for assessment, curriculum planning, and implementation strategies.
                </p>
                <Button className="w-full bg-[#7E69AB] hover:bg-[#7E69AB]/90" onClick={handlePremiumFeatureClick}>
                  <Download className="mr-2 h-4 w-4" /> Loading....
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Opportunities with Yellowish Highlights */}
      <section className="py-20 bg-gradient-to-r from-[#b280ff]/90 to-[#b280ff]/80 text-dark bold white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-2">Engagement Opportunities</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Educational Ecosystem</h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Explore additional opportunities to engage with our international educational network 
              and enhance your institution's global presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Seasonal Teachers Card with Yellowish Highlight */}
            <div className="relative group overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FEF7CD]/10 to-[#FEF7CD]/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition-all relative z-10">
                <Users className="h-12 w-12 mb-6 text-white/90" />
                <h3 className="text-xl font-bold mb-3">Seasonal Teachers</h3>
                <p className="mb-6 opacity-90">
                  Host international interns as seasonal teachers to bring global 
                  perspectives and fresh methodologies to your institution.
                </p>
                <Button variant="secondary" className="bg-[#FEF7CD] text-[#7E69AB] hover:bg-[#FEF7CD]/90" onClick={isPremiumMember ? () => {} : handlePremiumFeatureClick}>
                  Apply as Host Institution
                </Button>
              </div>
            </div>

            {/* Hackathon Projects Card with Yellowish Highlight */}
            <div className="relative group overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FEF7CD]/10 to-[#FEF7CD]/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition-all relative z-10">
                <Lightbulb className="h-12 w-12 mb-6 text-white/90" />
                <h3 className="text-xl font-bold mb-3">Innovation Projects</h3>
                <p className="mb-6 opacity-90">
                  Implement transformative projects developed during our educational 
                  hackathons designed to solve real institutional challenges.
                </p>
                <Button variant="secondary" className="bg-[#FEF7CD] text-[#7E69AB] hover:bg-[#FEF7CD]/90" onClick={isPremiumMember ? () => {} : handlePremiumFeatureClick}>
                  Explore Projects
                </Button>
              </div>
            </div>

            {/* Grants Card with Yellowish Highlight */}
            <div className="relative group overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FEF7CD]/10 to-[#FEF7CD]/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition-all relative z-10">
                <Award className="h-12 w-12 mb-6 text-white/90" />
                <h3 className="text-xl font-bold mb-3">CR Grants Program</h3>
                <p className="mb-6 opacity-90">
                  Apply for Curriculum Reform grants designed to support institutions 
                  in their journey towards international standards.
                </p>
                <Button variant="secondary" className="bg-[#FEF7CD] text-[#7E69AB] hover:bg-[#FEF7CD]/90" onClick={isPremiumMember ? () => {} : handlePremiumFeatureClick}>
                  Apply for Grants
                </Button>
              </div>
            </div>

            {/* Global Clubs Card with Yellowish Highlight */}
            <div className="relative group overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FEF7CD]/10 to-[#FEF7CD]/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition-all relative z-10">
                <Globe className="h-12 w-12 mb-6 text-white/90" />
                <h3 className="text-xl font-bold mb-3">Global Clubs & Societies</h3>
                <p className="mb-6 opacity-90">
                  Establish international clubs and societies in your institution to 
                  foster global citizenship and cross-cultural understanding.
                </p>
                <Button variant="secondary" className="bg-[#FEF7CD] text-[#7E69AB] hover:bg-[#FEF7CD]/90" onClick={isPremiumMember ? () => {} : handlePremiumFeatureClick}>
                  Start a Club
                </Button>
              </div>
            </div>

            {/* Faculty Workshops Card with Yellowish Highlight */}
            <div className="relative group overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FEF7CD]/10 to-[#FEF7CD]/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition-all relative z-10">
                <GraduationCap className="h-12 w-12 mb-6 text-white/90" />
                <h3 className="text-xl font-bold mb-3">Faculty Workshops</h3>
                <p className="mb-6 opacity-90">
                  Participate in specialized workshops designed to equip your faculty 
                  with international teaching methodologies and practices.
                </p>
                <Button variant="secondary" className="bg-[#FEF7CD] text-[#7E69AB] hover:bg-[#FEF7CD]/90" onClick={isPremiumMember ? () => {} : handlePremiumFeatureClick}>
                  Register for Workshops
                </Button>
              </div>
            </div>

            {/* Institution Exchange Card with Yellowish Highlight */}
            <div className="relative group overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FEF7CD]/10 to-[#FEF7CD]/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition-all relative z-10">
                <Building className="h-12 w-12 mb-6 text-white/90" />
                <h3 className="text-xl font-bold mb-3">Institution Exchange</h3>
                <p className="mb-6 opacity-90">
                  Join our network of partner institutions for collaborative projects, 
                  student exchanges, and shared educational resources.
                </p>
                <Button variant="secondary" className="bg-[#FEF7CD] text-[#7E69AB] hover:bg-[#FEF7CD]/90" onClick={isPremiumMember ? () => {} : handlePremiumFeatureClick}>
                  Partner With Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">Questions & Answers</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our International Educational Program 
              and how it can transform your institution.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="hover:text-[#7E69AB]">What is the International Educational Program (IEP)?</AccordionTrigger>
                <AccordionContent>
                  The International Educational Program (IEP) is a comprehensive framework designed to transform 
                  educational institutions to meet international standards. It encompasses curriculum development, 
                  infrastructure enhancement, teaching methodologies, and administrative practices to create a 
                  globally competitive educational environment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="hover:text-[#7E69AB]">How long does the IEP implementation take?</AccordionTrigger>
                <AccordionContent>
                  The implementation timeline varies based on the institution's current state and specific goals. 
                  Typically, basic implementation can be completed within 12-18 months, while comprehensive 
                  transformation may take 24-36 months. Our team works with each institution to develop a 
                  customized timeline that considers their unique circumstances.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="hover:text-[#7E69AB]">What support does IEP provide after implementation?</AccordionTrigger>
                <AccordionContent>
                  IEP offers ongoing support through regular assessments, professional development for faculty, 
                  curriculum updates, technology integration assistance, and access to our global network of 
                  educational institutions. We remain partners in your educational journey, ensuring sustainable 
                  transformation and continuous improvement.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="hover:text-[#7E69AB]">Does IEP replace our existing curriculum?</AccordionTrigger>
                <AccordionContent>
                  IEP is designed to enhance rather than replace your existing curriculum. We work with institutions 
                  to integrate international standards while preserving cultural relevance and institutional identity. 
                  The program adapts to your specific context while introducing best practices from global education.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="hover:text-[#7E69AB]">How can we measure the impact of IEP implementation?</AccordionTrigger>
                <AccordionContent>
                  IEP includes comprehensive assessment tools to measure impact across multiple dimensions: 
                  student achievement, faculty development, institutional reputation, global engagement, and 
                  administrative efficiency. We establish baseline metrics at the beginning of implementation 
                  and conduct regular evaluations to track progress and adjust strategies as needed.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />

      {/* Premium Member Popup */}
      {showPremiumPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg p-8 max-w-md">
            <h2 className="text-2xl font-bold mb-4">Premium Feature</h2>
            <p className="mb-6">This feature is available for premium members only.</p>
            <div className="flex justify-end">
              <Button 
                variant="outline" 
                onClick={closePremiumPopup} 
                className="mr-2"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Application Form Component
const ApplicationForm = () => {
  const formSchema = z.object({
    institutionName: z.string().min(2, { message: "Institution name is required" }),
    contactName: z.string().min(2, { message: "Contact name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().min(10, { message: "Valid phone number is required" }),
    institutionType: z.string().min(1, { message: "Please select an institution type" }),
    message: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      institutionName: "",
      contactName: "",
      email: "",
      phone: "",
      institutionType: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would typically send the form data to your backend
    alert("Application submitted successfully!");
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="institutionName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Institution Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your institution name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contactName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Person</FormLabel>
              <FormControl>
                <Input placeholder="Full name of primary contact" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Your phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="institutionType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Institution Type</FormLabel>
              <FormControl>
                <select
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  {...field}
                >
                  <option value="">Select institution type</option>
                  <option value="k12">K-12 School</option>
                  <option value="university">University</option>
                  <option value="college">College</option>
                  <option value="vocational">Vocational Institution</option>
                  <option value="other">Other</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Information</FormLabel>
              <FormControl>
                <textarea
                  className="flex h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none md:text-sm"
                  placeholder="Tell us about your institution and goals"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Please provide any additional information about your institution and specific goals.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          <Send className="mr-2 h-4 w-4" /> Submit Application
        </Button>
      </form>
    </Form>
  );
};

export default IEP;
