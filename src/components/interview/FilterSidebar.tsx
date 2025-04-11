
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Check, X, Search } from 'lucide-react';

interface FilterSidebarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedStatus: string | null;
  setSelectedStatus: (status: string | null) => void;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  selectedCountry: string | null;
  setSelectedCountry: (country: string | null) => void;
  selectedRevenue: string | null;
  setSelectedRevenue: (revenue: string | null) => void;
  selectedFailureCause: string | null;
  setSelectedFailureCause: (cause: string | null) => void;
  uniqueCategories: string[];
  uniqueCountries: string[];
  uniqueRevenues: string[];
  uniqueFailureCauses: string[];
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  searchTerm,
  setSearchTerm,
  selectedStatus,
  setSelectedStatus,
  selectedCategory,
  setSelectedCategory,
  selectedCountry,
  setSelectedCountry,
  selectedRevenue,
  setSelectedRevenue,
  selectedFailureCause,
  setSelectedFailureCause,
  uniqueCategories,
  uniqueCountries,
  uniqueRevenues,
  uniqueFailureCauses
}) => {
  const resetFilters = () => {
    setSelectedStatus(null);
    setSelectedCategory(null);
    setSelectedCountry(null);
    setSelectedRevenue(null);
    setSelectedFailureCause(null);
    setSearchTerm('');
  };

  return (
    <div className="space-y-4">
      <Button 
        variant="outline" 
        className="w-full justify-start text-left font-semibold border-2"
        onClick={resetFilters}
      >
        All Interviews
      </Button>
      
      <Button 
        variant="outline" 
        className={`w-full justify-start text-left font-semibold ${selectedStatus === 'failed' ? 'bg-red-100 text-red-600 border-red-300 border-2' : 'border-2'}`}
        onClick={() => setSelectedStatus(selectedStatus === 'failed' ? null : 'failed')}
      >
        <X className="mr-2 h-5 w-5 text-red-500" />
        Failed startup
      </Button>
      
      <Button 
        variant="outline" 
        className={`w-full justify-start text-left font-semibold ${selectedStatus === 'successful' ? 'bg-green-100 text-green-600 border-green-300 border-2' : 'border-2'}`}
        onClick={() => setSelectedStatus(selectedStatus === 'successful' ? null : 'successful')}
      >
        <Check className="mr-2 h-5 w-5 text-green-500" />
        Successful startup
      </Button>
      
      <div className="border-t border-gray-200 my-4"></div>
      
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search..."
          className="pl-10 border-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="space-y-4">
        <Select value={selectedCategory || ''} onValueChange={(value) => setSelectedCategory(value === "all_categories" ? null : value)}>
          <SelectTrigger className="border-2">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all_categories">All Categories</SelectItem>
            {uniqueCategories.map(category => (
              <SelectItem key={category} value={category}>{category}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select value={selectedCountry || ''} onValueChange={(value) => setSelectedCountry(value === "all_countries" ? null : value)}>
          <SelectTrigger className="border-2">
            <SelectValue placeholder="Country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all_countries">All Countries</SelectItem>
            {uniqueCountries.map(country => (
              <SelectItem key={country} value={country}>{country}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select value={selectedRevenue || ''} onValueChange={(value) => setSelectedRevenue(value === "all_revenues" ? null : value)}>
          <SelectTrigger className="border-2">
            <SelectValue placeholder="Revenue (✓)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all_revenues">All Revenue Ranges</SelectItem>
            {uniqueRevenues.map(revenue => (
              <SelectItem key={revenue} value={revenue}>{revenue}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select value={selectedFailureCause || ''} onValueChange={(value) => setSelectedFailureCause(value === "all_failure_causes" ? null : value)}>
          <SelectTrigger className="border-2">
            <SelectValue placeholder="Cause of failure (✗)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all_failure_causes">All Failure Causes</SelectItem>
            {uniqueFailureCauses.map(cause => (
              <SelectItem key={cause} value={cause}>{cause}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FilterSidebar;
