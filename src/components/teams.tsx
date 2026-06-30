"use client";

import { LazyMotion, m, domAnimation } from "motion/react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  xLink: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Atharv Dange",
    role: "CEO & Software Engineer",
    image: "/team/team1.jpeg",
    xLink: "https://x.com/atharvdangedev",
  },
  {
    name: "Pritam Mandal",
    role: "COO & Design Engineer",
    image: "/team/team2.jpeg",
    xLink: "https://x.com/rick_jsx",
  },
  {
    name: "Shyam",
    role: "CMO & Software Engineer",
    image: "/team/team3.jpeg",
    xLink: "https://x.com/shyamhz",
  },
  {
    name: "Pallab Karmakar",
    role: "CTO & Software Engineer",
    image: "/team/team4.jpeg",
    xLink: "https://x.com/Pallab_dev",
  },
];

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Teams() {
  return (
    <LazyMotion features={domAnimation}>
      <section id="team" className="relative px-6 py-24 md:py-32 bg-bg overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-3/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-2xl text-center mb-16 md:mb-20">
          <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-gold-2">
            The builders
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-fg md:text-5xl">
            Meet the minds
            <br />
            <span className="font-serif italic font-normal text-gold-2">behind</span> the builds.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-balance text-base leading-relaxed text-fg-muted">
            A dedicated group of engineers, designers, and systems architects obsessed with building
            high-performance AI software.
          </p>
        </div>

        <div className="mx-auto max-w-6xl grid grid-cols-2 gap-4 lg:grid-cols-4 px-2 md:gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <m.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="group flex flex-col"
            >
              {/* Image Wrapper */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl md:rounded-[24px] border border-line bg-surface/40 transition-colors duration-300 group-hover:border-line-strong">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover grayscale contrast-[1.05] brightness-95 transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100"
                  priority={index < 2}
                />

                {/* Yellow Button overlay in bottom-right linking to X */}
                <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 z-10">
                  <a
                    href={member.xLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${member.name}'s X profile`}
                    className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-lg md:rounded-xl bg-[#e4c585] text-black shadow-md transition-all duration-300 hover:bg-yellow-300 hover:scale-110 active:scale-95 group-hover:shadow-yellow-400/20 group-hover:shadow-lg"
                  >
                    <XIcon className="h-3.5 w-3.5 md:h-4.5 md:w-4.5" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="mt-3 md:mt-4 px-1">
                <h3 className="text-sm md:text-[17px] font-medium tracking-tight text-fg transition-colors duration-300 group-hover:text-gold-2">
                  {member.name}
                </h3>
                <p className="mt-0.5 md:mt-1 text-[10px] md:text-xs text-fg-dim font-medium uppercase tracking-wider">
                  {member.role}
                </p>
              </div>
            </m.div>
          ))}
        </div>
      </section>
    </LazyMotion>
  );
}
