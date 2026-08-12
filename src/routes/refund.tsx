import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund Policy — Xtreme Sky Egypt" },
      { name: "description", content: "Refund and cancellation policy for Xtreme Sky Egypt helicopter tours." },
      { property: "og:title", content: "Refund Policy — Xtreme Sky Egypt" },
      { property: "og:description", content: "Weather, cancellations, late arrivals and no-shows explained." },
    ],
  }),
  component: RefundPage,
});

function RefundPage() {
  return (
    <main className="min-h-screen bg-onyx text-foreground">
      <SiteHeader />
      <div className="px-6 pb-20 pt-32">
      <div className="mx-auto max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-[var(--gold-bright)] hover:text-white transition mb-10">
          <ArrowLeft className="size-4" /> Back to Home
        </Link>
        <p className="text-xs tracking-[0.4em] text-[var(--gold-bright)] mb-4">POLICY</p>
        <h1 className="font-serif text-4xl md:text-5xl text-gradient-gold mb-8">Refund & Cancellation Policy</h1>
        <p className="text-foreground/80 leading-relaxed mb-6">
          At Xtreme Sky, your safety and experience are our top priorities. Because we operate on a
          Pay-on-Arrival basis, no upfront online payments are collected. However, we ask that you
          strictly adhere to our scheduling guidelines:
        </p>
        <ul className="space-y-5 text-foreground/80 leading-relaxed">
          <li>
            <span className="text-white font-semibold">Weather & Safety:</span> Helicopter flights are
            strictly subject to weather conditions, visibility, and airspace approvals. If Xtreme Sky
            must cancel your flight due to safety or operational concerns, you will be offered an
            immediate reschedule or a complete cancellation with zero penalty.
          </li>
          <li>
            <span className="text-white font-semibold">Customer Cancellations:</span> You may cancel or
            modify your booking free of charge up to 48 hours before your scheduled flight time by
            contacting our support team.
          </li>
          <li>
            <span className="text-white font-semibold">Late Arrivals & No-Shows:</span> Passengers are
            required to arrive at the VIP Lounge at least 30 minutes prior to departure. Late arrivals
            or no-shows will forfeit their scheduled flight slot and are not guaranteed a rescheduled time.
          </li>
        </ul>
      </div>
      </div>
      <SiteFooter />
    </main>
  );
}
