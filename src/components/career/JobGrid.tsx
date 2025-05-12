
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import JobCard from './JobCard';
import JobModal from './JobModal';
import { jobsData } from '@/data/jobsData';

const departments = ['All', 'Tech', 'Marketing', 'HR', 'Operations'];
const locations = ['All', 'Remote', 'In-Office', 'Hybrid'];
const experienceLevels = ['All', 'Entry', 'Mid', 'Senior', 'Lead'];

const JobGrid = ({ setSelectedJob, setShowApplicationForm }) => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedExperience, setSelectedExperience] = useState('All');
  const [currentJob, setCurrentJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (job) => {
    setCurrentJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const filteredJobs = jobsData.filter(job => {
    return (
      (selectedDepartment === 'All' || job.department === selectedDepartment) &&
      (selectedLocation === 'All' || job.location === selectedLocation) &&
      (selectedExperience === 'All' || job.experienceLevel === selectedExperience)
    );
  });

  return (
    <section id="open-roles" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Open Positions</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Discover opportunities that match your skills and career aspirations. Filter by department, location, and experience level.
        </p>

        <div className="space-y-8">
          {/* Filter by Department */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-medium mb-3">Filter by Department</h3>
            <Tabs defaultValue="All" className="w-full max-w-3xl">
              <TabsList className="w-full flex flex-wrap h-auto p-1">
                {departments.map(dept => (
                  <TabsTrigger 
                    key={dept} 
                    value={dept}
                    onClick={() => setSelectedDepartment(dept)}
                    className="flex-grow"
                  >
                    {dept}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          
          {/* Filter by Location */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-medium mb-3">Filter by Location</h3>
            <Tabs defaultValue="All" className="w-full max-w-3xl">
              <TabsList className="w-full h-auto p-1">
                {locations.map(loc => (
                  <TabsTrigger 
                    key={loc} 
                    value={loc}
                    onClick={() => setSelectedLocation(loc)}
                    className="flex-grow"
                  >
                    {loc}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          
          {/* Filter by Experience */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-medium mb-3">Filter by Experience</h3>
            <Tabs defaultValue="All" className="w-full max-w-3xl">
              <TabsList className="w-full h-auto p-1">
                {experienceLevels.map(exp => (
                  <TabsTrigger 
                    key={exp} 
                    value={exp}
                    onClick={() => setSelectedExperience(exp)}
                    className="flex-grow"
                  >
                    {exp}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <JobCard 
                key={job.id} 
                job={job} 
                onViewDetails={() => handleViewDetails(job)} 
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-semibold text-gray-700">No positions match your filters</h3>
              <p className="text-gray-500 mt-2">Try adjusting your search criteria</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSelectedDepartment('All');
                  setSelectedLocation('All');
                  setSelectedExperience('All');
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>
      
      {/* Job Details Modal */}
      {isModalOpen && (
        <JobModal 
          job={currentJob} 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
        />
      )}
    </section>
  );
};

export default JobGrid;
