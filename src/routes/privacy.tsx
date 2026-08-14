import { createFileRoute } from "@tanstack/react-router";
import { SecondaryPage, type SecondarySection } from "@/components/site/blocks";
import heroImg from "@/assets/heli-5.jpeg";

const sections: SecondarySection[] = [
  {
    heading: "What we collect",
    body: [
      "To review a flight request we collect lead-guest contact details and, for each passenger, full name, nationality, age and weight in kilograms. Weights and ages exist for weight-and-balance and seating; they are never used for marketing or pricing.",
    ],
  },
  {
    heading: "Why we hold it",
    body: [
      "Passenger data is shared with the licensed operating provider so the flight can be cleared and the manifest filed. Contact details are used to confirm, amend or cancel your request and to issue payment links or invoices.",
    ],
  },
  {
    heading: "Retention and your rights",
    body: [
      "Manifest data is retained only as long as aviation record-keeping requires, then deleted. You may request access, correction or deletion of your data by writing to us, quoting your request reference.",
    ],
  },
  {
    heading: "Cookies and analytics",
    body: [
      "This site stores your currency preference locally in your browser. We do not sell data, and we do not run advertising trackers.",
    ],
  },
];

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Notice — Xtreme Sky Egypt" },
      {
        name: "description",
        content:
          "What passenger data we collect for flight manifests and weight-and-balance, why we hold it, how long we keep it, and how to request deletion.",
      },
      { property: "og:title", content: "Privacy Notice — Xtreme Sky Egypt" },
      {
        property: "og:description",
        content: "Manifest data, retention limits and your rights over the information you give us.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SecondaryPage
      eyebrow="Legal"
      title="Privacy notice"
      intro="Passenger data exists so a flight can be cleared safely. We collect the minimum required and delete it when record-keeping allows."
      image={heroImg}
      sections={sections}
    />
  );
}
