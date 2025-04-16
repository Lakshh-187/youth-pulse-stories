
import React, { useState } from 'react';
import { FileText, Search, Table, Grid } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Table as UITable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Document {
  id: number;
  title: string;
  description: string;
  category: string;
  type: string;
  date: string;
  size: string;
  downloads: number;
}

const documents: Document[] = [
  {
    id: 1,
    title: "platforms & Programs",
    description: "Outsources platforms & old curriculam Program",
    category: "Guide",
    type: "PDF",
    date: "8/15/2023",
    size: "4.2 MB",
    downloads: 3250
  },
  {
    id: 2,
    title: "Uniford Platforms & Programs",
    description: "Step-by-step roadmap for transitioning from campus to corporate",
    category: "Guide",
    type: "PDF",
    date: "9/22/2024",
    size: "2.8 MB",
    downloads: 2180
  },
  {
    id: 3,
    title: "Uniford Portals",
    description: "Email- info@uniford.org & password 1 to 8 in uniford.org",
    category: "Guides",
    type: "PDF",
    date: "7/10/2023",
    size: "3.5 MB",
    downloads: 4120
  },
  {
    id: 4,
    title: "Intern in organization",
    description: "on-boarding detail & benefits",
    category: "Guide",
    type: "PDF",
    date: "10/5/2023",
    size: "1.2 MB",
    downloads: 1850
  },
  {
    id: 5,
    title: "Scholar Benefits Booklet",
    description: "a booklet cover scholar benefits",
    category: "Guide",
    type: "PDF",
    date: "11/12/2023",
    size: "0.8 MB",
    downloads: 5230
  }
];

const Published = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [viewMode, setViewMode] = useState<"table" | "grid">("table");
  
  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || doc.category === selectedCategory;
    const matchesType = selectedType === "all" || doc.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Documents Library</h1>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search documents..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Guide">Guide</SelectItem>
              <SelectItem value="Guides">Guides</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="PDF">PDF</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b flex justify-between items-center">
            <div className="flex gap-2">
              <Button
                variant={viewMode === "table" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("table")}
              >
                <Table className="h-4 w-4 mr-1" />
                Table View
              </Button>
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4 mr-1" />
                Grid View
              </Button>
            </div>
            <span className="text-sm text-gray-500">{filteredDocuments.length} documents found</span>
          </div>

          <UITable>
            <TableHeader>
              <TableRow>
                <TableHead>Document</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Downloads</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDocuments.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell>
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-red-500 mt-1" />
                      <div>
                        <div className="font-medium">{doc.title}</div>
                        <div className="text-sm text-gray-500">{doc.description}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{doc.category}</TableCell>
                  <TableCell>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">
                      {doc.type}
                    </span>
                  </TableCell>
                  <TableCell>{doc.date}</TableCell>
                  <TableCell>{doc.size}</TableCell>
                  <TableCell>{doc.downloads.toLocaleString()}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      Download
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </UITable>
        </div>
      </div>
    </div>
  );
};

export default Published;
