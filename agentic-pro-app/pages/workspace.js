import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Workspace() {
  const [terminalLines, setTerminalLines] = useState([
    { text: 'tricode@remote:~/workspace$ yarn build:production', type: 'command' },
    { text: '[14:22:01] Compiled successfully.', type: 'info' },
    { text: '[14:22:02] Build targets: amd64, arm64', type: 'info' },
  ]);

  useEffect(() => {
    const lines = [
        "[14:22:18] Agent #092 evaluating manifest consistency...",
        "[14:22:20] Deployment cluster identified: TRICODE-PROD-EAST",
        "[14:22:22] Scaling complete. All systems nominal."
    ];
    let lineIndex = 0;

    const interval = setInterval(() => {
      if (lineIndex < lines.length) {
        setTerminalLines(prev => [...prev, { text: lines[lineIndex], type: 'agent' }]);
        lineIndex++;
      } else {
        clearInterval(interval);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-agentic-background text-agentic-on-surface font-agentic-body-md h-screen flex flex-col overflow-hidden">
      <Head>
        <title>TRICODE PRO V2.0 | Workspace</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        body { background-color: #0b1326; color: #dae2fd; }
        .glass-panel {
            background: rgba(15, 23, 42, 0.8);
            backdrop-filter: blur(16px);
            border: 1px solid #1e293b;
        }
        .code-editor-cursor {
            width: 2px;
            height: 1.2rem;
            background: #4cd7f6;
            animation: blink 1s infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }
        .terminal-scroll::-webkit-scrollbar { width: 4px; }
        .terminal-scroll::-webkit-scrollbar-thumb { background: #2d3449; border-radius: 2px; }
      `}</style>

      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 flex items-center justify-between px-agentic-md h-16 bg-agentic-surface-container-low/80 backdrop-blur-xl border-b border-agentic-outline-variant shadow-sm">
        <div className="flex items-center gap-agentic-md">
          <span className="font-agentic-headline-sm text-agentic-headline-sm font-bold text-agentic-primary tracking-tighter uppercase">TRICODE PRO V2.0</span>
          <div className="hidden md:flex items-center bg-agentic-surface-container-high px-agentic-sm py-1 rounded border border-agentic-outline-variant">
            <span className="material-symbols-outlined text-agentic-primary text-sm mr-2">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-agentic-body-sm w-64 placeholder:text-agentic-on-surface-variant" placeholder="Search architecture..." type="text"/>
          </div>
        </div>
        <div className="flex items-center gap-agentic-sm">
          <span className="material-symbols-outlined p-2 hover:bg-agentic-surface-container-high transition-colors cursor-pointer text-agentic-primary">hub</span>
          <span className="material-symbols-outlined p-2 hover:bg-agentic-surface-container-high transition-colors cursor-pointer text-agentic-primary">monitoring</span>
          <div className="h-8 w-8 rounded-full overflow-hidden border border-agentic-primary ml-2 bg-agentic-surface-container-high"></div>
        </div>
      </header>

      {/* SideNavBar */}
      <nav className="fixed left-0 top-0 h-full w-64 flex flex-col py-agentic-md bg-agentic-surface-container-lowest border-r border-agentic-outline-variant hidden md:flex pt-20">
        <div className="px-agentic-md mb-agentic-lg">
          <div className="flex items-center gap-agentic-sm mb-agentic-base">
            <span className="material-symbols-outlined text-agentic-primary-container text-agentic-headline-md" style={{fontVariationSettings: "'FILL' 1"}}>terminal</span>
            <span className="font-agentic-headline-md text-agentic-headline-md text-agentic-primary-container uppercase tracking-tighter">TRICODE OS</span>
          </div>
          <span className="font-agentic-mono-label text-agentic-mono-label text-agentic-on-surface-variant uppercase">V2.0 Autonomous</span>
        </div>
        <div className="flex flex-col flex-1 gap-1">
          <div className="flex items-center gap-agentic-md px-agentic-md py-2 bg-agentic-secondary-container/20 text-agentic-primary border-l-2 border-agentic-primary cursor-pointer transition-all duration-200 uppercase font-agentic-mono-label text-agentic-mono-label">
            <span className="material-symbols-outlined">memory</span>
            <span>Agent Console</span>
          </div>
          {/* Add more side nav items */}
        </div>
      </nav>

      {/* Main Workspace */}
      <main className="md:ml-64 pt-16 h-screen flex flex-col overflow-hidden">
        <div className="flex-1 flex overflow-hidden">
          {/* Left Pane: Explorer */}
          <aside className="w-64 glass-panel border-r-0 hidden lg:flex flex-col">
            <div className="p-agentic-md border-b border-agentic-outline-variant flex justify-between items-center bg-agentic-surface-container-low/40">
              <span className="font-agentic-mono-label text-agentic-mono-label text-agentic-primary uppercase tracking-tighter">Explorer</span>
              <span className="material-symbols-outlined text-sm cursor-pointer hover:text-agentic-primary transition-colors">create_new_folder</span>
            </div>
            <div className="flex-1 overflow-y-auto terminal-scroll p-agentic-sm">
              <div className="space-y-1">
                <details open>
                  <summary className="flex items-center gap-2 font-agentic-mono-label text-agentic-on-surface-variant py-1 cursor-pointer hover:text-agentic-on-surface">
                    <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
                    <span className="material-symbols-outlined text-sm text-agentic-primary">folder</span>
                    src/services/worker
                  </summary>
                  <div className="pl-6 space-y-1 mt-1 font-agentic-mono-label text-xs">
                    <div className="flex items-center gap-2 text-agentic-on-surface py-1 bg-agentic-surface-container-high/40 rounded px-2 border-l border-agentic-primary">
                      <span className="material-symbols-outlined text-sm text-agentic-secondary">javascript</span>
                      pipeline-orchestrator.ts
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </aside>

          {/* Center Pane: Editor */}
          <section className="flex-1 flex flex-col min-w-0">
            <div className="h-10 bg-agentic-surface-container-low flex items-center border-b border-agentic-outline-variant px-2 gap-1">
              <div className="flex items-center gap-2 px-4 py-2 bg-agentic-surface-container-highest border-t-2 border-agentic-primary text-agentic-primary font-agentic-mono-label text-xs uppercase tracking-tighter">
                <span className="material-symbols-outlined text-xs">javascript</span>
                pipeline-orchestrator.ts
              </div>
            </div>
            <div className="flex-1 relative flex">
              <div className="flex-1 bg-agentic-surface-container-lowest font-agentic-mono-code text-agentic-mono-code p-agentic-md overflow-y-auto terminal-scroll relative">
                <div className="flex gap-agentic-lg">
                  <div className="text-agentic-outline-variant text-right select-none w-8 border-r border-agentic-outline-variant/30 pr-2">
                    1<br/>2<br/>3<br/>4<br/>5
                  </div>
                  <div className="flex-1 text-xs leading-relaxed">
                    <span className="text-agentic-tertiary">import</span> {`{ Orchestrator }`} <span className="text-agentic-tertiary">from</span> <span className="text-agentic-primary-container">"@tricode/core"</span>;<br/>
                    <span className="text-agentic-tertiary">import</span> {`{ KubernetesDriver }`} <span className="text-agentic-tertiary">from</span> <span className="text-agentic-primary-container">"@tricode/k8s"</span>;<br/><br/>
                    <span className="text-agentic-tertiary">export class</span> <span className="text-agentic-secondary">PipelineManager</span> {`{`}<br/>
                    <span className="flex items-center gap-1">
                      <span className="text-agentic-primary">await</span> <span className="text-agentic-primary">this</span>.driver.<span className="text-agentic-primary-fixed-dim">scale</span>(<span className="text-agentic-primary-container">10</span>);<span className="code-editor-cursor"></span>
                    </span>
                    {`}`}
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal */}
            <div className="h-48 border-t border-agentic-outline-variant flex flex-col bg-agentic-surface-container-lowest">
              <div className="flex items-center justify-between px-agentic-md py-2 bg-agentic-surface-container-low border-b border-agentic-outline-variant">
                <div className="flex items-center gap-agentic-lg">
                  <span className="font-agentic-mono-label text-[11px] text-agentic-primary border-b border-agentic-primary pb-0.5 uppercase tracking-tighter cursor-pointer">Terminal</span>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto terminal-scroll p-agentic-md font-agentic-mono-code text-xs text-agentic-on-surface-variant space-y-1">
                {terminalLines.map((line, i) => (
                  <div key={i} className="flex gap-2">
                    {line.type === 'command' && <span className="text-agentic-primary">tricode@remote:~/workspace$</span>}
                    <span className={line.type === 'agent' ? 'text-agentic-primary-fixed-dim' : ''}>{line.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Right Pane: Telemetry */}
          <aside className="w-72 glass-panel border-l border-agentic-outline-variant flex flex-col hidden lg:flex">
            <div className="p-agentic-md border-b border-agentic-outline-variant bg-agentic-surface-container-low/40">
              <span className="font-agentic-mono-label text-agentic-mono-label text-agentic-primary uppercase tracking-tighter">Telemetry</span>
            </div>
            <div className="p-agentic-md space-y-agentic-md">
              <div className="bg-agentic-surface-container-highest/40 p-agentic-md border border-agentic-outline-variant rounded-agentic-lg relative overflow-hidden">
                <p className="font-agentic-mono-label text-[10px] text-agentic-on-surface-variant mb-1 uppercase tracking-tighter">Latency (Global)</p>
                <p className="font-agentic-headline-sm text-agentic-headline-sm text-agentic-on-surface">24ms</p>
              </div>
            </div>
          </aside>
        </div>

        {/* Footer */}
        <footer className="h-6 bg-agentic-primary text-agentic-on-primary-container px-agentic-md flex items-center justify-between text-[10px] font-agentic-mono-label uppercase tracking-widest">
           <div className="flex items-center gap-agentic-lg">
              <span>SSH: 192.168.1.104</span>
              <span>Encrypted_AES256</span>
           </div>
           <div className="flex items-center gap-agentic-lg">
              <span>TypeScript 5.2</span>
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-agentic-on-primary-container"></span> Master</span>
           </div>
        </footer>
      </main>
    </div>
  );
}
