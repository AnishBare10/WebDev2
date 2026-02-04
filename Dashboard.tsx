
import React from 'react';
import { 
  Users, 
  TrendingUp, 
  MessageCircle, 
  Eye,
  ArrowUpRight,
  ArrowDownRight,
  Twitter,
  Instagram,
  Linkedin,
  Facebook
} from 'lucide-react';
import { platformMetrics, recentPosts } from '../data/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { engagementHistory } from '../data/mockData';

export const Dashboard: React.FC = () => {
  const getIcon = (platform: string) => {
    switch (platform) {
      case 'twitter': return <Twitter className="text-sky-400 w-5 h-5" />;
      case 'instagram': return <Instagram className="text-pink-400 w-5 h-5" />;
      case 'linkedin': return <Linkedin className="text-blue-400 w-5 h-5" />;
      case 'facebook': return <Facebook className="text-indigo-400 w-5 h-5" />;
      default: return <Users className="w-5 h-5" />;
    }
  };

  const totalFollowers = platformMetrics.reduce((acc, curr) => acc + curr.followers, 0);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-black text-white tracking-tight">Executive Dashboard</h1>
        <p className="text-slate-400 font-medium mt-1">Algorithmic insights into your global audience reach.</p>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Followers" 
          value={totalFollowers.toLocaleString()} 
          change={12.5} 
          icon={<Users className="w-6 h-6 text-violet-400" />} 
          colorClass="violet"
        />
        <StatCard 
          title="Avg. Engagement" 
          value="4.15%" 
          change={0.8} 
          icon={<MessageCircle className="w-6 h-6 text-emerald-400" />} 
          colorClass="emerald"
        />
        <StatCard 
          title="Total Reach" 
          value="202.4k" 
          change={22.3} 
          icon={<Eye className="w-6 h-6 text-blue-400" />} 
          colorClass="blue"
        />
        <StatCard 
          title="Growth Velocity" 
          value="+1.2k/mo" 
          change={-2.4} 
          icon={<TrendingUp className="w-6 h-6 text-rose-400" />} 
          colorClass="rose"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Engagement Chart */}
        <div className="lg:col-span-2 bg-[#151726] p-8 rounded-2xl border border-[#252945] shadow-xl">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-xl text-white">Performance Trends</h3>
            <div className="flex bg-[#0a0b14] p-1 rounded-xl border border-[#252945]">
              <button className="px-4 py-1.5 text-xs font-bold bg-[#1c1f35] text-violet-400 rounded-lg shadow-sm border border-[#2d314d]">7 Days</button>
              <button className="px-4 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-300">30 Days</button>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={engagementHistory}>
                <defs>
                  <linearGradient id="colorViolet" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#252945" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12, fontWeight: 500}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12, fontWeight: 500}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1c1f35', borderRadius: '16px', border: '1px solid #2d314d', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.5)', padding: '12px' }}
                  itemStyle={{ color: '#f1f5f9' }}
                />
                <Area type="monotone" dataKey="instagram" stroke="#8b5cf6" strokeWidth={4} fillOpacity={1} fill="url(#colorViolet)" />
                <Area type="monotone" dataKey="twitter" stroke="#38bdf8" strokeWidth={3} fillOpacity={0} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Platform Breakdown */}
        <div className="bg-[#151726] p-8 rounded-2xl border border-[#252945] shadow-xl">
          <h3 className="font-bold text-xl text-white mb-8">Audience Share</h3>
          <div className="space-y-6">
            {platformMetrics.map((m) => (
              <div key={m.platform} className="flex items-center justify-between group cursor-default">
                <div className="flex items-center">
                  <div className="p-2.5 bg-[#1c1f35] rounded-xl mr-4 group-hover:bg-[#252945] transition-all border border-[#2d314d]">
                    {getIcon(m.platform)}
                  </div>
                  <div>
                    <p className="text-sm font-bold capitalize text-slate-200">{m.platform}</p>
                    <p className="text-xs text-slate-500 font-medium">{m.followers.toLocaleString()} fans</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-black text-white">{m.engagement}%</p>
                  <p className={`text-xs font-bold flex items-center justify-end mt-0.5 ${m.growth >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {m.growth >= 0 ? <ArrowUpRight className="w-3 h-3 mr-0.5" /> : <ArrowDownRight className="w-3 h-3 mr-0.5" />}
                    {Math.abs(m.growth)}%
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-10 py-3.5 text-violet-400 font-bold bg-violet-400/10 rounded-2xl hover:bg-violet-400/20 transition-all border border-violet-400/20 active:scale-[0.97]">
            Export Narrative Data
          </button>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-[#151726] p-8 rounded-2xl border border-[#252945] shadow-xl overflow-hidden">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-bold text-xl text-white">Recent Engagement</h3>
          <button className="text-sm font-bold text-violet-400 hover:text-violet-300">View All Staged Content</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-slate-500 text-xs uppercase tracking-widest">
                <th className="pb-6 font-bold">Content Asset</th>
                <th className="pb-6 font-bold">Channel</th>
                <th className="pb-6 font-bold">Activity</th>
                <th className="pb-6 font-bold">Impressions</th>
                <th className="pb-6 font-bold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#252945]">
              {recentPosts.map((post) => (
                <tr key={post.id} className="text-sm group hover:bg-[#1c1f35]/50 transition-colors">
                  <td className="py-5 pr-4">
                    <div className="flex items-center">
                      {post.imageUrl && <img src={post.imageUrl} className="w-12 h-12 rounded-xl mr-4 object-cover shadow-lg group-hover:scale-110 transition-transform duration-500" alt="Post" />}
                      <p className="line-clamp-1 max-w-xs font-medium text-slate-200">{post.content}</p>
                    </div>
                  </td>
                  <td className="py-5 capitalize font-bold text-slate-400 group-hover:text-violet-400 transition-colors">{post.platform}</td>
                  <td className="py-5 font-bold text-slate-200">1.2k likes</td>
                  <td className="py-5 text-slate-400">12.5k views</td>
                  <td className="py-5">
                    <span className={`px-3 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider border ${
                      post.status === 'published' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                    }`}>
                      {post.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const StatCard: React.FC<{ title: string; value: string; change: number; icon: React.ReactNode; colorClass: string }> = ({ title, value, change, icon, colorClass }) => (
  <div className="bg-[#151726] p-6 rounded-2xl border border-[#252945] shadow-lg hover:border-violet-500/30 transition-all group active:scale-[0.98]">
    <div className="flex items-center justify-between mb-5">
      <div className={`p-3 bg-${colorClass}-500/10 rounded-xl group-hover:scale-110 transition-transform duration-300`}>{icon}</div>
      <div className={`flex items-center px-2 py-1 rounded-lg text-xs font-black ${change >= 0 ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'}`}>
        {change >= 0 ? <ArrowUpRight className="w-3 h-3 mr-0.5" /> : <ArrowDownRight className="w-3 h-3 mr-0.5" />}
        {Math.abs(change)}%
      </div>
    </div>
    <div>
      <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">{title}</p>
      <p className="text-3xl font-black text-white mt-2 tracking-tight">{value}</p>
    </div>
  </div>
);
