import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function ExecutiveDashboard() {
  const [systemEfficiency, setSystemEfficiency] = useState(99.98);

  useEffect(() => {
    const interval = setInterval(() => {
      const variance = (Math.random() * 0.01 - 0.005);
      setSystemEfficiency(prev => parseFloat((prev + variance).toFixed(2)));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-agentic-background text-agentic-on-background font-agentic-body-md min-h-screen selection:bg-agentic-primary/30">
      <Head>
        <title>TRICODE PRO V2.0 | Executive Intelligence Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        .glass-panel {
            background: rgba(15, 23, 42, 0.7);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(30, 41, 59, 0.5);
        }
        .glow-cyan {
            box-shadow: 0 0 15px rgba(76, 215, 246, 0.15);
        }
        @keyframes pulse-glow {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.1); }
        }
        .agent-pulse {
            animation: pulse-glow 3s infinite ease-in-out;
        }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 10px; }
      `}</style>

      {/* Top Navigation Bar */}
      <header className="fixed top-0 w-full z-50 flex items-center justify-between px-agentic-md h-16 bg-agentic-surface-container-low/80 backdrop-blur-xl border-b border-agentic-outline-variant shadow-sm">
        <div className="flex items-center gap-agentic-xl">
          <span className="font-agentic-headline-sm text-agentic-headline-sm font-bold text-agentic-primary tracking-tighter uppercase">TRICODE PRO V2.0</span>
          <div className="hidden md:flex items-center bg-agentic-surface-container-high px-agentic-md py-1.5 rounded-full border border-agentic-outline-variant/30">
            <span className="material-symbols-outlined text-agentic-primary text-sm mr-2">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-agentic-body-sm w-64 placeholder:text-agentic-on-surface-variant" placeholder="Global Intelligence Search..." type="text"/>
          </div>
        </div>
        <div className="flex items-center gap-agentic-md">
          <button className="material-symbols-outlined p-2 hover:bg-agentic-surface-container-high transition-colors cursor-pointer active:scale-95 text-agentic-on-surface-variant">hub</button>
          <button className="material-symbols-outlined p-2 hover:bg-agentic-surface-container-high transition-colors cursor-pointer active:scale-95 text-agentic-on-surface-variant">monitoring</button>
          <div className="relative">
            <button className="material-symbols-outlined p-2 hover:bg-agentic-surface-container-high transition-colors cursor-pointer active:scale-95 text-agentic-on-surface-variant">notifications</button>
            <span className="absolute top-2 right-2 w-2 h-2 bg-agentic-primary rounded-full"></span>
          </div>
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5anT-ED74u-0O5ll3Tt2_ca-pm5pGh_g5ab0GVDGiRLvv_DV_5LvnyqmwrWtOse-8JBVVYF2l2E4zjEjtDVqFTz3N0xzhbQ0Ou8J1zjNSJgqHzjsuwCO0jIIMExCL5t_yeV6aAiolNK-NnDPkwH44OZWe2eHX1znUeSm3LjgReqQQAlKuTU9eEFyXJZcsDhssObxKAqnZIMJQeikS3d6ep8v-dOKQWu43L3Owbcq037KAyMwXW419s5eRqkRjev2U0DmZS9_oh8g" alt="Profile" className="w-8 h-8 rounded-full border border-agentic-outline-variant" />
        </div>
      </header>

      {/* Side Navigation Bar */}
      <aside className="fixed left-0 top-0 h-full w-64 flex flex-col py-agentic-md bg-agentic-surface-container-lowest border-r border-agentic-outline-variant z-40 hidden md:flex">
        <div className="mt-16 px-agentic-md py-agentic-lg flex flex-col">
          <div className="flex items-center gap-agentic-md mb-agentic-xl">
            <div className="w-10 h-10 bg-agentic-primary-container rounded flex items-center justify-center">
              <span className="material-symbols-outlined text-agentic-on-primary-container">memory</span>
            </div>
            <div>
              <h2 className="font-agentic-headline-md text-agentic-headline-md text-agentic-primary tracking-tight uppercase">TRICODE OS</h2>
              <p className="font-agentic-mono-label text-agentic-mono-label text-agentic-on-surface-variant uppercase">V2.0 Autonomous</p>
            </div>
          </div>
          <nav className="flex flex-col gap-agentic-xs mb-agentic-xl">
            <a className="flex items-center gap-agentic-md px-agentic-md py-2 rounded-agentic-lg bg-agentic-secondary-container/20 text-agentic-primary border-l-2 border-agentic-primary transition-all duration-200" href="#">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="font-agentic-mono-label text-agentic-mono-label">Mission Control</span>
            </a>
            <a className="flex items-center gap-agentic-md px-agentic-md py-2 rounded-agentic-lg text-agentic-on-surface-variant hover:bg-agentic-surface-container-high/50 transition-all duration-200" href="#">
              <span className="material-symbols-outlined">memory</span>
              <span className="font-agentic-mono-label text-agentic-mono-label">Agent Console</span>
            </a>
            <a className="flex items-center gap-agentic-md px-agentic-md py-2 rounded-agentic-lg text-agentic-on-surface-variant hover:bg-agentic-surface-container-high/50 transition-all duration-200" href="#">
              <span className="material-symbols-outlined">bolt</span>
              <span className="font-agentic-mono-label text-agentic-mono-label">AI Sprint Board</span>
            </a>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="md:ml-64 mt-16 p-agentic-gutter md:p-agentic-margin_desktop">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-agentic-md mb-agentic-xl">
          <div>
            <p className="font-agentic-mono-label text-agentic-mono-label text-agentic-primary uppercase tracking-[0.2em] mb-agentic-xs">Executive Dashboard</p>
            <h1 className="font-agentic-display-lg text-agentic-display-lg text-agentic-on-surface tracking-tight">Intelligence Oversight</h1>
          </div>
          <div className="flex items-center gap-agentic-md p-agentic-base bg-agentic-surface-container-high rounded-agentic-lg border border-agentic-outline-variant">
            <button className="px-agentic-md py-agentic-sm rounded bg-agentic-surface-container-lowest text-agentic-primary font-agentic-mono-label text-agentic-mono-label border border-agentic-outline-variant">Real-Time</button>
            <button className="px-agentic-md py-agentic-sm rounded text-agentic-on-surface-variant font-agentic-mono-label text-agentic-mono-label hover:text-agentic-on-surface">Forecast</button>
          </div>
        </header>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-agentic-gutter mb-agentic-lg">
          <div className="glass-panel p-agentic-md rounded-agentic-xl flex flex-col relative overflow-hidden group">
            <div className="flex justify-between items-start mb-agentic-md">
              <span className="font-agentic-mono-label text-agentic-mono-label text-agentic-on-surface-variant">ANNUAL RECURRING REVENUE</span>
              <span className="material-symbols-outlined text-agentic-primary" style={{fontVariationSettings: "'FILL' 1"}}>payments</span>
            </div>
            <div className="mb-agentic-xs">
              <span className="font-agentic-headline-md text-agentic-headline-md text-agentic-on-surface">$24.8M</span>
              <span className="ml-agentic-sm font-agentic-mono-label text-agentic-mono-label text-agentic-primary">+12.4%</span>
            </div>
            <div className="w-full h-1 bg-agentic-surface-container-highest rounded-full mt-agentic-sm">
              <div className="h-full bg-agentic-primary rounded-full w-3/4"></div>
            </div>
          </div>
          <div className="glass-panel p-agentic-md rounded-agentic-xl flex flex-col relative overflow-hidden group">
            <div className="flex justify-between items-start mb-agentic-md">
              <span className="font-agentic-mono-label text-agentic-mono-label text-agentic-on-surface-variant">MONTHLY BURN RATE</span>
              <span className="material-symbols-outlined text-agentic-secondary" style={{fontVariationSettings: "'FILL' 1"}}>local_fire_department</span>
            </div>
            <div className="mb-agentic-xs">
              <span className="font-agentic-headline-md text-agentic-headline-md text-agentic-on-surface">$1.2M</span>
              <span className="ml-agentic-sm font-agentic-mono-label text-agentic-mono-label text-agentic-error">-2.1%</span>
            </div>
            <div className="w-full h-1 bg-agentic-surface-container-highest rounded-full mt-agentic-sm">
              <div className="h-full bg-agentic-secondary rounded-full w-2/3"></div>
            </div>
          </div>
          <div className="glass-panel p-agentic-md rounded-agentic-xl flex flex-col relative overflow-hidden group">
            <div className="flex justify-between items-start mb-agentic-md">
              <span className="font-agentic-mono-label text-agentic-mono-label text-agentic-on-surface-variant">AGENT VELOCITY INDEX</span>
              <span className="material-symbols-outlined text-agentic-tertiary" style={{fontVariationSettings: "'FILL' 1"}}>speed</span>
            </div>
            <div className="mb-agentic-xs">
              <span className="font-agentic-headline-md text-agentic-headline-md text-agentic-on-surface">94.2</span>
              <span className="ml-agentic-sm font-agentic-mono-label text-agentic-mono-label text-agentic-primary">+5.8%</span>
            </div>
            <div className="w-full h-1 bg-agentic-surface-container-highest rounded-full mt-agentic-sm">
              <div className="h-full bg-agentic-tertiary rounded-full w-11/12"></div>
            </div>
          </div>
          <div className="glass-panel p-agentic-md rounded-agentic-xl flex flex-col relative overflow-hidden group">
            <div className="flex justify-between items-start mb-agentic-md">
              <span className="font-agentic-mono-label text-agentic-mono-label text-agentic-on-surface-variant">SYSTEM EFFICIENCY</span>
              <span className="material-symbols-outlined text-agentic-primary" style={{fontVariationSettings: "'FILL' 1"}}>precision_manufacturing</span>
            </div>
            <div className="mb-agentic-xs">
              <span className="font-agentic-headline-md text-agentic-headline-md text-agentic-on-surface">{systemEfficiency}%</span>
              <span className="ml-agentic-sm font-agentic-mono-label text-agentic-mono-label text-agentic-primary-fixed-dim">OPTIMAL</span>
            </div>
            <div className="w-full h-1 bg-agentic-surface-container-highest rounded-full mt-agentic-sm">
              <div className="h-full bg-agentic-primary-container rounded-full shadow-[0_0_8px_rgba(6,182,212,0.5)]" style={{width: `${systemEfficiency}%`}}></div>
            </div>
          </div>
        </div>

        {/* Analytics & Risks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-agentic-gutter mb-agentic-lg">
          <div className="lg:col-span-2 glass-panel rounded-agentic-xl overflow-hidden flex flex-col">
            <div className="p-agentic-md border-b border-agentic-outline-variant flex justify-between items-center">
              <div className="flex items-center gap-agentic-md">
                <span className="material-symbols-outlined text-agentic-primary">analytics</span>
                <h3 className="font-agentic-headline-sm text-agentic-headline-sm">Revenue Intelligence Pipeline</h3>
              </div>
              <span className="font-agentic-mono-label text-agentic-mono-label text-agentic-on-surface-variant uppercase">Live Telemetry</span>
            </div>
            <div className="flex-grow p-agentic-lg relative h-[400px]">
              <div className="absolute inset-x-agentic-lg inset-y-agentic-lg flex items-end justify-between gap-agentic-xs opacity-50">
                <div className="w-full bg-agentic-primary/20 h-1/4 rounded-t border-t border-agentic-primary/40"></div>
                <div className="w-full bg-agentic-primary/20 h-1/3 rounded-t border-t border-agentic-primary/40"></div>
                <div className="w-full bg-agentic-primary/20 h-1/2 rounded-t border-t border-agentic-primary/40"></div>
                <div className="w-full bg-agentic-primary/30 h-2/3 rounded-t border-t border-agentic-primary/60"></div>
                <div className="w-full bg-agentic-primary/40 h-3/4 rounded-t border-t border-agentic-primary/80"></div>
                <div className="w-full bg-agentic-primary/60 h-full rounded-t border-t border-agentic-primary glow-cyan"></div>
                <div className="w-full bg-agentic-primary/30 h-4/5 rounded-t border-t border-agentic-primary/60"></div>
                <div className="w-full bg-agentic-primary/20 h-2/3 rounded-t border-t border-agentic-primary/40"></div>
              </div>
            </div>
          </div>
          <div className="glass-panel rounded-agentic-xl overflow-hidden flex flex-col">
            <div className="p-agentic-md border-b border-agentic-outline-variant bg-agentic-surface-container">
              <h3 className="font-agentic-headline-sm text-agentic-headline-sm flex items-center gap-agentic-md">
                <span className="material-symbols-outlined text-agentic-error">grid_view</span>
                Strategic Risk Heatmap
              </h3>
            </div>
            <div className="p-agentic-md flex-grow grid grid-cols-4 grid-rows-4 gap-agentic-xs">
               {/* Simplified Heatmap Matrix */}
               {Array.from({length: 16}).map((_, i) => (
                 <div key={i} className={`border border-white/5 rounded-sm ${i === 14 ? 'bg-agentic-error/40' : 'bg-agentic-primary/5'}`}></div>
               ))}
            </div>
            <div className="p-agentic-md bg-agentic-surface-container-high/50 border-t border-agentic-outline-variant">
              <p className="font-agentic-mono-label text-agentic-mono-label text-agentic-on-surface-variant mb-agentic-xs uppercase tracking-tighter">Active Mitigation</p>
              <div className="flex items-center justify-between">
                <span className="font-agentic-body-sm text-agentic-body-sm">R2: Database Latency (Asia-East)</span>
                <span className="font-agentic-mono-label text-[10px] bg-agentic-error/10 text-agentic-error px-agentic-sm py-px rounded border border-agentic-error/20 uppercase">Handling</span>
              </div>
            </div>
          </div>
        </div>

        {/* Forecasts */}
        <section className="glass-panel rounded-agentic-xl overflow-hidden mb-agentic-lg">
          <div className="p-agentic-md border-b border-agentic-outline-variant bg-gradient-to-r from-agentic-primary/10 to-transparent flex items-center justify-between">
            <div className="flex items-center gap-agentic-md">
              <div className="w-8 h-8 rounded-full border border-agentic-primary flex items-center justify-center relative">
                <span className="material-symbols-outlined text-agentic-primary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>psychology</span>
                <div className="absolute inset-0 rounded-full border-2 border-agentic-primary agent-pulse"></div>
              </div>
              <div>
                <h3 className="font-agentic-headline-sm text-agentic-headline-sm text-agentic-primary">Strategic Forecasts</h3>
                <p className="font-agentic-mono-label text-[10px] text-agentic-on-surface-variant uppercase tracking-tighter">Executive Agent Alpha-9 Feed</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-agentic-outline-variant">
            <div className="p-agentic-lg hover:bg-agentic-surface-container-high/30 transition-colors">
              <div className="flex items-start justify-between mb-agentic-md">
                <div className="px-agentic-sm py-1 rounded bg-agentic-primary/10 border border-agentic-primary/20 text-agentic-primary font-agentic-mono-label text-[10px] uppercase">Market Opportunity</div>
              </div>
              <h4 className="font-agentic-headline-sm text-agentic-on-surface mb-agentic-sm">AI Agent Scaling Threshold</h4>
              <p className="font-agentic-body-md text-agentic-body-md text-agentic-on-surface-variant leading-relaxed">
                System telemetry suggests a surge in demand for autonomous code reviews. Recommending a 25% increase in compute allocation.
              </p>
            </div>
            <div className="p-agentic-lg hover:bg-agentic-surface-container-high/30 transition-colors">
              <div className="flex items-start justify-between mb-agentic-md">
                <div className="px-agentic-sm py-1 rounded bg-agentic-tertiary/10 border border-agentic-tertiary/20 text-agentic-tertiary font-agentic-mono-label text-[10px] uppercase">Efficiency</div>
              </div>
              <h4 className="font-agentic-headline-sm text-agentic-on-surface mb-agentic-sm">Team Velocity Optimization</h4>
              <p className="font-agentic-body-md text-agentic-body-md text-agentic-on-surface-variant leading-relaxed">
                Data indicates spend on documentation is high. Activating DocGen-Agent could reclaim 15 hours/week per head.
              </p>
            </div>
            <div className="p-agentic-lg hover:bg-agentic-surface-container-high/30 transition-colors">
              <div className="flex items-start justify-between mb-agentic-md">
                <div className="px-agentic-sm py-1 rounded bg-agentic-secondary/10 border border-agentic-secondary/20 text-agentic-secondary font-agentic-mono-label text-[10px] uppercase">Infrastructure</div>
              </div>
              <h4 className="font-agentic-headline-sm text-agentic-on-surface mb-agentic-sm">Token Cost Abatement</h4>
              <p className="font-agentic-body-md text-agentic-body-md text-agentic-on-surface-variant leading-relaxed">
                Switching to TRICODE-LITE model during off-peak hours will reduce operational costs by 18%.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
