import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { CONTACT_EMAIL, OFFICE_ADDRESS, WHATSAPP_LINK, WHATSAPP_NUMBER } from "@/lib/tours";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Xtreme Sky Egypt — Flight Team & Concierge" },
      {
        name: "description",
        content:
          "Talk to our flight team about helicopter tours over Cairo and Giza: WhatsApp, email and office details, plus response times for international guests.",
      },
      { property: "og:title", content: "Contact Xtreme Sky Egypt" },
      { property: "og:description", content: "Reach our flight team by WhatsApp or email — replies within a few hours." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="bg-onyx text-foreground">
      <SiteHeader />
      <PageHero
        eyebrow="Contact"
        title="Talk To Our Flight Team"
        subtitle="Private charters, group enquiries, proposals and corporate bookings — we answer personally."
      />
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="hover-lift rounded-2xl border border-gold/25 bg-charcoal/55 p-7 transition hover:border-[var(--gold)]">
            <MessageCircle className="size-6 text-[var(--gold-bright)]" />
            <h2 className="mt-4 font-serif text-xl text-gradient-gold">WhatsApp</h2>
            <p className="mt-2 text-sm text-foreground/75">{WHATSAPP_NUMBER}</p>
            <p className="mt-1 text-xs text-foreground/55">Fastest response, 09:00 – 21:00 Cairo time.</p>
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover-lift rounded-2xl border border-gold/25 bg-charcoal/55 p-7 transition hover:border-[var(--gold)]">
            <Mail className="size-6 text-[var(--gold-bright)]" />
            <h2 className="mt-4 font-serif text-xl text-gradient-gold">Email</h2>
            <p className="mt-2 break-all text-sm text-foreground/75">{CONTACT_EMAIL}</p>
            <p className="mt-1 text-xs text-foreground/55">Replies within a few hours.</p>
          </a>
          <div className="rounded-2xl border border-gold/25 bg-charcoal/55 p-7">
            <MapPin className="size-6 text-[var(--gold-bright)]" />
            <h2 className="mt-4 font-serif text-xl text-gradient-gold">Office</h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground/75">{OFFICE_ADDRESS}</p>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-5xl rounded-2xl border border-gold/30 bg-charcoal/45 p-8 text-center">
          <h2 className="font-serif text-2xl text-gradient-gold">Ready to fly?</h2>
          <p className="mx-auto mt-3 max-w-xl text-foreground/75">
            Send an availability request in under a minute. No payment required to enquire.
          </p>
          <Link
            to="/book"
            className="mt-6 inline-flex rounded-full bg-gradient-to-r from-[var(--gold-bright)] to-[var(--gold)] px-7 py-3 text-xs font-semibold uppercase tracking-widest text-[var(--onyx)] transition hover:shadow-[0_0_30px_-4px_var(--gold)]"
          >
            Check Availability
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
