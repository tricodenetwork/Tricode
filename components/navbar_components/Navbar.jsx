@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Blueprint-derived color tokens */
  --p: #ffffff; /* Primary Background */
  --s: #f8f9fb; /* Secondary Background */
  --t: #000000; /* Primary Text */
  --ts: #5f5e5a; /* Secondary Text */
  --b: rgba(0,0,0,0.05); /* Tertiary Border */
  --bs: rgba(0,0,0,0.1); /* Secondary Border */
  
  --r: 8px; /* Standard Radius */
  --rl: 12px; /* Large Radius */

  /* Agent Semantic Colors */
  --ai-text: #534ab7;
  --ai-bg: #eeedfe;
  --success-text: #639922;
  --success-bg: #eaf3de;
  --info-text: #185fa5;
  --info-bg: #e6f1fb;
  --warning-text: #ba7517;
  --warning-bg: #faeeda;
  --danger-text: #791f1f;
  --danger-bg: #fcebeb;
}

@media (prefers-color-scheme: dark) {
  :root {
    --p: #09090b;
    --s: #121214;
    --t: #ffffff;
    --ts: #a1a1aa;
    --b: rgba(255,255,255,0.05);
    --bs: rgba(255,255,255,0.1);
  }
}

body {
  background: var(--p);
  color: var(--t);
  font-family: 'Inter', sans-serif;
  font-size: 13px; /* High-density pro scale */
}

/* 4-Panel Grid Shell Styles */
.shell-grid {
  display: grid;
  grid-template-columns: 52px 200px 1fr 300px;
  grid-template-rows: 48px 1fr;
  height: 100vh;
  overflow: hidden;
}

.topbar {
  grid-column: 1 / -1;
  background: var(--p);
  border-bottom: 0.5px solid var(--b);
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 12px;
  z-index: 50;
}

.iconbar {
  background: var(--s);
  border-right: 0.5px solid var(--b);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0;
  gap: 4px;
}

.sidebar {
  background: var(--p);
  border-right: 0.5px solid var(--b);
  padding: 12px 0;
  overflow-y: auto;
}

.main-canvas {
  background: var(--p);
  overflow-y: auto;
  padding: 20px;
}

