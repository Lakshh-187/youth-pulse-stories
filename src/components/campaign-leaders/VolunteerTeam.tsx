
import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart } from 'lucide-react';

interface Volunteer {
  id: number;
  name: string;
  role: string;
  image?: string;
  department: string;
}

const volunteers: Volunteer[] = [
  {
    id: 1,
    name: "Emma Wilson",
    role: "Community Volunteer",
    department: "Events",
    image: "https://i.pravatar.cc/150?img=3"
  },
  {
    id: 2,
    name: "David Kim",
    role: "Social Media Volunteer",
    department: "Marketing",
    image: "https://i.pravatar.cc/150?img=4"
  }
];

const VolunteerTeam = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-6">
        <Heart className="h-6 w-6 text-red-500" />
        <h2 className="text-2xl font-bold">Volunteer Team</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {volunteers.map((member) => (
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
              <Badge variant="success">Volunteer</Badge>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-500">Department: {member.department}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VolunteerTeam;
