import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Code } from 'lucide-react';

interface TreeNodeData {
  id: string;
  name: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  complexity: string;
  category: string;
  color: number;
}

export const LeetCodeTreeCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<TreeNodeData | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Algorithmic Tree Nodes (Binary Search Tree / Graph structure in 3D)
    const treeNodes: Array<{
      pos: [number, number, number];
      data: TreeNodeData;
    }> = [
      // Root Node
      { pos: [0, 2.2, 0], data: { id: 'node-root', name: 'Binary Tree Maximum Path Sum', difficulty: 'Hard', complexity: 'O(N) Time | O(H) Space', category: 'Trees & Recursion', color: 0xf43f5e } },
      
      // Level 1
      { pos: [-1.8, 1.1, 0.4], data: { id: 'node-l1', name: 'Course Schedule II', difficulty: 'Medium', complexity: 'O(V+E) Time | O(V) Space', category: 'Graph Topological Sort', color: 0x38bdf8 } },
      { pos: [1.8, 1.1, -0.4], data: { id: 'node-r1', name: 'Trapping Rain Water', difficulty: 'Hard', complexity: 'O(N) Time | O(1) Space', category: 'Two Pointers & Monotonic Stack', color: 0xf43f5e } },

      // Level 2 Left Subtree
      { pos: [-2.6, -0.2, 0.8], data: { id: 'node-l2a', name: 'Coin Change (Bottom-Up)', difficulty: 'Medium', complexity: 'O(N*Amount) | O(Amount)', category: 'Dynamic Programming', color: 0x38bdf8 } },
      { pos: [-1.0, -0.2, -0.2], data: { id: 'node-l2b', name: 'Two Sum (Hash Map)', difficulty: 'Easy', complexity: 'O(N) Time | O(N) Space', category: 'Arrays & Hashing', color: 0x10b981 } },

      // Level 2 Right Subtree
      { pos: [1.0, -0.2, 0.3], data: { id: 'node-r2a', name: 'Binary Search (Iterative)', difficulty: 'Easy', complexity: 'O(log N) Time | O(1) Space', category: 'Binary Search', color: 0x10b981 } },
      { pos: [2.6, -0.2, -0.8], data: { id: 'node-r2b', name: 'Lowest Common Ancestor of BST', difficulty: 'Medium', complexity: 'O(H) Time | O(1) Space', category: 'Binary Search Tree', color: 0x38bdf8 } },

      // Level 3 Leaves
      { pos: [-3.1, -1.5, 0.4], data: { id: 'node-l3a', name: 'Longest Palindromic Substring', difficulty: 'Medium', complexity: 'O(N^2) Time | O(1) Space', category: 'String DP', color: 0x38bdf8 } },
      { pos: [-2.0, -1.5, 1.2], data: { id: 'node-l3b', name: 'Invert Binary Tree', difficulty: 'Easy', complexity: 'O(N) Time | O(H) Space', category: 'Tree Traversal', color: 0x10b981 } },
      { pos: [-0.6, -1.5, -0.6], data: { id: 'node-l3c', name: 'Merge K Sorted Lists', difficulty: 'Hard', complexity: 'O(N log K) | O(K) Space', category: 'Min-Heap Priority Queue', color: 0xf43f5e } },
      { pos: [0.6, -1.5, 0.8], data: { id: 'node-l3d', name: 'Valid Parentheses', difficulty: 'Easy', complexity: 'O(N) Time | O(N) Space', category: 'Stack', color: 0x10b981 } },
      { pos: [2.0, -1.5, -0.3], data: { id: 'node-l3e', name: 'Word Break', difficulty: 'Medium', complexity: 'O(N^3) Time | O(N) Space', category: 'Dynamic Programming', color: 0x38bdf8 } },
      { pos: [3.1, -1.5, -1.2], data: { id: 'node-l3f', name: 'Median of Two Sorted Arrays', difficulty: 'Hard', complexity: 'O(log(min(M,N))) | O(1)', category: 'Binary Search', color: 0xf43f5e } }
    ];

    const nodeMeshes: Array<{ mesh: THREE.Mesh; data: TreeNodeData }> = [];

    treeNodes.forEach((item) => {
      const geo = new THREE.IcosahedronGeometry(0.22, 1);
      const mat = new THREE.MeshStandardMaterial({
        color: item.data.color,
        emissive: item.data.color,
        emissiveIntensity: 0.5,
        roughness: 0.2,
        metalness: 0.5
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(...item.pos);
      mesh.userData = { treeData: item.data };

      // Halo wireframe
      const haloGeo = new THREE.IcosahedronGeometry(0.32, 1);
      const haloMat = new THREE.MeshBasicMaterial({
        color: item.data.color,
        wireframe: true,
        transparent: true,
        opacity: 0.3
      });
      mesh.add(new THREE.Mesh(haloGeo, haloMat));

      rootGroup.add(mesh);
      nodeMeshes.push({ mesh, data: item.data });
    });

    // Edges connecting parent and child nodes
    const edgePairs: Array<[number, number]> = [
      [0, 1], [0, 2], // Root to L1, R1
      [1, 3], [1, 4], // L1 to L2a, L2b
      [2, 5], [2, 6], // R1 to R2a, R2b
      [3, 7], [3, 8], // L2a to leaves
      [4, 9],
      [5, 10],
      [6, 11], [6, 12]
    ];

    const edgesGroup = new THREE.Group();
    rootGroup.add(edgesGroup);

    const lineMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    });

    edgePairs.forEach(([pIdx, cIdx]) => {
      const p1 = new THREE.Vector3(...treeNodes[pIdx].pos);
      const p2 = new THREE.Vector3(...treeNodes[cIdx].pos);
      const geom = new THREE.BufferGeometry().setFromPoints([p1, p2]);
      edgesGroup.add(new THREE.Line(geom, lineMat));
    });

    // Traversal Energy Pulses
    const pulseCount = 18;
    const pulseGeo = new THREE.BufferGeometry();
    const pulsePositions = new Float32Array(pulseCount * 3);
    pulseGeo.setAttribute('position', new THREE.BufferAttribute(pulsePositions, 3));
    const pulseMat = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.1,
      transparent: true,
      opacity: 0.8
    });
    const pulsePoints = new THREE.Points(pulseGeo, pulseMat);
    edgesGroup.add(pulsePoints);

    // Ambient & Directional Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.8));
    const mainLight = new THREE.DirectionalLight(0x00f0ff, 2.5);
    mainLight.position.set(5, 5, 5);
    scene.add(mainLight);

    const purpleLight = new THREE.DirectionalLight(0xa855f7, 2);
    purpleLight.position.set(-5, -3, -4);
    scene.add(purpleLight);

    // Mouse Drag Interaction
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };
    let rotVelocity = { x: 0, y: 0.003 };

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
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(new THREE.Vector2(mouseX, mouseY), camera);

        const intersects = raycaster.intersectObjects(nodeMeshes.map(n => n.mesh));
        if (intersects.length > 0) {
          const hit = intersects[0].object as THREE.Mesh;
          const data = hit.userData.treeData as TreeNodeData;
          setHoveredNode(data);
          setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
          document.body.style.cursor = 'pointer';
        } else {
          setHoveredNode(null);
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

      if (!isDragging) {
        rotVelocity.x *= 0.96;
        rotVelocity.y *= 0.96;
        rootGroup.rotation.y += 0.003 + rotVelocity.y;
        rootGroup.rotation.x += rotVelocity.x;
      } else {
        rootGroup.rotation.y += rotVelocity.y;
        rootGroup.rotation.x += rotVelocity.x;
      }

      // Energy pulses running down branches
      const positions = pulsePoints.geometry.attributes.position.array as Float32Array;
      edgePairs.forEach(([pIdx, cIdx], eIdx) => {
        if (eIdx < pulseCount) {
          const t = (elapsedTime * 0.8 + eIdx * 0.2) % 1;
          const p1 = treeNodes[pIdx].pos;
          const p2 = treeNodes[cIdx].pos;
          positions[eIdx * 3] = p1[0] + (p2[0] - p1[0]) * t;
          positions[eIdx * 3 + 1] = p1[1] + (p2[1] - p1[1]) * t;
          positions[eIdx * 3 + 2] = p1[2] + (p2[2] - p1[2]) * t;
        }
      });
      pulsePoints.geometry.attributes.position.needsUpdate = true;

      // Subtle breath on node scale
      nodeMeshes.forEach((n, idx) => {
        const s = 1 + Math.sin(elapsedTime * 2 + idx) * 0.05;
        n.mesh.scale.set(s, s, s);
      });

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
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Top Overlay Legend */}
      <div className="absolute top-4 left-4 pointer-events-none space-y-1">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-purple-500/30 text-purple-300 text-xs font-mono backdrop-blur-md">
          <Code className="w-3.5 h-3.5" />
          <span>3D Algorithmic Search Tree // Traversal Mesh</span>
        </div>
        <p className="text-[11px] font-mono text-slate-400 pl-1">
          Drag to rotate graph • Hover node to inspect algorithmic complexity
        </p>
      </div>

      {/* Difficulty Legend */}
      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 pointer-events-none">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-emerald-400 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          Easy (180+ Solved)
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-cyan-400 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          Medium (220+ Solved)
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-rose-400 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-rose-400" />
          Hard (50+ Solved)
        </div>
      </div>

      {/* Hover Tooltip */}
      {hoveredNode && (
        <div
          style={{
            left: `${tooltipPos.x + 12}px`,
            top: `${tooltipPos.y + 12}px`
          }}
          className="absolute z-30 pointer-events-none p-3.5 rounded-xl bg-slate-900/95 border border-purple-500/40 shadow-2xl backdrop-blur-xl max-w-xs space-y-1 text-xs font-mono transition-transform"
        >
          <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-1.5">
            <span className="text-white font-bold truncate">{hoveredNode.name}</span>
            <span
              className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                hoveredNode.difficulty === 'Easy'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : hoveredNode.difficulty === 'Medium'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
              }`}
            >
              {hoveredNode.difficulty}
            </span>
          </div>
          <p className="text-slate-300 text-[11px] font-sans pt-0.5">
            Topic: <span className="text-cyan-300 font-semibold">{hoveredNode.category}</span>
          </p>
          <div className="text-[10px] text-purple-300 pt-0.5 font-mono">
            Complexity: <span className="text-white">{hoveredNode.complexity}</span>
          </div>
        </div>
      )}
    </div>
  );
};
