'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import gsap from 'gsap';
import PageTransition from '@/components/PageTransition';

export default function About() {
  useEffect(() => {
    // Create slower flickering text effect
    const flicker = gsap.to('.flicker', {
      opacity: 0.7,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: {
        amount: 1.5,
        from: "random"
      }
    });

    // Create sliced letter effect with more dramatic cuts
    const title = "About Gothic Tales";
    const titleElement = document.querySelector('.title-container');
    if (titleElement) {
      titleElement.innerHTML = '';
      [...title].forEach((letter, i) => {
        const letterContainer = document.createElement('span');
        letterContainer.className = 'relative inline-block mx-[1px]';
        
        if (letter !== ' ') {
          // Main letter with slice
          letterContainer.style.clipPath = 'polygon(0 15%, 100% 0, 100% 85%, 0 100%)';
          
          const letterSpan = document.createElement('span');
          letterSpan.textContent = letter;
          letterSpan.className = 'text-red-500 relative flicker';
          
          // Top slice (darker)
          const topSlice = document.createElement('span');
          topSlice.textContent = letter;
          topSlice.className = 'absolute top-0 left-0 text-red-900';
          topSlice.style.clipPath = 'polygon(0 0, 100% 0, 100% 15%, 0 30%)';
          topSlice.style.transform = 'translateY(-1px)';
          
          // Bottom slice (blood effect)
          const bottomSlice = document.createElement('span');
          bottomSlice.textContent = letter;
          bottomSlice.className = 'absolute bottom-0 left-0 text-red-700';
          bottomSlice.style.clipPath = 'polygon(0 70%, 100% 85%, 100% 100%, 0 100%)';
          bottomSlice.style.transform = 'translateY(1px)';
          
          letterContainer.appendChild(topSlice);
          letterContainer.appendChild(letterSpan);
          letterContainer.appendChild(bottomSlice);
        } else {
          // Space character
          const spaceSpan = document.createElement('span');
          spaceSpan.innerHTML = '&nbsp;';
          spaceSpan.className = 'mx-2';
          letterContainer.appendChild(spaceSpan);
        }
        
        titleElement.appendChild(letterContainer);
      });
    }

    // Enhanced blood drip animations
    const bloodDrips = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5
    });

    // Create blood pool effect
    gsap.to('.blood-pool', {
      width: '100%',
      duration: 2,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true
    });

    document.querySelectorAll('.blood-drip').forEach((drip, index) => {
      // Initial state
      gsap.set(drip, { height: 0, opacity: 0 });

      // Create more organic dripping animation
      bloodDrips
        .to(drip, {
          height: '40px',
          opacity: 1,
          duration: 1.5,
          ease: 'power2.in',
          delay: index * 0.3
        })
        .to(drip, {
          height: '45px', // Slight stretch
          duration: 0.3,
          ease: 'power1.inOut'
        })
        .to(drip, {
          height: '50px',
          opacity: 0,
          duration: 1,
          ease: 'power2.out'
        }, '-=0.2');
    });

    // Cleanup
    return () => {
      flicker.kill();
      bloodDrips.kill();
    };
  }, []);

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <h1 className="title-container text-center mb-2 text-6xl font-gothic tracking-wider leading-relaxed"></h1>
          
          {/* Enhanced blood effects */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-2xl mx-auto">
            <div className="relative h-16">
              {/* Main blood pool with pulsing effect */}
              <div className="blood-pool absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[3px] w-3/4 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-80"></div>
              
              {/* Blood drips with varying widths and positions */}
              <div className="blood-drip absolute bottom-0 left-[20%] w-[2px] bg-gradient-to-b from-red-900 via-red-600 to-red-800 opacity-90"></div>
              <div className="blood-drip absolute bottom-0 left-[35%] w-[3px] bg-gradient-to-b from-red-900 via-red-600 to-red-800 opacity-80"></div>
              <div className="blood-drip absolute bottom-0 left-[50%] w-[4px] bg-gradient-to-b from-red-900 via-red-600 to-red-800 opacity-95"></div>
              <div className="blood-drip absolute bottom-0 left-[65%] w-[3px] bg-gradient-to-b from-red-900 via-red-600 to-red-800 opacity-85"></div>
              <div className="blood-drip absolute bottom-0 left-[80%] w-[2px] bg-gradient-to-b from-red-900 via-red-600 to-red-800 opacity-90"></div>
              
              {/* Additional smaller drips for variety */}
              <div className="blood-drip absolute bottom-0 left-[28%] w-[1px] bg-gradient-to-b from-red-900 via-red-600 to-red-800 opacity-75"></div>
              <div className="blood-drip absolute bottom-0 left-[72%] w-[1px] bg-gradient-to-b from-red-900 via-red-600 to-red-800 opacity-75"></div>
            </div>
          </div>

          <p className="text-xl text-gothic-400 mb-16 text-center flicker mt-8">Created by Suryansh Srivastava</p>
        </motion.div>
          
        <div className="space-y-12 text-gothic-100">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gothic-900/30 p-6 rounded-lg border border-red-900/20"
          >
            <p className="text-lg leading-relaxed">
              Welcome to Gothic Tales, my digital sanctuary for those drawn to the darker corners of storytelling. 
              In the spirit of transparency, I want to share that this project is a unique fusion of human creativity 
              and artificial intelligence. As the creator, I've collaborated with various open-source Large Language 
              Models (LLMs) and carefully crafted prompts to bring these dark tales to life.
            </p>
          </motion.div>

          <section className="space-y-4">
            <div className="relative inline-block w-full">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="gothic-heading text-3xl flicker relative z-10 pl-12"
              >
                I. My Approach
              </motion.h2>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-red-900" />
              <div className="blood-drip absolute left-8 top-full w-[2px] h-0 bg-gradient-to-b from-red-900 to-red-600" />
            </div>
            <p>
              Each element of Gothic Tales - from the haunting narratives to the technical implementation - 
              represents my vision brought to life through a combination of human creativity and AI capabilities. 
              This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gothic-200">
              <li>Content generation and curation assisted by open-source LLMs</li>
              <li>Website design and development enhanced through AI-powered coding tools</li>
              <li>Image selection and processing guided by AI understanding of gothic aesthetics</li>
              <li>User experience crafted through my design sensibilities and AI assistance</li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="relative inline-block w-full">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="gothic-heading text-3xl flicker relative z-10 pl-12"
              >
                II. My Mission
              </motion.h2>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-red-900" />
              <div className="blood-drip absolute left-8 top-full w-[2px] h-0 bg-gradient-to-b from-red-900 to-red-600" />
            </div>
            <p>
              My goal is to preserve and celebrate the rich tradition of gothic horror while embracing modern 
              technological innovations. I believe that by being open about my use of AI tools, I can demonstrate 
              how technology can enhance rather than diminish the art of storytelling.
            </p>
          </section>

          <section className="space-y-4">
            <div className="relative inline-block w-full">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="gothic-heading text-3xl flicker relative z-10 pl-12"
              >
                III. Connect With Me
              </motion.h2>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-red-900" />
              <div className="blood-drip absolute left-8 top-full w-[2px] h-0 bg-gradient-to-b from-red-900 to-red-600" />
            </div>
            <p>
              Whether you're a longtime fan of gothic horror or new to the genre, I invite you to explore my 
              collection of tales, legends, and historical accounts. You can follow my work and connect with me on{' '}
              <Link href="https://github.com/MatrixEncoder" className="text-red-500 hover:text-red-400 transition-colors">
                GitHub
              </Link>{' '}
              and{' '}
              <Link href="https://instagram.com/illusionist__666" className="text-red-500 hover:text-red-400 transition-colors">
                Instagram
              </Link>.
            </p>
          </section>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-gothic-900/30 p-6 rounded-lg border border-red-900/20 mt-12"
          >
            <p className="text-gothic-300 italic text-lg">
              "Gothic Tales represents my commitment to blending traditional storytelling with modern AI technology, 
              creating a unique experience for horror enthusiasts."
            </p>
            <p className="text-gothic-400 mt-2">— Suryansh Srivastava</p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
