import { Link } from "@tanstack/react-router";
import { Check, Clock, MapPin, ShieldCheck, Users } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { CurrencyDisclaimer, useCurrency } from "@/lib/currency";
import type { TourRoute } from "@/lib/tours";

const stages = [
  { title: "Arrival & VIP Lounge", desc: "Arrive 45 minutes early, relax in the lounge and complete check-in." },
  { title: "Safety Briefing", desc: "Your crew walks you through boarding, headsets and cabin procedures." },
  { title: "Boarding", desc: "Escorted to the helipad and seated for optimal window views." },
  { title: "The Flight", desc: "Live English commentary as the ancient skyline unfolds beneath you." },
  { title: "Landing & Farewell", desc: "Return to the lounge for refreshments and your flight certificate." },
];

export function TourDetail({ tour, image, other }: { tour: TourRoute; image: string; other: TourRoute }) {
  const { format } = useCurrency();

  return (
    <main className="bg-onyx text-foreground">
      <SiteHeader />
      <PageHero eyebrow={tour.name} title={tour.subtitle} subtitle={`${tour.duration} of uninterrupted aerial perspective over Egypt's most iconic landmarks.`} image={image} />

      <section className="px-6 pb-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-8">
            <div className="rounded-2xl border border-gold/25 bg-charcoal/50 p-7">
              <h2 className="font-serif text-2xl text-gradient-gold">What You See</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {tour.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-foreground/85">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--gold-bright)]" /> {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-gold/25 bg-charcoal/50 p-7">
              <h2 className="font-serif text-2xl text-gradient-gold">What's Included</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {tour.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground/85">
                    <Check className="mt-0.5 size-4 shrink-0 text-[var(--gold-bright)]" /> {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-gold/25 bg-charcoal/50 p-7">
              <h2 className="font-serif text-2xl text-gradient-gold">Your Experience, Stage By Stage</h2>
              <ol className="mt-6 space-y-5">
                {stages.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full border border-gold/50 text-xs font-bold text-[var(--gold-bright)]">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-medium text-white">{s.title}</p>
                      <p className="text-sm text-foreground/70">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <aside className="h-fit space-y-5 rounded-2xl border border-gold/35 bg-charcoal/70 p-7 lg:sticky lg:top-28">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--gold-bright)]">From</p>
              <p className="mt-2 font-serif text-4xl text-gradient-gold">
                {format(tour.seatPriceUsd)}
                <span className="text-base text-foreground/60"> / seat</span>
              </p>
              <p className="mt-1 text-sm text-foreground/70">
                Private charter from {format(tour.charterPriceUsd)} (whole helicopter)
              </p>
            </div>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li className="flex items-center gap-2">
                <Clock className="size-4 text-[var(--gold-bright)]" /> {tour.duration} airborne
              </li>
              <li className="flex items-center gap-2">
                <Users className="size-4 text-[var(--gold-bright)]" /> Maximum 4 passengers
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-[var(--gold-bright)]" /> Certified crew & briefing
              </li>
            </ul>
            <Link
              to="/book"
              search={{ route: tour.key }}
              className="block rounded-full bg-gradient-to-r from-[var(--gold-bright)] to-[var(--gold)] px-6 py-3 text-center text-xs font-semibold uppercase tracking-widest text-[var(--onyx)] transition hover:shadow-[0_0_30px_-4px_var(--gold)]"
            >
              Check Availability
            </Link>
            <Link
              to={other.path}
              className="block rounded-full border border-gold/40 px-6 py-3 text-center text-xs uppercase tracking-widest text-[var(--gold-bright)] transition hover:border-[var(--gold)] hover:text-white"
            >
              Compare with {other.name}
            </Link>
            <CurrencyDisclaimer />
          </aside>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
