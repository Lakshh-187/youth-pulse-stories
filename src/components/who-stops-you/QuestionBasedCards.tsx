
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  DollarSign, 
  FileText, 
  Link, 
  BookOpen, 
  Globe,
  Users
} from "lucide-react";

interface QuestionCard {
  id: number;
  question: string;
  answer: string;
  icon: JSX.Element;
  category: string;
}

const QuestionBasedCards = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  
  const questions: QuestionCard[] = [
    {
      id: 1,
      question: "You pay for mentorship on topmate.io, we provide it free?",
      answer: "We connect you with industry mentors via Uni-Talks, IEP, CFA, and UIRAD programs without any fees.",
      icon: <GraduationCap className="h-8 w-8 text-youth-purple" />,
      category: "mentorship"
    },
    {
      id: 2,
      question: "You pay for training internship as a fresher, we provide it free?",
      answer: "Get direct internship referrals from our partnered organizations without any training or application fees.",
      icon: <Briefcase className="h-8 w-8 text-youth-blue" />,
      category: "internship"
    },
    {
      id: 3,
      question: "You're frustrated because of filters like DSA & aptitude, and want interview referrals for skill-based positions?",
      answer: "We connect talented students directly with companies based on their practical skills, not just DSA and aptitude tests.",
      icon: <Link className="h-8 w-8 text-youth-orange" />,
      category: "referral"
    },
    {
      id: 4,
      question: "You have an idea and are looking for incubation?",
      answer: "We connect you with startup grants, social welfare funds, and innovation scholarships without fees.",
      icon: <DollarSign className="h-8 w-8 text-green-500" />,
      category: "funding"
    },
    {
      id: 5,
      question: "You have a problem-solving project looking for recognition to enhance your profile?",
      answer: "Get your work published in top magazines and platforms, and receive certificates backed by recognized organizations.",
      icon: <Award className="h-8 w-8 text-amber-500" />,
      category: "recognition"
    },
    {
      id: 6,
      question: "You need a verified Letter of Recommendation (LOR) for applications?",
      answer: "Get a verified UNSR-backed LOR based on your work and achievements without paying consultants.",
      icon: <FileText className="h-8 w-8 text-blue-500" />,
      category: "documents"
    },
    {
      id: 7,
      question: "You've worked on a research project but don't know how to get it published?",
      answer: "Our network includes academic journals and publication platforms that can help showcase your research work.",
      icon: <BookOpen className="h-8 w-8 text-purple-500" />,
      category: "recognition"
    },
    {
      id: 8,
      question: "You want to participate in international competitions but can't afford the fees?",
      answer: "We help connect students with sponsored entries to global competitions and provide preparation resources.",
      icon: <Globe className="h-8 w-8 text-teal-500" />,
      category: "opportunities"
    },
    {
      id: 9,
      question: "You need guidance on building a portfolio that stands out to employers?",
      answer: "Our mentors provide personalized guidance on creating impressive portfolios tailored to your field and career goals.",
      icon: <Users className="h-8 w-8 text-indigo-500" />,
      category: "mentorship"
    }
  ];

  const filteredQuestions = questions.filter(card => {
    const matchesSearch = card.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          card.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'all' || card.category === activeFilter;
    
    return matchesSearch && matchesFilter;
  });

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'mentorship', label: 'Mentorship' },
    { id: 'internship', label: 'Internships' },
    { id: 'funding', label: 'Funding' },
    { id: 'recognition', label: 'Recognition' },
    { id: 'referral', label: 'Referrals' },
    { id: 'documents', label: 'Documents' },
    { id: 'opportunities', label: 'Opportunities' }
  ];

  return (
    <div className="w-full py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Are You Looking For?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the support and opportunities you need with our question-based system.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input 
              type="text" 
              placeholder="Search your questions or browse by category..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-6 text-lg"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map(category => (
            <Badge 
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              className={`text-sm py-2 px-4 cursor-pointer ${
                activeFilter === category.id 
                  ? "bg-youth-purple hover:bg-youth-purple/90" 
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.label}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredQuestions.map((card) => (
            <Card key={card.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  {card.icon}
                  <Badge>{card.category}</Badge>
                </div>
                <CardTitle className="mt-4 text-xl">{card.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{card.answer}</p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredQuestions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No matching questions found. Try adjusting your search or filter.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('all');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionBasedCards;
