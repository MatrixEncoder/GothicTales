'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import PageTransition from '@/components/PageTransition';

const stories = [
  {
    id: 'blackwood-manor',
    title: 'The Haunting of Blackwood Manor',
    excerpt: 'A centuries-old estate harboring dark secrets that have claimed countless lives...',
    date: '2025-02-09',
    category: 'Haunted Places',
    readTime: '15 min'
  },
  {
    id: 'asylum-whispers',
    title: 'Whispers in the Asylum',
    excerpt: 'The abandoned psychiatric hospital that still echoes with the screams of its former patients...',
    date: '2025-02-08',
    category: 'Urban Legends',
    readTime: '12 min'
  },
  {
    id: 'red-room',
    title: 'The Red Room Ritual',
    excerpt: 'A forbidden ritual that opens doors that should stay closed, inviting entities from beyond...',
    date: '2025-02-07',
    category: 'Rituals',
    readTime: '18 min'
  },
  {
    id: 'midnight-train',
    title: 'The Midnight Train',
    excerpt: 'A mysterious train that appears only at midnight, collecting souls instead of passengers...',
    date: '2025-02-06',
    category: 'Urban Legends',
    readTime: '10 min'
  },
  {
    id: 'mirror-witch',
    title: 'The Mirror Witch',
    excerpt: 'The terrifying truth behind the ancient mirror ritual that summons something sinister...',
    date: '2025-02-05',
    category: 'Rituals',
    readTime: '14 min'
  }
];

export default function Stories() {
  return (
    <PageTransition>
      <div className="relative min-h-screen">
        <Image 
          src="https://images.unsplash.com/photo-1534351590666-13e3e96b5017" 
          alt="Gothic Tales Stories Background" 
          fill 
          priority
          quality={80}
          className="absolute inset-0 object-cover opacity-30 z-[-1]"
        />
        
        <div className="container mx-auto px-4 py-16 relative z-10 bg-black/60">
          <h1 
            className="
              text-6xl 
              font-['Nosifer'] 
              text-red-900 
              mb-8 
              text-center 
              creepy-text 
              glitch-text
            "
            data-text="Haunting Stories"
          >
            Haunting Stories
          </h1>
          
          <p 
            className="
              text-xl 
              text-gray-300 
              mb-12 
              text-center 
              max-w-2xl 
              mx-auto
            "
          >
            Explore the dark corners of human psyche, where reality blends with nightmare
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="
                  bg-black/40 
                  p-6 
                  rounded-lg 
                  border 
                  border-red-900/20 
                  hover:border-red-900/50 
                  transition-colors
                "
              >
                <h3 
                  className="
                    text-xl 
                    font-['Nosifer'] 
                    text-red-900 
                    mb-4 
                    creepy-text
                  "
                >
                  {story.title}
                </h3>
                <p 
                  className="
                    text-gray-300 
                    mb-4
                  "
                >
                  {story.excerpt}
                </p>
                <Link 
                  href={`/stories/${story.id}`} 
                  className="
                    inline-block 
                    px-4 
                    py-2 
                    bg-black/40 
                    text-gray-300 
                    border 
                    border-red-900/20 
                    rounded 
                    hover:bg-black/60 
                    transition-colors
                    font-['Nosifer']
                    creepy-text
                  "
                >
                  Read More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
