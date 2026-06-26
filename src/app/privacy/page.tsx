import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - SpaceBuilder",
  description: "How SpaceBuilder collects, uses, and protects your personal information.",
};

const SECTIONS = [
  {
    title: "Information We Collect",
    content: `When you visit our website, fill out our contact form, or engage our services, we may collect the following information:

- **Personal identifiers:** Name, email address, phone number, and company name.
- **Project details:** Information you share about your project requirements, goals, and timeline.
- **Usage data:** Pages visited, time spent on pages, referral source, and general interaction patterns - collected through our self-hosted analytics platform (Telemetry). We do not use third-party tracking cookies or advertising networks.
- **Communication records:** Messages, emails, and call notes related to your inquiry or project.`,
  },
  {
    title: "How We Use Your Information",
    content: `We use the information we collect to:

- Respond to your inquiries and schedule consultations.
- Prepare project proposals and scope of work.
- Deliver the services you've engaged us for.
- Send project updates, invoices, and administrative communications.
- Improve our website and service offerings based on aggregate usage patterns.

We do not sell, rent, or trade your personal information to third parties for marketing purposes.`,
  },
  {
    title: "Analytics and Tracking",
    content: `We use **Telemetry**, our own self-hosted analytics platform, to understand how visitors interact with our website. Telemetry runs on our own infrastructure and does not use cookies or send data to third-party servers.

We do not use Google Analytics, Facebook Pixel, or any other third-party tracking tools. Your browsing behavior on our site is not sold or shared with advertisers.`,
  },
  {
    title: "Data Sharing and Third Parties",
    content: `We may share your information with the following categories of service providers, strictly as needed to operate our business:

- **Hosting:** Vercel - our website hosting provider.
- **Email:** Resend - used to send transactional emails (inquiries, proposals, project communication).
- **Communication:** Email and phone - for direct project communication.

Each of these providers processes data on our behalf under contractual obligations that protect your information. We do not authorise them to use your data for their own purposes.`,
  },
  {
    title: "Data Retention",
    content: `We retain your personal information for as long as necessary to:

- Fulfil the purposes outlined in this policy.
- Maintain an active client relationship.
- Comply with legal obligations, resolve disputes, and enforce agreements.

Project-related data (code, designs, documents) is retained for the duration of the engagement plus **12 months** after project completion, unless otherwise agreed. After this period, client data is securely deleted unless you request earlier deletion.`,
  },
  {
    title: "Data Security",
    content: `We implement reasonable technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. These measures include encrypted data transmission (HTTPS), access controls on internal systems, and regular security assessments.

However, no method of electronic transmission or storage is completely secure. While we strive to protect your data, we cannot guarantee absolute security.`,
  },
  {
    title: "Your Rights",
    content: `Under applicable data protection laws, you have the right to:

- **Access** the personal information we hold about you.
- **Correct** any inaccurate or incomplete data.
- **Delete** your personal information, subject to legal retention requirements.
- **Object** to processing of your data for certain purposes.
- **Withdraw consent** at any time where we rely on consent as a legal basis.

To exercise any of these rights, contact us at the email address listed below. We will respond to your request within **30 days**.`,
  },
  {
    title: "Cookies",
    content: `Our website uses only **essential cookies** required for basic functionality (such as session management). We do not use advertising cookies, social media tracking pixels, or third-party analytics cookies.

Since Telemetry is self-hosted and cookieless, your browsing experience on our site is not tracked through cookies.`,
  },
  {
    title: "Children's Privacy",
    content: `Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child, we will take steps to delete it promptly.`,
  },
  {
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we make material changes, we will update the "Last Updated" date at the top of this page. Continued use of our website after changes constitutes acceptance of the revised policy.`,
  },
  {
    title: "Contact Us",
    content: `If you have questions about this Privacy Policy or how we handle your data, reach out to us at:

- **Email:** <a href="mailto:contact@spacebuilder.in" className="text-gold-2 underline underline-offset-2 hover:text-gold-1 transition-colors">contact@spacebuilder.in</a>
- **Website:** [spacebuilder.in](/)

We aim to respond to all privacy-related inquiries within **5 business days**.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="w-full min-h-screen relative flex flex-col bg-bg text-fg overflow-hidden">
      <main className="w-full flex-1 flex flex-col pt-28 pb-24">
        <div className="mx-auto max-w-3xl w-full px-6">
          <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-gold-2">
            Legal
          </span>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-fg md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-fg-muted">Last updated: June 24, 2026</p>
          <p className="mt-6 text-base leading-relaxed text-fg-muted">
            At SpaceBuilder, we respect your privacy and are committed to protecting your personal
            information. This policy explains what we collect, how we use it, and the choices you
            have regarding your data.
          </p>

          <div className="mt-12 space-y-12">
            {SECTIONS.map((section) => (
              <section key={section.title}>
                <h2 className="font-display text-xl font-semibold tracking-tight text-fg">
                  {section.title}
                </h2>
                <div className="mt-3 space-y-4">
                  {section.content.split("\n\n").map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-sm leading-relaxed text-fg-muted"
                      dangerouslySetInnerHTML={{
                        __html: paragraph
                          .replace(
                            /\*\*(.*?)\*\*/g,
                            '<strong class="font-medium text-fg">$1</strong>',
                          )
                          .replace(
                            /\[(.*?)\]\((.*?)\)/g,
                            '<a href="$2" class="text-gold-2 underline underline-offset-2 hover:text-gold-1 transition-colors">$1</a>',
                          ),
                      }}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-line">
            <Link
              href="/terms"
              className="text-sm text-fg-muted transition-colors hover:text-gold-2"
            >
              View our Terms & Conditions →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
