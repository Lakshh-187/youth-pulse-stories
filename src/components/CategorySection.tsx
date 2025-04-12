
import React from 'react';
import StoryCard from './StoryCard';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CategorySectionProps {
  title: string;
  categorySlug: string;
  stories: Array<{
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
  }> | undefined;
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, categorySlug, stories = [] }) => {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          <Button variant="link" asChild className="text-youth-purple font-medium">
            <Link to={`/${categorySlug}`} className="flex items-center">
              View All <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories && stories.length > 0 ? (
            stories.map((story) => (
              <StoryCard
                key={story.id}
                id={story.id}
                title={story.title}
                excerpt={story.excerpt}
                category={story.category}
                image={story.image}
                author={story.author}
                publishedAt={story.publishedAt}
                commentsCount={story.commentsCount}
                hasReadMore={true}
                referralLink={`/referral/${story.id}`}
              />
            ))
          ) : (
            <div className="col-span-3 text-center py-8 text-gray-500">
              No stories available for this category yet.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
