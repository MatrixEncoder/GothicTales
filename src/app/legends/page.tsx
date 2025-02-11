'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import PageTransition from '@/components/PageTransition';

export interface Legend {
  id: string;
  title: string;
  origin: string;
  type: string;
  excerpt: string;
  riskLevel: string;
}

const legends: Legend[] = [
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

function getRiskLevelColor(level: string) {
  switch (level.toLowerCase()) {
    case 'extreme':
      return 'bg-red-950/50 text-red-400 border-red-900/50';
    case 'high':
      return 'bg-red-900/50 text-red-300 border-red-800/50';
    case 'medium':
      return 'bg-yellow-900/50 text-yellow-300 border-yellow-800/50';
    case 'unknown':
      return 'bg-gray-900/50 text-gray-300 border-gray-800/50';
    default:
      return 'bg-gray-900/50 text-gray-300 border-gray-800/50';
  }
}

export default function Page() {
  return (
    <PageTransition>
      <main className="min-h-screen gothic-container py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="gothic-heading text-center mb-12">Legends & Myths</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {legends.map((legend) => (
              <Link 
                key={legend.id} 
                href={`/legends/${legend.id}`}
                className="block transform transition-all duration-300 hover:scale-105"
              >
                <div className="bg-gothic-900/50 rounded-lg p-6 border border-red-900/20 hover:border-red-500/50">
                  <h2 className="text-2xl font-gothic text-red-500 mb-2">{legend.title}</h2>
                  <p className="text-gothic-400 mb-4">{legend.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gothic-500">{legend.origin}</span>
                    <span 
                      className={`px-3 py-1 rounded-full text-xs ${getRiskLevelColor(legend.riskLevel)}`}
                    >
                      {legend.riskLevel}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
