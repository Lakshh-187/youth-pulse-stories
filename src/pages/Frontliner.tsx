
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import { 
  Award, 
  Bookmark, 
  BriefcaseBusiness, 
  ExternalLink, 
  GraduationCap, 
  Globe, 
  Users, 
  School 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Separator } from '@/components/ui/separator';

const Frontliner = () => {
  const opportunityCategories = [
    { 
      id: 'scholarships', 
      name: 'Scholarships & Grants', 
      icon: <GraduationCap className="h-6 w-6 text-youth-purple" />,
      description: 'Financial support for education and research'
    },
    { 
      id: 'exchanges', 
      name: 'Exchange Programs', 
      icon: <Globe className="h-6 w-6 text-youth-purple" />,
      description: 'Cultural and educational exchanges across countries'
    },
    { 
      id: 'internships', 
      name: 'Internships', 
      icon: <BriefcaseBusiness className="h-6 w-6 text-youth-purple" />,
      description: 'Professional work experience opportunities'
    },
    { 
      id: 'volunteering', 
      name: 'Volunteering', 
      icon: <Users className="h-6 w-6 text-youth-purple" />,
      description: 'Community service and social impact projects'
    },
    { 
      id: 'competitions', 
      name: 'Competitions', 
      icon: <Award className="h-6 w-6 text-youth-purple" />,
      description: 'Contests showcasing talent and innovation'
    }
  ];

  const featuredOpportunities = [
    {
      title: "Get Hired via Talent Hunt Alliance",
      organization: "Uniford Foundation ",
      deadline: "April 15, 2025",
      category: "Carrer & Grants",
      location: "Global",
      url: "https://linktr.ee/UNscholar"
    },
    {
      title: "Internship",
      organization: "Uniwave",
      deadline: "April 30, 2025",
      category: "Competitions",
      location: "Global",
      url: "https://www.uniwave.in/getHired"
    },
    {
      title: "Worldwide Opportunity",
      organization: "Lawctopus",
      deadline: "Ongoing",
      category: "Exchange Programs",
      location: "Europe",
      url: "https://www.lawctopus.com"
    },
    {
      title: "Opportunities",
      organization: "Opportunity Desk",
      deadline: "January 15, 2026",
      category: "Technology",
      location: "Global",
      url: "https://opportunitydesk.org/"
    },
    {
      title: "Hackrathons",
      organization: "Dev post",
      deadline: "October 10, 2025",
      category: "Leadership",
      location: "Global",
      url: "https://devpost.com/"
    },
    
    {
      title: "Opportunities",
      organization: "youthop",
      deadline: "April 10, 2025",
      category: "Leadership",
      location: "Global",
      url: "https://www.youthop.com/"
    }
  ];

  const platforms = [
    {
      name: "Top 100 Winners – PitchBurg",
      description: "Meet the boldest startup minds of the year — the Top 100 PitchBurg winners who turned ideas into investment-ready ventures",
      website: "https://example.com/yon",
      focus: "All opportunities"
    },
    {
      name: "Top 100 Innovators – Stanburg Magazine",
      description: "Celebrating young changemakers and student pioneers featured in Stanburg’s elite Top 100 list of game-changing innovations",
      website: "https://example.com/changemakers",
      focus: "Social impact"
    },
    {
      name: "Top 100 Uni-Pitch Champions",
      description: "From classrooms to boardrooms — discover the Top 100 Uni-Pitch winners who impressed panels with visionary pitches and powerful prototypes.",
      website: "https://example.com/aiesec",
      focus: "Professional development"
    },
    {
      name: "Top 100 Projects – Uniford Project Expo",
      description: "Explore the most impactful tech, social, and green projects by students — the Top 100 that stole the spotlight at the Uniford Project Expo.",
      website: "https://example.com/ysi",
      focus: "Environment & sustainability"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-r from-youth-purple to-youth-blue py-16 md:py-24">
          <div className="container mx-auto px-4 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frontliner</h1>
            <p className="text-xl md:text-2xl max-w-2xl opacity-90">
              Discover global opportunities, platforms, and programs designed for youth development and empowerment.
            </p>
          </div>
        </section>

        {/* Navigation menu */}
        <section className="bg-white border-b py-4">
          <div className="container mx-auto px-4">
            <NavigationMenu>
              <NavigationMenuList>
                {opportunityCategories.map((category) => (
                  <NavigationMenuItem key={category.id}>
                    <NavigationMenuTrigger className="flex items-center gap-2">
                      {category.icon}
                      <span>{category.name}</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="p-4 md:w-[400px] lg:w-[500px]">
                        <div className="mb-2 font-medium">{category.name}</div>
                        <p className="text-sm text-gray-500 mb-2">{category.description}</p>
                        <Separator className="my-2" />
                        <div className="grid grid-cols-2 gap-2 pt-2">
                          <Button variant="link" size="sm" className="justify-start p-0">
                            Popular Programs
                          </Button>
                          <Button variant="link" size="sm" className="justify-start p-0">
                            How to Apply
                          </Button>
                          <Button variant="link" size="sm" className="justify-start p-0">
                            Success Stories
                          </Button>
                          <Button variant="link" size="sm" className="justify-start p-0">
                            Advice & Tips
                          </Button>
                        </div>
                        <Button className="mt-4 w-full bg-youth-purple hover:bg-youth-purple/90">
                          Coming soon {category.name}
                        </Button>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </section>

        {/* Featured opportunities */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Featured Opportunities</h2>
              <Button variant="outline" className="border-youth-purple text-youth-purple">
                <Bookmark className="mr-2 h-4 w-4" /> Save All
              </Button>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Opportunity</TableHead>
                    <TableHead>Organization</TableHead>
                    <TableHead>Deadline</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {featuredOpportunities.map((opportunity, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{opportunity.title}</TableCell>
                      <TableCell>{opportunity.organization}</TableCell>
                      <TableCell>{opportunity.deadline}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{opportunity.category}</Badge>
                      </TableCell>
                      <TableCell>{opportunity.location}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" asChild>
                          <a href={opportunity.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="mt-6 text-center">
              <Button className="bg-youth-purple hover:bg-youth-purple/90">
                Loading....
              </Button>
            </div>
          </div>
        </section>

        {/* Youth development platforms */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Youth Development Platforms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{platform.name}</CardTitle>
                    <CardDescription>{platform.focus}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-gray-600">{platform.description}</p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="w-full">
                          Publishing soon
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Coming Soon!</DialogTitle>
                          <DialogDescription>
                            Thank you for reaching out! Exciting things are coming soon! 🚀
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Global programs */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Global Youth Programs</h2>
            <p className="text-gray-600 mb-8">Structured programs designed to develop specific skills and experiences</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-youth-purple/10 to-youth-blue/5 border-youth-purple/20">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <School className="h-6 w-6 text-youth-purple mr-2" />
                    <CardTitle>Education & Skills</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-white p-1 rounded-full mr-2 mt-0.5">
                        <Award className="h-3 w-3 text-youth-purple" />
                      </span>
                      <span>Coding Boot Camps</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-white p-1 rounded-full mr-2 mt-0.5">
                        <Award className="h-3 w-3 text-youth-purple" />
                      </span>
                      <span>Digital Skills Training</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-white p-1 rounded-full mr-2 mt-0.5">
                        <Award className="h-3 w-3 text-youth-purple" />
                      </span>
                      <span>Language Immersion</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-white p-1 rounded-full mr-2 mt-0.5">
                        <Award className="h-3 w-3 text-youth-purple" />
                      </span>
                      <span>STEM Fellowships</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-youth-purple/10 to-youth-blue/5 border-youth-purple/20">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <GraduationCap className="h-6 w-6 text-youth-purple mr-2" />
                    <CardTitle>Leadership Development</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-white p-1 rounded-full mr-2 mt-0.5">
                        <Award className="h-3 w-3 text-youth-purple" />
                      </span>
                      <span>Youth Ambassador Programs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-white p-1 rounded-full mr-2 mt-0.5">
                        <Award className="h-3 w-3 text-youth-purple" />
                      </span>
                      <span>Model UN Conferences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-white p-1 rounded-full mr-2 mt-0.5">
                        <Award className="h-3 w-3 text-youth-purple" />
                      </span>
                      <span>Debate Championships</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-white p-1 rounded-full mr-2 mt-0.5">
                        <Award className="h-3 w-3 text-youth-purple" />
                      </span>
                      <span>Youth Parliament</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-youth-purple/10 to-youth-blue/5 border-youth-purple/20">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Globe className="h-6 w-6 text-youth-purple mr-2" />
                    <CardTitle>Global Citizenship</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-white p-1 rounded-full mr-2 mt-0.5">
                        <Award className="h-3 w-3 text-youth-purple" />
                      </span>
                      <span>Climate Action Initiatives</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-white p-1 rounded-full mr-2 mt-0.5">
                        <Award className="h-3 w-3 text-youth-purple" />
                      </span>
                      <span>Peace Building Programs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-white p-1 rounded-full mr-2 mt-0.5">
                        <Award className="h-3 w-3 text-youth-purple" />
                      </span>
                      <span>Cultural Heritage Projects</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-white p-1 rounded-full mr-2 mt-0.5">
                        <Award className="h-3 w-3 text-youth-purple" />
                      </span>
                      <span>Sustainable Development Goals</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Frontliner;
