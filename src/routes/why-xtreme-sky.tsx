import { createFileRoute } from "@tanstack/react-router";
import { SecondaryPage, type SecondarySection } from "@/components/site/blocks";
import heroImg from "@/assets/heli-1.jpeg";

const sections: SecondarySection[] = [
    {
      heading: "Evidence before claims",
      body: ["We do not describe ourselves as the safest or the best. Instead we publish an operator register that states exactly which credentials are available now and which are awaiting documentary approval, and we update it as documents clear.", "The same applies to guest feedback. Testimonials stay off this site until they can be linked to a verified public review profile."],
    },
    {
      heading: "A distinct Cairo perspective",
      body: ["From the cabin, the Giza Plateau reads as one continuous site: the alignment of the three pyramids, the causeways, the Sphinx enclosure and the modern city pressing against the desert edge. The longer route extends that reading to Saqqara, the Grand Egyptian Museum and the Nile corridor."],
      list: ["Maximum four passengers per cabin", "Window seating allocated at check-in", "Live English commentary from the crew", "Indicative corridors published in advance"],
    },
    {
      heading: "Personal preparation",
      body: ["Every request is read by a person. We confirm dates against airspace availability, check the passenger group against the certified payload and tell you plainly if a second departure or a private charter is the better answer. Payment is requested only after that review."],
    },
];

export const Route = createFileRoute("/why-xtreme-sky")({
  head: () => ({
    meta: [
      { title: "Why Xtreme Sky Egypt \u2014 Evidence Before Claims" },
      { name: "description", content: "How we operate: verified information over superlatives, a distinct Cairo perspective, and personal preparation before every helicopter flight." },
      { property: "og:title", content: "Why Xtreme Sky Egypt \u2014 Evidence Before Claims" },
      { property: "og:description", content: "How we operate: verified information over superlatives, a distinct Cairo perspective, and personal preparation before every helicopter flight." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhyXtremeSkyPage,
});

function WhyXtremeSkyPage() {
  return (
    <SecondaryPage
      eyebrow="Why Xtreme Sky"
      title="Evidence before claims"
      intro="We publish what we can document and mark what is still pending. No superlatives, no borrowed credentials."
      image={heroImg}
      sections={sections}
    />
  );
}
