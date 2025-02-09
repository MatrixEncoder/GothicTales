'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import PageTransition from '@/components/PageTransition';

export default function About() {
  return (
    <PageTransition>
      <main className="min-h-screen gothic-container py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="gothic-heading text-center mb-4">About GothicTales</h1>
          <p className="text-center text-gothic-300 text-lg mb-12">
            A passion project crafted in the shadows of imagination
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-12">
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert prose-red max-w-none"
          >
            <h2 className="font-gothic text-2xl text-red-500 mb-4">Creator's Note</h2>
            <p className="text-gothic-300">
              GothicTales is the brainchild of Suryansh Srivastava, a solo developer with a passion for the 
              supernatural and dark storytelling. This website represents a unique blend of technical expertise 
              and creative storytelling, bringing horror tales to life in the digital realm.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="prose prose-invert prose-red max-w-none"
          >
            <h2 className="font-gothic text-2xl text-red-500 mb-4">Our Mission</h2>
            <p className="text-gothic-300">
              GothicTales is dedicated to documenting and preserving true accounts of supernatural encounters,
              historical horrors, and unexplained phenomena. We believe that these stories, while disturbing,
              form an important part of our collective human experience and deserve to be told.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="prose prose-invert prose-red max-w-none"
          >
            <h2 className="font-gothic text-2xl text-red-500 mb-4">Our Approach</h2>
            <p className="text-gothic-300">
              We take a respectful and factual approach to documenting these stories. While we aim to preserve
              the atmospheric and emotional impact of each tale, we prioritize accuracy and authenticity.
              Our content is thoroughly researched and verified where possible, with clear distinctions made
              between confirmed facts and speculative elements.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="prose prose-invert prose-red max-w-none"
          >
            <h2 className="font-gothic text-2xl text-red-500 mb-4">Content Warning</h2>
            <p className="text-gothic-300">
              The stories and accounts on this site often deal with disturbing themes and real-life tragedies.
              While we aim to present this content respectfully, some material may be unsettling. We advise
              discretion and recommend that sensitive readers proceed with caution.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="prose prose-invert prose-red max-w-none"
          >
            <h2 className="font-gothic text-2xl text-red-500 mb-4">Connect With Us</h2>
            <p className="text-gothic-300">
              Have a story to share or want to get in touch? You can reach out to us through our{' '}
              <Link href="/contact" className="text-red-500 hover:text-red-400 transition-colors">
                contact page
              </Link>
              . Follow our creator on{' '}
              <Link href="https://github.com/MatrixEncoder" target="_blank" className="text-red-500 hover:text-red-400 transition-colors">
                GitHub
              </Link>
              {' '}and{' '}
              <Link href="https://instagram.com/illusionist__666" target="_blank" className="text-red-500 hover:text-red-400 transition-colors">
                Instagram
              </Link>
              {' '}for updates and behind-the-scenes content.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-gothic-900/50 p-6 rounded-lg border border-red-900/20"
          >
            <h2 className="font-gothic text-xl text-red-500 mb-4">Disclaimer</h2>
            <p className="text-gothic-300 text-sm">
              The stories and information presented on this site are collected from various sources and
              personal accounts. While we strive for accuracy, we cannot guarantee the complete veracity
              of all details. This site is intended for educational and entertainment purposes only.
            </p>
          </motion.section>
        </div>
      </main>
    </PageTransition>
  );
}
