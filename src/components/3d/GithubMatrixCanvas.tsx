import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GitBranch, GitCommit } from 'lucide-react';

interface CommitNodeData {
  id: string;
  branch: string;
  hash: string;
  message: string;
  date: string;
  color: number;
}

export const GithubMatrixCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredCommit, setHoveredCommit] = useState<CommitNodeData | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 2.5, 7.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Core Git Octahedron
    const coreGeo = new THREE.OctahedronGeometry(0.85, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      wireframe: true,
      emissive: 0x00f0ff,
      emissiveIntensity: 0.5
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    rootGroup.add(coreMesh);

    // Inner glowing sphere
    const innerGeo = new THREE.SphereGeometry(0.5, 16, 16);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    rootGroup.add(innerMesh);

    // Branch Orbit Rings (Main, ML, MERN, Security)
    const branches = [
      { name: 'main', radius: 2.2, color: 0x10b981, rotX: 0.2, rotZ: 0.1 },
      { name: 'feature/ai-ml-vision', radius: 2.8, color: 0xa855f7, rotX: -0.4, rotZ: 0.3 },
      { name: 'feature/mern-webrtc', radius: 3.4, color: 0x06b6d4, rotX: 0.5, rotZ: -0.2 },
      { name: 'security/audit-hardening', radius: 3.9, color: 0xf43f5e, rotX: -0.3, rotZ: -0.4 }
    ];

    const commitMeshes: Array<{ mesh: THREE.Mesh; data: CommitNodeData }> = [];

    branches.forEach((br, bIdx) => {
      const ringGeo = new THREE.TorusGeometry(br.radius, 0.02, 8, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: br.color,
        transparent: true,
        opacity: 0.45
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 2 + br.rotX;
      ringMesh.rotation.z = br.rotZ;
      rootGroup.add(ringMesh);

      // Create Commit Nodes along this orbit ring
      const numCommits = 4 + bIdx * 2;
      for (let i = 0; i < numCommits; i++) {
        const angle = (i / numCommits) * Math.PI * 2 + bIdx;
        const nodeGeo = new THREE.SphereGeometry(0.14, 16, 16);
        const nodeMat = new THREE.MeshStandardMaterial({
          color: br.color,
          emissive: br.color,
          emissiveIntensity: 0.6,
          roughness: 0.2
        });
        const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);

        // Position on 3D rotated circle
        const x = Math.cos(angle) * br.radius;
        const y = Math.sin(angle) * br.radius * Math.sin(br.rotX);
        const z = Math.sin(angle) * br.radius * Math.cos(br.rotX);

        nodeMesh.position.set(x, y, z);
        nodeMesh.userData = {
          commitData: {
            id: `commit-${bIdx}-${i}`,
            branch: br.name,
            hash: Math.random().toString(16).substring(2, 9),
            message: [
              'Optimized CNN Grad-CAM visual heat map resolution',
              'Implemented WebRTC ICE candidate signaling loop',
              'Patched JWT session validation & CSRF guard',
              'Automated EDA pipeline transformations in Pandas',
              'Refactored LeetCode DP algorithm time complexity',
              'Zero-downtime MongoDB aggregation index deployment'
            ][(i + bIdx) % 6],
            date: `${(i + 1) * 3} days ago`,
            color: br.color
          }
        };

        rootGroup.add(nodeMesh);
        commitMeshes.push({ mesh: nodeMesh, data: nodeMesh.userData.commitData });
      }
    });

    // Particle Cloud of Floating Code Bits
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let p = 0; p < particleCount * 3; p += 3) {
      particlePositions[p] = (Math.random() - 0.5) * 12;
      particlePositions[p + 1] = (Math.random() - 0.5) * 8;
      particlePositions[p + 2] = (Math.random() - 0.5) * 8;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.04,
      transparent: true,
      opacity: 0.6
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Ambient and Point Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00f0ff, 3, 20);
    pointLight.position.set(3, 4, 5);
    scene.add(pointLight);

    const violetLight = new THREE.PointLight(0xa855f7, 2.5, 20);
    violetLight.position.set(-4, -2, -3);
    scene.add(violetLight);

    // Mouse Drag / Orbit Controls
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };
    let rotVelocity = { x: 0.001, y: 0.003 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / width) * 2 - 1;
      const mouseY = -((e.clientY - rect.top) / height) * 2 + 1;

      if (isDragging) {
        const deltaX = e.clientX - prevMousePos.x;
        const deltaY = e.clientY - prevMousePos.y;
        rotVelocity = { x: deltaY * 0.005, y: deltaX * 0.005 };
        prevMousePos = { x: e.clientX, y: e.clientY };
      } else {
        // Raycasting for Commit Hover
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(new THREE.Vector2(mouseX, mouseY), camera);

        const intersects = raycaster.intersectObjects(commitMeshes.map(c => c.mesh));
        if (intersects.length > 0) {
          const hit = intersects[0].object as THREE.Mesh;
          const data = hit.userData.commitData as CommitNodeData;
          setHoveredCommit(data);
          setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
          document.body.style.cursor = 'pointer';
        } else {
          setHoveredCommit(null);
          document.body.style.cursor = 'default';
        }
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Inertia & Auto Rotation
      if (!isDragging) {
        rotVelocity.x *= 0.96;
        rotVelocity.y *= 0.96;
        rootGroup.rotation.y += 0.004 + rotVelocity.y;
        rootGroup.rotation.x += rotVelocity.x;
      } else {
        rootGroup.rotation.y += rotVelocity.y;
        rootGroup.rotation.x += rotVelocity.x;
      }

      // Core pulsation
      coreMesh.rotation.y = elapsedTime * 0.5;
      coreMesh.rotation.z = elapsedTime * 0.3;
      innerMesh.rotation.y = -elapsedTime * 0.7;

      // Particle gentle sway
      particleSystem.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[480px] rounded-3xl bg-slate-950/70 border border-slate-800/80 overflow-hidden shadow-2xl backdrop-blur-xl group">
      {/* 3D Container */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Top Overlay Legend */}
      <div className="absolute top-4 left-4 pointer-events-none space-y-1">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono backdrop-blur-md">
          <GitBranch className="w-3.5 h-3.5" />
          <span>3D Git Commit Cosmos // Active Branches</span>
        </div>
        <p className="text-[11px] font-mono text-slate-400 pl-1">
          Drag to orbit • Hover nodes to inspect commit metadata
        </p>
      </div>

      {/* Branch Indicators */}
      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 pointer-events-none">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-emerald-400 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          main
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-purple-400 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-purple-400" />
          ai-ml-vision
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-cyan-400 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          mern-webrtc
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-rose-400 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-rose-400" />
          security-audit
        </div>
      </div>

      {/* Hover Tooltip */}
      {hoveredCommit && (
        <div
          style={{
            left: `${tooltipPos.x + 12}px`,
            top: `${tooltipPos.y + 12}px`
          }}
          className="absolute z-30 pointer-events-none p-3.5 rounded-xl bg-slate-900/95 border border-cyan-500/40 shadow-2xl backdrop-blur-xl max-w-xs space-y-1 text-xs font-mono transition-transform"
        >
          <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-1.5">
            <span className="text-cyan-300 font-bold flex items-center gap-1">
              <GitCommit className="w-3.5 h-3.5" />
              {hoveredCommit.hash}
            </span>
            <span className="text-[10px] text-slate-400">{hoveredCommit.date}</span>
          </div>
          <p className="text-slate-200 text-[11px] font-sans pt-0.5">{hoveredCommit.message}</p>
          <div className="text-[10px] text-purple-300 pt-1">
            branch: <span className="text-white font-bold">{hoveredCommit.branch}</span>
          </div>
        </div>
      )}
    </div>
  );
};
