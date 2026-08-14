import { Link } from "@tanstack/react-router";
import { Eyebrow } from "@/components/site/blocks";
import { OCCASIONS } from "@/lib/site-content";

export function PerfectFor() {
  return (
    <section className="border-t border-[var(--border-hairline)] bg-onyx px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Eyebrow>Occasions</Eyebrow>
        <h2 className="mt-4 font-serif text-3xl text-white md:text-4xl">Who books these flights</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {OCCASIONS.map((o) => (
            <span
              key={o}
              className="rounded border border-[var(--border-hairline)] bg-charcoal/50 px-4 py-2 text-sm text-foreground/80"
            >
              {o}
            </span>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-md border border-[var(--border-hairline)] bg-charcoal/40 p-6">
            <h3 className="font-serif text-xl text-white">Proposals & celebrations</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/65">
              Private cabins, seating arranged for the view and crew briefed on the occasion.
            </p>
            <Link to="/proposals-celebrations" className="mt-4 inline-block text-sm text-[var(--gold-bright)] underline underline-offset-4">
              Plan an occasion
            </Link>
          </div>
          <div className="rounded-md border border-[var(--border-hairline)] bg-charcoal/40 p-6">
            <h3 className="font-serif text-xl text-white">Travel trade & DMC partners</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/65">
              Manifest-based booking, sequenced departures and invoicing against approved passenger lists.
            </p>
            <Link to="/groups-dmc" className="mt-4 inline-block text-sm text-[var(--gold-bright)] underline underline-offset-4">
              Trade information
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
