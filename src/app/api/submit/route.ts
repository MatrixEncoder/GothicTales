import { NextRequest, NextResponse } from 'next/server';
import { StorySubmissionSchema, sendStorySubmission } from '@/lib/email';

// Fallback error handler
function createErrorResponse(message: string, status: number = 500) {
  console.error(`ERROR: ${message}`);
  return new Response(JSON.stringify({ 
    success: false, 
    error: message 
  }), {
    status,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export async function POST(request: NextRequest) {
  // Ultra-verbose logging
  console.log('===== STORY SUBMISSION STARTED =====');
  console.log('Full Request Headers:', Object.fromEntries(request.headers));

  try {
    // Explicitly check and log content type
    const contentType = request.headers.get('content-type');
    console.log('Content-Type:', contentType);

    // Fallback if content type is missing
    if (!contentType || !contentType.includes('application/json')) {
      return createErrorResponse('Invalid content type. Must be application/json', 400);
    }

    // Defensive JSON parsing
    let body;
    try {
      body = await request.json();
      console.log('Parsed Request Body:', JSON.stringify(body, null, 2));
    } catch (parseError) {
      console.error('JSON Parsing Error:', parseError);
      
      // Attempt to read raw body for debugging
      try {
        const rawBody = await request.text();
        console.error('Raw Request Body:', rawBody);
      } catch (rawError) {
        console.error('Could not read raw body:', rawError);
      }

      return createErrorResponse('Invalid JSON in request body', 400);
    }

    // Validate submission data
    const validationResult = StorySubmissionSchema.safeParse(body);

    if (!validationResult.success) {
      console.error('Validation Errors:', validationResult.error.errors);
      return createErrorResponse(
        validationResult.error.errors[0].message || 'Validation failed', 
        400
      );
    }

    // Attempt email submission with extensive error handling
    try {
      const emailResult = await sendStorySubmission(validationResult.data);

      if (emailResult.success) {
        console.log('===== STORY SUBMISSION SUCCESSFUL =====');
        return NextResponse.json({ 
          success: true,
          message: 'Story submitted successfully'
        });
      } else {
        console.error('Email Submission Failed:', emailResult.error);
        return createErrorResponse(
          emailResult.error || 'Failed to submit story', 
          500
        );
      }
    } catch (emailError) {
      console.error('Email Submission Catastrophic Error:', emailError);
      return createErrorResponse('Catastrophic email submission failure', 500);
    }

  } catch (globalError) {
    console.error('GLOBAL SUBMISSION ERROR:', globalError);
    return createErrorResponse('Unhandled submission error', 500);
  }
}
