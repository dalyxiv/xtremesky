import { createFileRoute } from "@tanstack/react-router";
import { SecondaryPage, type SecondarySection } from "@/components/site/blocks";
import heroImg from "@/assets/heli-3.jpeg";

const sections: SecondarySection[] = [
    {
      heading: "Requests and confirmation",
      body: ["A submitted form is a request, not a confirmed booking. A contract is formed only when our operations team issues a written confirmation following review of the date, passenger manifest, load plan and airspace availability."],
    },
    {
      heading: "Pricing and payment",
      body: ["Prices are published in US dollars. Amounts shown in other currencies are indicative conversions for guidance only. Payment is requested after approval, via a secure payment link or an invoice for travel-trade partners."],
    },
    {
      heading: "Carriage and operational authority",
      body: ["Flights are performed by a licensed operating provider. The operating crew holds final authority over routing, seating, payload and whether a flight departs. Refusal of carriage may follow where identification, weight declarations or fitness to fly cannot be verified."],
    },
    {
      heading: "Liability and changes",
      body: ["We are not liable for consequential losses arising from weather, airspace restriction or air traffic control decisions. Cancellations and refunds follow the cancellation and weather policy. These terms may be updated, and the version published at the time of your confirmation applies."],
    },
];

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions \u2014 Xtreme Sky Egypt" },
      { name: "description", content: "Terms governing helicopter flight requests, confirmations, payment, carriage and operational decisions with Xtreme Sky Egypt." },
      { property: "og:title", content: "Terms & Conditions \u2014 Xtreme Sky Egypt" },
      { property: "og:description", content: "Terms governing helicopter flight requests, confirmations, payment, carriage and operational decisions with Xtreme Sky Egypt." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SecondaryPage
      eyebrow="Legal"
      title="Terms & conditions"
      intro="These terms govern requests, confirmations and carriage on flights arranged by Xtreme Sky Egypt."
      image={heroImg}
      sections={sections}
    />
  );
}
