import { ArrowRight } from "lucide-react";
import FlipWord from "./FlipWord";

export default function Hero() {
    return (
        <section id="top" className="relative overflow-hidden px-6 pt-40 pb-24 md:pt-52 md:pb-32">
            {/* dotted grid */}
            <div
                aria-hidden
                className="bg-dotgrid pointer-events-none absolute inset-0 opacity-60"
                style={{ maskImage: "radial-gradient(ellipse 70% 55% at 50% 30%, black, transparent)" }}
            />
            {/* gold glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-16 h-[460px] w-[860px] max-w-[95%] -translate-x-1/2 rounded-full"
                style={{
                    background: "radial-gradient(ellipse at center, rgba(228,197,133,0.18), transparent 68%)",
                    filter: "blur(14px)",
                }}
            />

            <div className="relative mx-auto max-w-5xl text-center">
                <span
                    className="animate-fade-up inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-surface/60 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-fg-muted"
                    style={{ animationDelay: "0ms" }}
                >
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--gold-2)" }} />
                    AI-driven build studio
                </span>

                <h1 className="mt-8 font-display text-[12vw] sm:text-7xl md:text-8xl lg:text-[8.5rem] font-semibold leading-[0.92] tracking-tight flex flex-wrap items-center justify-center gap-x-3 md:gap-x-4">
                    <span className="animate-fade-up inline-block" style={{ animationDelay: "80ms" }}>
                        <FlipWord />
                    </span>
                    <span className="animate-fade-up inline-block text-fg" style={{ animationDelay: "140ms" }}>
                        Builder
                    </span>
                </h1>

                <p
                    className="animate-fade-up mx-auto mt-8 max-w-xl text-balance text-lg leading-relaxed text-fg-muted md:text-xl"
                    style={{ animationDelay: "220ms" }}
                >
                    SpaceBuilder helps you build <span className="text-fg">businesses</span> — not just
                    websites. We design the AI systems, automations, and software that move your company
                    forward.
                </p>

                <div
                    className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
                    style={{ animationDelay: "300ms" }}
                >
                    <a
                        href="#cta"
                        className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
                        style={{ background: "linear-gradient(135deg, var(--gold-1), var(--gold-3))" }}
                    >
                        Book a free call
                        <ArrowRight size={16} strokeWidth={2} />
                    </a>
                    <a
                        href="#offerings"
                        className="inline-flex items-center gap-2 rounded-full border border-line-strong px-7 py-3.5 text-sm font-medium text-fg transition-colors hover:bg-surface"
                    >
                        See what we do
                    </a>
                </div>
            </div>
        </section>
    );
}
