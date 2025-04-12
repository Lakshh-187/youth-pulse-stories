
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText, Globe, GraduationCap, Award, Search, Grid2X2, List, Table2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

// Sample opportunity data - in a real scenario, this would come from an API or database
const opportunitiesData = [
  {
    id: 1,
    title: "International Exchange Program - Paris",
    institution: "Sorbonne University",
    country: "France",
    category: "Exchange",
    duration: "6 months",
    deadline: "2025-06-15",
    funding: "Full",
    eligibility: "Undergraduate, 3.5+ GPA",
    description: "Study abroad opportunity at one of Europe's most prestigious universities"
  },
  {
    id: 2,
    title: "Research Fellowship - Quantum Computing",
    institution: "MIT",
    country: "USA",
    category: "Research",
    duration: "12 months",
    deadline: "2025-05-30",
    funding: "Partial",
    eligibility: "Graduate students, Computer Science background",
    description: "Join cutting-edge quantum computing research at MIT's laboratories"
  },
  {
    id: 3,
    title: "Summer Internship Program",
    institution: "Google",
    country: "Multiple locations",
    category: "Internship",
    duration: "3 months",
    deadline: "2025-03-01",
    funding: "Paid",
    eligibility: "Undergraduate/Graduate, CS/IT major",
    description: "Gain industry experience at one of the world's leading tech companies"
  },
  {
    id: 4,
    title: "Global Leadership Scholarship",
    institution: "University of Tokyo",
    country: "Japan",
    category: "Scholarship",
    duration: "2 years",
    deadline: "2025-04-20",
    funding: "Full",
    eligibility: "Masters students, Leadership experience",
    description: "Full scholarship for exceptional students with demonstrated leadership potential"
  },
  {
    id: 5,
    title: "Environmental Science Workshop",
    institution: "ETH Zurich",
    country: "Switzerland",
    category: "Workshop",
    duration: "2 weeks",
    deadline: "2025-02-28",
    funding: "Partial",
    eligibility: "Environmental Science students",
    description: "Intensive workshop focused on climate change research and solutions"
  },
  {
    id: 6,
    title: "Entrepreneurship Bootcamp",
    institution: "Stanford University",
    country: "USA",
    category: "Bootcamp",
    duration: "4 weeks",
    deadline: "2025-05-15",
    funding: "Self-funded",
    eligibility: "Open to all students",
    description: "Learn startup skills from successful entrepreneurs and venture capitalists"
  }
];

// Extract unique values for categories
const uniqueCategories = [...new Set(opportunitiesData.map(opp => opp.category))];

