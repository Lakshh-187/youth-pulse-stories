
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

const QueryDetailModal = ({ query, isOpen, onClose }) => {
  if (!query) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-3">
          <Badge className="w-fit bg-purple-100 text-purple-800">Query</Badge>
          <DialogTitle className="text-2xl">{query.title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div>
            <h4 className="font-semibold text-lg mb-2">Problem:</h4>
            <p className="text-gray-700">{query.problem}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-2">Solution:</h4>
            <div className="text-gray-700 space-y-3">
              {query.solution.split('\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          {query.tips && (
            <div>
              <h4 className="font-semibold text-lg mb-2">Tips:</h4>
              <ul className="list-disc pl-5 space-y-2">
                {query.tips.map((tip, index) => (
                  <li key={index} className="text-gray-700">{tip}</li>
                ))}
              </ul>
            </div>
          )}
          
          {query.resources && (
            <div>
              <h4 className="font-semibold text-lg mb-2">Resources:</h4>
              <ul className="list-disc pl-5 space-y-2">
                {query.resources.map((resource, index) => (
                  <li key={index} className="text-gray-700">{resource}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <DialogFooter>
          {query.applyLink && (
            <Button 
              onClick={() => window.open(query.applyLink, "_blank")}
              className="mr-2"
            >
              Apply Now
            </Button>
          )}
          <Button variant="outline" onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default QueryDetailModal;
