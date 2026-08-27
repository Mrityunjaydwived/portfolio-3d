import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ServiceCard3DProps {
  type: 'software' | 'web' | 'python' | 'data' | 'training' | 'consulting';
  color?: string;
}

export const ServiceCard3D: React.FC<ServiceCard3DProps> = ({ type, color = '#00f0ff' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 100;
    const height = container.clientHeight || 100;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 3.2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const threeColor = new THREE.Color(color);

    let geo: THREE.BufferGeometry;

    switch (type) {
      case 'software':
        geo = new THREE.BoxGeometry(1.2, 1.2, 1.2);
        break;
      case 'web':
        geo = new THREE.IcosahedronGeometry(1.1, 0);
        break;
      case 'python':
        geo = new THREE.TorusKnotGeometry(0.7, 0.22, 64, 16);
        break;
      case 'data':
        geo = new THREE.OctahedronGeometry(1.2, 0);
        break;
      case 'training':
        geo = new THREE.DodecahedronGeometry(1.1, 0);
        break;
      case 'consulting':
      default:
        geo = new THREE.TorusGeometry(0.9, 0.2, 16, 32);
        break;
    }

    // Solid inner core
    const mat = new THREE.MeshStandardMaterial({
      color: 0x0a152e,
      roughness: 0.3,
      metalness: 0.8,
    });
    const mesh = new THREE.Mesh(geo, mat);
    group.add(mesh);

    // Glowing Wireframe
    const wireGeo = new THREE.WireframeGeometry(geo);
    const wireMat = new THREE.LineBasicMaterial({
      color: threeColor,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });
    const wire = new THREE.LineSegments(wireGeo, wireMat);
    group.add(wire);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(threeColor, 3, 10);
    pointLight.position.set(2, 2, 3);
    scene.add(pointLight);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      group.rotation.x += delta * 0.8;
      group.rotation.y += delta * 1.0;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [type, color]);

  return (
    <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center pointer-events-none">
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
};
