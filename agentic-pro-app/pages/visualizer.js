import React, { useEffect, useRef } from 'react';
import Head from 'next/head';

export default function Visualizer() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;

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

    const primaryColor = new THREE.Color(0x06b6d4);

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

    const innerCoreGeom = new THREE.SphereGeometry(0.8, 32, 32);
    const innerCoreMat = new THREE.MeshPhongMaterial({ color: 0xffffff, emissive: primaryColor });
    const innerCore = new THREE.Mesh(innerCoreGeom, innerCoreMat);
    scene.add(innerCore);

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

    const ringGeom = new THREE.TorusGeometry(orbitRadius, 0.01, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: primaryColor, transparent: true, opacity: 0.15 });
    const ring = new THREE.Mesh(ringGeom, ringMat);
    ring.rotation.x = Math.PI / 2;
    scene.add(ring);

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
    <div className="bg-black w-full h-screen overflow-hidden">
      <Head>
        <title>TRICODE PRO V2.0 | Visualizer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://ajax.googleapis.com/ajax/libs/threejs/r125/three.min.js"></script>
      </Head>
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
}
