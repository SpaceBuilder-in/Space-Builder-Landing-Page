"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeWave() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Background color matches the site background --color-bg (#08080a)
    // We add fog to smoothly fade the wireframe into black in the distance
    scene.background = null; // transparent background so CSS grid/glow details show through
    scene.fog = new THREE.FogExp2(0x08080a, 0.015);

    // Camera
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    // Position camera slightly above and looking down at the landscape
    camera.position.set(0, 18, 55);
    camera.lookAt(0, 0, -10);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Geometry - landscape plane (reduced from 64x64 to 48x48 for performance)
    const geometry = new THREE.PlaneGeometry(160, 160, 48, 48);

    // Rotate geometry to lie horizontally
    geometry.rotateX(-Math.PI / 2);

    // Material - wireframe in subtle gold color matching our theme
    const material = new THREE.MeshBasicMaterial({
      color: 0xc69a4e, // gold-3
      wireframe: true,
      transparent: true,
      opacity: 0.15, // premium, subtle and non-distracting
      depthWrite: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    // Lower the plane slightly so it sits at the bottom of the hero screen
    mesh.position.y = -6;
    scene.add(mesh);

    // Animation variables
    const timer = new THREE.Timer();
    let animationFrameId: number;
    let isVisible = true;

    const positionAttribute = geometry.attributes.position;
    if (!positionAttribute) return;
    const count = positionAttribute.count;

    // Cache initial X and Z coordinates for wave calculations
    const initialPositions = new Float32Array(count * 2);
    for (let i = 0; i < count; i++) {
      initialPositions[i * 2] = positionAttribute.getX(i);
      initialPositions[i * 2 + 1] = positionAttribute.getZ(i); // Note: Z coordinate is the depth axis on horizontal plane
    }

    // Animation loop
    const animate = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      timer.update();
      const time = timer.getElapsed() * 0.4;

      // Update geometry vertices to simulate wave motion
      for (let i = 0; i < count; i++) {
        const x = initialPositions[i * 2] ?? 0;
        const z = initialPositions[i * 2 + 1] ?? 0;

        // Create rolling landscape waves using overlapping sine/cosine functions
        const y =
          Math.sin(x * 0.05 + time) * Math.cos(z * 0.05 + time) * 6.5 +
          Math.sin(x * 0.12 - time * 1.5) * Math.cos(z * 0.12 + time * 1.0) * 1.8;

        // Set the Y (vertical height) of the vertex
        positionAttribute.setY(i, y);
      }

      positionAttribute.needsUpdate = true;
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    // IntersectionObserver to pause when hero is off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry?.isIntersecting ?? false;
      },
      { threshold: 0 },
    );
    observer.observe(container);

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      // Clean up WebGL resources
      geometry.dispose();
      material.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-50 sm:opacity-70"
      style={{
        maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
      }}
    />
  );
}