.intelligence-panel {
  background: var(--s);
  border-left: 0.5px solid var(--b);
  padding: 16px;
  overflow-y: auto;
}
uto w-9 h-9 flex items-center justify-center text-var(--ts) hover:text-var(--t) cursor-pointer">
          <div className="w-5 h-5 bg-current opacity-20 rounded" />
        </div>
      </nav>

      {/* 3. Module Sidebar */}
      <aside className="sidebar">
        <div className="px-4 mb-6">
          <h3 className="text-[10px] font-bold text-var(--ts) uppercase tracking-widest mb-3">Workspace</h3>
          <ul className="space-y-1">
            <li className="flex items-center gap-3 px-2 py-1.5 rounded-md bg-var(--s) text-var(--t) font-medium cursor-pointer">
              <span className="w-1.5 h-1.5 rounded-full bg-[#639922]" /> Dashboard
            </li>
            <li className="flex items-center gap-3 px-2 py-1.5 rounded-md text-var(--ts) hover:bg-var(--s) hover:text-var(--t) cursor-pointer transition-all">
              <span className="w-1.5 h-1.5 rounded-full bg-[#185FA5]" /> Agent Console
            </li>
            <li className="flex items-center gap-3 px-2 py-1.5 rounded-md text-var(--ts) hover:bg-var(--s) hover:text-var(--t) cursor-pointer transition-all">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BA7517]" /> Sprint Board
            </li>
          </ul>
        </div>

        <div className="px-4 mb-6">
          <h3 className="text-[10px] font-bold text-var(--ts) uppercase tracking-widest mb-3">Active Agents</h3>
          <ul className="space-y-1">
            <li className="flex items-center gap-3 px-2 py-1.5 rounded-md text-var(--ts) cursor-default">
              <span className="w-2 h-2 rounded-full bg-[#639922] animate-pulse" /> AI PM Agent
            </li>
            <li className="flex items-center gap-3 px-2 py-1.5 rounded-md text-var(--ts) cursor-default">
              <span className="w-2 h-2 rounded-full bg-[#639922] animate-pulse" /> QA Engineer
            </li>
          </ul>
        </div>
      </aside>

      {/* 4. Main AI Canvas */}
      <main className="main-canvas">
        <div className="mb-8">
          <h2 className="text-[11px] font-bold text-var(--ts) uppercase tracking-widest mb-4">Executive Overview</h2>
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: 'Sprint Velocity', val: '84 pts', sub: '↑ 12% vs last', color: '#639922' },
              { label: 'Agents Running', val: '6 / 8', sub: '2 standby', color: '#185FA5' },
              { label: 'Tickets Resolved', val: '42', sub: '18 in review', color: '#BA7517' },
              { label: 'CI Pipeline', val: 'Passing', sub: 'Last run 4m ago', color: '#639922' },
            ].map((stat) => (
              <div key={stat.label} className="p-4 rounded-xl border border-var(--b) bg-var(--p)">
                <p className="text-[11px] text-var(--ts) mb-1">{stat.label}</p>
                <p className="text-xl font-bold" style={{ color: stat.color }}>{stat.val}</p>
                <p className="text-[10px] text-var(--ts) mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-[11px] font-bold text-var(--ts) uppercase tracking-widest mb-4">Agent Console</h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              { name: 'AI PM Agent', status: 'Running', detail: 'Planning sprint 15 backlog...', pct: 72, bg: '#EEEDFE' },
              { name: 'QA Engineer', status: 'Running', detail: 'E2E suite on auth module...', pct: 45, bg: '#E1F5EE' },
              { name: 'DevOps Agent', status: 'Standby', detail: 'Awaiting deployment trigger', pct: 100, bg: '#E6F1FB' },
            ].map((agent) => (
              <div key={agent.name} className="p-4 rounded-xl bg-var(--s) border border-var(--b) hover:border-var(--bs) transition-all cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-lg" style={{ background: agent.bg }}>
                    {agent.name === 'AI PM Agent' ? '🤖' : agent.name === 'QA Engineer' ? '🧪' : '💻'}
                  </div>
                  <div>
                    <p className="text-[12px] font-bold">{agent.name}</p>
                    <p className="text-[10px] text-[#639922]">● {agent.status}</p>
                  </div>
                </div>
                <p className="text-[10px] text-var(--ts) mb-3">{agent.detail}</p>
                <div className="h-1 w-full bg-var(--b) rounded-full overflow-hidden">
                  <div className="h-full bg-[#185FA5] transition-all duration-500" style={{ width: `${agent.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* 5. Intelligence Panel */}
      <aside className="intelligence-panel">
        <h2 className="text-[11px] font-bold text-var(--ts) uppercase tracking-widest mb-4">Intelligence Dashboard</h2>
        
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-[#EEEDFE] border border-[#AFA9EC]">
            <p className="text-[10px] font-bold text-[#534AB7] uppercase mb-2">AI Recommendation</p>
            <p className="text-[11px] leading-relaxed text-[#3C3489]">
              Sprint velocity has decreased by 12%. Suggested action: Re-allocate @QA-Agent to help with bottleneck in Project #42.
            </p>
          </div>

          <div>
            <h3 className="text-[10px] font-bold text-var(--ts) uppercase tracking-widest mb-3">Team Health</h3>
            <div className="space-y-3">
              {[
                { label: 'Frontend', pct: 88, color: '#185FA5' },
                { label: 'Backend', pct: 74, color: '#639922' },
                { label: 'AI Agents', pct: 91, color: '#534AB7' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-var(--ts)">{item.label}</span>
                    <span className="font-bold">{item.pct}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-var(--b) rounded-full overflow-hidden">
                    <div className="h-full transition-all duration-500" style={{ width: `${item.pct}%`, backgroundColor: item.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}
