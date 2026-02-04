
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BarChart3, 
  Calendar, 
  User, 
  Bell, 
  Search,
  Menu,
  X,
  Zap
} from 'lucide-react';
import { View } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentView: View;
  onNavigate: (view: View) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentView, onNavigate }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'scheduler', label: 'Schedule', icon: Calendar },
    { id: 'profile', label: 'Account', icon: User },
  ];

  return (
    <div className="min-h-screen flex text-slate-200 bg-[#0a0b14]">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-[#111322] border-r border-[#252945] transition-all duration-300 flex flex-col fixed h-full z-40 shadow-2xl shadow-black/50`}>
        <div className="h-20 flex items-center px-6 border-b border-[#252945]">
          <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-900/40">
            <Zap className="w-6 h-6 text-white fill-current" />
          </div>
          {isSidebarOpen && <span className="ml-3 font-extrabold text-xl tracking-tight text-white">SocialStream</span>}
        </div>

        <nav className="flex-1 py-8 px-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id as View)}
              className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-300 group ${
                currentView === item.id 
                  ? 'bg-violet-600 text-white font-bold shadow-lg shadow-violet-600/20' 
                  : 'text-slate-400 hover:bg-[#1c1f35] hover:text-violet-400'
              }`}
            >
              <item.icon className={`w-5 h-5 transition-colors ${currentView === item.id ? 'text-white' : 'group-hover:text-violet-400'}`} />
              {isSidebarOpen && <span className="ml-3 tracking-wide">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-[#252945]">
          <button 
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="w-full flex items-center justify-center p-3 rounded-xl text-slate-500 hover:bg-[#1c1f35] hover:text-violet-400 transition-all border border-transparent hover:border-[#2d314d]"
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Header */}
        <header className="h-20 bg-[#0a0b14]/70 backdrop-blur-xl border-b border-[#252945] flex items-center justify-between px-10 sticky top-0 z-30">
          <div className="relative w-96">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-500" />
            </span>
            <input
              type="text"
              className="block w-full pl-10 pr-4 py-2.5 border border-[#252945] rounded-xl leading-5 bg-[#151726] text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500/50 sm:text-sm transition-all"
              placeholder="Search metrics..."
            />
          </div>

          <div className="flex items-center space-x-6">
            <button className="p-2.5 text-slate-400 hover:text-violet-400 bg-[#151726] border border-[#252945] rounded-xl relative transition-all hover:border-violet-500/30">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border border-[#151726]"></span>
            </button>
            <div className="h-8 w-px bg-[#252945]"></div>
            <div className="flex items-center space-x-4 group cursor-pointer">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-white group-hover:text-violet-400 transition-colors">Alex Thompson</p>
                <p className="text-xs text-slate-500 font-medium">Digital Strategist</p>
              </div>
              <img
                className="h-10 w-10 rounded-xl ring-2 ring-[#252945] object-cover shadow-sm group-hover:ring-violet-500/50 transition-all"
                src="https://picsum.photos/40/40"
                alt="Profile"
              />
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="p-10 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};
