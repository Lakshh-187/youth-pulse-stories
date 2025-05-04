
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Heart, BookOpen, GraduationCap, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TalentHunterAI from '@/components/who-stops-you/TalentHunterAI';
import QuestionBasedCards from '@/components/who-stops-you/QuestionBasedCards';
import ProgramsCategory from '@/components/who-stops-you/ProgramsCategory';

const WhoStopsYou = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-youth-purple/90 to-youth-blue/90 text-white py-16 md:py-24">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-youth-purple/20 to-youth-blue/20 mix-blend-overlay"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">Game Changing Initiative</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Who Stops You?</h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                A non-profit social welfare campaign connecting students with free opportunities, resources, and support that are otherwise paid.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://forms.gle/iSYUkMPUifoBbgRRA" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-white text-youth-purple hover:bg-white/90">
                    Submit Your Pitch <ArrowRight className="ml-2" />
                  </Button>
                </a>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" 
                  onClick={() => window.open("https://forms.gle/iSYUkMPUifoBbgRRA", "_blank", "noopener,noreferrer")}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* Episode-7, Submit Query and SEP-700 */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <a href="https://www.youtube.com/channel/UCXv-u5c0Kq8u0n_tE65G_oA" target="_blank" rel="noopener noreferrer">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-bold">Watch Episode-7</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Catch up on our latest episode featuring inspiring stories and invaluable insights.
                    </p>
                  </CardContent>
                  <Button>Click Here</Button>
                </Card>
              </a>
              <a href="https://forms.gle/iSYUkMPUifoBbgRRA" target="_blank" rel="noopener noreferrer">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-bold">Submit Your Query</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Got questions? Need assistance? Submit your queries here and we'll get back to you.
                    </p>
                  </CardContent>
                  <Button>Click Here</Button>
                </Card>
              </a>
              <Link to="/SEP700">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-bold">Explore SEP-700</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Dive into our SEP-700 initiative and discover how it transforms student experiences.</p>
                </CardContent>
                <Button>Click Here</Button>
              </Card>
              </Link>
            </div>

          </div>

        </section>

        {/* Mission and Vision */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    To save millions of potentials that drain because of high fees, lack of awareness, and limited opportunities. We connect deserving students with free resources that others charge for.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Why pay fees if it's free? We believe in creating a world where access to opportunities isn't limited by financial constraints but is determined by potential and passion.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Question-Based Cards Section */}
        <QuestionBasedCards />

        {/* Programs Category Section */}
        <ProgramsCategory />

        {/* How It Works - Journey */}
        <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">THE PROCESS</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-youth-purple">How WSY? Works</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                A simple four-step process that connects students with life-changing opportunities and resources.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="relative">
                <div className="absolute -left-4 -top-4 bg-youth-purple text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">1</div>
                <Card className="h-full bg-youth-purple text-white">
                  <CardHeader>
                    <CardTitle>Submit Your Pitch</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Share your needs, achievements, or ideas through our simple submission form.</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="relative">
                <div className="absolute -left-4 -top-4 bg-purple-200 text-youth-purple w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">2</div>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Expert Evaluation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Your pitch is evaluated by AI and industry experts from our council.</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="relative">
                <div className="absolute -left-4 -top-4 bg-purple-200 text-youth-purple w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">3</div>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Opportunity Matching</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Get connected to relevant opportunities, resources, and platforms.</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="relative">
                <div className="absolute -left-4 -top-4 bg-purple-200 text-youth-purple w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">4</div>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Real-World Impact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Transform your academic journey with tangible results and recognition.</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="text-center">
              <a href="https://forms.gle/iSYUkMPUifoBbgRRA" target="_blank" rel="noopener noreferrer">
                <Button variant="default" size="lg">
                  Start Your Journey Now <ArrowRight className="ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Talent Hunter AI Section */}
        <TalentHunterAI />

        {/* Why This Initiative Is a Game Changer */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why This Initiative Is a Game Changer</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're revolutionizing how students access opportunities and resources.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="h-6 w-6 text-red-500 mr-2" />
                    No Application Fees
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Students get practical exposure & opportunities without any application, registration, or training fees.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-6 w-6 text-youth-blue mr-2" />
                    Saving Potential
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    By connecting deserving students with opportunities, we save millions of youths' potential from being wasted.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="h-6 w-6 text-youth-purple mr-2" />
                    Breaking Barriers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    74% of students never find their passion due to lack of awareness, connectivity & high fees. We're changing that.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Scenarios Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Real-World Scenarios We're Addressing</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Let's explore some common problems that students face and how our initiative provides solutions.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <Card className="bg-white shadow-md border-l-4 border-l-red-400">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">The Freshers' Dilemma</h3>
                  <p className="text-gray-600">
                    Due to lack of awareness and business vendor marketing, 80% of freshers pay for internships, mentorship, and learning resources. Many consider this the only way forward, resulting in limited practical exposure.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md border-l-4 border-l-amber-400">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">The Skilled but Overlooked</h3>
                  <p className="text-gray-600">
                    57% of students with practical skills and true potential face rejection during resume shortlisting due to filters like DSA and aptitude tests. They never get a chance to showcase their practical talents.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md border-l-4 border-l-blue-400">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">The Misguided Journey</h3>
                  <p className="text-gray-600">
                    43% of students waste 3-4 years because they are unaware of the reality, lack a clear roadmap, learn irrelevant skills, have no practical exposure or guidance, and live in an illusion about career paths.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get answers to common questions about our initiative.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Why is this initiative revolutionary?</AccordionTrigger>
                  <AccordionContent>
                    Lakhs of students are paying for every opportunity, resource & platform and complaining about lack of support & opportunity. This initiative focuses on connecting & guiding students with worldwide opportunities without fees or hurdles.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I get an internship, even as a fresher?</AccordionTrigger>
                  <AccordionContent>
                    There are many programs worldwide that provide internships along with resources. For example, Nestle is known as a product company, but they also have different programs for students like the "Young Entrepreneurship Program". We connect you to such opportunities.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What is the "We Back You" Program?</AccordionTrigger>
                  <AccordionContent>
                    If you worry about resources, opportunities, internships, or any education-related difficulty, this program ensures you get support. As a student facing challenges, we back you through our network and resources.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Is there any fee or anything required in return for these benefits?</AccordionTrigger>
                  <AccordionContent>
                    This is a non-profit initiative and we do this as social welfare. There is no fee, but if you find value or benefits from our program, you can give us a "Letter of Appreciation" to help us continue our work.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>How do I connect with the "Help Desk" and share my queries?</AccordionTrigger>
                  <AccordionContent>
                    You can DM us on social platforms like LinkedIn or Instagram, or you can connect with us via email. Alternatively, you can fill out our Google form, and we'll connect with you within 3 working days.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>What categories and fields do you help with?</AccordionTrigger>
                  <AccordionContent>
                    From resources to job referrals, internships to grants, certifications to international platforms—we help with all student & career-centric needs. Our assistance covers a wide range of educational and professional development areas.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-youth-purple to-youth-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Unlock Your Potential?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Don't let financial barriers stop you from achieving your dreams. Join our community today and access opportunities that were previously out of reach.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://forms.gle/iSYUkMPUifoBbgRRA" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-youth-purple hover:bg-white/90">
                  Submit Your Pitch <ArrowRight className="ml-2" />
                </Button>
              </a>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10"
                onClick={() => window.open("https://forms.gle/iSYUkMPUifoBbgRRA", "_blank", "noopener,noreferrer")}
              >
                Explore Opportunities
              </Button>
            </div>
          </div>
        </section>

        {/* We Are Building For Nation Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">We Are Building For The Nation, For Youths</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                By connecting students with opportunities they deserve, we're helping build a stronger nation with empowered youth who can realize their full potential.
              </p>
              <div>
                <Link to="/campaign-leaders">
                  <Button variant="outline" size="lg" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Meet Our Campaign Leaders
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default WhoStopsYou;
