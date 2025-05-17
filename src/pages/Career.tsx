
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CareerHero from '@/components/career/CareerHero';
import JobGrid from '@/components/career/JobGrid';
import CompanyPolicies from '@/components/career/CompanyPolicies';
import SupportSection from '@/components/career/SupportSection';
import { useToast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Clock } from 'lucide-react';

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
        
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <Alert className="bg-blue-50 border border-blue-200">
              <Clock className="h-5 w-5 text-blue-600" />
              <AlertDescription className="text-blue-800">
                <strong>Notice Period Information:</strong> All positions have an 18-day notice period. 
                Selection is based on performance during the notice period.
              </AlertDescription>
            </Alert>
          </div>
        </section>
        
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
