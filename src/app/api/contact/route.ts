import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Initialize Resend with API key from environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Sanitize input to prevent injection
function sanitizeInput(input: string): string {
  return input.trim().slice(0, 5000);
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      subject: sanitizeInput(subject),
      message: sanitizeInput(message),
      timestamp: new Date().toISOString(),
    };

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "fandiyi2333@gmail.com",
      replyTo: sanitizedData.email,
      subject: `[Portfolio Contact] ${sanitizedData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #06b6d4;">New Contact Form Submission</h2>
          <hr style="border: 1px solid #e2e8f0;" />
          <p><strong>From:</strong> ${sanitizedData.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a></p>
          <p><strong>Subject:</strong> ${sanitizedData.subject}</p>
          <hr style="border: 1px solid #e2e8f0;" />
          <h3>Message:</h3>
          <p style="white-space: pre-wrap; background: #f8fafc; padding: 16px; border-radius: 8px;">${sanitizedData.message}</p>
          <hr style="border: 1px solid #e2e8f0;" />
          <p style="color: #64748b; font-size: 12px;">
            Sent from your portfolio contact form at ${sanitizedData.timestamp}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data);

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully! I'll get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process your message. Please try again later." },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed. Please use POST." },
    { status: 405 }
  );
}
