import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, category, message, consent } = body;

    // Validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter your full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 7) {
      return NextResponse.json(
        { error: "Please provide a valid contact phone number." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please write a detailed message (minimum 10 characters)." },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: "You must accept the privacy policy to submit an enquiry." },
        { status: 400 }
      );
    }

    // In production with Supabase configured:
    // await supabase.from('enquiries').insert([{ full_name: fullName, email, phone, category, message }])

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been successfully received by our concierge.",
      referenceId: `RL-${Date.now().toString(36).toUpperCase()}`,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your enquiry." },
      { status: 500 }
    );
  }
}
