import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

export default function AISprintBoard() {
  const [tasks, setTasks] = useState([
    { id: 'TR-8012', title: 'Neural Mesh Expansion', agent: 'Seraph', confidence: 82, status: 'ideas', priority: 'HIGH' },
    { id: 'TR-7944', title: 'Latency Optimization 4.2', agent: 'CoreX', confidence: 96, status: 'backlog', priority: 'MED' },
    { id: 'TR-7720', title: 'Encryption Shield V2 Deployment', agent: 'Arch-1', confidence: 68, status: 'in-progress', priority: 'CRITICAL', progress: 68 },
    { id: 'TR-6912', title: 'Schema Documentation Auto-Gen', agent: 'Scribe-04', confidence: 99, status: 'review', priority: 'LOW' },
    { id: 'TR-7650', title: 'Security Protocol Stress-Test', agent: 'Guard-I', confidence: 94, status: 'testing', priority: 'HIGH', warnings: '2 Vulnerabilities Detected' },
    { id: 'TR-7601', title: 'Node 86 Health Check', status: 'deployed', stable: '48h' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTasks(prevTasks => prevTasks.map(task => {
        if (Math.random() > 0.8 && task.confidence) {
          const change = Math.floor(Math.random() * 3) - 1;
          return { ...task, confidence: Math.min(100, Math.max(70, task.confidence + change)) };
        }
        return task;
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="bg-agentic-surface-dim text-agentic-on-surface font-agentic-body-md h-screen flex overflow-hidden">
      <Head>
        <title>TRICODE PRO V2.0 | AI Sprint Board</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        body { background-color: #0b1326; color: #dae2fd; }
        .glass-panel {
            background: rgba(23, 31, 51, 0.6);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(134, 147, 151, 0.2);
        }
        .kanban-column { min-width: 300px; width: 300px; }
        .glow-cyan { box-shadow: 0 0 15px -3px rgba(6, 182, 212, 0.2); }
        .glow-dot { width: 8px; height: 8px; border-radius: 50%; }
        .glow-dot-active { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.2); opacity: 0.5; } }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; height: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #3d494c; border-radius: 10px; }
        .kanban-card:hover { transform: translateY(-2px); transition: all 0.2s ease-in-out; }
      `}</style>

      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-full flex flex-col py-agentic-md bg-agentic-surface-container-lowest border-r border-agentic-outline-variant w-64 z-40">
        <div className="px-agentic-md mb-agentic-xl">
          <div className="font-agentic-headline-md text-agentic-headline-md text-agentic-primary-container flex items-center gap-agentic-sm">
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>terminal</span>
            TRICODE OS
          </div>
          <div className="font-agentic-mono-label text-agentic-mono-label text-agentic-on-surface-variant mt-agentic-xs px-1">V2.0 Autonomous</div>
        </div>
        <nav className="flex-1 px-agentic-sm space-y-1">
          <div className="flex items-center gap-agentic-md px-agentic-md py-2 rounded-agentic-lg text-agentic-on-surface-variant hover:bg-agentic-surface-container-high/50 cursor-pointer transition-all duration-200">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-agentic-mono-label text-agentic-mono-label">Mission Control</span>
          </div>
          <div className="flex items-center gap-agentic-md px-agentic-md py-2 rounded-agentic-lg text-agentic-on-surface-variant hover:bg-agentic-surface-container-high/50 cursor-pointer transition-all duration-200">
            <span className="material-symbols-outlined">memory</span>
            <span className="font-agentic-mono-label text-agentic-mono-label">Agent Console</span>
          </div>
          <div className="flex items-center gap-agentic-md px-agentic-md py-2 rounded-agentic-lg bg-agentic-secondary-container/20 text-agentic-primary border-l-2 border-agentic-primary cursor-pointer transition-all duration-200">
            <span className="material-symbols-outlined">bolt</span>
            <span className="font-agentic-mono-label text-agentic-mono-label">AI Sprint Board</span>
          </div>
          <div className="flex items-center gap-agentic-md px-agentic-md py-2 rounded-agentic-lg text-agentic-on-surface-variant hover:bg-agentic-surface-container-high/50 cursor-pointer transition-all duration-200">
            <span className="material-symbols-outlined">account_tree</span>
            <span className="font-agentic-mono-label text-agentic-mono-label">Architecture</span>
          </div>
        </nav>
        <div className="px-agentic-md mt-auto pt-agentic-md space-y-agentic-md">
          <button className="w-full bg-agentic-primary-container text-agentic-on-primary-container py-agentic-sm rounded-agentic-lg font-agentic-mono-label text-agentic-mono-label active:scale-95 transition-transform">
            Initialize Agent
          </button>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="flex-1 ml-64 flex flex-col h-screen overflow-hidden bg-agentic-surface-dim relative">
        <header className="h-16 flex items-center justify-between px-agentic-md bg-agentic-surface-container-low/80 backdrop-blur-xl border-b border-agentic-outline-variant z-30">
          <div className="flex items-center gap-agentic-lg">
            <div className="font-agentic-headline-sm text-agentic-headline-sm font-bold text-agentic-primary tracking-tighter uppercase">TRICODE PRO V2.0</div>
            <div className="flex items-center bg-agentic-surface-container-high px-agentic-md py-1.5 rounded-full border border-agentic-outline-variant">
              <span className="material-symbols-outlined text-agentic-on-surface-variant text-sm mr-2">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-agentic-body-sm font-agentic-body-sm w-64 placeholder:text-agentic-outline" placeholder="Search system resources..." type="text"/>
            </div>
          </div>
          <div className="flex items-center gap-agentic-md">
            <div className="h-8 w-8 rounded-full overflow-hidden border border-agentic-primary/50 cursor-pointer">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOh2JBAufuosCXVhBNYsFBn9gfH8c4vWyIRWp7D0hNDWAaQdFYcvVEXYf6BhKY5iRQDEYqfufnNeNHhzuKf_ZHn_TRg-DhsLXJ2CTr-HvusYuHWJx_lR9L-vqiUW8hTsXucU5_QRjwU_O3pcy-PKwF_nlkJXYX8ld8kmB9BjkOl-HMmirFpU8ENbdaS9qn2I8Z6l-89_KacqVjbF2YKwxWGojxsxC0MoLCJV8DXUcH1TWQQqm4vPYuA0iAedIXqAjLHIK6OXslVi8" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        {/* Forecast Header */}
        <section className="p-agentic-md bg-agentic-surface-container-low/40 border-b border-agentic-outline-variant">
          <div className="flex items-end justify-between max-w-7xl mx-auto">
            <div className="space-y-1">
              <div className="flex items-center gap-agentic-sm text-agentic-primary">
                <span className="material-symbols-outlined text-lg">auto_awesome</span>
                <span className="font-agentic-mono-label text-agentic-mono-label tracking-widest uppercase">AI Delivery Forecasting</span>
              </div>
              <div className="flex items-baseline gap-agentic-md">
                <h2 className="font-agentic-headline-md text-agentic-headline-md text-agentic-on-surface">Target Completion: <span className="text-agentic-primary-container">OCT 24, 2023 - 14:00 UTC</span></h2>
                <span className="font-agentic-mono-code text-agentic-mono-code text-agentic-secondary text-sm bg-agentic-secondary-container/10 px-2 py-0.5 rounded border border-agentic-secondary/20 uppercase tracking-tighter">Agent Velocity: 42.4 Pts/Sprint</span>
              </div>
            </div>
            <div className="flex gap-agentic-lg">
              <div className="text-right">
                <div className="font-agentic-mono-label text-agentic-mono-label text-agentic-on-surface-variant uppercase tracking-tighter">Confidence Interval</div>
                <div className="font-agentic-headline-sm text-agentic-headline-sm text-agentic-on-surface flex items-center justify-end gap-2">
                  94.8% <div className="w-16 h-1 bg-agentic-surface-variant rounded-full overflow-hidden"><div className="h-full bg-agentic-primary-container" style={{width: '94.8%'}}></div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kanban Board */}
        <section 
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={() => setIsDown(false)}
          onMouseUp={() => setIsDown(false)}
          onMouseMove={handleMouseMove}
          className="flex-1 overflow-x-auto overflow-y-hidden flex gap-agentic-md p-agentic-md custom-scrollbar bg-agentic-surface-container-lowest/30 select-none"
        >
          {['ideas', 'backlog', 'ready', 'in-progress', 'review', 'testing', 'deployed'].map(status => (
            <div key={status} className="kanban-column flex flex-col gap-agentic-md">
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2">
                  {status === 'in-progress' && <div className="glow-dot glow-dot-active bg-agentic-primary shadow-[0_0_8px_rgba(76,215,246,0.6)] mr-1"></div>}
                  <span className={`font-agentic-mono-label text-agentic-mono-label ${status === 'in-progress' ? 'text-agentic-primary' : 'text-agentic-on-surface-variant'} uppercase tracking-tighter`}>{status.replace('-', ' ')}</span>
                  <span className="bg-agentic-surface-container-high text-agentic-on-surface-variant px-1.5 rounded text-[10px] font-bold">
                    {tasks.filter(t => t.status === status).length.toString().padStart(2, '0')}
                  </span>
                </div>
                <span className="material-symbols-outlined text-agentic-outline-variant cursor-pointer">more_horiz</span>
              </div>
              <div className="flex-1 overflow-y-auto custom-scrollbar space-y-agentic-md pb-agentic-md">
                {tasks.filter(t => t.status === status).map(task => (
                  <div key={task.id} className={`kanban-card glass-panel rounded-agentic-xl p-agentic-md flex flex-col gap-agentic-sm hover:border-agentic-primary/40 group relative overflow-hidden ${status === 'in-progress' ? 'border-agentic-primary/40 glow-cyan' : ''}`}>
                    {status === 'in-progress' && <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-agentic-primary via-agentic-secondary to-agentic-primary bg-[length:200%_auto] animate-[pulse_2s_linear_infinite]"></div>}
                    <div className="flex justify-between items-start">
                      <span className="font-agentic-mono-code text-agentic-mono-code text-xs text-agentic-primary/80">{task.id}</span>
                      {task.priority && (
                        <span className={`font-agentic-mono-label text-[10px] px-1.5 py-0.5 rounded border ${task.priority === 'CRITICAL' ? 'bg-agentic-error-container text-agentic-error border-agentic-error/20' : 'bg-agentic-primary/10 text-agentic-primary border-agentic-primary/20'}`}>
                          AUTO-PRIO: {task.priority}
                        </span>
                      )}
                      {status === 'deployed' && <span className="material-symbols-outlined text-agentic-primary-container text-sm">verified</span>}
                    </div>
                    <h4 className="font-agentic-body-md text-agentic-body-md text-agentic-on-surface font-semibold group-hover:text-agentic-primary transition-colors">{task.title}</h4>
                    {task.agent && (
                      <div className="flex items-center gap-2 mt-1">
                        <div className="h-6 w-6 rounded-full border border-agentic-outline-variant overflow-hidden bg-agentic-surface-container-high"></div>
                        <span className="font-agentic-mono-label text-agentic-mono-label text-agentic-on-surface-variant">Agent: {task.agent}</span>
                      </div>
                    )}
                    {task.progress !== undefined && (
                      <div className="mt-2 space-y-2">
                        <div className="flex justify-between text-[10px] font-agentic-mono-label tracking-tighter">
                          <span className="text-agentic-on-surface-variant uppercase">Progressing...</span>
                          <span className="text-agentic-primary">{task.progress}%</span>
                        </div>
                        <div className="h-1 bg-agentic-surface-variant rounded-full overflow-hidden">
                          <div className="h-full bg-agentic-primary" style={{width: `${task.progress}%`}}></div>
                        </div>
                      </div>
                    )}
                    {task.confidence !== undefined && (
                      <div className="mt-2 pt-2 border-t border-agentic-outline-variant/30 flex justify-between items-center">
                        <div className="flex gap-2">
                          <span className="material-symbols-outlined text-sm text-agentic-secondary">link</span>
                        </div>
                        <div className="text-right">
                          <div className="font-agentic-mono-label text-[9px] text-agentic-on-surface-variant uppercase tracking-tighter">AI Confidence</div>
                          <div className="font-agentic-mono-code text-agentic-mono-code text-xs text-agentic-primary-container">{task.confidence}%</div>
                        </div>
                      </div>
                    )}
                    {task.warnings && (
                      <div className="flex items-center gap-1 mt-2">
                        <span className="material-symbols-outlined text-[14px] text-agentic-error">warning</span>
                        <span className="font-agentic-mono-label text-[9px] text-agentic-error uppercase tracking-tighter">{task.warnings}</span>
                      </div>
                    )}
                  </div>
                ))}
                {status === 'ready' && tasks.filter(t => t.status === 'ready').length === 0 && (
                  <div className="kanban-card bg-agentic-surface-container-high/20 border border-dashed border-agentic-outline-variant rounded-agentic-xl p-agentic-md flex flex-col items-center justify-center gap-agentic-sm">
                    <span className="material-symbols-outlined text-agentic-outline-variant animate-spin">sync</span>
                    <span className="font-agentic-mono-label text-[10px] text-agentic-outline-variant uppercase tracking-tighter">Parsing Queue...</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </section>

        {/* Sidebar Activity */}
        <div className="absolute right-0 top-16 bottom-0 w-80 bg-agentic-surface-container-low border-l border-agentic-outline-variant z-20 flex flex-col">
          <div className="p-agentic-md border-b border-agentic-outline-variant flex items-center justify-between">
            <span className="font-agentic-mono-label text-agentic-mono-label text-agentic-primary uppercase tracking-tighter">Agent Activity Feed</span>
            <span className="material-symbols-outlined text-agentic-on-surface-variant text-sm cursor-pointer">close</span>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar p-agentic-md space-y-agentic-lg">
            <div className="flex gap-agentic-md">
              <div className="relative shrink-0">
                <div className="h-8 w-8 rounded bg-agentic-primary-container/10 border border-agentic-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-agentic-primary text-sm">history_edu</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-agentic-primary border-2 border-agentic-surface-container-low rounded-full"></div>
              </div>
              <div className="flex-1 space-y-1">
                <div className="font-agentic-mono-label text-agentic-mono-label text-agentic-on-surface leading-tight tracking-tighter"><span className="text-agentic-primary">Arch-1</span> completed pull request for #TR-7720</div>
                <div className="font-agentic-mono-code text-[10px] text-agentic-on-surface-variant">2 minutes ago • Automated Review Passed</div>
              </div>
            </div>
          </div>
          <div className="p-agentic-md bg-agentic-surface-container-lowest border-t border-agentic-outline-variant">
            <div className="flex items-center justify-between text-[10px] font-agentic-mono-label text-agentic-on-surface-variant mb-2 uppercase tracking-tighter">
              <span>System Uptime</span>
              <span>99.9999%</span>
            </div>
            <div className="h-1 bg-agentic-surface-container-high rounded-full overflow-hidden">
              <div className="h-full bg-agentic-primary-container w-[99.9%]"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
