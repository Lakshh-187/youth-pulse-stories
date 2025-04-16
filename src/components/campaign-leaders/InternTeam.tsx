
import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from 'lucide-react';

interface Intern {
  id: number;
  name: string;
  role: string;
  image?: string;
  university: string;
}

const interns: Intern[] = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Research Intern",
    university: "Stanford University",
    image: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: 2,
    name: "Sophie Chen",
    role: "Marketing Intern",
    university: "NYU",
    image: "https://i.pravatar.cc/150?img=6"
  }
];

const InternTeam = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-6">
        <GraduationCap className="h-6 w-6 text-blue-500" />
        <h2 className="text-2xl font-bold">Intern Team</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {interns.map((member) => (
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
              <Badge variant="info">Intern</Badge>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-500">From: {member.university}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InternTeam;
