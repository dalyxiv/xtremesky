import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book Your Flight — Xtreme Sky Egypt" },
      { name: "description", content: "Reserve your private helicopter tour over Cairo and Giza. Pay on arrival." },
      { property: "og:title", content: "Book Your Flight — Xtreme Sky Egypt" },
      { property: "og:description", content: "Leave your contact info and our team will confirm your booking." },
    ],
  }),
  component: BookingPage,
});

function BookingPage() {
  return (
    <main className="min-h-screen bg-onyx text-foreground">
      <div className="px-6 pt-24">
        <div className="mx-auto max-w-3xl">
          <Link to="/" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-[var(--gold-bright)] hover:text-white transition">
            <ArrowLeft className="size-4" /> Back to Home
          </Link>
        </div>
      </div>
      <Contact />
    </main>
  );
}
