import { createFileRoute } from "@tanstack/react-router";
import { SecondaryPage, type SecondarySection } from "@/components/site/blocks";
import heroImg from "@/assets/heli-2.jpeg";

const sections: SecondarySection[] = [
    {
      heading: "How group flying works",
      body: ["With four passenger seats per cabin, larger parties are flown as sequenced departures on the same slot window. We build the schedule around your ground programme and confirm it once airspace availability is checked."],
      list: ["Sequenced departures for parties above four", "Manifest template for names, ages and weights", "Single point of contact per file", "Consolidated invoicing on approval"],
    },
    {
      heading: "Manifests and documentation",
      body: ["Send one manifest per departure with full names as they appear on identification, nationality, age and weight in kilograms. Late name changes require re-clearance, so we ask for final lists at least twenty-four hours before the slot."],
    },
    {
      heading: "Invoicing",
      body: ["Trade partners may select DMC invoice as the confirmation method at review, instead of a guest payment link. Invoices are raised against the approved manifest in US dollars."],
    },
];

export const Route = createFileRoute("/groups-dmc")({
  head: () => ({
    meta: [
      { title: "Groups, DMCs & Travel Trade \u2014 Xtreme Sky Egypt" },
      { name: "description", content: "Manifest handling, sequenced departures and invoicing for DMCs, hotels, concierges and corporate groups flying over Giza." },
      { property: "og:title", content: "Groups, DMCs & Travel Trade \u2014 Xtreme Sky Egypt" },
      { property: "og:description", content: "Manifest handling, sequenced departures and invoicing for DMCs, hotels, concierges and corporate groups flying over Giza." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GroupsDmcPage,
});

function GroupsDmcPage() {
  return (
    <SecondaryPage
      eyebrow="Travel trade"
      title="Groups, DMCs & concierges"
      intro="Manifest-based booking, sequenced departures and invoicing against confirmed passenger lists."
      image={heroImg}
      sections={sections}
    />
  );
}
