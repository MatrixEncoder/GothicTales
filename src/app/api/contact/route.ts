import { NextRequest, NextResponse } from 'next/server';
import { ContactSchema, sendContactEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validatedData = ContactSchema.parse(body);

    // Send email
    const emailResult = await sendContactEmail(validatedData);

    if (emailResult.success) {
      return NextResponse.json({ 
        success: true, 
        message: 'Message sent successfully' 
      }, { status: 200 });
    } else {
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to send email' 
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Contact form submission error:', error);

    if (error instanceof Error) {
      return NextResponse.json({ 
        success: false, 
        error: error.message 
      }, { status: 400 });
    }

    return NextResponse.json({ 
      success: false, 
      error: 'An unexpected error occurred' 
    }, { status: 500 });
  }
}
