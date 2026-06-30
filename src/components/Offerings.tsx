import type { ReactNode } from "react";
import { LayersArt } from "./svg/LayersArt";
import { FlowArt } from "./svg/FlowArt";
import { HubArt } from "./svg/HubArt";
import { ConsultancyArt } from "./svg/ConsultancyArt";
import { VibeArt } from "./svg/VibeArt";
import { AuditArt } from "./svg/AuditArt";

function SectionHead() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-gold-2">
        What we offer
      </span>
      <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-fg md:text-5xl">
        A build partner.
        <br />
        More than a vendor.
      </h2>
      <p className="mx-auto mt-5 max-w-lg text-balance text-base leading-relaxed text-fg-muted">
        We find what slows your business down - then design the automations, software, and AI
        systems that fix it for good.
      </p>
    </div>
  );
}

interface Card {
  tag: string;
  title: string;
  desc: string;
  art: ReactNode;
}

const CARDS: Card[] = [
  {
    tag: "Custom software",
    title: "Software that grows with you",
    desc: "We identify the hidden problems holding your business back and build solutions customized exclusively for your business needs.",
    art: <LayersArt />,
  },
  {
    tag: "1:1 consultancy",
    title: "Your AI roadmap, built for results",
    desc: "Not sure where AI fits? We help you find the high-impact opportunities and create a clear plan tailored to your organisation.",
    art: <ConsultancyArt />,
  },
  {
    tag: "Automation",
    title: "Work smarter, not harder",
    desc: "We design and deploy intelligent automations that remove manual effort, reduce errors, and free your people to focus on what matters.",
    art: <FlowArt />,
  },
  {
    tag: "AI workflows",
    title: "Connect everything, miss nothing",
    desc: "From data processing to decision-making, we engineer end-to-end workflows that connect your tools, teams, and people into one system.",
    art: <HubArt />,
  },
  {
    tag: "Vibe Code Fixing",
    title: "Codebases that feel right",
    desc: "We jump into your repository, clean up technical debt, and align your code with best practices, keeping your team's development momentum fast.",
    art: <VibeArt />,
  },
  {
    tag: "Workflow audit",
    title: "Understand our business and add Automation",
    desc: "We audit your manual workflows, shadow your team, and build custom software integrations tailored specifically to your unique business logic.",
    art: <AuditArt />,
  },
];

export default function Offerings() {
  return (
    <section id="offerings" className="relative px-6 py-24 md:py-32">
      <SectionHead />

      <div className="mx-auto mt-16 grid max-w-5xl gap-5 md:grid-cols-2">
        {CARDS.map((c) => (
          <article
            key={c.title}
            className="group rounded-3xl border border-line bg-surface/60 p-7 transition-colors hover:border-line-strong"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="flex h-56 items-center justify-center rounded-2xl border border-line bg-bg-soft/70 overflow-hidden">
              <div className="w-full h-full max-w-[340px] px-4 py-3">{c.art}</div>
            </div>
            <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.2em] text-gold-2">
              {c.tag}
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-fg">
              {c.title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-fg-muted">{c.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
