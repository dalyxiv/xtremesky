import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { AccuracyNote, Eyebrow, PlanWithConfidence, RouteDiagram } from "@/components/site/blocks";
import { CurrencyDisclaimer, useCurrency } from "@/lib/currency";
import { TOUR_LIST } from "@/lib/tours";
import { ROUTE_DIAGRAMS } from "@/lib/site-content";
import heroImg from "@/assets/heli-3.jpeg";

export const Route = createFileRoute("/flight-routes")({
  head: () => ({
    meta: [
      { title: "Indicative Flight Routes Over Giza & Cairo — Xtreme Sky Egypt" },
      {
        name: "description",
        content:
          "Indicative helicopter routes over the Giza Plateau, Saqqara, the Grand Egyptian Museum and the Nile, with the conditions that determine the flown track.",
      },
      { property: "og:title", content: "Indicative Flight Routes Over Giza & Cairo" },
      {
        property: "og:description",
        content: "Planned corridors for both experiences, plus the clearance and weather conditions that apply.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FlightRoutesPage,
});

function FlightRoutesPage() {
  const { format } = useCurrency();

  return (
    <main className="bg-onyx text-foreground">
      <SiteHeader />
      <PageHero
        eyebrow="Flight routes"
        title="Indicative corridors, honestly labelled"
        subtitle="These are the routes we plan to fly. The track flown on the day is set by air traffic control clearance and weather."
        image={heroImg}
      />

      <div className="mx-auto max-w-4xl space-y-12 px-6 pb-24">
        <PlanWithConfidence />

        {TOUR_LIST.map((t) => (
          <section key={t.key} className="space-y-4">
            <Eyebrow>{t.name}</Eyebrow>
            <h2 className="font-serif text-2xl text-white md:text-3xl">{t.subtitle}</h2>
            <p className="text-[17px] leading-[1.7] text-foreground/70">
              {t.duration} airborne · {format(t.seatPriceUsd)} per shared seat · {format(t.charterPriceUsd)} private
              charter of the full cabin.
            </p>
            <RouteDiagram stops={ROUTE_DIAGRAMS[t.key]} />
            <Link to={t.path} className="inline-block text-sm text-[var(--gold-bright)] underline underline-offset-4">
              Full experience detail
            </Link>
          </section>
        ))}
        <CurrencyDisclaimer />

        <section className="space-y-4 rounded-md border border-[var(--border-hairline)] bg-charcoal/40 p-6">
          <Eyebrow>Route conditions</Eyebrow>
          <p className="text-sm leading-relaxed text-foreground/70">
            Altitudes, hold positions and turn points are assigned by air traffic control. Wind, visibility and dust
            can shorten, reroute or postpone a flight. Where a monument is not visible from the cleared corridor on a
            given day, we do not claim otherwise.
          </p>
        </section>

        <AccuracyNote />
      </div>

      <SiteFooter />
    </main>
  );
}
