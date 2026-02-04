
export interface PlatformMetric {
  platform: 'twitter' | 'instagram' | 'linkedin' | 'facebook';
  followers: number;
  reach: number;
  engagement: number;
  growth: number;
}

export interface ChartData {
  name: string;
  twitter: number;
  instagram: number;
  linkedin: number;
  total?: number;
}

export interface Post {
  id: string;
  platform: 'twitter' | 'instagram' | 'linkedin' | 'facebook';
  content: string;
  status: 'scheduled' | 'published' | 'draft';
  scheduledTime?: string;
  imageUrl?: string;
}

export type View = 'dashboard' | 'analytics' | 'scheduler' | 'profile';
