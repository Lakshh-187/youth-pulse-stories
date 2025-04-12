
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText, Globe, GraduationCap, Award, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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

// Extract unique values for filters
const uniqueCountries = [...new Set(opportunitiesData.map(opp => opp.country))];
const uniqueCategories = [...new Set(opportunitiesData.map(opp => opp.category))];
const uniqueFunding = [...new Set(opportunitiesData.map(opp => opp.funding))];

const SEP700 = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedFunding, setSelectedFunding] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'table'>('grid');

  // Filter opportunities based on selected filters
  const filteredOpportunities = opportunitiesData.filter(opportunity => {
    const matchesSearch = searchTerm === '' || 
      opportunity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opportunity.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opportunity.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCountry = selectedCountry === null || opportunity.country === selectedCountry;
    const matchesCategory = selectedCategory === null || opportunity.category === selectedCategory;
    const matchesFunding = selectedFunding === null || opportunity.funding === selectedFunding;
    
    return matchesSearch && matchesCountry && matchesCategory && matchesFunding;
  });

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
                  <label htmlFor="grid">Grid</label>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <RadioGroupItem value="list" id="list" />
                  <label htmlFor="list">List</label>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <RadioGroupItem value="table" id="table" />
                  <label htmlFor="table">Table</label>
                </div>
              </RadioGroup>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Country</label>
              <Select onValueChange={(value) => setSelectedCountry(value === "all" ? null : value)}>
                <SelectTrigger>
                  <SelectValue placeholder="All Countries" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Countries</SelectItem>
                  {uniqueCountries.map(country => (
                    <SelectItem key={country} value={country}>{country}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <Select onValueChange={(value) => setSelectedCategory(value === "all" ? null : value)}>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {uniqueCategories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Funding</label>
              <Select onValueChange={(value) => setSelectedFunding(value === "all" ? null : value)}>
                <SelectTrigger>
                  <SelectValue placeholder="All Funding Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Funding Types</SelectItem>
                  {uniqueFunding.map(funding => (
                    <SelectItem key={funding} value={funding}>{funding}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Available Opportunities</h2>
          <p className="text-gray-600">
            Showing {filteredOpportunities.length} of {opportunitiesData.length} opportunities
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredOpportunities.map(opportunity => (
                  <Card key={opportunity.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                        <Badge variant="outline" className="capitalize">{opportunity.category}</Badge>
                      </div>
                      <CardDescription>{opportunity.institution}, {opportunity.country}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">{opportunity.description}</p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="font-medium">Duration:</span> {opportunity.duration}
                        </div>
                        <div>
                          <span className="font-medium">Funding:</span> {opportunity.funding}
                        </div>
                        <div>
                          <span className="font-medium">Deadline:</span> {new Date(opportunity.deadline).toLocaleDateString()}
                        </div>
                        <div>
                          <span className="font-medium">Eligibility:</span> {opportunity.eligibility.split(',')[0]}...
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-youth-purple hover:bg-youth-purple/90">View Details</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="list">
              <div className="space-y-4">
                {filteredOpportunities.map(opportunity => (
                  <div key={opportunity.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <h3 className="font-semibold text-lg">{opportunity.title}</h3>
                          <Badge variant="outline" className="capitalize">{opportunity.category}</Badge>
                        </div>
                        <p className="text-gray-600 mb-2">{opportunity.institution}, {opportunity.country}</p>
                        <p className="text-sm text-gray-600">{opportunity.description}</p>
                      </div>
                      <div className="shrink-0">
                        <div className="text-sm mb-2">
                          <span className="font-medium">Deadline:</span> {new Date(opportunity.deadline).toLocaleDateString()}
                        </div>
                        <Button className="w-full bg-youth-purple hover:bg-youth-purple/90">View Details</Button>
                      </div>
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
                      <TableHead>Institution</TableHead>
                      <TableHead>Country</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Deadline</TableHead>
                      <TableHead>Funding</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredOpportunities.map(opportunity => (
                      <TableRow key={opportunity.id}>
                        <TableCell className="font-medium">{opportunity.title}</TableCell>
                        <TableCell>{opportunity.institution}</TableCell>
                        <TableCell>{opportunity.country}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="capitalize">{opportunity.category}</Badge>
                        </TableCell>
                        <TableCell>{new Date(opportunity.deadline).toLocaleDateString()}</TableCell>
                        <TableCell>{opportunity.funding}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">View</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
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
