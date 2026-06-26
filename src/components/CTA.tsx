import Link from "next/link";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";

export default function CTA() {
  return (
    <section id="cta" className="relative py-12">
      <div className="relative mx-auto max-w-[1300px] overflow-hidden rounded-[2rem] border border-line-strong bg-bg-soft px-6 py-24 text-center md:py-32">
        <div
          aria-hidden
          className="animate-aurora-drift pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[820px] max-w-[120%] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(49,104,255,0.55), rgba(49,104,255,0.12) 45%, transparent 70%)",
            filter: "blur(36px)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2"
          style={{
            background: "linear-gradient(to top, var(--bg-soft), transparent)",
          }}
        />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-display sm:text-5xl text-3xl font-semibold leading-[1.02] tracking-tight text-fg md:text-6xl">
            Ready to <span className="font-serif italic font-normal">transform</span>
            <br />
            your business?
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg text-fg-muted">
            It takes one call to find your first automation.
          </p>

          <div className="mt-10 flex flex-row items-center justify-center gap-3">
            <Link
              href="/call"
              className="inline-block transition-transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <InteractiveHoverButton>Book a free call</InteractiveHoverButton>
            </Link>
            <a
              href="#offerings"
              className="inline-flex items-center justify-center rounded-full border border-line-strong px-6 py-2.5 text-sm font-semibold text-fg transition-colors hover:bg-surface whitespace-nowrap"
            >
              See our work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
