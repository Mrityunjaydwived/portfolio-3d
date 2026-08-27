import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { portfolioConfig } from '../../config/portfolioData';

export const HeroWorkstationCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [typedCode, setTypedCode] = useState('');
  const fullCode = portfolioConfig.heroCodeSnippet;

  // Code typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedCode(fullCode.slice(0, index));
      index++;
      if (index > fullCode.length) {
        setTimeout(() => {
          index = 0;
        }, 4000);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [fullCode]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 2.8, 7.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Group for whole workstation
    const workstationGroup = new THREE.Group();
    scene.add(workstationGroup);

    // 1. Futuristic Base Platform / Cyber Grid Ring
    const platformGeo = new THREE.CylinderGeometry(3.6, 3.8, 0.15, 32);
    const platformMat = new THREE.MeshStandardMaterial({
      color: 0x0a1020,
      metalness: 0.8,
      roughness: 0.2,
    });
    const platform = new THREE.Mesh(platformGeo, platformMat);
    platform.position.y = -1.2;
    workstationGroup.add(platform);

    // Glowing Neon Ring around Platform
    const ringGeo = new THREE.TorusGeometry(3.8, 0.04, 16, 64);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = -1.15;
    workstationGroup.add(ring);

    // Outer Purple Ring
    const outerRingGeo = new THREE.TorusGeometry(4.4, 0.02, 16, 64);
    const outerRingMat = new THREE.MeshBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.6 });
    const outerRing = new THREE.Mesh(outerRingGeo, outerRingMat);
    outerRing.rotation.x = Math.PI / 2;
    outerRing.position.y = -1.15;
    workstationGroup.add(outerRing);

    // 2. Laptop Base
    const baseGeo = new THREE.BoxGeometry(2.8, 0.1, 1.9);
    const metalMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.85,
      roughness: 0.25,
    });
    const laptopBase = new THREE.Mesh(baseGeo, metalMat);
    laptopBase.position.set(0, -0.4, 0);
    workstationGroup.add(laptopBase);

    // Keyboard Deck / Glow
    const keyboardGeo = new THREE.BoxGeometry(2.4, 0.02, 0.9);
    const keyboardMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.15,
      roughness: 0.4
    });
    const keyboard = new THREE.Mesh(keyboardGeo, keyboardMat);
    keyboard.position.set(0, -0.34, -0.2);
    workstationGroup.add(keyboard);

    // Trackpad
    const trackpadGeo = new THREE.BoxGeometry(0.8, 0.01, 0.5);
    const trackpadMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.5, roughness: 0.2 });
    const trackpad = new THREE.Mesh(trackpadGeo, trackpadMat);
    trackpad.position.set(0, -0.34, 0.55);
    workstationGroup.add(trackpad);

    // 3. Laptop Screen Lid
    const lidGroup = new THREE.Group();
    lidGroup.position.set(0, -0.35, -0.95); // Hinge position
    workstationGroup.add(lidGroup);

    const lidBackGeo = new THREE.BoxGeometry(2.8, 1.8, 0.08);
    const lidBack = new THREE.Mesh(lidBackGeo, metalMat);
    lidBack.position.set(0, 0.9, 0);
    lidGroup.add(lidBack);

    // Screen Bezel & Display
    const screenGeo = new THREE.PlaneGeometry(2.6, 1.6);
    const screenMat = new THREE.MeshBasicMaterial({
      color: 0x050c1e,
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, 0.9, 0.045);
    lidGroup.add(screenMesh);

    // Glowing Screen Inner Border
    const screenBorderGeo = new THREE.EdgesGeometry(screenGeo);
    const screenBorderMat = new THREE.LineBasicMaterial({ color: 0x00f0ff, linewidth: 2 });
    const screenBorder = new THREE.LineSegments(screenBorderGeo, screenBorderMat);
    screenBorder.position.set(0, 0.9, 0.05);
    lidGroup.add(screenBorder);

    // Tilt Lid back slightly (110 degrees)
    lidGroup.rotation.x = -Math.PI / 9;

    // 4. Orbiting Tech Badges / Floating Cubes
    const techTokens: Array<{ mesh: THREE.Mesh; angle: number; speed: number; radius: number; height: number }> = [];
    const tokenColors = [0x00f0ff, 0x8b5cf6, 0x38bdf8, 0x10b981, 0xfacc15, 0xf97316];
    
    for (let i = 0; i < 6; i++) {
      const tokenGeo = new THREE.OctahedronGeometry(0.22, 0);
      const tokenMat = new THREE.MeshStandardMaterial({
        color: tokenColors[i],
        emissive: tokenColors[i],
        emissiveIntensity: 0.6,
        roughness: 0.2,
        metalness: 0.8
      });
      const token = new THREE.Mesh(tokenGeo, tokenMat);

      // Wireframe overlay
      const wireGeo = new THREE.WireframeGeometry(tokenGeo);
      const wireMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8 });
      const wire = new THREE.LineSegments(wireGeo, wireMat);
      token.add(wire);

      const angle = (i / 6) * Math.PI * 2;
      const radius = 2.4 + (i % 2) * 0.5;
      const height = -0.2 + (i % 3) * 0.6;
      token.position.set(Math.cos(angle) * radius, height, Math.sin(angle) * radius);

      workstationGroup.add(token);
      techTokens.push({
        mesh: token,
        angle,
        speed: 0.008 + (i % 3) * 0.003,
        radius,
        height
      });
    }

    // 5. Floating Ambient Holographic Particles
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;

      const isCyan = Math.random() > 0.5;
      particleColors[i * 3] = isCyan ? 0.0 : 0.6;
      particleColors[i * 3 + 1] = isCyan ? 0.9 : 0.3;
      particleColors[i * 3 + 2] = 1.0;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeo, particleMaterial);
    scene.add(particles);

    // 6. Lights
    const ambientLight = new THREE.AmbientLight(0x1e293b, 1.5);
    scene.add(ambientLight);

    const cyanPoint = new THREE.PointLight(0x00f0ff, 4, 10);
    cyanPoint.position.set(2, 3, 3);
    scene.add(cyanPoint);

    const purplePoint = new THREE.PointLight(0xa855f7, 4, 10);
    purplePoint.position.set(-3, 1, 2);
    scene.add(purplePoint);

    const screenLight = new THREE.PointLight(0x38bdf8, 2, 4);
    screenLight.position.set(0, 0.5, 0.2);
    workstationGroup.add(screenLight);

    // Mouse Interaction
    let targetRotationX = 0.2;
    let targetRotationY = -0.3;
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      if (isDragging) {
        const deltaX = clientX - prevMouseX;
        const deltaY = clientY - prevMouseY;
        targetRotationY += deltaX * 0.008;
        targetRotationX += deltaY * 0.008;
        targetRotationX = Math.max(-0.2, Math.min(0.6, targetRotationX));
        prevMouseX = clientX;
        prevMouseY = clientY;
      } else {
        // Subtle mouse parallax
        const rect = container.getBoundingClientRect();
        const normX = ((clientX - rect.left) / rect.width) * 2 - 1;
        const normY = -(((clientY - rect.top) / rect.height) * 2 - 1);
        targetRotationY = normX * 0.35 - 0.2;
        targetRotationX = -normY * 0.2 + 0.15;
      }
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);

    container.addEventListener('touchstart', handlePointerDown, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handlePointerUp);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Smooth Workstation Rotation
      workstationGroup.rotation.y += (targetRotationY - workstationGroup.rotation.y) * 0.05;
      workstationGroup.rotation.x += (targetRotationX - workstationGroup.rotation.x) * 0.05;

      // Floating Bobbing Effect
      workstationGroup.position.y = Math.sin(elapsed * 1.5) * 0.08;

      // Orbiting Tech Badges
      techTokens.forEach((token) => {
        token.angle += token.speed;
        token.mesh.position.x = Math.cos(token.angle) * token.radius;
        token.mesh.position.z = Math.sin(token.angle) * token.radius;
        token.mesh.position.y = token.height + Math.sin(elapsed * 2 + token.angle) * 0.15;
        token.mesh.rotation.x += 0.02;
        token.mesh.rotation.y += 0.03;
      });

      // Rings Slow Rotation
      ring.rotation.z += 0.005;
      outerRing.rotation.z -= 0.003;

      // Particle Drift
      particles.rotation.y = elapsed * 0.04;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      container.removeEventListener('touchstart', handlePointerDown);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerUp);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[450px] sm:h-[520px] lg:h-[580px] flex items-center justify-center select-none">
      {/* 3D Canvas Viewport */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating Holographic Terminal Overlay pinned over laptop screen */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[270px] sm:w-[320px] pointer-events-none -mt-10 sm:-mt-12">
        <div className="rounded-xl bg-slate-950/85 backdrop-blur-md border border-cyan-500/40 p-3.5 shadow-[0_0_25px_rgba(6,182,212,0.3)]">
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[10px] font-mono text-cyan-400/90 tracking-wider">
              developer.config.ts
            </span>
          </div>

          {/* Syntax Highlighted Animated Code */}
          <pre className="font-mono text-[11px] sm:text-xs text-slate-300 leading-tight overflow-hidden whitespace-pre-wrap">
            <code>
              {typedCode}
              <span className="inline-block w-1.5 h-3.5 bg-cyan-400 animate-pulse ml-0.5 align-middle shadow-[0_0_8px_rgba(6,182,212,1)]" />
            </code>
          </pre>
        </div>
      </div>

      {/* Interactive Helper Hint */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800 text-[10px] sm:text-xs font-mono text-slate-400 pointer-events-none backdrop-blur-sm">
        ✦ Drag to rotate 3D workstation
      </div>
    </div>
  );
};
