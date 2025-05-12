
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FilterBarProps {
  currentFilter: string;
  setCurrentFilter: (filter: string) => void;
}

const FilterBar = ({ currentFilter, setCurrentFilter }: FilterBarProps) => {
  const filters = [
    'All', 
    'Reports', 
    'PDFs', 
    'Videos', 
    'Innovations', 
    'Policy Docs', 
    'Case Studies', 
    'Whitepapers'
  ];

  return (
    <div className="bg-white py-4 border-b border-t sticky top-16 z-40">
      <div className="container mx-auto overflow-x-auto">
        <div className="flex gap-2 min-w-max px-4">
          {filters.map(filter => (
            <Button
              key={filter}
              onClick={() => setCurrentFilter(filter)}
              variant={currentFilter === filter ? "default" : "ghost"}
              className={cn(
                "rounded-full px-6 text-sm transition-all",
                currentFilter === filter 
                  ? "" 
                  : "text-gray-600 hover:bg-gray-100"
              )}
            >
              {filter}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
