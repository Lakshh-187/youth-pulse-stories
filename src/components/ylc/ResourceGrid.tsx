
import React, { useState } from 'react';
import { resourcesData, Resource } from '@/data/resourcesData';
import ResourceCard from '@/components/ylc/ResourceCard';
import ResourceModal from '@/components/ylc/ResourceModal';

interface ResourceGridProps {
  filter: string;
  page: number;
  searchQuery: string;
}

const ResourceGrid = ({ filter, page, searchQuery }: ResourceGridProps) => {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  // Filter resources based on selected filter and search query
  const filteredResources = resourcesData.filter(resource => {
    // Apply type filter
    const matchesFilter = filter === 'All' || resource.type === filter;
    
    // Apply search filter (if any)
    const matchesSearch = searchQuery === '' || 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      resource.type.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  // Pagination: 6 items per page
  const itemsPerPage = 6;
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedResources = filteredResources.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="container mx-auto py-10 px-4">
      {filteredResources.length === 0 ? (
        <div className="text-center py-20">
          <h3 className="text-2xl font-medium text-gray-700">No resources found</h3>
          <p className="text-gray-500 mt-2">Try changing your search criteria or filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedResources.map(resource => (
            <ResourceCard 
              key={resource.id} 
              resource={resource} 
              onClick={() => setSelectedResource(resource)}
            />
          ))}
        </div>
      )}

      {/* Resource Modal */}
      {selectedResource && (
        <ResourceModal
          resource={selectedResource}
          isOpen={!!selectedResource}
          onClose={() => setSelectedResource(null)}
        />
      )}
    </div>
  );
};

export default ResourceGrid;
