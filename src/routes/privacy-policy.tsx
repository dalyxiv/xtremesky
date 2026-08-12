import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { CONTACT_EMAIL } from "@/lib/tours";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Xtreme Sky Egypt" },
      {
        name: "description",
        content:
          "How Xtreme Sky Egypt collects, uses and protects passenger data submitted through availability requests and booking coordination.",
      },
      { property: "og:title", content: "Privacy Policy — Xtreme Sky Egypt" },
      { property: "og:description", content: "Our approach to passenger data, consent and retention." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  { h: "Information We Collect", p: "We collect the details you submit in an availability request: name, email address, phone or WhatsApp number, country, preferred date and time window, passenger count, declared passenger weights and any special requests." },
  { h: "Why We Collect It", p: "Passenger information is used solely to verify slot availability, plan weight and balance, meet security and identification requirements, and communicate with you about your flight." },
  { h: "Sharing", p: "Details may be shared with our operating aviation partner and airport security only as required to authorize your flight. We do not sell passenger data." },
  { h: "Retention", p: "Booking records are retained as required for operational and regulatory purposes, then securely deleted. You may request deletion of unused enquiry data at any time." },
  { h: "Your Choices", p: "You may request access, correction or deletion of your data, or withdraw marketing consent, by emailing us." },
];

function PrivacyPage() {
  return (
    <main className="bg-onyx text-foreground">
      <SiteHeader />
      <PageHero eyebrow="Legal" title="Privacy Policy" subtitle="Your data is handled with the same discipline as our flight operations." />
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-3xl space-y-8">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-serif text-2xl text-gradient-gold">{s.h}</h2>
              <p className="mt-3 leading-relaxed text-foreground/75">{s.p}</p>
            </div>
          ))}
          <p className="text-sm text-foreground/70">
            Questions about this policy? Email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[var(--gold-bright)] underline underline-offset-4">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
