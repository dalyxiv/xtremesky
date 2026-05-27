import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Experience } from "@/components/site/Experience";
import { Routes as FlightRoutes } from "@/components/site/Routes";
import { Booking } from "@/components/site/Booking";
import { VIP } from "@/components/site/VIP";
import { PerfectFor } from "@/components/site/PerfectFor";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Xtreme Sky Egypt — Private Helicopter Tours Over Cairo & Giza" },
      { name: "description", content: "Exclusive private helicopter tours over the Pyramids of Giza and Cairo. Only 4 seats per flight. Gold and Platinum VIP routes." },
      { property: "og:title", content: "Xtreme Sky Egypt — Cairo From Above" },
      { property: "og:description", content: "Experience a rare aerial perspective of ancient wonders and modern Cairo. Unforgettable. Exclusive. Yours." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-onyx text-foreground">
      <Nav />
      <Hero />
      <Experience />
      <FlightRoutes />
      <Booking />
      <VIP />
      <PerfectFor />
      <Footer />
    </main>
  );
}
