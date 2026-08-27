import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ContactGlobeCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 6.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // 1. Dark Holographic Earth Sphere Core
    const coreGeo = new THREE.SphereGeometry(2.0, 36, 36);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x050c1e,
      roughness: 0.8,
      metalness: 0.2,
      transparent: true,
      opacity: 0.85
    });
    const coreSphere = new THREE.Mesh(coreGeo, coreMat);
    globeGroup.add(coreSphere);

    // 2. Wireframe / Latitude Longitude Lines
    const wireGeo = new THREE.WireframeGeometry(new THREE.SphereGeometry(2.02, 24, 24));
    const wireMat = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending
    });
    const wireframe = new THREE.LineSegments(wireGeo, wireMat);
    globeGroup.add(wireframe);

    // 3. Glowing Outer Atmosphere Ring
    const atmosphereGeo = new THREE.SphereGeometry(2.25, 32, 32);
    const atmosphereMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.12,
      wireframe: true,
      blending: THREE.AdditiveBlending
    });
    const atmosphere = new THREE.Mesh(atmosphereGeo, atmosphereMat);
    globeGroup.add(atmosphere);

    // 4. City Beacons & Pin Points
    const cities = [
      { lat: 37.7749, lng: -122.4194, name: 'San Francisco' },
      { lat: 40.7128, lng: -74.006, name: 'New York' },
      { lat: 51.5074, lng: -0.1278, name: 'London' },
      { lat: 35.6762, lng: 139.6503, name: 'Tokyo' },
      { lat: 1.3521, lng: 103.8198, name: 'Singapore' },
      { lat: -33.8688, lng: 151.2093, name: 'Sydney' },
      { lat: 12.9716, lng: 77.5946, name: 'Bengaluru' },
      { lat: 48.8566, lng: 2.3522, name: 'Paris' },
    ];

    const latLngToVector3 = (lat: number, lng: number, radius: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -(radius * Math.sin(phi) * Math.cos(theta)),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
    };

    const pinPoints: THREE.Vector3[] = [];
    cities.forEach((city, idx) => {
      const pos = latLngToVector3(city.lat, city.lng, 2.05);
      pinPoints.push(pos);

      // Pin sphere
      const pinGeo = new THREE.SphereGeometry(0.06, 12, 12);
      const pinMat = new THREE.MeshBasicMaterial({
        color: idx === 0 ? 0x00f0ff : 0xa855f7,
      });
      const pin = new THREE.Mesh(pinGeo, pinMat);
      pin.position.copy(pos);
      globeGroup.add(pin);

      // Glowing Pulse Ring around Home Pin
      if (idx === 0) {
        const pulseGeo = new THREE.RingGeometry(0.08, 0.14, 16);
        const pulseMat = new THREE.MeshBasicMaterial({
          color: 0x00f0ff,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.8
        });
        const pulseRing = new THREE.Mesh(pulseGeo, pulseMat);
        pulseRing.position.copy(pos);
        pulseRing.lookAt(new THREE.Vector3(0, 0, 0));
        globeGroup.add(pulseRing);
      }
    });

    // 5. Orbital Arcs connecting San Francisco to World Hubs
    const homePos = pinPoints[0];
    pinPoints.slice(1).forEach((targetPos) => {
      const distance = homePos.distanceTo(targetPos);
      const mid = homePos.clone().lerp(targetPos, 0.5);
      mid.normalize().multiplyScalar(2.05 + distance * 0.25);

      const curve = new THREE.QuadraticBezierCurve3(homePos, mid, targetPos);
      const points = curve.getPoints(30);
      const arcGeo = new THREE.BufferGeometry().setFromPoints(points);
      const arcMat = new THREE.LineBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending
      });
      const arc = new THREE.Line(arcGeo, arcMat);
      globeGroup.add(arc);
    });

    // 6. Orbital Satellite Rings
    const satRingGeo = new THREE.TorusGeometry(3.1, 0.015, 8, 64);
    const satRingMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.3 });
    const satRing1 = new THREE.Mesh(satRingGeo, satRingMat);
    satRing1.rotation.x = Math.PI / 3;
    globeGroup.add(satRing1);

    const satRing2 = new THREE.Mesh(satRingGeo, satRingMat);
    satRing2.rotation.y = Math.PI / 3;
    globeGroup.add(satRing2);

    // 7. Ambient Particle Field
    const particleCount = 150;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 12;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00f0ff, 2.5, 10);
    pointLight.position.set(4, 3, 4);
    scene.add(pointLight);

    // Interactive Dragging
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;
    let rotX = 0.2;
    let rotY = -1.2;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      prevX = clientX;
      prevY = clientY;
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const dx = clientX - prevX;
      const dy = clientY - prevY;
      rotY += dx * 0.006;
      rotX += dy * 0.006;
      prevX = clientX;
      prevY = clientY;
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
    let clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      const delta = clock.getDelta();

      if (!isDragging) {
        rotY += delta * 0.2;
      }

      globeGroup.rotation.y = rotY;
      globeGroup.rotation.x = rotX;

      satRing1.rotation.z += delta * 0.1;
      satRing2.rotation.z -= delta * 0.08;
      particles.rotation.y += delta * 0.02;

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
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[550px] flex items-center justify-center select-none overflow-hidden rounded-3xl">
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-900/70 border border-slate-800 text-[10px] sm:text-xs font-mono text-slate-400 pointer-events-none backdrop-blur-md">
        ✦ Interactive 3D Global Telemetry Mesh
      </div>
    </div>
  );
};
