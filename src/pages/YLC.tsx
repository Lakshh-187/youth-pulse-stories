
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import YLCHero from '@/components/ylc/YLCHero';
import ResourceGrid from '@/components/ylc/ResourceGrid';
import FilterBar from '@/components/ylc/FilterBar';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const YLC = () => {
  const [currentFilter, setCurrentFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Toaster />
      
      <main className="flex-grow">
        <YLCHero setSearchQuery={setSearchQuery} />
        <FilterBar 
          currentFilter={currentFilter} 
          setCurrentFilter={setCurrentFilter} 
        />
        <ResourceGrid 
          filter={currentFilter} 
          page={currentPage}
          searchQuery={searchQuery}
        />
        
        <div className="container mx-auto py-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
              {[1, 2, 3].map(page => (
                <PaginationItem key={page}>
                  <PaginationLink 
                    isActive={currentPage === page} 
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext 
                  onClick={() => setCurrentPage(prev => prev + 1)}
                  className={currentPage === 3 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
        
        {/* SEO Footer Section (Hidden) */}
        <div className="hidden">
          Explore Uniford Foundation's official innovation vault, PDF reports, case studies, 
          student-led ideas, and videos at www.uniford.org. Hashtags include #Uniford 
          #UnifordFoundation #Innovation #Reports #Impact. Ranked globally for student and 
          social innovation media.
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default YLC;
