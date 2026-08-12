import { Link } from "@tanstack/react-router";
import { BadgeCheck, CloudSun, Gauge, ShieldCheck } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const items = [
  { icon: BadgeCheck, title: "Licensed crew", desc: "Experienced pilots in Cairo airspace." },
  { icon: Gauge, title: "Maintained fleet", desc: "Documented pre-flight inspections." },
  { icon: CloudSun, title: "Weather limits", desc: "Defined go / no-go criteria." },
  { icon: ShieldCheck, title: "Authorized routes", desc: "Approved corridors and ATC clearance." },
];

export function SafetyPreview() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="border-y border-gold/15 bg-charcoal/40 px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p className="reveal text-xs uppercase tracking-[0.5em] text-[var(--gold-bright)]">Safety First</p>
          <h2 className="reveal mt-4 font-serif text-3xl text-gradient-gold md:text-4xl">
            Luxury Means Nothing Without Discipline
          </h2>
          <p className="reveal mt-5 leading-relaxed text-foreground/75">
            Every flight follows structured operational standards — from crew licensing and maintenance records to
            weather criteria and passenger weight-and-balance planning.
          </p>
          <Link
            to="/safety-and-aircraft"
            className="reveal mt-7 inline-flex rounded-full border border-gold/40 px-6 py-3 text-xs uppercase tracking-widest text-[var(--gold-bright)] transition hover:border-[var(--gold)] hover:text-white"
          >
            Read Our Safety Standards
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="reveal rounded-2xl border border-gold/20 bg-onyx/60 p-6">
              <Icon className="size-5 text-[var(--gold-bright)]" />
              <h3 className="mt-3 font-serif text-lg text-white">{title}</h3>
              <p className="mt-1 text-sm text-foreground/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
