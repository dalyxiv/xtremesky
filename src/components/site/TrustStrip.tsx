import { Eyebrow, StatCard } from "@/components/site/blocks";
import { useReveal } from "@/hooks/use-reveal";
import { HOME_STATS } from "@/lib/site-content";

export function TrustStrip() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="why-fly" ref={ref} className="scroll-mt-24 border-y border-[var(--border-hairline)] bg-surface-alt/60 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <div className="reveal">
            <Eyebrow>How we operate</Eyebrow>
          </div>
          <h2 className="reveal mt-4 font-serif text-3xl text-white md:text-5xl">Numbers before adjectives</h2>
          <p className="reveal mt-4 text-[17px] leading-[1.7] text-foreground/65">
            Four figures that describe this operation more usefully than any superlative could.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {HOME_STATS.map((s) => (
            <div key={s.label} className="reveal">
              <StatCard figure={s.figure} label={s.label} desc={s.desc} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
