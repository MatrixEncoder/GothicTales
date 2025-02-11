'use client';

import { useState } from 'react';
<<<<<<< HEAD
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Image from 'next/image';
import PageTransition from '@/components/PageTransition';

const StorySubmissionSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  author: z.string().min(2, 'Author name must be at least 2 characters'),
  content: z.string().min(50, 'Story must be at least 50 characters'),
  genre: z.string().optional()
});

export default function SubmitPage() {
  const [submissionStatus, setSubmissionStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<z.infer<typeof StorySubmissionSchema>>({
    resolver: zodResolver(StorySubmissionSchema)
  });

  const onSubmit = async (data: z.infer<typeof StorySubmissionSchema>) => {
    try {
      setSubmissionStatus(null);
      
      // Log submission data for debugging
      console.log('Submitting story:', JSON.stringify(data, null, 2));

      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers));

      // Handle non-200 responses
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response text:', errorText);
        
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorText}`
        );
      }

      // Attempt to parse JSON
      let result;
      try {
        result = await response.json();
        console.log('Parsed response:', result);
      } catch (parseError) {
        console.error('JSON parsing error:', parseError);
        throw new Error('Failed to parse server response');
      }

      // Check for success in response
      if (result.success) {
        setSubmissionStatus({
          success: true,
          message: result.message || 'Your dark tale has been recorded...'
        });
        reset();
      } else {
        throw new Error(result.error || 'Shadows consumed your story...');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionStatus({
        success: false,
        message: error instanceof Error 
          ? error.message 
          : 'The void rejected your narrative...'
      });
    }
=======
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
>>>>>>> b4da9516081393239a60beba36b2d532c61d4551
  };

  return (
    <PageTransition>
<<<<<<< HEAD
      <div className="relative min-h-screen flex items-center justify-center pt-24 pb-12">
        <Image 
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba" 
          alt="Gothic Tales Submit Background" 
          fill 
          priority
          quality={80}
          className="absolute inset-0 object-cover opacity-30 z-[-1]"
        />
        
        <div className="w-full max-w-md p-8 bg-black/60 rounded-xl relative z-10">
          <h1 
            className="
              text-5xl 
              font-['Nosifer'] 
              text-red-900 
              mb-8 
              text-center 
              creepy-text 
              glitch-text
            "
            data-text="Scribe Your Darkness"
          >
            Scribe Your Darkness
          </h1>
          
          <p 
            className="
              text-xl 
              text-gray-300 
              mb-12 
              text-center
            "
          >
            Unleash the shadows lurking within your imagination
          </p>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label 
                htmlFor="title" 
                className="
                  block 
                  text-gray-300 
                  mb-2 
                  font-['Nosifer']
                  creepy-text
                "
              >
                Story Title
              </label>
              <input
                {...register('title')}
                id="title"
                type="text"
                className="
                  w-full 
                  bg-black/30 
                  border 
                  border-red-900/20 
                  rounded 
                  p-3 
                  text-gray-300 
                  focus:border-red-900/50 
                  focus:outline-none 
                  font-['Creepster']
                  tracking-wider
                  placeholder-gray-600
                "
                placeholder="Whispers of the Damned"
              />
              {errors.title && (
                <p 
                  className="
                    text-red-700 
                    text-sm 
                    mt-1 
                    font-['Nosifer']
                    creepy-text
                  "
                >
                  {errors.title.message}
                </p>
              )}
            </div>

            <div>
              <label 
                htmlFor="author" 
                className="
                  block 
                  text-gray-300 
                  mb-2 
                  font-['Nosifer']
                  creepy-text
                "
              >
                Author Name
              </label>
              <input
                {...register('author')}
                id="author"
                type="text"
                className="
                  w-full 
                  bg-black/30 
                  border 
                  border-red-900/20 
                  rounded 
                  p-3 
                  text-gray-300 
                  focus:border-red-900/50 
                  focus:outline-none 
                  font-['Creepster']
                  tracking-wider
                  placeholder-gray-600
                "
                placeholder="Your Name"
              />
              {errors.author && (
                <p 
                  className="
                    text-red-700 
                    text-sm 
                    mt-1 
                    font-['Nosifer']
                    creepy-text
                  "
                >
                  {errors.author.message}
                </p>
              )}
            </div>

            <div>
              <label 
                htmlFor="genre" 
                className="
                  block 
                  text-gray-300 
                  mb-2 
                  font-['Nosifer']
                  creepy-text
                "
              >
                Story Genre (Optional)
              </label>
              <select 
                {...register('genre')}
                id="genre"
                className="
                  w-full 
                  bg-black/30 
                  border 
                  border-red-900/20 
                  rounded 
                  p-3 
                  text-gray-300 
                  focus:border-red-900/50 
                  focus:outline-none 
                  font-['Creepster']
                  tracking-wider
                  [&>option]:bg-black 
                  [&>option]:text-gray-300
                "
              >
                <option value="" className="text-gray-600">Select a genre</option>
                <option value="Ghost Story" className="text-gray-300">Ghost Story</option>
                <option value="Serial Killer" className="text-gray-300">Serial Killer</option>
                <option value="Psychological Thriller" className="text-gray-300">Psychological Thriller</option>
                <option value="Supernatural" className="text-gray-300">Supernatural</option>
              </select>
            </div>

            <div>
              <label 
                htmlFor="content" 
                className="
                  block 
                  text-gray-300 
                  mb-2 
                  font-['Nosifer']
                  creepy-text
                "
              >
                Your Story
              </label>
              <textarea
                {...register('content')}
                id="content"
                rows={8}
                className="
                  w-full 
                  bg-black/30 
                  border 
                  border-red-900/20 
                  rounded 
                  p-3 
                  text-gray-300 
                  focus:border-red-900/50 
                  focus:outline-none 
                  font-['Creepster']
                  tracking-wider
                  placeholder-gray-600
                "
                placeholder="Tell us your dark tale..."
              />
              {errors.content && (
                <p 
                  className="
                    text-red-700 
                    text-sm 
                    mt-1 
                    font-['Nosifer']
                    creepy-text
                  "
                >
                  {errors.content.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="
                w-full 
                bg-black/40 
                text-gray-300 
                py-3 
                rounded 
                hover:bg-black/60 
                transition-colors 
                disabled:opacity-50 
                disabled:cursor-not-allowed
                font-['Nosifer']
                text-lg
                tracking-wider
                border 
                border-red-900/20
                hover:border-red-900/50
                creepy-text
              "
            >
              {isSubmitting ? 'Summoning Tale...' : 'Invoke Story'}
            </button>
          </form>

          {submissionStatus && (
            <div 
              className="
                mt-6 
                p-4 
                rounded 
                bg-black/40
                text-gray-300
                font-['Nosifer']
                creepy-text
                text-center
              "
            >
              {submissionStatus.message}
            </div>
          )}
        </div>
      </div>
=======
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
>>>>>>> b4da9516081393239a60beba36b2d532c61d4551
    </PageTransition>
  );
}
