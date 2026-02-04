
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { Analytics } from './components/Analytics';
import { Scheduler } from './components/Scheduler';
import { View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('dashboard');

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'analytics':
        return <Analytics />;
      case 'scheduler':
        return <Scheduler />;
      case 'profile':
        return (
          <div className="bg-[#151726] p-8 rounded-2xl shadow-xl border border-[#252945]">
            <h2 className="text-2xl font-bold mb-6 text-white">User Profile</h2>
            <div className="flex items-center space-x-6 mb-8">
              <div className="relative">
                <img src="https://picsum.photos/100/100" alt="Avatar" className="w-24 h-24 rounded-2xl border-4 border-violet-500/20 object-cover shadow-lg" />
                <div className="absolute -bottom-2 -right-2 bg-violet-600 p-1.5 rounded-lg border-2 border-[#151726] shadow-sm">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Alex Thompson</p>
                <p className="text-violet-400 font-medium">Social Media Manager</p>
                <p className="text-slate-400 text-sm mt-1">Premium Plan Active</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-[#1c1f35] rounded-xl border border-[#2d314d]">
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Email Address</p>
                  <p className="font-semibold text-slate-200">alex@socialstream.com</p>
                </div>
                <div className="p-4 bg-[#1c1f35] rounded-xl border border-[#2d314d]">
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Member Since</p>
                  <p className="font-semibold text-slate-200">January 2024</p>
                </div>
              </div>
              <button className="w-full mt-4 py-3 bg-violet-600 text-white rounded-xl font-bold hover:bg-violet-700 transition-all shadow-lg shadow-violet-900/40 active:scale-[0.98]">
                Update Profile Settings
              </button>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout currentView={currentView} onNavigate={setCurrentView}>
      {renderContent()}
    </Layout>
  );
};

export default App;
