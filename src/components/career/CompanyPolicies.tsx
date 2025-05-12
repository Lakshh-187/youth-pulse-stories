
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CompanyPolicies = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Company Policies & Perks</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We believe in creating a supportive, engaging workplace where you can thrive personally and professionally.
        </p>
        
        <Tabs defaultValue="culture" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
            <TabsTrigger value="culture">Culture</TabsTrigger>
            <TabsTrigger value="wellness">Wellness</TabsTrigger>
            <TabsTrigger value="learning">Learning</TabsTrigger>
            <TabsTrigger value="vacation">Leave</TabsTrigger>
            <TabsTrigger value="remote">Remote Work</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>
          
          <TabsContent value="culture" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Company Culture & HR Policies</CardTitle>
                <CardDescription>Our values and how we work together</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Our Core Values</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Collaborative Innovation: We believe the best ideas come from diverse perspectives.</li>
                    <li>Transparency & Trust: Open communication and honesty in all interactions.</li>
                    <li>Continuous Learning: We encourage growth and development at all levels.</li>
                    <li>Social Impact: Making a positive difference in our communities.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Diversity & Inclusion</h4>
                  <p>We're committed to creating an inclusive environment where everyone feels welcome, valued, and empowered to contribute their best work.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Ethics & Conduct</h4>
                  <p>Our comprehensive ethics policy guides how we interact with each other, our clients, and our communities. We hold ourselves to the highest standards.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="wellness" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Wellness & Mental Health Support</CardTitle>
                <CardDescription>We care about your complete wellbeing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Health Insurance</h4>
                  <p>Comprehensive medical, dental, and vision coverage for you and your dependents.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Mental Health Resources</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Access to confidential counseling services</li>
                    <li>Meditation and mindfulness app subscriptions</li>
                    <li>Regular wellness workshops and seminars</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Fitness Benefits</h4>
                  <p>Gym membership discounts, fitness challenges, and wellness incentives to keep you active and healthy.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="learning" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Learning & Upskilling Support</CardTitle>
                <CardDescription>Invest in your growth and development</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Professional Development Budget</h4>
                  <p>Annual stipend for courses, conferences, and learning materials.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Learning Resources</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Access to online course platforms</li>
                    <li>Internal knowledge sharing sessions</li>
                    <li>Mentorship program</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Career Advancement</h4>
                  <p>Clear growth paths and regular performance reviews to help you advance in your career.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="vacation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Leave & Vacation Policy</CardTitle>
                <CardDescription>Time to rest and recharge</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Paid Time Off</h4>
                  <p>Generous vacation days plus public holidays to ensure you have time to recharge.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Sick Leave</h4>
                  <p>Paid sick leave so you can take care of your health without worry.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Parental Leave</h4>
                  <p>Extended parental leave for all parents, plus flexibility when returning to work.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Sabbaticals</h4>
                  <p>Long-term employees are eligible for extended sabbaticals to pursue personal interests.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="remote" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Work-from-Home Benefits</CardTitle>
                <CardDescription>Support for flexible work arrangements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Flexible Work Hours</h4>
                  <p>Core hours with flexibility to accommodate your most productive times and personal needs.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Home Office Stipend</h4>
                  <p>Allowance to set up a comfortable and productive home workspace.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Connectivity Support</h4>
                  <p>Internet reimbursement and tech support to ensure you stay connected.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="events" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Team Events & Recognition</CardTitle>
                <CardDescription>Celebrating achievements and building connections</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Regular Team Building</h4>
                  <p>Monthly team activities, both virtual and in-person, to strengthen relationships.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Recognition Programs</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Peer recognition platform</li>
                    <li>Quarterly awards and celebrations</li>
                    <li>Work anniversary celebrations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Annual Retreats</h4>
                  <p>Company-wide gatherings to connect, align, and celebrate wins together.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CompanyPolicies;
