
import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ApplicationForm from './ApplicationForm';
import PortfolioGuide from './PortfolioGuide';
import { Briefcase, MapPin, Users, Calendar, DollarSign, Clock } from 'lucide-react';

const JobModal = ({ job, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('details');
  
  if (!job) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-start mb-2">
            <DialogTitle className="text-2xl">{job.title}</DialogTitle>
            <Badge className={job.status === 'Open' 
              ? 'bg-green-100 text-green-800 border-green-300' 
              : 'bg-red-100 text-red-800 border-red-300'}>
              {job.status}
            </Badge>
          </div>
          <DialogDescription className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center text-gray-600">
              <Briefcase className="h-4 w-4 mr-2" />
              <span>{job.department}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Users className="h-4 w-4 mr-2" />
              <span>{job.experienceLevel} Level</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{job.type}</span>
            </div>
            {job.noticePeriod && (
              <div className="flex items-center text-gray-600">
                <Clock className="h-4 w-4 mr-2" />
                <span>Notice Period: {job.noticePeriod}</span>
              </div>
            )}
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full">
            <TabsTrigger value="details" className="flex-1">Job Details</TabsTrigger>
            <TabsTrigger value="apply" className="flex-1">Apply</TabsTrigger>
          </TabsList>
          
          <TabsContent value="details" className="space-y-6 py-4">
            <div>
              <h4 className="font-semibold text-lg mb-2">Roles & Responsibilities</h4>
              <ul className="list-disc pl-5 space-y-2">
                {job.responsibilities.map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-2">Required Skills</h4>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="bg-gray-100">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            {job.selectionProcess && (
              <div>
                <h4 className="font-semibold text-lg mb-2">Selection Process</h4>
                <p className="text-gray-700">{job.selectionProcess}</p>
              </div>
            )}
            
            {job.reporting && (
              <div>
                <h4 className="font-semibold text-lg mb-2">Reporting Structure</h4>
                <p className="text-gray-700">{job.reporting}</p>
              </div>
            )}
            
            {job.teamCollaboration && (
              <div>
                <h4 className="font-semibold text-lg mb-2">Team Collaboration</h4>
                <p className="text-gray-700">{job.teamCollaboration}</p>
              </div>
            )}
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h4 className="font-semibold text-lg mb-2">Salary & Incentives</h4>
                <div className="flex items-start">
                  <DollarSign className="h-5 w-5 mr-2 text-green-600 mt-0.5" />
                  <div>
                    <p className="text-gray-700">{job.salary}</p>
                    {job.incentives && <p className="text-gray-600 text-sm mt-1">{job.incentives}</p>}
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <h4 className="font-semibold text-lg mb-2">Benefits</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="text-gray-700">{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="pt-4">
              <Button 
                onClick={() => setActiveTab('apply')} 
                className="w-full"
              >
                Apply Now
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="apply" className="space-y-4 py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-2">
                <ApplicationForm job={job} onClose={onClose} />
              </div>
              <div className="col-span-1">
                <PortfolioGuide />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default JobModal;
