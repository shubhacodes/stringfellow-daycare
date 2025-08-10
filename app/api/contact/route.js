"use server";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Format the message
    const message = `
      New Enrollment Inquiry

      Parent Information:
      Name: ${data.parentName}
      Email: ${data.email}
      Phone: ${data.phone}

      Child Information:
      Name: ${data.childName}
      Age: ${data.childAge}

      Schedule Details:
      Desired Start Date: ${data.startDate}
      Schedule Preference: ${data.schedule}

      Additional Information:
      ${data.message}
    `;

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "mav2va@gmail.com", // The email address you want to receive inquiries at
      subject: `New Enrollment Inquiry from ${data.parentName} for ${data.childName}`,
      text: message,
      replyTo: data.email,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to the parent
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: "Thank You for Your Enrollment Inquiry - Stringfellow Daycare",
      text: `
        Dear ${data.parentName},

        Thank you for your interest in Stringfellow Daycare! We have received your enrollment inquiry for ${data.childName}.

        We will review your information and get back to you within 2-3 hours to discuss how we can best support your family's childcare needs.

        Here's a summary of the information you provided:
        - Child's Name: ${data.childName}
        - Child's Age: ${data.childAge}
        - Desired Start Date: ${data.startDate}
        - Schedule Preference: ${data.schedule}

        If you need immediate assistance, please don't hesitate to call us at +1 (703) 232-8585.

        Best regards,
        Stringfellow Daycare Team
      `,
    };

    await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
