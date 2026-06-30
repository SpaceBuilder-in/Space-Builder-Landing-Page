"use client";

import { useState } from "react";
import { Mail, Copy, Check, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

function XIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export default function ContactContent() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
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
          background: "radial-gradient(ellipse at center, rgba(228,197,133,0.07), transparent 70%)",
          filter: "blur(9px)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1100px] flex-1 flex flex-col justify-center">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-12 md:mb-16">
          <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-gold-2">
            Let's Connect
          </span>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-fg md:text-5xl leading-[1.1]">
            Build the future{" "}
            <span className="font-serif italic font-normal text-gold-2">with us</span>.
          </h1>
          <p className="mt-5 text-base text-fg-muted max-w-lg mx-auto">
            Have a project in mind, want to partner, or just want to say hello? Reach out to us
            through our official channels.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {/* Row 1, Cols 1-2: General Inquiries */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-xl border border-line bg-bg-soft/50 p-6 md:p-8 transition-all duration-300 hover:border-line-strong hover:bg-surface/30 flex flex-col justify-between min-h-[220px]">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gold-2 font-medium text-sm">
                <Mail size={16} />
                <span>General Inquiries</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight font-display">
                contact@spacebuilder.in
              </h3>
              <p className="text-sm text-fg-muted font-light leading-relaxed max-w-xl">
                Get in touch for custom software, automations, consultations, and general questions.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-4">
              <button
                type="button"
                onClick={() => handleCopy("contact@spacebuilder.in")}
                className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors cursor-pointer bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg"
              >
                {copiedEmail === "contact@spacebuilder.in" ? (
                  <>
                    <Check size={13} className="text-green-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
              <a
                href="mailto:contact@spacebuilder.in"
                className="inline-flex items-center gap-1.5 text-xs text-gold-2 hover:text-gold-1 transition-colors bg-gold-2/5 hover:bg-gold-2/10 px-3 py-1.5 rounded-lg"
              >
                <span>Send Email</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>

          {/* Row 1, Col 3: LinkedIn */}
          <a
            href="https://www.linkedin.com/company/space-builder-org/"
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-1 group flex flex-col justify-between p-6 md:p-8 rounded-xl border border-line bg-bg-soft/50 hover:border-gold-2/45 hover:bg-surface/30 transition-all duration-300 relative overflow-hidden min-h-[220px]"
          >
            <div className="absolute top-6 right-6 text-white/20 group-hover:text-gold-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
              <ExternalLink size={14} />
            </div>
            <div className="space-y-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface text-fg-muted group-hover:text-[#e4c585] transition-colors border border-line">
                <LinkedInIcon />
              </div>
              <div>
                <div className="text-sm font-medium text-white group-hover:text-gold-2 transition-colors">
                  LinkedIn
                </div>
                <div className="text-xs text-white/40 mt-1 font-mono">SpaceBuilder Org</div>
              </div>
            </div>
          </a>

          {/* Row 2, Col 1: Technical Support */}
          <div className="md:col-span-1 group relative overflow-hidden rounded-xl border border-line bg-bg-soft/50 p-6 md:p-8 transition-all duration-300 hover:border-line-strong hover:bg-surface/30 flex flex-col justify-between min-h-[240px]">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gold-2 font-medium text-sm">
                <Mail size={16} />
                <span>Technical Support</span>
              </div>
              <h3 className="text-lg font-semibold text-white tracking-tight font-mono break-all pt-1">
                help@spacebuilder.in
              </h3>
              <p className="text-xs text-fg-muted font-light leading-relaxed">
                Support for ongoing projects, system integrations, and existing clients.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 border-t border-white/5 pt-4">
              <button
                type="button"
                onClick={() => handleCopy("help@spacebuilder.in")}
                className="inline-flex items-center gap-1 text-[11px] text-white/50 hover:text-white transition-colors cursor-pointer bg-white/5 hover:bg-white/10 px-2.5 py-1.5 rounded-lg"
              >
                {copiedEmail === "help@spacebuilder.in" ? (
                  <>
                    <Check size={11} className="text-green-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={11} />
                    <span>Copy</span>
                  </>
                )}
              </button>
              <a
                href="mailto:help@spacebuilder.in"
                className="inline-flex items-center gap-1 text-[11px] text-gold-2 hover:text-gold-1 transition-colors bg-gold-2/5 hover:bg-gold-2/10 px-2.5 py-1.5 rounded-lg"
              >
                <span>Send</span>
                <ArrowRight size={11} />
              </a>
            </div>
          </div>

          {/* Row 2, Col 2: X (Twitter) */}
          <a
            href="https://x.com/spacebuilderorg"
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-1 group flex flex-col justify-between p-6 md:p-8 rounded-xl border border-line bg-bg-soft/50 hover:border-gold-2/45 hover:bg-surface/30 transition-all duration-300 relative overflow-hidden min-h-[240px]"
          >
            <div className="absolute top-6 right-6 text-white/20 group-hover:text-gold-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
              <ExternalLink size={14} />
            </div>
            <div className="space-y-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface text-fg-muted group-hover:text-[#e4c585] transition-colors border border-line">
                <XIcon />
              </div>
              <div>
                <div className="text-sm font-medium text-white group-hover:text-gold-2 transition-colors">
                  X (Twitter)
                </div>
                <div className="text-xs text-white/40 mt-1 font-mono">@spacebuilderorg</div>
              </div>
            </div>
          </a>

          {/* Row 2, Col 3: Socials & Partnerships */}
          <div className="md:col-span-1 group relative overflow-hidden rounded-xl border border-line bg-bg-soft/50 p-6 md:p-8 transition-all duration-300 hover:border-line-strong hover:bg-surface/30 flex flex-col justify-between min-h-[240px]">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gold-2 font-medium text-sm">
                <Mail size={16} />
                <span>Partnerships</span>
              </div>
              <h3 className="text-lg font-semibold text-white tracking-tight font-mono break-all pt-1">
                socials@spacebuilder.in
              </h3>
              <p className="text-xs text-fg-muted font-light leading-relaxed">
                Connect for marketing, community events, and social partnerships.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 border-t border-white/5 pt-4">
              <button
                type="button"
                onClick={() => handleCopy("socials@spacebuilder.in")}
                className="inline-flex items-center gap-1 text-[11px] text-white/50 hover:text-white transition-colors cursor-pointer bg-white/5 hover:bg-white/10 px-2.5 py-1.5 rounded-lg"
              >
                {copiedEmail === "socials@spacebuilder.in" ? (
                  <>
                    <Check size={11} className="text-green-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={11} />
                    <span>Copy</span>
                  </>
                )}
              </button>
              <a
                href="mailto:socials@spacebuilder.in"
                className="inline-flex items-center gap-1 text-[11px] text-gold-2 hover:text-gold-1 transition-colors bg-gold-2/5 hover:bg-gold-2/10 px-2.5 py-1.5 rounded-lg"
              >
                <span>Send</span>
                <ArrowRight size={11} />
              </a>
            </div>
          </div>

          {/* Row 3, Cols 1-3: Book Strategy Call CTA */}
          <div className="md:col-span-3 relative overflow-hidden rounded-xl border border-line-strong bg-bg-soft/75 p-8 md:p-10 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                background: "radial-gradient(circle at top right, var(--gold-2), transparent 70%)",
              }}
            />
            <div className="relative space-y-3 max-w-2xl">
              <span className="text-[10px] text-[#e4c585] tracking-[0.25em] uppercase font-semibold">
                Custom Strategy
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-white font-display">
                Looking to automate operations or build custom software?
              </h3>
              <p className="text-sm text-fg-muted leading-relaxed font-light">
                Submit a project brief on our Call page. We'll analyze your requirements and reach
                out to schedule a strategy call.
              </p>
            </div>
            <div className="relative pt-2 md:pt-0 shrink-0">
              <Link
                href="/call"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold text-bg hover:brightness-110 transition-all font-display"
                style={{
                  background: "linear-gradient(135deg, var(--gold-1), var(--gold-3))",
                }}
              >
                Book a Strategy Call
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
