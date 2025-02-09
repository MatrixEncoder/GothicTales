'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';

export default function Submit() {
  const [formState, setFormState] = useState({
    title: '',
    category: 'story',
    content: '',
    location: '',
    date: '',
    witness: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    alert('Thank you for your submission. Our editors will review it shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <PageTransition>
      <main className="min-h-screen gothic-container py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="gothic-heading text-center mb-4">Submit Your Tale</h1>
          <p className="text-center text-gothic-300 text-lg mb-12">
            Share your encounter with the supernatural
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-6"
        >
          <div className="space-y-2">
            <label htmlFor="title" className="block text-gothic-200">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formState.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gothic-900/50 border border-red-900/20 rounded-lg focus:border-red-900/40 focus:ring-1 focus:ring-red-900/40 text-gothic-100 placeholder-gothic-500"
              placeholder="Enter the title of your tale"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category" className="block text-gothic-200">Category</label>
            <select
              id="category"
              name="category"
              value={formState.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gothic-900/50 border border-red-900/20 rounded-lg focus:border-red-900/40 focus:ring-1 focus:ring-red-900/40 text-gothic-100"
            >
              <option value="story">Ghost Story</option>
              <option value="urban-legend">Urban Legend</option>
              <option value="paranormal">Paranormal Experience</option>
              <option value="cryptid">Cryptid Sighting</option>
              <option value="ritual">Ritual Experience</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="content" className="block text-gothic-200">Your Tale</label>
            <textarea
              id="content"
              name="content"
              value={formState.content}
              onChange={handleChange}
              required
              rows={8}
              className="w-full px-4 py-2 bg-gothic-900/50 border border-red-900/20 rounded-lg focus:border-red-900/40 focus:ring-1 focus:ring-red-900/40 text-gothic-100 placeholder-gothic-500"
              placeholder="Tell us your story in detail..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="location" className="block text-gothic-200">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formState.location}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gothic-900/50 border border-red-900/20 rounded-lg focus:border-red-900/40 focus:ring-1 focus:ring-red-900/40 text-gothic-100 placeholder-gothic-500"
                placeholder="Where did this occur?"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="date" className="block text-gothic-200">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formState.date}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gothic-900/50 border border-red-900/20 rounded-lg focus:border-red-900/40 focus:ring-1 focus:ring-red-900/40 text-gothic-100"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="witness" className="block text-gothic-200">Witness Name</label>
            <input
              type="text"
              id="witness"
              name="witness"
              value={formState.witness}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gothic-900/50 border border-red-900/20 rounded-lg focus:border-red-900/40 focus:ring-1 focus:ring-red-900/40 text-gothic-100 placeholder-gothic-500"
              placeholder="Your name or 'Anonymous'"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-gothic-200">Email (Optional)</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gothic-900/50 border border-red-900/20 rounded-lg focus:border-red-900/40 focus:ring-1 focus:ring-red-900/40 text-gothic-100 placeholder-gothic-500"
              placeholder="For follow-up questions (will not be published)"
            />
          </div>

          <div className="text-center pt-6">
            <button
              type="submit"
              className="px-8 py-3 bg-red-900/20 hover:bg-red-900/30 text-red-500 border border-red-900/40 rounded-lg transition-colors"
            >
              Submit Your Tale
            </button>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center text-gothic-400 text-sm"
        >
          <p>
            By submitting, you agree that your tale may be edited for clarity and confirm that it is based on true events.
          </p>
        </motion.div>
      </main>
    </PageTransition>
  );
}
