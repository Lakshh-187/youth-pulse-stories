
export interface Founder {
  id: string;
  name: string;
  avatar: string;
  date: string;
}

export interface Interview {
  id: string;
  title: string;
  founder: Founder;
  status: 'successful' | 'failed';
  categories: string[];
  country: string;
  revenue?: string;
  failureCause?: string;
}
