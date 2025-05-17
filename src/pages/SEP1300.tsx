
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { 
  Dialog, 
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import QueryCard from '@/components/sep1300/QueryCard';
import OpportunityCard from '@/components/sep1300/OpportunityCard';
import QueryDetailModal from '@/components/sep1300/QueryDetailModal';
import OpportunityDetailModal from '@/components/sep1300/OpportunityDetailModal';
import ProgramDetailModal from '@/components/sep1300/ProgramDetailModal';
import { queriesData, opportunitiesData } from '@/data/sep1300Data';

const SEP1300 = () => {
  const [activeTab, setActiveTab] = useState('queries');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isQueryModalOpen, setIsQueryModalOpen] = useState(false);
  const [isOpportunityModalOpen, setIsOpportunityModalOpen] = useState(false);
  const [isProgramModalOpen, setIsProgramModalOpen] = useState(false);

  // Filter queries based on search
  const filteredQueries = queriesData.filter(query => 
    query.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    query.problem.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter opportunities based on search
  const filteredOpportunities = opportunitiesData.filter(opportunity => 
    opportunity.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    opportunity.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleQueryClick = (query) => {
    setSelectedQuery(query);
    setIsQueryModalOpen(true);
  };

  const handleOpportunityClick = (opportunity) => {
    setSelectedOpportunity(opportunity);
    setIsOpportunityModalOpen(true);
  };

  const handleProgramClick = (program) => {
    setSelectedProgram(program);
    setIsProgramModalOpen(true);
  };

  // Featured programs data - for the new grid component
  const featuredPrograms = [
    {
      id: 1,
      title: "EduConnect",
      category: "Education",
      color: "bg-purple-400",
      rating: 4.5,
      downloads: 582,
      organization: "EduConnect - Classroom Tools",
      description: "Connect with educational resources and tools for classroom enhancement. Our program provides teachers and students with collaborative platforms to enhance learning experiences through technology integration. Participants gain access to a network of educators, customizable teaching materials, and professional development opportunities."
    },
    {
      id: 2,
      title: "MediTrack",
      category: "Medical",
      color: "bg-indigo-400",
      rating: 4.8,
      downloads: 356,
      organization: "MediTrack - Medical Record System",
      description: "Digital solution for tracking medical records and patient care. This non-profit initiative helps healthcare providers implement efficient digital record systems that improve patient outcomes while maintaining data security. Participants learn healthcare data management, patient privacy protocols, and modern medical workflow optimization."
    },
    {
      id: 3,
      title: "GreenSense",
      category: "Environment",
      color: "bg-green-500",
      rating: 4.2,
      downloads: 412,
      organization: "GreenSense - IoT Monitoring",
      description: "Environmental monitoring tools using IoT technology to track and analyze ecological data. This program connects environmentalists with technology experts to develop sustainable monitoring solutions. Participants work on real-world conservation projects while learning sensor deployment, data analysis, and environmental impact assessment."
    },
    {
      id: 4,
      title: "FinLit",
      category: "Finance",
      color: "bg-cyan-400",
      rating: 4.7,
      downloads: 492,
      organization: "FinLit - Financial Literacy",
      description: "Resources to improve financial literacy and education across underserved communities. This initiative provides free workshops, tools, and mentorship to help individuals develop sound financial habits. Participants can learn budgeting strategies, investment principles, and career development in financial services."
    },
    {
      id: 5,
      title: "SmartFarm",
      category: "Agriculture",
      color: "bg-teal-400",
      rating: 4.3,
      downloads: 275,
      organization: "SmartFarm - AI Powered Farming",
      description: "AI-driven solutions for agricultural optimization that help small farmers maximize yields while minimizing resource usage. This program connects agricultural experts with technology specialists to develop sustainable farming practices. Participants learn crop management systems, resource optimization, and agricultural technology deployment."
    },
    {
      id: 6,
      title: "AccessLearn",
      category: "Education",
      color: "bg-fuchsia-400",
      rating: 4.6,
      downloads: 328,
      organization: "AccessLearn - Inclusive Education",
      description: "Inclusive education tools for diverse learning needs that help educators create accessible learning environments. This program provides resources and training for teachers working with students with various learning abilities. Participants develop skills in adaptive teaching methods, assistive technology implementation, and inclusive curriculum design."
    },
    {
      id: 7,
      title: "RetailBot",
      category: "Business",
      color: "bg-blue-400",
      rating: 4.1,
      downloads: 390,
      organization: "RetailBot AI Agent",
      description: "Automated retail solutions powered by AI to help small businesses compete in the digital marketplace. This program connects retail entrepreneurs with technology experts to implement affordable automation solutions. Participants learn customer service optimization, inventory management, and digital transformation strategy."
    },
    {
      id: 8,
      title: "Pipeline",
      category: "Tech",
      color: "bg-emerald-400",
      rating: 4.9,
      downloads: 457,
      organization: "Pipeline AI",
      description: "Streamlined data pipeline management for tech solutions that help organizations efficiently process and analyze information. This program provides free tools and training for data management professionals. Participants learn data workflow optimization, ETL processes, and modern database management techniques."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">SEP-1300</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Roadmap & build credible portfolio that matters for "Campus to Corporate" aspirants
            </p>
          </div>
        </section>

        {/* Note Section */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mx-4 md:mx-auto md:max-w-6xl my-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1v-3a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                We only recommend & Connect free & Non-profit organization opportunities. This initiative is purely based to raise voice against business vendors who charge high fees, and we aware & connect free & NGO based opportunities. We invite all the NGOs & organizations working for student empowerment.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Programs Grid - new component styled like the example UI */}
        <section className="container mx-auto px-4 py-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Featured Programs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {featuredPrograms.map(program => (
              <div key={program.id} className="rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className={`${program.color} h-36 relative p-5`}>
                  <div className="absolute top-2 right-2 bg-white rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-16">{program.title}</h3>
                </div>
                <div className="p-4 bg-white">
                  <div className="flex items-center text-sm mb-2">
                    <div className="flex items-center mr-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < Math.floor(program.rating) ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                      <span className="ml-1 text-gray-500">{program.rating}</span>
                    </div>
                    <span className="text-gray-500">{program.downloads}+</span>
                  </div>
                  <p className="text-sm font-medium text-gray-800 mb-1">{program.organization}</p>
                  <p className="text-xs text-gray-500 line-clamp-2 mb-3">{program.description}</p>
                  <div className="flex justify-between items-center pt-2">
                    <Button 
                      variant="outline" 
                      className="text-xs h-8 px-3 rounded-md border-gray-300"
                      onClick={() => handleProgramClick(program)}
                    >
                      Details
                    </Button>
                    <Button 
                      className="text-xs h-8 px-3 rounded-md bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </section>

        {/* Main Content with Tabs */}
        <section className="container mx-auto px-4 py-12">
          {/* Search Bar */}
          <div className="mb-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Find Your Opportunity</h2>
            <div className="relative">
              <Input
                type="text"
                placeholder="Search opportunities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg"
              />
              <svg 
                className="absolute left-3 top-3 h-5 w-5 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="queries" value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
            <TabsList className="w-full mb-8">
              <TabsTrigger value="queries" className="flex-1 py-3">Common Queries</TabsTrigger>
              <TabsTrigger value="opportunities" className="flex-1 py-3">Available Opportunities</TabsTrigger>
            </TabsList>

            {/* Queries Tab Content */}
            <TabsContent value="queries" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredQueries.map((query) => (
                  <QueryCard 
                    key={query.id} 
                    query={query} 
                    onClick={() => handleQueryClick(query)}
                  />
                ))}
              </div>
            </TabsContent>

            {/* Opportunities Tab Content */}
            <TabsContent value="opportunities" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredOpportunities.map((opportunity) => (
                  <OpportunityCard 
                    key={opportunity.id} 
                    opportunity={opportunity} 
                    onClick={() => handleOpportunityClick(opportunity)}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      
      {/* Query Detail Modal */}
      {selectedQuery && (
        <QueryDetailModal 
          query={selectedQuery}
          isOpen={isQueryModalOpen}
          onClose={() => setIsQueryModalOpen(false)}
        />
      )}
      
      {/* Opportunity Detail Modal */}
      {selectedOpportunity && (
        <OpportunityDetailModal 
          opportunity={selectedOpportunity}
          isOpen={isOpportunityModalOpen}
          onClose={() => setIsOpportunityModalOpen(false)}
        />
      )}
      
      {/* Program Detail Modal */}
      {selectedProgram && (
        <ProgramDetailModal 
          program={selectedProgram}
          isOpen={isProgramModalOpen}
          onClose={() => setIsProgramModalOpen(false)}
        />
      )}
      
      <Footer />
    </div>
  );
};

export default SEP1300;
