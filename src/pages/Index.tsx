
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
          title="Innovations" 
          categorySlug="innovations"
          stories={storiesData.innovations}
        />
        
        <div className="bg-gradient-to-r from-youth-purple/10 to-youth-blue/10 py-10">
          <div className="container mx-auto px-4 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Youth-Led Initiatives</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">Discover groundbreaking programs created by young leaders making a difference around the world.</p>
          </div>
          <CategorySection 
            title="" 
            categorySlug="initiatives"
            stories={storiesData.initiatives}
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
