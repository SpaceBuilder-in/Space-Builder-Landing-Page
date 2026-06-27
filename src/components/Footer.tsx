import { Linkedin } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";

const COLS = [
  {
    title: "Pages",
    links: [
      { label: "Home", href: "/" },
      //   { label: "Work", href: "/work" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Services", href: "/#offerings" },
      { label: "Team", href: "/team" },
      { label: "Book Call", href: "/call" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

function XIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line px-6 pt-20">
      <div className="mx-auto max-w-[1300px]">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-fg-muted">
              We build the systems, automations, and software that grow businesses - not just
              websites.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              {[
                {
                  icon: <XIcon key="x" />,
                  link: "https://x.com/spacebuilderorg",
                  label: "X handle",
                },
                {
                  icon: <Linkedin key="li" size={15} strokeWidth={1.75} />,
                  link: "https://www.linkedin.com/company/space-builder-org/",
                  label: "LinkedIn handle",
                },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.link}
                  target="_blank"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line-strong text-fg-muted transition-colors hover:border-gold-3 hover:text-gold-2"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-fg">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-fg-muted transition-colors hover:text-fg"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-line py-7 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-fg-muted">
            &copy; {new Date().getFullYear()} SpaceBuilder. All rights reserved.
          </p>
          <p className="text-xs text-fg-muted">Designed &amp; built to last.</p>
        </div>
      </div>
    </footer>
  );
}
