"use client";

import Hero from "@/components/Hero";
import Offerings from "@/components/Offerings";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen relative flex flex-col bg-bg text-fg overflow-hidden">
      <main className="w-full flex-1 flex flex-col">
        <Hero />
        <Offerings />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
