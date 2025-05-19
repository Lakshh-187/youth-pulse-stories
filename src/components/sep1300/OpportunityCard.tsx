
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface OpportunityCardProps {
  opportunity: {
    id: number;
    title: string;
    category: string;
    organization: string;
    description: string;
    benefits?: string[];
    eligibility?: string;
    deadline?: string;
    applyLink?: string;
    learnMoreLink?: string;
  };
  onClick: () => void;
}

const OpportunityCard = ({ opportunity, onClick }: OpportunityCardProps) => {
  // Define badge color based on category
  const getBadgeStyle = (category: string) => {
    switch (category.toLowerCase()) {
      case 'internship':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
      case 'workshop':
        return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'scholarship':
        return 'bg-amber-100 text-amber-800 hover:bg-amber-200';
      case 'competition':
        return 'bg-red-100 text-red-800 hover:bg-red-200';
      case 'innovation':
        return 'bg-purple-100 text-purple-800 hover:bg-purple-200';
      case 'eco-friendly':
        return 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200';
      case 'non-profit':
        return 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 border border-youth-purple/20 bg-gradient-to-br from-white to-purple-50">
      <CardContent className="pt-6 flex-grow">
        <Badge className={`mb-3 ${getBadgeStyle(opportunity.category)}`}>
          {opportunity.category}
        </Badge>
        <h3 className="text-lg font-bold mb-2 line-clamp-2 text-youth-purple">{opportunity.title}</h3>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span className="mr-2">{opportunity.organization}</span>
        </div>
        <p className="text-gray-600 line-clamp-3">{opportunity.description}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Button 
          onClick={onClick} 
          variant="outline"
          className="w-full border-youth-purple hover:bg-youth-purple/10 hover:text-youth-purple text-youth-purple/80"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OpportunityCard;
