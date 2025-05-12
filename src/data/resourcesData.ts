
export interface Resource {
  id: string;
  type: 'Report' | 'PDF' | 'Video' | 'Innovation' | 'Policy Doc' | 'Case Study' | 'Whitepaper';
  title: string;
  publishedOn: string;
  tags: string[];
  lovedBy: number;
  thumbnail: string;
  description: string;
  downloadUrl?: string;
  externalLink?: string;
}

export const resourcesData: Resource[] = [
  {
    id: '1',
    type: 'PDF',
    title: 'Student Grant Policy 2024',
    publishedOn: 'Apr 2024',
    tags: ['Policy', 'Grants'],
    lovedBy: 56,
    thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=80',
    description: 'Comprehensive guide to student grants and policies for the year 2024, including eligibility criteria and application process.',
    downloadUrl: '#',
  },
  {
    id: '2',
    type: 'Video',
    title: 'Innovation Talks by Youth 2025',
    publishedOn: 'Jan 2025',
    tags: ['Talks', 'Uniford'],
    lovedBy: 132,
    thumbnail: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=500&q=80',
    description: 'A series of talks by young innovators sharing their experiences and insights on creating impactful solutions.',
    externalLink: 'https://youtube.com',
  },
  {
    id: '3',
    type: 'Innovation',
    title: 'Waterless Toilet Innovation',
    publishedOn: 'Mar 2025',
    tags: ['Innovation', 'Eco'],
    lovedBy: 78,
    thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80',
    description: 'Revolutionary waterless toilet design that helps conserve water while providing sanitation solutions for remote areas.',
    downloadUrl: '#',
  },
  {
    id: '4',
    type: 'Report',
    title: 'Uniford 2024 Annual Impact Report',
    publishedOn: 'Dec 2024',
    tags: ['Impact', 'Annual'],
    lovedBy: 205,
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80',
    description: 'Detailed report showcasing the impact of Uniford Foundation's initiatives throughout 2024.',
    downloadUrl: '#',
  },
  {
    id: '5',
    type: 'Case Study',
    title: 'Rural Education Transformation',
    publishedOn: 'Feb 2025',
    tags: ['Education', 'Rural'],
    lovedBy: 92,
    thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=500&q=80',
    description: 'Case study on how digital tools transformed education access in rural areas during 2023-2024.',
    downloadUrl: '#',
  },
  {
    id: '6',
    type: 'Whitepaper',
    title: 'Future of Learning: AI Integration',
    publishedOn: 'Mar 2025',
    tags: ['AI', 'Education'],
    lovedBy: 145,
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80',
    description: 'Exploring the potential and challenges of integrating AI into educational systems.',
    downloadUrl: '#',
  },
  {
    id: '7',
    type: 'Policy Doc',
    title: 'Youth Empowerment Framework',
    publishedOn: 'Jan 2025',
    tags: ['Policy', 'Youth'],
    lovedBy: 67,
    thumbnail: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=500&q=80',
    description: 'A comprehensive framework for empowering youth through education, innovation, and leadership.',
    downloadUrl: '#',
  },
  {
    id: '8',
    type: 'PDF',
    title: 'Digital Inclusion Strategy',
    publishedOn: 'Feb 2025',
    tags: ['Digital', 'Inclusion'],
    lovedBy: 89,
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80',
    description: 'Strategic approach to ensure digital inclusion across diverse communities and demographics.',
    downloadUrl: '#',
  },
];
