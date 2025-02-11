'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
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
      <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full space-y-8 bg-black/50 p-8 rounded-xl">
          <div className="text-center">
            <h1 
              className="
                text-5xl 
                font-['Nosifer'] 
                text-red-900 
                tracking-wide 
                uppercase 
                break-words 
                creepy-text
                glitch-text
              "
              data-text="Whispers from the Void"
            >
              Whispers from the Void
            </h1>
            <p 
              className="
                mt-4 
                text-gray-400 
                text-xl 
                tracking-wider 
                creepy-text
                font-['Creepster']
              "
            >
              Speak, and the darkness listens...
            </p>
          </div>
          <form 
            onSubmit={handleSubmit(onSubmit)} 
            className="space-y-6"
            noValidate
          >
            <div>
              <label 
                htmlFor="name" 
                className="
                  block 
                  text-gray-300 
                  mb-2 
                  creepy-text
                  font-['Nosifer']
                "
              >
                Name
              </label>
              <input
                {...register('name')}
                id="name"
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
                placeholder="Your Haunting Name"
              />
              {errors.name && (
                <p 
                  className="
                    text-red-700 
                    text-sm 
                    mt-1 
                    creepy-text
                    font-['Nosifer']
                  "
                >
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label 
                htmlFor="email" 
                className="
                  block 
                  text-gray-300 
                  mb-2 
                  creepy-text
                  font-['Nosifer']
                "
              >
                Email
              </label>
              <input
                {...register('email')}
                id="email"
                type="email"
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
                placeholder="Email of the Damned"
              />
              {errors.email && (
                <p 
                  className="
                    text-red-700 
                    text-sm 
                    mt-1 
                    creepy-text
                    font-['Nosifer']
                  "
                >
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label 
                htmlFor="message" 
                className="
                  block 
                  text-gray-300 
                  mb-2 
                  creepy-text
                  font-['Nosifer']
                "
              >
                Message
              </label>
              <textarea
                {...register('message')}
                id="message"
                rows={4}
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
                placeholder="Scribe Your Dark Secrets..."
              ></textarea>
              {errors.message && (
                <p 
                  className="
                    text-red-700 
                    text-sm 
                    mt-1 
                    creepy-text
                    font-['Nosifer']
                  "
                >
                  {errors.message.message}
                </p>
              )}
            </div>

            {submissionStatus && (
              <div 
                className="
                  p-4 
                  rounded 
                  bg-black/40
                  text-gray-300
                  creepy-text
                  font-['Nosifer']
                "
              >
                {submissionStatus.message}
              </div>
            )}

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
              {isSubmitting ? 'Summoning...' : 'Invoke Darkness'}
            </button>
          </form>
        </div>
      </div>
    </PageTransition>
  );
}
