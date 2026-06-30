import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface QA {
  q: string;
  a: string;
}

const FAQS: QA[] = [
  {
    q: "Will your solutions work with the systems we already use?",
    a: "Yes. We design around your existing stack - CRMs, ERPs, internal tools, spreadsheets - rather than asking you to rip and replace. Integration is the starting point, not an afterthought.",
  },
  {
    q: "We're new to AI - where should we even start?",
    a: "That's the most common place we begin. We run a short discovery, map your workflows, and identify the two or three highest-impact opportunities before any build. You get a clear roadmap, not a science project.",
  },
  {
    q: "What industries do you work with?",
    a: "We've shipped systems across logistics, healthcare, fintech, retail, and SaaS. The patterns of manual work and disconnected tools repeat everywhere - the craft is in tailoring the fix to your context.",
  },
  {
    q: "Do we need an in-house AI or tech team to work with you?",
    a: "No. Most of our clients don't have one. We act as your build team and hand over clean documentation, training, and support so your people can run the system confidently.",
  },
  {
    q: "What happens after the project is delivered?",
    a: "We don't disappear. Every engagement includes a support window, monitoring, and the option of an ongoing partnership to extend and refine the systems as your business grows.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        <div className="md:sticky md:top-32 md:self-start">
          <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-gold-2">
            Frequently asked
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-fg md:text-5xl">
            Questions,
            <br />
            answered.
          </h2>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-fg-muted">
            Still curious about something we didn't cover?
          </p>
          <Link
            href="/call"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold-2 transition-colors hover:text-gold-1"
          >
            Book a call
            <ArrowUpRight size={15} strokeWidth={2} />
          </Link>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {FAQS.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="font-display text-lg font-medium tracking-tight text-fg">
                    {item.q}
                  </span>
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line-strong text-fg-muted"
                    style={
                      isOpen
                        ? {
                            background: "rgba(228,197,133,0.1)",
                            color: "var(--gold-2)",
                          }
                        : undefined
                    }
                  >
                    {isOpen ? (
                      <Minus size={15} strokeWidth={2} />
                    ) : (
                      <Plus size={15} strokeWidth={2} />
                    )}
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-xl pb-6 pr-10 text-[15px] leading-relaxed text-fg-muted">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
