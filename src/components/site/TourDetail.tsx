import { Link } from "@tanstack/react-router";
import { Check, Plus } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import {
  AccuracyNote,
  Eyebrow,
  FaqAccordion,
  PlanWithConfidence,
  RouteDiagram,
  StatCard,
  StepList,
} from "@/components/site/blocks";
import { CurrencyDisclaimer, useCurrency } from "@/lib/currency";
import type { TourRoute } from "@/lib/tours";
import { ROUTE_DIAGRAMS, TOUR_MINI_FAQS, GUEST_JOURNEY } from "@/lib/site-content";
import shot1 from "@/assets/heli-2.jpeg";
import shot2 from "@/assets/heli-4.jpeg";
import shot3 from "@/assets/heli-6.jpeg";

export function TourDetail({ tour, image, other }: { tour: TourRoute; image: string; other: TourRoute }) {
  const { format } = useCurrency();
  const photos = [shot1, shot2, shot3];

  return (
    <main className="bg-onyx text-foreground">
      <SiteHeader />
      <PageHero
        eyebrow={tour.name}
        title={tour.subtitle}
        subtitle={`${tour.duration} airborne over Egypt's most documented landmarks, flown with a maximum of four passengers.`}
        image={image}
      />

      <div className="mx-auto max-w-5xl space-y-14 px-6 pb-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard figure={format(tour.seatPriceUsd)} label="Per shared seat" desc="Published price, per passenger." />
          <StatCard figure={String(tour.minutes)} label="Minutes airborne" desc="Excluding check-in and briefing time." />
          <StatCard figure="04" label="Passenger seats" desc="One cabin, never a rotating group." />
          <StatCard
            figure={format(tour.charterPriceUsd)}
            label="Private charter"
            desc="The whole cabin, however many guests fly."
          />
        </div>
        <CurrencyDisclaimer />

        <section className="space-y-5">
          <Eyebrow>Landmark highlights</Eyebrow>
          <h2 className="font-serif text-3xl text-white">What passes beneath the cabin</h2>
          <ol className="grid gap-4 sm:grid-cols-2">
            {tour.highlights.map((h, i) => (
              <li
                key={h}
                className="flex items-start gap-4 rounded-md border border-[var(--border-hairline)] bg-charcoal/40 p-5"
              >
                <span className="font-mono text-sm tabular-nums text-[var(--gold-bright)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-foreground/85">{h}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="space-y-5">
          <Eyebrow>Indicative route</Eyebrow>
          <h2 className="font-serif text-3xl text-white">Planned corridor</h2>
          <RouteDiagram
            stops={ROUTE_DIAGRAMS[tour.key]}
            note="Indicative only. The flown track is determined by air traffic control clearance and weather on the day."
          />
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          {photos.map((p, i) => (
            <img
              key={p}
              src={p}
              alt={`${tour.subtitle} operational photograph ${i + 1}`}
              loading="lazy"
              className="h-56 w-full rounded-md border border-[var(--border-hairline)] object-cover"
            />
          ))}
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <Eyebrow>Included</Eyebrow>
            <ul className="space-y-3">
              {tour.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                  <Check className="mt-0.5 size-4 shrink-0 text-[var(--gold-bright)]" /> {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <Eyebrow>Optional upgrades</Eyebrow>
            <ul className="space-y-3">
              {(tour.upgrades ?? []).map((u) => (
                <li key={u} className="flex items-start gap-2 text-sm text-foreground/80">
                  <Plus className="mt-0.5 size-4 shrink-0 text-[var(--gold-bright)]" /> {u}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-5">
          <Eyebrow>Your journey</Eyebrow>
          <StepList steps={GUEST_JOURNEY} />
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <div className="rounded-md border border-[var(--border-hairline)] bg-charcoal/40 p-6">
            <h3 className="font-serif text-xl text-white">Passenger requirements</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/65">
              Identification, ages and individual weights are collected before departure for manifest and load
              planning.
            </p>
            <Link to="/passenger-requirements" className="mt-4 inline-block text-sm text-[var(--gold-bright)] underline underline-offset-4">
              Read the requirements
            </Link>
          </div>
          <div className="rounded-md border border-[var(--border-hairline)] bg-charcoal/40 p-6">
            <h3 className="font-serif text-xl text-white">Cancellation & weather</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/65">
              Weather or airspace cancellations carry no penalty: you are rescheduled or refunded in full.
            </p>
            <Link to="/refund" className="mt-4 inline-block text-sm text-[var(--gold-bright)] underline underline-offset-4">
              Read the policy
            </Link>
          </div>
        </section>

        <section className="rounded-md border border-[var(--border-hairline)] bg-charcoal/30 p-6">
          <Eyebrow>Guest reviews</Eyebrow>
          <p className="mt-3 text-sm leading-relaxed text-foreground/65">
            We do not publish testimonials we cannot link to a verified public source. Reviews will appear here once
            they can be attributed to a Google or TripAdvisor profile.
          </p>
        </section>

        <section className="space-y-5">
          <Eyebrow>Questions about this experience</Eyebrow>
          <FaqAccordion items={TOUR_MINI_FAQS[tour.key]} />
        </section>

        <section className="rounded-md border border-gold/25 bg-charcoal/50 p-7">
          <Eyebrow>Compare</Eyebrow>
          <h3 className="mt-3 font-serif text-2xl text-gradient-gold">{other.subtitle}</h3>
          <p className="mt-2 text-sm text-foreground/70">
            {other.duration} airborne from {format(other.seatPriceUsd)} per seat.
          </p>
          <Link to={other.path} className="mt-4 inline-block text-sm text-[var(--gold-bright)] underline underline-offset-4">
            View {other.name}
          </Link>
        </section>

        <PlanWithConfidence title={`Request ${tour.subtitle}`} />
        <AccuracyNote />
      </div>

      <SiteFooter />
    </main>
  );
}
