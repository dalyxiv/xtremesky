import { Link } from "@tanstack/react-router";
import { Eyebrow, RouteDiagram } from "@/components/site/blocks";
import { ROUTE_DIAGRAMS } from "@/lib/site-content";

export function RouteTeaser() {
  return (
    <section className="border-t border-[var(--border-hairline)] bg-onyx px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Eyebrow>Indicative flight routes</Eyebrow>
        <h2 className="mt-4 font-serif text-3xl text-white md:text-4xl">The corridor we plan to fly</h2>
        <p className="mt-4 text-[17px] leading-[1.7] text-foreground/65">
          Departure, plateau, monuments, return. What is flown on the day is set by clearance and weather, and we label
          it that way rather than promising a fixed track.
        </p>
        <div className="mt-8">
          <RouteDiagram stops={ROUTE_DIAGRAMS.gold} />
        </div>
        <Link to="/flight-routes" className="mt-6 inline-block text-sm text-[var(--gold-bright)] underline underline-offset-4">
          See both route maps
        </Link>
      </div>
    </section>
  );
}
