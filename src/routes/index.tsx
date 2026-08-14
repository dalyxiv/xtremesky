import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { RouteCompare } from "@/components/site/RouteCompare";
import { Experience } from "@/components/site/Experience";
import { RouteTeaser } from "@/components/site/RouteTeaser";
import { SafetyPreview } from "@/components/site/SafetyPreview";
import { Gallery } from "@/components/site/Gallery";
import { ReviewsStrip } from "@/components/site/ReviewsStrip";
import { GuestJourney } from "@/components/site/GuestJourney";
import { PerfectFor } from "@/components/site/PerfectFor";
import { HomeFaq } from "@/components/site/HomeFaq";
import { FinalCta } from "@/components/site/FinalCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cairo & Giza Helicopter Experiences | Xtreme Sky Egypt" },
      {
        name: "description",
        content:
          "Helicopter flights over the Pyramids of Giza and Cairo. Four passenger seats, fixed USD pricing, and an operational review of every request before payment.",
      },
      { property: "og:title", content: "Cairo & Giza Helicopter Experiences | Xtreme Sky Egypt" },
      {
        property: "og:description",
        content:
          "Fifteen and twenty-five minute aerial experiences above Giza, Saqqara, the Grand Egyptian Museum and the Nile.",
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
      <RouteTeaser />
      <SafetyPreview />
      <Gallery />
      <ReviewsStrip />
      <GuestJourney />
      <PerfectFor />
      <HomeFaq />
      <FinalCta />
      <SiteFooter />
    </main>
  );
}
