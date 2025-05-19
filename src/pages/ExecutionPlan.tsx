
import React from "react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  CalendarDays, 
  Goal, 
  Trophy, 
  Milestone, 
  RocketIcon, 
  CheckCheck, 
  TrendingUp, 
  Star 
} from "lucide-react";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ExecutionPlan = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-700 to-blue-500 py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Execution Plan & Roadmap</h1>
            <p className="text-xl max-w-3xl mx-auto text-center text-white/90">
              Our mission, goals, and how we're making it happen - step by step.
            </p>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <RocketIcon className="h-8 w-8 text-youth-purple mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
            </div>
            <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
              Transform educational institutes to international standards through comprehensive backing, 
              establishment support, and implementation of UIRAD, Connect, and Tech solutions.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Implementation Timeline</h2>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Phase 1 */}
              <div className="flex flex-col md:flex-row mb-16">
                <div className="md:w-1/3">
                  <div className="bg-youth-purple text-white p-4 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-2 flex items-center">
                      <Milestone className="h-5 w-5 mr-2" /> Phase 1
                    </h3>
                    <p className="text-white/90">Initial reach and infrastructure</p>
                  </div>
                </div>
                <div className="md:w-2/3 mt-4 md:mt-0 md:pl-8">
                  <div className="bg-white p-6 rounded-lg shadow border-l-4 border-youth-purple">
                    <h4 className="font-bold text-lg mb-3">Institute Outreach</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCheck className="h-5 w-5 text-youth-purple mr-2 mt-1 flex-shrink-0" />
                        <span>Offline - 50K diameter Institutes invitation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCheck className="h-5 w-5 text-youth-purple mr-2 mt-1 flex-shrink-0" />
                        <span>Online - 20-50 Institutes invitation</span>
                      </li>
                    </ul>
                    
                    <h4 className="font-bold text-lg mt-6 mb-3">Scholar Development</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Goal className="h-5 w-5 text-youth-purple mr-2 mt-1 flex-shrink-0" />
                        <span>5 lakh Uniford scholars - standardize & transform</span>
                      </li>
                      <li className="flex items-start">
                        <Goal className="h-5 w-5 text-youth-purple mr-2 mt-1 flex-shrink-0" />
                        <span>Initial target: 1000 scholars onboarded</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* WSY Initiative */}
              <div className="flex flex-col md:flex-row mb-16">
                <div className="md:w-1/3">
                  <div className="bg-youth-blue text-white p-4 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-2 flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2" /> WSY Initiative
                    </h3>
                    <p className="text-white/90">Who Stops You - Support Infrastructure</p>
                  </div>
                </div>
                <div className="md:w-2/3 mt-4 md:mt-0 md:pl-8">
                  <div className="bg-white p-6 rounded-lg shadow border-l-4 border-youth-blue">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCheck className="h-5 w-5 text-youth-blue mr-2 mt-1 flex-shrink-0" />
                        <span>Social leads invitation campaign</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCheck className="h-5 w-5 text-youth-blue mr-2 mt-1 flex-shrink-0" />
                        <span>Help desk appointments in 10 institutes</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCheck className="h-5 w-5 text-youth-blue mr-2 mt-1 flex-shrink-0" />
                        <span>1300 queries handled and connections made</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Projects Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Projects & Initiatives</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Youngburg Investment */}
              <Card className="border-t-4 border-t-youth-purple">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="h-5 w-5 mr-2 text-youth-purple" /> 
                    Youngburg
                  </CardTitle>
                  <CardDescription>Investment through Episodes & Portal</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Creating sustainable investment channels through episodic content
                    and a comprehensive portal system to fund educational initiatives.
                  </p>
                </CardContent>
              </Card>
              
              {/* Better Universe */}
              <Card className="border-t-4 border-t-youth-blue">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trophy className="h-5 w-5 mr-2 text-youth-blue" /> 
                    Better Universe
                  </CardTitle>
                  <CardDescription>Innovation, Ideas & Eco-friendly Initiatives</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Showcasing and supporting the best innovations, ideas, initiatives, 
                    organizations, and eco-friendly solutions for a better world.
                  </p>
                </CardContent>
              </Card>
              
              {/* WSY */}
              <Card className="border-t-4 border-t-youth-orange">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CalendarDays className="h-5 w-5 mr-2 text-youth-orange" /> 
                    WSY Portal
                  </CardTitle>
                  <CardDescription>Help Desk & Connection Network</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Phase 1 targets: 130 episodes, 1300 queries handled and connections made.
                    Establishing help desks and creating educational portals supported by
                    episodic content.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Phase 2 Exploration */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Phase 2 Exploration</h2>
            
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800">Exploring and learning to implement in Phase 2:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-3 flex items-center text-youth-purple">
                    <RocketIcon className="h-5 w-5 mr-2" /> Store
                  </h4>
                  <ul className="space-y-2 pl-7">
                    <li className="list-disc">Uniford kits & dress</li>
                    <li className="list-disc">Books & courses</li>
                    <li className="list-disc">Products & affiliations</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3 flex items-center text-youth-purple">
                    <RocketIcon className="h-5 w-5 mr-2" /> Services
                  </h4>
                  <ul className="space-y-2 pl-7">
                    <li className="list-disc">Compliances</li>
                    <li className="list-disc">Book publishing</li>
                    <li className="list-disc">Cograd services</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3 flex items-center text-youth-purple">
                    <RocketIcon className="h-5 w-5 mr-2" /> Institutional Scholars
                  </h4>
                  <ul className="space-y-2 pl-7">
                    <li className="list-disc">Online programs</li>
                    <li className="list-disc">Regular courses</li>
                    <li className="list-disc">Abroad backing</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3 flex items-center text-youth-purple">
                    <RocketIcon className="h-5 w-5 mr-2" /> Media & Events
                  </h4>
                  <ul className="space-y-2 pl-7">
                    <li className="list-disc">Awards & competitions</li>
                    <li className="list-disc">Sponsored events (Better India)</li>
                    <li className="list-disc">Live shows like shark tank</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-16 bg-gradient-to-r from-purple-700 to-blue-500 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Focus Metrics</h2>
            
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                <div className="text-5xl font-bold mb-3 text-white">1000</div>
                <div className="text-xl font-medium">Scholars</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                <div className="text-5xl font-bold mb-3 text-white">50</div>
                <div className="text-xl font-medium">Institutes</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                <div className="text-5xl font-bold mb-3 text-white">1430</div>
                <div className="text-xl font-medium">Episodes</div>
                <div className="text-sm mt-1">Better Universe (130) & WSY (1300)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Welfare Project */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-youth-purple text-white p-3 rounded-full mr-4">
                <Trophy className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Social Welfare Project</h2>
            </div>
            
            <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCheck className="h-5 w-5 text-youth-purple mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">1000 Special ID cards for Underprivileged Students</h4>
                    <p className="text-gray-700">Providing underprivileged students with special identification 
                    to access resources and opportunities.</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-start">
                  <CheckCheck className="h-5 w-5 text-youth-purple mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">Modern Tools & Automation Training</h4>
                    <p className="text-gray-700">Teaching students to use modern tools, automation techniques, and helping 
                    them build personal portfolios.</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-start">
                  <CheckCheck className="h-5 w-5 text-youth-purple mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">Institute Support</h4>
                    <p className="text-gray-700">Backing 50 institutes that don't meet eligibility criteria, 
                    supported through the Uni-pitch program.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ExecutionPlan;
