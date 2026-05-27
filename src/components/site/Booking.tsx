import { Users, Users2, PlaneTakeoff } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const opts = [
  { icon: PlaneTakeoff, title: "Private Flight", desc: "Book the entire helicopter for your group (1 to 4 passengers)." },
  { icon: Users2, title: "Shared Flight", desc: "Book your seat and fly with other guests." },
  { icon: Users, title: "Guaranteed Departure", desc: "Don't want to wait? Pay for empty seats and fly on your time." },
];

export function Booking() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="booking" ref={ref} className="py-28 px-6 bg-onyx">
      <div className="mx-auto max-w-7xl text-center mb-14">
        <p className="reveal text-xs uppercase tracking-[0.5em] text-[var(--gold)] mb-4">Flexibility</p>
        <h2 className="reveal font-serif text-4xl md:text-6xl text-gradient-gold">Booking Options</h2>
      </div>
      <div className="mx-auto max-w-6xl grid md:grid-cols-3 gap-6">
        {opts.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="reveal hover-lift rounded-2xl border border-gold/25 bg-charcoal/60 p-8 hover:border-[var(--gold)] hover:glow-gold">
            <div className="mb-5 grid size-14 place-items-center rounded-xl border border-gold/40 bg-onyx text-[var(--gold)]">
              <Icon className="size-6" />
            </div>
            <h3 className="font-serif text-2xl text-gradient-gold mb-3">{title}</h3>
            <p className="text-foreground/75 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
