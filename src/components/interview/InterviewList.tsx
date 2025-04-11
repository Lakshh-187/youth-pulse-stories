
import React from 'react';
import InterviewCard from './InterviewCard';
import { Interview } from '@/types/interviews';

interface InterviewListProps {
  interviews: Interview[];
}

const InterviewList: React.FC<InterviewListProps> = ({ interviews }) => {
  if (interviews.length === 0) {
    return (
      <div className="text-center py-10 border rounded-lg">
        <p className="text-gray-500">No interviews found matching your criteria</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {interviews.map(interview => (
        <InterviewCard key={interview.id} interview={interview} />
      ))}
    </div>
  );
};

export default InterviewList;
