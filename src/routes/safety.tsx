import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { AccuracyNote, Eyebrow, PlanWithConfidence, StatusList } from "@/components/site/blocks";
import { GUEST_ASSURANCES, SAFETY_REGISTER } from "@/lib/site-content";
import heroImg from "@/assets/heli-2.jpeg";

export const Route = createFileRoute("/safety")({
  head: () => ({
    meta: [
      { title: "Flight Operator & Safety Disclosure — Xtreme Sky Egypt" },
      {
        name: "description",
        content:
          "Our documentary register: which operator, aircraft and insurance credentials are published now and which are still awaiting documentary approval, plus guest safety procedures.",
      },
      { property: "og:title", content: "Flight Operator & Safety Disclosure" },
      {
        property: "og:description",
        content: "Evidence before claims: a published register of credentials and procedures.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SafetyPage,
});

function SafetyPage() {
  return (
    <main className="bg-onyx text-foreground">
      <SiteHeader />
      <PageHero
        eyebrow="Flight operator & safety"
        title="Evidence, not superlatives"
        subtitle="We publish a register of the credentials and procedures behind every flight, and we state plainly which items are still awaiting documentary approval."
        image={heroImg}
      />

      <div className="mx-auto max-w-4xl space-y-12 px-6 pb-24">
        <PlanWithConfidence />

        <section className="space-y-5">
          <Eyebrow>Documentary register</Eyebrow>
          <h2 className="font-serif text-2xl text-white md:text-3xl">Eight items, current status</h2>
          <p className="text-[17px] leading-[1.7] text-foreground/70">
            Rather than describing ourselves as the safest or most certified operator, we list what can be evidenced
            today. Items marked as awaiting documents are not yet approved for publication and should not be read as
            confirmed.
          </p>
          <StatusList items={SAFETY_REGISTER} />
        </section>

        {GUEST_ASSURANCES.map((s) => (
          <section key={s.heading} className="space-y-4">
            <h2 className="font-serif text-2xl text-white">{s.heading}</h2>
            {s.body.map((p) => (
              <p key={p} className="text-[17px] leading-[1.7] text-foreground/70">
                {p}
              </p>
            ))}
          </section>
        ))}

        <AccuracyNote>
          <p>
            Nothing on this page constitutes a guarantee of flight. Departure, routing and altitude remain subject to
            aviation authority clearance, air traffic control instruction and weather. Safety decisions rest with the
            operating crew and are final.
          </p>
        </AccuracyNote>
      </div>

      <SiteFooter />
    </main>
  );
}
