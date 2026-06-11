import React, { useState } from 'react';
import Head from 'next/head';

export default function WorkflowBuilder() {
  const [isRequireApproval, setIsRequireApproval] = useState(true);

  return (
    <div className="bg-agentic-background text-agentic-on-background selection:bg-agentic-primary-container/30 overflow-hidden font-agentic-body-md min-h-screen">
      <Head>
        <title>TRICODE PRO V2.0 | Autonomous Workflow Builder</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        .workflow-grid {
            background-image: radial-gradient(circle, rgba(76, 215, 246, 0.05) 1px, transparent 1px);
            background-size: 24px 24px;
        }
        .node-glow {
            box-shadow: 0 0 15px rgba(76, 215, 246, 0.1);
        }
        .connector-line {
            stroke-dasharray: 5;
            animation: dash 20s linear infinite;
        }
        @keyframes dash {
            to { stroke-dashoffset: -1000; }
        }
        .agent-pulse {
            animation: agent-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes agent-pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: .7; transform: scale(1.05); }
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #3d494c; border-radius: 2px; }
        ::-webkit-scrollbar-thumb:hover { background: #4cd7f6; }
      `}</style>

      {/* Top Navigation Bar */}
      <header className="fixed top-0 w-full z-50 flex items-center justify-between px-agentic-md h-16 bg-agentic-surface-container-low/80 backdrop-blur-xl border-b border-agentic-outline-variant shadow-sm">
        <div className="flex items-center gap-agentic-xl">
          <span className="font-agentic-headline-sm text-agentic-headline-sm font-bold text-agentic-primary tracking-tighter uppercase">TRICODE PRO V2.0</span>
          <div className="hidden md:flex items-center bg-agentic-surface-container-high rounded-agentic-lg px-agentic-sm py-1 border border-agentic-outline-variant">
            <span className="material-symbols-outlined text-agentic-primary text-[18px] mr-2">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-agentic-body-sm w-64 placeholder:text-agentic-on-surface-variant" placeholder="Search components or docs..." type="text"/>
          </div>
        </div>
        <div className="flex items-center gap-agentic-md">
          <button className="material-symbols-outlined text-agentic-on-surface-variant hover:bg-agentic-surface-container-high transition-colors p-2 rounded-agentic-lg cursor-pointer active:scale-95">hub</button>
          <button className="material-symbols-outlined text-agentic-on-surface-variant hover:bg-agentic-surface-container-high transition-colors p-2 rounded-agentic-lg cursor-pointer active:scale-95">monitoring</button>
          <button className="material-symbols-outlined text-agentic-primary hover:bg-agentic-surface-container-high transition-colors p-2 rounded-agentic-lg cursor-pointer active:scale-95">notifications</button>
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-agentic-primary to-agentic-secondary p-[1px]">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeivujWZf2RnVhmC2tC9pNJ3iRN0qoPw2NW5Rl0WMZUecUaihE8SVLUVn6GCZ83fZR50JBFAFkKXt492JuKJ3u2fdb8tBuBzXZL1brTUhD9qyZdarx3PdUth43D6Hd7iO14ih5It0Wm_bcVdl9GBzpVp1T9liV2VwQE0PZUbmfYqcdg8tAtJqBc1QppayltH-oIxh3TMOzUiGW2J8qlizKGL-6f7PLpVIAZH8EBQMRorpvOjJdWXwr3M0IRvwBtIqcq5zPtHIc8qM" alt="Profile" className="w-full h-full rounded-full object-cover" />
          </div>
        </div>
      </header>

      {/* Side Navigation Bar */}
      <nav className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 flex flex-col py-agentic-md bg-agentic-surface-container-lowest border-r border-agentic-outline-variant hidden md:flex">
        <div className="px-agentic-md mb-agentic-lg">
          <div className="flex items-center gap-agentic-sm p-agentic-sm rounded-agentic-xl bg-agentic-surface-container-high/40 border border-agentic-outline-variant">
            <div className="w-8 h-8 rounded bg-agentic-primary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-agentic-primary text-[18px]">terminal</span>
            </div>
            <div>
              <div className="font-agentic-mono-label text-agentic-mono-label text-agentic-primary-container leading-tight uppercase">TRICODE OS</div>
              <div className="font-agentic-mono-label text-[10px] text-agentic-on-surface-variant uppercase">V2.0 Autonomous</div>
            </div>
          </div>
        </div>
        <div className="flex-1 px-agentic-sm space-y-1">
          <div className="flex items-center gap-agentic-md px-agentic-md py-agentic-sm font-agentic-mono-label text-agentic-mono-label text-agentic-on-surface-variant hover:bg-agentic-surface-container-high/50 transition-all duration-200 cursor-pointer">
            <span className="material-symbols-outlined">dashboard</span>
            <span>Mission Control</span>
          </div>
          <div className="flex items-center gap-agentic-md px-agentic-md py-agentic-sm font-agentic-mono-label text-agentic-mono-label bg-agentic-secondary-container/20 text-agentic-primary border-l-2 border-agentic-primary transition-all duration-200 cursor-pointer">
            <span className="material-symbols-outlined">memory</span>
            <span>Agent Console</span>
          </div>
          <div className="flex items-center gap-agentic-md px-agentic-md py-agentic-sm font-agentic-mono-label text-agentic-mono-label text-agentic-on-surface-variant hover:bg-agentic-surface-container-high/50 transition-all duration-200 cursor-pointer">
            <span className="material-symbols-outlined">bolt</span>
            <span>AI Sprint Board</span>
          </div>
          <div className="flex items-center gap-agentic-md px-agentic-md py-agentic-sm font-agentic-mono-label text-agentic-mono-label text-agentic-on-surface-variant hover:bg-agentic-surface-container-high/50 transition-all duration-200 cursor-pointer">
            <span className="material-symbols-outlined">account_tree</span>
            <span>Architecture</span>
          </div>
          <div className="flex items-center gap-agentic-md px-agentic-md py-agentic-sm font-agentic-mono-label text-agentic-mono-label text-agentic-on-surface-variant hover:bg-agentic-surface-container-high/50 transition-all duration-200 cursor-pointer">
            <span className="material-symbols-outlined">psychology</span>
            <span>Knowledge Brain</span>
          </div>
          <div className="flex items-center gap-agentic-md px-agentic-md py-agentic-sm font-agentic-mono-label text-agentic-mono-label text-agentic-on-surface-variant hover:bg-agentic-surface-container-high/50 transition-all duration-200 cursor-pointer">
            <span className="material-symbols-outlined">rocket_launch</span>
            <span>Deployment</span>
          </div>
        </div>
        <div className="px-agentic-md mt-auto pt-agentic-md border-t border-agentic-outline-variant/30">
          <button className="w-full py-2 px-agentic-md bg-gradient-to-r from-agentic-primary-container to-agentic-secondary-container text-agentic-on-primary-container font-agentic-mono-label text-agentic-mono-label rounded-agentic-lg hover:opacity-90 transition-all active:scale-95">
            Initialize Agent
          </button>
        </div>
      </nav>

      {/* Main Workspace */}
      <main className="fixed inset-0 top-16 md:left-64 flex overflow-hidden">
        {/* Left Panel: Toolbox */}
        <aside className="w-72 bg-agentic-surface-container-lowest border-r border-agentic-outline-variant flex flex-col z-20">
          <div className="p-agentic-md border-b border-agentic-outline-variant bg-agentic-surface-container-low">
            <h2 className="font-agentic-headline-sm text-agentic-headline-sm text-agentic-primary mb-1">Toolbox</h2>
            <p className="text-[11px] text-agentic-on-surface-variant uppercase tracking-widest font-agentic-mono-label">Drag components to canvas</p>
          </div>
          <div className="flex-1 overflow-y-auto p-agentic-md space-y-agentic-lg">
            <section>
              <div className="text-[10px] text-agentic-on-surface-variant font-agentic-mono-label mb-agentic-md opacity-50 uppercase tracking-tighter">Connectors (MCP)</div>
              <div className="grid grid-cols-1 gap-agentic-sm">
                <div className="group flex items-center gap-agentic-md p-agentic-sm bg-agentic-surface-container-high/30 border border-agentic-outline-variant rounded-agentic-lg cursor-grab active:cursor-grabbing hover:bg-agentic-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-agentic-secondary">database</span>
                  <div>
                    <div className="text-agentic-body-sm font-semibold">GitHub MCP</div>
                    <div className="text-[10px] text-agentic-on-surface-variant">Repo & Issue Access</div>
                  </div>
                </div>
                <div className="group flex items-center gap-agentic-md p-agentic-sm bg-agentic-surface-container-high/30 border border-agentic-outline-variant rounded-agentic-lg cursor-grab active:cursor-grabbing hover:bg-agentic-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-agentic-secondary">cloud_sync</span>
                  <div>
                    <div className="text-agentic-body-sm font-semibold">AWS Lambda</div>
                    <div className="text-[10px] text-agentic-on-surface-variant">Serverless Execution</div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="text-[10px] text-agentic-on-surface-variant font-agentic-mono-label mb-agentic-md opacity-50 uppercase tracking-tighter">Autonomous Agents</div>
              <div className="grid grid-cols-1 gap-agentic-sm">
                <div className="group flex items-center gap-agentic-md p-agentic-sm bg-agentic-surface-container-high/30 border border-agentic-outline-variant rounded-agentic-lg cursor-grab active:cursor-grabbing hover:bg-agentic-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-agentic-primary">psychology_alt</span>
                  <div>
                    <div className="text-agentic-body-sm font-semibold">Agent Router</div>
                    <div className="text-[10px] text-agentic-on-surface-variant">Intent Classification</div>
                  </div>
                </div>
                <div className="group flex items-center gap-agentic-md p-agentic-sm bg-agentic-surface-container-high/30 border border-agentic-outline-variant rounded-agentic-lg cursor-grab active:cursor-grabbing hover:bg-agentic-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-agentic-primary">rocket_launch</span>
                  <div>
                    <div className="text-agentic-body-sm font-semibold">Deployment Agent</div>
                    <div className="text-[10px] text-agentic-on-surface-variant">CI/CD Orchestrator</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </aside>

        {/* Center: Workflow Canvas */}
        <section className="flex-1 relative workflow-grid bg-agentic-surface-dim overflow-hidden">
          <div className="absolute top-agentic-md left-agentic-md flex gap-agentic-xs z-10">
            <button className="bg-agentic-surface-container-high/80 backdrop-blur-md p-agentic-sm border border-agentic-outline-variant rounded-agentic-lg text-agentic-primary hover:bg-agentic-surface-container-highest transition-colors shadow-lg">
              <span className="material-symbols-outlined">zoom_in</span>
            </button>
            <button className="bg-agentic-surface-container-high/80 backdrop-blur-md p-agentic-sm border border-agentic-outline-variant rounded-agentic-lg text-agentic-on-surface-variant hover:bg-agentic-surface-container-highest transition-colors shadow-lg">
              <span className="material-symbols-outlined">zoom_out</span>
            </button>
          </div>
          <div className="absolute top-agentic-md right-agentic-md z-10">
            <button className="flex items-center gap-agentic-sm px-agentic-lg py-2 bg-agentic-primary text-agentic-on-primary font-bold rounded-full shadow-[0_0_20px_rgba(76,215,246,0.3)] hover:scale-105 active:scale-95 transition-all">
              <span className="material-symbols-outlined text-[18px]">play_arrow</span>
              <span>DEPLOY WORKFLOW</span>
            </button>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <path className="connector-line" d="M 280 350 C 400 350, 400 250, 520 250" fill="none" stroke="url(#gradient-flow)" strokeWidth="2"></path>
              <path d="M 280 350 C 400 350, 400 450, 520 450" fill="none" stroke="rgba(134,147,151,0.3)" strokeDasharray="4" strokeWidth="2"></path>
              <path className="connector-line" d="M 720 250 C 850 250, 850 350, 950 350" fill="none" stroke="url(#gradient-flow)" strokeWidth="2"></path>
              <defs>
                <linearGradient id="gradient-flow" x1="0%" x2="100%" y1="0%" y2="0%">
                  <stop offset="0%" stopColor="#4cd7f6"></stop>
                  <stop offset="100%" stopColor="#c0c1ff"></stop>
                </linearGradient>
              </defs>
            </svg>

            <div className="relative w-full h-full flex items-center justify-center">
              {/* Node 1: GitHub MCP */}
              <div className="absolute left-1/4 translate-x-[-150px] translate-y-[50px]">
                <div className="w-64 bg-agentic-surface-container-high/80 backdrop-blur-xl border border-agentic-primary/40 rounded-agentic-xl overflow-hidden node-glow">
                  <div className="bg-agentic-primary/10 px-agentic-md py-agentic-sm flex items-center justify-between border-b border-agentic-primary/20">
                    <div className="flex items-center gap-agentic-sm">
                      <span className="material-symbols-outlined text-agentic-primary text-[20px]">database</span>
                      <span className="font-agentic-mono-label text-agentic-mono-label font-bold text-agentic-primary uppercase">GitHub MCP</span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-agentic-primary agent-pulse shadow-[0_0_8px_#4cd7f6]"></span>
                  </div>
                  <div className="p-agentic-md space-y-agentic-sm">
                    <div className="flex items-center justify-between text-[10px] font-agentic-mono-label text-agentic-on-surface-variant uppercase">
                      <span>Status</span>
                      <span className="text-agentic-primary font-bold">Connected</span>
                    </div>
                    <div className="h-1 w-full bg-agentic-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-agentic-primary w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right Panel: Properties */}
        <aside className="w-80 bg-agentic-surface-container-lowest border-l border-agentic-outline-variant flex flex-col z-20">
          <div className="p-agentic-md border-b border-agentic-outline-variant bg-agentic-surface-container-low">
            <div className="flex items-center justify-between mb-agentic-md">
              <h2 className="font-agentic-headline-sm text-agentic-headline-sm text-agentic-primary">Properties</h2>
              <span className="material-symbols-outlined text-agentic-on-surface-variant text-[18px] cursor-pointer">settings</span>
            </div>
            <div className="flex items-center gap-agentic-md p-agentic-sm bg-agentic-surface-container-high/50 rounded-agentic-xl border border-agentic-tertiary/30">
              <div className="w-10 h-10 rounded-agentic-lg bg-agentic-tertiary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-agentic-tertiary">rocket_launch</span>
              </div>
              <div>
                <div className="text-agentic-body-sm font-bold">Deployment Agent</div>
                <div className="text-[10px] text-agentic-on-surface-variant font-agentic-mono-label">ID: AGNT-7742-PX</div>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-agentic-md space-y-agentic-lg">
            <section>
              <div className="text-[10px] text-agentic-on-surface-variant font-agentic-mono-label mb-agentic-md uppercase tracking-widest opacity-50">Configuration</div>
              <div className="space-y-agentic-md">
                <div className="space-y-agentic-xs">
                  <label className="text-[11px] font-agentic-mono-label text-agentic-on-surface-variant">TARGET ENVIRONMENT</label>
                  <select className="w-full bg-agentic-surface-container-high border-agentic-outline-variant rounded-agentic-lg text-agentic-body-sm text-agentic-on-surface focus:ring-agentic-primary focus:border-agentic-primary px-2 py-1">
                    <option>Production-Cluster-01</option>
                    <option>Staging-AWS-East</option>
                    <option>Local-Dev-Node</option>
                  </select>
                </div>
                <div className="space-y-agentic-xs">
                  <label className="text-[11px] font-agentic-mono-label text-agentic-on-surface-variant">AUTONOMY LEVEL</label>
                  <div className="flex items-center gap-agentic-sm">
                    <input className="flex-1 accent-agentic-primary" type="range" />
                    <span className="text-agentic-primary font-bold font-agentic-mono-label">0.85</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-agentic-sm bg-agentic-surface-container-high/30 rounded-agentic-lg border border-agentic-outline-variant">
                  <span className="text-agentic-body-sm">Require Approval</span>
                  <div 
                    className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors ${isRequireApproval ? 'bg-agentic-primary/20' : 'bg-agentic-surface-container-highest'}`}
                    onClick={() => setIsRequireApproval(!isRequireApproval)}
                  >
                    <div className={`absolute top-1 w-3 h-3 rounded-full transition-all ${isRequireApproval ? 'right-1 bg-agentic-primary' : 'left-1 bg-agentic-on-surface-variant'}`}></div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="text-[10px] text-agentic-on-surface-variant font-agentic-mono-label mb-agentic-md uppercase tracking-widest opacity-50">Telemetry Log</div>
              <div className="bg-agentic-surface-container-lowest p-agentic-md rounded-agentic-lg border border-agentic-outline-variant/30 font-agentic-mono-code text-[11px] h-48 overflow-y-auto leading-relaxed">
                <div className="text-agentic-primary/70">[09:41:02] INITIALIZING HANDSHAKE...</div>
                <div className="text-agentic-on-surface-variant">[09:41:03] AUTHENTICATING MCP TOKEN</div>
                <div className="text-agentic-on-surface-variant">[09:41:05] FETCHING GITHUB MANIFEST</div>
                <div className="text-agentic-secondary">[09:41:08] ROUTER: INTENT=DEPLOYMENT</div>
                <div className="text-agentic-tertiary">[09:41:10] AGENT: STARTING CI_PIPELINE_X</div>
                <div className="flex items-center gap-agentic-sm mt-agentic-md animate-pulse">
                  <div className="w-1 h-3 bg-agentic-primary"></div>
                  <span className="text-agentic-primary uppercase font-bold">System Ready_</span>
                </div>
              </div>
            </section>
          </div>
          <div className="p-agentic-md border-t border-agentic-outline-variant bg-agentic-surface-container-low grid grid-cols-2 gap-agentic-sm">
            <button className="py-2 border border-agentic-outline-variant rounded-agentic-lg text-[12px] font-bold hover:bg-agentic-surface-container-highest transition-colors uppercase">Reset</button>
            <button className="py-2 bg-agentic-primary-container text-agentic-on-primary-container rounded-agentic-lg text-[12px] font-bold hover:opacity-90 transition-all uppercase">Save Changes</button>
          </div>
        </aside>
      </main>
    </div>
  );
}
