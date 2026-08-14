import { createFileRoute } from "@tanstack/react-router";
import { TourDetail } from "@/components/site/TourDetail";
import { TOURS } from "@/lib/tours";
import img from "@/assets/heli-3.jpeg";

export const Route = createFileRoute("/tours/cairo-heritage-panorama")({
  head: () => ({
    meta: [
      { title: "Cairo Heritage Panorama — 25 Min Helicopter Flight" },
      {
        name: "description",
        content:
          "A 25-minute helicopter flight over Giza, Saqqara, the Grand Egyptian Museum and the Nile corridor. Four passenger seats and fixed USD pricing.",
      },
      { property: "og:title", content: "Cairo Heritage Panorama — Xtreme Sky Egypt" },
      {
        property: "og:description",
        content: "Twenty-five minutes airborne across Giza, Saqqara, the GEM and the Nile.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <TourDetail tour={TOURS.platinum} other={TOURS.gold} image={img} />,
});
