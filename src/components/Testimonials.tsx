interface Quote {
  text: string;
  name: string;
  role: string;
}

const QUOTES: Quote[] = [
  {
    text: "SpaceBuilder didn't hand us a website - they rebuilt how our ops team works. Manual reporting went from days to minutes.",
    name: "Maya Hartwell",
    role: "COO, Northwind Logistics",
  },
  {
    text: "They mapped our entire workflow before writing a line of code. The AI roadmap alone paid for itself in the first quarter.",
    name: "Daniel Osei",
    role: "Founder, Lumen Health",
  },
  {
    text: "What stood out was restraint. They cut features we didn't need and shipped the ones that moved revenue.",
    name: "Priya Nair",
    role: "Head of Product, Tessa",
  },
  {
    text: "Our support team handles 3x the volume with the same headcount. The automations just quietly work.",
    name: "Marcus Feld",
    role: "VP Operations, Atlas Retail",
  },
  {
    text: "Felt less like an agency and more like an in-house team that happened to be exceptional at AI.",
    name: "Sofia Greco",
    role: "CEO, Brightpath",
  },
  {
    text: "Fourteen days from kickoff to a live system. I've worked with vendors who take that long to send a proposal.",
    name: "Tom Becker",
    role: "CTO, Vault Financial",
  },
];

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  return (
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line-strong text-xs font-semibold text-gold-2"
      style={{ background: "rgba(228,197,133,0.08)" }}
    >
      {initials}
    </span>
  );
}

function Card({ q }: { q: Quote }) {
  return (
    <figure className="mb-5 rounded-2xl border border-line bg-surface/70 p-6">
      <blockquote className="text-[15px] leading-relaxed text-fg">"{q.text}"</blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <Avatar name={q.name} />
        <span>
          <span className="block text-sm font-medium text-fg">{q.name}</span>
          <span className="block text-xs text-fg-dim">{q.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

function Column({ items, reverse, dur }: { items: Quote[]; reverse?: boolean; dur: string }) {
  const loop = [...items, ...items];
  return (
    <div className="group relative h-full overflow-hidden">
      <div
        className="animate-marquee-y group-hover:[animation-play-state:paused]"
        style={{
          animationDuration: dur,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {loop.map((q, i) => (
          <Card key={i} q={q} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const colA = [QUOTES[0]!, QUOTES[3]!];
  const colB = [QUOTES[1]!, QUOTES[4]!];
  const colC = [QUOTES[2]!, QUOTES[5]!];

  return (
    <section id="testimonials" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-gold-2">
          What they say about us
        </span>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-fg md:text-5xl">
          Teams that build with us,
          <br />
          <span className="font-serif italic font-normal text-gold-2">stay</span> with us.
        </h2>
      </div>

      <div
        className="relative mx-auto mt-16 grid h-[560px] max-w-md md:max-w-3xl lg:max-w-5xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <Column items={colA} dur="30s" />
        <div className="hidden md:block">
          <Column items={colB} reverse dur="36s" />
        </div>
        <div className="hidden lg:block">
          <Column items={colC} dur="33s" />
        </div>
      </div>
    </section>
  );
}
