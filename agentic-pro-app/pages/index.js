import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { 
  LayoutDashboard, Bot, LayoutKanban, Workflow, Server, 
  BarChart3, FileText, Settings, Search, Bell, 
  CheckCircle2, AlertCircle, Clock, Play, Plus,
  Terminal, Zap, Activity, Cpu, Layers, Github,
  Slack, Send, ShieldCheck, ChevronRight, MoreHorizontal
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProAgenticDashboard() {
  const [activities, setActivities] = useState([]);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [command, setCommand] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const agents = ['AI PM Agent', 'QA Engineer', 'DevOps Agent', 'Security Auditor'];
      const actions = [
        'Syncing GitHub MCP...', 
        'Optimizing Kubernetes nodes...', 
        'Analyzing RBAC gaps...', 
        'Drafting technical specs...'
      ];
      const types = ['ai', 'info', 'success', 'warning'];
      
      const newActivity = {
        id: Date.now(),
        agent: agents[Math.floor(Math.random() * agents.length)],
        action: actions[Math.floor(Math.random() * actions.length)],
        type: types[Math.floor(Math.random() * types.length)],
        time: 'Just now'
      };
      
      setActivities(prev => [newActivity, ...prev].slice(0, 15));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pro-shell bg-white text-slate-950 font-sans selection:bg-[#534AB7] selection:text-white">
      <Head>
        <title>TRICODE PRO | Agentic Mission Control</title>
      </Head>

      <header className="pro-topbar border-b border-slate-200 backdrop-blur-md bg-white/80 sticky top-0 z-50 px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2.5 group cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-br from-[#534AB7] to-[#7C3AED] rounded-lg flex items-center justify-center text-white shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
              <Zap size={18} fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <span className="font-black tracking-tighter text-[15px] uppercase leading-none">
                TRICODE <span className="text-[#534AB7]">PRO</span>
              </span>
              <span className="text-[9px] text-slate-500 font-bold tracking-[0.2em] uppercase mt-0.5">Agentic OS</span>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
            {['Overview', 'Agent Nodes', 'MCP Plugins', 'Cluster Health'].map((item, i) => (
              <button key={item} className={`px-3 py-1.5 rounded-md text-[11px] font-bold transition-all ${i === 0 ? 'bg-white text-[#534AB7] shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}>
                {item}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex-1 max-w-xl px-12">
           <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#534AB7] transition-colors" size={14} />
              <input 
                className="w-full h-9 pl-9 pr-12 bg-slate-100 border border-slate-200 rounded-xl text-[12px] focus:outline-none focus:ring-2 focus:ring-[#534AB7]/20 focus:border-[#534AB7] transition-all"
                placeholder="⌘K  Search workspace, run agent tasks, or browse MCP tools..."
              />
           </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
             <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">Cluster: Staging-Africa-1</span>
          </div>
          <button className="p-2 rounded-lg text-slate-400 hover:bg-slate-100 transition-colors relative">
            <Bell size={18} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
          </button>
          <div className="w-8 h-8 rounded-full bg-[#534AB7] border-2 border-white shadow-xl flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:scale-105 transition-transform">
            TC
          </div>
        </div>
      </header>

      <div className="pro-main-container flex h-[calc(100vh-3.5rem)] overflow-hidden">
        
        <aside className="w-16 border-r border-slate-200 flex flex-col items-center py-6 gap-2 bg-slate-50">
          {[
            { icon: LayoutDashboard, id: 'Dashboard', label: 'Dash' },
            { icon: Bot, id: 'Agents', label: 'AI' },
            { icon: LayoutKanban, id: 'Sprint', label: 'Board' },
            { icon: Workflow, id: 'Workflows', label: 'Flow' },
            { icon: Server, id: 'Infra', label: 'Ops' }
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`group relative w-12 h-12 rounded-xl flex items-center justify-center transition-all ${activeTab === item.id ? 'bg-[#534AB7] text-white shadow-lg' : 'text-slate-400 hover:text-slate-900 hover:bg-white'}`}
            >
              <item.icon size={20} />
            </button>
          ))}
        </aside>

        <aside className="w-64 border-r border-slate-200 flex flex-col bg-white">
          <div className="p-6 overflow-y-auto flex-1 space-y-8">
            <div>
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Active Project</h3>
              <div className="p-3 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 group cursor-pointer hover:border-[#534AB7]/50 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    <Layers size={20} className="text-[#534AB7]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-black truncate">TRICODE OS v2</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">MCP Connectors</h3>
              <div className="space-y-2">
                {['GitHub Sync', 'Slack Alerts', 'Jira Cloud', 'OpenClaw Node'].map((tool) => (
                  <div key={tool} className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 cursor-pointer transition-all">
                    <span className="text-[12px] font-bold text-slate-600">{tool}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 bg-slate-50/50 overflow-y-auto p-8 relative">
          <div className="max-w-6xl mx-auto space-y-10">
            
            <div className="flex items-end justify-between border-b border-slate-200 pb-8">
              <div className="space-y-1">
                 <h1 className="text-4xl font-black tracking-tighter leading-none text-slate-900">Mission Control</h1>
                 <p className="text-[14px] text-slate-500 font-medium">Monitoring <span className="text-[#534AB7] font-bold">12 Autonomous Agents</span> in real-time.</p>
              </div>
              <div className="flex gap-3">
                 <button className="px-5 h-11 rounded-xl bg-[#534AB7] text-white text-[13px] font-black shadow-xl">Resume Pipeline</button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-2 space-y-8">
                <div className="grid grid-cols-2 gap-5">
                   {[
                     { name: 'AI PM Agent', role: 'Roadmap Orchestrator', status: 'Thinking', pulse: true, color: '#534AB7' },
                     { name: 'QA Engineer', role: 'E2E Automator', status: 'Executing', pulse: true, color: '#639922' },
                     { name: 'DevOps Agent', role: 'Cluster Manager', status: 'Idle', pulse: false, color: '#185FA5' },
                     { name: 'Security Auditor', role: 'Compliance Bot', status: 'Scanning', pulse: true, color: '#791F1F' }
                   ].map((agent) => (
                     <div key={agent.name} className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group">
                        <div className="flex items-center gap-4 mb-4">
                           <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shadow-inner"><Bot size={24} style={{ color: agent.color }} /></div>
                           <div>
                              <p className="text-[15px] font-black tracking-tight">{agent.name}</p>
                              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{agent.role}</p>
                           </div>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                           <motion.div initial={{ width: 0 }} animate={{ width: '72%' }} className="h-full" style={{ backgroundColor: agent.color }} />
                        </div>
                     </div>
                   ))}
                </div>

                <div className="rounded-3xl bg-slate-950 p-1.5 shadow-2xl overflow-hidden border border-slate-800">
                   <div className="bg-[#0f172a] px-5 py-3 border-b border-slate-800 flex items-center gap-3">
                      <Terminal size={16} className="text-slate-500" />
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Agent Gateway v1.0</span>
                   </div>
                   <div className="p-6 h-[240px] font-mono text-[13px] text-green-500 overflow-y-auto bg-black/50">
                      <p className="text-slate-600 opacity-50 italic">// TRICODE PRO Kernel loaded.</p>
                      <p className="flex items-center gap-2"><span className="text-[#534AB7] font-bold">root@pro:</span><span className="text-white">mcp tools --list</span></p>
                      <p className="text-slate-400 pl-4">[github:auth, infra:provision, db:query]</p>
                   </div>
                   <form className="p-3 bg-[#0f172a] border-t border-slate-800">
                      <input className="w-full h-12 bg-black rounded-2xl border border-slate-800 px-6 text-white font-mono text-[14px] outline-none" placeholder="Instruct agents..." />
                   </form>
                </div>
              </div>

              <div className="space-y-8">
                 <div className="rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col h-[580px] overflow-hidden">
                    <div className="p-5 border-b border-slate-100 bg-slate-50/50">
                       <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">Neural Stream</h3>
                    </div>
                    <div className="flex-1 overflow-y-auto p-3 space-y-2">
                       <AnimatePresence initial={false}>
                          {activities.map((item) => (
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} key={item.id} className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50">
                               <p className="text-[12px] font-black">{item.agent}</p>
                               <p className="text-[13px] text-slate-600 leading-snug">{item.action}</p>
                            </motion.div>
                          ))}
                       </AnimatePresence>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <style jsx global>{`
        .pro-shell { display: flex; flex-direction: column; height: 100vh; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.05); border-radius: 20px; }
      `}</style>
    </div>
  );
}
