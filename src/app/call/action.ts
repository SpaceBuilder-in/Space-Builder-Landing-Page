"use server";

import { Resend } from "resend";
import { contactFormSchema } from "./validation";
import { getEmailTemplate } from "./email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailAction(data: {
  name: string;
  email: string;
  mobile: string;
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

  const { name, email, mobile, message } = validatedFields.data;

  try {
    const from = process.env.RESEND_FROM || "SpaceBuilder <no-reply@luqe.in>";
    // Contact submission goes to support / admin inbox.
    const to = process.env.RESEND_TO || "contact@spacebuilder.in";

    const html = getEmailTemplate({
      userName: name,
      userEmail: email,
      userNumber: mobile,
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
        error: response.error.message || "Failed to send email via Resend.",
      };
    }

    return {
      success: true,
      data: response.data,
    };
  } catch (err: any) {
    console.error("Server Action error:", err);
    return {
      success: false,
      error: err?.message || "An unexpected server error occurred.",
    };
  }
}
