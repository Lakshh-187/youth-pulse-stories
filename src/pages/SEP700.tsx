
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText, Settings, Info } from 'lucide-react';

const SEP700 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-youth-purple">SEP-700 Program</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="bg-youth-purple/10 p-3 rounded-full">
                <FileText className="h-6 w-6 text-youth-purple" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Program Overview</h2>
                <p className="text-gray-700">
                  The SEP-700 is our flagship student exchange program designed to provide exceptional learning opportunities 
                  across international educational institutions. This program focuses on cultural immersion, academic excellence, 
                  and developing global perspectives for tomorrow's leaders.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="bg-youth-purple/10 p-3 rounded-full">
                <Settings className="h-6 w-6 text-youth-purple" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Program Requirements</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Currently enrolled as a full-time student</li>
                  <li>Minimum GPA of 3.5 or equivalent</li>
                  <li>Completed at least one year of higher education</li>
                  <li>Proficiency in English (TOEFL score of 90+ or IELTS 6.5+)</li>
                  <li>Letter of recommendation from academic advisor</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start gap-4">
              <div className="bg-youth-purple/10 p-3 rounded-full">
                <Info className="h-6 w-6 text-youth-purple" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">How to Apply</h2>
                <p className="text-gray-700 mb-4">
                  Applications for the SEP-700 program are accepted on a rolling basis. To apply, please complete the following steps:
                </p>
                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                  <li>Complete the online application form</li>
                  <li>Submit academic transcripts</li>
                  <li>Provide language proficiency certificates</li>
                  <li>Submit a personal statement (500 words)</li>
                  <li>Obtain a letter of recommendation</li>
                </ol>
                <div className="mt-6">
                  <a 
                    href="https://linktr.ee/youngburg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-youth-purple hover:bg-youth-purple/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SEP700;
