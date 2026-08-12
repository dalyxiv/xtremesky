import { createFileRoute } from "@tanstack/react-router";
import { TourDetail } from "@/components/site/TourDetail";
import { TOURS } from "@/lib/tours";
import img from "@/assets/heli-1.jpeg";

export const Route = createFileRoute("/helicopter-tours/gold-pyramids-flight")({
  head: () => ({
    meta: [
      { title: "Gold Pyramids Flight — 15 Min Helicopter Tour Over Giza" },
      {
        name: "description",
        content:
          "A 15-minute private helicopter flight over the Pyramids of Giza, the Great Sphinx and the Saqqara skyline. Maximum 4 passengers, VIP lounge check-in.",
      },
      { property: "og:title", content: "Gold Pyramids Flight — Xtreme Sky Egypt" },
      {
        property: "og:description",
        content: "15 minutes above the Great Pyramids and the Sphinx with certified crew and live commentary.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <TourDetail tour={TOURS.gold} other={TOURS.platinum} image={img} />,
});
