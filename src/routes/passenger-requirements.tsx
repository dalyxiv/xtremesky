import { createFileRoute } from "@tanstack/react-router";
import { SecondaryPage, type SecondarySection } from "@/components/site/blocks";
import heroImg from "@/assets/heli-5.jpeg";

const sections: SecondarySection[] = [
    {
      heading: "Identification",
      body: ["International guests present a valid passport; residents present a national ID. Names on the manifest must match the document exactly. Substitutions cannot be made at the helipad because the manifest is the cleared document."],
    },
    {
      heading: "Ages, weights and load planning",
      body: ["Individual weights in kilograms are collected in the booking request and confirmed at check-in. They affect seating and payload margins, never price. Where a group exceeds the certified payload we propose a second departure or a private charter."],
      list: ["Maximum four adults and children combined", "Up to two infants, subject to load planning", "Children occupy their own seat with a restraint", "Weights confirmed discreetly at check-in"],
    },
    {
      heading: "Health, pregnancy and cabin rules",
      body: ["Disclose reduced mobility, recent surgery, cardiac or respiratory conditions and pregnancy in your request. Alcohol before flight is not permitted, and the crew may decline carriage where safety cannot be assured."],
    },
];

export const Route = createFileRoute("/passenger-requirements")({
  head: () => ({
    meta: [
      { title: "Passenger Requirements \u2014 Xtreme Sky Egypt" },
      { name: "description", content: "Identification, ages, weights, health disclosures and cabin rules for passengers on Cairo and Giza helicopter flights." },
      { property: "og:title", content: "Passenger Requirements \u2014 Xtreme Sky Egypt" },
      { property: "og:description", content: "Identification, ages, weights, health disclosures and cabin rules for passengers on Cairo and Giza helicopter flights." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PassengerRequirementsPage,
});

function PassengerRequirementsPage() {
  return (
    <SecondaryPage
      eyebrow="Passenger requirements"
      title="What every passenger must provide"
      intro="Names, ages, nationalities and individual weights are required before a flight can be cleared."
      image={heroImg}
      sections={sections}
    />
  );
}
