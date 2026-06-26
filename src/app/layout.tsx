import type { Metadata } from "next";
import { Space_Grotesk, Inter, Lora, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "SpaceBuilder - We Build Digital Experiences",
  description:
    "SpaceBuilder is a development agency that builds scalable web applications, enterprise software, and AI-powered workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "dark",
        "antialiased",
        spaceGrotesk.variable,
        inter.variable,
        lora.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {/* <main> */}
        <Navbar />
        {children}
        {/* </main> */}
      </body>
    </html>
  );
}
