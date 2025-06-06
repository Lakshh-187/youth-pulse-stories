
import React, { useState } from 'react';
import { Download, Play, Lock, Star, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const DigitalStore = () => {
  const [selectedTab, setSelectedTab] = useState('ebooks');

  const digitalProducts = {
    ebooks: [
      {
        id: 1,
        title: "Digital Marketing Mastery",
        author: "Sarah Johnson",
        price: 29,
        originalPrice: 49,
        rating: 4.8,
        reviews: 156,
        format: "PDF + ePub",
        pages: 240,
        preview: true,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300",
        description: "Complete guide to modern digital marketing strategies"
      },
      {
        id: 2,
        title: "React Development Guide",
        author: "Mike Chen",
        price: 39,
        originalPrice: 59,
        rating: 4.9,
        reviews: 203,
        format: "PDF",
        pages: 320,
        preview: true,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300",
        description: "Master React development from basics to advanced"
      }
    ],
    memberships: [
      {
        id: 1,
        title: "Premium Monthly",
        price: 19,
        period: "month",
        features: [
          "Access to all digital products",
          "Monthly exclusive content",
          "Priority support",
          "Community access"
        ],
        popular: true
      },
      {
        id: 2,
        title: "Premium Yearly",
        price: 199,
        period: "year",
        originalPrice: 228,
        features: [
          "Access to all digital products",
          "Monthly exclusive content",
          "Priority support",
          "Community access",
          "1-on-1 monthly calls",
          "Early access to new products"
        ],
        popular: false
      }
    ],
    templates: [
      {
        id: 1,
        title: "Business Plan Template",
        price: 15,
        category: "Business",
        format: "Word + PDF",
        downloads: 1240,
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300"
      },
      {
        id: 2,
        title: "Social Media Kit",
        price: 25,
        category: "Design",
        format: "PSD + AI",
        downloads: 890,
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Digital Store Hero */}
      <section className="bg-gradient-to-br from-youth-purple via-youth-blue to-youth-purple text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Store</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Instant access to e-books, templates, tools, and premium memberships. 
            Download immediately after purchase.
          </p>
          <Button size="lg" className="bg-white text-youth-purple hover:bg-gray-100">
            Browse All Products
          </Button>
        </div>
      </section>

      {/* Digital Products Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
              <TabsTrigger value="ebooks">E-Books</TabsTrigger>
              <TabsTrigger value="memberships">Memberships</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
            </TabsList>

            <TabsContent value="ebooks">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {digitalProducts.ebooks.map((book) => (
                  <Card key={book.id} className="group hover:shadow-lg transition-all duration-300">
                    <div className="relative">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-48 object-cover"
                      />
                      {book.preview && (
                        <Button
                          size="sm"
                          className="absolute top-2 right-2 bg-white/90 text-youth-purple hover:bg-white"
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          Preview
                        </Button>
                      )}
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-lg">{book.title}</CardTitle>
                      <p className="text-sm text-gray-600">by {book.author}</p>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex items-center gap-1 mb-2">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{book.rating}</span>
                        <span className="text-sm text-gray-500">({book.reviews})</span>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-3">{book.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="outline">{book.format}</Badge>
                        <Badge variant="outline">{book.pages} pages</Badge>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-youth-purple">${book.price}</span>
                        {book.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">${book.originalPrice}</span>
                        )}
                      </div>
                    </CardContent>
                    
                    <CardFooter>
                      <Button className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Buy & Download
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="memberships">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {digitalProducts.memberships.map((membership) => (
                  <Card key={membership.id} className={`relative ${membership.popular ? 'ring-2 ring-youth-purple' : ''}`}>
                    {membership.popular && (
                      <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-youth-purple">
                        Most Popular
                      </Badge>
                    )}
                    
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl">{membership.title}</CardTitle>
                      <div className="mt-4">
                        <span className="text-4xl font-bold text-youth-purple">${membership.price}</span>
                        <span className="text-gray-600">/{membership.period}</span>
                        {membership.originalPrice && (
                          <div className="text-sm text-gray-500 line-through">
                            ${membership.originalPrice}/{membership.period}
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <ul className="space-y-3">
                        {membership.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-youth-purple rounded-full"></div>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    
                    <CardFooter>
                      <Button 
                        className="w-full" 
                        variant={membership.popular ? "default" : "outline"}
                      >
                        Choose Plan
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="templates">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {digitalProducts.templates.map((template) => (
                  <Card key={template.id} className="group hover:shadow-lg transition-all duration-300">
                    <div className="relative">
                      <img
                        src={template.image}
                        alt={template.title}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-2 left-2 bg-youth-blue">
                        {template.category}
                      </Badge>
                    </div>
                    
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">{template.title}</h3>
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                        <span>{template.format}</span>
                        <span>{template.downloads} downloads</span>
                      </div>
                      <div className="text-lg font-bold text-youth-purple">${template.price}</div>
                    </CardContent>
                    
                    <CardFooter>
                      <Button className="w-full" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download Now
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Members Only Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Lock className="h-12 w-12 text-youth-purple mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Members Only Content</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Unlock exclusive content, advanced tutorials, and premium resources with our membership plans.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Advanced React Patterns",
              "Business Growth Strategies",
              "Design System Templates"
            ].map((title, index) => (
              <Card key={index} className="opacity-75">
                <CardContent className="p-6 text-center">
                  <Lock className="h-8 w-8 text-gray-400 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 mb-4">Members only content</p>
                  <Button variant="outline" size="sm">
                    Become a Member
                  </Button>
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

export default DigitalStore;
