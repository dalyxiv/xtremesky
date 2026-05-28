import { useEffect, useState } from "react";
import logo from "@/assets/logo.jpeg";

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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Xtreme Sky Egypt"
            className="size-12 md:size-14 rounded-full object-cover ring-1 ring-white/30 shadow-[0_0_25px_-5px_rgba(255,255,255,0.4)]"
          />
          <span className="hidden sm:block font-serif text-lg md:text-xl tracking-[0.28em] font-semibold text-white">
            XTREME SKY
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-foreground/80">
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#routes" className="hover:text-white transition">Routes</a>
          <a href="#booking" className="hover:text-white transition">Booking</a>
          <a href="#vip" className="hover:text-white transition">VIP</a>
        </nav>
        <a
          href="#routes"
          className="relative inline-flex items-center rounded-full border border-white/60 px-5 py-2 text-sm uppercase tracking-widest text-white transition hover:bg-white hover:text-[var(--onyx)] hover:shadow-[0_0_30px_-2px_rgba(255,255,255,0.6)]"
        >
          Book Now
        </a>
      </div>
    </header>
  );
}
