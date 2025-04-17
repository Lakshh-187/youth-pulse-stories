
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  DollarSign, 
  ArrowRight, 
  FileText, 
  Users,
  BookOpen,
  Globe,
  Link,
  CheckCircle
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AIFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TalentHunterAI = () => {
  const [activeTab, setActiveTab] = useState("features");

  const features: AIFeature[] = [
    {
      icon: <Briefcase className="h-8 w-8 text-youth-blue" />,
      title: "Internships & Job Referrals",
      description: "Connect with internships and job opportunities that match your skills, not just your test scores."
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-youth-purple" />,
      title: "Mentorship Connections",
      description: "Get matched with industry mentors who can guide your career path and provide valuable advice."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-green-500" />,
      title: "Grants & Funding",
      description: "Discover scholarships, grants, and funding opportunities that align with your projects and goals."
    },
    {
      icon: <Award className="h-8 w-8 text-amber-500" />,
      title: "Recognition & Awards",
      description: "Get your work recognized through competitions, awards, and publication opportunities."
    },
    {
      icon: <FileText className="h-8 w-8 text-blue-500" />,
      title: "Documentation Support",
      description: "Receive support for letters of recommendation, certifications, and other essential documents."
    },
    {
      icon: <Globe className="h-8 w-8 text-teal-500" />,
      title: "Global Opportunities",
      description: "Access opportunities from around the world through our network of partners and programs."
    }
  ];

  return (
    <div className="w-full py-16 bg-gradient-to-r from-youth-purple/10 to-youth-blue/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4">POWERED BY AI</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-youth-purple">Talent Hunter AI</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            An AI-driven Profile recommender designed for you! Our platform intelligently matches your skills, experience, and aspirations with the best opportunities & programs worldwide.
          </p>
        </div>

        <div className="mb-8">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-2">
              <TabsTrigger 
                value="features" 
                onClick={() => setActiveTab("features")}
                className={activeTab === "features" ? "bg-youth-purple text-white" : ""}
              >
                Features
              </TabsTrigger>
              <TabsTrigger 
                value="how-it-works" 
                onClick={() => setActiveTab("how-it-works")}
                className={activeTab === "how-it-works" ? "bg-youth-purple text-white" : ""}
              >
                How It Works
              </TabsTrigger>
            </TabsList>

            <TabsContent value="features" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all">
                    <CardHeader className="pb-3">
                      <div className="mb-4">
                        {feature.icon}
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="how-it-works" className="mt-8">
              <div className="max-w-4xl mx-auto">
                <Card className="bg-white shadow-xl border-0">
                  <CardContent className="p-8">
                    <div className="space-y-8">
                      <div className="flex gap-4 items-start">
                        <div className="bg-youth-purple text-white rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                          1
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Profile Submission</h3>
                          <p className="text-gray-600">Submit your profile with your skills, projects, achievements, and career aspirations.</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4 items-start">
                        <div className="bg-youth-purple text-white rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                          2
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
                          <p className="text-gray-600">Our AI analyzes your profile and identifies your strengths, potential, and areas for growth.</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4 items-start">
                        <div className="bg-youth-purple text-white rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                          3
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Opportunity Matching</h3>
                          <p className="text-gray-600">The system matches you with opportunities from our database of over 700+ programs, grants, and resources (SEP-700).</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4 items-start">
                        <div className="bg-youth-purple text-white rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                          4
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Connection & Support</h3>
                          <p className="text-gray-600">We connect you directly with the opportunities and provide ongoing support throughout your journey.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="text-center mt-8">
          <Button size="lg" className="bg-youth-purple hover:bg-youth-purple/90">
            Get Matched Now <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TalentHunterAI;
