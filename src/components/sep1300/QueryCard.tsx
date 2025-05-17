
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const QueryCard = ({ query, onClick }) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 border border-purple-100">
      <CardContent className="pt-6 flex-grow">
        <Badge className="mb-3 bg-purple-100 text-purple-800 hover:bg-purple-200">Query</Badge>
        <h3 className="text-lg font-bold mb-2 line-clamp-2">{query.title}</h3>
        <p className="text-gray-600 line-clamp-3">{query.problem}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Button 
          onClick={onClick} 
          variant="outline"
          className="w-full border-purple-300 hover:bg-purple-50 hover:text-purple-800"
        >
          View Solution
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QueryCard;
