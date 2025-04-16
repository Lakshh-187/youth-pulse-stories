
import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image?: string;
  joinDate: string;
}

const executiveMembers: TeamMember[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Program Director",
    image: "https://i.pravatar.cc/150?img=1",
    joinDate: "2022",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Executive Director",
    image: "https://i.pravatar.cc/150?img=2",
    joinDate: "2023",
  },
];

const ExecutiveTeam = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="h-6 w-6 text-yellow-500" />
        <h2 className="text-2xl font-bold">Executive Team</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {executiveMembers.map((member) => (
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
              <Badge variant="default">Executive</Badge>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-500">Member since {member.joinDate}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ExecutiveTeam;
