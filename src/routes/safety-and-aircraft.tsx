import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, CloudSun, Gauge, Headphones, ShieldCheck, Users } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import img from "@/assets/heli-2.jpeg";

export const Route = createFileRoute("/safety-and-aircraft")({
  head: () => ({
    meta: [
      { title: "Safety & Aircraft Standards — Xtreme Sky Egypt" },
      {
        name: "description",
        content:
          "How we operate: certified crews, maintenance discipline, weather go/no-go criteria, passenger weight-and-balance planning and pre-flight briefings.",
      },
      { property: "og:title", content: "Safety & Aircraft Standards" },
      {
        property: "og:description",
        content: "Transparency on crews, maintenance, weather criteria and cabin procedures.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SafetyPage,
});

const pillars = [
  { icon: BadgeCheck, title: "Certified Crew", desc: "Every flight is commanded by a professionally licensed pilot experienced in Cairo and Giza airspace, operating under authorized commercial procedures." },
  { icon: Gauge, title: "Maintenance Discipline", desc: "Aircraft follow scheduled manufacturer and regulatory maintenance programs, with documented pre-flight inspections before every departure." },
  { icon: CloudSun, title: "Weather Go / No-Go", desc: "Wind, visibility, temperature and dust conditions are assessed against defined limits. If criteria are not met, we reschedule — never compromise." },
  { icon: Users, title: "Weight & Balance", desc: "Passenger weights are collected discreetly in advance so seating and payload stay inside certified limits for the cabin." },
  { icon: Headphones, title: "Cabin Procedures", desc: "Noise-canceling headsets, seatbelt checks, boarding escort and emergency briefing are standard for all passengers before engine start." },
  { icon: ShieldCheck, title: "Authority Clearance", desc: "Routes operate strictly inside approved corridors. Air traffic control instructions always take precedence over the illustrated flight path." },
];

function SafetyPage() {
  return (
    <main className="bg-onyx text-foreground">
      <SiteHeader />
      <PageHero
        eyebrow="Safety First"
        title="Safety & Aircraft Standards"
        subtitle="Luxury means nothing without discipline. Here is exactly how we protect every guest who boards with us."
        image={img}
      />
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="hover-lift rounded-2xl border border-gold/25 bg-charcoal/55 p-7 transition hover:border-[var(--gold)]">
              <div className="mb-5 grid size-12 place-items-center rounded-xl border border-gold/40 bg-onyx text-[var(--gold-bright)]">
                <Icon className="size-5" />
              </div>
              <h2 className="font-serif text-xl text-gradient-gold">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">{desc}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-6xl rounded-2xl border border-gold/25 bg-charcoal/40 p-8">
          <h2 className="font-serif text-2xl text-gradient-gold">Before You Fly</h2>
          <ul className="mt-5 grid gap-3 text-sm text-foreground/80 md:grid-cols-2">
            <li>Arrive 45 minutes before your scheduled departure slot.</li>
            <li>Bring a valid passport or national ID matching your booking name.</li>
            <li>Wear flat, secure footwear and avoid loose hats or scarves.</li>
            <li>Follow all crew instructions on the helipad at all times.</li>
            <li>Declare medical conditions or mobility needs when booking.</li>
            <li>Children must be accompanied by a responsible adult.</li>
          </ul>
          <Link
            to="/book"
            className="mt-8 inline-flex rounded-full bg-gradient-to-r from-[var(--gold-bright)] to-[var(--gold)] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[var(--onyx)] transition hover:shadow-[0_0_30px_-4px_var(--gold)]"
          >
            Check Availability
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
