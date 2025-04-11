
import { Interview } from '@/types/interviews';

// Sample data for the interviews
export const interviewsData: Interview[] = [
  {
    id: '1',
    title: "Founder's Insights on Scaling a B2B API Fintech Product",
    founder: {
      id: 'andrey',
      name: 'Andrey Korchak',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      date: 'December 7, 2023'
    },
    status: 'successful',
    categories: ['Finances'],
    country: 'Germany',
    revenue: '$100k-$500k/mo'
  },
  {
    id: '2',
    title: "Founder's Journey to Revolutionize the Travel Industry",
    founder: {
      id: 'ivan',
      name: 'Ivan Saprov',
      avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
      date: 'November 17, 2023'
    },
    status: 'successful',
    categories: ['Travel'],
    country: 'United States',
    revenue: '$50k-$100k/mo'
  },
  {
    id: '3',
    title: "How Crypto Hype Misled A Startup From Solving Real Problems",
    founder: {
      id: 'dennis',
      name: 'Dennis Ramírez Bernal',
      avatar: 'https://randomuser.me/api/portraits/men/62.jpg',
      date: 'October 18, 2023'
    },
    status: 'failed',
    categories: ['Finances'],
    country: 'Spain',
    revenue: '$0-$10k/mo',
    failureCause: 'No Market Need'
  },
  {
    id: '4',
    title: "Building an Education Platform for Rural Communities",
    founder: {
      id: 'maria',
      name: 'Maria Sanchez',
      avatar: 'https://randomuser.me/api/portraits/women/54.jpg',
      date: 'September 25, 2023'
    },
    status: 'successful',
    categories: ['Education'],
    country: 'Mexico',
    revenue: '$10k-$50k/mo'
  },
  {
    id: '5',
    title: "Why Our Healthcare AI Solution Failed to Gain Traction",
    founder: {
      id: 'james',
      name: 'James Wilson',
      avatar: 'https://randomuser.me/api/portraits/men/77.jpg',
      date: 'August 12, 2023'
    },
    status: 'failed',
    categories: ['Healthcare', 'AI'],
    country: 'Canada',
    revenue: '$0-$10k/mo',
    failureCause: 'Regulatory Challenges'
  },
  {
    id: '6',
    title: "Disrupting Fast Fashion with Sustainable Materials",
    founder: {
      id: 'sophia',
      name: 'Sophia Lin',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      date: 'July 5, 2023'
    },
    status: 'successful',
    categories: ['Fashion', 'Sustainability'],
    country: 'Sweden',
    revenue: '$50k-$100k/mo'
  }
];

// Get unique categories, countries, revenue ranges, and failure causes for filters
export const uniqueCategories = Array.from(new Set(interviewsData.flatMap(interview => interview.categories)));
export const uniqueCountries = Array.from(new Set(interviewsData.map(interview => interview.country)));
export const uniqueRevenues = Array.from(new Set(interviewsData.map(interview => interview.revenue).filter(Boolean) as string[]));
export const uniqueFailureCauses = Array.from(new Set(interviewsData.map(interview => interview.failureCause).filter(Boolean) as string[]));
