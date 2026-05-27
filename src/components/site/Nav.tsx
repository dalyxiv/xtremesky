import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-onyx/80 border-b border-gold/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-serif text-xl md:text-2xl tracking-[0.25em] text-gradient-gold">
          XTREME SKY EGYPT
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-foreground/80">
          <a href="#experience" className="hover:text-[var(--gold)] transition">Experience</a>
          <a href="#routes" className="hover:text-[var(--gold)] transition">Routes</a>
          <a href="#booking" className="hover:text-[var(--gold)] transition">Booking</a>
          <a href="#vip" className="hover:text-[var(--gold)] transition">VIP</a>
        </nav>
        <a
          href="#routes"
          className="relative inline-flex items-center rounded-full border border-gold/60 px-5 py-2 text-sm uppercase tracking-widest text-[var(--gold)] transition hover:bg-[var(--gold)] hover:text-[var(--onyx)] hover:shadow-[0_0_30px_-2px_var(--gold)]"
        >
          Book Now
        </a>
      </div>
    </header>
  );
}
