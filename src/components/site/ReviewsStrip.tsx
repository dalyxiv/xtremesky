import { Eyebrow } from "@/components/site/blocks";
import { CONTACT_EMAIL } from "@/lib/tours";

export function ReviewsStrip() {
  return (
    <section className="border-t border-[var(--border-hairline)] bg-surface-alt/60 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <Eyebrow>Guest reviews</Eyebrow>
        <h2 className="mt-4 font-serif text-3xl text-white md:text-4xl">No unverified testimonials</h2>
        <p className="mt-4 text-[17px] leading-[1.7] text-foreground/65">
          Quotes are easy to write and impossible to check. We will publish guest feedback here only when each review
          can be linked to a verified Google or TripAdvisor profile. Until then this space stays empty on purpose.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=Flight%20review`}
          className="mt-6 inline-block rounded border border-gold/40 px-5 py-3 text-[12px] uppercase tracking-[0.14em] text-[var(--gold-bright)] transition hover:border-[var(--gold)] hover:text-white"
        >
          Flown with us? Submit a review
        </a>
      </div>
    </section>
  );
}
