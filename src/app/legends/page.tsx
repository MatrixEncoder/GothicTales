'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import PageTransition from '@/components/PageTransition';

const legends = [
  {
    id: 'bloody-mary',
    title: 'Bloody Mary',
    origin: 'Western Folklore',
    type: 'Urban Legend',
    excerpt: 'The mirror-dwelling spirit that appears when her name is called three times...',
    riskLevel: 'High'
  },
  {
    id: 'slender-man',
    title: 'Slender Man',
    origin: 'Internet Culture',
    type: 'Modern Myth',
    excerpt: 'The unnaturally tall, faceless figure that stalks its victims through forests and dreams...',
    riskLevel: 'Unknown'
  },
  {
    id: 'wendigo',
    title: 'The Wendigo',
    origin: 'Native American',
    type: 'Ancient Legend',
    excerpt: 'A malevolent spirit of winter that possesses humans and drives them to cannibalism...',
    riskLevel: 'Extreme'
  },
  {
    id: 'black-eyed-children',
    title: 'Black Eyed Children',
    origin: 'Modern America',
    type: 'Urban Legend',
    excerpt: 'Mysterious children with solid black eyes who appear at night asking to be let in...',
    riskLevel: 'High'
  },
  {
    id: 'banshee',
    title: 'The Banshee',
    origin: 'Irish Folklore',
    type: 'Ancient Legend',
    excerpt: 'A female spirit whose wail heralds the death of a family member...',
    riskLevel: 'Medium'
  }
];

const getRiskLevelColor = (level: string) => {
  switch (level.toLowerCase()) {
    case 'extreme':
      return 'bg-red-950/50 text-red-400 border-red-900/50';
    case 'high':
      return 'bg-orange-950/50 text-orange-400 border-orange-900/50';
    case 'medium':
      return 'bg-yellow-950/50 text-yellow-400 border-yellow-900/50';
    default:
      return 'bg-blue-950/50 text-blue-400 border-blue-900/50';
  }
};

export default function Legends() {
  return (
    <PageTransition>
      <main className="min-h-screen gothic-container py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="gothic-heading text-center mb-4">Legends & Myths</h1>
          <p className="text-center text-gothic-300 text-lg mb-12">
            Ancient tales and modern legends that haunt our collective nightmares
          </p>
        </motion.div>

        <div className="grid gap-8">
          {legends.map((legend, index) => (
            <motion.article
              key={legend.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gothic-900/50 p-6 rounded-lg border border-red-900/20 hover:border-red-900/40 transition-all group"
            >
              <Link href={`/legends/${legend.id}`} className="block">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-gothic text-red-500 group-hover:text-red-400 transition-colors mb-2">
                      {legend.title}
                    </h2>
                    <div className="flex items-center space-x-4 text-sm text-gothic-400">
                      <span>{legend.origin}</span>
                      <span>•</span>
                      <span>{legend.type}</span>
                    </div>
                  </div>
                  <span className={`text-sm px-3 py-1 rounded-full border ${getRiskLevelColor(legend.riskLevel)}`}>
                    Risk Level: {legend.riskLevel}
                  </span>
                </div>
                <p className="text-gothic-300 mb-4">{legend.excerpt}</p>
                <div className="text-right">
                  <span className="text-red-500 group-hover:text-red-400 transition-colors text-sm">
                    Read Full Legend →
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center text-gothic-400 text-sm"
        >
          <p>
            Warning: Some legends may be based on real events.
            Exercise caution when exploring these tales.
          </p>
        </motion.div>
      </main>
    </PageTransition>
  );
}
