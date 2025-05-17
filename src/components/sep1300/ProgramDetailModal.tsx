
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
import { Briefcase, Award, Users, FileText, Wand, Settings, FileSearch } from 'lucide-react';

interface ProgramDetailModalProps {
  program: {
    id: number;
    title: string;
    category: string;
    color: string;
    rating: number;
    downloads: number;
    organization: string;
    description: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const ProgramDetailModal = ({ program, isOpen, onClose }: ProgramDetailModalProps) => {
  if (!program) return null;

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'education':
        return <FileText className="h-5 w-5 mr-2" />;
      case 'business':
        return <Briefcase className="h-5 w-5 mr-2" />;
      case 'environment':
        return <Settings className="h-5 w-5 mr-2" />;
      case 'finance':
        return <FileSearch className="h-5 w-5 mr-2" />;
      case 'agriculture':
        return <Award className="h-5 w-5 mr-2" />;
      case 'tech':
        return <Wand className="h-5 w-5 mr-2" />;
      case 'medical':
        return <Users className="h-5 w-5 mr-2" />;
      default:
        return <FileText className="h-5 w-5 mr-2" />;
    }
  };

  const getBgColor = () => {
    const color = program.color.replace('bg-', '');
    return `bg-${color}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[650px] p-0 overflow-hidden">
        <div className={`${getBgColor()} p-8 relative`}>
          <div className="absolute top-4 right-8">
            <Badge className="bg-white/90 text-gray-800 hover:bg-white">
              {program.rating} ★ ({program.downloads}+ downloads)
            </Badge>
          </div>
          <DialogHeader className="mt-8 space-y-3">
            <DialogTitle className="text-3xl font-bold text-white">{program.title}</DialogTitle>
            <DialogDescription className="text-white/90 text-lg">
              {program.organization}
            </DialogDescription>
          </DialogHeader>
        </div>
        
        <div className="p-6">
          <div className="flex items-center mb-6">
            <div className="flex items-center px-3 py-1.5 rounded-full bg-gray-100">
              {getCategoryIcon(program.category)}
              <span className="font-medium">{program.category}</span>
            </div>
          </div>
          
          <h3 className="text-lg font-semibold mb-3">About this program</h3>
          <p className="text-gray-700 mb-6">{program.description}</p>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h4 className="font-medium mb-2">What you'll learn:</h4>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Practical industry experience in {program.category}</li>
              <li>Collaborative project work with experts</li>
              <li>Portfolio-building opportunities</li>
              <li>Access to mentorship and professional networks</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Program benefits:</h4>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Free participation and resources</li>
              <li>Certification upon completion</li> 
              <li>Potential for referrals and recommendations</li>
              <li>Connect with industry professionals</li>
            </ul>
          </div>
        </div>
        
        <DialogFooter className="px-6 pb-6">
          <Button 
            variant="outline" 
            onClick={onClose}
            className="mr-2"
          >
            Close
          </Button>
          <Button 
            className="bg-purple-600 hover:bg-purple-700"
          >
            Apply Now
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProgramDetailModal;
