import { Link } from "@tanstack/react-router";
import { Eyebrow, StepList } from "@/components/site/blocks";
import { GUEST_JOURNEY } from "@/lib/site-content";

export function GuestJourney() {
  return (
    <section className="border-t border-[var(--border-hairline)] bg-surface-alt/60 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Eyebrow>Your VIP journey</Eyebrow>
        <h2 className="mt-4 font-serif text-3xl text-white md:text-4xl">Three stages on the ground and in the air</h2>
        <div className="mt-8">
          <StepList steps={GUEST_JOURNEY} />
        </div>
        <Link to="/what-to-expect" className="mt-6 inline-block text-sm text-[var(--gold-bright)] underline underline-offset-4">
          What to expect on the day
        </Link>
      </div>
    </section>
  );
}
