import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { portfolioConfig } from '../../config/portfolioData';
import type { SkillItem } from '../../config/portfolioData';
import { soundFx } from '../../audio/soundEffects';
import { NeonBadge } from '../ui/NeonBadge';
import { Sparkles, RotateCcw } from 'lucide-react';

interface SkillsUniverseCanvasProps {
  activeCategory: string;
  onSelectSkill?: (skill: SkillItem) => void;
}

export const SkillsUniverseCanvas: React.FC<SkillsUniverseCanvasProps> = ({
  activeCategory,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const skillsData = portfolioConfig.skills;

  const resetCameraRef = useRef<() => void>(() => {});

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const universeGroup = new THREE.Group();
    scene.add(universeGroup);

    // Nodes Map & Meshes
    const nodeMeshes: Array<{
      mesh: THREE.Mesh;
      skill: SkillItem;
      originalColor: number;
      glowMesh: THREE.Mesh;
    }> = [];

    // Category Color Mapping
    const getCategoryColor = (cat: string) => {
      switch (cat) {
        case 'Programming': return 0x38bdf8;
        case 'Frontend': return 0x06b6d4;
        case 'Backend': return 0x10b981;
        case 'Database': return 0x3b82f6;
        case 'Data & AI': return 0xa855f7;
        case 'Tools': return 0xf59e0b;
        default: return 0x00f0ff;
      }
    };

    // Create 3D Nodes
    skillsData.forEach((skill) => {
      const pos = skill.position3D || [0, 0, 0];
      const colorHex = getCategoryColor(skill.category);

      // Core Sphere
      const sphereGeo = new THREE.SphereGeometry(0.24, 24, 24);
      const sphereMat = new THREE.MeshStandardMaterial({
        color: colorHex,
        emissive: colorHex,
        emissiveIntensity: 0.4,
        roughness: 0.2,
        metalness: 0.6
      });
      const node = new THREE.Mesh(sphereGeo, sphereMat);
      node.position.set(pos[0], pos[1], pos[2]);
      node.userData = { skillId: skill.id };

      // Outer Glowing Ring / Atmosphere
      const glowGeo = new THREE.SphereGeometry(0.34, 16, 16);
      const glowMat = new THREE.MeshBasicMaterial({
        color: colorHex,
        transparent: true,
        opacity: 0.25,
        wireframe: true
      });
      const glowMesh = new THREE.Mesh(glowGeo, glowMat);
      node.add(glowMesh);

      universeGroup.add(node);
      nodeMeshes.push({ mesh: node, skill, originalColor: colorHex, glowMesh });
    });

    // Create Synaptic Glowing Connecting Lines between neighboring nodes
    const linesGroup = new THREE.Group();
    universeGroup.add(linesGroup);

    const lineMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending
    });

    for (let i = 0; i < skillsData.length; i++) {
      for (let j = i + 1; j < skillsData.length; j++) {
        const s1 = skillsData[i];
        const s2 = skillsData[j];
        const p1 = s1.position3D || [0,0,0];
        const p2 = s2.position3D || [0,0,0];
        const dist = Math.hypot(p1[0] - p2[0], p1[1] - p2[1], p1[2] - p2[2]);

        // Connect if close or same category
        if (dist < 2.3 || (s1.category === s2.category && dist < 3.2)) {
          const lineGeo = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(p1[0], p1[1], p1[2]),
            new THREE.Vector3(p2[0], p2[1], p2[2])
          ]);
          const line = new THREE.Line(lineGeo, lineMat);
          linesGroup.add(line);
        }
      }
    }

    // Ambient Star Particles in Background
    const starGeo = new THREE.BufferGeometry();
    const starCount = 200;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      starPos[i] = (Math.random() - 0.5) * 18;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({
      size: 0.04,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending
    });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00f0ff, 3, 15);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xa855f7, 3, 15);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Interaction State
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-1000, -1000);
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let autoRotate = true;

    resetCameraRef.current = () => {
      targetRotX = 0;
      targetRotY = 0;
      camera.position.set(0, 0, 7.5);
      autoRotate = true;
      soundFx.playClick();
    };

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      autoRotate = false;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      prevX = clientX;
      prevY = clientY;
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const rect = container.getBoundingClientRect();
      mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -(((clientY - rect.top) / rect.height) * 2 - 1);

      if (isDragging) {
        const dx = clientX - prevX;
        const dy = clientY - prevY;
        targetRotY += dx * 0.007;
        targetRotX += dy * 0.007;
        prevX = clientX;
        prevY = clientY;
      } else {
        // Raycasting for Hover Tooltip
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(nodeMeshes.map((n) => n.mesh));

        if (intersects.length > 0) {
          const hitMesh = intersects[0].object as THREE.Mesh;
          const found = nodeMeshes.find((n) => n.mesh === hitMesh);
          if (found && (!hoveredSkill || hoveredSkill.id !== found.skill.id)) {
            setHoveredSkill(found.skill);
            setTooltipPos({ x: clientX - rect.left, y: clientY - rect.top });
            soundFx.playHover();
          }
        } else {
          if (hoveredSkill) {
            setHoveredSkill(null);
          }
        }
      }
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    // Zoom on wheel
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      camera.position.z = Math.max(4.0, Math.min(11.0, camera.position.z + e.deltaY * 0.004));
    };

    container.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);
    container.addEventListener('wheel', handleWheel, { passive: false });

    container.addEventListener('touchstart', handlePointerDown, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handlePointerUp);

    // Resize
    const handleResize = () => {
      if (!container) return;
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();

      if (autoRotate) {
        targetRotY += delta * 0.15;
      }

      universeGroup.rotation.y += (targetRotY - universeGroup.rotation.y) * 0.08;
      universeGroup.rotation.x += (targetRotX - universeGroup.rotation.x) * 0.08;

      // Update Node Highlight / Dim according to active category
      nodeMeshes.forEach((nodeItem) => {
        const isMatch = activeCategory === 'All' || nodeItem.skill.category === activeCategory;
        const mat = nodeItem.mesh.material as THREE.MeshStandardMaterial;
        const glowMat = nodeItem.glowMesh.material as THREE.MeshBasicMaterial;

        if (isMatch) {
          mat.emissiveIntensity = 0.6;
          mat.opacity = 1.0;
          glowMat.opacity = 0.35;
          nodeItem.mesh.scale.set(1.05, 1.05, 1.05);
        } else {
          mat.emissiveIntensity = 0.1;
          mat.opacity = 0.35;
          glowMat.opacity = 0.05;
          nodeItem.mesh.scale.set(0.85, 0.85, 0.85);
        }

        // Pulse hovered node
        if (hoveredSkill && hoveredSkill.id === nodeItem.skill.id) {
          nodeItem.mesh.scale.set(1.3, 1.3, 1.3);
          mat.emissiveIntensity = 1.0;
        }

        nodeItem.glowMesh.rotation.y += 0.02;
      });

      stars.rotation.y += 0.0005;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handlePointerDown);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerUp);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [skillsData, activeCategory, hoveredSkill]);

  return (
    <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[620px] rounded-3xl bg-slate-950/60 border border-slate-800/80 backdrop-blur-xl overflow-hidden select-none">
      {/* 3D Viewport */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Top Overlay Controls */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          3D Skills Universe // Interactive Constellation
        </div>

        <button
          onClick={() => resetCameraRef.current()}
          className="pointer-events-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white transition-all shadow-md backdrop-blur-md"
          title="Reset Camera View"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset View
        </button>
      </div>

      {/* Hover Node Tooltip Card */}
      {hoveredSkill && (
        <div
          style={{
            left: Math.min(tooltipPos.x + 15, (containerRef.current?.clientWidth || 300) - 260),
            top: Math.max(10, Math.min(tooltipPos.y - 80, (containerRef.current?.clientHeight || 300) - 180)),
          }}
          className="absolute z-20 w-64 p-4 rounded-2xl bg-slate-900/95 border border-cyan-500/50 backdrop-blur-2xl shadow-[0_0_30px_rgba(6,182,212,0.4)] pointer-events-none transition-all duration-150 animate-fade-in"
        >
          <div className="flex items-center justify-between mb-1.5">
            <h4 className="text-base font-bold text-white font-display">
              {hoveredSkill.name}
            </h4>
            <span className="text-xs font-mono font-semibold text-cyan-300">
              {hoveredSkill.level}%
            </span>
          </div>

          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-2.5">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
              style={{ width: `${hoveredSkill.level}%` }}
            />
          </div>

          <p className="text-xs text-slate-300 leading-relaxed mb-3 font-sans">
            {hoveredSkill.description}
          </p>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-slate-800/80 pt-2">
            <span>Category: {hoveredSkill.category}</span>
            <span>{hoveredSkill.experienceYears}y Exp</span>
          </div>

          {hoveredSkill.relatedProjects.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {hoveredSkill.relatedProjects.map((p) => (
                <NeonBadge key={p} variant="cyan" size="sm">
                  #{p}
                </NeonBadge>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Bottom Status / Instructions */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-slate-900/70 border border-slate-800 text-[11px] font-mono text-slate-400 pointer-events-none backdrop-blur-md flex items-center gap-3">
        <span>✦ Drag to rotate universe</span>
        <span>•</span>
        <span>✦ Scroll to zoom</span>
        <span>•</span>
        <span>✦ Hover sphere to inspect</span>
      </div>
    </div>
  );
};
