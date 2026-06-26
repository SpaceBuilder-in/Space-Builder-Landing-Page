"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { X, Linkedin } from "lucide-react";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Our Offerings", href: "#offerings" },
  { label: "Our Team", href: "/team" },
  { label: "Book Call", href: "/call" },
  { label: "Read FAQ", href: "#faq" },
];

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

interface AnimatedLinkProps {
  href: string;
  label: string;
  onClick: () => void;
}

function AnimatedLink({ href, label, onClick }: AnimatedLinkProps) {
  const characters = label.split("");

  return (
    <Link
      href={href}
      onClick={onClick}
      data-drawer-link
      className="group relative flex items-baseline gap-2 text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white transition-colors duration-300 py-2 sm:py-3 w-full"
      style={{ fontFamily: "var(--font-space-grotesk)" }}
    >
      <span className="relative overflow-hidden inline-flex">
        {/* Main Text (Slides up and out on hover) */}
        <span className="inline-flex">
          {characters.map((char, index) => (
            <span
              key={index}
              className="inline-block transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:-translate-y-full"
              style={{
                transitionDelay: `${index * 0.02}s`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>

        {/* Hover Text (Slides up into view on hover) */}
        <span className="absolute inset-0 inline-flex">
          {characters.map((char, index) => (
            <span
              key={index}
              className="inline-block translate-y-full text-[#e4c585] transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:translate-y-0"
              style={{
                transitionDelay: `${index * 0.02}s`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const lenis = typeof window !== "undefined" ? (window as any).lenisInstance : null;
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      if (lenis) {
        lenis.stop();
      }
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if (lenis) {
        lenis.start();
      }
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      const activeLenis = typeof window !== "undefined" ? (window as any).lenisInstance : null;
      if (activeLenis) {
        activeLenis.start();
      }
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-45 border-b transition-all duration-300 ${
          scrolled
            ? "bg-black/65 backdrop-blur-md border-white/5 py-4"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="overflow-hidden rounded-full relative w-[28px] h-[28px] md:w-[36px] md:h-[36px]">
              <Image
                src="/brand.png"
                fill
                className="border border-[3px] scale-[1.2] bg-[#e4c585] object-cover"
                alt="Picture of the author"
              />
            </div>
            <span
              className="md:text-4xl text-2xl font-semibold tracking-tight transition-colors duration-200 text-[#e4c585]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Space
              <span className="text-white font-semibold">Builder</span>
            </span>
          </Link>

          {/* Hamburger Menu Controls */}
          <button
            onClick={() => setIsOpen(true)}
            className="p-4 -m-4 group cursor-pointer flex items-center justify-center"
            aria-label="Open Menu"
          >
            <div className="flex flex-col justify-between items-end w-6 h-3.5">
              <span className="h-[1.5px] bg-white/85 group-hover:bg-white transition-all duration-300 w-6" />
              <span className="h-[1.5px] bg-white/85 group-hover:bg-white transition-all duration-300 w-[18px] group-hover:w-6" />
              <span className="h-[1.5px] bg-white/85 group-hover:bg-white transition-all duration-300 w-[12px] group-hover:w-6" />
            </div>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md"
            />

            {/* Centered Brand Logo (Visible Left of Drawer on Desktop) */}
            <div className="hidden md:flex md:fixed md:left-0 md:top-0 md:bottom-0 md:right-[540px] z-50 flex-col items-center justify-center pointer-events-none text-white select-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="text-center flex flex-col items-center gap-4"
              >
                <div className="overflow-hidden rounded-full">
                  <Image
                    src="/brand.png"
                    width={80}
                    height={80}
                    className="border-4 border-[#e4c585] scale-[1.2] bg-[#e4c585]"
                    alt="SpaceBuilder Logo"
                  />
                </div>
                <div>
                  <h1
                    className="text-5xl md:text-6xl font-semibold tracking-tight text-[#e4c585]"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    Space<span className="text-white font-semibold">Builder</span>
                  </h1>
                  <p className="text-sm text-white/50 tracking-wider mt-3 font-light">
                    A software studio, built different.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Side Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.55 }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-[480px] md:w-[540px] z-[55] bg-black border-l border-white/10 text-white flex flex-col justify-between px-6 md:px-12 pb-6 sm:pb-8 md:pb-14 shadow-2xl overflow-y-auto drawer-content-panel"
              data-lenis-prevent
            >
              {/* Header */}
              <div
                data-drawer-header
                className={`flex items-center justify-between border-b border-white/10 pb-4 md:pb-6 transition-all duration-300 ${
                  scrolled ? "pt-3" : "pt-4 md:pt-5"
                }`}
              >
                <span className="text-xl md:text-2xl text-white/40 font-medium uppercase tracking-[0.25em]">
                  Menu
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 -mr-2 text-white/60 hover:text-white transition-colors cursor-pointer group flex items-center justify-center"
                  aria-label="Close Menu"
                >
                  <X className="w-8 h-8 stroke-[1.25] transition-transform duration-300 group-hover:rotate-90" />
                </button>
              </div>

              {/* Menu Links */}
              <nav
                data-drawer-nav
                className="flex flex-col gap-3 sm:gap-4 md:gap-6 py-6 sm:py-8 md:py-10 my-auto"
              >
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.1 + i * 0.08,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <AnimatedLink
                      href={item.href}
                      label={item.label}
                      onClick={() => setIsOpen(false)}
                    />
                  </motion.div>
                ))}
              </nav>

              {/* Footer */}
              <div
                data-drawer-footer
                className="space-y-6 md:space-y-8 pt-6 md:pt-8 border-t border-white/10"
              >
                {/* Let's Talk */}
                <div className="space-y-2 md:space-y-3">
                  <span className="block text-[10px] text-white/40 font-medium uppercase tracking-[0.25em]">
                    Let's Talk
                  </span>
                  <a
                    href="mailto:contact@spacebuilder.in"
                    className="group text-xl sm:text-2xl font-medium text-white hover:text-[#e4c585] transition-colors duration-300 border-b border-white/20 hover:border-[#e4c585]/50 pb-1.5 inline-flex items-center gap-1.5"
                  >
                    contact@spacebuilder.in
                    <span className="text-white/45 group-hover:text-[#e4c585] transition-colors group-hover:translate-x-0.5 duration-200">
                      +
                    </span>
                  </a>
                </div>

                {/* Subfooter: Socials on Left */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                  <div className="space-y-2">
                    <span className="block text-[10px] text-white/40 font-medium uppercase tracking-[0.25em]">
                      Socials
                    </span>
                    <div className="flex items-center gap-4">
                      <a
                        href="https://x.com/spacebuilderorg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-white transition-colors p-1.5 border border-white/10 hover:border-white/30 rounded-full flex items-center justify-center"
                        aria-label="X (Twitter)"
                      >
                        <XIcon className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/space-builder-org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-white transition-colors p-1.5 border border-white/10 hover:border-white/30 rounded-full flex items-center justify-center"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-3.5 h-3.5 stroke-[1.5]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
