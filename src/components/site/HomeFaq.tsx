import { Link } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FULL_FAQS } from "@/lib/site-content";

export function HomeFaq() {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-gold/15 bg-charcoal/35 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-[0.5em] text-[var(--gold-bright)]">Good To Know</p>
        <h2 className="mt-4 font-serif text-3xl text-gradient-gold md:text-4xl">Frequently Asked</h2>
        <Accordion type="single" collapsible className="mt-8">
          {FULL_FAQS.slice(0, 4).map((f) => (
            <AccordionItem key={f.q} value={f.q} className="border-gold/20">
              <AccordionTrigger className="text-left font-serif text-lg text-white hover:text-[var(--gold-bright)]">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-foreground/75">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Link to="/faq" className="mt-8 inline-block text-sm text-[var(--gold-bright)] underline underline-offset-4">
          See all ten questions
        </Link>
      </div>
    </section>
  );
}
