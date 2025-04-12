
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Check, X } from 'lucide-react';
import { Interview } from '@/types/interviews';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface InterviewCardProps {
  interview: Interview;
}

const InterviewCard: React.FC<InterviewCardProps> = ({ interview }) => {
  const [isPremiumPopupOpen, setIsPremiumPopupOpen] = useState(false);

  const handleCardClick = () => {
    setIsPremiumPopupOpen(true);
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-3">{interview.title}</h2>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="outline" className={`rounded-full text-sm px-3 py-1 flex items-center gap-1 
            ${interview.status === 'successful' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {interview.status === 'successful' ? (
              <Check className="h-4 w-4" />
            ) : (
              <X className="h-4 w-4" />
            )}
          </Badge>
          
          {interview.categories.map(category => (
            <Badge key={category} variant="secondary" className="rounded-full text-sm px-3 py-1 bg-gray-100 text-gray-800">
              {category}
            </Badge>
          ))}
          
          <Badge variant="secondary" className="rounded-full text-sm px-3 py-1 bg-gray-100 text-gray-800">
            {interview.country}
          </Badge>
          
          {interview.revenue && (
            <Badge variant="secondary" className="rounded-full text-sm px-3 py-1 bg-gray-100 text-gray-800">
              {interview.revenue}
            </Badge>
          )}
          
          {interview.failureCause && (
            <Badge variant="secondary" className="rounded-full text-sm px-3 py-1 bg-red-50 text-red-800">
              {interview.failureCause}
            </Badge>
          )}
        </div>
        
        <div className="flex items-center mt-4">
          <img 
            src={interview.founder.avatar} 
            alt={interview.founder.name} 
            className="w-12 h-12 rounded-full object-cover mr-4" 
          />
          <div>
            <p className="font-semibold">{interview.founder.name}</p>
            <p className="text-gray-500 text-sm">{interview.founder.date}</p>
          </div>
        </div>

        {/* Make the right side clickable */}
        <div 
          className="absolute inset-0 bg-transparent cursor-pointer"
          onClick={handleCardClick}
        ></div>

        {/* Premium Member Popup */}
        <Dialog open={isPremiumPopupOpen} onOpenChange={setIsPremiumPopupOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Premium Feature</DialogTitle>
            </DialogHeader>
            <p>This feature is available for premium members only.</p>
            <Button onClick={() => setIsPremiumPopupOpen(false)}>Close</Button>
          </DialogContent>
        </Dialog>

      </div>
    </div>
  );
};

export default InterviewCard;
