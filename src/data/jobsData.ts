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
  noticePeriod?: string;
  selectionProcess?: string;
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
  },
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
    salary: "$85,000 - $110,000 per year",
    benefits: [
      "Health and dental coverage",
      "Flexible work arrangement",
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
    salary: "$60,000 - $80,000 per year",
    benefits: [
      "Remote work benefits",
      "Health insurance",
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
    salary: "$55,000 - $75,000 per year",
    benefits: [
      "Creative software subscriptions",
      "Remote work flexibility",
      "Health benefits",
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
    salary: "$65,000 - $85,000 per year",
    benefits: [
      "Hybrid work arrangement",
      "Health insurance",
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
    salary: "$50,000 - $65,000 per year",
    benefits: [
      "Health and dental insurance",
      "Retirement plans",
      "Paid time off",
      "Professional development",
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
    salary: "$20 - $25 per hour",
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
    salary: "$70,000 - $90,000 per year",
    benefits: [
      "Hybrid work arrangement",
      "Health insurance",
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
    salary: "$100,000 - $130,000 per year",
    benefits: [
      "Executive health plan",
      "Leadership development program",
      "Travel allowance",
      "Executive retreats",
      "Performance-based bonuses"
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
    salary: "$90,000 - $120,000 per year",
    benefits: [
      "Comprehensive health coverage",
      "Leadership training",
      "Retirement benefits",
      "Performance bonuses",
      "Professional development allowance"
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
    salary: "$40,000 - $60,000 per year (part-time)",
    benefits: [
      "Flexible schedule",
      "Travel opportunities",
      "Networking events",
      "Brand merchandise",
      "Professional development"
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
    salary: "$45,000 - $60,000 per year",
    benefits: [
      "Health insurance",
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
    salary: "$50 - $150 per hour",
    benefits: [
      "Flexible schedule",
      "Travel opportunities",
      "Speaker training",
      "Industry networking",
      "Platform for personal brand building"
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
    salary: "$80,000 - $105,000 per year",
    benefits: [
      "Comprehensive benefits package",
      "Performance bonuses",
      "Business development training",
      "Networking event allowance",
      "Professional development fund"
    ],
    noticePeriod: "18 days",
    selectionProcess: "Selection based on performance during notice period"
  }
];
