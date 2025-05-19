
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategorySection from '@/components/CategorySection';
import BlogSection from '@/components/BlogSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import { storiesData } from '@/data/storiesData';
import { 
  Award, 
  GraduationCap, 
  HelpCircle, 
  FileText, 
  BookOpen, 
  Globe, 
  TrendingUp, 
  Users, 
  RocketIcon,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const FeatureCard = ({ title, description, icon, link, badge }) => {
  return (
    <Card className="h-full transition-all hover:shadow-lg hover:border-youth-purple/40">
      <CardHeader className="p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="bg-youth-purple/10 p-2 rounded-full">
              {icon}
            </div>
            <CardTitle className="text-xl">{title}</CardTitle>
          </div>
          {badge && <Badge variant="outline" className="bg-youth-purple/5">{badge}</Badge>}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="outline" className="w-full border-youth-purple text-youth-purple hover:bg-youth-purple/5">
          <Link to={link} className="flex items-center justify-between">
            <span>Explore</span> 
            <ArrowRight size={16} />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const PlatformSection = ({ title, subtitle, platforms }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <FeatureCard
              key={index}
              title={platform.title}
              description={platform.description}
              icon={platform.icon}
              link={platform.link}
              badge={platform.badge}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const BetterUniverseSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-youth-purple/5 to-youth-blue/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <Badge variant="outline" className="bg-youth-purple/10 text-youth-purple mb-3">Innovation Spotlight</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Better Universe Initiatives</h2>
            <p className="text-gray-700 mb-6">
              We highlight the best innovations, ideas, initiatives, eco-friendly solutions, 
              and non-profit organizations through powerful storytelling and publishing.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-youth-purple/10 p-1 rounded-full mt-1">
                  <Award className="h-4 w-4 text-youth-purple" />
                </div>
                <div>
                  <h4 className="font-semibold">Best Innovations</h4>
                  <p className="text-sm text-gray-600">Celebrating breakthrough technologies and solutions.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-youth-purple/10 p-1 rounded-full mt-1">
                  <TrendingUp className="h-4 w-4 text-youth-purple" />
                </div>
                <div>
                  <h4 className="font-semibold">Impactful Ideas</h4>
                  <p className="text-sm text-gray-600">Showcasing concepts that can transform communities.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-youth-purple/10 p-1 rounded-full mt-1">
                  <Globe className="h-4 w-4 text-youth-purple" />
                </div>
                <div>
                  <h4 className="font-semibold">Eco-friendly Solutions</h4>
                  <p className="text-sm text-gray-600">Promoting sustainability and environmental consciousness.</p>
                </div>
              </div>
            </div>
            <Button asChild className="mt-6 bg-youth-purple hover:bg-youth-purple/90">
              <Link to="/execution-plan">Learn More</Link>
            </Button>
          </div>
          <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <BookOpen className="mr-2 h-5 w-5 text-youth-purple" />
              Featured Stories
            </h3>
            <div className="space-y-4">
              {storiesData.innovations?.slice(0, 3).map((story, index) => (
                <div key={index} className="flex gap-4 items-start border-b border-gray-100 pb-4">
                  <div className="bg-gray-100 rounded-lg h-16 w-16 flex-shrink-0 overflow-hidden">
                    <img 
                      src={story.image || "https://via.placeholder.com/150"} 
                      alt={story.title} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{story.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">{story.excerpt?.substring(0, 60)}...</p>
                  </div>
                </div>
              ))}
            </div>
            <Button asChild variant="link" className="mt-2 text-youth-purple p-0">
              <Link to="/better-universe" className="flex items-center">
                View All Stories <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const WSYSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2 order-2 md:order-1 bg-gray-50 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <HelpCircle className="mr-2 h-5 w-5 text-youth-purple" />
              Common Queries
            </h3>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg border border-gray-100">
                <h4 className="font-medium text-sm">How do I apply for international scholarships?</h4>
                <p className="text-xs text-gray-600 mt-1">Get step-by-step guidance on international scholarship applications.</p>
                <Button variant="ghost" size="sm" className="mt-1 h-7 text-youth-purple p-0">View answer</Button>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100">
                <h4 className="font-medium text-sm">What career paths suit my skill set?</h4>
                <p className="text-xs text-gray-600 mt-1">Discover career options aligned with your unique abilities and interests.</p>
                <Button variant="ghost" size="sm" className="mt-1 h-7 text-youth-purple p-0">View answer</Button>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100">
                <h4 className="font-medium text-sm">How can I get industry experience while studying?</h4>
                <p className="text-xs text-gray-600 mt-1">Learn about internship opportunities and industry connections.</p>
                <Button variant="ghost" size="sm" className="mt-1 h-7 text-youth-purple p-0">View answer</Button>
              </div>
            </div>
            <Button asChild variant="link" className="mt-4 text-youth-purple p-0">
              <Link to="/who-stops-you" className="flex items-center">
                View All Queries <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <Badge variant="outline" className="bg-youth-blue/10 text-youth-blue mb-3">Help & Support</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Stops You? (WSY)</h2>
            <p className="text-gray-700 mb-6">
              Our dedicated help desk solves queries and connects you with opportunities. 
              Don't let anything hold you back from achieving your dreams and goals.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-youth-blue/10 p-1 rounded-full mt-1">
                  <HelpCircle className="h-4 w-4 text-youth-blue" />
                </div>
                <div>
                  <h4 className="font-semibold">Personalized Support</h4>
                  <p className="text-sm text-gray-600">Get answers tailored to your specific situation.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-youth-blue/10 p-1 rounded-full mt-1">
                  <Users className="h-4 w-4 text-youth-blue" />
                </div>
                <div>
                  <h4 className="font-semibold">Community Connection</h4>
                  <p className="text-sm text-gray-600">Join a network of like-minded individuals and mentors.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-youth-blue/10 p-1 rounded-full mt-1">
                  <RocketIcon className="h-4 w-4 text-youth-blue" />
                </div>
                <div>
                  <h4 className="font-semibold">Opportunity Matching</h4>
                  <p className="text-sm text-gray-600">Get connected with opportunities that match your profile.</p>
                </div>
              </div>
            </div>
            <Button asChild className="mt-6 bg-youth-blue hover:bg-youth-blue/90">
              <Link to="/who-stops-you">Ask Your Question</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExecutionPlanSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <Badge variant="outline" className="bg-youth-purple/10 text-youth-purple mb-3 mx-auto">Our Roadmap</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Execution Plan & Milestones</h2>
        <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
          Discover our strategic roadmap to transform educational institutions to international 
          standards through comprehensive backing and innovative implementation.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md text-left">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-youth-purple/10 mb-4 mx-auto">
              <Users className="h-6 w-6 text-youth-purple" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">1000+</h3>
            <h4 className="text-sm font-medium text-center mb-4">Scholars</h4>
            <Separator className="my-4" />
            <p className="text-sm text-gray-600">
              Empowering over a thousand scholars with standardized education, 
              transformative experiences, and global opportunities.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-left">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-youth-blue/10 mb-4 mx-auto">
              <GraduationCap className="h-6 w-6 text-youth-blue" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">50+</h3>
            <h4 className="text-sm font-medium text-center mb-4">Institutes</h4>
            <Separator className="my-4" />
            <p className="text-sm text-gray-600">
              Partnering with educational institutions to elevate their standards
              and provide comprehensive backing for growth.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-left">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-youth-orange/10 mb-4 mx-auto">
              <FileText className="h-6 w-6 text-youth-orange" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">1430+</h3>
            <h4 className="text-sm font-medium text-center mb-4">Episodes</h4>
            <Separator className="my-4" />
            <p className="text-sm text-gray-600">
              Creating impactful content through Better Universe (130) and 
              WSY episodes (1300) to educate and inspire.
            </p>
          </div>
        </div>
        
        <Button asChild className="mt-12 bg-gradient-to-r from-youth-purple to-youth-blue text-white hover:opacity-90">
          <Link to="/execution-plan">View Detailed Roadmap</Link>
        </Button>
      </div>
    </section>
  );
};

const Index = () => {
  // Platform data for the main features and portals
  const platforms = [
    {
      title: "Frontliner",
      description: "Discover global opportunities, platforms, and programs designed for youth development and empowerment.",
      icon: <Globe className="h-6 w-6 text-youth-purple" />,
      link: "/frontliner",
      badge: "Opportunities"
    },
    {
      title: "SEP-700",
      description: "The Student Exchange Program connecting students to 700+ partner universities worldwide.",
      icon: <GraduationCap className="h-6 w-6 text-youth-purple" />,
      link: "/sep-700",
      badge: "Exchange"
    },
    {
      title: "SEP-1300",
      description: "Access to 1300+ scholarships, grants, and educational funding opportunities globally.",
      icon: <Award className="h-6 w-6 text-youth-purple" />,
      link: "/sep-1300",
      badge: "Scholarships"
    },
    {
      title: "Top 1%",
      description: "Exclusive program for high-achievers to connect with elite opportunities and mentorship.",
      icon: <TrendingUp className="h-6 w-6 text-youth-purple" />,
      link: "/top-one-percent",
      badge: "Premium"
    },
    {
      title: "Youth Leadership Corps",
      description: "Building the next generation of leaders through specialized training and real-world experiences.",
      icon: <Users className="h-6 w-6 text-youth-purple" />,
      link: "/ylc",
      badge: "Leadership"
    },
    {
      title: "Stanburg Award",
      description: "Prestigious recognition for exceptional achievements in innovation and community impact.",
      icon: <Award className="h-6 w-6 text-youth-purple" />,
      link: "/stanburg-award",
      badge: "Recognition"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Platforms Section */}
        <PlatformSection 
          title="Our Platforms & Programs" 
          subtitle="Explore our comprehensive suite of platforms designed to empower youth and transform education"
          platforms={platforms}
        />
        
        {/* Better Universe Section */}
        <BetterUniverseSection />
        
        {/* WSY Section */}
        <WSYSection />
        
        {/* Execution Plan Summary Section */}
        <ExecutionPlanSection />
        
        
        <div className="bg-gray-50 py-8">
          <CategorySection 
            title="Technology" 
            categorySlug="worldwide"
            stories={storiesData.worldwide || []}
          />
        </div>
        
        <CategorySection 
          title="Innovations" 
          categorySlug="innovations"
          stories={storiesData.innovations || []}
        />
        
        <BlogSection />
        
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
