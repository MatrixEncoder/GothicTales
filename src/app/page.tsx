'use client';

<<<<<<< HEAD
import Link from 'next/link';
import Image from 'next/image';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
=======
import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import PageTransition from '@/components/PageTransition';
>>>>>>> b4da9516081393239a60beba36b2d532c61d4551

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
<<<<<<< HEAD
  return (
    <PageTransition>
      <div className="relative min-h-screen flex flex-col justify-center items-center text-center">
        {/* Dark, atmospheric background image */}
        <Image 
          src="https://images.unsplash.com/photo-1516737490857-847e4fbcf7b0" 
          alt="Gothic Tales Atmosphere" 
          fill 
          priority
          quality={80}
          className="absolute inset-0 object-cover opacity-30 z-[-1]"
        />
        
        <main className="relative z-10 px-4 py-16 bg-black/60 rounded-xl min-h-screen gothic-container py-24">
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
      </div>
=======
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
>>>>>>> b4da9516081393239a60beba36b2d532c61d4551
    </PageTransition>
  );
}
