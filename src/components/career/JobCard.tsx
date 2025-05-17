
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Briefcase, MapPin, Users, Clock } from 'lucide-react';

const JobCard = ({ job, onViewDetails }) => {
  const getStatusColor = (status) => {
    return status === 'Open' 
      ? 'bg-green-100 text-green-800 border-green-300' 
      : 'bg-red-100 text-red-800 border-red-300';
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <Badge className={`${getStatusColor(job.status)}`}>
            {job.status}
          </Badge>
          {job.isUrgent && (
            <Badge variant="destructive" className="ml-2">
              Urgent
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl mt-2">{job.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-3">
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
          {job.noticePeriod && (
            <div className="flex items-center text-gray-600">
              <Clock className="h-4 w-4 mr-2" />
              <span>Notice: {job.noticePeriod}</span>
            </div>
          )}
        </div>
        
        <div className="mt-4">
          <h4 className="font-medium mb-2">Key Skills:</h4>
          <div className="flex flex-wrap gap-2">
            {job.skills.map((skill, index) => (
              <Badge key={index} variant="outline" className="bg-gray-100">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button
          className="w-full" 
          onClick={onViewDetails}
          variant="outline"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
