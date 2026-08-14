import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { AccuracyNote, Eyebrow } from "@/components/site/blocks";
import { CONTACT_EMAIL, WHATSAPP_LINK } from "@/lib/tours";
import heroImg from "@/assets/heli-4.jpeg";

export const Route = createFileRoute("/manage-booking")({
  head: () => ({
    meta: [
      { title: "Manage Your Flight Request — Xtreme Sky Egypt" },
      {
        name: "description",
        content:
          "Look up an existing helicopter flight request by reference to change dates, passenger details or cancel under the weather and cancellation policy.",
      },
      { property: "og:title", content: "Manage Your Flight Request" },
      {
        property: "og:description",
        content: "Amend dates, passengers or cancel an existing Xtreme Sky Egypt request.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ManageBookingPage,
});

const REQUESTS = [
  { label: "Change the flight date", value: "date" },
  { label: "Change passenger details", value: "passengers" },
  { label: "Add hotel transfer or video package", value: "addons" },
  { label: "Cancel the request", value: "cancel" },
];

function ManageBookingPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ reference: "", email: "", type: "date", notes: "" });

  const field = "mt-2 w-full rounded border border-[var(--border-hairline)] bg-charcoal/60 px-4 py-3 text-sm text-foreground outline-none focus:border-[var(--gold)]";

  return (
    <main className="bg-onyx text-foreground">
      <SiteHeader />
      <PageHero
        eyebrow="Manage booking"
        title="Amend an existing request"
        subtitle="Enter your reference and the email used at request. Our operations team replies with a written confirmation of any change."
        image={heroImg}
      />

      <div className="mx-auto max-w-2xl space-y-8 px-6 pb-24">
        {sent ? (
          <div className="rounded-md border border-gold/30 bg-charcoal/50 p-8 text-center">
            <Eyebrow>Received</Eyebrow>
            <h2 className="mt-3 font-serif text-2xl text-gradient-gold">Your change request is with operations</h2>
            <p className="mt-3 text-sm text-foreground/70">
              Nothing is changed until you receive written confirmation. For urgent changes within 24 hours of your
              slot, message us on{" "}
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-[var(--gold-bright)] underline underline-offset-4">
                WhatsApp
              </a>
              .
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-5 rounded-md border border-[var(--border-hairline)] bg-charcoal/40 p-7"
          >
            <div>
              <label htmlFor="reference" className="text-sm text-foreground/80">
                Request reference
              </label>
              <input
                id="reference"
                required
                value={form.reference}
                onChange={(e) => setForm({ ...form, reference: e.target.value })}
                placeholder="XSE-000000"
                className={field}
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-foreground/80">
                Email used at request
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={field}
              />
            </div>
            <div>
              <label htmlFor="type" className="text-sm text-foreground/80">
                What would you like to change?
              </label>
              <select
                id="type"
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className={field}
              >
                {REQUESTS.map((r) => (
                  <option key={r.value} value={r.value} className="bg-charcoal">
                    {r.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="notes" className="text-sm text-foreground/80">
                Details
              </label>
              <textarea
                id="notes"
                rows={4}
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                className={field}
              />
            </div>
            <button
              type="submit"
              className="w-full rounded bg-gradient-to-r from-[var(--gold-bright)] to-[var(--gold)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--onyx)]"
            >
              Submit change request
            </button>
            <p className="text-xs text-foreground/55">
              Prefer email? Write to{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-[var(--gold-bright)] underline underline-offset-4">
                {CONTACT_EMAIL}
              </a>{" "}
              quoting your reference.
            </p>
          </form>
        )}
        <AccuracyNote>
          <p>
            Changes are subject to availability, airspace clearance and the cancellation and weather policy. A change
            request is not itself a confirmation.
          </p>
        </AccuracyNote>
      </div>

      <SiteFooter />
    </main>
  );
}
