
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link2, Check, File, PlayCircle, HelpCircle } from 'lucide-react';

const PortfolioGuide = () => {
  return (
    <Card className="bg-gray-50 border-gray-200">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <Link2 className="h-5 w-5 mr-2 text-youth-purple" />
          How to Create a Portfolio Link
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        <p className="text-gray-700">
          A strong portfolio link helps your application stand out. Here's how to create one:
        </p>
        
        <div className="space-y-3">
          <div className="flex">
            <Check className="h-4 w-4 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
            <p>Use tools like Notion, Google Drive, Behance, or website builders like Carrd.</p>
          </div>
          
          <div className="flex">
            <Check className="h-4 w-4 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
            <p>Make sure your link is viewable to anyone with the link.</p>
          </div>
          
          <div className="flex">
            <Check className="h-4 w-4 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
            <p>Include your resume, past projects, certificates, and achievements.</p>
          </div>
          
          <div className="flex">
            <Check className="h-4 w-4 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
            <p>Organize content clearly with sections for different skills/projects.</p>
          </div>
          
          <div className="flex">
            <File className="h-4 w-4 mr-2 text-blue-600 mt-0.5 flex-shrink-0" />
            <p>Include downloadable files of your best work samples.</p>
          </div>
          
          <div className="flex">
            <PlayCircle className="h-4 w-4 mr-2 text-red-600 mt-0.5 flex-shrink-0" />
            <p>Bonus: Add an intro video of yourself for a strong first impression!</p>
          </div>
        </div>
        
        <div className="pt-2 border-t border-gray-200 mt-4">
          <div className="flex">
            <HelpCircle className="h-4 w-4 mr-2 text-youth-purple mt-0.5 flex-shrink-0" />
            <p>Need help? Contact our support team at careers@youngburg.com</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioGuide;
