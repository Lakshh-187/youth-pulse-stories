
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
  salary: string;
  incentives?: string;
  benefits: string[];
}

export const jobsData: Job[] = [
  {
    id: 1,
    title: "Front-End Developer",
    department: "Tech",
    location: "Remote",
    experienceLevel: "Mid",
    type: "Full-Time",
    status: "Open",
    isUrgent: true,
    skills: ["React", "TypeScript", "Tailwind CSS", "RESTful APIs"],
    responsibilities: [
      "Develop and maintain responsive web applications using React.js",
      "Collaborate with designers to implement UI/UX designs",
      "Write clean, maintainable, and efficient code",
      "Integrate and consume RESTful APIs for dynamic content",
      "Perform code reviews and mentor junior developers"
    ],
    reporting: "Reports to the Technical Lead, working closely with the product team.",
    teamCollaboration: "Works in an agile team with backend developers, designers, and product managers.",
    salary: "$85,000 - $110,000 per year",
    incentives: "Performance bonus up to 15% annually",
    benefits: [
      "Health, dental, and vision insurance",
      "Flexible work schedule",
      "Unlimited PTO",
      "Professional development budget",
      "Home office stipend"
    ]
  },
  {
    id: 2,
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Hybrid",
    experienceLevel: "Entry",
    type: "Full-Time",
    status: "Open",
    skills: ["Social Media", "Content Creation", "SEO", "Analytics"],
    responsibilities: [
      "Create and manage social media campaigns",
      "Write compelling copy for various digital channels",
      "Conduct keyword research and optimize content for SEO",
      "Analyze marketing metrics and prepare reports",
      "Collaborate with designers for visual content"
    ],
    reporting: "Reports to the Marketing Manager",
    teamCollaboration: "Works closely with content creators, designers, and the sales team.",
    salary: "$50,000 - $65,000 per year",
    incentives: "Quarterly performance bonuses based on campaign success",
    benefits: [
      "Health and dental insurance",
      "Remote work 3 days per week",
      "20 days PTO annually",
      "Marketing conference attendance",
      "Team retreats"
    ]
  },
  {
    id: 3,
    title: "HR Coordinator",
    department: "HR",
    location: "In-Office",
    experienceLevel: "Entry",
    type: "Full-Time",
    status: "Open",
    skills: ["HR Administration", "Recruitment", "Employee Relations", "HRIS"],
    responsibilities: [
      "Assist with full-cycle recruitment process",
      "Coordinate onboarding for new employees",
      "Maintain personnel records and HRIS",
      "Support employee engagement initiatives",
      "Address basic HR inquiries from staff"
    ],
    reporting: "Reports to the HR Manager",
    teamCollaboration: "Works with all departments for recruitment and employee relations.",
    salary: "$45,000 - $55,000 per year",
    benefits: [
      "Comprehensive health benefits",
      "Professional certification support",
      "15 days PTO",
      "Discounted gym membership",
      "Employee assistance program"
    ]
  },
  {
    id: 4,
    title: "Backend Engineer",
    department: "Tech",
    location: "Remote",
    experienceLevel: "Senior",
    type: "Full-Time",
    status: "Open",
    skills: ["Node.js", "Python", "Databases", "Cloud Services", "Microservices"],
    responsibilities: [
      "Design and implement scalable backend services",
      "Optimize database performance and queries",
      "Deploy and manage cloud infrastructure",
      "Implement security best practices",
      "Mentor junior engineers and lead technical projects"
    ],
    reporting: "Reports to the Engineering Director",
    teamCollaboration: "Works with the entire engineering team and product managers.",
    salary: "$120,000 - $150,000 per year",
    incentives: "Performance bonuses and equity options",
    benefits: [
      "Premium health coverage",
      "Unlimited PTO",
      "401(k) matching",
      "Professional development fund",
      "Home office setup allowance",
      "Annual company retreat"
    ]
  },
  {
    id: 5,
    title: "Operations Manager",
    department: "Operations",
    location: "In-Office",
    experienceLevel: "Lead",
    type: "Full-Time",
    status: "Open",
    skills: ["Project Management", "Process Optimization", "Team Leadership", "Budgeting"],
    responsibilities: [
      "Oversee day-to-day operational activities",
      "Develop and implement operational policies and procedures",
      "Manage team performance and development",
      "Create and control operational budgets",
      "Identify and implement process improvements"
    ],
    reporting: "Reports to the COO",
    teamCollaboration: "Works with all department heads and the leadership team.",
    salary: "$95,000 - $120,000 per year",
    incentives: "Annual bonus based on company and department performance",
    benefits: [
      "Executive health plan",
      "25 days PTO",
      "Retirement plan with matching",
      "Leadership development program",
      "Company car allowance"
    ]
  },
  {
    id: 6,
    title: "Content Writer",
    department: "Marketing",
    location: "Remote",
    experienceLevel: "Mid",
    type: "Part-Time",
    status: "Open",
    skills: ["Copywriting", "SEO", "Content Strategy", "Research"],
    responsibilities: [
      "Create engaging blog posts, articles, and website copy",
      "Research industry topics and trends",
      "Apply SEO best practices to written content",
      "Edit and proofread content for accuracy and clarity",
      "Collaborate with the marketing team on content strategy"
    ],
    reporting: "Reports to the Content Marketing Manager",
    teamCollaboration: "Works with SEO specialists, designers, and social media team.",
    salary: "$30 - $45 per hour",
    benefits: [
      "Flexible schedule",
      "Professional development opportunities",
      "Performance-based bonuses",
      "Access to premium writing tools"
    ]
  },
  {
    id: 7,
    title: "Data Analyst",
    department: "Tech",
    location: "Hybrid",
    experienceLevel: "Mid",
    type: "Full-Time",
    status: "Closed",
    skills: ["SQL", "Python", "Data Visualization", "Statistical Analysis"],
    responsibilities: [
      "Analyze complex data sets to identify trends and insights",
      "Create dashboards and visualizations for stakeholders",
      "Develop and maintain reporting systems",
      "Support data-driven decision making across departments",
      "Clean and validate data for accuracy"
    ],
    reporting: "Reports to the Data Science Lead",
    teamCollaboration: "Works with product, marketing, and executive teams.",
    salary: "$75,000 - $95,000 per year",
    benefits: [
      "Health and dental coverage",
      "Flexible work arrangement (3 days remote)",
      "Continued education support",
      "20 days PTO annually",
      "Wellness program"
    ]
  },
  {
    id: 8,
    title: "Executive Assistant",
    department: "Operations",
    location: "In-Office",
    experienceLevel: "Mid",
    type: "Full-Time",
    status: "Open",
    skills: ["Calendar Management", "Communication", "Organization", "Discretion"],
    responsibilities: [
      "Manage executive's calendar and schedule meetings",
      "Coordinate travel arrangements and prepare itineraries",
      "Handle sensitive information with confidentiality",
      "Prepare reports and presentations",
      "Liaise with internal teams and external partners"
    ],
    reporting: "Reports directly to the CEO",
    teamCollaboration: "Interfaces with leadership team and all departments.",
    salary: "$60,000 - $75,000 per year",
    benefits: [
      "Comprehensive benefits package",
      "15 days PTO",
      "Professional development opportunities",
      "Employee wellness program"
    ]
  },
  {
    id: 9,
    title: "Social Media Intern",
    department: "Marketing",
    location: "Hybrid",
    experienceLevel: "Entry",
    type: "Internship",
    status: "Open",
    isUrgent: true,
    skills: ["Social Media Platforms", "Content Creation", "Analytics", "Creativity"],
    responsibilities: [
      "Assist in creating social media content for various platforms",
      "Monitor and engage with audience comments and messages",
      "Research trends and competitors in the social media space",
      "Help track social media metrics and prepare reports",
      "Support the marketing team with campaign execution"
    ],
    reporting: "Reports to the Social Media Manager",
    teamCollaboration: "Works with the marketing team and content creators.",
    salary: "$18 - $22 per hour",
    benefits: [
      "Flexible schedule (20-25 hours per week)",
      "Possibility of full-time employment",
      "Hands-on learning experience",
      "Mentorship from marketing professionals"
    ]
  }
];