const SEP700 = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'table'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter opportunities based on selected filters
  const filteredOpportunities = opportunitiesData.filter(opportunity => {
    const matchesSearch = searchTerm === '' || 
      opportunity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opportunity.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opportunity.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === null || opportunity.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredOpportunities.length / itemsPerPage);
  const paginatedOpportunities = filteredOpportunities.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Generate page numbers for pagination
  const pageNumbers = [];
  const maxVisiblePages = 5;
  
  if (totalPages <= maxVisiblePages) {
    // Show all pages if total pages are less than or equal to max visible pages
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    // Always show first and last pages
    if (currentPage <= 3) {
      // If current page is near the beginning
      for (let i = 1; i <= 4; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push('ellipsis');
      pageNumbers.push(totalPages);
    } else if (currentPage >= totalPages - 2) {
      // If current page is near the end
      pageNumbers.push(1);
      pageNumbers.push('ellipsis');
      for (let i = totalPages - 3; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // If current page is in the middle
      pageNumbers.push(1);
      pageNumbers.push('ellipsis');
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push('ellipsis');
      pageNumbers.push(totalPages);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-3 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <GraduationCap className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Scholar Empowerment Program - 700</h1>
            <p className="text-xl opacity-90 mb-8">Discover over 700 opportunities worldwide for academic growth, professional development, and global exposure</p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Globe className="h-5 w-5 mr-2" />
                <span>100+ Countries</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Award className="h-5 w-5 mr-2" />
                <span>Full Funding Available</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <FileText className="h-5 w-5 mr-2" />
                <span>10+ Categories</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="mb-8 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Find Your Opportunity</h2>
          
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Search opportunities..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <RadioGroup 
                className="flex"
                defaultValue="grid"
                onValueChange={(value) => setViewMode(value as 'grid' | 'list' | 'table')}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="grid" id="grid" />
                  <label htmlFor="grid" className="flex items-center">
                    <Grid2X2 className="h-4 w-4 mr-1" />
                    Grid
                  </label>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <RadioGroupItem value="list" id="list" />
                  <label htmlFor="list" className="flex items-center">
                    <List className="h-4 w-4 mr-1" />
                    List
                  </label>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <RadioGroupItem value="table" id="table" />
                  <label htmlFor="table" className="flex items-center">
                    <Table2 className="h-4 w-4 mr-1" />
                    Table
                  </label>
                </div>
              </RadioGroup>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3">Categories</h3>
            <div className="flex flex-wrap gap-2">
              <Button 
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                className="rounded-full transition-all"
                onClick={() => setSelectedCategory(null)}
              >
                All Categories
              </Button>
              
              {uniqueCategories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  className="rounded-full transition-all"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Available Opportunities</h2>
          <p className="text-gray-600">
            Showing {Math.min(itemsPerPage, paginatedOpportunities.length)} of {filteredOpportunities.length} opportunities
          </p>
        </div>
        
        {filteredOpportunities.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-medium text-gray-600 mb-2">No opportunities found</h3>
            <p className="text-gray-500">Try adjusting your filters or search term</p>
          </div>
        ) : (
          <Tabs defaultValue={viewMode} className="w-full" onValueChange={(value) => setViewMode(value as 'grid' | 'list' | 'table')}>
            <TabsList className="hidden">
              <TabsTrigger value="grid">Grid</TabsTrigger>
              <TabsTrigger value="list">List</TabsTrigger>
              <TabsTrigger value="table">Table</TabsTrigger>
            </TabsList>
            
            <TabsContent value="grid">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {paginatedOpportunities.map(opportunity => (
                  <Card key={opportunity.id} className="hover:shadow-lg transition-shadow flex flex-col">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start gap-2">
                        <CardTitle className="text-base line-clamp-2">{opportunity.title}</CardTitle>
                        <Badge variant="outline" className="shrink-0 capitalize">{opportunity.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardFooter className="mt-auto pt-2">
                      <Button className="w-full bg-youth-purple hover:bg-youth-purple/90">View Details</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="list">
              <div className="space-y-4">
                {paginatedOpportunities.map(opportunity => (
                  <div key={opportunity.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center gap-4">
                      <div>
                        <h3 className="font-semibold">{opportunity.title}</h3>
                        <Badge variant="outline" className="mt-1 capitalize">{opportunity.category}</Badge>
                      </div>
                      <Button className="shrink-0 bg-youth-purple hover:bg-youth-purple/90">View Details</Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="table">
              <div className="border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paginatedOpportunities.map(opportunity => (
                      <TableRow key={opportunity.id}>
                        <TableCell className="font-medium">{opportunity.title}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="capitalize">{opportunity.category}</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">View Details</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        )}
        
        {totalPages > 1 && (
          <div className="mt-8">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    className={currentPage === 1 ? "opacity-50 pointer-events-none" : ""}
                  />
                </PaginationItem>
                
                {pageNumbers.map((pageNumber, index) => 
                  pageNumber === 'ellipsis' ? (
                    <PaginationItem key={`ellipsis-${index}`}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  ) : (
                    <PaginationItem key={pageNumber}>
                      <PaginationLink 
                        isActive={currentPage === pageNumber}
                        onClick={() => setCurrentPage(pageNumber as number)}
                      >
                        {pageNumber}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    className={currentPage === totalPages ? "opacity-50 pointer-events-none" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
        
        <div className="mt-12 bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How can I apply for these opportunities?</AccordionTrigger>
              <AccordionContent>
                Each opportunity has its own application process. Click on "View Details" to see specific application instructions, required documents, and submission guidelines for the opportunity you're interested in.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What does "Full Funding" mean?</AccordionTrigger>
              <AccordionContent>
                Full funding typically covers tuition fees, living expenses, travel costs, and sometimes includes a stipend. The exact coverage varies by program, so always check the specific details of each opportunity.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Are there opportunities for all academic levels?</AccordionTrigger>
              <AccordionContent>
                Yes, the SEP-700 program includes opportunities for undergraduate students, graduate students, PhD candidates, and post-doctoral researchers across various disciplines and fields of study.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How often are new opportunities added?</AccordionTrigger>
              <AccordionContent>
                We update our database weekly with new opportunities. We recommend checking back regularly or subscribing to our newsletter to stay informed about the latest additions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SEP700;
