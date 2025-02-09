'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
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
      <main className="min-h-screen gothic-container py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="gothic-heading text-center mb-4">Horror Stories</h1>
          <p className="text-center text-gothic-300 text-lg mb-12">
            Explore our collection of true horror tales and supernatural encounters
          </p>
        </motion.div>

        <div className="grid gap-8">
          {stories.map((story, index) => (
            <motion.article
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gothic-900/50 p-6 rounded-lg border border-red-900/20 hover:border-red-900/40 transition-all group"
            >
              <Link href={`/stories/${story.id}`} className="block">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-gothic text-red-500 group-hover:text-red-400 transition-colors">
                    {story.title}
                  </h2>
                  <div className="flex items-center space-x-4 text-sm text-gothic-400">
                    <span>{story.category}</span>
                    <span>•</span>
                    <span>{story.readTime}</span>
                  </div>
                </div>
                <p className="text-gothic-300 mb-4">{story.excerpt}</p>
                <div className="flex items-center text-sm text-gothic-400">
                  <span>{story.date}</span>
                  <span className="ml-auto text-red-500 group-hover:text-red-400 transition-colors">
                    Read More →
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </main>
    </PageTransition>
  );
}
