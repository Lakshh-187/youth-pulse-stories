
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample blog data - in a real application, this would come from an API
const blogs = [
  {
    id: '1',
    title: 'The Future of Youth Education in Digital Era',
    category: 'Education',
    author: 'Sarah Johnson',
    date: 'May 15, 2024',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    title: 'How Gen Z is Reshaping Workplace Culture',
    category: 'Career',
    author: 'Michael Chen',
    date: 'May 10, 2024',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    title: 'Youth-Led Climate Initiatives Making a Difference',
    category: 'Environment',
    author: 'Emma Rodriguez',
    date: 'May 5, 2024',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80'
  },
  {
    id: '4',
    title: 'The Rise of Youth Entrepreneurs in Tech',
    category: 'Technology',
    author: 'David Kim',
    date: 'Apr 28, 2024',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80'
  }
];

// Categories for filtering
const categories = ['All', 'Education', 'Career', 'Environment', 'Technology', 'Culture'];

const BlogSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-12 bg-[#F1F0FB]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Blogs</h2>
            <p className="text-gray-600">Insights and stories for the youth of today and leaders of tomorrow</p>
          </div>
          <Link to="/blogs" className="mt-4 md:mt-0 text-youth-purple hover:underline font-medium">
            View All Blogs
          </Link>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search blogs by title or author"
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="w-full md:w-64 flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-500" />
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map(blog => (
              <Link to={`/blog/${blog.id}`} key={blog.id} className="group hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm h-full">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-medium bg-youth-purple/10 text-youth-purple px-2 py-1 rounded-full">
                      {blog.category}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold line-clamp-2 group-hover:text-youth-purple transition-colors">
                      {blog.title}
                    </h3>
                    <div className="mt-3 text-gray-600 text-sm flex justify-between items-center">
                      <span>{blog.author}</span>
                      <span>{blog.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500">No blogs found matching your criteria.</p>
              <Button 
                variant="link" 
                className="text-youth-purple mt-2"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
