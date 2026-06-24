"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Our Offerings", href: "#offerings" },
  { label: "Our Works", href: "#works" },
  { label: "Our Team", href: "#team" },
  { label: "Read FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const [clipPathOrigin, setClipPathOrigin] = useState("calc(100% - 3.5rem) 2.75rem");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[1300px] z-[60] transition-all duration-300 ${
          scrolled && !isOpen
            ? "bg-surface/65 bg-gradient-to-r from-[#e4c585]/10 to-[#c69a4e]/5 backdrop-blur-md border border-[#e4c585]/25 shadow-lg shadow-black/20 py-3 rounded-full"
            : "border-transparent py-4 bg-transparent rounded-2xl"
        }`}
      >
        <div className="px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/brand.png"
              width={50}
              height={50}
              className={`border border-[3px] rounded-full ${isOpen ? "bg-black" : "bg-[#e4c585]"}`}
              alt="Picture of the author"
            />
            <span
              className={`md:text-4xl text-2xl font-semibold tracking-tight transition-colors duration-200 ${
                isOpen ? "text-black" : "text-[#e4c585]"
              }`}
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Space
              <span className={isOpen ? "text-black/70 font-semibold" : "text-accent"}>
                Builder
              </span>
            </span>
          </Link>

          {/* Navbar Controls Group */}
          <div className="flex items-center gap-4">
            {/* Book Free Call Button */}
            <Link
              href="/call"
              className={`sm:inline-flex items-center justify-center hidden
                h-12 shrink-0 rounded-full md:text-lg text-base font-semibold uppercase md:px-8 px-2
                tracking-wider transition-all duration-200 ${
                  isOpen
                    ? "bg-black text-[#C8A84E] hover:bg-black/90"
                    : "bg-gradient-to-b from-[#E8E4DD] via-white to-[#C8A84E] text-black hover:brightness-110"
                }`}
              style={{
                fontFamily: "var(--font-space-grotesk)",
              }}
            >
              Book Free Call
            </Link>

            <button
              ref={hamburgerRef}
              onClick={() => {
                if (hamburgerRef.current) {
                  const rect = hamburgerRef.current.getBoundingClientRect();
                  const x = rect.left + rect.width / 2;
                  const y = rect.top + rect.height / 2;
                  setClipPathOrigin(`${x}px ${y}px`);
                }
                setIsOpen((prev) => !prev);
              }}
              className={`flex items-center justify-center w-12 h-12 rounded-full border transition-colors duration-200 ${
                isOpen
                  ? "bg-black/5 border-black/25 hover:bg-black/10"
                  : "bg-foreground/5 border-border backdrop-blur-sm hover:bg-foreground/10"
              }`}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-5 h-4">
                <motion.span
                  animate={isOpen ? { top: "50%", rotate: 45 } : { top: "0%", rotate: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className={`absolute left-0 block w-5 h-[1.5px] origin-center transition-colors duration-200 ${
                    isOpen ? "bg-black" : "bg-white/50"
                  }`}
                  style={{ top: 0 }}
                />
                <motion.span
                  animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 block w-3 h-[1.5px] origin-center transition-colors duration-200 ${
                    isOpen ? "bg-black" : "bg-white/50"
                  }`}
                />
                <motion.span
                  animate={isOpen ? { top: "50%", rotate: -45 } : { top: "100%", rotate: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className={`absolute left-0 block w-5 h-[1.5px] origin-center transition-colors duration-200 ${
                    isOpen ? "bg-black" : "bg-white/50"
                  }`}
                  style={{ top: "100%" }}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: `circle(0% at ${clipPathOrigin})` }}
            animate={{ clipPath: `circle(150% at ${clipPathOrigin})` }}
            exit={{ clipPath: `circle(0% at ${clipPathOrigin})` }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-[#C8A84E] flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + i * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-5xl sm:text-7xl font-medium tracking-tight text-black hover:text-black/60 transition-colors duration-200"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
