
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
import QueryCard from '@/components/sep1300/QueryCard';
import OpportunityCard from '@/components/sep1300/OpportunityCard';
import QueryDetailModal from '@/components/sep1300/QueryDetailModal';
import OpportunityDetailModal from '@/components/sep1300/OpportunityDetailModal';
import { queriesData, opportunitiesData } from '@/data/sep1300Data';

const SEP1300 = () => {
  const [activeTab, setActiveTab] = useState('queries');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [isQueryModalOpen, setIsQueryModalOpen] = useState(false);
  const [isOpportunityModalOpen, setIsOpportunityModalOpen] = useState(false);

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

        {/* Main Content */}
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
      
      <Footer />
    </div>
  );
};

export default SEP1300;
