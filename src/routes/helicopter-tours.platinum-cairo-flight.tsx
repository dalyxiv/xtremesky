import { createFileRoute } from "@tanstack/react-router";
import { TourDetail } from "@/components/site/TourDetail";
import { TOURS } from "@/lib/tours";
import img from "@/assets/heli-4.jpeg";

export const Route = createFileRoute("/helicopter-tours/platinum-cairo-flight")({
  head: () => ({
    meta: [
      { title: "Platinum Cairo Flight — 25 Min Helicopter Panorama" },
      {
        name: "description",
        content:
          "A 25-minute helicopter panorama over the Pyramids, Saqqara, the Grand Egyptian Museum and the Nile. Private cabin for up to 4 guests.",
      },
      { property: "og:title", content: "Platinum Cairo Flight — Xtreme Sky Egypt" },
      {
        property: "og:description",
        content: "The complete Cairo heritage panorama from the air: Giza, Saqqara, the GEM and the Nile.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <TourDetail tour={TOURS.platinum} other={TOURS.gold} image={img} />,
});
