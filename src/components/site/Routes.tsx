import { Check, Plane } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const gold = [
  "The Pyramids of Giza",
  "The Great Sphinx",
  "The Step Pyramid of Djoser (Saqqara)",
  "VIP Lounge Access",
  "Drinks & Snacks",
];
const platinum = [
  "The Pyramids of Giza",
  "The Great Sphinx",
  "The Step Pyramid of Djoser (Saqqara)",
  "The Grand Egyptian Museum (GEM)",
  "The Nile River",
  "VIP Lounge Access",
  "Drinks & Snacks",
];

function Timeline({ items, tone }: { items: string[]; tone: "gold" | "platinum" }) {
  const color = tone === "gold" ? "var(--gold)" : "var(--platinum)";
  return (
    <ol className="relative space-y-5 pl-8">
      <span className="absolute left-[11px] top-2 bottom-2 w-px" style={{ background: `linear-gradient(to bottom, ${color}, transparent)` }} />
      {items.map((s, i) => (
        <li key={s} className="relative">
          <span
            className="absolute -left-8 top-0.5 grid size-6 place-items-center rounded-full text-[10px] font-bold"
            style={{ background: color, color: "var(--onyx)" }}
          >
            {i + 1}
          </span>
          <p className="text-foreground/90">{s}</p>
        </li>
      ))}
    </ol>
  );
}

export function Routes() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="routes" ref={ref} className="relative py-28 px-6 bg-gradient-to-b from-onyx via-charcoal to-onyx">
      <div className="mx-auto max-w-7xl text-center mb-16">
        <p className="reveal text-xs uppercase tracking-[0.5em] text-[var(--gold)] mb-4">Flight Routes</p>
        <h2 className="reveal font-serif text-4xl md:text-6xl text-gradient-gold">Two Signature Journeys</h2>
        <p className="reveal mt-4 text-foreground/70 max-w-2xl mx-auto">
          Choose between an iconic express route or our grand VIP tour over the entire heart of Cairo.
        </p>
      </div>

      <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-8">
        {/* GOLD */}
        <article className="reveal hover-lift group relative overflow-hidden rounded-2xl border border-gold/40 bg-charcoal/70 p-8 md:p-10 transition hover:border-[var(--gold)] hover:glow-gold">
          <div className="absolute -top-24 -right-24 size-64 rounded-full bg-[var(--gold)]/10 blur-3xl" />
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[var(--gold)]">Gold Route</p>
              <h3 className="font-serif text-3xl md:text-4xl text-gradient-gold mt-2">15 Minutes</h3>
              <p className="text-foreground/70 mt-1">Quick & breathtaking</p>
            </div>
            <Plane className="size-10 text-[var(--gold)] -rotate-45" />
          </div>

          <div className="mb-8 rounded-xl border border-gold/30 bg-onyx/60 p-5">
            <p className="text-3xl font-serif text-gradient-gold">12500 EGP<span className="text-base text-foreground/60"> / person</span></p>
          </div>

          <Timeline items={gold} tone="gold" />

          <a href="#contact" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[var(--gold-bright)] to-[var(--gold)] px-6 py-3 text-sm uppercase tracking-[0.3em] font-semibold text-[var(--onyx)] hover:shadow-[0_0_40px_-2px_var(--gold)] transition">
            Book Your Flight
          </a>
        </article>

        {/* PLATINUM */}
        <article className="reveal hover-lift group relative overflow-hidden rounded-2xl border-2 p-8 md:p-10 transition hover:glow-platinum"
          style={{ borderColor: "var(--platinum)", background: "linear-gradient(180deg, oklch(0.18 0.005 270), oklch(0.14 0.005 270))" }}>
          <div className="absolute -top-24 -right-24 size-64 rounded-full bg-[var(--platinum)]/10 blur-3xl" />
          <div className="absolute top-4 right-4 rounded-full bg-[var(--platinum)] px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-[var(--onyx)]">
            Most Popular
          </div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[var(--platinum)]">Platinum Route</p>
              <h3 className="font-serif text-3xl md:text-4xl text-gradient-platinum mt-2">25 Minutes</h3>
              <p className="text-foreground/70 mt-1">The full experience</p>
            </div>
            <Plane className="size-10 text-[var(--platinum)] -rotate-45" />
          </div>

          <div className="mb-8 rounded-xl border border-[var(--platinum)]/40 bg-onyx/60 p-5">
            <p className="text-3xl font-serif text-gradient-platinum">18500 EGP<span className="text-base text-foreground/60"> / person</span></p>
          </div>

          <Timeline items={platinum} tone="platinum" />

          <a href="#contact" className="mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm uppercase tracking-[0.3em] font-semibold text-[var(--onyx)] transition hover:shadow-[0_0_40px_-2px_var(--platinum)]"
            style={{ background: "var(--gradient-platinum)" }}>
            Book Your Flight
          </a>
        </article>
      </div>
    </section>
  );
}
