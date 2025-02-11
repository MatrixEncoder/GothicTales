'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { ContactSchema } from '@/lib/email';
import PageTransition from '@/components/PageTransition';

export default function ContactPage() {
  const [submissionStatus, setSubmissionStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema)
  });

  const onSubmit = async (data: z.infer<typeof ContactSchema>) => {
    try {
      setSubmissionStatus(null);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        setSubmissionStatus({
          success: true,
          message: 'Your dark whispers have been heard...'
        });
        reset();
      } else {
        throw new Error(result.error || 'Shadows swallowed your message...');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionStatus({
        success: false,
        message: error instanceof Error 
          ? error.message 
          : 'The void rejected your message...'
      });
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen gothic-container py-24 relative overflow-hidden">
        {/* Atmospheric overlay */}
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto"
        >
          <h1 
            className="title-container text-center mb-2 text-6xl font-gothic tracking-wider leading-relaxed absolute inset-0 z-20"
            style={{
              color: '#800000', 
              textShadow: `
                0 0 5px #B22222,
                0 0 10px #B22222
              `,
              WebkitTextStroke: '1px #500000',
              fontFamily: 'var(--font-vampiro)',
              opacity: 1,
              display: 'block',
              position: 'relative',
              transform: 'translateZ(0)',
              willChange: 'opacity, transform'
            }}
          >
            Contact the Darkness
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gothic-300 mb-2">
                Your Name
              </label>
              <input 
                {...register('name')}
                id="name"
                className="w-full bg-gothic-900/50 border border-red-900/20 text-gothic-300 rounded-lg p-3"
                placeholder="Whisper Your Name"
              />
              {errors.name && (
                <p className="text-red-500 mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-gothic-300 mb-2">
                Email Address
              </label>
              <input 
                {...register('email')}
                id="email"
                type="email"
                className="w-full bg-gothic-900/50 border border-red-900/20 text-gothic-300 rounded-lg p-3"
                placeholder="Your Portal of Communication"
              />
              {errors.email && (
                <p className="text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-gothic-300 mb-2">
                Your Dark Message
              </label>
              <textarea 
                {...register('message')}
                id="message"
                rows={6}
                className="w-full bg-gothic-900/50 border border-red-900/20 text-gothic-300 rounded-lg p-3"
                placeholder="Unleash the shadows within..."
              />
              {errors.message && (
                <p className="text-red-500 mt-1">{errors.message.message}</p>
              )}
            </div>

            {submissionStatus && (
              <div 
                className={`p-4 rounded-lg ${
                  submissionStatus.success 
                    ? 'bg-green-900/50 text-green-300' 
                    : 'bg-red-900/50 text-red-300'
                }`}
              >
                {submissionStatus.message}
              </div>
            )}

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-red-900/20 hover:bg-red-900/30 text-red-500 border border-red-900/40 rounded-lg py-3 transition-colors"
            >
              {isSubmitting ? 'Summoning Your Message...' : 'Send Dark Whispers'}
            </button>
          </form>
        </motion.div>
      </div>
    </PageTransition>
  );
}
