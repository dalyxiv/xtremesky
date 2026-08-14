import { createFileRoute } from "@tanstack/react-router";
import { TourDetail } from "@/components/site/TourDetail";
import { TOURS } from "@/lib/tours";
import img from "@/assets/heli-1.jpeg";

export const Route = createFileRoute("/tours/pyramids-sphinx-discovery")({
  head: () => ({
    meta: [
      { title: "Pyramids & Sphinx Discovery — 15 Min Helicopter Flight" },
      {
        name: "description",
        content:
          "A 15-minute helicopter flight over the Giza Plateau, the Great Pyramids and the Sphinx. Four passenger seats, fixed USD pricing, operational review before payment.",
      },
      { property: "og:title", content: "Pyramids & Sphinx Discovery — Xtreme Sky Egypt" },
      {
        property: "og:description",
        content: "Fifteen minutes airborne above the Giza Plateau with a maximum of four passengers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <TourDetail tour={TOURS.gold} other={TOURS.platinum} image={img} />,
});
