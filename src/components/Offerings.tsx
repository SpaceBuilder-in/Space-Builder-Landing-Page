import type { ReactNode } from "react";

function SectionHead() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-gold-2">
        What we offer
      </span>
      <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-fg md:text-5xl">
        More than a vendor.
        <br />A build partner.
      </h2>
      <p className="mx-auto mt-5 max-w-lg text-balance text-base leading-relaxed text-fg-muted">
        We find what slows your business down - then design the automations, software, and AI
        systems that fix it for good.
      </p>
    </div>
  );
}

/* ---------- Animated SVG illustrations ---------- */

function LayersArt() {
  return (
    <svg viewBox="0 0 240 150" className="h-full w-full" fill="none">
      <g strokeWidth="1.3">
        <path d="M50 104 L120 68 L190 104 L120 140 Z" stroke="var(--gold-3)" opacity="0.3" />
        <path d="M50 82 L120 46 L190 82 L120 118 Z" stroke="var(--gold-2)" opacity="0.5" />
        <path d="M50 60 L120 24 L190 60 L120 96 Z" stroke="var(--gold-1)" opacity="0.95">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 0 -9; 0 0"
            dur="3.6s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </svg>
  );
}

function RoadmapArt() {
  return (
    <svg viewBox="0 0 240 150" className="h-full w-full" fill="none">
      <path
        d="M30 120 C 90 120, 90 75, 150 75 S 210 30, 210 30"
        stroke="var(--gold-2)"
        strokeWidth="1.4"
        strokeDasharray="4 6"
        opacity="0.45"
      />
      <path
        d="M30 120 C 90 120, 90 75, 150 75 S 210 30, 210 30"
        stroke="var(--gold-1)"
        strokeWidth="1.6"
        strokeDasharray="240"
        strokeDashoffset="240"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="240;0;0;240"
          dur="5s"
          repeatCount="indefinite"
        />
      </path>
      {[
        [30, 120],
        [150, 75],
        [210, 30],
      ].map(([cx, cy], idx) => (
        <circle key={idx} cx={cx} cy={cy} r="4.5" fill="var(--gold-1)">
          <animate
            attributeName="r"
            values="4.5;6.5;4.5"
            dur="2.2s"
            begin={`${idx * 0.5}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  );
}

function FlowArt() {
  return (
    <svg viewBox="0 0 240 150" className="h-full w-full" fill="none">
      <g stroke="var(--line-strong)" strokeWidth="1.2">
        <rect x="26" y="62" width="46" height="26" rx="6" />
        <rect x="168" y="40" width="46" height="26" rx="6" />
        <rect x="168" y="84" width="46" height="26" rx="6" />
        <path d="M72 75 H120 M120 75 V53 H168 M120 75 V97 H168" />
      </g>
      <circle cx="120" cy="75" r="6" fill="var(--gold-2)" />
      <circle r="4" fill="var(--gold-1)">
        <animateMotion dur="2.6s" repeatCount="indefinite" path="M72 75 H120 V53 H168" />
      </circle>
      <circle r="4" fill="var(--gold-1)">
        <animateMotion
          dur="2.6s"
          begin="1.3s"
          repeatCount="indefinite"
          path="M72 75 H120 V97 H168"
        />
      </circle>
    </svg>
  );
}

const HUB_NODES: [number, number][] = [
  [162, 75],
  [141, 111.37],
  [99, 111.37],
  [78, 75],
  [99, 38.63],
  [141, 38.63],
];

function HubArt() {
  return (
    <svg viewBox="0 0 240 150" className="h-full w-full" fill="none">
      <circle cx="120" cy="75" r="42" stroke="var(--line-strong)" strokeWidth="1.2" />
      <circle cx="120" cy="75" r="9" fill="var(--gold-2)" />
      <g>
        {HUB_NODES.map(([x, y], i) => (
          <g key={i}>
            <line x1="120" y1="75" x2={x} y2={y} stroke="var(--line)" strokeWidth="1" />
            <circle cx={x} cy={y} r="4.5" fill="var(--gold-1)" opacity="0.9" />
          </g>
        ))}
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 120 75"
          to="360 120 75"
          dur="18s"
          repeatCount="indefinite"
        />
      </g>
    </svg>
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
    desc: "We build enterprise-grade software around your specific needs - scalable, secure, and built to integrate with what you already run.",
    art: <LayersArt />,
  },
  {
    tag: "AI consultation",
    title: "Your AI roadmap, built for results",
    desc: "Not sure where AI fits? We help you find the high-impact opportunities and create a clear plan tailored to your organisation.",
    art: <RoadmapArt />,
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
            <div className="flex h-40 items-center justify-center rounded-2xl border border-line bg-bg-soft/70">
              <div className="h-28 w-44">{c.art}</div>
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
