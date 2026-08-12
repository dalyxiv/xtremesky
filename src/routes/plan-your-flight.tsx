import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS } from "@/lib/tours";
import img from "@/assets/heli-5.jpeg";

export const Route = createFileRoute("/plan-your-flight")({
  head: () => ({
    meta: [
      { title: "Plan Your Flight — Timing, Documents & FAQs" },
      {
        name: "description",
        content:
          "Everything international guests need before flying: best times of day, seasons, what to bring, ID requirements, transfers and answers to common questions.",
      },
      { property: "og:title", content: "Plan Your Helicopter Flight Over Cairo" },
      { property: "og:description", content: "Timing, documents, transfers and frequently asked questions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PlanPage,
});

const cards = [
  { title: "Best Time Of Day", body: "Early morning offers the calmest air and softest light on the plateau. Late afternoon delivers dramatic golden shadows across the Pyramids." },
  { title: "Best Seasons", body: "October through April brings mild temperatures and excellent visibility. Summer flights are best scheduled at first light." },
  { title: "What To Bring", body: "Passport or national ID, a camera or phone with a wrist strap, sunglasses and light layers. Leave bulky bags in the lounge." },
  { title: "Transfers", body: "Hotel pickup from most Cairo and Giza hotels can be arranged on request and quoted with your availability confirmation." },
];

function PlanPage() {
  return (
    <main className="bg-onyx text-foreground">
      <SiteHeader />
      <PageHero
        eyebrow="Plan Your Flight"
        title="Everything You Need Before Takeoff"
        subtitle="Practical guidance for international guests, from ideal flight times to documents and transfers."
        image={img}
      />

      <section className="px-6 pb-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {cards.map((c) => (
            <article key={c.title} className="rounded-2xl border border-gold/25 bg-charcoal/55 p-7">
              <h2 className="font-serif text-xl text-gradient-gold">{c.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">{c.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="faqs" className="scroll-mt-24 border-t border-gold/15 bg-charcoal/30 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.5em] text-[var(--gold-bright)]">FAQs</p>
          <h2 className="mt-4 font-serif text-3xl text-gradient-gold md:text-4xl">Questions Guests Ask Us</h2>
          <Accordion type="single" collapsible className="mt-8">
            {FAQS.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-gold/20">
                <AccordionTrigger className="text-left font-serif text-lg text-white hover:text-[var(--gold-bright)]">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-foreground/75">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Link
            to="/book"
            className="mt-10 inline-flex rounded-full bg-gradient-to-r from-[var(--gold-bright)] to-[var(--gold)] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[var(--onyx)] transition hover:shadow-[0_0_30px_-4px_var(--gold)]"
          >
            Check Availability
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
