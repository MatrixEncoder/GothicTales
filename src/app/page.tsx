'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import PageTransition from '@/components/PageTransition';

const featuredStories = [
  {
    title: "The Haunting of Blackwood Manor",
    excerpt: "A centuries-old estate harboring dark secrets...",
    link: "/stories/blackwood-manor"
  },
  {
    title: "Whispers in the Asylum",
    excerpt: "The abandoned psychiatric hospital that still echoes with screams...",
    link: "/stories/asylum-whispers"
  },
  {
    title: "The Red Room Ritual",
    excerpt: "A forbidden ritual that opens doors that should stay closed...",
    link: "/stories/red-room"
  }
];

export default function Home() {
  useEffect(() => {
    // Create flickering text effect
    const flicker = gsap.to('.flicker', {
      opacity: 0.8,
      duration: 0.1,
      repeat: -1,
      yoyo: true,
      ease: "none",
      randomize: true
    });

    // Cleanup
    return () => {
      flicker.kill();
    };
  }, []);

  return (
    <PageTransition>
      <main className="min-h-screen gothic-container py-24 relative overflow-hidden">
        {/* Atmospheric overlay */}
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="gothic-heading text-center mb-8 flicker">
            Welcome to GothicTales
          </h1>
          <p className="text-center text-gothic-300 text-lg mb-12">
            Where nightmares come alive and reality blends with the supernatural
          </p>
        </motion.div>

        {/* Featured Stories */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {featuredStories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gothic-900/50 p-6 rounded-lg border border-red-900/20 hover:border-red-900/40 transition-colors"
            >
              <Link href={story.link} className="block group">
                <h3 className="text-xl font-gothic text-red-500 group-hover:text-red-400 transition-colors mb-2">
                  {story.title}
                </h3>
                <p className="text-gothic-400">{story.excerpt}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <Link 
            href="/stories" 
            className="inline-block px-6 py-3 bg-red-900/20 hover:bg-red-900/30 text-red-500 border border-red-900/40 rounded-lg transition-colors"
          >
            Explore All Stories
          </Link>
        </motion.div>
      </main>
    </PageTransition>
  );
}
