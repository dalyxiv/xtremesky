import { Link } from "@tanstack/react-router";
import { Check, Clock, Users } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { CurrencyDisclaimer, useCurrency } from "@/lib/currency";
import { TOUR_LIST } from "@/lib/tours";

export function RouteCompare() {
  const ref = useReveal<HTMLDivElement>();
  const { format } = useCurrency();

  return (
    <section id="routes" ref={ref} className="scroll-mt-24 bg-onyx px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="reveal text-xs uppercase tracking-[0.5em] text-[var(--gold-bright)]">Choose Your Flight</p>
          <h2 className="reveal mt-4 font-serif text-3xl text-gradient-gold md:text-5xl">Gold or Platinum</h2>
          <p className="reveal mx-auto mt-4 max-w-2xl text-foreground/70">
            Two curated routes, one private cabin. Compare side by side and request the slot that suits your itinerary.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {TOUR_LIST.map((t) => (
            <article
              key={t.key}
              className="reveal hover-lift relative overflow-hidden rounded-2xl border border-gold/30 bg-charcoal/60 p-8 transition hover:border-[var(--gold)] hover:glow-gold"
            >
              {t.badge && (
                <span className="absolute right-4 top-4 rounded-full bg-[var(--gold)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[var(--onyx)]">
                  Most Popular
                </span>
              )}
              <p className="text-xs uppercase tracking-[0.4em] text-[var(--gold-bright)]">{t.name}</p>
              <h3 className="mt-3 font-serif text-3xl text-gradient-gold">{t.subtitle}</h3>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-foreground/75">
                <span className="inline-flex items-center gap-2"><Clock className="size-4 text-[var(--gold-bright)]" /> {t.duration}</span>
                <span className="inline-flex items-center gap-2"><Users className="size-4 text-[var(--gold-bright)]" /> Up to 4 guests</span>
              </div>
              <p className="mt-6 font-serif text-3xl text-gradient-gold">
                {format(t.seatPriceUsd)}<span className="text-base text-foreground/60"> / seat</span>
              </p>
              <p className="mt-1 text-sm text-foreground/70">Private charter from {format(t.charterPriceUsd)}</p>
              <ul className="mt-6 space-y-2.5 text-sm text-foreground/85">
                {t.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-[var(--gold-bright)]" /> {h}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/book"
                  search={{ route: t.key }}
                  className="inline-flex rounded-full bg-gradient-to-r from-[var(--gold-bright)] to-[var(--gold)] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[var(--onyx)] transition hover:shadow-[0_0_30px_-4px_var(--gold)]"
                >
                  Check Availability
                </Link>
                <Link
                  to={t.path}
                  className="inline-flex rounded-full border border-gold/40 px-6 py-3 text-xs uppercase tracking-widest text-[var(--gold-bright)] transition hover:border-[var(--gold)] hover:text-white"
                >
                  Full Details
                </Link>
              </div>
            </article>
          ))}
        </div>
        <CurrencyDisclaimer className="mt-6 text-center" />
      </div>
    </section>
  );
}
