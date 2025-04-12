
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Building, GraduationCap, BookOpen, Lightbulb, 
  Download, Image, FileText, Users, Award, Globe,
  ArrowRight, Send
} from "lucide-react";
import { 
  Card, CardContent, CardDescription, 
  CardFooter, CardHeader, CardTitle 
} from "@/components/ui/card";
import { 
  Accordion, AccordionContent, 
  AccordionItem, AccordionTrigger 
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  Form, FormControl, FormDescription, 
  FormField, FormItem, FormLabel, FormMessage 
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const IEP = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7E69AB]/90 to-[#D6BCFA]/70 mix-blend-multiply"></div>
        <div 
          className="relative bg-cover bg-center py-24" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')"
          }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <Badge variant="success" className="mb-4">International Standards</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                International Educational Program
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Transforming educational institutions to meet international standards through innovative 
                curriculum, modern infrastructure, and global best practices.
              </p>
              <Button asChild size="lg" className="bg-white text-[#7E69AB] hover:bg-white/90">
                <Link to="#programs">
                  Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Navigation Cards */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-2">Transform Your Institution</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Components of IEP</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our International Educational Program offers comprehensive solutions to elevate your 
              institution to global standards through these key pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Programs Card */}
            <Card className="transition-all hover:shadow-lg border-t-4 border-t-purple-500">
              <CardHeader className="pb-4">
                <GraduationCap className="h-10 w-10 text-purple-500 mb-2" />
                <CardTitle>Academic Programs</CardTitle>
                <CardDescription>
                  Internationally accredited programs that enhance learning outcomes
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-sm text-gray-600">
                  Access a wide range of academic programs designed to align with global standards 
                  and facilitate student success in an international context.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-purple-600 p-0 hover:text-purple-800 hover:bg-transparent">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardFooter>
            </Card>

            {/* Establishments Card */}
            <Card className="transition-all hover:shadow-lg border-t-4 border-t-blue-500">
              <CardHeader className="pb-4">
                <Building className="h-10 w-10 text-blue-500 mb-2" />
                <CardTitle>Establishments</CardTitle>
                <CardDescription>
                  Infrastructure and facilities that meet global standards
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-sm text-gray-600">
                  Transform your physical and digital infrastructure to provide an ideal learning 
                  environment that facilitates global education standards.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-blue-600 p-0 hover:text-blue-800 hover:bg-transparent">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardFooter>
            </Card>

            {/* Curriculum Card */}
            <Card className="transition-all hover:shadow-lg border-t-4 border-t-green-500">
              <CardHeader className="pb-4">
                <BookOpen className="h-10 w-10 text-green-500 mb-2" />
                <CardTitle>Curriculum</CardTitle>
                <CardDescription>
                  Modern, engaging syllabus aligned with global standards
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-sm text-gray-600">
                  Our curriculum integrates the best educational practices from around the world, 
                  promoting critical thinking and comprehensive skill development.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-green-600 p-0 hover:text-green-800 hover:bg-transparent">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardFooter>
            </Card>

            {/* Innovation Card */}
            <Card className="transition-all hover:shadow-lg border-t-4 border-t-orange-500">
              <CardHeader className="pb-4">
                <Lightbulb className="h-10 w-10 text-orange-500 mb-2" />
                <CardTitle>Innovation</CardTitle>
                <CardDescription>
                  Cutting-edge educational technologies and methodologies
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-sm text-gray-600">
                  Integrate innovative teaching methods and technologies to create an engaging, 
                  effective learning environment for the 21st century.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-orange-600 p-0 hover:text-orange-800 hover:bg-transparent">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <Badge variant="outline" className="mb-2">Join Our Network</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Apply for IEP Integration</h2>
              <p className="text-lg text-gray-600 mb-8">
                Transform your educational institution by integrating our International Educational Program. 
                Fill out the application form to start the journey toward global standards.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <Building className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Comprehensive Assessment</h3>
                    <p className="text-gray-600">Our team evaluates your current infrastructure and academic processes</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Customized Implementation</h3>
                    <p className="text-gray-600">We develop a tailored plan to integrate IEP into your institution</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <GraduationCap className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Continuous Support</h3>
                    <p className="text-gray-600">Ongoing assistance and resources for sustainable transformation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-center">Application Form</h3>
                
                <ApplicationForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">Success Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">International Schools Gallery</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how educational institutions around the world have transformed through our 
              International Educational Program.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gallery Item 1 */}
            <div className="overflow-hidden rounded-lg shadow-md group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                  alt="International School Building" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="secondary" size="sm">
                    <Image className="mr-2 h-4 w-4" /> View Gallery
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <Badge className="mb-2" variant="outline">North America</Badge>
                <h3 className="font-bold">Cambridge International School</h3>
                <p className="text-sm text-gray-600">A model of excellence in international education standards</p>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="overflow-hidden rounded-lg shadow-md group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                  alt="Digital Learning Environment" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="secondary" size="sm">
                    <Image className="mr-2 h-4 w-4" /> View Gallery
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <Badge className="mb-2" variant="outline">Europe</Badge>
                <h3 className="font-bold">Global Tech Academy</h3>
                <p className="text-sm text-gray-600">Pioneering digital learning environments</p>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="overflow-hidden rounded-lg shadow-md group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                  alt="Innovative Learning Environment" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="secondary" size="sm">
                    <Image className="mr-2 h-4 w-4" /> View Gallery
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <Badge className="mb-2" variant="outline">Asia</Badge>
                <h3 className="font-bold">Innovation Learning Hub</h3>
                <p className="text-sm text-gray-600">Merging tradition with cutting-edge educational technology</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button size="lg">
              View All Galleries <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">Knowledge Resources</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Publications & Case Studies</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access our comprehensive research, reports, and case studies on international education 
              transformation and best practices.
            </p>
          </div>

          <Tabs defaultValue="reports" className="w-full">
            <TabsList className="w-full flex justify-center mb-8">
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="casestudies">Case Studies</TabsTrigger>
              <TabsTrigger value="research">Research Papers</TabsTrigger>
            </TabsList>
            
            <TabsContent value="reports" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Report 1 */}
                <Card>
                  <CardHeader>
                    <Badge variant="secondary" className="mb-2 w-fit">Annual Report</Badge>
                    <CardTitle>Global Education Trends 2025</CardTitle>
                    <CardDescription>Analysis of emerging trends in international education</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      This comprehensive report examines the evolving landscape of global education and 
                      forecasts key trends that will shape international educational standards.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <FileText className="h-4 w-4 mr-2" />
                      <span>PDF • 24 pages • 4.2 MB</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" /> Download Report
                    </Button>
                  </CardFooter>
                </Card>

                {/* Report 2 */}
                <Card>
                  <CardHeader>
                    <Badge variant="info" className="mb-2 w-fit">Impact Study</Badge>
                    <CardTitle>Digital Transformation in Education</CardTitle>
                    <CardDescription>How technology is reshaping global learning</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Explore how digital technologies are transforming educational institutions and 
                      creating new opportunities for enhanced learning experiences.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <FileText className="h-4 w-4 mr-2" />
                      <span>PDF • 18 pages • 3.5 MB</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" /> Download Report
                    </Button>
                  </CardFooter>
                </Card>

                {/* Report 3 */}
                <Card>
                  <CardHeader>
                    <Badge variant="warning" className="mb-2 w-fit">Whitepaper</Badge>
                    <CardTitle>Curriculum Development Framework</CardTitle>
                    <CardDescription>Building globally competitive educational programs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      A detailed framework for developing curricula that align with international 
                      standards while preserving cultural context and relevance.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <FileText className="h-4 w-4 mr-2" />
                      <span>PDF • 32 pages • 5.7 MB</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" /> Download Report
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  View All Reports <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="casestudies">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Case Studies content */}
                <Card>
                  <CardHeader>
                    <Badge variant="success" className="mb-2 w-fit">Success Story</Badge>
                    <CardTitle>International School of Helsinki</CardTitle>
                    <CardDescription>Complete transformation in 24 months</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      How a traditional school transformed into a global leader in education 
                      through comprehensive implementation of IEP standards.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      Read Case Study
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <Badge variant="success" className="mb-2 w-fit">Success Story</Badge>
                    <CardTitle>Singapore Global Academy</CardTitle>
                    <CardDescription>Curriculum innovation in Asia</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      A detailed look at how curriculum innovation transformed learning outcomes 
                      and student engagement at this prestigious institution.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      Read Case Study
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <Badge variant="success" className="mb-2 w-fit">Success Story</Badge>
                    <CardTitle>Brazilian Tech Institute</CardTitle>
                    <CardDescription>Technology integration in education</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      How a traditional institution embraced digital transformation to become 
                      a model for technology-enhanced learning.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      Read Case Study
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="research">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Research Papers content */}
                <Card>
                  <CardHeader>
                    <Badge variant="secondary" className="mb-2 w-fit">Research</Badge>
                    <CardTitle>Effectiveness of Hybrid Learning Models</CardTitle>
                    <CardDescription>A comparative analysis across 12 countries</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      This research paper examines the impact of hybrid learning models on 
                      educational outcomes across diverse global contexts.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" /> Download Paper
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <Badge variant="secondary" className="mb-2 w-fit">Research</Badge>
                    <CardTitle>Cultural Integration in Global Curricula</CardTitle>
                    <CardDescription>Balancing standardization and cultural context</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      An examination of successful approaches to integrating cultural context 
                      within internationally standardized educational frameworks.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" /> Download Paper
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <Badge variant="secondary" className="mb-2 w-fit">Research</Badge>
                    <CardTitle>Impact of Physical Learning Spaces</CardTitle>
                    <CardDescription>Infrastructure design for optimal outcomes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      This research explores how physical environment design impacts learning 
                      outcomes and student wellbeing in educational institutions.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" /> Download Paper
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">Educational Resources</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Download Materials</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access our comprehensive suite of educational resources to enhance your institution's 
              journey towards international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Curriculum Downloads */}
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Curriculum Frameworks</CardTitle>
                <CardDescription>Internationally aligned educational frameworks</CardDescription>
              </CardHeader>
              <CardContent className="pb-0">
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="pb-2 border-b">K-12 Curriculum Framework</li>
                  <li className="pb-2 border-b">STEM Education Guidelines</li>
                  <li className="pb-2 border-b">Arts & Humanities Curriculum</li>
                  <li>Assessment Standards Guide</li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center pt-6">
                <Button>
                  <Download className="mr-2 h-4 w-4" /> Download
                </Button>
              </CardFooter>
            </Card>

            {/* E-books */}
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>E-Books</CardTitle>
                <CardDescription>Educational guides and references</CardDescription>
              </CardHeader>
              <CardContent className="pb-0">
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="pb-2 border-b">Modern Teaching Methods</li>
                  <li className="pb-2 border-b">Digital Classroom Guide</li>
                  <li className="pb-2 border-b">Global Education Standards</li>
                  <li>Educational Leadership</li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center pt-6">
                <Button>
                  <Download className="mr-2 h-4 w-4" /> Download
                </Button>
              </CardFooter>
            </Card>

            {/* Data & Reports */}
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Data & Reports</CardTitle>
                <CardDescription>Research and statistical information</CardDescription>
              </CardHeader>
              <CardContent className="pb-0">
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="pb-2 border-b">Global Education Trends</li>
                  <li className="pb-2 border-b">Educational Outcomes Data</li>
                  <li className="pb-2 border-b">Infrastructure Benchmarks</li>
                  <li>Technology Integration Analysis</li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center pt-6">
                <Button>
                  <Download className="mr-2 h-4 w-4" /> Download
                </Button>
              </CardFooter>
            </Card>

            {/* Templates & Tools */}
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Download className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle>Templates & Tools</CardTitle>
                <CardDescription>Resources for implementation</CardDescription>
              </CardHeader>
              <CardContent className="pb-0">
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="pb-2 border-b">Assessment Templates</li>
                  <li className="pb-2 border-b">Curriculum Planning Tools</li>
                  <li className="pb-2 border-b">Facility Evaluation Forms</li>
                  <li>Technology Integration Checklist</li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center pt-6">
                <Button>
                  <Download className="mr-2 h-4 w-4" /> Download
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Opportunities Section */}
      <section className="py-20 bg-gradient-to-r from-[#7E69AB]/90 to-[#D6BCFA]/70 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-2">Engagement Opportunities</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Educational Ecosystem</h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Explore additional opportunities to engage with our international educational network 
              and enhance your institution's global presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Seasonal Teachers */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition-all">
              <Users className="h-12 w-12 mb-6 text-white/90" />
              <h3 className="text-xl font-bold mb-3">Seasonal Teachers</h3>
              <p className="mb-6 opacity-90">
                Host international interns as seasonal teachers to bring global 
                perspectives and fresh methodologies to your institution.
              </p>
              <Button variant="secondary">Apply as Host Institution</Button>
            </div>

            {/* Hackathon Projects */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition-all">
              <Lightbulb className="h-12 w-12 mb-6 text-white/90" />
              <h3 className="text-xl font-bold mb-3">Innovation Projects</h3>
              <p className="mb-6 opacity-90">
                Implement transformative projects developed during our educational 
                hackathons designed to solve real institutional challenges.
              </p>
              <Button variant="secondary">Explore Projects</Button>
            </div>

            {/* Grants */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition-all">
              <Award className="h-12 w-12 mb-6 text-white/90" />
              <h3 className="text-xl font-bold mb-3">CR Grants Program</h3>
              <p className="mb-6 opacity-90">
                Apply for Curriculum Reform grants designed to support institutions 
                in their journey towards international standards.
              </p>
              <Button variant="secondary">Apply for Grants</Button>
            </div>

            {/* Clubs & Societies */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition-all">
              <Globe className="h-12 w-12 mb-6 text-white/90" />
              <h3 className="text-xl font-bold mb-3">Global Clubs & Societies</h3>
              <p className="mb-6 opacity-90">
                Establish international clubs and societies in your institution to 
                foster global citizenship and cross-cultural understanding.
              </p>
              <Button variant="secondary">Start a Club</Button>
            </div>

            {/* Workshops */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition-all">
              <GraduationCap className="h-12 w-12 mb-6 text-white/90" />
              <h3 className="text-xl font-bold mb-3">Faculty Workshops</h3>
              <p className="mb-6 opacity-90">
                Participate in specialized workshops designed to equip your faculty 
                with international teaching methodologies and practices.
              </p>
              <Button variant="secondary">Register for Workshops</Button>
            </div>

            {/* Exchange Programs */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition-all">
              <Building className="h-12 w-12 mb-6 text-white/90" />
              <h3 className="text-xl font-bold mb-3">Institution Exchange</h3>
              <p className="mb-6 opacity-90">
                Join our network of partner institutions for collaborative projects, 
                student exchanges, and shared educational resources.
              </p>
              <Button variant="secondary">Partner With Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">Questions & Answers</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our International Educational Program 
              and how it can transform your institution.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is the International Educational Program (IEP)?</AccordionTrigger>
                <AccordionContent>
                  The International Educational Program (IEP) is a comprehensive framework designed to transform 
                  educational institutions to meet international standards. It encompasses curriculum development, 
                  infrastructure enhancement, teaching methodologies, and administrative practices to create a 
                  globally competitive educational environment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>How long does the IEP implementation take?</AccordionTrigger>
                <AccordionContent>
                  The implementation timeline varies based on the institution's current state and specific goals. 
                  Typically, basic implementation can be completed within 12-18 months, while comprehensive 
                  transformation may take 24-36 months. Our team works with each institution to develop a 
                  customized timeline that considers their unique circumstances.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>What support does IEP provide after implementation?</AccordionTrigger>
                <AccordionContent>
                  IEP offers ongoing support through regular assessments, professional development for faculty, 
                  curriculum updates, technology integration assistance, and access to our global network of 
                  educational institutions. We remain partners in your educational journey, ensuring sustainable 
                  transformation and continuous improvement.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Does IEP replace our existing curriculum?</AccordionTrigger>
                <AccordionContent>
                  IEP is designed to enhance rather than replace your existing curriculum. We work with institutions 
                  to integrate international standards while preserving cultural relevance and institutional identity. 
                  The program adapts to your specific context while introducing best practices from global education.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>How can we measure the impact of IEP implementation?</AccordionTrigger>
                <AccordionContent>
                  IEP includes comprehensive assessment tools to measure impact across multiple dimensions: 
                  student achievement, faculty development, institutional reputation, global engagement, and 
                  administrative efficiency. We establish baseline metrics at the beginning of implementation 
                  and conduct regular evaluations to track progress and adjust strategies as needed.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Application Form Component
const ApplicationForm = () => {
  const formSchema = z.object({
    institutionName: z.string().min(2, { message: "Institution name is required" }),
    contactName: z.string().min(2, { message: "Contact name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().min(10, { message: "Valid phone number is required" }),
    institutionType: z.string().min(1, { message: "Please select an institution type" }),
    message: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      institutionName: "",
      contactName: "",
      email: "",
      phone: "",
      institutionType: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would typically send the form data to your backend
    alert("Application submitted successfully!");
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="institutionName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Institution Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your institution name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contactName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Person</FormLabel>
              <FormControl>
                <Input placeholder="Full name of primary contact" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Your phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="institutionType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Institution Type</FormLabel>
              <FormControl>
                <select
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  {...field}
                >
                  <option value="">Select institution type</option>
                  <option value="k12">K-12 School</option>
                  <option value="university">University</option>
                  <option value="college">College</option>
                  <option value="vocational">Vocational Institution</option>
                  <option value="other">Other</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Information</FormLabel>
              <FormControl>
                <textarea
                  className="flex h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none md:text-sm"
                  placeholder="Tell us about your institution and goals"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Please provide any additional information about your institution and specific goals.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          <Send className="mr-2 h-4 w-4" /> Submit Application
        </Button>
      </form>
    </Form>
  );
};

export default IEP;
