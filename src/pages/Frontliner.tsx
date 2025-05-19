import React, { useState } from 'react';
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
  CardTitle,
  CardFooter 
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
  School,
  BookOpen,
  RocketIcon,
  Lightbulb,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import OpportunityCard from '@/components/sep1300/OpportunityCard';
import OpportunityDetailModal from '@/components/sep1300/OpportunityDetailModal';

const Frontliner = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedInitiative, setSelectedInitiative] = useState(null);
  const [isInitiativeModalOpen, setIsInitiativeModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('innovations');

  const opportunityCategories = [
    { 
      id: 'innovations', 
      name: 'Innovations & Ideas', 
      icon: <Lightbulb className="h-6 w-6 text-youth-purple" />,
      description: 'Breakthrough solutions and creative concepts'
    },
    { 
      id: 'eco-friendly', 
      name: 'Eco-Friendly Solutions', 
      icon: <Globe className="h-6 w-6 text-youth-purple" />,
      description: 'Sustainable and environmentally conscious initiatives'
    },
    { 
      id: 'non-profits', 
      name: 'Non-Profit Organizations', 
      icon: <Users className="h-6 w-6 text-youth-purple" />,
      description: 'Organizations making social impact without profit motives'
    },
    { 
      id: 'storytelling', 
      name: 'Storytelling', 
      icon: <BookOpen className="h-6 w-6 text-youth-purple" />,
      description: 'Narratives highlighting impactful journeys'
    },
    { 
      id: 'initiatives', 
      name: 'Global Initiatives', 
      icon: <Award className="h-6 w-6 text-youth-purple" />,
      description: 'Worldwide projects making positive change'
    }
  ];

  const featuredOpportunities = [
    {
      title: "Green Energy Innovation Hub",
      organization: "EcoTech Alliance",
      deadline: "April 15, 2025",
      category: "Eco-friendly",
      location: "Global",
      url: "https://example.com/ecotech"
    },
    {
      title: "AI for Social Good",
      organization: "Tech4Change",
      deadline: "April 30, 2025",
      category: "Innovation",
      location: "Global",
      url: "https://example.com/tech4change"
    },
    {
      title: "Ocean Cleanup Initiative",
      organization: "Blue Planet",
      deadline: "Ongoing",
      category: "Eco-friendly",
      location: "Coastal Regions",
      url: "https://example.com/blueplanet"
    },
    {
      title: "Rural Education Project",
      organization: "Education For All",
      deadline: "January 15, 2026",
      category: "Non-profit",
      location: "Global",
      url: "https://example.com/educationforall"
    },
    {
      title: "Renewable Energy Challenge",
      organization: "Energy Future",
      deadline: "October 10, 2025",
      category: "Innovation",
      location: "Global",
      url: "https://example.com/energyfuture"
    },
    {
      title: "Clean Water Initiative",
      organization: "Water For Life",
      deadline: "April 10, 2025",
      category: "Non-profit",
      location: "Global",
      url: "https://example.com/waterforlife"
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

  // New component 1: Featured Initiatives - similar to Featured Programs in SEP-1300
  const betterUniverseInitiatives = [
    {
      id: 1,
      title: "GreenHarvest",
      category: "Eco-friendly",
      color: "bg-green-500",
      rating: 4.8,
      impact: 582,
      organization: "Sustainable Agriculture Network",
      description: "Revolutionary sustainable farming techniques that reduce water usage by 70% while increasing crop yields. This initiative combines hydroponics with AI-powered resource management to create highly efficient urban farming solutions. The technology has been implemented in 15 cities across 3 continents."
    },
    {
      id: 2,
      title: "OceanPure",
      category: "Eco-friendly",
      color: "bg-blue-500",
      rating: 4.7,
      impact: 356,
      organization: "Marine Conservation Institute",
      description: "Innovative ocean cleaning technology that removes microplastics while preserving marine life. Using advanced filtration systems that can distinguish between plastic particles and living organisms, OceanPure has successfully treated over 5 million gallons of ocean water, removing tons of plastic waste."
    },
    {
      id: 3,
      title: "SolarFlare",
      category: "Innovation",
      color: "bg-amber-500",
      rating: 4.6,
      impact: 412,
      organization: "Renewable Energy Pioneers",
      description: "Next-generation solar panels with 40% higher efficiency than current market leaders. The breakthrough technology uses multi-layered photovoltaic cells that can capture energy from a wider spectrum of light, working effectively even in low-light conditions and significantly reducing the cost per watt."
    },
    {
      id: 4,
      title: "EduAccess",
      category: "Non-profit",
      color: "bg-indigo-500",
      rating: 4.9,
      impact: 492,
      organization: "Global Education Foundation",
      description: "Free educational platform bringing quality learning to underprivileged communities worldwide. The initiative provides tablets preloaded with comprehensive curriculum materials, teacher training programs, and satellite internet connections to schools in remote areas, reaching over 50,000 students."
    },
    {
      id: 5,
      title: "MediReach",
      category: "Non-profit",
      color: "bg-red-500",
      rating: 4.5,
      impact: 275,
      organization: "Healthcare Without Borders",
      description: "Mobile medical clinics bringing essential healthcare to remote villages. Equipped with diagnostic tools, vaccines, and telemedicine capabilities, these solar-powered clinics travel to areas without medical facilities, providing preventive care and treatment for common illnesses."
    },
    {
      id: 6,
      title: "WasteZero",
      category: "Eco-friendly",
      color: "bg-emerald-500",
      rating: 4.4,
      impact: 328,
      organization: "Circular Economy Alliance",
      description: "Closed-loop manufacturing process that eliminates waste by 100% material recycling. This revolutionary approach transforms manufacturing waste into raw materials for new products, creating a truly circular production system that has been adopted by major manufacturers in the furniture industry."
    }
  ];

  // New component 2: Success Stories - similar to programs grid in SEP-1300
  const successStories = [
    {
      id: 1,
      title: "From Plastic Waste to Fashion Statement",
      excerpt: "How a young entrepreneur turned ocean plastic into a sustainable fashion line that's taking the industry by storm.",
      category: "Eco-friendly",
      image: "https://via.placeholder.com/300x200?text=Eco+Fashion",
      author: {
        name: "Maria Chen",
        role: "Environmental Entrepreneur"
      }
    },
    {
      id: 2,
      title: "AI That Predicts Crop Diseases",
      excerpt: "A team of agricultural engineers developed an AI system that can detect plant diseases weeks before visible symptoms appear.",
      category: "Innovation",
      image: "https://via.placeholder.com/300x200?text=AI+Agriculture",
      author: {
        name: "Dr. Kwame Nkrumah",
        role: "Agricultural Technologist"
      }
    },
    {
      id: 3,
      title: "Solar Power for Rural Schools",
      excerpt: "How a non-profit transformed education in remote villages by bringing reliable solar power to disconnected schools.",
      category: "Non-profit",
      image: "https://via.placeholder.com/300x200?text=Solar+Schools",
      author: {
        name: "Priya Sharma",
        role: "Education Advocate"
      }
    },
    {
      id: 4,
      title: "Clean Water Revolution",
      excerpt: "An innovative filtration system that turns polluted river water into safe drinking water using locally available materials.",
      category: "Eco-friendly",
      image: "https://via.placeholder.com/300x200?text=Water+Filtration",
      author: {
        name: "Carlos Rodriguez",
        role: "Water Engineer"
      }
    }
  ];

  const handleInitiativeClick = (initiative) => {
    setSelectedInitiative(initiative);
    setIsInitiativeModalOpen(true);
  };

  const filteredInitiatives = betterUniverseInitiatives.filter(initiative => 
    initiative.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    initiative.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    initiative.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section with Better Universe theme */}
        <section className="bg-gradient-to-r from-youth-purple to-purple-800 py-16 md:py-24">
          <div className="container mx-auto px-4 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="bg-white/10 text-white mb-4 border-white/30">Better Universe Initiative</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Frontliner</h1>
              <p className="text-xl md:text-2xl opacity-90 mb-6">
                Highlighting the best innovations, ideas, eco-friendly solutions, and non-profit organizations through powerful storytelling.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <Button className="bg-white text-youth-purple hover:bg-white/90">Submit Your Initiative</Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Explore Stories <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
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
                            Featured Stories
                          </Button>
                          <Button variant="link" size="sm" className="justify-start p-0">
                            Latest Innovations
                          </Button>
                          <Button variant="link" size="sm" className="justify-start p-0">
                            Success Stories
                          </Button>
                          <Button variant="link" size="sm" className="justify-start p-0">
                            Get Involved
                          </Button>
                        </div>
                        <Button className="mt-4 w-full bg-youth-purple hover:bg-youth-purple/90">
                          Browse {category.name}
                        </Button>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </section>

        {/* New Component 1: Featured Initiatives (similar to Featured Programs in SEP-1300) */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-8">
            <div>
              <Badge variant="outline" className="bg-youth-purple/10 text-youth-purple mb-2">Better Universe</Badge>
              <h2 className="text-2xl md:text-3xl font-bold">Featured Initiatives</h2>
              <p className="text-gray-600">Discover innovative solutions making a positive impact on our world</p>
            </div>
            <Button variant="outline" className="border-youth-purple text-youth-purple hidden md:flex">
              <RocketIcon className="mr-2 h-4 w-4" /> Submit Your Initiative
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredInitiatives.map(initiative => (
              <div key={initiative.id} className="rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className={`${initiative.color} h-36 relative p-5`}>
                  <div className="absolute top-2 right-2 bg-white rounded-full p-1">
                    <Bookmark className="h-4 w-4 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mt-16">{initiative.title}</h3>
                </div>
                <div className="p-4 bg-white">
                  <div className="flex items-center text-sm mb-2">
                    <div className="flex items-center mr-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < Math.floor(initiative.rating) ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                      <span className="ml-1 text-gray-500">{initiative.rating}</span>
                    </div>
                    <span className="text-gray-500">{initiative.impact}+ Impact</span>
                  </div>
                  <p className="text-sm font-medium text-gray-800 mb-1">{initiative.organization}</p>
                  <p className="text-xs text-gray-500 line-clamp-2 mb-3">{initiative.description}</p>
                  <div className="flex justify-between items-center pt-2">
                    <Button 
                      variant="outline" 
                      className="text-xs h-8 px-3 rounded-md border-gray-300"
                      onClick={() => handleInitiativeClick(initiative)}
                    >
                      Details
                    </Button>
                    <Button 
                      className="text-xs h-8 px-3 rounded-md bg-youth-purple hover:bg-youth-purple/90"
                    >
                      Support
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button className="bg-youth-purple hover:bg-youth-purple/90">View All Initiatives</Button>
          </div>
        </section>

        {/* Search Bar for Initiative Search */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Find Inspiring Stories</h2>
                <p className="text-gray-600">Search for innovations, eco-friendly solutions, and impactful non-profit initiatives</p>
              </div>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search initiatives, stories, and organizations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg"
                />
                <svg 
                  className="absolute left-3 top-3 h-5 w-5 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* New Component 2: Success Stories with Tabs (similar to Tabs in SEP-1300) */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <Badge variant="outline" className="bg-youth-purple/10 text-youth-purple mb-2">Success Stories</Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Better Universe Stories</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Inspiring narratives of innovation, sustainability, and social impact from around the world</p>
            </div>

            <Tabs defaultValue="innovations" value={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
              <TabsList className="w-full mb-8">
                <TabsTrigger value="innovations" className="flex-1 py-3">Innovations</TabsTrigger>
                <TabsTrigger value="eco-friendly" className="flex-1 py-3">Eco-Friendly</TabsTrigger>
                <TabsTrigger value="non-profit" className="flex-1 py-3">Non-Profit</TabsTrigger>
              </TabsList>

              <TabsContent value="innovations" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {successStories.filter(story => story.category === "Innovation").map((story) => (
                    <Card key={story.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={story.image} 
                          alt={story.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <Badge className="w-fit mb-2 bg-purple-100 text-purple-800 hover:bg-purple-200">
                          {story.category}
                        </Badge>
                        <CardTitle>{story.title}</CardTitle>
                        <CardDescription>{story.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center">
                          <div className="mr-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                              {story.author.name.charAt(0)}
                            </div>
                          </div>
                          <div>
                            <p className="font-medium text-sm">{story.author.name}</p>
                            <p className="text-xs text-gray-500">{story.author.role}</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full border-youth-purple text-youth-purple hover:bg-youth-purple/5">
                          Read Full Story
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="eco-friendly" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {successStories.filter(story => story.category === "Eco-friendly").map((story) => (
                    <Card key={story.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={story.image} 
                          alt={story.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <Badge className="w-fit mb-2 bg-green-100 text-green-800 hover:bg-green-200">
                          {story.category}
                        </Badge>
                        <CardTitle>{story.title}</CardTitle>
                        <CardDescription>{story.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center">
                          <div className="mr-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                              {story.author.name.charAt(0)}
                            </div>
                          </div>
                          <div>
                            <p className="font-medium text-sm">{story.author.name}</p>
                            <p className="text-xs text-gray-500">{story.author.role}</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full border-youth-purple text-youth-purple hover:bg-youth-purple/5">
                          Read Full Story
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="non-profit" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {successStories.filter(story => story.category === "Non-profit").map((story) => (
                    <Card key={story.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={story.image} 
                          alt={story.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <Badge className="w-fit mb-2 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
                          {story.category}
                        </Badge>
                        <CardTitle>{story.title}</CardTitle>
                        <CardDescription>{story.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center">
                          <div className="mr-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                              {story.author.name.charAt(0)}
                            </div>
                          </div>
                          <div>
                            <p className="font-medium text-sm">{story.author.name}</p>
                            <p className="text-xs text-gray-500">{story.author.role}</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full border-youth-purple text-youth-purple hover:bg-youth-purple/5">
                          Read Full Story
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Featured opportunities - keeping with Better Universe theme */}
        <section className="py-12 bg-gradient-to-r from-purple-50 to-indigo-50">
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
                    <TableHead>Initiative</TableHead>
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
                View All Opportunities
              </Button>
            </div>
          </div>
        </section>

        {/* Youth development platforms - keeping with updated theme */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Better Universe Platforms</h2>
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">Recognizing excellence in innovation, sustainability, and social impact</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-all bg-gradient-to-br from-white to-purple-50 border-youth-purple/10">
                  <CardHeader>
                    <CardTitle className="text-xl">{platform.name}</CardTitle>
                    <CardDescription>{platform.focus}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-gray-600">{platform.description}</p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="w-full border-youth-purple text-youth-purple hover:bg-youth-purple/5">
                          Learn More
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Coming Soon!</DialogTitle>
                          <DialogDescription>
                            Thank you for your interest! Exciting details about this platform will be available soon. 🚀
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
      </main>

      {/* Initiative Detail Modal */}
      {selectedInitiative && (
        <Dialog open={isInitiativeModalOpen} onOpenChange={setIsInitiativeModalOpen}>
          <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
            <DialogHeader className="space-y-3">
              <Badge className={`w-fit bg-${selectedInitiative.color.replace('bg-', '')}/20 text-${selectedInitiative.color.replace('bg-', '')}-800`}>
                {selectedInitiative.category}
              </Badge>
              <DialogTitle className="text-2xl">{selectedInitiative.title}</DialogTitle>
              <DialogDescription>
                <span className="font-medium">{selectedInitiative.organization}</span>
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6 py-4">
              <div>
                <h4 className="font-semibold text-lg mb-2">About the Initiative:</h4>
                <div className="text-gray-700 space-y-3">
                  {selectedInitiative.description.split('\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">Impact:</h4>
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="text-3xl font-bold text-youth-purple">{selectedInitiative.impact}+</div>
                    <div className="text-sm text-gray-500">Lives Impacted</div>
                  </div>
                  <div className="mr-4">
                    <div className="text-3xl font-bold text-youth-purple">{selectedInitiative.rating}</div>
                    <div className="text-sm text-gray-500">Rating</div>
                  </div>
                </div>
              </div>
            </div>
            
            <DialogFooter className="flex flex-wrap gap-3">
              <Button 
                className="gap-2 bg-youth-purple hover:bg-youth-purple/90"
              >
                Support This Initiative <ExternalLink className="h-4 w-4" />
              </Button>
              
              <Button 
                variant="outline" 
                className="gap-2 border-youth-purple text-youth-purple hover:bg-youth-purple/5"
              >
                Learn More <ExternalLink className="h-4 w-4" />
              </Button>
              
              <Button variant="secondary" onClick={() => setIsInitiativeModalOpen(false)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      <Footer />
    </div>
  );
};

export default Frontliner;
