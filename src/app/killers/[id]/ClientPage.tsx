"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import HistoricalImage from '@/components/HistoricalImage';
import { KillerProfile } from './page';

export default function ClientPage({ killer }: { killer: KillerProfile }) {
  const router = useRouter();

  useEffect(() => {
    if (!killer) {
      router.push('/killers');
    }
  }, [killer, router]);

  if (!killer) {
    return null;
  }

  return (
    <PageTransition>
      <main className="min-h-screen gothic-container py-24">
        <article className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="gothic-heading text-center mb-4">{killer.name}</h1>
            <div className="flex flex-wrap justify-center items-center gap-4 text-gothic-400 mb-8">
              <span>{killer.period}</span>
              <span>•</span>
              <span>{killer.location}</span>
              <span>•</span>
              <span>Victims: {killer.victims}</span>
              <span>•</span>
              <span className="px-3 py-1 rounded-full bg-red-950/30 text-red-400 border border-red-900/30">
                {killer.status}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert prose-red max-w-none"
          >
            {killer.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gothic-300 mb-4">
                {paragraph.trim()}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-gothic text-red-500 mb-6">Historical Images</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {killer.images.map((image, index) => (
                <HistoricalImage key={index} {...image} />
              ))}
            </div>
          </motion.div>

          {killer.theories && killer.theories.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12 pt-8 border-t border-red-900/20"
            >
              <h2 className="text-2xl font-gothic text-red-500 mb-4">Major Theories</h2>
              <ul className="grid md:grid-cols-2 gap-4">
                {killer.theories.map((theory, index) => (
                  <li
                    key={index}
                    className="bg-gothic-900/50 p-4 rounded-lg border border-red-900/20"
                  >
                    <span className="text-gothic-300">{theory}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </article>
      </main>
    </PageTransition>
  );
}
