
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import StoreNavbar from '@/components/store/StoreNavbar';
import Footer from '@/components/Footer';

const Store = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Tech', 'Fashion', 'Books', 'Services', 'Digital'];

  const featuredProducts = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      category: 'Tech',
      isNew: true,
      inStock: true
    },
    {
      id: 2,
      name: 'Designer Casual Jacket',
      price: 189,
      originalPrice: 249,
      rating: 4.6,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400',
      category: 'Fashion',
      isNew: false,
      inStock: true
    },
    {
      id: 3,
      name: 'Digital Marketing Masterclass',
      price: 99,
      originalPrice: 199,
      rating: 4.9,
      reviews: 256,
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400',
      category: 'Digital',
      isNew: true,
      inStock: true
    },
    {
      id: 4,
      name: 'Business Strategy Book',
      price: 24,
      originalPrice: 34,
      rating: 4.7,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400',
      category: 'Books',
      isNew: false,
      inStock: true
    }
  ];

  const filteredProducts = featuredProducts.filter(product => 
    (selectedCategory === 'All' || product.category === selectedCategory) &&
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <StoreNavbar />
      
      {/* Store Hero Section */}
      <section className="relative bg-gradient-to-r from-youth-purple to-youth-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Your Premium Store</h1>
            <p className="text-xl mb-8 opacity-90">
              Discover amazing products, digital content, and exclusive memberships. 
              Everything you need in one place.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-youth-purple hover:bg-gray-100">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/store/digital">Explore Digital Store</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 flex gap-1">
                    {product.isNew && (
                      <Badge className="bg-youth-orange">New</Badge>
                    )}
                    {product.originalPrice > product.price && (
                      <Badge className="bg-red-500">Sale</Badge>
                    )}
                  </div>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                
                <CardContent className="p-4">
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
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Tech', 'Fashion', 'Books', 'Services'].map((category) => (
              <Link
                key={category}
                to={`/store/category/${category.toLowerCase()}`}
                className="group"
              >
                <Card className="hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-youth-purple to-youth-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-xl font-bold">
                        {category.charAt(0)}
                      </span>
                    </div>
                    <h3 className="font-semibold">{category}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges & Testimonials */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Thousands</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our community of satisfied customers who trust us for quality products and excellent service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Digital Marketer",
                review: "Amazing digital products and fast delivery. The membership benefits are incredible!",
                rating: 5
              },
              {
                name: "Mike Chen",
                role: "Tech Entrepreneur",
                review: "High-quality products and excellent customer service. Highly recommended!",
                rating: 5
              },
              {
                name: "Emma Davis",
                role: "Designer",
                review: "Love the variety and quality. The digital store has everything I need for my projects.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.review}"</p>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Store;
