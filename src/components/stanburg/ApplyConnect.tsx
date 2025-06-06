
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FileText, Users, MessageCircle, Phone, Mail, Calendar } from 'lucide-react';

const ApplyConnect = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-youth-purple/10 via-white to-youth-blue/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            🧑‍💼 Apply or Connect
          </h2>
          <p className="text-xl text-gray-600">
            Ready to transform your idea? Let's start the conversation
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Application Form */}
          <Card className="border-youth-purple/20">
            <CardHeader className="text-center bg-youth-purple/5">
              <CardTitle className="text-2xl font-bold text-youth-purple flex items-center justify-center">
                <FileText className="mr-2" />
                Apply to Stanburg (Free)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Full Name" />
                  <Input placeholder="Email Address" type="email" />
                </div>
                
                <Input placeholder="Organization/Project Name" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Phone Number" />
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                    <option>Select Category</option>
                    <option>Entrepreneur</option>
                    <option>Startup</option>
                    <option>NGO</option>
                    <option>Social Activist</option>
                    <option>Small Business</option>
                  </select>
                </div>
                
                <Textarea 
                  placeholder="Describe your project and what support you need..."
                  rows={4}
                />
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Services Needed (select all that apply):</label>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {['Website', 'Mobile App', 'AI Tools', 'Media Coverage', 'Branding', 'PR Strategy'].map(service => (
                      <label key={service} className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span>{service}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full bg-youth-purple hover:bg-youth-purple/90 text-lg py-3">
                  Submit Application
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  We'll review your application within 48 hours and get back to you
                </p>
              </form>
            </CardContent>
          </Card>
          
          {/* Partnership & Contact */}
          <div className="space-y-8">
            {/* Partner with Us */}
            <Card className="border-youth-blue/20">
              <CardHeader className="text-center bg-youth-blue/5">
                <CardTitle className="text-2xl font-bold text-youth-blue flex items-center justify-center">
                  <Users className="mr-2" />
                  Partner with Us
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 text-center">
                <p className="text-gray-600 mb-6">
                  Join us as a CSR partner, volunteer expert, or funding organization
                </p>
                
                <div className="space-y-3">
                  <Button className="w-full bg-youth-blue hover:bg-youth-blue/90">
                    Become a CSR Partner
                  </Button>
                  <Button variant="outline" className="w-full border-youth-blue text-youth-blue hover:bg-youth-blue hover:text-white">
                    Join as Volunteer Expert
                  </Button>
                  <Button variant="outline" className="w-full border-youth-blue text-youth-blue hover:bg-youth-blue hover:text-white">
                    Funding Partnership
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800 flex items-center">
                  <MessageCircle className="mr-2" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-youth-purple" />
                  <span>support@stanburg.org</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-youth-purple" />
                  <span>WhatsApp: +91 98765 43210</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-youth-purple" />
                  <span>Schedule a consultation</span>
                </div>
                
                <div className="pt-4 space-y-3">
                  <Button variant="outline" className="w-full border-green-500 text-green-600 hover:bg-green-50">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp Chat
                  </Button>
                  
                  <Button variant="outline" className="w-full border-youth-orange text-youth-orange hover:bg-youth-orange/10">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Consultation Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-4">Trusted by 500+ organizations worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-sm font-medium">NGO Partners: 50+</div>
            <div className="text-sm font-medium">Startups Supported: 200+</div>
            <div className="text-sm font-medium">Projects Completed: 500+</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyConnect;
