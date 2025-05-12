
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ChevronDown, ChevronRight, Download, Globe, Trophy, Award, Clock, Users, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

// Define award types
interface AwardCategory {
  id: string;
  name: string;
  description: string;
}

interface Awardee {
  id: string;
  name: string;
  country: string;
  project: string;
  quote: string;
  image: string;
  category: string; // '18U18' or '20U20'
  year: number;
}

const StanburgAward = () => {
  const [isApplyDialogOpen, setIsApplyDialogOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Award categories
  const categories: AwardCategory[] = [
    {
      id: '18u18',
      name: '18 Under 18 (18U18)',
      description: 'For extraordinary change-makers under the age of 18 who have demonstrated exceptional innovation and impact.'
    },
    {
      id: '20u20',
      name: '20 Under 20 (20U20)',
      description: 'For young innovators aged 18-20 who have created solutions with measurable social impact.'
    }
  ];

  // Past awardees data
  const pastAwardees: Awardee[] = [
    {
      id: '1',
      name: 'Aisha Patel',
      country: 'India',
      project: 'Solar Water Purifier',
      quote: 'Innovation doesn\'t require massive resources, just massive determination.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80',
      category: '18U18',
      year: 2024,
    },
    {
      id: '2',
      name: 'Carlos Rodriguez',
      country: 'Mexico',
      project: 'EdTech for Rural Schools',
      quote: 'When education meets technology, no child is left behind.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=500&q=80',
      category: '20U20',
      year: 2024,
    },
    {
      id: '3',
      name: 'Emma Watson',
      country: 'United Kingdom',
      project: 'Plastic Waste Recycling',
      quote: 'The future of our oceans depends on the actions we take today.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=80',
      category: '18U18',
      year: 2023,
    },
    {
      id: '4',
      name: 'Jamal Henderson',
      country: 'South Africa',
      project: 'Community Garden Initiative',
      quote: 'Growing food is growing hope in communities that need it most.',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=500&q=80',
      category: '20U20',
      year: 2023,
    },
  ];

  // FAQ data
  const faqs = [
    {
      id: 'faq1',
      question: 'How do I apply for the Stanburg Award?',
      answer: 'You can apply through our Pitchburg platform or by submitting a direct profile screening form. Both options are available through the "Apply Now" buttons on this page.'
    },
    {
      id: 'faq2',
      question: 'What are the eligibility criteria?',
      answer: 'For 18U18: Applicants must be under 18 years of age and have implemented a project with measurable impact. For 20U20: Applicants must be between 18-20 years and have an ongoing innovation or social impact project.'
    },
    {
      id: 'faq3',
      question: 'Can I apply from any country?',
      answer: 'Yes, the Stanburg Award is open to young innovators and change-makers from all countries worldwide. We believe talent has no geographical boundaries.'
    },
    {
      id: 'faq4',
      question: 'What documents do I need to submit?',
      answer: 'You\'ll need to provide your basic information, a portfolio or project link, a brief description of your project impact, and optionally a video pitch or presentation.'
    },
    {
      id: 'faq5',
      question: 'When will results be announced?',
      answer: 'Results are typically announced within 8-10 weeks after application submission closes. All applicants will be notified via email, and winners will be featured on our official platforms.'
    }
  ];

  const onSubmit = (data: any) => {
    console.log(data);
    setIsApplyDialogOpen(false);
    // Here you would typically send the form data to your backend
  };

  const toggleFaq = (id: string) => {
    if (expandedFaq === id) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(id);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <img 
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1920&q=80" 
            alt="Young changemakers"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 py-24 relative z-10 flex flex-col items-center text-center">
          <div className="mb-8 flex flex-col items-center">
            <Trophy className="h-16 w-16 mb-6 text-yellow-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Stanburg Award</h1>
            <p className="text-xl md:text-2xl max-w-3xl">
              World's Most Precious Youth Award for Innovation & Social Change
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button size="lg" className="bg-youth-purple hover:bg-purple-700">
              Apply via Pitchburg
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/20 border-white hover:bg-white/30"
              onClick={() => setIsApplyDialogOpen(true)}
            >
              Direct Profile Screening
            </Button>
          </div>
          
          <div className="mt-16">
            <p className="text-sm uppercase tracking-wider mb-4">Recognized by</p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                <div className="w-24 h-12 bg-white/70"></div>
              </div>
              <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                <div className="w-24 h-12 bg-white/70"></div>
              </div>
              <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                <div className="w-24 h-12 bg-white/70"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Award Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About the Stanburg Award</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Recognizing extraordinary young individuals creating real-world impact through innovation and social change.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {categories.map((category) => (
              <Card key={category.id} className="border-2 border-gray-200 hover:border-youth-purple transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl text-youth-purple">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-8">Award Benefits</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                { icon: Trophy, label: "International recognition" },
                { icon: FileCheck, label: "Digital & printed certificate" },
                { icon: Users, label: "Mentorship from Uniford" },
                { icon: Globe, label: "Featured media spotlight" },
                { icon: Award, label: "Global badge on Pitchburg" }
              ].map((benefit, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="bg-purple-100 p-4 rounded-full mb-4">
                    <benefit.icon className="h-6 w-6 text-youth-purple" />
                  </div>
                  <p className="text-sm font-medium">{benefit.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Eligibility & Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Follow these steps to apply for the Stanburg Award and get recognized for your impactful work.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-gray-200"></div>
            
            {/* Timeline steps */}
            {[
              { title: "Choose a category", description: "Select between 18U18 or 20U20 based on your age." },
              { title: "Apply", description: "Submit via Pitchburg or direct profile screening form." },
              { title: "Share your impact", description: "Submit your project details and the impact it has created." },
              { title: "Evaluation", description: "Expert jury evaluates all submissions against our criteria." },
              { title: "Virtual Round", description: "Shortlisted candidates attend a virtual interaction session." },
              { title: "Results", description: "Winners announced on Uniford platforms and receive their benefits." }
            ].map((step, idx) => (
              <div key={idx} className="relative flex items-start mb-12 md:mb-16">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full bg-youth-purple text-white absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10`}>
                  {idx + 1}
                </div>
                
                <div className={`ml-16 md:ml-0 ${idx % 2 === 0 ? 'md:pr-12 md:text-right md:mr-1/2' : 'md:pl-12 md:ml-1/2'}`}>
                  <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <Button variant="outline" className="border-youth-purple text-youth-purple hover:bg-purple-50">
              View Eligibility
            </Button>
            <Button variant="outline" className="border-youth-purple text-youth-purple hover:bg-purple-50">
              Submit Portfolio
            </Button>
            <Button variant="outline" className="border-youth-purple text-youth-purple hover:bg-purple-50">
              Learn about Pitchburg
            </Button>
          </div>
        </div>
      </section>

      {/* Pitchburg Component */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gradient-to-br from-youth-purple to-blue-600 p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Pitchburg Platform</h2>
                <p className="mb-6">
                  Use Pitchburg to showcase your innovation, apply for internships, receive feedback & gain visibility.
                </p>
                <Button className="bg-white text-youth-purple hover:bg-gray-100">
                  Launch Pitchburg Platform
                </Button>
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-xl font-semibold mb-4">Why use Pitchburg?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-youth-purple shrink-0 mt-0.5" />
                    <span className="ml-2">Create a digital portfolio that stands out</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-youth-purple shrink-0 mt-0.5" />
                    <span className="ml-2">Connect with mentors and industry experts</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-youth-purple shrink-0 mt-0.5" />
                    <span className="ml-2">Get discovered by universities and employers</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-youth-purple shrink-0 mt-0.5" />
                    <span className="ml-2">Apply seamlessly to other Uniford opportunities</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <p className="text-sm text-gray-500">
                    Visit <a href="https://pitchburg.uniford.org" className="text-blue-600 hover:underline">www.pitchburg.uniford.org</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Awardees Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Past Awardees</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the exceptional young innovators who have been recognized with the Stanburg Award.
            </p>
          </div>

          <Tabs defaultValue="all" className="max-w-4xl mx-auto">
            <TabsList className="mb-8 flex justify-center">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="18u18">18 Under 18</TabsTrigger>
              <TabsTrigger value="20u20">20 Under 20</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="grid md:grid-cols-2 gap-8">
                {pastAwardees.map(awardee => (
                  <Card key={awardee.id} className="overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-2/5">
                        <img 
                          src={awardee.image} 
                          alt={awardee.name} 
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-3/5 p-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-xs font-bold px-2 py-1 rounded ${
                            awardee.category === '18U18' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                          }`}>
                            {awardee.category}
                          </span>
                          <span className="text-xs text-gray-500">{awardee.year}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-1">{awardee.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">{awardee.country}</p>
                        <h4 className="font-medium text-youth-purple mb-2">{awardee.project}</h4>
                        <p className="text-sm italic mb-4">"{awardee.quote}"</p>
                        <Button variant="outline" size="sm" className="text-xs">
                          <Download className="h-3 w-3 mr-1" /> Impact Report
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="18u18">
              <div className="grid md:grid-cols-2 gap-8">
                {pastAwardees.filter(a => a.category === '18U18').map(awardee => (
                  <Card key={awardee.id} className="overflow-hidden">
                    {/* Same card content as above */}
                    <div className="md:flex">
                      <div className="md:w-2/5">
                        <img 
                          src={awardee.image} 
                          alt={awardee.name} 
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-3/5 p-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold px-2 py-1 rounded bg-blue-100 text-blue-800">
                            {awardee.category}
                          </span>
                          <span className="text-xs text-gray-500">{awardee.year}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-1">{awardee.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">{awardee.country}</p>
                        <h4 className="font-medium text-youth-purple mb-2">{awardee.project}</h4>
                        <p className="text-sm italic mb-4">"{awardee.quote}"</p>
                        <Button variant="outline" size="sm" className="text-xs">
                          <Download className="h-3 w-3 mr-1" /> Impact Report
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="20u20">
              <div className="grid md:grid-cols-2 gap-8">
                {pastAwardees.filter(a => a.category === '20U20').map(awardee => (
                  <Card key={awardee.id} className="overflow-hidden">
                    {/* Same card content as above */}
                    <div className="md:flex">
                      <div className="md:w-2/5">
                        <img 
                          src={awardee.image} 
                          alt={awardee.name} 
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-3/5 p-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold px-2 py-1 rounded bg-purple-100 text-purple-800">
                            {awardee.category}
                          </span>
                          <span className="text-xs text-gray-500">{awardee.year}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-1">{awardee.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">{awardee.country}</p>
                        <h4 className="font-medium text-youth-purple mb-2">{awardee.project}</h4>
                        <p className="text-sm italic mb-4">"{awardee.quote}"</p>
                        <Button variant="outline" size="sm" className="text-xs">
                          <Download className="h-3 w-3 mr-1" /> Impact Report
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about the Stanburg Award application process.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq) => (
              <Collapsible 
                key={faq.id} 
                open={expandedFaq === faq.id}
                onOpenChange={() => toggleFaq(faq.id)}
                className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
              >
                <CollapsibleTrigger className="w-full p-4 flex justify-between items-center bg-white hover:bg-gray-50">
                  <h3 className="text-lg font-medium text-left">{faq.question}</h3>
                  {expandedFaq === faq.id ? (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-500" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-gray-50 text-gray-700">
                  {faq.answer}
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> Email Support
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Clock className="h-4 w-4" /> Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Apply Now Dialog */}
      <Dialog open={isApplyDialogOpen} onOpenChange={setIsApplyDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Apply for Stanburg Award</DialogTitle>
            <DialogDescription>
              Fill out this form to submit your direct profile screening application.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" {...register("fullName", { required: true })} />
              {errors.fullName && <p className="text-sm text-red-500">Name is required</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" {...register("email", { required: true })} />
              {errors.email && <p className="text-sm text-red-500">Email is required</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input id="age" type="number" {...register("age", { required: true, min: 10, max: 20 })} />
              {errors.age && <p className="text-sm text-red-500">Valid age between 10-20 is required</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Input id="country" {...register("country", { required: true })} />
              {errors.country && <p className="text-sm text-red-500">Country is required</p>}
            </div>
            
            <div className="space-y-2">
              <Label>Category</Label>
              <RadioGroup defaultValue="18u18">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="18u18" id="18u18" />
                  <Label htmlFor="18u18">18 Under 18</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="20u20" id="20u20" />
                  <Label htmlFor="20u20">20 Under 20</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="portfolio">Portfolio/Website Link</Label>
              <Input id="portfolio" placeholder="https://" {...register("portfolio")} />
              <p className="text-xs text-gray-500">
                <a href="#" className="text-blue-600 hover:underline">How to create a portfolio</a>
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="projectDesc">Project Description</Label>
              <Textarea id="projectDesc" {...register("projectDesc", { required: true })} />
              {errors.projectDesc && <p className="text-sm text-red-500">Project description is required</p>}
            </div>
            
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsApplyDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Submit Application</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      
      {/* SEO Hidden Footer */}
      <div style={{ display: "none" }}>
        Stanburg Award by Uniford Foundation is the world's leading youth recognition platform for innovators and changemakers. 
        Explore and apply via Pitchburg at www.pitchburg.uniford.org. 
        Tags: #StanburgAward #Uniford #YouthInnovation #Under18 #Under20 #ChangeMakers
      </div>
      
      <Footer />
    </div>
  );
};

export default StanburgAward;
