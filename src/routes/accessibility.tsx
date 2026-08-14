import { createFileRoute } from "@tanstack/react-router";
import { SecondaryPage, type SecondarySection } from "@/components/site/blocks";
import heroImg from "@/assets/heli-6.jpeg";

const sections: SecondarySection[] = [
    {
      heading: "What boarding involves",
      body: ["Guests walk a short distance on open ground and step up into the cabin, assisted by ground staff. There is no lift or ramp access to the aircraft, and wheelchairs cannot be carried into the cabin."],
    },
    {
      heading: "Tell us in advance",
      body: ["Use the accessibility and health notes field in your request. Our team will confirm what is workable for your specific circumstances before payment, including whether a private charter gives you more time and space to board comfortably."],
    },
    {
      heading: "Hearing, vision and sensory needs",
      body: ["Commentary is delivered over intercom headsets, and cabin noise is significant. If a guest is sensitive to noise or vibration, tell us so the crew can prepare and brief accordingly."],
    },
];

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility & Mobility \u2014 Xtreme Sky Egypt" },
      { name: "description", content: "An honest description of boarding conditions, mobility limits and how to tell us about accessibility needs before your flight." },
      { property: "og:title", content: "Accessibility & Mobility \u2014 Xtreme Sky Egypt" },
      { property: "og:description", content: "An honest description of boarding conditions, mobility limits and how to tell us about accessibility needs before your flight." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AccessibilityPage,
});

function AccessibilityPage() {
  return (
    <SecondaryPage
      eyebrow="Accessibility"
      title="Boarding conditions, described honestly"
      intro="We describe the physical conditions of boarding rather than promise assistance we cannot document."
      image={heroImg}
      sections={sections}
    />
  );
}
