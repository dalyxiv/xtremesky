import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Clock, MapPin, Users } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { CurrencyDisclaimer, useCurrency } from "@/lib/currency";
import { TOUR_LIST } from "@/lib/tours";
import heroImg from "@/assets/heli-3.jpeg";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Helicopter Experiences Over Cairo & Giza — Xtreme Sky Egypt" },
      {
        name: "description",
        content:
          "Compare our Gold Pyramids Flight and Platinum Cairo Flight: durations, landmarks, inclusions and route maps for private helicopter tours over Giza.",
      },
      { property: "og:title", content: "Helicopter Experiences Over Cairo & Giza" },
      {
        property: "og:description",
        content: "Two signature aerial journeys above the Pyramids, Saqqara, the GEM and the Nile.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExperiencesPage,
});

function ExperiencesPage() {
  const { format } = useCurrency();

  return (
    <main className="bg-onyx text-foreground">
      <SiteHeader />
      <PageHero
        eyebrow="Our Experiences"
        title="Two Signature Aerial Journeys"
        subtitle="Choose the iconic 15-minute Giza discovery or the complete 25-minute Cairo heritage panorama. Both fly with a maximum of four passengers."
        image={heroImg}
      />

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          {TOUR_LIST.map((t) => (
            <article
              key={t.key}
              className="hover-lift relative overflow-hidden rounded-2xl border border-gold/30 bg-charcoal/60 p-8 transition hover:border-[var(--gold)] hover:glow-gold"
            >
              {t.badge && (
                <span className="absolute right-4 top-4 rounded-full bg-[var(--gold)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[var(--onyx)]">
                  {t.badge}
                </span>
              )}
              <p className="text-xs uppercase tracking-[0.4em] text-[var(--gold-bright)]">{t.name}</p>
              <h2 className="mt-3 font-serif text-3xl text-gradient-gold">{t.subtitle}</h2>

              <div className="mt-5 flex flex-wrap gap-4 text-sm text-foreground/75">
                <span className="inline-flex items-center gap-2">
                  <Clock className="size-4 text-[var(--gold-bright)]" /> {t.duration}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Users className="size-4 text-[var(--gold-bright)]" /> Up to 4 passengers
                </span>
              </div>

              <div className="mt-6 rounded-xl border border-gold/25 bg-onyx/60 p-5">
                <p className="font-serif text-2xl text-gradient-gold">
                  {format(t.seatPriceUsd)}
                  <span className="text-sm text-foreground/60"> / seat</span>
                </p>
                <p className="mt-1 text-sm text-foreground/70">
                  Private charter from {format(t.charterPriceUsd)}
                </p>
              </div>

              <ul className="mt-6 space-y-2.5 text-sm text-foreground/85">
                {[...t.highlights, ...t.features].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-[var(--gold-bright)]" /> {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to={t.path}
                  className="inline-flex rounded-full bg-gradient-to-r from-[var(--gold-bright)] to-[var(--gold)] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[var(--onyx)] transition hover:shadow-[0_0_30px_-4px_var(--gold)]"
                >
                  View Full Details
                </Link>
                <Link
                  to="/book"
                  search={{ route: t.key }}
                  className="inline-flex rounded-full border border-gold/40 px-6 py-3 text-xs uppercase tracking-widest text-[var(--gold-bright)] transition hover:border-[var(--gold)] hover:text-white"
                >
                  Check Availability
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-6 max-w-6xl">
          <CurrencyDisclaimer />
        </div>
      </section>

      <section id="route-maps" className="scroll-mt-24 border-t border-gold/15 bg-charcoal/40 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.5em] text-[var(--gold-bright)]">Route Maps</p>
          <h2 className="mt-4 font-serif text-3xl text-gradient-gold md:text-4xl">Where You Fly</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {TOUR_LIST.map((t) => (
              <div key={t.key} className="rounded-2xl border border-gold/25 bg-onyx/60 p-7">
                <h3 className="font-serif text-2xl text-gradient-gold">{t.name}</h3>
                <ol className="mt-5 space-y-4">
                  {["Heliport departure", ...t.highlights, "Heliport arrival"].map((s, i) => (
                    <li key={s} className="flex items-start gap-3">
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[var(--gold)] text-[10px] font-bold text-[var(--onyx)]">
                        {i + 1}
                      </span>
                      <span className="text-sm text-foreground/85">{s}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 flex items-start gap-2 text-xs italic text-foreground/55">
                  <MapPin className="mt-0.5 size-3.5 shrink-0" />
                  Illustrative sequence only. Final flight path follows air traffic control clearance.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
