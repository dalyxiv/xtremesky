import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/cancellation-weather-policy")({
  head: () => ({
    meta: [
      { title: "Cancellation & Weather Policy — Xtreme Sky Egypt" },
      {
        name: "description",
        content:
          "Our weather rescheduling terms, guest cancellation windows, late arrival and no-show rules for helicopter flights over Cairo and Giza.",
      },
      { property: "og:title", content: "Cancellation & Weather Policy" },
      { property: "og:description", content: "Clear, fair terms for rescheduling, cancellations and no-shows." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PolicyPage,
});

const blocks = [
  { h: "Weather & Safety Cancellations", p: "If we cancel a flight for weather, visibility, airspace restriction or any safety reason, you may reschedule to the next available slot at no cost or receive a full refund of amounts paid." },
  { h: "Guest Cancellations", p: "Cancellations made more than 48 hours before your confirmed departure slot are fully refundable. Within 48 hours, the reserved slot is subject to an operational charge as advised at confirmation." },
  { h: "Late Arrival", p: "Departure slots are fixed by airport coordination. Guests arriving after check-in closes may not be able to fly, and the slot is treated as a no-show." },
  { h: "No-Show", p: "Failure to arrive for a confirmed slot without notice is non-refundable, as the aircraft and crew are held exclusively for your booking." },
  { h: "Route Changes", p: "Air traffic control may alter routing or altitude at any time. Such adjustments do not constitute a cancellation and are not refundable." },
];

function PolicyPage() {
  return (
    <main className="bg-onyx text-foreground">
      <SiteHeader />
      <PageHero eyebrow="Policies" title="Cancellation & Weather Policy" subtitle="Safety decisions are never negotiable — and you are never penalised for them." />
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-3xl space-y-8">
          {blocks.map((b) => (
            <div key={b.h} className="rounded-2xl border border-gold/25 bg-charcoal/50 p-7">
              <h2 className="font-serif text-2xl text-gradient-gold">{b.h}</h2>
              <p className="mt-3 leading-relaxed text-foreground/75">{b.p}</p>
            </div>
          ))}
          <Link to="/refund" className="inline-block text-sm text-[var(--gold-bright)] underline underline-offset-4">
            See full refund policy
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
