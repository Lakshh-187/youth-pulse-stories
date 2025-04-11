
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Check, X, Search, ChevronDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Founder {
  id: string;
  name: string;
  avatar: string;
  date: string;
}

interface Interview {
  id: string;
  title: string;
  founder: Founder;
  status: 'successful' | 'failed';
  categories: string[];
  country: string;
  revenue?: string;
  failureCause?: string;
}

// Sample data for the interviews
const interviewsData: Interview[] = [
  {
    id: '1',
    title: "Founder's Insights on Scaling a B2B API Fintech Product",
    founder: {
      id: 'andrey',
      name: 'Andrey Korchak',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      date: 'December 7, 2023'
    },
    status: 'successful',
    categories: ['Finances'],
    country: 'Germany',
    revenue: '$100k-$500k/mo'
  },
  {
    id: '2',
    title: "Founder's Journey to Revolutionize the Travel Industry",
    founder: {
      id: 'ivan',
      name: 'Ivan Saprov',
      avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
      date: 'November 17, 2023'
    },
    status: 'successful',
    categories: ['Travel'],
    country: 'United States',
    revenue: '$50k-$100k/mo'
  },
  {
    id: '3',
    title: "How Crypto Hype Misled A Startup From Solving Real Problems",
    founder: {
      id: 'dennis',
      name: 'Dennis Ramírez Bernal',
      avatar: 'https://randomuser.me/api/portraits/men/62.jpg',
      date: 'October 18, 2023'
    },
    status: 'failed',
    categories: ['Finances'],
    country: 'Spain',
    revenue: '$0-$10k/mo',
    failureCause: 'No Market Need'
  },
  {
    id: '4',
    title: "Building an Education Platform for Rural Communities",
    founder: {
      id: 'maria',
      name: 'Maria Sanchez',
      avatar: 'https://randomuser.me/api/portraits/women/54.jpg',
      date: 'September 25, 2023'
    },
    status: 'successful',
    categories: ['Education'],
    country: 'Mexico',
    revenue: '$10k-$50k/mo'
  },
  {
    id: '5',
    title: "Why Our Healthcare AI Solution Failed to Gain Traction",
    founder: {
      id: 'james',
      name: 'James Wilson',
      avatar: 'https://randomuser.me/api/portraits/men/77.jpg',
      date: 'August 12, 2023'
    },
    status: 'failed',
    categories: ['Healthcare', 'AI'],
    country: 'Canada',
    revenue: '$0-$10k/mo',
    failureCause: 'Regulatory Challenges'
  },
  {
    id: '6',
    title: "Disrupting Fast Fashion with Sustainable Materials",
    founder: {
      id: 'sophia',
      name: 'Sophia Lin',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      date: 'July 5, 2023'
    },
    status: 'successful',
    categories: ['Fashion', 'Sustainability'],
    country: 'Sweden',
    revenue: '$50k-$100k/mo'
  }
];

// Get unique categories, countries, revenue ranges, and failure causes for filters
const uniqueCategories = Array.from(new Set(interviewsData.flatMap(interview => interview.categories)));
const uniqueCountries = Array.from(new Set(interviewsData.map(interview => interview.country)));
const uniqueRevenues = Array.from(new Set(interviewsData.map(interview => interview.revenue).filter(Boolean)));
const uniqueFailureCauses = Array.from(new Set(interviewsData.map(interview => interview.failureCause).filter(Boolean)));

