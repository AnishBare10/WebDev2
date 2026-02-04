
import { PlatformMetric, ChartData, Post } from '../types';

export const platformMetrics: PlatformMetric[] = [
  { platform: 'twitter', followers: 12500, reach: 45000, engagement: 4.2, growth: 12 },
  { platform: 'instagram', followers: 28400, reach: 120000, engagement: 6.8, growth: 24 },
  { platform: 'linkedin', followers: 5200, reach: 15000, engagement: 3.1, growth: 8 },
  { platform: 'facebook', followers: 8900, reach: 22000, engagement: 2.5, growth: -2 },
];

export const engagementHistory: ChartData[] = [
  { name: 'Mon', twitter: 400, instagram: 240, linkedin: 180 },
  { name: 'Tue', twitter: 300, instagram: 139, linkedin: 210 },
  { name: 'Wed', twitter: 200, instagram: 980, linkedin: 290 },
  { name: 'Thu', twitter: 278, instagram: 390, linkedin: 200 },
  { name: 'Fri', twitter: 189, instagram: 480, linkedin: 181 },
  { name: 'Sat', twitter: 239, instagram: 380, linkedin: 250 },
  { name: 'Sun', twitter: 349, instagram: 430, linkedin: 210 },
];

export const recentPosts: Post[] = [
  {
    id: '1',
    platform: 'instagram',
    content: 'Launching our new summer collection today! 🚀 #fashion #summer',
    status: 'published',
    imageUrl: 'https://picsum.photos/400/400?random=1'
  },
  {
    id: '2',
    platform: 'twitter',
    content: 'We just reached 10k followers! Thank you everyone for the support. ❤️',
    status: 'published',
  },
  {
    id: '3',
    platform: 'linkedin',
    content: 'Excited to announce our partnership with GlobalTech Corp. Read more about it on our blog.',
    status: 'scheduled',
    scheduledTime: '2024-06-15 14:00'
  }
];
