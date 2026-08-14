import { createFileRoute } from "@tanstack/react-router";
import { SecondaryPage, type SecondarySection } from "@/components/site/blocks";
import heroImg from "@/assets/heli-6.jpeg";

const sections: SecondarySection[] = [
    {
      heading: "Proposals & anniversaries",
      body: ["Tell us the moment you have in mind and we will plan around it: private charter of the full cabin, seating arranged for the view, and crew briefed to give you the airborne minutes uninterrupted. The longer Cairo Heritage Panorama is the route most couples choose."],
      list: ["Private charter of all four seats", "Seating arranged for the intended view", "Crew briefed on the occasion", "In-flight video package available"],
    },
    {
      heading: "Families & birthdays",
      body: ["Children fly in their own seat with a restraint, and ages are collected in the manifest so seating and briefing can be adapted. Cabin capacity is four passengers, so larger families are sequenced across consecutive departures."],
    },
    {
      heading: "What we will not promise",
      body: ["We do not guarantee a specific hover position, a specific photograph or a specific track over any monument. Those depend on clearance and weather. Everything we can control, we plan in detail."],
    },
];

export const Route = createFileRoute("/proposals-celebrations")({
  head: () => ({
    meta: [
      { title: "Proposals & Celebrations Over Giza \u2014 Xtreme Sky Egypt" },
      { name: "description", content: "Helicopter proposals, anniversaries, birthdays and family celebrations over the Pyramids, coordinated with our operations team." },
      { property: "og:title", content: "Proposals & Celebrations Over Giza \u2014 Xtreme Sky Egypt" },
      { property: "og:description", content: "Helicopter proposals, anniversaries, birthdays and family celebrations over the Pyramids, coordinated with our operations team." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProposalsPage,
});

function ProposalsPage() {
  return (
    <SecondaryPage
      eyebrow="Occasions"
      title="Proposals & celebrations"
      intro="Private cabins, longer airborne time and coordination handled quietly in the background."
      image={heroImg}
      sections={sections}
    />
  );
}
