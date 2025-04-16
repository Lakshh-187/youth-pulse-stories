
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { UsersRound, Building2, GraduationCap, Trophy } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  type: 'official' | 'volunteer' | 'intern' | 'appointed';
  image?: string;
  department: string;
  joinDate: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Program Director",
    type: "official",
    department: "Executive Team",
    joinDate: "2022",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Community Coordinator",
    type: "volunteer",
    department: "Community Engagement",
    joinDate: "2023",
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Youth Mentor",
    type: "appointed",
    department: "Education",
    joinDate: "2023",
    image: "https://i.pravatar.cc/150?img=3"
  },
  {
    id: 4,
    name: "Alex Rivera",
    role: "Research Assistant",
    type: "intern",
    department: "Research",
    joinDate: "2024",
    image: "https://i.pravatar.cc/150?img=4"
  }
];

const CampaignLeaders = () => {
  const getBadgeVariant = (type: TeamMember['type']) => {
    const variants = {
      official: 'default',
      volunteer: 'success',
      intern: 'info',
      appointed: 'warning'
    };
    return variants[type] as 'default' | 'success' | 'info' | 'warning';
  };

  const getCategoryIcon = (department: string) => {
    switch (department) {
      case 'Executive Team':
        return <Trophy className="h-4 w-4 text-yellow-500" />;
      case 'Community Engagement':
        return <UsersRound className="h-4 w-4 text-blue-500" />;
      case 'Education':
        return <GraduationCap className="h-4 w-4 text-green-500" />;
      default:
        return <Building2 className="h-4 w-4 text-purple-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Campaign Leaders</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated individuals who drive our mission forward through leadership, volunteerism, and commitment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <Card key={member.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-2">
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  {member.image ? (
                    <AvatarImage src={member.image} alt={member.name} />
                  ) : (
                    <AvatarFallback>{member.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                  )}
                </Avatar>
                <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{member.role}</p>
                <Badge variant={getBadgeVariant(member.type)} className="capitalize">
                  {member.type}
                </Badge>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    {getCategoryIcon(member.department)}
                    <span>{member.department}</span>
                  </div>
                  <span>Since {member.joinDate}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampaignLeaders;
