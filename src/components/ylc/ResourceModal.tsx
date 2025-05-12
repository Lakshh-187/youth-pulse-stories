
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Link, Share } from 'lucide-react';
import { Resource } from '@/data/resourcesData';

interface ResourceModalProps {
  resource: Resource;
  isOpen: boolean;
  onClose: () => void;
}

const ResourceModal = ({ resource, isOpen, onClose }: ResourceModalProps) => {
  const { title, type, publishedOn, tags, thumbnail, description, downloadUrl, externalLink } = resource;

  // Generate meta data for SEO (for demonstration purposes)
  const metaTitle = `${title} - Uniford Foundation Resource`;
  const metaDescription = `Explore ${title} from Uniford Foundation. ${description.substring(0, 100)}...`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge>{type}</Badge>
            <span className="text-sm text-gray-500">Published: {publishedOn}</span>
          </div>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
        </DialogHeader>
        
        <div className="my-4">
          <img 
            src={thumbnail} 
            alt={title} 
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          
          <DialogDescription className="text-base text-gray-700 mb-4">
            {description}
          </DialogDescription>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map(tag => (
              <Badge key={tag} variant="outline">#{tag}</Badge>
            ))}
          </div>
          
          {/* Related resources section */}
          <div className="border-t pt-4 mb-4">
            <h4 className="font-medium text-sm mb-3">You may also like:</h4>
            <div className="grid grid-cols-2 gap-2">
              {Array(2).fill(0).map((_, i) => (
                <div key={i} className="bg-gray-100 p-3 rounded text-sm">
                  <div className="font-medium line-clamp-1">Related Resource {i+1}</div>
                  <div className="text-xs text-gray-500">{type}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Hidden SEO content */}
          <div className="hidden">
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={thumbnail} />
            <meta name="keywords" content={tags.join(', ') + ', Uniford, Foundation'} />
          </div>
        </div>
        
        <DialogFooter>
          <div className="flex flex-col sm:flex-row w-full gap-2 justify-between">
            <Button variant="outline" size="sm" onClick={onClose}>
              Close
            </Button>
            
            <div className="flex gap-2">
              {externalLink && (
                <Button size="sm" variant="outline">
                  <Link className="h-4 w-4 mr-2" /> Visit Source
                </Button>
              )}
              
              {downloadUrl && (
                <Button size="sm">
                  <Download className="h-4 w-4 mr-2" /> Download
                </Button>
              )}
              
              <Button size="sm" variant="ghost">
                <Share className="h-4 w-4 mr-2" /> Share
              </Button>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ResourceModal;
