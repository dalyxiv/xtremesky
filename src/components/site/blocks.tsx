import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { WHATSAPP_LINK } from "@/lib/tours";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-[var(--gold-bright)]">{children}</p>
  );
}

export function StatusPill({ status }: { status: "published" | "pending" | "confirmed" }) {
  const map = {
    published: { label: "Published now", color: "var(--status-published)" },
    confirmed: { label: "Confirmed in flight pack", color: "var(--status-published)" },
    pending: { label: "Awaiting documents", color: "var(--status-pending)" },
  } as const;
  const s = map[status];
  return (
    <span
      className="inline-flex shrink-0 items-center gap-2 rounded border px-2.5 py-1 text-[11px] uppercase tracking-[0.12em]"
      style={{ color: s.color, borderColor: s.color, backgroundColor: "rgba(255,255,255,0.02)" }}
    >
      <span className="size-1.5 rounded-full" style={{ backgroundColor: s.color }} />
      {s.label}
    </span>
  );
}

export function StatusList({
  items,
}: {
  items: { label: string; note?: string; status: "published" | "pending" | "confirmed" }[];
}) {
  return (
    <ul className="divide-y divide-[var(--border-hairline)] rounded-md border border-[var(--border-hairline)] bg-charcoal/40">
      {items.map((i) => (
        <li key={i.label} className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-white">{i.label}</p>
            {i.note && <p className="mt-1 text-sm text-foreground/60">{i.note}</p>}
          </div>
          <StatusPill status={i.status} />
        </li>
      ))}
    </ul>
  );
}

export function StatCard({ figure, label, desc }: { figure: string; label: string; desc: string }) {
  return (
    <article className="rounded-md border border-[var(--border-hairline)] bg-charcoal/40 p-6">
      <p className="font-mono text-3xl tabular-nums text-[var(--gold-bright)]">{figure}</p>
      <h3 className="mt-3 font-serif text-lg text-white">{label}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground/65">{desc}</p>
    </article>
  );
}

export function StepList({ steps }: { steps: { title: string; desc: string }[] }) {
  return (
    <ol className="grid gap-5 md:grid-cols-3">
      {steps.map((s, i) => (
        <li key={s.title} className="rounded-md border border-[var(--border-hairline)] bg-charcoal/40 p-6">
          <p className="font-mono text-sm tabular-nums tracking-widest text-[var(--gold-bright)]">
            {String(i + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-3 font-serif text-xl text-white">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground/65">{s.desc}</p>
        </li>
      ))}
    </ol>
  );
}

export function RouteDiagram({ stops, note }: { stops: string[]; note?: string }) {
  return (
    <div className="rounded-md border border-[var(--border-hairline)] bg-charcoal/40 p-6">
      <div className="flex flex-wrap items-center gap-3">
        {stops.map((s, i) => (
          <span key={s} className="flex items-center gap-3">
            <span className="rounded border border-gold/30 px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-foreground/85">
              {s}
            </span>
            {i < stops.length - 1 && <ArrowRight className="size-4 text-[var(--gold-bright)]" />}
          </span>
        ))}
      </div>
      {note && <p className="mt-4 text-sm text-foreground/60">{note}</p>}
    </div>
  );
}

export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((f) => (
        <AccordionItem key={f.q} value={f.q} className="border-[var(--border-hairline)]">
          <AccordionTrigger className="text-left font-serif text-lg text-white hover:text-[var(--gold-bright)]">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-foreground/70">{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function AccuracyNote({ children }: { children?: ReactNode }) {
  return (
    <div className="rounded-md border border-[var(--border-hairline)] bg-charcoal/30 p-6 text-sm leading-relaxed text-foreground/60">
      <p className="mb-2 text-[12px] uppercase tracking-[0.18em] text-[var(--gold-bright)]">Accuracy note</p>
      {children ?? (
        <p>
          Every figure, duration and inclusion on this page reflects our current operating plan. Flight paths,
          altitudes and timings remain subject to aviation authority clearance, air traffic control instruction and
          weather. Where a credential is still awaiting documentary approval we say so rather than implying it is
          confirmed.
        </p>
      )}
    </div>
  );
}

export function PlanWithConfidence({ title = "Plan with confidence" }: { title?: string }) {
  return (
    <div className="flex flex-col gap-4 rounded-md border border-gold/25 bg-charcoal/50 p-7 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="font-serif text-2xl text-gradient-gold">{title}</h2>
        <p className="mt-2 max-w-xl text-sm text-foreground/65">
          Submit a request and our operations team reviews weight-and-balance, airspace and weather before any
          payment is taken.
        </p>
      </div>
      <div className="flex shrink-0 flex-wrap gap-3">
        <Link
          to="/book"
          className="inline-flex rounded bg-gradient-to-r from-[var(--gold-bright)] to-[var(--gold)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--onyx)]"
        >
          Check availability
        </Link>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded border border-gold/40 px-5 py-3 text-xs uppercase tracking-[0.14em] text-[var(--gold-bright)]"
        >
          <MessageCircle className="size-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
}

export type SecondarySection = {
  heading: string;
  body?: string[];
  list?: string[];
};

export function SecondaryPage({
  eyebrow,
  title,
  intro,
  image,
  sections,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  sections: SecondarySection[];
  children?: ReactNode;
}) {
  return (
    <main className="bg-onyx text-foreground">
      <SiteHeader />
      <PageHero eyebrow={eyebrow} title={title} subtitle={intro} image={image} />
      <div className="mx-auto max-w-4xl space-y-10 px-6 pb-24">
        <PlanWithConfidence />
        {sections.map((s) => (
          <section key={s.heading} className="space-y-4">
            <h2 className="font-serif text-2xl text-white md:text-3xl">{s.heading}</h2>
            {s.body?.map((p) => (
              <p key={p} className="text-[17px] leading-[1.7] text-foreground/70">
                {p}
              </p>
            ))}
            {s.list && (
              <ul className="grid gap-3 sm:grid-cols-2">
                {s.list.map((l) => (
                  <li key={l} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Check className="mt-0.5 size-4 shrink-0 text-[var(--gold-bright)]" /> {l}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
        {children}
        <AccuracyNote />
      </div>
      <SiteFooter />
    </main>
  );
}
