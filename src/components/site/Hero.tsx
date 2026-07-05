import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/heli-1.jpeg";

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (bgRef.current) bgRef.current.style.transform = `translate3d(0, ${y * 0.35}px, 0) scale(1.1)`;
      if (sceneRef.current) sceneRef.current.style.transform = `translate3d(0, ${y * 0.15}px, 0)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative h-screen min-h-[680px] w-full overflow-hidden">
      {/* Blurred hero image */}
      <div
        ref={bgRef}
        className="absolute inset-0 -z-20 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url(${heroImg})`, filter: "blur(6px) brightness(0.55)" }}
      />
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-onyx/85 via-onyx/60 to-onyx" />

      {/* 3D Egypt scene */}
      <div
        ref={sceneRef}
        className="pointer-events-none absolute inset-0 -z-10 flex items-end justify-center will-change-transform"
        style={{ perspective: "1200px" }}
      >
        <div
          className="relative"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(58deg) rotateZ(-8deg)",
            width: "min(90vw, 1100px)",
            height: "60vh",
            marginBottom: "-8vh",
          }}
        >
          {/* Desert plane */}
          <div
            className="absolute inset-0 rounded-full opacity-70"
            style={{
              background:
                "radial-gradient(ellipse at 50% 40%, oklch(0.55 0.09 70 / 0.55), oklch(0.25 0.06 260 / 0) 65%)",
            }}
          />
          {/* Grid lines */}
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "linear-gradient(oklch(0.85 0.13 235 / 0.35) 1px, transparent 1px), linear-gradient(90deg, oklch(0.85 0.13 235 / 0.35) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
            }}
          />

          {/* Great Pyramid */}
          <Pyramid size={340} left="46%" bottom="18%" delay="0s" glow="var(--gold-bright)" />
          {/* Khafre */}
          <Pyramid size={280} left="28%" bottom="10%" delay="1s" glow="var(--platinum)" />
          {/* Menkaure */}
          <Pyramid size={200} left="66%" bottom="6%" delay="2s" glow="var(--gold-bright)" />

          {/* Ankh symbol floating */}
          <div
            className="absolute text-[var(--gold-bright)]/40 font-serif"
            style={{
              left: "12%",
              top: "22%",
              fontSize: "80px",
              transform: "rotateX(-58deg) rotateZ(8deg)",
              animation: "float 6s ease-in-out infinite",
              textShadow: "0 0 30px oklch(0.85 0.13 235 / 0.6)",
            }}
          >
            ☥
          </div>
          <div
            className="absolute text-white/25 font-serif"
            style={{
              right: "10%",
              top: "16%",
              fontSize: "60px",
              transform: "rotateX(-58deg) rotateZ(8deg)",
              animation: "float 7s ease-in-out infinite 1.5s",
              textShadow: "0 0 25px oklch(0.85 0.13 235 / 0.5)",
            }}
          >
            𓂀
          </div>
        </div>
      </div>

      {/* Text content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 text-xs md:text-sm uppercase tracking-[0.6em] text-[var(--gold)]/90 animate-[fade-up_1s_ease-out]">
          Private Helicopter Tours · Giza
        </p>
        <h1
          className="font-serif text-6xl md:text-8xl lg:text-9xl text-gradient-gold animate-[fade-up_1.2s_ease-out]"
          style={{ textShadow: "0 0 80px oklch(0.82 0.14 85 / 0.5)" }}
        >
          Cairo From Above
        </h1>
        <p className="mt-8 max-w-2xl text-base md:text-lg text-foreground/85 animate-[fade-up_1.4s_ease-out]">
          Experience a rare aerial perspective of both ancient wonders and modern Cairo.
          Unforgettable. Exclusive. Yours.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#routes"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--gold-bright)] to-[var(--gold)] px-10 py-4 text-sm uppercase tracking-[0.3em] font-semibold text-[var(--onyx)] animate-pulse-glow"
          >
            Choose Your Route
          </a>
          <Link
            to="/booking"
            className="inline-flex items-center gap-3 rounded-full border border-white/60 px-10 py-4 text-sm uppercase tracking-[0.3em] font-semibold text-white hover:bg-white hover:text-[var(--onyx)] transition"
          >
            Book Now
          </Link>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[var(--gold)]/70 text-xs uppercase tracking-[0.4em]">
          Scroll
        </div>
      </div>
    </section>
  );
}

function Pyramid({
  size,
  left,
  bottom,
  delay,
  glow,
}: {
  size: number;
  left: string;
  bottom: string;
  delay: string;
  glow: string;
}) {
  const half = size / 2;
  const faceStyle = (bg: string): React.CSSProperties => ({
    position: "absolute",
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    borderLeft: `${half}px solid transparent`,
    borderRight: `${half}px solid transparent`,
    borderBottom: `${size}px solid ${bg}`,
    transformOrigin: "50% 100%",
  });

  return (
    <div
      className="absolute"
      style={{
        left,
        bottom,
        width: size,
        height: size,
        transform: "translate(-50%, 0)",
        transformStyle: "preserve-3d",
        animation: `float 8s ease-in-out infinite ${delay}`,
        filter: `drop-shadow(0 0 40px ${glow})`,
      }}
    >
      {/* Front face */}
      <div
        style={{
          ...faceStyle("oklch(0.72 0.09 70)"),
          transform: `rotateX(-90deg) translateZ(-${half}px) translateY(${half}px)`,
        }}
      />
      {/* Right face */}
      <div
        style={{
          ...faceStyle("oklch(0.52 0.08 70)"),
          transform: `rotateY(90deg) rotateX(-90deg) translateZ(-${half}px) translateY(${half}px)`,
        }}
      />
      {/* Back face */}
      <div
        style={{
          ...faceStyle("oklch(0.42 0.07 70)"),
          transform: `rotateY(180deg) rotateX(-90deg) translateZ(-${half}px) translateY(${half}px)`,
        }}
      />
      {/* Left face */}
      <div
        style={{
          ...faceStyle("oklch(0.62 0.08 70)"),
          transform: `rotateY(-90deg) rotateX(-90deg) translateZ(-${half}px) translateY(${half}px)`,
        }}
      />
    </div>
  );
}
