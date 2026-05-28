import { useState } from "react";
import { X } from "lucide-react";
import img1 from "@/assets/heli-1.jpeg";
import img2 from "@/assets/heli-2.jpeg";
import img3 from "@/assets/heli-3.jpeg";
import img4 from "@/assets/heli-4.jpeg";
import img5 from "@/assets/heli-5.jpeg";
import img6 from "@/assets/heli-6.jpeg";

const images = [
  { src: img1, alt: "Helicopter soaring over the Pyramids of Giza" },
  { src: img2, alt: "Helicopter at Giza Heliport at sunset" },
  { src: img3, alt: "Pyramids view from helicopter window" },
  { src: img4, alt: "Passengers inside the cabin admiring the pyramids" },
  { src: img5, alt: "Guest with headset watching pyramids from the sky" },
  { src: img6, alt: "Aerial view of Cairo and pyramids through window" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="bg-onyx px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.4em] text-[var(--gold-bright)] mb-4">GALLERY</p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gradient-gold">
            Moments In The Sky
          </h2>
          <p className="mt-4 text-foreground/70 max-w-xl mx-auto">
            A glimpse of the experience awaiting you above the eternal city.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-2xl border border-gold/20 hover-lift focus:outline-none focus:ring-2 focus:ring-[var(--gold-bright)] ${
                i === 0 || i === 5 ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-[2/1.5]" : "aspect-[4/3]"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition" />
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 grid place-items-center bg-onyx/95 backdrop-blur-md p-4 animate-[fade-up_.3s_ease-out]"
        >
          <button
            onClick={() => setActive(null)}
            aria-label="Close"
            className="absolute top-6 right-6 grid size-12 place-items-center rounded-full border border-gold/40 text-white hover:bg-white/10"
          >
            <X className="size-5" />
          </button>
          <img
            src={images[active].src}
            alt={images[active].alt}
            className="max-h-[88vh] max-w-[95vw] rounded-xl object-contain shadow-[0_0_60px_-10px_var(--gold-bright)]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
