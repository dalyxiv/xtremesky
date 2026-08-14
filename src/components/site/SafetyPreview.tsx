import { Link } from "@tanstack/react-router";
import { Eyebrow, StatusList } from "@/components/site/blocks";
import { useReveal } from "@/hooks/use-reveal";
import { SAFETY_REGISTER } from "@/lib/site-content";

export function SafetyPreview() {
  const ref = useReveal<HTMLDivElement>();
  const items = [
    ...SAFETY_REGISTER.filter((i) => i.status !== "pending").slice(0, 3),
    ...SAFETY_REGISTER.filter((i) => i.status === "pending").slice(0, 3),
  ];

  return (
    <section ref={ref} className="border-t border-[var(--border-hairline)] bg-onyx px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="reveal">
          <Eyebrow>Operator & safety transparency</Eyebrow>
        </div>
        <h2 className="reveal mt-4 font-serif text-3xl text-white md:text-4xl">
          Published now, or awaiting documents
        </h2>
        <p className="reveal mt-4 text-[17px] leading-[1.7] text-foreground/65">
          We list credentials with their real status instead of implying approval. Nothing here is described as
          confirmed until the paperwork supports it.
        </p>
        <div className="reveal mt-8">
          <StatusList items={items} />
        </div>
        <Link to="/safety" className="reveal mt-6 inline-block text-sm text-[var(--gold-bright)] underline underline-offset-4">
          Read the full documentary register
        </Link>
      </div>
    </section>
  );
}
