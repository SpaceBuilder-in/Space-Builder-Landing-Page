import type { Metadata } from "next";
import ContactContent from "./ContactContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us - SpaceBuilder",
  description:
    "Connect with SpaceBuilder for custom software development, AI automation consulting, and technical support.",
};

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen relative flex flex-col bg-bg text-fg overflow-hidden">
      <ContactContent />
      <Footer />
    </div>
  );
}
