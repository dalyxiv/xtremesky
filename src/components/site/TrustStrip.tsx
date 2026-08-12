import { BadgeCheck, CloudSun, Headphones, Lock, ShieldCheck, Users } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { TRUST_ITEMS } from "@/lib/tours";

const icons = { ShieldCheck, BadgeCheck, Users, Headphones, Lock, CloudSun } as const;

export function TrustStrip() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="why-fly" ref={ref} className="scroll-mt-24 border-y border-gold/15 bg-charcoal/40 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="reveal text-xs uppercase tracking-[0.5em] text-[var(--gold-bright)]">Why Fly With Us</p>
          <h2 className="reveal mt-4 font-serif text-3xl text-gradient-gold md:text-5xl">Trust Built Into Every Flight</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_ITEMS.map((t) => {
            const Icon = icons[t.icon];
            return (
              <article key={t.title} className="reveal hover-lift rounded-2xl border border-gold/20 bg-onyx/60 p-6 transition hover:border-[var(--gold)]">
                <Icon className="size-6 text-[var(--gold-bright)]" />
                <h3 className="mt-4 font-serif text-lg text-white">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{t.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
