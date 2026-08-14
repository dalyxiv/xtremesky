import { createFileRoute } from "@tanstack/react-router";
import { SecondaryPage, type SecondarySection } from "@/components/site/blocks";
import heroImg from "@/assets/heli-3.jpeg";

const sections: SecondarySection[] = [
    {
      heading: "Arrival timing",
      body: ["Thirty minutes before your slot is the guidance we apply. It covers identification checks, weight confirmation and the safety briefing without rushing. Late arrivals may lose their slot because departures are sequenced against airspace clearance."],
    },
    {
      heading: "Transfers and parking",
      body: ["Hotel transfers from most Cairo and Giza addresses can be quoted with your request. If you drive, allow additional time for Ring Road and Fifth Settlement traffic; on-site parking guidance is included in your confirmation."],
    },
    {
      heading: "Our office",
      body: ["Extreme Sky for Management, Marketing and Consulting, 5A by The Waterway, South 90th Street, Fifth Settlement, New Cairo. The office is an administrative address, not the departure point."],
    },
];

export const Route = createFileRoute("/directions")({
  head: () => ({
    meta: [
      { title: "Directions & Arrival \u2014 Xtreme Sky Egypt" },
      { name: "description", content: "How to reach the departure helipad for helicopter flights over Giza, plus parking, transfers and arrival timing guidance." },
      { property: "og:title", content: "Directions & Arrival \u2014 Xtreme Sky Egypt" },
      { property: "og:description", content: "How to reach the departure helipad for helicopter flights over Giza, plus parking, transfers and arrival timing guidance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DirectionsPage,
});

function DirectionsPage() {
  return (
    <SecondaryPage
      eyebrow="Directions"
      title="Getting to the helipad"
      intro="Exact coordinates are issued with your confirmation. Plan for Cairo traffic and arrive thirty minutes early."
      image={heroImg}
      sections={sections}
    />
  );
}
