import React, { useState } from 'react';
import JobCard from './JobCard';
import JobModal from './JobModal';
import { jobsData } from '@/data/jobsData';

const JobGrid = ({ setSelectedJob, setShowApplicationForm }) => {
  const [currentJob, setCurrentJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (job) => {
    setCurrentJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Filter only the positions we want to keep
  const filteredJobs = jobsData.filter(job => {
    // Only keep the jobs with IDs from 10 to 22 (the ones you've added)
    return job.id >= 10 && job.id <= 22;
  });

  return (
    <section id="open-roles" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Open Positions</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Discover opportunities that match your skills and career aspirations.
        </p>

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
              <h3 className="text-xl font-semibold text-gray-700">No positions available</h3>
              <p className="text-gray-500 mt-2">Please check back later for new opportunities</p>
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
