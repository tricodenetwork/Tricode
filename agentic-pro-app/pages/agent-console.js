import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function AgentConsole() {
  const [isToastVisible, setIsToastVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsToastVisible(true);
      const hideTimer = setTimeout(() => {
        setIsToastVisible(false);
      }, 5000);
      return () => clearTimeout(hideTimer);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-agentic-surface text-agentic-on-surface font-agentic-body-md h-screen overflow-hidden">
      <Head>
        <title>TRICODE PRO V2.0 | Agent Console</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        @keyframes pulse-glow {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.1); }
        }
        .glow-dot {
            animation: pulse-glow 2s infinite ease-in-out;
        }
        .glass-panel {
            backdrop-filter: blur(16px);
            background: rgba(15, 23, 42, 0.8);
            border: 1px solid #1e293b;
        }
        .agent-active-glow {
            box-shadow: 0 0 15px rgba(6, 182, 212, 0.15);
        }
        ::-webkit-scrollbar {
            width: 4px;
        }
        ::-webkit-scrollbar-track {
            background: #060e20;
        }
        ::-webkit-scrollbar-thumb {
            background: #3d494c;
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #4cd7f6;
        }
      `}</style>

      {/* Top Navigation Bar */}
      <header className="fixed top-0 w-full z-50 flex items-center justify-between px-agentic-md h-16 bg-agentic-surface-container-low/80 backdrop-blur-xl border-b border-agentic-outline-variant shadow-sm">
        <div className="flex items-center gap-agentic-md">
          <span className="font-agentic-headline-sm text-agentic-headline-sm font-bold text-agentic-primary tracking-tighter uppercase">TRICODE PRO V2.0</span>
          <div className="h-6 w-px bg-agentic-outline-variant mx-agentic-sm"></div>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-agentic-on-surface-variant text-sm">search</span>
            <input className="bg-agentic-surface-container-high border-none text-agentic-body-sm font-agentic-body-sm rounded-agentic-lg pl-10 pr-4 py-1.5 w-64 focus:ring-1 focus:ring-agentic-primary" placeholder="Search system logs..." type="text"/>
          </div>
        </div>
        <div className="flex items-center gap-agentic-lg">
          <div className="flex items-center gap-agentic-md">
            <span className="material-symbols-outlined text-agentic-primary cursor-pointer hover:bg-agentic-surface-container-high transition-colors p-2 rounded">hub</span>
            <span className="material-symbols-outlined text-agentic-on-surface-variant cursor-pointer hover:bg-agentic-surface-container-high transition-colors p-2 rounded">monitoring</span>
            <div className="relative">
              <span className="material-symbols-outlined text-agentic-on-surface-variant cursor-pointer hover:bg-agentic-surface-container-high transition-colors p-2 rounded">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-agentic-primary rounded-full"></span>
            </div>
          </div>
          <div className="flex items-center gap-agentic-sm border-l border-agentic-outline-variant pl-agentic-lg">
            <div className="h-8 w-8 rounded-full bg-agentic-surface-container-high border border-agentic-primary/30 overflow-hidden">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbgZGodYOZOPJ4BfvYThz2rZfWsJaXbCFXXUDH-fsrsEHQCZpGc0U53Yn56QWJ3BT3zQq9A3weV6WQMnyTucWY8YpRAMnd9SI-iwtRCX8wW4SXONKQUXnKpmP6j3Hrhex0VRcOCspX-soYQtPNXHxTxu_WUhpXREfl4ySRiIEKYU-DjcgixfRowHKiHpRtauuAP0s5XHtJaDF_Yu7xFUxa-4r-kV61eMHewF055ZZ-6EExdPgmVjG64JUila4v08LTZT4_qV0MCzw" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-agentic-mono-label font-agentic-mono-label text-agentic-primary">ARCHITECT_01</span>
              <span className="text-[10px] font-agentic-mono-label text-agentic-on-surface-variant">LVL_7_AUTH</span>
            </div>
          </div>
        </div>
      </header>

      {/* Side Navigation Bar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-agentic-surface-container-lowest border-r border-agentic-outline-variant flex flex-col pt-20 pb-agentic-md z-40">
        <div className="px-agentic-md mb-agentic-lg">
          <div className="flex items-center gap-agentic-sm mb-agentic-xs">
            <span className="material-symbols-outlined text-agentic-primary-container font-agentic-headline-md text-agentic-headline-md">memory</span>
            <div className="flex flex-col">
              <span className="font-agentic-headline-sm text-agentic-headline-sm text-agentic-on-surface font-bold tracking-tight uppercase">TRICODE OS</span>
              <span className="font-agentic-mono-label text-agentic-mono-label text-agentic-on-surface-variant">V2.0 Autonomous</span>
            </div>
          </div>
        </div>
        <nav className="flex-1 px-agentic-sm space-y-1">
          <a className="flex items-center gap-agentic-md px-agentic-md py-2 text-agentic-on-surface-variant hover:bg-agentic-surface-container-high/50 transition-all font-agentic-mono-label text-agentic-mono-label group" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            <span>Mission Control</span>
          </a>
          <a className="flex items-center gap-agentic-md px-agentic-md py-2 bg-agentic-secondary-container/20 text-agentic-primary border-l-2 border-agentic-primary font-agentic-mono-label text-agentic-mono-label group" href="#">
            <span className="material-symbols-outlined">memory</span>
            <span>Agent Console</span>
          </a>
          <a className="flex items-center gap-agentic-md px-agentic-md py-2 text-agentic-on-surface-variant hover:bg-agentic-surface-container-high/50 transition-all font-agentic-mono-label text-agentic-mono-label group" href="#">
            <span className="material-symbols-outlined">bolt</span>
            <span>AI Sprint Board</span>
          </a>
          <a className="flex items-center gap-agentic-md px-agentic-md py-2 text-agentic-on-surface-variant hover:bg-agentic-surface-container-high/50 transition-all font-agentic-mono-label text-agentic-mono-label group" href="#">
            <span className="material-symbols-outlined">account_tree</span>
            <span>Architecture</span>
          </a>
          <a className="flex items-center gap-agentic-md px-agentic-md py-2 text-agentic-on-surface-variant hover:bg-agentic-surface-container-high/50 transition-all font-agentic-mono-label text-agentic-mono-label group" href="#">
            <span className="material-symbols-outlined">psychology</span>
            <span>Knowledge Brain</span>
          </a>
          <a className="flex items-center gap-agentic-md px-agentic-md py-2 text-agentic-on-surface-variant hover:bg-agentic-surface-container-high/50 transition-all font-agentic-mono-label text-agentic-mono-label group" href="#">
            <span className="material-symbols-outlined">rocket_launch</span>
            <span>Deployment</span>
          </a>
          <a className="flex items-center gap-agentic-md px-agentic-md py-2 text-agentic-on-surface-variant hover:bg-agentic-surface-container-high/50 transition-all font-agentic-mono-label text-agentic-mono-label group" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span>Settings</span>
          </a>
        </nav>
        <div className="px-agentic-md mt-auto pt-agentic-md border-t border-agentic-outline-variant/30">
          <button className="w-full py-2.5 bg-gradient-to-r from-agentic-primary-container to-agentic-secondary-container text-agentic-on-primary-container font-agentic-mono-label text-agentic-mono-label rounded mb-agentic-lg active:scale-95 transition-transform flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-sm">add_circle</span>
            Initialize Agent
          </button>
          <div className="space-y-1">
            <a className="flex items-center gap-agentic-md px-agentic-md py-1.5 text-agentic-on-surface-variant hover:bg-agentic-surface-container-high/50 transition-all font-agentic-mono-label text-agentic-mono-label" href="#">
              <span className="material-symbols-outlined text-sm">terminal</span>
              <span>System Logs</span>
            </a>
            <a className="flex items-center gap-agentic-md px-agentic-md py-1.5 text-agentic-on-surface-variant hover:bg-agentic-surface-container-high/50 transition-all font-agentic-mono-label text-agentic-mono-label" href="#">
              <span className="material-symbols-outlined text-sm">help_center</span>
              <span>Support</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-64 pt-16 h-screen flex overflow-hidden">
        {/* Left: Active Agents List */}
        <section className="w-72 bg-agentic-surface-container-lowest border-r border-agentic-outline-variant flex flex-col shrink-0">
          <div className="p-agentic-md border-b border-agentic-outline-variant">
            <h3 className="font-agentic-mono-label text-agentic-mono-label text-agentic-primary-container uppercase tracking-widest flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">sensors</span>
              Active Agents
            </h3>
          </div>
          <div className="flex-1 overflow-y-auto p-agentic-sm space-y-agentic-sm">
            {/* Agent Item */}
            <div className="p-agentic-md rounded-agentic-lg glass-panel agent-active-glow flex items-center gap-agentic-md border-l-4 border-agentic-primary cursor-pointer hover:bg-agentic-surface-container-high/30 transition-colors">
              <div className="relative">
                <div className="w-10 h-10 rounded bg-agentic-surface-container-high border border-agentic-primary/20 flex items-center justify-center overflow-hidden">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgjaW3FkukR8kic68KN__EVlXtfRNgrgUS5M-X-VuY84Qq7qggRPlSnvqPPuR2N-hflos_NeUIj9jRUAlf-vdUigCsqX3_mvor43rwr0EEd-RHySPoTr4DQdtmrhHJRjn1Sz3CxgT9pxt7gJA_CbGt55XGMmfo8BmDT5UEt91kX2ZAl4Db_Hbrnt3_ynptDTvILEgnSeHvVh7wcffgjadXPfgpGVoadOwjouyr4-WsdQnqtgtHrvAOoVHplhh2Qlmg79PdYjPRRwU" alt="Agent" />
                </div>
                <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-agentic-primary rounded-full glow-dot border-2 border-agentic-surface"></span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-agentic-mono-label text-agentic-mono-label text-agentic-primary">KUBERNETES_OPS</span>
                  <span className="text-[9px] px-1 bg-agentic-primary/10 text-agentic-primary border border-agentic-primary/20 rounded">BUSY</span>
                </div>
                <p className="text-agentic-body-sm text-agentic-on-surface-variant truncate">Scaling cluster node-p2...</p>
              </div>
            </div>
            {/* Agent Item */}
            <div className="p-agentic-md rounded-agentic-lg bg-agentic-surface-container hover:bg-agentic-surface-container-high transition-colors flex items-center gap-agentic-md cursor-pointer">
              <div className="relative">
                <div className="w-10 h-10 rounded bg-agentic-surface-container-high border border-agentic-outline-variant flex items-center justify-center overflow-hidden">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY1ojrNy45lGgTe9a6AZ52XChUs9dp-EAiNv9JjOmOCs-8Dr0B0vCYtDRk2uAxQVfqoqO07iSIcsy0U0TBcM7JY9YMlf0BjNYeyRmX_4TJt9MV2g4NAY6KHNGTqdN9c0jKqcpfMx-YJrGV0IItRUrx-ihNSoOSO02edsmkjMAByS1V9p9LLqBVH6gjn6pEoaRsdkhJxuQJ52X5upG4JaPJZj1FLHlezzvtJCQcKpXsKlroL7anNLmX6LuaEZoQqp4EdDT-3lk0dfY" alt="Agent" />
                </div>
                <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-agentic-secondary-container rounded-full border-2 border-agentic-surface"></span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-agentic-mono-label text-agentic-mono-label text-agentic-on-surface">JIRA_AUTO_TRIAGE</span>
                  <span className="text-[9px] px-1 bg-agentic-surface-variant text-agentic-on-surface-variant border border-agentic-outline-variant rounded">IDLE</span>
                </div>
                <p className="text-agentic-body-sm text-agentic-on-surface-variant truncate">Monitoring backlog...</p>
              </div>
            </div>
          </div>
          <div className="p-agentic-md bg-agentic-surface-container-lowest/50 border-t border-agentic-outline-variant">
            <div className="flex justify-between text-agentic-mono-label text-agentic-on-surface-variant mb-2">
              <span>Cluster Load</span>
              <span className="text-agentic-primary">42%</span>
            </div>
            <div className="w-full bg-agentic-surface-container-high h-1.5 rounded-full overflow-hidden">
              <div className="bg-agentic-primary h-full w-[42%] shadow-[0_0_8px_rgba(6,182,212,0.5)]"></div>
            </div>
          </div>
        </section>

        {/* Center: Conversation Panel */}
        <section className="flex-1 flex flex-col bg-agentic-surface relative">
          <div className="h-14 px-agentic-lg flex items-center justify-between border-b border-agentic-outline-variant bg-agentic-surface/50 backdrop-blur-md">
            <div className="flex items-center gap-agentic-md">
              <span className="material-symbols-outlined text-agentic-primary">chat_bubble</span>
              <span className="font-agentic-headline-sm text-agentic-headline-sm">Session: <span className="font-agentic-mono-code">NODE_SCALING_INCIDENT_04</span></span>
            </div>
            <div className="flex items-center gap-agentic-sm">
              <button className="flex items-center gap-2 px-3 py-1.5 bg-agentic-surface-container-high border border-agentic-outline-variant rounded text-agentic-mono-label hover:bg-agentic-surface-variant transition-colors">
                <span className="material-symbols-outlined text-sm">share_windows</span>
                Delegate
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-agentic-primary-container/10 border border-agentic-primary-container text-agentic-primary rounded text-agentic-mono-label hover:bg-agentic-primary-container/20 transition-colors">
                <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>security</span>
                Permissions
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-agentic-lg space-y-agentic-lg">
            <div className="flex flex-col items-center">
              <div className="px-4 py-1 rounded-full bg-agentic-surface-container-high text-[10px] font-agentic-mono-label text-agentic-on-surface-variant uppercase tracking-widest border border-agentic-outline-variant/30">
                Session Initialized: 2023-11-24 14:02:11
              </div>
            </div>

            <div className="flex gap-agentic-md max-w-[85%]">
              <div className="shrink-0 w-8 h-8 rounded-full bg-agentic-surface-container-high flex items-center justify-center border border-agentic-outline-variant">
                <span className="material-symbols-outlined text-agentic-primary text-lg">person</span>
              </div>
              <div className="flex flex-col gap-agentic-sm">
                <span className="text-agentic-mono-label text-agentic-on-surface-variant">ARCHITECT_01</span>
                <div className="p-agentic-md rounded-agentic-xl bg-agentic-surface-container-high border border-agentic-outline-variant text-agentic-body-md">
                  Analyze current node pressure in the <code className="bg-agentic-surface-container-lowest px-1 rounded text-agentic-primary">production-east-01</code> cluster. If CPU utilization exceeds 85%, propose a scaling strategy for the <code className="bg-agentic-surface-container-lowest px-1 rounded text-agentic-primary">data-shard</code> group.
                </div>
              </div>
            </div>

            <div className="flex gap-agentic-md flex-row-reverse self-end max-w-[85%]">
              <div className="shrink-0 w-8 h-8 rounded-full bg-agentic-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-agentic-on-primary-container text-lg">smart_toy</span>
              </div>
              <div className="flex flex-col gap-agentic-sm items-end">
                <span className="text-agentic-mono-label text-agentic-primary">KUBERNETES_OPS</span>
                <div className="p-agentic-md rounded-agentic-xl bg-agentic-primary-container/5 border border-agentic-primary-container/30 text-agentic-body-md text-right">
                  Analyzing cluster telemetry now. Identified pressure on nodes 4-7.
                </div>
                <div className="flex items-center gap-3 px-4 py-2 rounded bg-agentic-surface-container-lowest border border-agentic-primary/20 mt-1">
                  <span className="material-symbols-outlined text-agentic-primary text-sm glow-dot">settings_ethernet</span>
                  <span className="text-agentic-mono-code text-[11px] text-agentic-on-surface">CALLING: <span className="text-agentic-primary">k8s_get_metrics(cluster="prod-east-01")</span></span>
                  <span className="w-1.5 h-1.5 bg-agentic-primary rounded-full glow-dot"></span>
                </div>
              </div>
            </div>

            <div className="flex gap-agentic-md flex-row-reverse self-end max-w-[90%]">
              <div className="shrink-0 w-8 h-8 rounded-full bg-agentic-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-agentic-on-primary-container text-lg">smart_toy</span>
              </div>
              <div className="flex flex-col gap-agentic-sm items-end">
                <span className="text-agentic-mono-label text-agentic-primary">KUBERNETES_OPS</span>
                <div className="p-agentic-lg rounded-agentic-xl glass-panel border-agentic-primary/20 text-agentic-body-md space-y-agentic-md">
                  <p>Metrics confirmed. <code className="text-agentic-primary">cpu_utilization</code> is currently at <span className="text-agentic-primary font-bold">88.4%</span> for the <code className="text-agentic-primary">data-shard</code> group. </p>
                  <div className="bg-agentic-surface-container-lowest p-agentic-sm border border-agentic-outline-variant rounded font-agentic-mono-code text-xs text-agentic-on-surface-variant overflow-x-auto">
                    [STRATEGY_PROPOSAL]<br/>
                    &gt; ReplicaCount: 5 -&gt; 8<br/>
                    &gt; PriorityClass: high-availability<br/>
                    &gt; Est. Latency Impact: -120ms
                  </div>
                  <p>Awaiting authorization to apply <code className="text-agentic-primary">kubectl scale</code>.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-agentic-lg border-t border-agentic-outline-variant bg-agentic-surface-container-lowest/50">
            <div className="relative glass-panel rounded-agentic-xl border-agentic-primary/20 focus-within:ring-2 focus-within:ring-agentic-primary/40 transition-all p-2">
              <textarea className="w-full bg-transparent border-none text-agentic-on-surface placeholder-agentic-on-surface-variant/50 focus:ring-0 font-agentic-mono-code resize-none h-20" placeholder="Execute command or grant permission..." rows={3}></textarea>
              <div className="flex justify-between items-center px-2 py-1">
                <div className="flex gap-agentic-sm">
                  <button className="p-1.5 text-agentic-on-surface-variant hover:text-agentic-primary transition-colors">
                    <span className="material-symbols-outlined text-sm">attach_file</span>
                  </button>
                  <button className="p-1.5 text-agentic-on-surface-variant hover:text-agentic-primary transition-colors">
                    <span className="material-symbols-outlined text-sm">terminal</span>
                  </button>
                </div>
                <div className="flex gap-agentic-md">
                  <button className="px-4 py-1.5 bg-agentic-surface-container-high hover:bg-agentic-surface-variant text-agentic-on-surface-variant font-agentic-mono-label text-agentic-mono-label rounded border border-agentic-outline-variant transition-colors">Cancel</button>
                  <button className="px-6 py-1.5 bg-agentic-primary text-agentic-on-primary-container font-agentic-mono-label text-agentic-mono-label rounded-md font-bold shadow-lg shadow-agentic-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                    Execute Proposal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right: Agent Internal Memory & Activity Log */}
        <section className="w-80 bg-agentic-surface-container-lowest border-l border-agentic-outline-variant flex flex-col shrink-0">
          <div className="flex-1 flex flex-col overflow-hidden border-b border-agentic-outline-variant">
            <div className="p-agentic-md border-b border-agentic-outline-variant flex justify-between items-center bg-agentic-surface-container-low">
              <h3 className="font-agentic-mono-label text-agentic-mono-label text-agentic-on-surface uppercase flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-agentic-primary" style={{fontVariationSettings: "'FILL' 1"}}>psychology</span>
                Internal Memory
              </h3>
              <span className="text-[10px] font-agentic-mono-label text-agentic-on-surface-variant">4.2MB / 128MB</span>
            </div>
            <div className="flex-1 overflow-y-auto p-agentic-md space-y-agentic-md bg-agentic-surface-container-lowest">
              <div className="space-y-agentic-sm">
                <div className="text-[10px] font-agentic-mono-label text-agentic-primary-container uppercase tracking-widest opacity-70">Current Context</div>
                <div className="p-agentic-sm bg-agentic-surface-container-high/50 border border-agentic-outline-variant rounded text-xs font-agentic-mono-code text-agentic-on-surface-variant">
                  {`{
    "cluster": "prod-east-01",
    "focus": "auto-scaling",
    "target": "data-shard-pod-group",
    "safety_mode": "strict"
}`}
                </div>
              </div>
              <div className="space-y-agentic-sm">
                <div className="text-[10px] font-agentic-mono-label text-agentic-primary-container uppercase tracking-widest opacity-70">Knowledge Graph Fragments</div>
                <div className="flex flex-wrap gap-agentic-xs">
                  <span className="px-2 py-1 bg-agentic-surface-container-high rounded text-[10px] font-agentic-mono-label border border-agentic-outline-variant">k8s-api-v1.27</span>
                  <span className="px-2 py-1 bg-agentic-surface-container-high rounded text-[10px] font-agentic-mono-label border border-agentic-outline-variant">prometheus-v3</span>
                  <span className="px-2 py-1 bg-agentic-surface-container-high rounded text-[10px] font-agentic-mono-label border border-agentic-outline-variant">scaling-policy-ref</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="p-agentic-md border-b border-agentic-outline-variant flex justify-between items-center bg-agentic-surface-container-low">
              <h3 className="font-agentic-mono-label text-agentic-mono-label text-agentic-on-surface uppercase flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-agentic-primary">construction</span>
                Tool Activity Log
              </h3>
              <span className="text-agentic-primary text-[10px] animate-pulse">STREAMING</span>
            </div>
            <div className="flex-1 overflow-y-auto font-agentic-mono-code text-[11px] p-0 bg-[#060e20]">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[9px] text-agentic-on-surface-variant uppercase border-b border-agentic-outline-variant/30">
                    <th className="p-2 font-medium">Tool</th>
                    <th className="p-2 font-medium">Action</th>
                    <th className="p-2 font-medium">Stat</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-agentic-outline-variant/10">
                  <tr className="hover:bg-agentic-primary/5 transition-colors group">
                    <td className="p-2 text-agentic-primary">K8S</td>
                    <td className="p-2 text-agentic-on-surface-variant">LIST_PODS</td>
                    <td className="p-2 text-agentic-primary">200</td>
                  </tr>
                  <tr className="hover:bg-agentic-primary/5 transition-colors group">
                    <td className="p-2 text-[#6e7681]">GITHUB</td>
                    <td className="p-2 text-agentic-on-surface-variant">CHECK_PR</td>
                    <td className="p-2 text-agentic-on-surface-variant">IDLE</td>
                  </tr>
                  <tr className="hover:bg-agentic-primary/5 transition-colors group">
                    <td className="p-2 text-[#0052cc]">JIRA</td>
                    <td className="p-2 text-agentic-on-surface-variant">UPDATE_ISSUE</td>
                    <td className="p-2 text-agentic-primary">SUCCESS</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Toast */}
      {isToastVisible && (
        <div className="fixed bottom-6 right-6 glass-panel border-agentic-primary/40 px-agentic-lg py-agentic-md flex items-center gap-agentic-md rounded shadow-xl transition-transform duration-300 z-[100]">
          <div className="w-8 h-8 rounded-full bg-agentic-primary/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-agentic-primary text-sm glow-dot">bolt</span>
          </div>
          <div>
            <div className="text-agentic-mono-label font-bold text-agentic-primary">SYSTEM ALERT</div>
            <div className="text-[11px] text-agentic-on-surface-variant">Node scaling initiated successfully.</div>
          </div>
          <button className="text-agentic-on-surface-variant hover:text-agentic-on-surface" onClick={() => setIsToastVisible(false)}>
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>
      )}
    </div>
  );
}
