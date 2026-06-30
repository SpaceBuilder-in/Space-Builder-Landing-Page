"use server";

import { Resend } from "resend";
import { contactFormSchema } from "./validation";
import { getEmailTemplate } from "./email";
import { db } from "@/db/db";
import { contacts } from "@/db/schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailAction(data: {
  name: string;
  email: string;
  mobile: string;
  socialLink?: string;
  message: string;
}) {
  // Validate everything using zod
  const validatedFields = contactFormSchema.safeParse(data);

  if (!validatedFields.success) {
    const errorMessages = validatedFields.error.issues.map((e) => e.message).join(", ");
    return {
      success: false,
      error: `Validation failed: ${errorMessages}`,
    };
  }

  const { name, email, mobile, socialLink, message } = validatedFields.data;

  // 1. Store details of user in DB using try/catch
  try {
    await db.insert(contacts).values({
      name,
      email,
      mobile,
      socialLink,
      message,
    });
  } catch (dbErr: any) {
    console.error("DB Operation error:", dbErr);
    return {
      success: false,
      error: dbErr?.message || "Failed to store user details in database.",
    };
  }

  // 2. Send email to contact@spacebuilder.in (SpaceBuilder support) using try/catch
  try {
    const from = process.env.RESEND_FROM || "SpaceBuilder <no-reply@luqe.in>";
    const to = process.env.RESEND_TO || "contact@spacebuilder.in";

    const html = getEmailTemplate({
      userName: name,
      userEmail: email,
      userNumber: mobile,
      socialLink,
      userQuery: message,
    });

    const response = await resend.emails.send({
      from,
      to,
      subject: `New Contact Submission from ${name}`,
      html,
      replyTo: email,
    });

    if (response.error) {
      console.error("Resend API error:", response.error);
      return {
        success: false,
        error: response.error.message || "Failed to send email to SpaceBuilder support.",
      };
    }
  } catch (mailErr: any) {
    console.error("Admin Email send error:", mailErr);
    return {
      success: false,
      error: mailErr?.message || "An unexpected error occurred while sending email.",
    };
  }

  // 3. Send confirmation email to the user using try/catch
  try {
    const from = process.env.RESEND_FROM || "SpaceBuilder <no-reply@luqe.in>";
    const userHtml = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Thank You for Reaching Out - SpaceBuilder</title>
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        background-color: #000000;
        color: #ffffff;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
      }
      .wrapper {
        width: 100%;
        background-color: #000000;
        padding: 40px 20px;
        box-sizing: border-box;
      }
      .container {
        max-width: 580px;
        margin: 0 auto;
        background-color: #0a0a0a;
        border: 1px solid #222222;
        border-radius: 16px;
        padding: 40px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      }
      .header {
        text-align: center;
        margin-bottom: 30px;
      }
      .logo {
        border-radius: 50%;
        background-color: #e4c585;
        padding: 2px;
        width: 64px;
        height: 64px;
        display: inline-block;
      }
      .brand-name {
        font-size: 24px;
        font-weight: 700;
        color: #e4c585;
        margin-top: 15px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
      }
      .brand-name span {
        color: #ffffff;
      }
      h1 {
        font-size: 22px;
        font-weight: 600;
        color: #ffffff;
        margin-top: 0;
        margin-bottom: 20px;
        line-height: 1.3;
      }
      p {
        font-size: 15px;
        line-height: 1.6;
        color: #cccccc;
        margin: 0 0 16px;
      }
      .divider {
        height: 1px;
        background-color: #222222;
        margin: 30px 0;
      }
      .footer {
        text-align: center;
        font-size: 12px;
        color: #666666;
        line-height: 1.5;
      }
      .footer a {
        color: #e4c585;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <div class="container">
        <div class="header">
          <img src="https://spacebuilder.in/brand.png" alt="SpaceBuilder Logo" class="logo">
          <div class="brand-name">Space<span>Builder</span></div>
        </div>
        <h1>Hello ${name},</h1>
        <p>Thank you for reaching out to SpaceBuilder. We have received your inquiry and our team will get back to you shortly.</p>
        <p>We are excited about the opportunity to partner with you and build scalable, high-performance systems for your business.</p>
        <div class="divider"></div>
        <p style="font-size: 14px; font-style: italic; color: #888888; text-align: center;">
          "We find what slows your business down - then design the automations, software, and AI-powered workflows that fix it for good."
        </p>
        <div class="divider"></div>
        <div class="footer">
          <p>&copy; ${new Date().getFullYear()} SpaceBuilder. All rights reserved.</p>
          <p>Support: <a href="mailto:help@spacebuilder.in">help@spacebuilder.in</a> | General: <a href="mailto:contact@spacebuilder.in">contact@spacebuilder.in</a></p>
        </div>
      </div>
    </div>
  </body>
</html>
    `;

    await resend.emails.send({
      from,
      to: email,
      subject: `Thank you for contacting SpaceBuilder`,
      html: userHtml,
    });
  } catch (userMailErr) {
    console.error("Failed to send automatic receipt email to user:", userMailErr);
  }

  return {
    success: true,
  };
}
