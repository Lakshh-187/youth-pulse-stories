
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, Download } from 'lucide-react';
import { Resource } from '@/data/resourcesData';

interface ResourceCardProps {
  resource: Resource;
  onClick: () => void;
}

const ResourceCard = ({ resource, onClick }: ResourceCardProps) => {
  const { type, title, publishedOn, tags, lovedBy, thumbnail } = resource;
  
  // Determine badge color based on type
  const getBadgeVariant = () => {
    switch (type) {
      case 'PDF':
        return 'destructive';
      case 'Video':
        return 'info';
      case 'Report':
        return 'default';
      case 'Innovation':
        return 'success';
      default:
        return 'secondary';
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div 
        className="h-48 w-full bg-cover bg-center" 
        style={{ backgroundImage: `url(${thumbnail})` }}
      />
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge variant={getBadgeVariant()}>{type}</Badge>
          <div className="flex items-center text-sm text-gray-500">
            <Heart className="h-4 w-4 mr-1 text-red-400" />
            <span>Loved by {lovedBy}+</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mt-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-500">Published: {publishedOn}</p>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <Badge key={tag} variant="outline" className="text-xs">#{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-2 flex justify-between">
        <Button variant="ghost" size="sm" onClick={onClick}>
          View Details
        </Button>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-1" /> Download
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
