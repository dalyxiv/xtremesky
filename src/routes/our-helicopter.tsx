import { createFileRoute } from "@tanstack/react-router";
import { SecondaryPage, type SecondarySection } from "@/components/site/blocks";
import heroImg from "@/assets/heli-2.jpeg";

const sections: SecondarySection[] = [
    {
      heading: "Cabin and seating",
      body: ["The cabin carries up to four passengers alongside the operating pilot. Seats are allocated at check-in from the load plan rather than on request, so that weight distribution stays within limits. Every seat has a window."],
      list: ["Four passenger seats", "Noise-cancelling intercom headsets", "Panoramic side windows", "Single-cabin private charter available"],
    },
    {
      heading: "Aircraft documentation",
      body: ["Registration mark, airworthiness review status and insurance certificates are held by the operating provider. These are listed on our safety page with their current publication status; we will not restate them here as confirmed until the documents are approved for publication."],
    },
    {
      heading: "Comfort and photography",
      body: ["Windows are fixed for safety, so photographs are taken through glass. Lens hoods and polarising filters help; loose items, selfie sticks and drones are not permitted in the cabin."],
    },
];

export const Route = createFileRoute("/our-helicopter")({
  head: () => ({
    meta: [
      { title: "Our Helicopter & Cabin \u2014 Xtreme Sky Egypt" },
      { name: "description", content: "Cabin layout, seating, headsets and the aircraft documentation we publish for Cairo and Giza helicopter flights." },
      { property: "og:title", content: "Our Helicopter & Cabin \u2014 Xtreme Sky Egypt" },
      { property: "og:description", content: "Cabin layout, seating, headsets and the aircraft documentation we publish for Cairo and Giza helicopter flights." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OurHelicopterPage,
});

function OurHelicopterPage() {
  return (
    <SecondaryPage
      eyebrow="Our helicopter"
      title="The cabin you will fly in"
      intro="A four-seat passenger cabin with panoramic windows, intercom headsets and seating allocated by load plan."
      image={heroImg}
      sections={sections}
    />
  );
}
