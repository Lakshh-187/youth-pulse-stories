
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  DollarSign, 
  FileText, 
  Users,
  Lightbulb,
  ExternalLink
} from "lucide-react";

const ProgramsCategory = () => {
  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Two Categories of Pitch</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We support students through two main paths: Problem-Solving Pitches and Potential Pitches.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="problem-solving">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-8">
              <TabsTrigger value="problem-solving">
                Problem-Solving Pitch
              </TabsTrigger>
              <TabsTrigger value="potential">
                Potential Pitch
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="problem-solving">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-all">
                  <CardHeader className="pb-2">
                    <div className="flex items-center mb-2">
                      <GraduationCap className="h-6 w-6 text-youth-purple mr-2" />
                      <Badge>Mentorship</Badge>
                    </div>
                    <CardTitle className="text-lg">I need a mentor for placements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Connects you with industry mentors via Uni-Talks, IEP, CFA, and UIRAD programs.
                    </p>
                    <a href="https://forms.gle/iSYUkMPUifoBbgRRA" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="w-full">Connect Now</Button>
                    </a>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all">
                  <CardHeader className="pb-2">
                    <div className="flex items-center mb-2">
                      <Briefcase className="h-6 w-6 text-youth-blue mr-2" />
                      <Badge>Internship</Badge>
                    </div>
                    <CardTitle className="text-lg">I'm struggling to find an internship</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Get direct internship referrals from partnered organizations.
                    </p>
                    <a href="https://forms.gle/iSYUkMPUifoBbgRRA" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="w-full">Apply Now</Button>
                    </a>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all">
                  <CardHeader className="pb-2">
                    <div className="flex items-center mb-2">
                      <FileText className="h-6 w-6 text-youth-orange mr-2" />
                      <Badge>Documentation</Badge>
                    </div>
                    <CardTitle className="text-lg">I need a Letter of Recommendation (LOR)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Get a verified UNSR-backed LOR based on your work.
                    </p>
                    <a href="https://forms.gle/iSYUkMPUifoBbgRRA" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="w-full">Request LOR</Button>
                    </a>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all">
                  <CardHeader className="pb-2">
                    <div className="flex items-center mb-2">
                      <DollarSign className="h-6 w-6 text-green-500 mr-2" />
                      <Badge>Funding</Badge>
                    </div>
                    <CardTitle className="text-lg">I need financial support or grants</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Gain access to startup grants, social welfare funds, and innovation scholarships.
                    </p>
                    <a href="https://forms.gle/iSYUkMPUifoBbgRRA" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="w-full">Explore Funding</Button>
                    </a>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all">
                  <CardHeader className="pb-2">
                    <div className="flex items-center mb-2">
                      <Award className="h-6 w-6 text-amber-500 mr-2" />
                      <Badge>Recognition</Badge>
                    </div>
                    <CardTitle className="text-lg">I want to get published or featured</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Get your articles, research, or achievements published in top magazines and platforms.
                    </p>
                    <a href="https://forms.gle/iSYUkMPUifoBbgRRA" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="w-full">Submit Work</Button>
                    </a>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all">
                  <CardHeader className="pb-2">
                    <div className="flex items-center mb-2">
                      <Users className="h-6 w-6 text-indigo-500 mr-2" />
                      <Badge>Networking</Badge>
                    </div>
                    <CardTitle className="text-lg">I want to build my network & get referrals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Connect with companies, hiring managers, and referral networks.
                    </p>
                    <a href="https://forms.gle/iSYUkMPUifoBbgRRA" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="w-full">Join Network</Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
              <div className="text-center mt-8 text-gray-500 italic">
                And many more problem-solving pitches to help you overcome obstacles in your educational journey!
              </div>
            </TabsContent>
            
            <TabsContent value="potential">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-center">Potential-Based Opportunities</h3>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[250px]">Area of Potential</TableHead>
                        <TableHead>What We Connect You With</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <Lightbulb className="h-5 w-5 text-amber-500 mr-2" />
                            Innovation & Ideas
                          </div>
                        </TableCell>
                        <TableCell>
                          Incubation, Startup Grants, Social Welfare Grants, Project Expo, Uni-pitch
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <Briefcase className="h-5 w-5 text-blue-500 mr-2" />
                            Work Experience
                          </div>
                        </TableCell>
                        <TableCell>
                          Internships, LOR, Referrals, Profile Recommendations, Career Opportunities
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <Award className="h-5 w-5 text-purple-500 mr-2" />
                            Achievements
                          </div>
                        </TableCell>
                        <TableCell>
                          Awards, Recognition, Featured Publications, Nominations
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <GraduationCap className="h-5 w-5 text-green-500 mr-2" />
                            Academic Excellence
                          </div>
                        </TableCell>
                        <TableCell>
                          Scholarships, SEP-700, IEP, UIRAD, Research Opportunities
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <Users className="h-5 w-5 text-youth-orange mr-2" />
                            Community Building
                          </div>
                        </TableCell>
                        <TableCell>
                          Join as a Mentor, Social Internships, Campaigns, Volunteer Opportunities
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <div className="text-center mt-8">
                  <a href="https://forms.gle/iSYUkMPUifoBbgRRA" target="_blank" rel="noopener noreferrer">
                    <Button>
                      Discover All Opportunities <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </a>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProgramsCategory;
