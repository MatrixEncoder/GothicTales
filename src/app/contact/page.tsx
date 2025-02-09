'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import PageTransition from '@/components/PageTransition';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    storyTitle: '',
    storyType: 'ghost',
    storyLocation: '',
    storyDate: '',
    isSubmittingStory: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For story submissions, send to your email with a specific subject
    const subject = formState.isSubmittingStory 
      ? `New Story Submission: ${formState.storyTitle}`
      : formState.subject;
    
    const body = formState.isSubmittingStory
      ? `Story Title: ${formState.storyTitle}\n` +
        `Type: ${formState.storyType}\n` +
        `Location: ${formState.storyLocation}\n` +
        `Date: ${formState.storyDate}\n\n` +
        `Story:\n${formState.message}\n\n` +
        `Submitted by: ${formState.name} (${formState.email})`
      : formState.message;

    window.location.href = `mailto:dhawalsri77@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <PageTransition>
      <main className="min-h-screen gothic-container py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="gothic-heading text-center mb-4">Contact Us</h1>
          <p className="text-center text-gothic-300 text-lg mb-12">
            Share your story or get in touch
          </p>

          <div className="flex justify-center gap-8 mb-12">
            <Link
              href="mailto:dhawalsri77@gmail.com"
              className="text-gothic-300 hover:text-red-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
            <Link
              href="https://github.com/MatrixEncoder"
              className="text-gothic-300 hover:text-red-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </Link>
            <Link
              href="https://instagram.com/illusionist__666"
              className="text-gothic-300 hover:text-red-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="flex justify-end mb-6">
              <button
                type="button"
                onClick={() => setFormState(prev => ({ ...prev, isSubmittingStory: !prev.isSubmittingStory }))}
                className="text-sm text-gothic-400 hover:text-red-400 transition-colors"
              >
                {formState.isSubmittingStory ? 'Switch to Contact Form' : 'Submit a Story Instead'}
              </button>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formState.name}
                onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                className="w-full bg-gothic-900/50 border border-red-900/20 rounded-lg p-4 text-gothic-300 placeholder-gothic-600"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formState.email}
                onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                className="w-full bg-gothic-900/50 border border-red-900/20 rounded-lg p-4 text-gothic-300 placeholder-gothic-600"
                required
              />

              {formState.isSubmittingStory ? (
                <>
                  <input
                    type="text"
                    placeholder="Story Title"
                    value={formState.storyTitle}
                    onChange={(e) => setFormState(prev => ({ ...prev, storyTitle: e.target.value }))}
                    className="w-full bg-gothic-900/50 border border-red-900/20 rounded-lg p-4 text-gothic-300 placeholder-gothic-600"
                    required
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <select
                      value={formState.storyType}
                      onChange={(e) => setFormState(prev => ({ ...prev, storyType: e.target.value }))}
                      className="w-full bg-gothic-900/50 border border-red-900/20 rounded-lg p-4 text-gothic-300"
                      required
                    >
                      <option value="ghost">Ghost Story</option>
                      <option value="urban-legend">Urban Legend</option>
                      <option value="paranormal">Paranormal Experience</option>
                      <option value="cryptid">Cryptid Sighting</option>
                      <option value="other">Other</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Location"
                      value={formState.storyLocation}
                      onChange={(e) => setFormState(prev => ({ ...prev, storyLocation: e.target.value }))}
                      className="w-full bg-gothic-900/50 border border-red-900/20 rounded-lg p-4 text-gothic-300 placeholder-gothic-600"
                      required
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="When did this happen? (e.g., Summer 2019)"
                    value={formState.storyDate}
                    onChange={(e) => setFormState(prev => ({ ...prev, storyDate: e.target.value }))}
                    className="w-full bg-gothic-900/50 border border-red-900/20 rounded-lg p-4 text-gothic-300 placeholder-gothic-600"
                    required
                  />
                </>
              ) : (
                <input
                  type="text"
                  placeholder="Subject"
                  value={formState.subject}
                  onChange={(e) => setFormState(prev => ({ ...prev, subject: e.target.value }))}
                  className="w-full bg-gothic-900/50 border border-red-900/20 rounded-lg p-4 text-gothic-300 placeholder-gothic-600"
                  required
                />
              )}

              <textarea
                placeholder={formState.isSubmittingStory ? "Tell us your story in detail..." : "Your message..."}
                value={formState.message}
                onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                rows={6}
                className="w-full bg-gothic-900/50 border border-red-900/20 rounded-lg p-4 text-gothic-300 placeholder-gothic-600"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-900/20 rounded-lg p-4 transition-colors"
            >
              {formState.isSubmittingStory ? 'Submit Story' : 'Send Message'}
            </motion.button>
          </form>

          {formState.isSubmittingStory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-12 max-w-2xl mx-auto text-center"
            >
              <div className="bg-gothic-900/50 p-6 rounded-lg border border-red-900/20">
                <h2 className="text-xl font-gothic text-red-500 mb-3">Submission Guidelines</h2>
                <ul className="text-gothic-400 text-sm space-y-2">
                  <li>• Your story should be a true, personal experience</li>
                  <li>• Include as many specific details as possible (dates, locations, witnesses)</li>
                  <li>• We may edit submissions for clarity and formatting</li>
                  <li>• By submitting, you grant us permission to share your story on the website</li>
                  <li>• We respect privacy - your email will never be shared publicly</li>
                </ul>
              </div>
            </motion.div>
          )}
        </motion.div>
      </main>
    </PageTransition>
  );
}
