
import React from 'react';
import { FileText, BookOpen, Scale, Newspaper, ListOrdered, Download } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Published = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-youth-purple mb-8 text-center">Published Resources</h1>
        
        <Tabs defaultValue="documents" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
            <TabsTrigger value="documents" className="data-[state=active]:bg-youth-purple data-[state=active]:text-white">
              Documents
            </TabsTrigger>
            <TabsTrigger value="reports" className="data-[state=active]:bg-youth-purple data-[state=active]:text-white">
              Reports
            </TabsTrigger>
            <TabsTrigger value="legal" className="data-[state=active]:bg-youth-purple data-[state=active]:text-white">
              Legal
            </TabsTrigger>
            <TabsTrigger value="magazines" className="data-[state=active]:bg-youth-purple data-[state=active]:text-white">
              Magazines
            </TabsTrigger>
            <TabsTrigger value="published" className="data-[state=active]:bg-youth-purple data-[state=active]:text-white">
              Published
            </TabsTrigger>
            <TabsTrigger value="results" className="data-[state=active]:bg-youth-purple data-[state=active]:text-white">
              Results
            </TabsTrigger>
          </TabsList>

          {['documents', 'reports', 'legal', 'magazines', 'published', 'results'].map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <Card key={item} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        {category === 'documents' && <FileText className="h-5 w-5 text-youth-purple" />}
                        {category === 'reports' && <BookOpen className="h-5 w-5 text-youth-purple" />}
                        {category === 'legal' && <Scale className="h-5 w-5 text-youth-purple" />}
                        {category === 'magazines' && <Newspaper className="h-5 w-5 text-youth-purple" />}
                        {category === 'published' && <FileText className="h-5 w-5 text-youth-purple" />}
                        {category === 'results' && <ListOrdered className="h-5 w-5 text-youth-purple" />}
                        Sample {category.charAt(0).toUpperCase() + category.slice(1)} {item}
                      </CardTitle>
                      <CardDescription>
                        Last updated: April {item}, 2024
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        className="w-full bg-youth-purple hover:bg-youth-purple/90"
                        onClick={() => console.log(`Downloading ${category} ${item}`)}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Published;

