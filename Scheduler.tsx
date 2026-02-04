
import React, { useState } from 'react';
import { 
  Plus, 
  Calendar as CalendarIcon, 
  Image as ImageIcon, 
  Send, 
  Sparkles, 
  Loader2,
  AlertCircle,
  Zap
} from 'lucide-react';
import { generateSmartCaption, getPostInsights } from '../services/geminiService';
import { Post } from '../types';

export const Scheduler: React.FC = () => {
  const [content, setContent] = useState('');
  const [platform, setPlatform] = useState<'twitter' | 'instagram' | 'linkedin' | 'facebook'>('instagram');
  const [isGenerating, setIsGenerating] = useState(false);
  const [insights, setInsights] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSmartCaption = async () => {
    if (!content) return;
    setIsGenerating(true);
    const caption = await generateSmartCaption(content, platform);
    setContent(caption);
    setIsGenerating(false);
  };

  const handleGetInsights = async () => {
    if (!content) return;
    setIsAnalyzing(true);
    const data = await getPostInsights(content);
    setInsights(data);
    setIsAnalyzing(false);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <div>
        <h1 className="text-3xl font-black text-white tracking-tight">Content Orchestrator</h1>
        <p className="text-slate-400 font-medium">Engineer and deploy your narrative across the digital frontier.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Editor */}
        <div className="bg-[#151726] p-8 rounded-3xl border border-[#252945] shadow-2xl space-y-8 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="flex bg-[#0a0b14] p-1.5 rounded-2xl border border-[#252945]">
            {(['instagram', 'twitter', 'linkedin', 'facebook'] as const).map((p) => (
              <button
                key={p}
                onClick={() => setPlatform(p)}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-black capitalize transition-all duration-300 ${
                  platform === p 
                    ? 'bg-violet-600 text-white shadow-xl shadow-violet-600/20' 
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          <div className="relative group">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Inject your narrative here..."
              className="w-full h-64 p-6 bg-[#0a0b14] border-2 border-transparent rounded-2xl focus:border-violet-500/20 focus:ring-0 focus:bg-[#111322] transition-all resize-none text-slate-200 font-medium leading-relaxed placeholder-slate-600"
            />
            <button
              onClick={handleSmartCaption}
              disabled={isGenerating || !content}
              className="absolute bottom-6 right-6 flex items-center space-x-2 bg-violet-600 px-5 py-2.5 rounded-xl shadow-2xl text-sm font-black text-white hover:bg-violet-500 transition-all disabled:opacity-50 disabled:grayscale hover:scale-105 active:scale-95"
            >
              {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
              <span>AI Synthesize</span>
            </button>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex space-x-3">
              <button className="p-3.5 text-slate-400 hover:bg-violet-500/10 hover:text-violet-400 rounded-xl transition-all border border-[#252945] hover:border-violet-500/30">
                <ImageIcon className="w-6 h-6" />
              </button>
              <button className="p-3.5 text-slate-400 hover:bg-violet-500/10 hover:text-violet-400 rounded-xl transition-all border border-[#252945] hover:border-violet-500/30">
                <CalendarIcon className="w-6 h-6" />
              </button>
            </div>
            <button className="flex items-center space-x-3 bg-white text-[#0a0b14] px-10 py-4 rounded-2xl font-black hover:bg-slate-200 transition-all shadow-xl shadow-white/5 active:scale-[0.97]">
              <Send className="w-5 h-5" />
              <span>Initiate Broadcast</span>
            </button>
          </div>
        </div>

        {/* Preview & AI Insights */}
        <div className="space-y-8">
          <div className="bg-[#151726]/50 p-8 rounded-3xl border-2 border-dashed border-[#252945] relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-violet-600/10 blur-3xl rounded-full"></div>
            <p className="text-[10px] font-black text-violet-400 uppercase tracking-widest mb-6 inline-block bg-violet-500/10 px-3 py-1.5 rounded-lg border border-violet-500/20 shadow-lg">Simulation Environment</p>
            <div className="bg-[#1c1f35] p-6 rounded-2xl shadow-2xl border border-[#2d314d] transform perspective-1000 rotate-x-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center border border-violet-500/30">
                   <Zap className="w-5 h-5 text-violet-400 fill-current" />
                </div>
                <div>
                  <p className="text-sm font-black text-white">SocialStream Master</p>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-wider">{platform} Virtual Frame</p>
                </div>
              </div>
              <p className="text-sm text-slate-300 font-medium whitespace-pre-wrap min-h-[6rem] leading-relaxed italic border-l-2 border-violet-500/30 pl-4 bg-violet-500/5 py-4 rounded-r-lg">
                {content || <span className="text-slate-600">Your conceptual narrative will manifest here...</span>}
              </p>
            </div>
          </div>

          <div className="bg-[#151726] p-8 rounded-3xl border border-[#252945] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/5 -mr-16 -mt-16 rounded-full blur-2xl"></div>
            <div className="flex items-center justify-between mb-6 relative">
              <h4 className="font-black text-white flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-violet-400" />
                <span className="tracking-tight">Content Intelligence Engine</span>
              </h4>
              <button 
                onClick={handleGetInsights}
                disabled={isAnalyzing || !content}
                className="text-[10px] font-black text-violet-400 hover:text-violet-300 disabled:opacity-50 transition-colors uppercase tracking-widest bg-violet-500/10 px-2 py-1 rounded"
              >
                {isAnalyzing ? 'Processing...' : 'Neural Scan'}
              </button>
            </div>
            
            {insights ? (
              <div className="text-sm text-slate-300 leading-relaxed bg-[#1c1f35] p-6 rounded-2xl border border-violet-500/20 font-medium relative shadow-inner">
                <div className="absolute top-0 left-0 w-1 h-full bg-violet-600 rounded-l-2xl"></div>
                {insights}
              </div>
            ) : (
              <div className="flex items-start space-x-4 text-sm text-slate-500 bg-[#1c1f35]/50 p-6 rounded-2xl border border-[#252945] relative">
                <AlertCircle className="w-6 h-6 mt-0.5 flex-shrink-0 text-slate-600" />
                <p className="font-medium leading-relaxed">Provide a narrative and trigger the scanner to evaluate sentiment polarity and viral probability based on real-time data trends.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Queue */}
      <div className="bg-[#151726] rounded-3xl border border-[#252945] shadow-2xl overflow-hidden">
        <div className="px-8 py-6 border-b border-[#252945] flex items-center justify-between bg-[#111322]">
          <h3 className="font-black text-lg text-white">Transmission Queue</h3>
          <span className="text-[10px] bg-emerald-500 text-[#0a0b14] px-3 py-1.5 rounded-full font-black uppercase tracking-widest shadow-lg shadow-emerald-500/20 animate-pulse">3 Waves Staged</span>
        </div>
        <div className="divide-y divide-[#252945]">
          {[1, 2, 3].map((i) => (
            <div key={i} className="px-8 py-6 flex items-center justify-between hover:bg-[#1c1f35] transition-all cursor-pointer group">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-[#0a0b14] rounded-2xl flex-shrink-0 overflow-hidden shadow-xl border border-[#252945] group-hover:scale-110 transition-transform duration-500">
                   <img src={`https://picsum.photos/100/100?random=${i+20}`} alt="Asset" className="w-full h-full object-cover group-hover:rotate-2" />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-200 line-clamp-1 group-hover:text-violet-400 transition-colors">Phase 2: Digital Transformation Roadmap - Q4 Reveal...</p>
                  <div className="flex items-center space-x-6 mt-3">
                    <span className="text-[10px] font-black text-violet-400 uppercase tracking-widest flex items-center bg-violet-500/10 px-2 py-1 rounded">
                      <CalendarIcon className="w-3 h-3 mr-1.5" />
                      Oct 2{i+4}, 2024 • 14:30
                    </span>
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-2 py-1 bg-[#1c1f35] rounded border border-[#2d314d]">Instagram Node</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                <button className="px-4 py-2 bg-[#1c1f35] text-xs font-black text-slate-300 hover:text-white rounded-xl border border-[#2d314d] hover:border-violet-500/50 transition-all">Modify</button>
                <button className="px-4 py-2 bg-rose-500/10 text-xs font-black text-rose-400 hover:bg-rose-500 hover:text-white rounded-xl border border-rose-500/20 transition-all">Abuse</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
