import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { MarkdownContent } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Terms & Conditions - SpaceBuilder",
  description:
    "The terms governing your engagement with SpaceBuilder for web development, AI consultation, and automation services.",
};

const SECTIONS = [
  {
    title: "1. Introduction",
    content: `These Terms & Conditions ("Terms") govern your use of the SpaceBuilder website and services. By engaging our services or using our website, you agree to be bound by these Terms.

SpaceBuilder is a web development and technology consultancy operated by a team of independent professionals based in India. We are not a registered legal entity at this time. These Terms form a binding agreement between you ("Client") and the SpaceBuilder team ("we," "us," or "our").`,
  },
  {
    title: "2. Services",
    content: `We provide the following services:

- **Custom Software Development** - building web applications, dashboards, and enterprise tools tailored to your requirements.
- **AI Consultation** - identifying opportunities for AI integration in your business and creating actionable implementation roadmaps.
- **Automation & AI Workflows** - designing and deploying intelligent automations that streamline your operations.
- **Maintenance & Support** - adding features, fixing issues, and maintaining existing projects built by us or other teams.
- **Future Services** - mobile application development using React Native and Expo, as our capabilities expand.

The specific scope, deliverables, timeline, and pricing for each engagement will be defined in a written proposal or statement of work ("SOW") agreed upon before work begins.`,
  },
  {
    title: "3. Project Process",
    content: `Our standard engagement follows these phases:

- **Discovery:** We discuss your requirements, goals, and constraints through calls, messages, or emails.
- **Proposal:** We prepare a written proposal outlining the scope, deliverables, timeline, and pricing.
- **Agreement:** Both parties review and agree to the proposal. Work begins upon your confirmation and any agreed-upon upfront payment.
- **Development:** We build in iterative phases, sharing progress and seeking feedback at agreed milestones.
- **Delivery:** Upon completion, we deliver the final product and provide any agreed handover documentation.
- **Support:** Post-delivery support is provided as outlined in the SOW or through a separate maintenance agreement.

We reserve the right to adjust timelines if requirements change materially after the proposal is agreed.`,
  },
  {
    title: "4. Client Responsibilities",
    content: `For us to deliver effectively, we require:

- Timely provision of content, assets, credentials, and access needed for the project.
- Timely feedback and approvals at agreed milestones.
- A single point of contact with decision-making authority.
- Honest and complete disclosure of requirements at the outset.

Delays caused by the Client may shift project timelines accordingly. We are not responsible for missed deadlines resulting from delayed Client input.`,
  },
  {
    title: "5. Pricing and Payment",
    content: `Payment terms will be specified in each project proposal. Unless otherwise agreed:

- **Invoicing:** We issue invoices upon delivery of milestones or upon project completion.
- **Payment window:** Invoices are due within **14 days** of issuance.
- **Late payment:** Overdue invoices may incur a late fee of **1.5% per month** on the outstanding balance.
- **Currency:** All prices are quoted in Indian Rupees (INR) unless otherwise specified.
- **Expenses:** Any third-party costs (hosting, domain registration, paid APIs, stock assets) are passed through at cost and will be disclosed in the proposal.

We reserve the right to pause work on a project if payments are overdue by more than 14 days.`,
  },
  {
    title: "6. Intellectual Property",
    content: `Ownership of work product is divided as follows:

**Client owns:**
- All custom code, designs, and content created specifically for your project.
- Project-specific configurations, databases, and assets.
- The final delivered product in its entirety.

**We retain:**
- Rights to our general tools, frameworks, libraries, and reusable components used across projects.
- Rights to our Telemetry analytics platform and any other proprietary tools.
- General knowledge, techniques, and methodologies developed during the engagement.

In practice, this means: you get full ownership of everything built for you. We keep the right to use our own tools and general knowledge on future projects. We will never sell your project code or confidential information to anyone.`,
  },
  {
    title: "7. Confidentiality",
    content: `Both parties agree to keep confidential any proprietary information shared during the course of the engagement. This includes:

- Business strategies, processes, and trade secrets.
- Technical architectures and source code not publicly available.
- Financial information and pricing.
- Client data and user information.

This obligation survives the termination of the engagement and remains in effect for **2 years** after project completion, or as long as the information remains confidential, whichever is longer.`,
  },
  {
    title: "8. Revisions and Change Requests",
    content: `Each proposal will specify the number of revision rounds included. Standard engagements include **2 rounds of revisions** per major deliverable.

Changes that fall outside the original scope ("scope creep") will be assessed and quoted separately. We will notify you of any additional costs before proceeding with out-of-scope work.

We are happy to accommodate reasonable changes. However, repeated substantial revisions beyond the agreed scope may require a revised timeline and budget.`,
  },
  {
    title: "9. Limitation of Liability",
    content: `To the maximum extent permitted by law:

- Our total liability for any claim arising from a project will not exceed the **total fees paid** by the Client for that specific project.
- We are not liable for indirect, incidental, special, consequential, or punitive damages, including lost profits, data loss, or business interruption.
- We are not responsible for issues caused by third-party services, hosting providers, or Client-managed infrastructure.

We deliver our work with reasonable skill and care. Nothing in these Terms limits our liability for death, personal injury, or fraud caused by our negligence.`,
  },
  {
    title: "10. Warranties",
    content: `We warrant that:

- We will perform the services with reasonable skill and care consistent with industry standards.
- The delivered work will conform to the specifications agreed in the proposal.
- We will deliver the work on time, subject to the timeline provisions in these Terms.

We do **not** warrant that the delivered product will be error-free, uninterrupted, or compatible with all systems. We will, however, fix any bugs or defects related to our work at no charge within **30 days** of delivery.`,
  },
  {
    title: "11. Termination",
    content: `Either party may terminate an engagement under the following conditions:

- **By the Client:** With **14 days' written notice**. Payment is due for all work completed up to the termination date.
- **By us:** If the Client breaches these Terms (including non-payment), we may terminate with **7 days' written notice**. Payment is due for all work completed.
- **Immediate termination:** Either party may terminate immediately if the other becomes insolvent, enters bankruptcy, or engages in conduct that makes the engagement unworkable.

Upon termination, we will deliver all completed work and materials. We retain the right to withhold unfinished work until outstanding payments are settled.`,
  },
  {
    title: "12. Dispute Resolution",
    content: `In the event of a dispute:

1. Both parties will first attempt to resolve the matter through good-faith negotiation.
2. If unresolved within **30 days**, the dispute will be referred to mediation.
3. If mediation fails, the dispute will be subject to the exclusive jurisdiction of the courts in **India**.

We prefer to resolve issues through conversation. Legal action is always a last resort.`,
  },
  {
    title: "13. Force Majeure",
    content: `Neither party shall be liable for delays or failures in performance resulting from causes beyond reasonable control, including but not limited to natural disasters, pandemics, government actions, internet outages, or other events of force majeure. The affected party will notify the other promptly and take reasonable steps to mitigate the impact.`,
  },
  {
    title: "14. Governing Law",
    content: `These Terms are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of courts in India.`,
  },
  {
    title: "15. Changes to These Terms",
    content: `We may update these Terms from time to time. Material changes will be communicated via email or a prominent notice on our website. Continued engagement after changes take effect constitutes acceptance of the revised Terms.`,
  },
  {
    title: "16. Contact",
    content: `For questions about these Terms, contact us at:

- **Email:** [contact@spacebuilder.in](mailto:contact@spacebuilder.in)
- **Website:** [spacebuilder.in](/)

We aim to respond within **5 business days**.`,
  },
];

export default function TermsPage() {
  return (
    <div className="w-full min-h-screen relative flex flex-col bg-bg text-fg overflow-hidden">
      <main className="w-full flex-1 flex flex-col pt-28 pb-24">
        <div className="mx-auto max-w-3xl w-full px-6">
          <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-gold-2">
            Legal
          </span>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-fg md:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-sm text-fg-muted">Last updated: June 24, 2026</p>
          <p className="mt-6 text-base leading-relaxed text-fg-muted">
            These Terms & Conditions outline the rules and guidelines for engaging
            SpaceBuilder&apos;s services. Please read them carefully - they form a binding agreement
            between you and our team.
          </p>

          <div className="mt-12 space-y-12">
            {SECTIONS.map((section) => (
              <section key={section.title}>
                <h2 className="font-display text-xl font-semibold tracking-tight text-fg">
                  {section.title}
                </h2>
                <div className="mt-3 space-y-4">
                  <MarkdownContent text={section.content} />
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-line">
            <Link
              href="/privacy"
              className="text-sm text-fg-muted transition-colors hover:text-gold-2"
            >
              View our Privacy Policy →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