const TopOnePercent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedRevenue, setSelectedRevenue] = useState<string | null>(null);
  const [selectedFailureCause, setSelectedFailureCause] = useState<string | null>(null);

  // Filter interviews based on selected filters
  const filteredInterviews = interviewsData.filter(interview => {
    // Search term filter
    if (searchTerm && !interview.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Status filter
    if (selectedStatus === 'successful' && interview.status !== 'successful') {
      return false;
    }
    if (selectedStatus === 'failed' && interview.status !== 'failed') {
      return false;
    }
    
    // Category filter
    if (selectedCategory && !interview.categories.includes(selectedCategory)) {
      return false;
    }
    
    // Country filter
    if (selectedCountry && interview.country !== selectedCountry) {
      return false;
    }
    
    // Revenue filter
    if (selectedRevenue && interview.revenue !== selectedRevenue) {
      return false;
    }
    
    // Failure cause filter
    if (selectedFailureCause && interview.failureCause !== selectedFailureCause) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-youth-purple">Top 1% Startup Stories</h1>
        
        <div className="grid md:grid-cols-[300px_1fr] gap-6">
          {/* Left sidebar with filters */}
          <div className="space-y-4">
            <Button 
              variant="outline" 
              className="w-full justify-start text-left font-semibold border-2"
              onClick={() => {
                setSelectedStatus(null);
                setSelectedCategory(null);
                setSelectedCountry(null);
                setSelectedRevenue(null);
                setSelectedFailureCause(null);
                setSearchTerm('');
              }}
            >
              All Interviews
            </Button>
            
            <Button 
              variant="outline" 
              className={`w-full justify-start text-left font-semibold ${selectedStatus === 'failed' ? 'bg-red-100 text-red-600 border-red-300 border-2' : 'border-2'}`}
              onClick={() => setSelectedStatus(selectedStatus === 'failed' ? null : 'failed')}
            >
              <X className="mr-2 h-5 w-5 text-red-500" />
              Failed startup
            </Button>
            
            <Button 
              variant="outline" 
              className={`w-full justify-start text-left font-semibold ${selectedStatus === 'successful' ? 'bg-green-100 text-green-600 border-green-300 border-2' : 'border-2'}`}
              onClick={() => setSelectedStatus(selectedStatus === 'successful' ? null : 'successful')}
            >
              <Check className="mr-2 h-5 w-5 text-green-500" />
              Successful startup
            </Button>
            
            <div className="border-t border-gray-200 my-4"></div>
            
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search..."
                className="pl-10 border-2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="space-y-4">
              <Select value={selectedCategory || ''} onValueChange={(value) => setSelectedCategory(value || null)}>
                <SelectTrigger className="border-2">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all_categories">All Categories</SelectItem>
                  {uniqueCategories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedCountry || ''} onValueChange={(value) => setSelectedCountry(value || null)}>
                <SelectTrigger className="border-2">
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all_countries">All Countries</SelectItem>
                  {uniqueCountries.map(country => (
                    <SelectItem key={country} value={country}>{country}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedRevenue || ''} onValueChange={(value) => setSelectedRevenue(value || null)}>
                <SelectTrigger className="border-2">
                  <SelectValue placeholder="Revenue (✓)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all_revenues">All Revenue Ranges</SelectItem>
                  {uniqueRevenues.map(revenue => (
                    <SelectItem key={revenue} value={revenue}>{revenue}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedFailureCause || ''} onValueChange={(value) => setSelectedFailureCause(value || null)}>
                <SelectTrigger className="border-2">
                  <SelectValue placeholder="Cause of failure (✗)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all_failure_causes">All Failure Causes</SelectItem>
                  {uniqueFailureCauses.map(cause => (
                    <SelectItem key={cause} value={cause}>{cause}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Right column with interview cards */}
          <div className="space-y-6">
            {filteredInterviews.length === 0 ? (
              <div className="text-center py-10 border rounded-lg">
                <p className="text-gray-500">No interviews found matching your criteria</p>
              </div>
            ) : (
              filteredInterviews.map(interview => (
                <div key={interview.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-3">{interview.title}</h2>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className={`rounded-full text-sm px-3 py-1 flex items-center gap-1 
                        ${interview.status === 'successful' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {interview.status === 'successful' ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <X className="h-4 w-4" />
                        )}
                      </Badge>
                      
                      {interview.categories.map(category => (
                        <Badge key={category} variant="secondary" className="rounded-full text-sm px-3 py-1 bg-gray-100 text-gray-800">
                          {category}
                        </Badge>
                      ))}
                      
                      <Badge variant="secondary" className="rounded-full text-sm px-3 py-1 bg-gray-100 text-gray-800">
                        {interview.country}
                      </Badge>
                      
                      {interview.revenue && (
                        <Badge variant="secondary" className="rounded-full text-sm px-3 py-1 bg-gray-100 text-gray-800">
                          {interview.revenue}
                        </Badge>
                      )}
                      
                      {interview.failureCause && (
                        <Badge variant="secondary" className="rounded-full text-sm px-3 py-1 bg-red-50 text-red-800">
                          {interview.failureCause}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center mt-4">
                      <img 
                        src={interview.founder.avatar} 
                        alt={interview.founder.name} 
                        className="w-12 h-12 rounded-full object-cover mr-4" 
                      />
                      <div>
                        <p className="font-semibold">{interview.founder.name}</p>
                        <p className="text-gray-500 text-sm">{interview.founder.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TopOnePercent;
