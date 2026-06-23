import { z } from "zod";

export const contactFormSchema = z.object({
    name: z.string().trim().min(2, "Name must be at least 2 characters").max(60, "Name must be under 60 characters"),
    email: z.string().trim().email("Invalid email address"),
    mobile: z.string().trim().min(10, "Mobile number must be at least 10 digits").max(15, "Mobile number must be under 15 digits"),
    message: z.string().trim().min(5, "Message must be at least 5 characters").max(1000, "Message must be under 1000 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
