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

  console.log('Jumpscare component initialized');

  useEffect(() => {
    console.log('Jumpscare useEffect triggered');
    // Ensure this runs only on client side
    if (typeof window !== 'undefined') {
      console.log('Window is defined, setting up jumpscare');
      const triggerJumpscare = () => {
        console.log('Attempting to trigger jumpscare');
        // Increase probability of jumpscare
        if (Math.random() < 1) {  // Always trigger for debugging
          console.log('Jumpscare triggered');
          const randomImage = jumpscareImages[Math.floor(Math.random() * jumpscareImages.length)];
          setJumpscareImage(randomImage);
          setShowJumpscare(true);

          // Play scream sound with error handling
          try {
            console.log('Attempting to play scream sound');
            const audio = new Audio('/sounds/scream.mp3');
            audio.volume = 1;  // Max volume
            audio.play().then(() => {
              console.log('Scream audio played successfully');
            }).catch(error => {
              console.error('Scream audio play error:', error);
            });
          } catch (error) {
            console.error('Jumpscare audio setup error:', error);
          }

          // Automatically hide after 2 seconds
          setTimeout(() => {
            console.log('Hiding jumpscare');
            setShowJumpscare(false);
          }, 2000);
        }
      };

      // Trigger immediately and then at intervals
      triggerJumpscare();
      const intervalTimer = setInterval(triggerJumpscare, 10000);

      // Cleanup function
      return () => {
        clearInterval(intervalTimer);
      };
    }
  }, []);

  console.log('Jumpscare state:', { showJumpscare, jumpscareImage });

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
        priority
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
