import { Eye, Crown, ShieldCheck, Sparkles, Gem } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import img from "@/assets/heli-2.jpeg";

const features = [
  { icon: Eye, label: "Breathtaking Views" },
  { icon: Crown, label: "Exclusive Experience" },
  { icon: ShieldCheck, label: "Safety First" },
  { icon: Sparkles, label: "Luxury Comfort" },
  { icon: Gem, label: "VIP Service" },
];

export function Experience() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="experience" ref={ref} className="relative py-28 px-6 bg-onyx">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <div className="relative overflow-hidden rounded-2xl border border-gold/30 glow-gold">
            <img src={img} alt="Helicopter at Giza Heliport with pyramids" className="w-full h-[520px] object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-tr from-onyx/60 to-transparent" />
          </div>
        </div>
        <div>
          <p className="reveal text-xs uppercase tracking-[0.5em] text-[var(--gold)] mb-4">The Experience</p>
          <h2 className="reveal font-serif text-4xl md:text-6xl text-gradient-gold mb-6">
            Safety. Silence. Sky.
          </h2>
          <p className="reveal text-foreground/80 leading-relaxed text-lg mb-6">
            Enjoy a safe, comfortable helicopter ride with our certified pilots. We offer
            daily availability with flights operating during an exclusive 2-hour window
            to capture the perfect light.
          </p>
          <div className="reveal inline-flex items-center gap-3 rounded-full border border-gold/40 bg-charcoal/60 px-5 py-2.5 text-sm tracking-wide text-[var(--gold)] mb-10">
            <Crown className="size-4" />
            Only 4 Seats Per Flight — Private · Exclusive · Unforgettable
          </div>
        </div>
      </div>

      <div ref={useReveal<HTMLDivElement>()} className="mx-auto max-w-7xl mt-20 grid grid-cols-2 md:grid-cols-5 gap-6">
        {features.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="reveal hover-lift group flex flex-col items-center text-center rounded-xl border border-gold/20 bg-charcoal/50 p-6 hover:border-gold/60 hover:glow-gold"
          >
            <div className="mb-3 grid size-14 place-items-center rounded-full border border-gold/40 bg-onyx text-[var(--gold)] group-hover:scale-110 transition">
              <Icon className="size-6" />
            </div>
            <p className="text-sm uppercase tracking-widest text-[var(--gold)]">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
