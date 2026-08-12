import { Star } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { REVIEWS } from "@/lib/tours";

export function ReviewsStrip() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="bg-onyx px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="reveal text-xs uppercase tracking-[0.5em] text-[var(--gold-bright)]">Guest Stories</p>
          <h2 className="reveal mt-4 font-serif text-3xl text-gradient-gold md:text-5xl">Flown & Remembered</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="reveal hover-lift rounded-2xl border border-gold/20 bg-charcoal/55 p-7">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-[var(--gold)] text-[var(--gold)]" />
                ))}
              </div>
              <blockquote className="mt-4 font-serif text-lg leading-relaxed text-white">“{r.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-foreground/65">
                <span className="text-[var(--gold-bright)]">{r.name}</span> · {r.meta}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
