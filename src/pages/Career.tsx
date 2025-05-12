
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CareerHero from '@/components/career/CareerHero';
import JobGrid from '@/components/career/JobGrid';
import CompanyPolicies from '@/components/career/CompanyPolicies';
import SupportSection from '@/components/career/SupportSection';
import { useToast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';

const Career = () => {
  const { toast } = useToast();
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Toaster />
      
      <main className="flex-grow">
        <CareerHero />
        <JobGrid 
          setSelectedJob={setSelectedJob}
          setShowApplicationForm={setShowApplicationForm}
        />
        <CompanyPolicies />
        <SupportSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Career;
