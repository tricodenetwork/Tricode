import React, { useEffect, useRef } from 'react';
import Head from 'next/head';

export default function KnowledgeBrain() {
  const sparklineRef = useRef(null);

  useEffect(() => {
    const canvas = sparklineRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const data = [20, 25, 22, 30, 28, 35, 32, 45, 42, 50, 48, 55];
    const width = canvas.width;
    const height = canvas.height;
    const step = width / (data.length - 1);
    
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.strokeStyle = '#4cd7f6';
    ctx.lineWidth = 2;
    ctx.lineJoin = 'round';
    
    ctx.moveTo(0, height - (data[0] / 60) * height);
    for (let i = 1; i < data.length; i++) {
        ctx.lineTo(i * step, height - (data[i] / 60) * height);
    }
    ctx.stroke();
    
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, 'rgba(76, 215, 246, 0.2)');
    gradient.addColorStop(1, 'rgba(76, 215, 246, 0)');
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.fillStyle = gradient;
    ctx.fill();
  }, []);

  return (
    <div className="bg-agentic-background text-agentic-on-background font-agentic-body-md min-h-screen selection:bg-agentic-primary-container selection:text-agentic-on-primary-container">
      <Head>
        <title>TRICODE PRO V2.0 | Knowledge Brain</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        body { background-color: #0b1326; color: #dae2fd; }
        .glass-panel { backdrop-filter: blur(16px); background: rgba(15, 23, 42, 0.8); border: 1px solid #1e293b; }
        .node-glow { filter: drop-shadow(0 0 8px rgba(76, 215, 246, 0.3)); }
        .pulse-dot { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: .5; transform: scale(1.1); } }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #3d494c; border-radius: 2px; }
      `}</style>

      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 flex items-center justify-between px-agentic-md h-16 bg-agentic-surface-container-low/80 backdrop-blur-xl border-b border-agentic-outline-variant shadow-sm">
        <div className="flex items-center gap-agentic-lg">
          <span className="font-agentic-headline-sm text-agentic-headline-sm font-bold text-agentic-primary tracking-tighter uppercase">TRICODE PRO V2.0</span>
          <div className="hidden md:flex items-center relative group">
            <span className="material-symbols-outlined absolute left-3 text-agentic-on-surface-variant text-[20px]">search</span>
            <input className="bg-agentic-surface-container-highest border-none focus:ring-1 focus:ring-agentic-primary rounded-agentic-lg pl-10 pr-4 py-1.5 w-96 text-agentic-body-md font-agentic-body-md transition-all" placeholder="Semantic & RAG Search..." type="text"/>
          </div>
        </div>
        <div className="flex items-center gap-agentic-md">
          <button className="material-symbols-outlined text-agentic-on-surface-variant hover:bg-agentic-surface-container-high transition-colors p-2 rounded-full cursor-pointer active:scale-95">hub</button>
          <button className="material-symbols-outlined text-agentic-on-surface-variant hover:bg-agentic-surface-container-high transition-colors p-2 rounded-full cursor-pointer active:scale-95">monitoring</button>
          <button className="material-symbols-outlined text-agentic-primary hover:bg-agentic-surface-container-high transition-colors p-2 rounded-full cursor-pointer active:scale-95 relative">
            notifications
            <span className="absolute top-2 right-2 w-2 h-2 bg-agentic-primary rounded-full"></span>
          </button>
        </div>
      </header>

      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-agentic-surface-container-lowest border-r border-agentic-outline-variant flex flex-col py-agentic-md z-40 hidden md:flex">
        <div className="px-agentic-md mb-agentic-xl pt-16">
          <div className="flex items-center gap-agentic-sm">
            <div className="w-10 h-10 bg-agentic-primary-container/20 rounded flex items-center justify-center">
              <span className="material-symbols-outlined text-agentic-primary" style={{fontVariationSettings: "'FILL' 1"}}>psychology</span>
            </div>
            <div>
              <h2 className="font-agentic-headline-md text-agentic-headline-md text-agentic-primary-container leading-none uppercase tracking-tighter">TRICODE OS</h2>
              <p className="font-agentic-mono-label text-agentic-mono-label text-agentic-on-surface-variant uppercase">V2.0 Autonomous</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 px-agentic-sm space-y-1">
          <div className="flex items-center gap-agentic-md px-agentic-md py-3 text-agentic-on-surface-variant hover:bg-agentic-surface-container-high/50 transition-all duration-200 cursor-pointer font-agentic-mono-label text-agentic-mono-label">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="uppercase tracking-tighter">Mission Control</span>
          </div>
          <div className="flex items-center gap-agentic-md px-agentic-md py-3 bg-agentic-secondary-container/20 text-agentic-primary border-l-2 border-agentic-primary transition-all duration-200 cursor-pointer font-agentic-mono-label text-agentic-mono-label">
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>psychology</span>
            <span className="uppercase tracking-tighter">Knowledge Brain</span>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="md:pl-64 pt-16 min-h-screen">
        <div className="p-agentic-lg max-w-[1600px] mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-agentic-xl gap-agentic-md">
            <div>
              <div className="flex items-center gap-agentic-sm mb-agentic-xs">
                <span className="w-2 h-2 rounded-full bg-agentic-primary pulse-dot"></span>
                <span className="font-agentic-mono-label text-agentic-mono-label text-agentic-primary uppercase tracking-widest">Qdrant / Vector DB Active</span>
              </div>
              <h1 className="font-agentic-display-lg text-agentic-display-lg text-agentic-on-surface tracking-tight uppercase">Knowledge Brain</h1>
              <p className="text-agentic-on-surface-variant font-agentic-body-md text-agentic-body-md max-w-xl">
                Enterprise-wide cognitive layer. Aggregating technical decisions, project schemas, and meeting synthesis into a high-dimensional vector space.
              </p>
            </div>
            <div className="flex gap-agentic-sm">
              <button className="glass-panel px-agentic-md py-2 flex items-center gap-agentic-xs font-agentic-mono-label text-agentic-mono-label text-agentic-primary-container hover:bg-agentic-primary-container/10 transition-all uppercase tracking-tighter">
                <span className="material-symbols-outlined text-[18px]">upload_file</span> INDEX DOCS
              </button>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-12 gap-agentic-gutter">
            <div className="col-span-12 lg:col-span-8 h-[450px] glass-panel rounded-agentic-xl overflow-hidden relative group">
              <div className="absolute top-0 left-0 w-full p-agentic-md z-10 flex justify-between items-start pointer-events-none">
                <div className="flex flex-col gap-agentic-xs pointer-events-auto">
                  <h3 className="font-agentic-headline-sm text-agentic-headline-sm text-agentic-on-surface uppercase tracking-tight">Semantic Relationship Map</h3>
                  <div className="flex gap-agentic-sm">
                    <span className="bg-agentic-primary/10 text-agentic-primary px-2 py-0.5 rounded text-[10px] font-agentic-mono-label">2,481 NODES</span>
                    <span className="bg-agentic-secondary/10 text-agentic-secondary px-2 py-0.5 rounded text-[10px] font-agentic-mono-label">12,103 EDGES</span>
                  </div>
                </div>
              </div>
              {/* Simulated Map Visuals would go here */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="w-full h-full relative">
                    <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-agentic-primary rounded-full node-glow pointer-events-auto cursor-pointer"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-agentic-secondary rounded-full node-glow pointer-events-auto cursor-pointer"></div>
                    <div className="absolute top-1/2 right-1/2 w-4 h-4 bg-agentic-tertiary rounded-full node-glow pointer-events-auto cursor-pointer"></div>
                 </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 grid grid-cols-2 gap-agentic-gutter">
              <div className="col-span-2 glass-panel p-agentic-md rounded-agentic-xl flex flex-col justify-between border-t-2 border-t-agentic-primary">
                <span className="font-agentic-mono-label text-agentic-on-surface-variant uppercase tracking-tighter">RAG Efficiency Score</span>
                <div className="flex items-end justify-between mt-agentic-md">
                  <span className="text-agentic-display-lg font-agentic-display-lg text-agentic-primary">94.8%</span>
                  <div className="h-12 w-24">
                    <canvas ref={sparklineRef} className="w-full h-full"></canvas>
                  </div>
                </div>
              </div>
              <div className="glass-panel p-agentic-md rounded-agentic-xl">
                <span className="font-agentic-mono-label text-agentic-on-surface-variant block mb-agentic-sm uppercase tracking-tighter">Indexed Files</span>
                <div className="flex items-center gap-agentic-sm">
                  <span className="text-agentic-headline-md font-agentic-headline-md text-agentic-on-surface">14.2k</span>
                  <span className="text-[10px] text-agentic-primary bg-agentic-primary/10 px-1">+12%</span>
                </div>
              </div>
              <div className="glass-panel p-agentic-md rounded-agentic-xl">
                <span className="font-agentic-mono-label text-agentic-on-surface-variant block mb-agentic-sm uppercase tracking-tighter">Tokens Stored</span>
                <div className="flex items-center gap-agentic-sm">
                  <span className="text-agentic-headline-md font-agentic-headline-md text-agentic-on-surface">84M</span>
                  <span className="text-[10px] text-agentic-secondary bg-agentic-secondary/10 px-1">+2.4M</span>
                </div>
              </div>
            </div>

            {/* Document Categories */}
            <div className="col-span-12 grid grid-cols-1 md:grid-cols-4 gap-agentic-gutter mb-agentic-lg">
              <div className="glass-panel p-agentic-md rounded-agentic-xl hover:bg-agentic-surface-container-high/30 transition-all cursor-pointer border-l-2 border-l-agentic-primary/50 group">
                <div className="flex justify-between items-start mb-agentic-md">
                  <div className="w-10 h-10 bg-agentic-primary/10 rounded flex items-center justify-center text-agentic-primary">
                    <span className="material-symbols-outlined">description</span>
                  </div>
                  <span className="text-agentic-on-surface-variant font-agentic-mono-label text-[10px]">428 FILES</span>
                </div>
                <h4 className="font-agentic-headline-sm text-agentic-headline-sm text-agentic-on-surface mb-agentic-xs uppercase tracking-tight">Project PRDs</h4>
                <p className="text-agentic-on-surface-variant text-agentic-body-sm mb-agentic-md">Core product definitions and strategic alignment documents.</p>
                <div className="flex items-center gap-agentic-xs text-[11px] font-agentic-mono-label text-agentic-primary">
                  <span className="uppercase tracking-tighter">View Collection</span>
                  <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
              {/* Add more categories similarly */}
            </div>
          </div>
        </div>
      </main>

      {/* Floating Panel */}
      <div className="fixed bottom-agentic-lg right-agentic-lg w-80 glass-panel rounded-agentic-xl shadow-2xl z-50 overflow-hidden border-t-2 border-t-agentic-primary hidden md:block">
        <div className="p-agentic-md bg-agentic-surface-container-high/50 flex justify-between items-center">
          <div className="flex items-center gap-agentic-sm">
            <span className="material-symbols-outlined text-agentic-primary text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>bolt</span>
            <h5 className="font-agentic-mono-label text-[11px] text-agentic-on-surface uppercase font-bold tracking-wider">Live Agent Telemetry</h5>
          </div>
          <span className="w-2 h-2 rounded-full bg-agentic-primary pulse-dot"></span>
        </div>
        <div className="p-agentic-md h-64 overflow-y-auto custom-scrollbar space-y-4">
          <div className="flex gap-agentic-md">
            <div className="shrink-0 font-agentic-mono-label text-[10px] text-agentic-primary mt-1">14:02:11</div>
            <div className="text-agentic-body-sm text-agentic-on-surface-variant leading-relaxed tracking-tighter">Agent <span className="text-agentic-primary font-agentic-mono-label">#092</span> querying <span className="text-agentic-secondary">vector_db</span> for context.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
