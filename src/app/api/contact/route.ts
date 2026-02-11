import { Resend } from "resend";
import { NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  orgName: string;
  orgWebsite?: string;
  phone?: string;
  email: string;
  companySize: string;
  location: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    const { name, orgName, orgWebsite, phone, email, companySize, location, message } = body;

    if (!name || !orgName || !email || !companySize || !location || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service not configured. Please set RESEND_API_KEY environment variable." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const htmlContent = `
      <h2>New Business Inquiry from Rekindle</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Name</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Organisation</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${orgName}</td>
        </tr>
        ${orgWebsite ? `<tr>
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Website</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${orgWebsite}</td>
        </tr>` : ""}
        ${phone ? `<tr>
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${phone}</td>
        </tr>` : ""}
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Email</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Company Size</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${companySize}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Location</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${location}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Message</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${message}</td>
        </tr>
      </table>
    `;

    const { error } = await resend.emails.send({
      from: "Rekindle <noreply@contact.amindify.com>",
      to: ["poviawe@gmail.com", "chitranshi.shubham@gmail.com"],
      subject: `New Business Inquiry from ${orgName}`,
      html: htmlContent,
      replyTo: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
