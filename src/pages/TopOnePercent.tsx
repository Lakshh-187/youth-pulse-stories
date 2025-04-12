
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
import { GraduationCap, Users, Lightbulb, Award } from 'lucide-react';
import { Button } from "@/components/ui/button";
const TopOnePercent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedRevenue, setSelectedRevenue] = useState<string | null>(null);
  const [selectedFailureCause, setSelectedFailureCause] = useState<string | null>(null);
  const [showPremiumPopup, setShowPremiumPopup] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

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

  const handleReadInterviewClick = () => {
    setShowPremiumPopup(true);
  };

  const handleViewMoreClick = () => {
    setIsPopupVisible(true);
  };

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

          {/* Premium Feature Popup */}
          {showPremiumPopup && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
              <div className="bg-white rounded-lg p-8 max-w-md w-full">
                <h2 className="text-xl font-bold mb-4">Premium Feature</h2>
                <p className="mb-4">This feature is available for premium members only.</p>
                <div className="flex justify-end">
                  <Button
                    variant="outline"
                    onClick={() => setShowPremiumPopup(false)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Interactive Component */}
        <section className="container mx-auto mt-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-youth-purple">
              Explore Our Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our range of programs designed to help you succeed in the
              startup world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Uni-Pitch Card */}
            <div className="relative group overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-youth-light-purple/20 to-youth-light-purple/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg hover:bg-white/60 transition-all relative z-10">
                <GraduationCap className="h-12 w-12 mb-6 text-youth-purple" />
                <h3 className="text-xl font-bold mb-3 text-youth-purple">
                  Uni-Pitch
                </h3>
                <p className="mb-6 text-gray-700">
                  Showcase your startup ideas and compete for funding and
                  mentorship in our flagship university pitching competition.
                </p>
                <Button
                  variant="secondary"
                  className="bg-youth-light-purple text-youth-purple hover:bg-youth-light-purple/90"
                  onClick={handleViewMoreClick}
                >
                  View More
                </Button>
              </div>
            </div>
            {/* Pitchburg Card */}
            <div className="relative group overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-youth-light-purple/20 to-youth-light-purple/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg hover:bg-white/60 transition-all relative z-10">
                <Users className="h-12 w-12 mb-6 text-youth-purple" />
                <h3 className="text-xl font-bold mb-3 text-youth-purple">
                  Pitchburg
                </h3>
                <p className="mb-6 text-gray-700">
                  Connect with potential investors and partners at our exclusive
                  networking event for early-stage startups.
                </p>
                <Button
                  variant="secondary"
                  className="bg-youth-light-purple text-youth-purple hover:bg-youth-light-purple/90"
                  onClick={handleViewMoreClick}
                >
                  View More
                </Button>
              </div>
            </div>
            {/* Stunburg Card */}
            <div className="relative group overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-youth-light-purple/20 to-youth-light-purple/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg hover:bg-white/60 transition-all relative z-10">
                <Lightbulb className="h-12 w-12 mb-6 text-youth-purple" />
                <h3 className="text-xl font-bold mb-3 text-youth-purple">
                  Stunburg
                </h3>
                <p className="mb-6 text-gray-700">
                  Accelerate your startup's growth with our intensive bootcamp,
                  featuring workshops, mentorship, and resources from industry
                  leaders.
                </p>
                <Button
                  variant="secondary"
                  className="bg-youth-light-purple text-youth-purple hover:bg-youth-light-purple/90"
                  onClick={handleViewMoreClick}
                >
                  View More
                </Button>
              </div>
            </div>
            {/* Vintage Program Card */}
            <div className="relative group overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-youth-light-purple/20 to-youth-light-purple/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg hover:bg-white/60 transition-all relative z-10">
                <Award className="h-12 w-12 mb-6 text-youth-purple" />
                <h3 className="text-xl font-bold mb-3 text-youth-purple">
                  Vintage Program
                </h3>
                <p className="mb-6 text-gray-700">
                  Gain insights from seasoned entrepreneurs and industry veterans
                  through our mentorship program, designed to bridge the gap
                  between experience and innovation.
                </p>
                <Button
                  variant="secondary"
                  className="bg-youth-light-purple text-youth-purple hover:bg-youth-light-purple/90"
                  onClick={handleViewMoreClick}
                >
                  View More
                </Button>
              </div>
            </div>
          </div>
          {isPopupVisible && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Premium Scholars Only</h2>
                <p className="mb-6">This feature is available for premium scholars only.</p>
                <Button onClick={() => setIsPopupVisible(false)}>Close</Button>
              </div>
            </div>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TopOnePercent;
