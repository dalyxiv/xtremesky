import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { AccuracyNote, FaqAccordion, PlanWithConfidence } from "@/components/site/blocks";
import { FULL_FAQS } from "@/lib/site-content";
import heroImg from "@/assets/heli-5.jpeg";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Helicopter Flight FAQs — Xtreme Sky Egypt" },
      {
        name: "description",
        content:
          "Ten answers on requests versus confirmed bookings, departure points, route guarantees, passenger limits, weights, weather policy, transfers and payment timing.",
      },
      { property: "og:title", content: "Helicopter Flight FAQs — Xtreme Sky Egypt" },
      {
        property: "og:description",
        content: "How requests, manifests, weather decisions and payment actually work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <main className="bg-onyx text-foreground">
      <SiteHeader />
      <PageHero
        eyebrow="Frequently asked"
        title="Questions, answered precisely"
        subtitle="Ten questions our operations team is asked most often, answered without softening the operational realities."
        image={heroImg}
      />
      <div className="mx-auto max-w-3xl space-y-10 px-6 pb-24">
        <PlanWithConfidence />
        <FaqAccordion items={FULL_FAQS} />
        <AccuracyNote />
      </div>
      <SiteFooter />
    </main>
  );
}
