import { useEffect, useRef } from "react";
import heroImg from "@/assets/heli-1.jpeg";

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return;
      const y = window.scrollY;
      bgRef.current.style.transform = `translate3d(0, ${y * 0.35}px, 0) scale(1.1)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative h-screen min-h-[680px] w-full overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 -z-10 bg-cover bg-center will-change-transform blur-sm scale-110"
        style={{ backgroundImage: `url(${heroImg})`, filter: "blur(6px) brightness(0.75)" }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-onyx/80 via-onyx/55 to-onyx" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 text-xs md:text-sm uppercase tracking-[0.6em] text-[var(--gold)]/90 animate-[fade-up_1s_ease-out]">
          Private Helicopter Tours · Giza
        </p>
        <h1
          className="font-serif text-6xl md:text-8xl lg:text-9xl text-gradient-gold animate-[fade-up_1.2s_ease-out]"
          style={{
            textShadow: "0 0 80px oklch(0.82 0.14 85 / 0.5)",
          }}
        >
          Cairo From Above
        </h1>
        <p className="mt-8 max-w-2xl text-base md:text-lg text-foreground/85 animate-[fade-up_1.4s_ease-out]">
          Experience a rare aerial perspective of both ancient wonders and modern Cairo.
          Unforgettable. Exclusive. Yours.
        </p>
        <a
          href="#routes"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--gold-bright)] to-[var(--gold)] px-10 py-4 text-sm uppercase tracking-[0.3em] font-semibold text-[var(--onyx)] animate-pulse-glow"
        >
          Choose Your Route
        </a>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[var(--gold)]/70 text-xs uppercase tracking-[0.4em]">
          Scroll
        </div>
      </div>
    </section>
  );
}
