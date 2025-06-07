
import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Play, Lock, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const DigitalStoreSection = () => {
  const featuredDigitalProducts = [
    {
      id: 1,
      title: "Digital Marketing Mastery",
      type: "E-Book",
      price: 29,
      originalPrice: 49,
      rating: 4.8,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300",
      description: "Complete guide to modern digital marketing strategies",
      isNew: true
    },
    {
      id: 2,
      title: "Premium Monthly",
      type: "Membership",
      price: 19,
      period: "month",
      rating: 4.9,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300",
      description: "Access to all digital products & exclusive content",
      popular: true
    },
    {
      id: 3,
      title: "Business Plan Template",
      type: "Template",
      price: 15,
      rating: 4.7,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300",
      description: "Professional business plan template with examples",
      isNew: false
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-youth-purple/5 to-youth-blue/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-4 shadow-sm">
            <Download className="h-4 w-4 text-youth-purple" />
            <span className="text-sm font-medium text-youth-purple">Instant Downloads</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Digital Store</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover e-books, templates, memberships, and digital tools. 
            Download immediately after purchase with lifetime access.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {featuredDigitalProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 flex gap-1">
                  {product.isNew && (
                    <Badge className="bg-youth-orange text-white">New</Badge>
                  )}
                  {product.popular && (
                    <Badge className="bg-youth-purple text-white">Popular</Badge>
                  )}
                </div>
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="bg-white/90">
                    {product.type}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-lg line-clamp-1">{product.title}</CardTitle>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-sm text-gray-500">({product.reviews})</span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-youth-purple">
                      ${product.price}
                      {product.period && <span className="text-sm">/{product.period}</span>}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                </div>
                
                <Button className="w-full" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  {product.type === 'Membership' ? 'Choose Plan' : 'Buy Now'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/store/digital">
            <Button size="lg" className="bg-gradient-to-r from-youth-purple to-youth-blue text-white">
              View All Digital Products
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DigitalStoreSection;
