
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FilterSidebar from '@/components/interview/FilterSidebar';
import InterviewList from '@/components/interview/InterviewList';
import { 
  interviewsData, 
  uniqueCategories, 
  uniqueCountries, 
  uniqueRevenues, 
  uniqueFailureCauses 
} from '@/data/interviewsData';

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
          <FilterSidebar 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            selectedRevenue={selectedRevenue}
            setSelectedRevenue={setSelectedRevenue}
            selectedFailureCause={selectedFailureCause}
            setSelectedFailureCause={setSelectedFailureCause}
            uniqueCategories={uniqueCategories}
            uniqueCountries={uniqueCountries}
            uniqueRevenues={uniqueRevenues}
            uniqueFailureCauses={uniqueFailureCauses}
          />
          
          {/* Right column with interview cards */}
          <InterviewList interviews={filteredInterviews} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TopOnePercent;
