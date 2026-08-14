import { createFileRoute } from "@tanstack/react-router";
import { SecondaryPage, type SecondarySection } from "@/components/site/blocks";
import heroImg from "@/assets/heli-4.jpeg";

const sections: SecondarySection[] = [
    {
      heading: "Before you arrive",
      body: ["Your confirmation carries the helipad address, your slot time and the identification each passenger must bring. Dress for a short walk on open ground and expect warm conditions inside the cabin before departure."],
    },
    {
      heading: "On arrival",
      body: ["Ground staff verify identification against the manifest, confirm passenger weights discreetly and complete the load plan. You then receive the safety briefing covering boarding, headsets, seating and cabin procedure."],
      list: ["Identification check against the manifest", "Discreet weight confirmation", "Structured safety briefing", "Escorted walk to the aircraft"],
    },
    {
      heading: "After landing",
      body: ["You return to the lounge for refreshments and your flight record. If weather delayed your departure, our team will offer the next available slot before you leave."],
    },
];

export const Route = createFileRoute("/what-to-expect")({
  head: () => ({
    meta: [
      { title: "What To Expect On The Day \u2014 Xtreme Sky Egypt" },
      { name: "description", content: "Arrival, identification, safety briefing, boarding and return: the full ground sequence for your helicopter flight over Giza." },
      { property: "og:title", content: "What To Expect On The Day \u2014 Xtreme Sky Egypt" },
      { property: "og:description", content: "Arrival, identification, safety briefing, boarding and return: the full ground sequence for your helicopter flight over Giza." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhatToExpectPage,
});

function WhatToExpectPage() {
  return (
    <SecondaryPage
      eyebrow="What to expect"
      title="Your day, step by step"
      intro="Arrive thirty minutes before your slot. Everything after that follows a fixed operational sequence."
      image={heroImg}
      sections={sections}
    />
  );
}
