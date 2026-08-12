import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2, MessageCircle, Mail } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { readBookingRequest, type BookingRequest } from "@/lib/booking-store";
import { CONTACT_EMAIL, WHATSAPP_LINK } from "@/lib/tours";

export const Route = createFileRoute("/booking-summary")({
  head: () => ({
    meta: [
      { title: "Request Received — Xtreme Sky Egypt" },
      {
        name: "description",
        content:
          "Your helicopter availability request has been received. Review your reference number and next steps while our flight team verifies your slot.",
      },
      { property: "og:title", content: "Request Received — Xtreme Sky Egypt" },
      { property: "og:description", content: "Your flight reference and what happens next." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: SummaryPage,
});

function SummaryPage() {
  const [req, setReq] = useState<BookingRequest | null>(null);
  useEffect(() => setReq(readBookingRequest()), []);

  const waText = req
    ? encodeURIComponent(`Hello Xtreme Sky Egypt, my booking reference is ${req.reference} for the ${req.routeName} on ${req.date}.`)
    : "";

  return (
    <main className="bg-onyx text-foreground">
      <SiteHeader />
      <section className="px-6 pb-20 pt-32">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-gold/30 bg-charcoal/60 p-8 text-center">
            <CheckCircle2 className="mx-auto size-12 text-[var(--gold-bright)]" />
            <h1 className="mt-5 font-serif text-3xl text-gradient-gold md:text-4xl">Request Received</h1>
            {req ? (
              <>
                <p className="mt-3 text-foreground/75">
                  Thank you {req.name.split(" ")[0]}. Our flight team is verifying availability and will contact you
                  within a few hours.
                </p>
                <p className="mt-6 inline-block rounded-full border border-gold/40 px-5 py-2 text-sm tracking-[0.3em] text-[var(--gold-bright)]">
                  {req.reference}
                </p>
              </>
            ) : (
              <p className="mt-3 text-foreground/75">
                We could not find a recent request in this browser session. If you already submitted one, our team still
                received it.
              </p>
            )}
          </div>

          {req && (
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                ["Experience", `${req.routeName} · ${req.duration}`],
                ["Flight type", req.flightType === "private" ? "Private charter" : "Shared seats"],
                ["Requested date", req.date],
                ["Time window", req.timeWindow],
                ["Passengers", String(req.passengers)],
                ["Hotel transfer", req.transfer ? "Quote requested" : "Not required"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-gold/20 bg-charcoal/45 px-4 py-3">
                  <p className="text-xs uppercase tracking-widest text-foreground/50">{k}</p>
                  <p className="mt-1 text-white">{v}</p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 rounded-2xl border border-gold/25 bg-charcoal/45 p-7">
            <h2 className="font-serif text-2xl text-gradient-gold">What Happens Next</h2>
            <ol className="mt-5 space-y-4 text-sm text-foreground/80">
              {[
                "Our operations team checks slot availability with the heliport.",
                "You receive confirmation with exact departure time and meeting point.",
                "Payment is arranged only after your slot is confirmed.",
                "Arrive 45 minutes early with passport or national ID for check-in.",
              ].map((s, i) => (
                <li key={s} className="flex gap-3">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[var(--gold)] text-[10px] font-bold text-[var(--onyx)]">
                    {i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ol>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`${WHATSAPP_LINK}${waText ? `?text=${waText}` : ""}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold-bright)] to-[var(--gold)] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[var(--onyx)]"
              >
                <MessageCircle className="size-4" /> WhatsApp Our Team
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}${req ? `?subject=Booking%20${req.reference}` : ""}`}
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-xs uppercase tracking-widest text-[var(--gold-bright)]"
              >
                <Mail className="size-4" /> Email Us
              </a>
              <Link
                to="/experiences"
                className="inline-flex items-center rounded-full border border-gold/25 px-6 py-3 text-xs uppercase tracking-widest text-foreground/75"
              >
                Browse Experiences
              </Link>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
