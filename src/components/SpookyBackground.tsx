'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function SpookyBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create floating particles
    const particles = Array.from({ length: 50 }).map(() => {
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-red-500/10 rounded-full';
      containerRef.current?.appendChild(particle);
      return particle;
    });

    // Animate particles
    particles.forEach((particle) => {
      gsap.set(particle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });

      gsap.to(particle, {
        x: `+=${Math.random() * 100 - 50}`,
        y: `+=${Math.random() * 100 - 50}`,
        opacity: Math.random() * 0.5,
        duration: 2 + Math.random() * 4,
        ease: 'none',
        repeat: -1,
        yoyo: true,
      });
    });

    // Create fog effect
    const fogLayers = Array.from({ length: 3 }).map(() => {
      const fog = document.createElement('div');
      fog.className = 'absolute inset-0 bg-gradient-to-r from-black/0 via-red-900/5 to-black/0';
      containerRef.current?.appendChild(fog);
      return fog;
    });

    // Animate fog
    fogLayers.forEach((fog, index) => {
      gsap.to(fog, {
        x: '100%',
        duration: 20 + index * 10,
        ease: 'none',
        repeat: -1,
      });
      gsap.fromTo(fog,
        { opacity: 0 },
        { 
          opacity: 0.1,
          duration: 3 + index,
          ease: 'power1.inOut',
          repeat: -1,
          yoyo: true
        }
      );
    });

    // Create random flicker effect
    const flicker = document.createElement('div');
    flicker.className = 'absolute inset-0 bg-gradient-to-t from-red-900/5 to-transparent opacity-0';
    containerRef.current?.appendChild(flicker);

    gsap.to(flicker, {
      opacity: 0.2,
      duration: 0.1,
      repeat: -1,
      yoyo: true,
      ease: 'none',
      repeatDelay: Math.random() * 5,
    });

    return () => {
      // Cleanup
      particles.forEach(p => p.remove());
      fogLayers.forEach(f => f.remove());
      flicker.remove();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      style={{ mixBlendMode: 'overlay' }}
    />
  );
}
