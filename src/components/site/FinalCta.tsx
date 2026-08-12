import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/tours";
import img from "@/assets/heli-6.jpeg";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden px-6 py-28">
      <img src={img} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-b from-onyx/90 via-onyx/85 to-onyx" />
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-3xl text-gradient-gold md:text-5xl">Your Slot Above The Pyramids</h2>
        <p className="mx-auto mt-5 max-w-xl text-foreground/80">
          Send an availability request in under a minute. No payment is taken until your flight is confirmed by our
          operations team.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            to="/book"
            className="inline-flex rounded-full bg-gradient-to-r from-[var(--gold-bright)] to-[var(--gold)] px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--onyx)] transition hover:shadow-[0_0_40px_-4px_var(--gold)]"
          >
            Check Availability
          </Link>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/50 px-8 py-4 text-xs uppercase tracking-[0.3em] text-white transition hover:bg-white hover:text-[var(--onyx)]"
          >
            <MessageCircle className="size-4" /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
