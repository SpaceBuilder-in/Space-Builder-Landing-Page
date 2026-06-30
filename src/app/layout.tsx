import type { Metadata } from "next";
import { Space_Grotesk, Inter, Lora, Geist } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://spacebuilder.in"),
  title: "SpaceBuilder | Custom Software, AI Automation & Web Development",
  description:
    "SpaceBuilder builds custom software, AI-powered automations, and scalable web applications for SaaS companies and growing businesses.",
  openGraph: {
    title: "SpaceBuilder | Custom Software, AI Automation & Web Development",
    description:
      "SpaceBuilder builds custom software, AI-powered automations, and scalable web applications for SaaS companies and growing businesses.",
    url: "https://spacebuilder.in",
    siteName: "SpaceBuilder",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "SpaceBuilder",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpaceBuilder | Custom Software, AI Automation & Web Development",
    description:
      "SpaceBuilder builds custom software, AI-powered automations, and scalable web applications for SaaS companies and growing businesses.",
    images: ["/og.png"],
  },
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
        <Script
          src="https://usetelemetry.hogyoku.cloud/analytics.js"
          data-tenant-id="cmqw3iup8004pfmgpnbcrme0z"
          data-api-key="tlv_1_VTB5H-2WsEx8Hu649JFeizEcZ97HGHj3Ha9ZtnsMSDw"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
