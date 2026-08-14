import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CurrencyDisclaimer, useCurrency } from "@/lib/currency";
import { TOUR_LIST, TOURS, type RouteKey } from "@/lib/tours";
import { saveBookingRequest, type BookingRequest } from "@/lib/booking-store";

const searchSchema = z.object({
  route: z.enum(["gold", "platinum"]).optional(),
});

export const Route = createFileRoute("/book")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Check Availability — Request Your Helicopter Flight" },
      {
        name: "description",
        content:
          "Request availability for a private or shared helicopter flight over the Pyramids of Giza. No upfront payment — our team confirms your slot first.",
      },
      { property: "og:title", content: "Check Availability — Xtreme Sky Egypt" },
      { property: "og:description", content: "Four quick steps to request your flight slot. No payment required to enquire." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: BookPage,
});

const steps = ["Experience", "Flight Details", "Your Details", "Review"];

const detailsSchema = z.object({
  date: z.string().min(1, "Choose a preferred date"),
  timeWindow: z.string().min(1, "Choose a time window"),
  passengers: z.number().min(1).max(4),
  weights: z.string().trim().max(200).optional(),
  transfer: z.boolean(),
  occasion: z.string().trim().max(120).optional(),
});

const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(6, "Enter a reachable number").max(40),
  country: z.string().trim().min(2, "Enter your country").max(80),
  notes: z.string().trim().max(600).optional(),
});

const inputCls =
  "w-full rounded-xl border border-gold/30 bg-onyx/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-foreground/40 focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/30";
const labelCls = "mb-2 block text-xs uppercase tracking-[0.2em] text-[var(--gold-bright)]";

