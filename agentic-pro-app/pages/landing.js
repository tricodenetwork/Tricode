import React, { useEffect, useRef } from 'react';
import Head from 'next/head';

export default function LandingPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;

    // Load Three.js dynamically if needed, or assume it's available via CDN in Head
    // For this implementation, we'll use the script from the prototype.
    const THREE = window.THREE;
    if (!THREE) return;

    const container = containerRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Colors from Design System
    const primaryColor = new THREE.Color(0x06b6d4); // Electric Cyan

    // Central Engine Core (Icosahedron)
    const coreGeometry = new THREE.IcosahedronGeometry(1.5, 2);
    const coreMaterial = new THREE.MeshPhongMaterial({ 
        color: primaryColor, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.8,
        emissive: primaryColor,
        emissiveIntensity: 0.5
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(core);

    // Inner solid core
    const innerCoreGeom = new THREE.SphereGeometry(0.8, 32, 32);
    const innerCoreMat = new THREE.MeshPhongMaterial({ color: 0xffffff, emissive: primaryColor });
    const innerCore = new THREE.Mesh(innerCoreGeom, innerCoreMat);
    scene.add(innerCore);

    // Agent Nodes (Spheres)
    const agents = [];
    const agentCount = 9;
    const orbitRadius = 4;

    for (let i = 0; i < agentCount; i++) {
        const geometry = new THREE.SphereGeometry(0.2, 16, 16);
        const material = new THREE.MeshPhongMaterial({ color: primaryColor, emissive: primaryColor });
        const agent = new THREE.Mesh(geometry, material);
        
        const angle = (i / agentCount) * Math.PI * 2;
        agent.position.x = Math.cos(angle) * orbitRadius;
        agent.position.y = Math.sin(angle) * orbitRadius;
        agent.userData = { angle, speed: 0.005 + Math.random() * 0.01 };
        
        agents.push(agent);
        scene.add(agent);
    }

    // Orbit Rings
    const ringGeom = new THREE.TorusGeometry(orbitRadius, 0.01, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: primaryColor, transparent: true, opacity: 0.15 });
    const ring = new THREE.Mesh(ringGeom, ringMat);
    ring.rotation.x = Math.PI / 2;
    scene.add(ring);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(primaryColor, 2, 10);
    pointLight.position.set(2, 2, 2);
    scene.add(pointLight);

    camera.position.z = 8;

    let animationFrameId;
    function animate() {
        animationFrameId = requestAnimationFrame(animate);
        
        core.rotation.y += 0.01;
        core.rotation.x += 0.005;
        innerCore.scale.setScalar(1 + Math.sin(Date.now() * 0.005) * 0.1);

        agents.forEach(agent => {
            agent.userData.angle += agent.userData.speed;
            agent.position.x = Math.cos(agent.userData.angle) * orbitRadius;
            agent.position.z = Math.sin(agent.userData.angle) * orbitRadius;
        });

        renderer.render(scene, camera);
    }

    animate();

    const handleResize = () => {
        const w = container.clientWidth || window.innerWidth;
        const h = container.clientHeight || window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="bg-agentic-background text-agentic-on-surface font-agentic-body-md min-h-screen selection:bg-agentic-primary selection:text-agentic-on-primary">
      <Head>
        <title>AGENTIC TRICODE PRO | Autonomous Product Development</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script src="https://ajax.googleapis.com/ajax/libs/threejs/r125/three.min.js"></script>
      </Head>

      <style jsx global>{`
        body { background-color: #051424; color: #d4e4fa; }
        .glass-panel {
            background: rgba(18, 33, 49, 0.6);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .glow-accent {
            box-shadow: 0 0 20px rgba(6, 182, 212, 0.15);
        }
        .cyan-line {
            background: linear-gradient(to bottom, transparent, #06b6d4, transparent);
            width: 1px;
        }
        @keyframes pulse-dot {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(0.9); }
        }
        .pulse { animation: pulse-dot 2s infinite ease-in-out; }
      `}</style>

      {/* TopNavBar */}
      <nav className="bg-agentic-surface/60 backdrop-blur-xl border-b border-white/10 top-0 sticky z-50">
        <div className="flex justify-between items-center w-full px-agentic-container-margin py-agentic-density-comfortable max-w-7xl mx-auto">
          <div className="font-agentic-headline-md text-agentic-headline-md tracking-tighter text-agentic-primary uppercase">TRICODE PRO</div>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-agentic-primary font-bold border-b border-agentic-primary font-agentic-mono-label text-agentic-mono-label" href="#">Solutions</a>
            <a className="text-agentic-on-surface-variant hover:text-agentic-on-surface transition-colors font-agentic-mono-label text-agentic-mono-label" href="#">Stack</a>
            <a className="text-agentic-on-surface-variant hover:text-agentic-on-surface transition-colors font-agentic-mono-label text-agentic-mono-label" href="#">Infrastructure</a>
            <a className="text-agentic-on-surface-variant hover:text-agentic-on-surface transition-colors font-agentic-mono-label text-agentic-mono-label" href="#">Dashboards</a>
          </div>
          <button className="bg-agentic-primary text-agentic-on-primary px-6 py-2 rounded font-agentic-mono-label text-agentic-mono-label font-bold hover:scale-95 transition-transform">Start Building</button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex flex-col justify-center items-center px-agentic-container-margin overflow-hidden border-b border-white/10">
          <div ref={containerRef} className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" />
          
          <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-3 py-1 glass-panel border-agentic-primary/30 rounded-full">
                <span className="w-2 h-2 bg-agentic-primary rounded-full pulse"></span>
                <span className="font-agentic-mono-label text-agentic-mono-label text-agentic-primary uppercase tracking-widest">Africa's First Autonomous Product Execution Platform</span>
              </div>
              <h1 className="font-agentic-headline-xl text-agentic-headline-xl text-white leading-tight">
                Build Products.<br/>Deploy Faster.<br/><span className="text-agentic-primary">Scale Infinitely.</span>
              </h1>
              <p className="font-agentic-body-lg text-agentic-body-lg text-agentic-on-surface-variant max-w-lg">
                Agentic TRICODE PRO automates the entire software lifecycle. From market-fit research to CI/CD, our swarm of specialized AI agents executes your vision at machine speed.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-agentic-primary text-agentic-on-primary px-8 py-4 font-agentic-mono-label text-agentic-mono-label font-bold hover:glow-accent transition-all">Start Your Project</button>
                <button className="glass-panel text-white border-white/10 px-8 py-4 font-agentic-mono-label text-agentic-mono-label hover:bg-white/5 transition-all">View Architecture</button>
              </div>
            </div>
          </div>
        </section>

        {/* Acceleration Stack */}
        <section className="py-24 px-agentic-container-margin max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="font-agentic-headline-lg text-agentic-headline-lg text-white mb-4">From Idea to Scale. Everything Runs Through Agents.</h2>
            <div className="h-1 w-24 bg-agentic-primary"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 relative">
            <div className="lg:col-span-3 space-y-4">
              <div className="glass-panel p-6 border-l-4 border-l-agentic-primary flex justify-between items-center group hover:bg-agentic-surface-container-high transition-all">
                <div>
                  <p className="font-agentic-mono-label text-agentic-mono-label text-agentic-primary mb-1">PHASE 01</p>
                  <h3 className="font-agentic-headline-md text-agentic-headline-md text-white">Market Intelligence</h3>
                </div>
                <span className="material-symbols-outlined text-agentic-primary text-4xl">analytics</span>
              </div>
              <div className="flex justify-center h-8"><div className="cyan-line"></div></div>
              <div className="glass-panel p-6 border-l-4 border-l-agentic-primary flex justify-between items-center group hover:bg-agentic-surface-container-high transition-all">
                <div>
                  <p className="font-agentic-mono-label text-agentic-mono-label text-agentic-primary mb-1">PHASE 02</p>
                  <h3 className="font-agentic-headline-md text-agentic-headline-md text-white">Technical Architecture</h3>
                </div>
                <span className="material-symbols-outlined text-agentic-primary text-4xl">account_tree</span>
              </div>
              <div className="flex justify-center h-8"><div className="cyan-line"></div></div>
              <div className="glass-panel p-6 border-l-4 border-l-agentic-primary flex justify-between items-center group hover:bg-agentic-surface-container-high transition-all">
                <div>
                  <p className="font-agentic-mono-label text-agentic-mono-label text-agentic-primary mb-1">PHASE 03</p>
                  <h3 className="font-agentic-headline-md text-agentic-headline-md text-white">Autonomous Execution</h3>
                </div>
                <span className="material-symbols-outlined text-agentic-primary text-4xl">terminal</span>
              </div>
            </div>
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="glass-panel p-10 flex flex-col items-center justify-center text-center bg-agentic-primary/5 border-agentic-primary/20">
                <div className="font-agentic-headline-xl text-agentic-headline-xl text-agentic-primary mb-2">3x</div>
                <p className="font-agentic-mono-label text-agentic-mono-label uppercase tracking-widest text-agentic-on-surface">Launch 3x Faster</p>
                <p className="font-agentic-body-sm text-agentic-body-sm text-agentic-slate-dimmed mt-4">Automated workflows eliminate human bottleneck in documentation and boilerplate generation.</p>
              </div>
              <div className="glass-panel p-10 flex flex-col items-center justify-center text-center bg-white/5">
                <div className="font-agentic-headline-xl text-agentic-headline-xl text-white mb-2">60%</div>
                <p className="font-agentic-mono-label text-agentic-mono-label uppercase tracking-widest text-agentic-on-surface">Reduce Costs</p>
                <p className="font-agentic-body-sm text-agentic-body-sm text-agentic-slate-dimmed mt-4">Scale talent dynamically without the overhead of massive headcount or manual management.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Workforce */}
        <section className="py-24 bg-agentic-surface-container-lowest border-y border-white/10">
          <div className="max-w-7xl mx-auto px-agentic-container-margin">
            <div className="mb-16">
              <h2 className="font-agentic-headline-lg text-agentic-headline-lg text-white">The Digital Workforce</h2>
              <p className="font-agentic-body-lg text-agentic-body-lg text-agentic-on-surface-variant max-w-2xl mt-4">A swarm of specialized autonomous entities working in perfect orchestration to deliver industrial-grade solutions.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {/* Agent Card Template */}
              <div className="glass-panel p-4 flex flex-col border-t-2 border-t-agentic-primary/50 group hover:border-t-agentic-primary transition-all">
                <div className="flex justify-between items-start mb-6">
                  <span className="material-symbols-outlined text-agentic-primary text-2xl">person_search</span>
                  <div className="w-2 h-2 bg-agentic-alert-emerald rounded-full pulse"></div>
                </div>
                <h4 className="font-agentic-mono-label text-agentic-mono-label text-white uppercase mb-4">Product Manager</h4>
                <div className="mt-auto space-y-2">
                  <div className="flex justify-between">
                    <span className="font-agentic-mono-data text-agentic-mono-data text-agentic-slate-dimmed">Load:</span>
                    <span className="font-agentic-mono-data text-agentic-mono-data text-agentic-primary">82%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-agentic-mono-data text-agentic-mono-data text-agentic-slate-dimmed">Score:</span>
                    <span className="font-agentic-mono-data text-agentic-mono-data text-agentic-primary">0.98</span>
                  </div>
                </div>
              </div>
              {/* Agent 2 */}
              <div className="glass-panel p-4 flex flex-col border-t-2 border-t-agentic-slate-dimmed/30 group hover:border-t-agentic-primary transition-all">
                <div className="flex justify-between items-start mb-6">
                  <span className="material-symbols-outlined text-agentic-primary text-2xl">architecture</span>
                  <div className="w-2 h-2 bg-agentic-alert-emerald rounded-full pulse"></div>
                </div>
                <h4 className="font-agentic-mono-label text-agentic-mono-label text-white uppercase mb-4">Architect</h4>
                <div className="mt-auto space-y-2">
                  <div className="flex justify-between">
                    <span className="font-agentic-mono-data text-agentic-mono-data text-agentic-slate-dimmed">Load:</span>
                    <span className="font-agentic-mono-data text-agentic-mono-data text-agentic-primary">41%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-agentic-mono-data text-agentic-mono-data text-agentic-slate-dimmed">Score:</span>
                    <span className="font-agentic-mono-data text-agentic-mono-data text-agentic-primary">0.99</span>
                  </div>
                </div>
              </div>
              {/* Agent 3 */}
              <div className="glass-panel p-4 flex flex-col border-t-2 border-t-agentic-slate-dimmed/30 group hover:border-t-agentic-primary transition-all">
                <div className="flex justify-between items-start mb-6">
                  <span className="material-symbols-outlined text-agentic-primary text-2xl">code</span>
                  <div className="w-2 h-2 bg-agentic-alert-emerald rounded-full pulse"></div>
                </div>
                <h4 className="font-agentic-mono-label text-agentic-mono-label text-white uppercase mb-4">Engineering</h4>
                <div className="mt-auto space-y-2">
                  <div className="flex justify-between">
                    <span className="font-agentic-mono-data text-agentic-mono-data text-agentic-slate-dimmed">Load:</span>
                    <span className="font-agentic-mono-data text-agentic-mono-data text-agentic-primary">94%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-agentic-mono-data text-agentic-mono-data text-agentic-slate-dimmed">Score:</span>
                    <span className="font-agentic-mono-data text-agentic-mono-data text-agentic-primary">0.97</span>
                  </div>
                </div>
              </div>
              {/* Agent 4 */}
              <div className="glass-panel p-4 flex flex-col border-t-2 border-t-agentic-slate-dimmed/30 group hover:border-t-agentic-primary transition-all">
                <div className="flex justify-between items-start mb-6">
                  <span className="material-symbols-outlined text-agentic-primary text-2xl">verified_user</span>
                  <div className="w-2 h-2 bg-agentic-alert-amber rounded-full pulse"></div>
                </div>
                <h4 className="font-agentic-mono-label text-agentic-mono-label text-white uppercase mb-4">Security</h4>
                <div className="mt-auto space-y-2">
                  <div className="flex justify-between">
                    <span className="font-agentic-mono-data text-agentic-mono-data text-agentic-slate-dimmed">Load:</span>
                    <span className="font-agentic-mono-data text-agentic-mono-data text-agentic-primary">12%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-agentic-mono-data text-agentic-mono-data text-agentic-slate-dimmed">Score:</span>
                    <span className="font-agentic-mono-data text-agentic-mono-data text-agentic-primary">1.00</span>
                  </div>
                </div>
              </div>
              {/* Agent 5 */}
              <div className="glass-panel p-4 flex flex-col border-t-2 border-t-agentic-slate-dimmed/30 group hover:border-t-agentic-primary transition-all">
                <div className="flex justify-between items-start mb-6">
                  <span className="material-symbols-outlined text-agentic-primary text-2xl">rocket_launch</span>
                  <div className="w-2 h-2 bg-agentic-alert-emerald rounded-full pulse"></div>
                </div>
                <h4 className="font-agentic-mono-label text-agentic-mono-label text-white uppercase mb-4">DevOps</h4>
                <div className="mt-auto space-y-2">
                  <div className="flex justify-between">
                    <span className="font-agentic-mono-data text-agentic-mono-data text-agentic-slate-dimmed">Load:</span>
                    <span className="font-agentic-mono-data text-agentic-mono-data text-agentic-primary">66%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-agentic-mono-data text-agentic-mono-data text-agentic-slate-dimmed">Score:</span>
                    <span className="font-agentic-mono-data text-agentic-mono-data text-agentic-primary">0.98</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure Section */}
        <section className="py-24 px-agentic-container-margin">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <h2 className="font-agentic-headline-lg text-agentic-headline-lg text-white mb-6">Industrial Grade Architecture</h2>
                <p className="font-agentic-body-lg text-agentic-body-lg text-agentic-on-surface-variant mb-8">Built on the bedrock of modern distributed systems and LLM orchestration frameworks. We provide the infrastructure; you provide the vision.</p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 glass-panel font-agentic-mono-label text-agentic-mono-label text-white">Next.js 14</span>
                  <span className="px-4 py-2 glass-panel font-agentic-mono-label text-agentic-mono-label text-agentic-primary">LangGraph</span>
                  <span className="px-4 py-2 glass-panel font-agentic-mono-label text-agentic-mono-label text-white">Qdrant</span>
                  <span className="px-4 py-2 glass-panel font-agentic-mono-label text-agentic-mono-label text-white">Kubernetes</span>
                  <span className="px-4 py-2 glass-panel font-agentic-mono-label text-agentic-mono-label text-agentic-primary">Terraform</span>
                  <span className="px-4 py-2 glass-panel font-agentic-mono-label text-agentic-mono-label text-white">PostgreSQL</span>
                </div>
              </div>
              <div className="lg:w-1/2 w-full glass-panel p-8 rounded-xl border-agentic-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 font-agentic-mono-data text-[10px] text-agentic-primary/30 uppercase">System Topology v2.4</div>
                <div className="space-y-6">
                  <div className="p-4 border border-white/10 bg-agentic-surface-container text-center font-agentic-mono-label text-agentic-mono-label">CLIENT LAYER / UI</div>
                  <div className="flex justify-center"><span className="material-symbols-outlined text-agentic-slate-dimmed">arrow_downward</span></div>
                  <div className="p-4 border border-agentic-primary/30 bg-agentic-primary/5 text-center font-agentic-mono-label text-agentic-mono-label text-agentic-primary">API GATEWAY & ORCHESTRATION</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 border border-white/10 bg-agentic-surface-container-low text-center text-xs font-agentic-mono-data">VECTOR DB</div>
                    <div className="p-4 border border-white/10 bg-agentic-surface-container-low text-center text-xs font-agentic-mono-data">AGENT SWARM</div>
                  </div>
                  <div className="flex justify-center"><span className="material-symbols-outlined text-agentic-slate-dimmed">arrow_downward</span></div>
                  <div className="p-4 border border-white/10 bg-agentic-surface-container text-center font-agentic-mono-label text-agentic-mono-label">MULTI-CLOUD INFRASTRUCTURE</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Operations */}
        <section className="py-24 bg-agentic-space-bg">
          <div className="max-w-7xl mx-auto px-agentic-container-margin">
            <div className="glass-panel p-8 lg:p-12 border-agentic-primary/40 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-agentic-primary to-transparent"></div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                <div>
                  <h3 className="font-agentic-headline-md text-agentic-headline-md text-white">Mission Control Dashboard</h3>
                  <p className="font-agentic-body-md text-agentic-body-md text-agentic-on-surface-variant">Real-time platform telemetry across the continent.</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-agentic-alert-emerald/10 border border-agentic-alert-emerald/30 rounded">
                  <span className="w-2 h-2 bg-agentic-alert-emerald rounded-full pulse"></span>
                  <span className="font-agentic-mono-label text-agentic-mono-label text-agentic-alert-emerald">SYSTEMS OPERATIONAL</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center md:text-left">
                  <div className="font-agentic-headline-xl text-agentic-headline-xl text-white font-agentic-mono-data mb-1">324</div>
                  <div className="font-agentic-mono-label text-agentic-mono-label text-agentic-slate-dimmed uppercase">Active Agents</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="font-agentic-headline-xl text-agentic-headline-xl text-agentic-primary font-agentic-mono-data mb-1">47</div>
                  <div className="font-agentic-mono-label text-agentic-mono-label text-agentic-slate-dimmed uppercase">Deployments Today</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="font-agentic-headline-xl text-agentic-headline-xl text-white font-agentic-mono-data mb-1">99.99%</div>
                  <div className="font-agentic-mono-label text-agentic-mono-label text-agentic-slate-dimmed uppercase">Uptime Average</div>
                </div>
              </div>
              <div className="mt-12 bg-black/40 border border-white/10 p-4 rounded overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-agentic-primary rounded-full"></div>
                  <span className="font-agentic-mono-label text-agentic-mono-label text-agentic-primary uppercase">Agent Activity Logs</span>
                </div>
                <div className="space-y-2 font-agentic-mono-data text-xs text-agentic-on-surface-variant opacity-70">
                  <div className="flex gap-4"><span className="text-agentic-slate-dimmed">[14:22:01]</span> <span>PM_AGENT: Requirement doc synthesized for 'Fintech_Project_Delta'</span></div>
                  <div className="flex gap-4"><span className="text-agentic-slate-dimmed">[14:22:05]</span> <span className="text-agentic-primary">ARCH_AGENT: Proposed serverless architecture patterns accepted</span></div>
                  <div className="flex gap-4"><span className="text-agentic-slate-dimmed">[14:22:12]</span> <span>DEV_AGENT_7: Initiating CI/CD pipeline for staging environment</span></div>
                  <div className="flex gap-4"><span className="text-agentic-slate-dimmed">[14:22:15]</span> <span className="text-agentic-alert-emerald">QA_AGENT: 242 tests passed. Reliability score 0.998</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 px-agentic-container-margin max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-agentic-headline-lg text-agentic-headline-lg text-white">Project Tiers</h2>
            <p className="font-agentic-body-md text-agentic-body-md text-agentic-on-surface-variant mt-2">Scale your autonomous workforce as you grow.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Pricing Card */}
            <div className="glass-panel p-6 flex flex-col border-white/10 hover:border-agentic-primary/40 transition-all">
              <h4 className="font-agentic-mono-label text-agentic-mono-label text-agentic-slate-dimmed uppercase mb-4">Starter</h4>
              <div className="font-agentic-headline-md text-agentic-headline-md text-white mb-6">$1,499<span className="text-sm font-normal text-agentic-slate-dimmed">/mo</span></div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex gap-2 items-start font-agentic-body-sm text-agentic-body-sm"><span className="material-symbols-outlined text-agentic-primary text-sm">check_circle</span> 3 Dedicated Agents</li>
                <li className="flex gap-2 items-start font-agentic-body-sm text-agentic-body-sm"><span className="material-symbols-outlined text-agentic-primary text-sm">check_circle</span> 2 Active Projects</li>
                <li className="flex gap-2 items-start font-agentic-body-sm text-agentic-body-sm"><span className="material-symbols-outlined text-agentic-primary text-sm">check_circle</span> Weekly Executive Sync</li>
              </ul>
              <button className="w-full py-3 glass-panel border-agentic-primary/20 text-white font-agentic-mono-label text-agentic-mono-label hover:bg-agentic-primary/10 transition-all">Choose Starter</button>
            </div>
            {/* Growth Card (Primary) */}
            <div className="glass-panel p-6 flex flex-col border-agentic-primary bg-agentic-primary/5 scale-105 z-10 shadow-xl shadow-agentic-primary/10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-agentic-primary text-agentic-on-primary text-[10px] px-3 py-1 font-bold uppercase tracking-widest rounded-full">Recommended</div>
              <h4 className="font-agentic-mono-label text-agentic-mono-label text-agentic-primary uppercase mb-4">Growth</h4>
              <div className="font-agentic-headline-md text-agentic-headline-md text-white mb-6">$4,999<span className="text-sm font-normal text-agentic-slate-dimmed">/mo</span></div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex gap-2 items-start font-agentic-body-sm text-agentic-body-sm"><span className="material-symbols-outlined text-agentic-primary text-sm">check_circle</span> 8 Dedicated Agents</li>
                <li className="flex gap-2 items-start font-agentic-body-sm text-agentic-body-sm"><span className="material-symbols-outlined text-agentic-primary text-sm">check_circle</span> 5 Active Projects</li>
                <li className="flex gap-2 items-start font-agentic-body-sm text-agentic-body-sm"><span className="material-symbols-outlined text-agentic-primary text-sm">check_circle</span> Priority Infrastructure</li>
                <li className="flex gap-2 items-start font-agentic-body-sm text-agentic-body-sm"><span className="material-symbols-outlined text-agentic-primary text-sm">check_circle</span> Marketing Agent Suite</li>
              </ul>
              <button className="w-full py-3 bg-agentic-primary text-agentic-on-primary font-agentic-mono-label text-agentic-mono-label font-bold hover:scale-95 transition-transform">Start Project</button>
            </div>
            <div className="glass-panel p-6 flex flex-col border-white/10 hover:border-agentic-primary/40 transition-all">
              <h4 className="font-agentic-mono-label text-agentic-mono-label text-agentic-slate-dimmed uppercase mb-4">Scale</h4>
              <div className="font-agentic-headline-md text-agentic-headline-md text-white mb-6">$12,500<span className="text-sm font-normal text-agentic-slate-dimmed">/mo</span></div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex gap-2 items-start font-agentic-body-sm text-agentic-body-sm"><span className="material-symbols-outlined text-agentic-primary text-sm">check_circle</span> Full 12-Agent Swarm</li>
                <li className="flex gap-2 items-start font-agentic-body-sm text-agentic-body-sm"><span className="material-symbols-outlined text-agentic-primary text-sm">check_circle</span> Unlimited Projects</li>
                <li className="flex gap-2 items-start font-agentic-body-sm text-agentic-body-sm"><span className="material-symbols-outlined text-agentic-primary text-sm">check_circle</span> Autonomous QA Lab</li>
              </ul>
              <button className="w-full py-3 glass-panel border-agentic-primary/20 text-white font-agentic-mono-label text-agentic-mono-label hover:bg-agentic-primary/10 transition-all">Choose Scale</button>
            </div>
            <div className="glass-panel p-6 flex flex-col border-white/10 hover:border-agentic-primary/40 transition-all">
              <h4 className="font-agentic-mono-label text-agentic-mono-label text-agentic-slate-dimmed uppercase mb-4">Custom</h4>
              <div className="font-agentic-headline-md text-agentic-headline-md text-white mb-6">Contact</div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex gap-2 items-start font-agentic-body-sm text-agentic-body-sm"><span className="material-symbols-outlined text-agentic-primary text-sm">check_circle</span> Dedicated LLM Fine-tuning</li>
                <li className="flex gap-2 items-start font-agentic-body-sm text-agentic-body-sm"><span className="material-symbols-outlined text-agentic-primary text-sm">check_circle</span> On-prem Deployment</li>
                <li className="flex gap-2 items-start font-agentic-body-sm text-agentic-body-sm"><span className="material-symbols-outlined text-agentic-primary text-sm">check_circle</span> 24/7 Human Oversight</li>
              </ul>
              <button className="w-full py-3 glass-panel border-agentic-primary/20 text-white font-agentic-mono-label text-agentic-mono-label hover:bg-agentic-primary/10 transition-all">Inquiry</button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-agentic-container-margin text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-agentic-headline-xl text-agentic-headline-xl text-white mb-6">Your Next Product Should Not Wait.</h2>
            <p className="font-agentic-body-lg text-agentic-body-lg text-agentic-on-surface-variant mb-10">Stop managing teams. Start executing vision. Join the elite founders building with autonomous speed.</p>
            <button className="bg-agentic-primary text-agentic-on-primary px-12 py-5 font-agentic-mono-label text-agentic-mono-label text-lg font-bold hover:scale-105 transition-all shadow-2xl shadow-agentic-primary/20">Initialize Acceleration</button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-agentic-surface-container-lowest border-t border-white/10 bottom-0">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-agentic-container-margin py-8 max-w-7xl mx-auto gap-4">
          <div className="font-agentic-mono-label text-agentic-mono-label text-agentic-on-surface">TRICODE PRO</div>
          <p className="font-agentic-body-sm text-agentic-body-sm text-agentic-slate-dimmed">© 2024 TRICODE PRO. Autonomous Product Execution Systems.</p>
          <div className="flex gap-6">
            <a className="font-agentic-body-sm text-agentic-body-sm text-agentic-slate-dimmed hover:text-agentic-primary transition-colors" href="#">Documentation</a>
            <a className="font-agentic-body-sm text-agentic-body-sm text-agentic-slate-dimmed hover:text-agentic-primary transition-colors" href="#">API Reference</a>
            <a className="font-agentic-body-sm text-agentic-body-sm text-agentic-slate-dimmed hover:text-agentic-primary transition-colors" href="#">Status</a>
            <a className="font-agentic-body-sm text-agentic-body-sm text-agentic-slate-dimmed hover:text-agentic-primary transition-colors" href="#">Legal</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
