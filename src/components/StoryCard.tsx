
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, MessageSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface StoryCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  commentsCount: number;
  featured?: boolean;
  hasReadMore?: boolean;
  referralLink?: string;
}

const StoryCard: React.FC<StoryCardProps> = ({
  id,
  title,
  excerpt,
  category,
  image,
  author,
  publishedAt,
  commentsCount,
  featured = false,
  hasReadMore = false,
  referralLink = `/story/${id}`
}) => {
  return (
    <Card className={`overflow-hidden h-full hover:shadow-md transition-shadow ${featured ? 'border-youth-purple' : ''}`}>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <Badge className="absolute top-3 left-3 bg-youth-purple hover:bg-youth-purple/90">
          {category}
        </Badge>
      </div>
      <CardContent className="pt-4">
        <h3 className="text-xl font-bold leading-tight mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm line-clamp-2">
          {excerpt}
        </p>
        {hasReadMore && (
          <Button 
            variant="outline" 
            size="sm" 
            asChild
            className="mb-3 border-youth-purple text-youth-purple hover:bg-youth-purple/10 hover:text-youth-purple transition-colors"
          >
            <Link to={referralLink} className="flex items-center">
              Read More <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        )}
      </CardContent>
      <CardFooter className="pt-0 pb-4 flex justify-between items-center text-sm text-gray-500">
        <div className="flex items-center">
          <Avatar className="h-6 w-6 mr-2">
            <AvatarImage src={author.avatar} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span>{author.name}</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {publishedAt}
          </span>
          <span className="flex items-center">
            <MessageSquare className="h-4 w-4 mr-1" />
            {commentsCount}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default StoryCard;
