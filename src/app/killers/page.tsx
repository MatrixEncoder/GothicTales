'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import PageTransition from '@/components/PageTransition';

const killers = [
  {
    id: 'jack-the-ripper',
    name: 'Jack the Ripper',
    period: '1888',
    location: 'London, England',
    victims: '5 confirmed',
    excerpt: 'The infamous killer who terrorized London\'s Whitechapel district in 1888. Known for his surgical precision and taunting letters to the police, Jack the Ripper\'s true identity remains one of history\'s greatest mysteries.',
    status: 'Never Identified'
  },
  {
    id: 'zodiac',
    name: 'The Zodiac Killer',
    period: '1968-1969',
    location: 'California, USA',
    victims: '5 confirmed, 37 claimed',
    excerpt: 'A cryptic killer who combined murder with psychological warfare, sending encoded messages to newspapers. His complex ciphers stumped authorities for decades, with some remaining unsolved to this day.',
    status: 'Never Identified'
  },
  {
    id: 'ted-bundy',
    name: 'Ted Bundy',
    period: '1974-1978',
    location: 'Multiple US States',
    victims: '30+ confirmed',
    excerpt: 'Charming, educated, and deadly, Ted Bundy shattered the stereotype of the antisocial killer. His ability to blend into society while committing heinous crimes made him one of America\'s most notorious serial killers.',
    status: 'Executed 1989'
  },
  {
    id: 'btk',
    name: 'BTK Killer',
    period: '1974-1991',
    location: 'Kansas, USA',
    victims: '10 confirmed',
    excerpt: 'Dennis Rader, the BTK Killer (Bind, Torture, Kill), led a double life as a family man and church leader while terrorizing Wichita for decades. His need for attention ultimately led to his capture.',
    status: 'Imprisoned'
  }
];

export default function Killers() {
  return (
    <PageTransition>
      <main className="min-h-screen gothic-container py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="gothic-heading text-center mb-4">Serial Killer Archive</h1>
          <p className="text-center text-gothic-300 text-lg mb-6">
            A historical record of humanity's darkest figures
          </p>
          <p className="text-center text-gothic-400 text-sm mb-12 max-w-2xl mx-auto">
            This archive documents some of history's most notorious killers, examining their psychology,
            methods, and impact on society. Our aim is to educate and inform while maintaining respect
            for the victims and their families.
          </p>
        </motion.div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {killers.map((killer, index) => (
            <motion.article
              key={killer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gothic-900/50 p-6 rounded-lg border border-red-900/20 hover:border-red-900/40 transition-all group"
            >
              <Link href={`/killers/${killer.id}`} className="block">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                  <div>
                    <h2 className="text-2xl font-gothic text-red-500 group-hover:text-red-400 transition-colors mb-2">
                      {killer.name}
                    </h2>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gothic-400">
                      <span>{killer.period}</span>
                      <span className="hidden md:inline">•</span>
                      <span>{killer.location}</span>
                      <span className="hidden md:inline">•</span>
                      <span>Victims: {killer.victims}</span>
                    </div>
                  </div>
                  <span className="text-sm px-3 py-1 rounded-full bg-red-950/30 text-red-400 border border-red-900/30 whitespace-nowrap">
                    {killer.status}
                  </span>
                </div>
                <p className="text-gothic-300 mb-4 line-clamp-3">{killer.excerpt}</p>
                <div className="flex items-center justify-end">
                  <span className="text-red-500 group-hover:text-red-400 transition-colors inline-flex items-center gap-2">
                    Read Full Profile
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 max-w-2xl mx-auto text-center"
        >
          <div className="bg-gothic-900/50 p-6 rounded-lg border border-red-900/20">
            <h2 className="text-xl font-gothic text-red-500 mb-3">Content Warning</h2>
            <p className="text-gothic-400 text-sm">
              This archive contains detailed accounts of real crimes and may be disturbing to some readers.
              Our intention is to provide historical documentation and understanding, not to glorify or
              sensationalize these events. Please proceed with discretion.
            </p>
          </div>
        </motion.div>
      </main>
    </PageTransition>
  );
}
