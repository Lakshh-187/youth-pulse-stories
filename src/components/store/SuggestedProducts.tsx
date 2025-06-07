
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, TrendingUp, Award, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const SuggestedProducts = () => {
  const suggestedProducts = [
    {
      id: 1,
      name: 'Smart Fitness Tracker',
      price: 149,
      originalPrice: 199,
      rating: 4.8,
      reviews: 324,
      image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400',
      category: 'Tech',
      reason: 'trending',
      badge: 'Bestseller'
    },
    {
      id: 2,
      name: 'Eco-Friendly Water Bottle',
      price: 29,
      originalPrice: 39,
      rating: 4.9,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400',
      category: 'Lifestyle',
      reason: 'eco-friendly',
      badge: 'Eco Choice'
    },
    {
      id: 3,
      name: 'Wireless Charging Pad',
      price: 45,
      originalPrice: 65,
      rating: 4.7,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1588438488433-a6e9b64d91ad?w=400',
      category: 'Tech',
      reason: 'popular',
      badge: 'Editor\'s Pick'
    },
    {
      id: 4,
      name: 'Artisan Coffee Beans',
      price: 24,
      originalPrice: 32,
      rating: 4.9,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400',
      category: 'Food',
      reason: 'highly-rated',
      badge: 'Premium'
    },
    {
      id: 5,
      name: 'Minimalist Desk Organizer',
      price: 35,
      originalPrice: 50,
      rating: 4.6,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
      category: 'Office',
      reason: 'trending',
      badge: 'New Arrival'
    }
  ];

  const getReasonIcon = (reason: string) => {
    switch (reason) {
      case 'trending':
        return <TrendingUp className="h-4 w-4" />;
      case 'popular':
        return <Award className="h-4 w-4" />;
      case 'highly-rated':
        return <Star className="h-4 w-4" />;
      default:
        return <Zap className="h-4 w-4" />;
    }
  };

  const getReasonText = (reason: string) => {
    switch (reason) {
      case 'trending':
        return 'Trending Now';
      case 'popular':
        return 'Most Popular';
      case 'highly-rated':
        return 'Highly Rated';
      case 'eco-friendly':
        return 'Eco-Friendly';
      default:
        return 'Recommended';
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-youth-purple to-youth-blue text-white rounded-full px-4 py-2 mb-4">
            <Award className="h-4 w-4" />
            <span className="text-sm font-medium">Handpicked for You</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Suggested Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover products recommended just for you based on trending items, customer favorites, and our expert picks.
          </p>
        </div>

        <Carousel className="w-full max-w-7xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {suggestedProducts.map((product) => (
              <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Card className="group hover:shadow-lg transition-all duration-300 h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 flex flex-col gap-1">
                      <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                        {getReasonIcon(product.reason)}
                        <span className="text-xs font-medium text-youth-purple">
                          {getReasonText(product.reason)}
                        </span>
                      </div>
                      <Badge className="bg-youth-orange text-white text-xs">
                        {product.badge}
                      </Badge>
                    </div>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <CardContent className="p-4 flex-1">
                    <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-sm text-gray-500">({product.reviews})</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg font-bold text-youth-purple">${product.price}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    <Badge variant="outline" className="text-xs">{product.category}</Badge>
                  </CardContent>
                  
                  <CardFooter className="p-4 pt-0 flex gap-2">
                    <Button className="flex-1" size="sm">
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Add to Cart
                    </Button>
                    <Link to={`/store/product/${product.id}`}>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            View All Recommendations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuggestedProducts;
