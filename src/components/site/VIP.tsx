import { Star, Martini, Camera, CalendarClock, Headphones, Award, Car } from "lucide-react";
import img from "@/assets/heli-3.jpeg";
import { useReveal } from "@/hooks/use-reveal";

const items = [
  { icon: Star, label: "Priority Boarding" },
  { icon: Martini, label: "VIP Lounge Access" },
  { icon: Camera, label: "Professional Photos & Video" },
  { icon: CalendarClock, label: "Flexible Scheduling" },
  { icon: Headphones, label: "Pilot Commentary in English" },
  { icon: Award, label: "Certificate & Souvenir Pass" },
  { icon: Car, label: "Optional Luxury Car Transfer" },
];

export function VIP() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="vip" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={img} alt="" className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx via-onyx/85 to-onyx" />
      </div>
      <div className="mx-auto max-w-7xl px-6 text-center mb-14">
        <p className="reveal text-xs uppercase tracking-[0.5em] text-[var(--gold)] mb-4">Inclusions</p>
        <h2 className="reveal font-serif text-4xl md:text-6xl text-gradient-gold">The VIP Experience</h2>
      </div>

      <div className="relative">
        <div className="flex gap-6 animate-marquee whitespace-nowrap" style={{ width: "max-content" }}>
          {[...items, ...items].map(({ icon: Icon, label }, i) => (
            <div key={i} className="inline-flex items-center gap-3 rounded-full border border-gold/30 bg-charcoal/60 px-6 py-3 text-[var(--gold)]">
              <Icon className="size-5" />
              <span className="text-sm uppercase tracking-widest">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
