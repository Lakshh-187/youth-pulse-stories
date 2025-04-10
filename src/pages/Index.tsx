
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategorySection from '@/components/CategorySection';
import BlogSection from '@/components/BlogSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import { storiesData } from '@/data/storiesData';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <CategorySection 
          title="Education" 
          categorySlug="education"
          stories={storiesData.education}
        />
        
        <div className="bg-gray-50 py-8">
          <CategorySection 
            title="Technology" 
            categorySlug="technology"
            stories={storiesData.technology}
          />
        </div>
        
        <CategorySection 
          title="Culture" 
          categorySlug="culture"
          stories={storiesData.culture}
        />
        
        <div className="bg-gray-50 py-8">
          <CategorySection 
            title="Environment" 
            categorySlug="environment"
            stories={storiesData.environment}
          />
        </div>
        
        <BlogSection />
        
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
