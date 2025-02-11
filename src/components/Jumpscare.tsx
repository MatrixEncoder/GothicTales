'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Jumpscare images - you'll need to add these to your public folder
const jumpscareImages = [
  '/images/jumpscare1.jpg',
  '/images/jumpscare2.jpg',
  '/images/jumpscare3.jpg'
];

const Jumpscare: React.FC = () => {
  const [showJumpscare, setShowJumpscare] = useState(false);
  const [jumpscareImage, setJumpscareImage] = useState('');

  useEffect(() => {
    // Client-side only logic
    if (typeof window !== 'undefined') {
      const triggerJumpscare = () => {
        const randomImage = jumpscareImages[Math.floor(Math.random() * jumpscareImages.length)];
        setJumpscareImage(randomImage);
        setShowJumpscare(true);

        try {
          const audio = new Audio('/sounds/scream.mp3');
          audio.play().catch(console.error);
        } catch (error) {
          console.error('Jumpscare audio error:', error);
        }

        setTimeout(() => setShowJumpscare(false), 2000);
      };

      // Random interval between 25-35 seconds
      const interval = Math.floor(Math.random() * 10000) + 25000;
      const timer = setInterval(triggerJumpscare, interval);

      return () => clearInterval(timer);
    }
  }, []);

  if (!showJumpscare) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 pointer-events-none"
      style={{ 
        animation: 'jumpscare 0.5s ease-in-out',
        transformOrigin: 'center'
      }}
    >
      <Image 
        src={jumpscareImage} 
        alt="Jumpscare" 
        fill 
        className="object-contain animate-jumpscare"
        onError={(e) => {
          console.error('Jumpscare image load failed:', e);
          setShowJumpscare(false);
        }}
      />
    </div>
  );
};

export default Jumpscare;
