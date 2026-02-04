
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  Legend,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { BarChart3 } from 'lucide-react';
import { engagementHistory, platformMetrics } from '../data/mockData';

export const Analytics: React.FC = () => {
  const pieData = platformMetrics.map(m => ({ name: m.platform, value: m.followers }));
  const COLORS = ['#8b5cf6', '#ec4899', '#38bdf8', '#6366f1'];

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-black text-white tracking-tight">Advanced Analytics</h1>
        <p className="text-slate-400 font-medium">Deep algorithmic insights into content resonance patterns.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Followers Growth */}
        <div className="bg-[#151726] p-8 rounded-2xl border border-[#252945] shadow-xl">
          <h3 className="font-bold text-xl mb-8 text-white">Platform Engagement Velocity</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={engagementHistory}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#252945" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12, fontWeight: 500}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12, fontWeight: 500}} />
                <Tooltip 
                  cursor={{fill: '#1c1f35'}} 
                  contentStyle={{ backgroundColor: '#1c1f35', borderRadius: '16px', border: '1px solid #2d314d', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.5)' }} 
                  itemStyle={{ color: '#f1f5f9' }}
                />
                <Legend iconType="circle" wrapperStyle={{paddingTop: '20px'}} />
                <Bar dataKey="twitter" fill="#38bdf8" radius={[6, 6, 0, 0]} barSize={16} />
                <Bar dataKey="instagram" fill="#8b5cf6" radius={[6, 6, 0, 0]} barSize={16} />
                <Bar dataKey="linkedin" fill="#6366f1" radius={[6, 6, 0, 0]} barSize={16} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Traffic Source */}
        <div className="bg-[#151726] p-8 rounded-2xl border border-[#252945] shadow-xl">
          <h3 className="font-bold text-xl mb-8 text-white">Audience Distribution</h3>
          <div className="h-80 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={110}
                  paddingAngle={8}
                  dataKey="value"
                  stroke="none"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                   contentStyle={{ backgroundColor: '#1c1f35', borderRadius: '16px', border: '1px solid #2d314d', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.5)' }}
                   itemStyle={{ color: '#f1f5f9' }}
                />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-[#151726] p-8 rounded-2xl border border-[#252945] shadow-xl">
        <h3 className="font-bold text-xl text-white mb-10">Strategic Demographics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <p className="text-xs font-black text-slate-500 uppercase tracking-widest border-b border-[#252945] pb-2">Target Age Groups</p>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-300">18 - 24 (Gen Z)</span>
                <span className="text-violet-400 font-black">42%</span>
              </div>
              <div className="w-full bg-[#1c1f35] h-2.5 rounded-full overflow-hidden border border-[#2d314d]">
                <div className="bg-violet-500 h-full w-[42%] rounded-full shadow-[0_0_12px_rgba(139,92,246,0.5)]"></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-300">25 - 34 (Millennial)</span>
                <span className="text-violet-400 font-black">35%</span>
              </div>
              <div className="w-full bg-[#1c1f35] h-2.5 rounded-full overflow-hidden border border-[#2d314d]">
                <div className="bg-violet-400 h-full w-[35%] rounded-full"></div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-xs font-black text-slate-500 uppercase tracking-widest border-b border-[#252945] pb-2">Global Heat Hubs</p>
            <div className="space-y-4">
              <div className="flex items-center justify-between group">
                <span className="text-sm font-bold text-slate-300 group-hover:text-emerald-400 transition-colors">North America</span>
                <span className="text-emerald-400 font-black">58%</span>
              </div>
              <div className="flex items-center justify-between group">
                <span className="text-sm font-bold text-slate-300 group-hover:text-emerald-400 transition-colors">Western Europe</span>
                <span className="text-emerald-400 font-black">15%</span>
              </div>
              <div className="flex items-center justify-between group">
                <span className="text-sm font-bold text-slate-300 group-hover:text-emerald-400 transition-colors">East Asia</span>
                <span className="text-emerald-400 font-black">12%</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xs font-black text-slate-500 uppercase tracking-widest border-b border-[#252945] pb-2">Viral Catalyst</p>
            <div className="bg-violet-500/5 p-6 rounded-2xl border border-violet-500/20 shadow-inner relative overflow-hidden group hover:bg-violet-500/10 transition-all duration-500">
              <div className="absolute top-0 right-0 p-2 opacity-5 group-hover:opacity-20 transition-opacity">
                 <BarChart3 className="w-16 h-16 text-violet-400" />
              </div>
              <p className="text-violet-400 font-black text-lg">Wednesdays @ 2:00 PM</p>
              <p className="text-slate-400 text-xs mt-2 font-bold leading-relaxed">Optimal slot identified via neural pattern analysis. Engagement probability increases by <span className="text-violet-300">+22%</span> during this window.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
