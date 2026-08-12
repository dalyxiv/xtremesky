import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { RouteCompare } from "@/components/site/RouteCompare";
import { Experience } from "@/components/site/Experience";
import { SafetyPreview } from "@/components/site/SafetyPreview";
import { Gallery } from "@/components/site/Gallery";
import { ReviewsStrip } from "@/components/site/ReviewsStrip";
import { PerfectFor } from "@/components/site/PerfectFor";
import { HomeFaq } from "@/components/site/HomeFaq";
import { FinalCta } from "@/components/site/FinalCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Helicopter Tours Over The Pyramids | Xtreme Sky Egypt" },
      {
        name: "description",
        content:
          "Private helicopter tours over the Pyramids of Giza and Cairo. Maximum 4 passengers, certified crews, live English commentary. Check availability — no upfront payment.",
      },
      { property: "og:title", content: "Helicopter Tours Over The Pyramids | Xtreme Sky Egypt" },
      {
        property: "og:description",
        content: "Gold and Platinum aerial routes above Giza, Saqqara, the Grand Egyptian Museum and the Nile.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-onyx text-foreground">
      <SiteHeader />
      <Hero />
      <TrustStrip />
      <RouteCompare />
      <Experience />
      <SafetyPreview />
      <Gallery />
      <ReviewsStrip />
      <PerfectFor />
      <HomeFaq />
      <FinalCta />
      <SiteFooter />
    </main>
  );
}
