
import React, { useState } from 'react';
import { FileText, BookOpen, Scale, Newspaper, ListOrdered, Download, Search, Filter } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";

const documents = [
  {
    id: 1,
    title: "Academic Curriculum 2024",
    category: "documents",
    type: "curriculum",
    date: "2024-04-01",
    size: "2.5 MB"
  },
  {
    id: 2,
    title: "Student Handbook",
    category: "documents",
    type: "guide",
    date: "2024-03-15",
    size: "1.8 MB"
  },
  {
    id: 3,
    title: "Annual Report 2023",
    category: "reports",
    type: "report",
    date: "2024-01-10",
    size: "5.2 MB"
  },
  {
    id: 4,
    title: "Legal Guidelines",
    category: "legal",
    type: "guide",
    date: "2024-02-20",
    size: "1.2 MB"
  },
  // Add more sample documents as needed
];

const Published = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  
  const filterDocuments = (category: string) => {
    return documents
      .filter(doc => doc.category === category)
      .filter(doc => 
        doc.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedType === "all" || doc.type === selectedType)
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-youth-purple mb-4">Published Resources</h1>
          <p className="text-gray-600 mb-8">
            Access our comprehensive collection of educational resources, guides, and documents.
          </p>
          
          {/* Search and Filter Section */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search resources..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="curriculum">Curriculum</SelectItem>
                <SelectItem value="guide">Guides</SelectItem>
                <SelectItem value="report">Reports</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Tabs defaultValue="documents" className="w-full">
          <ScrollArea className="w-full">
            <TabsList className="inline-flex w-full justify-start p-1 mb-8">
              <TabsTrigger value="documents" className="data-[state=active]:bg-youth-purple data-[state=active]:text-white">
                <FileText className="mr-2 h-4 w-4" />
                Documents
              </TabsTrigger>
              <TabsTrigger value="reports" className="data-[state=active]:bg-youth-purple data-[state=active]:text-white">
                <BookOpen className="mr-2 h-4 w-4" />
                Reports
              </TabsTrigger>
              <TabsTrigger value="legal" className="data-[state=active]:bg-youth-purple data-[state=active]:text-white">
                <Scale className="mr-2 h-4 w-4" />
                Legal
              </TabsTrigger>
              <TabsTrigger value="magazines" className="data-[state=active]:bg-youth-purple data-[state=active]:text-white">
                <Newspaper className="mr-2 h-4 w-4" />
                Magazines
              </TabsTrigger>
              <TabsTrigger value="published" className="data-[state=active]:bg-youth-purple data-[state=active]:text-white">
                <FileText className="mr-2 h-4 w-4" />
                Published
              </TabsTrigger>
              <TabsTrigger value="results" className="data-[state=active]:bg-youth-purple data-[state=active]:text-white">
                <ListOrdered className="mr-2 h-4 w-4" />
                Results
              </TabsTrigger>
            </TabsList>
          </ScrollArea>

          {['documents', 'reports', 'legal', 'magazines', 'published', 'results'].map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterDocuments(category).map((doc) => (
                  <Card key={doc.id} className="group hover:shadow-lg transition-all duration-300 bg-white border-none shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <FileText className="h-5 w-5 text-youth-purple" />
                        {doc.title}
                      </CardTitle>
                      <CardDescription className="flex justify-between items-center">
                        <span>Updated: {doc.date}</span>
                        <span className="text-sm text-gray-500">{doc.size}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        className="w-full bg-youth-purple hover:bg-youth-purple/90 group-hover:scale-105 transition-transform duration-300"
                        onClick={() => console.log(`Downloading ${doc.title}`)}
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