function BookPage() {
  const { route } = Route.useSearch();
  const navigate = useNavigate();
  const { format, currency } = useCurrency();

  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [routeKey, setRouteKey] = useState<RouteKey>(route ?? "platinum");
  const [flightType, setFlightType] = useState<"shared" | "private">("private");
  const [date, setDate] = useState("");
  const [timeWindow, setTimeWindow] = useState("Morning (08:00 – 11:00)");
  const [passengers, setPassengers] = useState(2);
  const [weights, setWeights] = useState("");
  const [transfer, setTransfer] = useState(false);
  const [occasion, setOccasion] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [notes, setNotes] = useState("");
  const [confirmChannel, setConfirmChannel] = useState("Email");
  const [video, setVideo] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeWeather, setAgreeWeather] = useState(false);

  const tour = TOURS[routeKey];
  const estimate =
    flightType === "private" ? tour.charterPriceUsd : tour.seatPriceUsd * passengers;

  const validateStep = () => {
    if (step === 1) {
      const r = detailsSchema.safeParse({ date, timeWindow, passengers, weights, transfer, occasion });
      if (!r.success) {
        setErrors(Object.fromEntries(r.error.issues.map((i) => [String(i.path[0]), i.message])));
        return false;
      }
    }
    if (step === 2) {
      const r = contactSchema.safeParse({ name, email, phone, country, notes });
      if (!r.success) {
        setErrors(Object.fromEntries(r.error.issues.map((i) => [String(i.path[0]), i.message])));
        return false;
      }
    }
    setErrors({});
    return true;
  };

  const next = () => validateStep() && setStep((s) => Math.min(s + 1, 3));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submit = () => {
    if (!validateStep()) return;
    if (!agreeTerms || !agreeWeather) {
      setErrors({ consent: "Please confirm both statements before submitting." });
      return;
    }
    setSubmitting(true);
    const reference = `XSE-${Date.now().toString(36).toUpperCase().slice(-6)}`;
    const payload: BookingRequest = {
      reference,
      routeKey,
      routeName: `${tour.name} — ${tour.subtitle}`,
      duration: tour.duration,
      flightType,
      date,
      timeWindow,
      passengers,
      weights,
      transfer,
      occasion,
      name,
      email,
      phone,
      country,
      notes: [notes, video ? "Add-on requested: onboard video package" : "", `Preferred confirmation: ${confirmChannel}`]
        .filter(Boolean)
        .join(" | "),
      estimateUsd: estimate,
      currency,
      submittedAt: new Date().toISOString(),
    };
    saveBookingRequest(payload);
    navigate({ to: "/booking-summary" });
  };

  return (
    <main className="bg-onyx text-foreground">
      <SiteHeader />
      <section className="px-6 pb-20 pt-32">
        <div className="mx-auto max-w-3xl">
          <Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[var(--gold-bright)] transition hover:text-white">
            <ArrowLeft className="size-4" /> Back to home
          </Link>
          <h1 className="mt-6 font-serif text-4xl text-gradient-gold md:text-5xl">Check Availability</h1>
          <p className="mt-3 text-foreground/70">
            No payment is taken here. Our flight team verifies your slot and confirms everything with you first.
          </p>

          <ol className="mt-10 flex flex-wrap gap-3">
            {steps.map((s, i) => (
              <li
                key={s}
                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs uppercase tracking-widest transition ${
                  i === step
                    ? "border-[var(--gold)] bg-[var(--gold)]/10 text-[var(--gold-bright)]"
                    : i < step
                      ? "border-gold/30 text-foreground/60"
                      : "border-gold/15 text-foreground/40"
                }`}
              >
                {i < step ? <Check className="size-3.5" /> : <span>{i + 1}</span>} {s}
              </li>
            ))}
          </ol>

          <div className="mt-8 rounded-2xl border border-gold/25 bg-charcoal/55 p-7">
            {step === 0 && (
              <div className="space-y-6">
                <div>
                  <p className={labelCls}>Choose your experience</p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {TOUR_LIST.map((t) => (
                      <button
                        key={t.key}
                        type="button"
                        onClick={() => setRouteKey(t.key)}
                        className={`rounded-xl border p-5 text-left transition ${
                          routeKey === t.key ? "border-[var(--gold)] bg-[var(--gold)]/10" : "border-gold/25 hover:border-gold/50"
                        }`}
                      >
                        <p className="font-serif text-xl text-gradient-gold">{t.name}</p>
                        <p className="mt-1 text-sm text-foreground/70">{t.subtitle}</p>
                        <p className="mt-3 text-sm text-[var(--gold-bright)]">
                          {t.duration} · from {format(t.seatPriceUsd)} / seat
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className={labelCls}>Flight type</p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { key: "private" as const, title: "Private Charter", desc: "The whole helicopter for your group (1–4 guests)." },
                      { key: "shared" as const, title: "Shared Seats", desc: "Book individual seats and fly with other guests." },
                    ].map((o) => (
                      <button
                        key={o.key}
                        type="button"
                        onClick={() => setFlightType(o.key)}
                        className={`rounded-xl border p-5 text-left transition ${
                          flightType === o.key ? "border-[var(--gold)] bg-[var(--gold)]/10" : "border-gold/25 hover:border-gold/50"
                        }`}
                      >
                        <p className="font-medium text-white">{o.title}</p>
                        <p className="mt-1 text-sm text-foreground/70">{o.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelCls} htmlFor="date">Preferred date</label>
                  <input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} className={inputCls} />
                  {errors.date && <p className="mt-1 text-xs text-destructive">{errors.date}</p>}
                </div>
                <div>
                  <label className={labelCls} htmlFor="time">Time window</label>
                  <select id="time" value={timeWindow} onChange={(e) => setTimeWindow(e.target.value)} className={inputCls}>
                    <option>Morning (08:00 – 11:00)</option>
                    <option>Midday (11:00 – 14:00)</option>
                    <option>Afternoon (14:00 – 16:30)</option>
                    <option>Golden hour (16:30 – sunset)</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls} htmlFor="pax">Passengers</label>
                  <select id="pax" value={passengers} onChange={(e) => setPassengers(Number(e.target.value))} className={inputCls}>
                    {[1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? "passenger" : "passengers"}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelCls} htmlFor="occasion">Special occasion (optional)</label>
                  <input id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} maxLength={120} placeholder="Proposal, birthday, anniversary…" className={inputCls} />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelCls} htmlFor="weights">Passenger weights in kg (for weight &amp; balance)</label>
                  <input id="weights" value={weights} onChange={(e) => setWeights(e.target.value)} maxLength={200} placeholder="e.g. 82, 65, 71" className={inputCls} />
                  <p className="mt-2 text-xs text-foreground/55">Handled confidentially and used only for safe payload planning.</p>
                </div>
                <label className="flex items-center gap-3 text-sm text-foreground/80 sm:col-span-2">
                  <input type="checkbox" checked={transfer} onChange={(e) => setTransfer(e.target.checked)} className="size-4 accent-[var(--gold)]" />
                  I would like a hotel transfer quote
                </label>
                <label className="flex items-center gap-3 text-sm text-foreground/80 sm:col-span-2">
                  <input type="checkbox" checked={video} onChange={(e) => setVideo(e.target.checked)} className="size-4 accent-[var(--gold)]" />
                  Add the onboard video package (priced with your confirmation)
                </label>
              </div>
            )}

            {step === 2 && (
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelCls} htmlFor="name">Full name</label>
                  <input id="name" value={name} onChange={(e) => setName(e.target.value)} maxLength={100} className={inputCls} />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <label className={labelCls} htmlFor="email">Email</label>
                  <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={255} className={inputCls} />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                </div>
                <div>
                  <label className={labelCls} htmlFor="phone">Phone / WhatsApp</label>
                  <input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} maxLength={40} className={inputCls} />
                  {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                </div>
                <div>
                  <label className={labelCls} htmlFor="country">Country</label>
                  <input id="country" value={country} onChange={(e) => setCountry(e.target.value)} maxLength={80} className={inputCls} />
                  {errors.country && <p className="mt-1 text-xs text-destructive">{errors.country}</p>}
                </div>
                <div>
                  <label className={labelCls} htmlFor="channel">Preferred confirmation channel</label>
                  <select id="channel" value={confirmChannel} onChange={(e) => setConfirmChannel(e.target.value)} className={inputCls}>
                    <option>Email</option>
                    <option>WhatsApp</option>
                    <option>Phone call</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className={labelCls} htmlFor="notes">Anything else we should know?</label>
                  <textarea id="notes" rows={4} value={notes} onChange={(e) => setNotes(e.target.value)} maxLength={600} className={inputCls} />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-5">
                <h2 className="font-serif text-2xl text-gradient-gold">Review your request</h2>
                <dl className="grid gap-3 text-sm sm:grid-cols-2">
                  {[
                    ["Experience", `${tour.name} · ${tour.duration}`],
                    ["Flight type", flightType === "private" ? "Private charter" : "Shared seats"],
                    ["Date", date],
                    ["Time window", timeWindow],
                    ["Passengers", String(passengers)],
                    ["Hotel transfer", transfer ? "Requested" : "Not required"],
                    ["Name", name],
                    ["Email", email],
                    ["Phone", phone],
                    ["Country", country],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-xl border border-gold/20 bg-onyx/60 px-4 py-3">
                      <dt className="text-xs uppercase tracking-widest text-foreground/50">{k}</dt>
                      <dd className="mt-1 text-white">{v || "—"}</dd>
                    </div>
                  ))}
                </dl>
                <div className="rounded-xl border border-gold/30 bg-onyx/70 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-bright)]">Indicative total</p>
                  <p className="mt-2 font-serif text-3xl text-gradient-gold">{format(estimate)}</p>
                  <CurrencyDisclaimer className="mt-2" />
                </div>
                <div className="space-y-3 rounded-xl border border-gold/20 bg-onyx/60 p-5 text-sm text-foreground/80">
                  <label className="flex items-start gap-3">
                    <input type="checkbox" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} className="mt-0.5 size-4 accent-[var(--gold)]" />
                    <span>
                      I have read the <Link to="/terms" className="text-[var(--gold-bright)] underline underline-offset-4">booking terms</Link> and{" "}
                      <Link to="/privacy" className="text-[var(--gold-bright)] underline underline-offset-4">privacy notice</Link>.
                    </span>
                  </label>
                  <label className="flex items-start gap-3">
                    <input type="checkbox" checked={agreeWeather} onChange={(e) => setAgreeWeather(e.target.checked)} className="mt-0.5 size-4 accent-[var(--gold)]" />
                    <span>
                      I understand flights depend on clearance and weather, and that this request is reviewed by
                      operations before any payment is taken.
                    </span>
                  </label>
                  {errors.consent && <p className="text-xs text-destructive">{errors.consent}</p>}
                </div>
                <p className="text-sm text-foreground/70">
                  Submitting sends an availability request only. No card details are collected and nothing is charged.
                </p>
              </div>
            )}

            <div className="mt-8 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={back}
                disabled={step === 0}
                className="inline-flex items-center gap-2 rounded-full border border-gold/35 px-5 py-3 text-xs uppercase tracking-widest text-[var(--gold-bright)] transition hover:border-[var(--gold)] disabled:opacity-30"
              >
                <ArrowLeft className="size-4" /> Back
              </button>
              {step < 3 ? (
                <button
                  type="button"
                  onClick={next}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold-bright)] to-[var(--gold)] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[var(--onyx)] transition hover:shadow-[0_0_30px_-4px_var(--gold)]"
                >
                  Continue <ArrowRight className="size-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={submit}
                  disabled={submitting}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold-bright)] to-[var(--gold)] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[var(--onyx)] transition hover:shadow-[0_0_30px_-4px_var(--gold)] disabled:opacity-60"
                >
                  {submitting && <Loader2 className="size-4 animate-spin" />} Submit for operational approval
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
