import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function MissionDashboard() {
  const [agents, setAgents] = useState([
    { name: 'EXECUTIVE', icon: 'admin_panel_settings', status: 'Thinking...', active: true },
    { name: 'PM', icon: 'assignment_ind', status: 'Idle', active: false },
    { name: 'ARCHITECT', icon: 'account_tree', status: 'Active', active: true },
    { name: 'ENGINEER', icon: 'code', status: 'Coding', active: true },
    { name: 'QA', icon: 'fact_check', status: 'Idle', active: false },
    { name: 'DEVOPS', icon: 'cloud_done', status: 'Deploying', active: true },
    { name: 'SECURITY', icon: 'verified_user', status: 'Scanning', active: true },
  ]);

  return (
    <div className="bg-agentic-surface-dim text-agentic-on-surface font-agentic-body-md min-h-screen selection:bg-agentic-primary/30 flex flex-col">
      <Head>
        <title>TRICODE PRO V2.0 | Mission Control</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        body { background-color: #020617; color: #dae2fd; }
        .glass-panel {
            background: rgba(15, 23, 42, 0.7);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(30, 41, 59, 0.5);
        }
        .pulse-cyan {
            animation: pulse-cyan 2s infinite;
        }
        @keyframes pulse-cyan {
            0% { transform: scale(1); opacity: 0.8; box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.7); }
            70% { transform: scale(1.1); opacity: 1; box-shadow: 0 0 0 6px rgba(6, 182, 212, 0); }
            100% { transform: scale(1); opacity: 0.8; box-shadow: 0 0 0 0 rgba(6, 182, 212, 0); }
        }
        .scanline {
            width: 100%;
            height: 2px;
            background: linear-gradient(to bottom, transparent, rgba(6, 182, 212, 0.1), transparent);
            position: absolute;
            animation: scanline 4s linear infinite;
        }
        @keyframes scanline {
            0% { top: 0; }
            100% { top: 100%; }
        }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 10px; }
      `}</style>

      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 flex items-center justify-between px-agentic-md h-16 bg-agentic-surface-container-low/80 backdrop-blur-xl border-b border-agentic-outline-variant shadow-sm">
        <div className="flex items-center gap-agentic-md">
          <span className="font-agentic-headline-sm text-agentic-headline-sm font-bold text-agentic-primary tracking-tighter uppercase">TRICODE PRO V2.0</span>
          <div className="h-6 w-[1px] bg-agentic-outline-variant mx-agentic-sm"></div>
          <div className="flex items-center gap-agentic-sm px-agentic-sm py-1 bg-agentic-surface-container-high rounded-agentic-lg border border-agentic-outline-variant">
            <span className="material-symbols-outlined text-agentic-primary text-[18px]">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-agentic-body-sm w-64 text-agentic-on-surface-variant uppercase font-agentic-mono-label" placeholder="Global Command Search" type="text"/>
          </div>
        </div>
        <div className="flex items-center gap-agentic-lg">
          <div className="flex items-center gap-agentic-md">
            <button className="material-symbols-outlined text-agentic-on-surface-variant hover:bg-agentic-surface-container-high transition-colors p-1 rounded">hub</button>
            <button className="material-symbols-outlined text-agentic-on-surface-variant hover:bg-agentic-surface-container-high transition-colors p-1 rounded">monitoring</button>
            <div className="relative">
              <button className="material-symbols-outlined text-agentic-on-surface-variant hover:bg-agentic-surface-container-high transition-colors p-1 rounded">notifications</button>
              <span className="absolute top-1 right-1 w-2 h-2 bg-agentic-primary rounded-full"></span>
            </div>
          </div>
          <div className="flex items-center gap-agentic-sm cursor-pointer hover:bg-agentic-surface-container-high p-1 rounded transition-colors">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-agentic-primary/30 bg-agentic-surface-container-high"></div>
            <div className="hidden md:block">
              <p className="font-agentic-mono-label text-agentic-mono-label text-agentic-primary">ADMIN: ARCHITECT</p>
              <p className="text-[9px] text-agentic-on-surface-variant tracking-widest uppercase">System Level 0</p>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 pt-16 h-full overflow-hidden">
        {/* SideNavBar */}
        <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] flex flex-col py-agentic-md bg-agentic-surface-container-lowest border-r border-agentic-outline-variant w-64 z-40">
          <div className="px-agentic-md mb-agentic-xl">
            <h2 className="font-agentic-headline-md text-agentic-headline-md text-agentic-primary-container leading-none uppercase tracking-tighter">TRICODE OS</h2>
            <p className="font-agentic-mono-label text-agentic-mono-label text-agentic-on-surface-variant mt-agentic-xs uppercase">V2.0 Autonomous</p>
          </div>
          <nav className="flex-1 px-agentic-sm space-y-1 overflow-y-auto custom-scrollbar">
            <div className="flex items-center gap-agentic-md px-agentic-md py-2 bg-agentic-secondary-container/20 text-agentic-primary border-l-2 border-agentic-primary cursor-pointer transition-all duration-200">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="font-agentic-mono-label text-agentic-mono-label uppercase tracking-tighter">Mission Control</span>
            </div>
            {/* Add more nav items similarly */}
          </nav>
          <div className="px-agentic-md mt-auto pt-agentic-md space-y-agentic-lg">
            <button className="w-full py-2.5 px-agentic-md bg-agentic-primary text-agentic-on-primary font-agentic-mono-label text-agentic-mono-label rounded-agentic-lg flex items-center justify-center gap-2 active:scale-95 transition-transform uppercase tracking-tighter">
              <span className="material-symbols-outlined text-[18px]">add_circle</span>
              Initialize Agent
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="ml-64 flex-1 p-agentic-lg overflow-y-auto custom-scrollbar relative">
          <div className="max-w-[1600px] mx-auto space-y-agentic-lg">
            {/* Agent Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-agentic-lg">
              <div className="xl:col-span-3 glass-panel rounded-agentic-xl p-agentic-md relative overflow-hidden">
                <div className="scanline"></div>
                <div className="flex justify-between items-center mb-agentic-lg">
                  <h3 className="font-agentic-mono-label text-agentic-mono-label text-agentic-primary uppercase tracking-widest flex items-center gap-agentic-sm">
                    <span className="material-symbols-outlined text-[18px]">smart_toy</span>
                    Autonomous Agent Cluster
                  </h3>
                  <span className="text-[10px] text-agentic-on-surface-variant px-agentic-sm py-[2px] bg-agentic-surface-container-high rounded">TOTAL NODES: 07</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-agentic-md">
                  {agents.map(agent => (
                    <div key={agent.name} className="flex flex-col items-center gap-agentic-sm p-agentic-sm glass-panel rounded-agentic-lg hover:bg-agentic-primary/5 transition-colors cursor-default group">
                      <div className="relative">
                        <div className={`w-12 h-12 rounded-full bg-agentic-surface-container-highest flex items-center justify-center border ${agent.active ? 'border-agentic-primary/20' : 'border-agentic-outline-variant'}`}>
                          <span className={`material-symbols-outlined ${agent.active ? 'text-agentic-primary' : 'text-agentic-on-surface-variant'} group-hover:scale-110 transition-transform`}>{agent.icon}</span>
                        </div>
                        {agent.active && <span className="absolute bottom-0 right-0 w-3 h-3 bg-agentic-primary rounded-full border-2 border-agentic-surface pulse-cyan"></span>}
                      </div>
                      <span className="font-agentic-mono-label text-[10px] text-agentic-on-surface uppercase tracking-tighter">{agent.name}</span>
                      <span className={`text-[9px] uppercase ${agent.active ? 'text-agentic-primary/80' : 'text-agentic-on-surface-variant'}`}>{agent.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resource Metrics */}
              <div className="glass-panel rounded-agentic-xl p-agentic-md flex flex-col justify-between">
                <h3 className="font-agentic-mono-label text-agentic-mono-label text-agentic-on-surface-variant uppercase tracking-widest flex items-center gap-agentic-sm mb-agentic-sm">
                  <span className="material-symbols-outlined text-[18px]">query_stats</span>
                  Resource Metrics
                </h3>
                <div className="space-y-agentic-md">
                  <div>
                    <div className="flex justify-between text-[10px] font-agentic-mono-label mb-agentic-xs uppercase tracking-tighter">
                      <span>GPU Compute</span>
                      <span className="text-agentic-primary">78%</span>
                    </div>
                    <div className="h-1.5 bg-agentic-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-agentic-primary w-[78%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] font-agentic-mono-label mb-agentic-xs uppercase tracking-tighter">
                      <span>Memory Load</span>
                      <span className="text-agentic-tertiary">42%</span>
                    </div>
                    <div className="h-1.5 bg-agentic-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-agentic-tertiary w-[42%]"></div>
                    </div>
                  </div>
                  <div className="pt-agentic-sm border-t border-agentic-outline-variant/30 flex items-end justify-between">
                    <div>
                      <p className="text-[9px] text-agentic-on-surface-variant uppercase tracking-tighter">Est. Cost/Hr</p>
                      <p className="font-agentic-mono-label text-agentic-headline-sm text-agentic-primary tracking-tighter">$4.82</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Stream */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-agentic-lg h-[400px]">
              <div className="lg:col-span-2 glass-panel rounded-agentic-xl p-agentic-md flex flex-col">
                <div className="flex justify-between items-center mb-agentic-md">
                  <h3 className="font-agentic-mono-label text-agentic-mono-label text-agentic-primary uppercase tracking-widest flex items-center gap-agentic-sm">
                    <span className="material-symbols-outlined text-[18px]">terminal</span>
                    Global Agent Stream
                  </h3>
                  <span className="material-symbols-outlined text-agentic-on-surface-variant text-[16px] animate-spin">sync</span>
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar font-agentic-mono-code text-[11px] space-y-agentic-sm pr-agentic-xs">
                  <div className="flex gap-agentic-sm">
                    <span className="text-agentic-on-surface-variant">[14:22:01]</span>
                    <span className="text-agentic-primary">[ARCHITECT]</span>
                    <span className="text-agentic-on-surface tracking-tighter">Refactoring microservice bridge for higher concurrency.</span>
                  </div>
                  <div className="flex gap-agentic-sm">
                    <span className="text-agentic-on-surface-variant">[14:21:45]</span>
                    <span className="text-agentic-tertiary">[DEVOPS]</span>
                    <span className="text-agentic-on-surface tracking-tighter">Canary deployment to region 'US-EAST-1' successful.</span>
                  </div>
                </div>
              </div>

              {/* Burndown Chart Placeholder */}
              <div className="glass-panel rounded-agentic-xl p-agentic-md flex flex-col relative overflow-hidden">
                <h3 className="font-agentic-mono-label text-agentic-mono-label text-agentic-on-surface-variant uppercase tracking-widest flex items-center gap-agentic-sm mb-agentic-md">
                  <span className="material-symbols-outlined text-[18px]">insights</span>
                  AI Burndown
                </h3>
                <div className="flex-1 flex flex-col justify-center gap-agentic-md">
                  <div className="relative h-32 w-full flex items-end justify-between px-agentic-sm opacity-50">
                    {/* Simulated Bars */}
                    {[24, 20, 16, 24, 12, 8, 4].map((h, i) => (
                      <div key={i} className={`w-2 bg-agentic-primary/20 border-t border-agentic-primary`} style={{height: `${h*4}px`}}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
