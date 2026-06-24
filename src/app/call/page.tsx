"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { contactFormSchema, type ContactFormData } from "./validation";
import { sendEmailAction } from "./action";

export default function CallPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field error on typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrors({});

    // Validate client side using Zod
    const result = contactFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.issues.forEach((err) => {
        const path = err.path[0] as keyof ContactFormData;
        if (path) {
          fieldErrors[path] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await sendEmailAction(result.data);
      if (res.success) {
        console.log("Email sent successfully via Resend:", res.data);
        setSubmitStatus({
          success: true,
          message: "Your query has been sent successfully. We will get in touch with you shortly!",
        });
        setFormData({
          name: "",
          email: "",
          mobile: "",
          message: "",
        });
      } else {
        console.error("Email sending failed:", res.error);
        setSubmitStatus({
          success: false,
          message: res.error || "Failed to send email. Please check your network and try again.",
        });
      }
    } catch (err) {
      console.error("Client form submit error:", err);
      setSubmitStatus({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen relative flex flex-col bg-bg text-fg overflow-hidden">
      <Navbar />

      <main className="w-full flex-1 flex flex-col relative pt-36 pb-20 px-6">
        {/* dotted grid */}
        <div
          aria-hidden
          className="bg-dotgrid pointer-events-none absolute inset-0 opacity-40"
          style={{ maskImage: "radial-gradient(ellipse 70% 50% at 50% 40%, black, transparent)" }}
        />

        {/* gold glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-24 h-[450px] w-[750px] max-w-[95%] -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(228,197,133,0.07), transparent 70%)",
            filter: "blur(18px)",
          }}
        />

        <div className="relative mx-auto w-full max-w-[1300px] flex-1 flex flex-col justify-center">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center mb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-gold-2 hover:text-gold-1 transition-colors mb-4 group"
            >
              <ArrowLeft size={12} className="group-hover:-translate-x-0.5 transition-transform" />
              Back to Home
            </Link>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-fg md:text-5xl leading-[1.1]">
              Let's Build Something{" "}
              <span className="font-serif italic font-normal text-gold-2">Exceptional</span>
            </h1>
            <p className="mt-4 text-base text-fg-muted max-w-lg mx-auto">
              Submit your contact details and message below. We will analyze your query and reach
              out to outline a customized automation strategy.
            </p>
          </div>

          {/* Form Card */}
          <div className="mx-auto w-full max-w-xl">
            <div
              className="relative overflow-hidden rounded-[2rem] border border-line-strong bg-bg-soft/75 backdrop-blur-md p-8 md:p-10 shadow-xl"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              {submitStatus?.success ? (
                <div className="text-center py-8 animate-fade-up">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-2/10 border border-gold-2/30 text-gold-2 mb-6">
                    <Check size={28} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-fg">Query Submitted!</h3>
                  <p className="mt-4 text-sm text-fg-muted leading-relaxed">
                    {submitStatus.message}
                  </p>
                  <div className="mt-8 flex items-center justify-center gap-4">
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-2.5 text-sm font-medium text-fg hover:bg-surface transition-all"
                    >
                      Return Home
                    </Link>
                    <button
                      onClick={() => setSubmitStatus(null)}
                      className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-bg hover:brightness-110 transition-all font-display"
                      style={{
                        background: "linear-gradient(135deg, var(--gold-1), var(--gold-3))",
                      }}
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up">
                  {submitStatus && !submitStatus.success && (
                    <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5 text-red-400 text-sm">
                      {submitStatus.message}
                    </div>
                  )}

                  {/* Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-xs uppercase tracking-[0.14em] text-fg-muted font-medium"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full rounded-xl border ${errors.name ? "border-red-500/40 focus:border-red-500" : "border-line focus:border-gold-2"} bg-surface/40 hover:bg-surface/65 px-4 py-3 text-sm text-fg placeholder:text-fg-dim outline-none transition-all`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1 font-medium">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-xs uppercase tracking-[0.14em] text-fg-muted font-medium"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full rounded-xl border ${errors.email ? "border-red-500/40 focus:border-red-500" : "border-line focus:border-gold-2"} bg-surface/40 hover:bg-surface/65 px-4 py-3 text-sm text-fg placeholder:text-fg-dim outline-none transition-all`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1 font-medium">{errors.email}</p>
                    )}
                  </div>

                  {/* Mobile Number */}
                  <div className="space-y-2">
                    <label
                      htmlFor="mobile"
                      className="block text-xs uppercase tracking-[0.14em] text-fg-muted font-medium"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      placeholder="+1 (555) 000-0000"
                      value={formData.mobile}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full rounded-xl border ${errors.mobile ? "border-red-500/40 focus:border-red-500" : "border-line focus:border-gold-2"} bg-surface/40 hover:bg-surface/65 px-4 py-3 text-sm text-fg placeholder:text-fg-dim outline-none transition-all`}
                    />
                    {errors.mobile && (
                      <p className="text-xs text-red-400 mt-1 font-medium">{errors.mobile}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-xs uppercase tracking-[0.14em] text-fg-muted font-medium"
                    >
                      Message / Query
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your project or what processes you'd like to automate..."
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full rounded-xl border ${errors.message ? "border-red-500/40 focus:border-red-500" : "border-line focus:border-gold-2"} bg-surface/40 hover:bg-surface/65 px-4 py-3 text-sm text-fg placeholder:text-fg-dim outline-none transition-all resize-none`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1 font-medium">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold text-bg transition-all hover:brightness-110 disabled:opacity-50 disabled:hover:brightness-100 font-display cursor-pointer"
                    style={{ background: "linear-gradient(135deg, var(--gold-1), var(--gold-3))" }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending Inquiry...
                      </>
                    ) : (
                      <>
                        Submit Inquiry
                        <ArrowRight size={16} strokeWidth={2} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
