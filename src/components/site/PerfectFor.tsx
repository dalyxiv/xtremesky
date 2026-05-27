import { Heart, Users, Crown, Gem, PartyPopper } from "lucide-react";
import img from "@/assets/heli-6.jpeg";
import { useReveal } from "@/hooks/use-reveal";

const icons = [
  { icon: Heart, label: "Couples" },
  { icon: Users, label: "Families" },
  { icon: Crown, label: "VIP Guests" },
  { icon: Gem, label: "Proposals" },
  { icon: PartyPopper, label: "Celebrations" },
];

export function PerfectFor() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={img} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-onyx via-onyx/85 to-onyx/40" />
      </div>
      <div className="mx-auto max-w-4xl px-6">
        <p className="reveal text-xs uppercase tracking-[0.5em] text-[var(--gold)] mb-4">Perfect For</p>
        <h2 className="reveal font-serif text-3xl md:text-5xl text-gradient-gold leading-tight mb-8">
          A breathtaking proposal, a romantic sunset flight, or a memorable family adventure — crafted for you.
        </h2>
        <div className="reveal flex flex-wrap gap-4">
          {icons.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 rounded-full border border-gold/30 bg-onyx/70 px-4 py-2 text-sm text-[var(--gold)]">
              <Icon className="size-4" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
