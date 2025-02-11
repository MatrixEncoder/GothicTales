import { Resend } from 'resend';
import { z } from 'zod';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

// Validate API key
const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
  console.error(' RESEND_API_KEY is not set in the environment variables');
  throw new Error('Missing Resend API Key. Please set RESEND_API_KEY in .env.local');
}

const resend = new Resend(apiKey);

// Form validation schemas
export const ContactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

export const StorySubmissionSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  author: z.string().min(2, 'Author name must be at least 2 characters'),
  content: z.string().min(50, 'Story must be at least 50 characters'),
  genre: z.string().optional()
});

export async function sendContactEmail(data: z.infer<typeof ContactSchema>) {
  try {
    // Validate input
    ContactSchema.parse(data);

    const result = await resend.emails.send({
      from: 'Gothic Tales <noreply@gothictales.com>',
      to: 'suryanshsri69.gdscmmmut@gmail.com',
      reply_to: data.email,
      subject: `New Contact Message from ${data.name}`,
      html: `
        <html>
          <body style="font-family: 'Nosifer', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #1a0b0b;">
            <div style="background-color: #2c0e0e; color: #fff; padding: 20px; text-align: center;">
              <h1 style="font-family: 'Creepster', cursive;">Gothic Tales - Dark Whispers</h1>
            </div>
            <div style="background-color: #1a0b0b; color: #c29797; padding: 20px;">
              <p><strong style="color: #ff4444;">Name:</strong> ${data.name}</p>
              <p><strong style="color: #ff4444;">Email:</strong> ${data.email}</p>
              <p><strong style="color: #ff4444;">Message:</strong></p>
              <p style="font-style: italic;">${data.message}</p>
            </div>
            <div style="background-color: #2c0e0e; color: #fff; padding: 10px; text-align: center; font-size: 12px;">
              2024 Gothic Tales. All rights reserved.
            </div>
          </body>
        </html>
      `,
      text: `
        Gothic Tales - Dark Whispers

        Name: ${data.name}
        Email: ${data.email}
        
        Message:
        ${data.message}
      `
    });

    console.log('Email sending result:', result);
    return { success: true, result };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, error };
  }
}

export async function sendStorySubmission(data: z.infer<typeof StorySubmissionSchema>) {
  try {
    // Validate input
    StorySubmissionSchema.parse(data);

    // Log API key status for debugging
    console.log('Resend API Key status:', apiKey ? 'Present' : 'MISSING');

    // Additional error handling for Resend
    if (!apiKey) {
      console.error('CRITICAL: Resend API Key is not set');
      return { 
        success: false, 
        error: 'Email service configuration error' 
      };
    }

    try {
      const result = await resend.emails.send({
        from: 'Gothic Tales <submissions@gothictales.com>',
        to: 'suryanshsri69.gdscmmmut@gmail.com',
        subject: `New Story Submission: ${data.title}`,
        html: `
          <h1>New Story Submission</h1>
          <p><strong>Title:</strong> ${data.title}</p>
          <p><strong>Author:</strong> ${data.author}</p>
          <p><strong>Genre:</strong> ${data.genre || 'Not specified'}</p>
          <p><strong>Content Preview:</strong></p>
          <p>${data.content.substring(0, 500)}...</p>
        `,
        text: `
          New Story Submission
          Title: ${data.title}
          Author: ${data.author}
          Genre: ${data.genre || 'Not specified'}
          
          Content Preview:
          ${data.content.substring(0, 500)}...
        `
      });

      console.log('Email sending result:', JSON.stringify(result, null, 2));
      return { success: true, result };
    } catch (sendError) {
      console.error('Detailed Resend email sending error:', sendError);
      return { 
        success: false, 
        error: `Email sending failed: ${sendError instanceof Error ? sendError.message : 'Unknown error'}` 
      };
    }
  } catch (error) {
    console.error('Story submission email preparation error:', error);
    return { 
      success: false, 
      error: `Submission preparation failed: ${error instanceof Error ? error.message : 'Unknown error'}` 
    };
  }
}
