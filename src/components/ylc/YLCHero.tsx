
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface YLCHeroProps {
  setSearchQuery: (query: string) => void;
}

const YLCHero = ({ setSearchQuery }: YLCHeroProps) => {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('search') as string;
    setSearchQuery(query);
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-16 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-youth-purple to-blue-600 bg-clip-text text-transparent">
          Explore the Power of Ideas
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Find innovations, reports, media, and PDFs from Uniford Foundation
        </p>
        
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              name="search"
              className="pl-10 pr-4 py-6 text-lg w-full"
              placeholder="Search by keyword, type, or tag..."
            />
          </div>
          <Button type="submit" size="lg" className="px-8">
            Search
          </Button>
        </form>
        
        <Button variant="outline" size="lg" className="mt-4">
          + Submit your innovation/report
        </Button>
      </div>
    </div>
  );
};

export default YLCHero;
