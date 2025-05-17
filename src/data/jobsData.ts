
export interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  experienceLevel: string;
  type: string;
  status: 'Open' | 'Closed';
  isUrgent?: boolean;
  skills: string[];
  responsibilities: string[];
  reporting: string;
  teamCollaboration: string;
  benefits: string[];
  noticePeriod?: string;
  selectionProcess?: string;
}

export const jobsData: Job[] = [
  {
    id: 10,
    title: "Relations Head",
    department: "Operations",
    location: "Hybrid",
    experienceLevel: "Lead",
    type: "Full-Time",
    status: "Open",
    isUrgent: true,
    skills: ["Relationship Management", "Communication", "Leadership", "Strategic Planning", "Networking"],
    responsibilities: [
      "Develop and implement strategies to build and maintain relationships with key stakeholders",
      "Represent the organization at networking events and conferences",
      "Lead the team in achieving relationship management objectives",
      "Create reports on relationship performance metrics",
      "Collaborate with other departments to ensure cohesive relationship strategy"
    ],
    reporting: "Reports to the COO",
    teamCollaboration: "Works with all departments and the leadership team",
    benefits: [
      "Hybrid work arrangement",
      "Professional development fund",
      "Performance bonuses",
      "Paid time off"
    ],
    noticePeriod: "18 days",
    selectionProcess: "Selection based on performance during notice period"
  },
  {
    id: 11,
    title: "Social Media Manager",
    department: "Marketing",
    location: "Remote",
    experienceLevel: "Mid",
    type: "Full-Time",
    status: "Open",
    skills: ["Social Media Strategy", "Content Creation", "Analytics", "Community Management", "Trend Analysis"],
    responsibilities: [
      "Develop and implement social media strategies across all platforms",
      "Create engaging content that aligns with brand voice and objectives",
      "Analyze social media metrics and prepare performance reports",
      "Manage online community engagement and respond to queries",
      "Stay updated with social media trends and best practices"
    ],
    reporting: "Reports to the Marketing Director",
    teamCollaboration: "Works with content creators, designers, and marketing team",
    benefits: [
      "Remote work benefits",
      "Professional development opportunities",
      "Flexible schedule",
      "Wellness program"
    ],
    noticePeriod: "18 days",
    selectionProcess: "Selection based on performance during notice period"
  },
  {
    id: 12,
    title: "Video Editor",
    department: "Marketing",
    location: "Remote",
    experienceLevel: "Mid",
    type: "Full-Time",
    status: "Open",
    skills: ["Video Editing", "Adobe Premiere Pro", "After Effects", "Visual Storytelling", "Animation"],
    responsibilities: [
      "Edit and produce high-quality videos for various platforms",
      "Create motion graphics and visual effects for videos",
      "Collaborate with content team to develop storyboards",
      "Maintain consistent brand identity across all videos",
      "Optimize videos for different social media platforms"
    ],
    reporting: "Reports to the Content Manager",
    teamCollaboration: "Works with content creators and marketing team",
    benefits: [
      "Creative software subscriptions",
      "Remote work flexibility",
      "Professional development",
      "Portfolio building opportunities"
    ],
    noticePeriod: "18 days",
    selectionProcess: "Selection based on performance during notice period"
  },
  {
    id: 13,
    title: "Digital Marketer",
    department: "Marketing",
    location: "Hybrid",
    experienceLevel: "Mid",
    type: "Full-Time",
    status: "Open",
    skills: ["SEO", "SEM", "Analytics", "Email Marketing", "Content Strategy"],
    responsibilities: [
      "Develop and implement digital marketing campaigns",
      "Optimize website and content for search engines",
      "Manage PPC campaigns and digital advertising",
      "Track and analyze digital marketing performance",
      "Create and manage email marketing campaigns"
    ],
    reporting: "Reports to the Marketing Director",
    teamCollaboration: "Works with content team, web developers, and design team",
    benefits: [
      "Hybrid work arrangement",
      "Digital marketing certification support",
      "Performance bonuses",
      "Professional development"
    ],
    noticePeriod: "18 days",
    selectionProcess: "Selection based on performance during notice period"
  },
  {
    id: 14,
    title: "Document Manager",
    department: "Operations",
    location: "In-Office",
    experienceLevel: "Mid",
    type: "Full-Time",
    status: "Open",
    skills: ["Document Management Systems", "Records Management", "Data Organization", "Attention to Detail", "Process Improvement"],
    responsibilities: [
      "Develop and maintain document management systems",
      "Create and implement document control procedures",
      "Ensure proper filing and retrieval of important documents",
      "Train staff on document management protocols",
      "Audit document processes for compliance and efficiency"
    ],
    reporting: "Reports to the Operations Manager",
    teamCollaboration: "Works with all departments for documentation needs",
    benefits: [
      "Professional development",
      "Retirement plans",
      "Paid time off",
      "Office perks"
    ],
    noticePeriod: "18 days",
    selectionProcess: "Selection based on performance during notice period"
  },
  {
    id: 15,
    title: "Invigilator",
    department: "Operations",
    location: "In-Office",
    experienceLevel: "Entry",
    type: "Part-Time",
    status: "Open",
    skills: ["Attention to Detail", "Integrity", "Time Management", "Communication", "Problem Solving"],
    responsibilities: [
      "Monitor examination venues to ensure compliance with rules",
      "Distribute and collect examination materials",
      "Verify candidate identities and attendance",
      "Address and report any irregularities during examinations",
      "Ensure proper conduct of all candidates during exams"
    ],
    reporting: "Reports to the Examination Coordinator",
    teamCollaboration: "Works with examination team and venue staff",
    benefits: [
      "Flexible scheduling",
      "Training provided",
      "Professional environment",
      "Networking opportunities"
    ],
    noticePeriod: "18 days",
    selectionProcess: "Selection based on performance during notice period"
  },
  {
    id: 16,
    title: "Public Relations Officer",
    department: "Marketing",
    location: "Hybrid",
    experienceLevel: "Mid",
    type: "Full-Time",
    status: "Open",
    skills: ["Media Relations", "Crisis Management", "Communication", "Event Planning", "Storytelling"],
    responsibilities: [
      "Develop and implement PR strategies",
      "Maintain relationships with media outlets and journalists",
      "Write press releases and media communications",
      "Organize press conferences and media events",
      "Monitor public perception and address PR issues"
    ],
    reporting: "Reports to the Communications Director",
    teamCollaboration: "Works with marketing, leadership, and all departments",
    benefits: [
      "Hybrid work arrangement",
      "Professional development",
      "Industry event participation",
      "Media training opportunities"
    ],
    noticePeriod: "18 days",
    selectionProcess: "Selection based on performance during notice period"
  },
  {
    id: 17,
    title: "Program President",
    department: "Leadership",
    location: "In-Office",
    experienceLevel: "Lead",
    type: "Full-Time",
    status: "Open",
    skills: ["Leadership", "Strategic Planning", "Public Speaking", "Decision Making", "Team Management"],
    responsibilities: [
      "Provide strategic direction for program initiatives",
      "Represent the organization at high-level events",
      "Lead and inspire team members to achieve objectives",
      "Make critical decisions on program implementation",
      "Build relationships with key stakeholders and partners"
    ],
    reporting: "Reports to the Board of Directors",
    teamCollaboration: "Works with all department heads and leadership team",
    benefits: [
      "Executive health plan",
      "Leadership development program",
      "Travel allowance",
      "Executive retreats"
    ],
    noticePeriod: "18 days",
    selectionProcess: "Selection based on performance during notice period"
  },
  {
    id: 18,
    title: "Vice President",
    department: "Leadership",
    location: "In-Office",
    experienceLevel: "Lead",
    type: "Full-Time",
    status: "Open",
    skills: ["Leadership", "Operations Management", "Strategic Planning", "Team Building", "Communication"],
    responsibilities: [
      "Assist the President in strategic planning and execution",
      "Oversee daily operations and ensure smooth functioning",
      "Lead specific projects and initiatives as assigned",
      "Act as the President in their absence",
      "Develop and implement operational procedures"
    ],
    reporting: "Reports to the President",
    teamCollaboration: "Works with department heads and leadership team",
    benefits: [
      "Comprehensive health coverage",
      "Leadership training",
      "Retirement benefits",
      "Performance bonuses"
    ],
    noticePeriod: "18 days",
    selectionProcess: "Selection based on performance during notice period"
  },
  {
    id: 19,
    title: "Ambassador",
    department: "Leadership",
    location: "Remote",
    experienceLevel: "Senior",
    type: "Part-Time",
    status: "Open",
    skills: ["Public Relations", "Networking", "Public Speaking", "Brand Representation", "Event Participation"],
    responsibilities: [
      "Represent the organization at various events and platforms",
      "Build and maintain relationships with key stakeholders",
      "Promote organizational mission and values",
      "Participate in community engagement activities",
      "Provide feedback on brand perception in different markets"
    ],
    reporting: "Reports to the Public Relations Director",
    teamCollaboration: "Works with marketing, PR team, and leadership",
    benefits: [
      "Flexible schedule",
      "Travel opportunities",
      "Networking events",
      "Brand merchandise"
    ],
    noticePeriod: "18 days",
    selectionProcess: "Selection based on performance during notice period"
  },
  {
    id: 20,
    title: "Volunteer Coordinator",
    department: "Operations",
    location: "Hybrid",
    experienceLevel: "Mid",
    type: "Full-Time",
    status: "Open",
    skills: ["Volunteer Management", "Event Planning", "Communication", "Organization", "Program Coordination"],
    responsibilities: [
      "Recruit, train, and manage volunteers",
      "Develop volunteer programs and initiatives",
      "Organize volunteer events and activities",
      "Track volunteer hours and contributions",
      "Recognize and appreciate volunteer efforts"
    ],
    reporting: "Reports to the Operations Manager",
    teamCollaboration: "Works with all departments requiring volunteer support",
    benefits: [
      "Flexible schedule",
      "Professional development",
      "Community involvement opportunities",
      "Team building events"
    ],
    noticePeriod: "18 days",
    selectionProcess: "Selection based on performance during notice period"
  },
  {
    id: 21,
    title: "Public Speaker",
    department: "Marketing",
    location: "Remote",
    experienceLevel: "Senior",
    type: "Part-Time",
    status: "Open",
    skills: ["Public Speaking", "Presentation Skills", "Storytelling", "Audience Engagement", "Content Development"],
    responsibilities: [
      "Develop and deliver compelling presentations",
      "Represent the organization at conferences and events",
      "Create engaging content for various audiences",
      "Adapt messaging for different platforms and formats",
      "Provide training on effective communication"
    ],
    reporting: "Reports to the Communications Director",
    teamCollaboration: "Works with content team and leadership",
    benefits: [
      "Flexible schedule",
      "Travel opportunities",
      "Speaker training",
      "Industry networking"
    ],
    noticePeriod: "18 days",
    selectionProcess: "Selection based on performance during notice period"
  },
  {
    id: 22,
    title: "Business Relations Manager",
    department: "Operations",
    location: "Hybrid",
    experienceLevel: "Senior",
    type: "Full-Time",
    status: "Open",
    isUrgent: true,
    skills: ["Business Development", "Relationship Management", "Negotiation", "Strategic Planning", "Communication"],
    responsibilities: [
      "Build and maintain relationships with business partners",
      "Identify and pursue new business opportunities",
      "Negotiate contracts and partnerships",
      "Develop strategies for business growth",
      "Analyze market trends and competitor activities"
    ],
    reporting: "Reports to the Chief Business Officer",
    teamCollaboration: "Works with sales, marketing, and leadership team",
    benefits: [
      "Comprehensive benefits package",
      "Performance bonuses",
      "Business development training",
      "Networking event allowance"
    ],
    noticePeriod: "18 days",
    selectionProcess: "Selection based on performance during notice period"
  }
];
