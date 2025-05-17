
import React from 'react';
import { 
  Dialog, 
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

const OpportunityDetailModal = ({ opportunity, isOpen, onClose }) => {
  if (!opportunity) return null;

  // Define badge color based on category
  const getBadgeStyle = (category) => {
    switch (category.toLowerCase()) {
      case 'internship':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
      case 'workshop':
        return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'scholarship':
        return 'bg-amber-100 text-amber-800 hover:bg-amber-200';
      case 'competition':
        return 'bg-red-100 text-red-800 hover:bg-red-200';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-3">
          <Badge className={`w-fit ${getBadgeStyle(opportunity.category)}`}>
            {opportunity.category}
          </Badge>
          <DialogTitle className="text-2xl">{opportunity.title}</DialogTitle>
          <DialogDescription>
            <span className="font-medium">{opportunity.organization}</span>
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div>
            <h4 className="font-semibold text-lg mb-2">Description:</h4>
            <div className="text-gray-700 space-y-3">
              {opportunity.description.split('\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
          
          {opportunity.benefits && (
            <div>
              <h4 className="font-semibold text-lg mb-2">Benefits:</h4>
              <ul className="list-disc pl-5 space-y-2">
                {opportunity.benefits.map((benefit, index) => (
                  <li key={index} className="text-gray-700">{benefit}</li>
                ))}
              </ul>
            </div>
          )}
          
          {opportunity.eligibility && (
            <div>
              <h4 className="font-semibold text-lg mb-2">Eligibility:</h4>
              <div className="text-gray-700 space-y-3">
                {opportunity.eligibility.split('\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          )}
          
          {opportunity.deadline && (
            <div>
              <h4 className="font-semibold text-lg mb-2">Deadline:</h4>
              <p className="text-gray-700">{opportunity.deadline}</p>
            </div>
          )}
        </div>
        
        <DialogFooter className="flex flex-wrap gap-3">
          {opportunity.applyLink && (
            <Button 
              onClick={() => window.open(opportunity.applyLink, "_blank")}
              className="gap-2"
            >
              Apply Now <ExternalLink className="h-4 w-4" />
            </Button>
          )}
          
          {opportunity.learnMoreLink && (
            <Button 
              variant="outline" 
              onClick={() => window.open(opportunity.learnMoreLink, "_blank")}
              className="gap-2"
            >
              Learn More <ExternalLink className="h-4 w-4" />
            </Button>
          )}
          
          <Button variant="secondary" onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default OpportunityDetailModal;
