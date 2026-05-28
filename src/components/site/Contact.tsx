import { useState } from "react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Xtreme Sky Egypt — Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.location.href = `mailto:info@skypharaohs.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const onChange = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value.slice(0, 1000) }));

  return (
    <section id="contact" className="bg-onyx px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.4em] text-[var(--gold-bright)] mb-4">GET IN TOUCH</p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gradient-gold">
            Book Your Sky Experience
          </h2>
          <p className="mt-4 text-foreground/70">
            Send us your inquiry and our concierge team will get back within 24 hours.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-gold/30 bg-charcoal p-8 md:p-10 space-y-5 glow-platinum"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <input
              required
              maxLength={100}
              placeholder="Full Name"
              value={form.name}
              onChange={onChange("name")}
              className="w-full rounded-lg bg-onyx/60 border border-gold/20 px-4 py-3 text-white placeholder:text-foreground/40 focus:border-[var(--gold-bright)] focus:outline-none transition"
            />
            <input
              required
              type="email"
              maxLength={255}
              placeholder="Email Address"
              value={form.email}
              onChange={onChange("email")}
              className="w-full rounded-lg bg-onyx/60 border border-gold/20 px-4 py-3 text-white placeholder:text-foreground/40 focus:border-[var(--gold-bright)] focus:outline-none transition"
            />
          </div>
          <input
            maxLength={30}
            placeholder="Phone (optional)"
            value={form.phone}
            onChange={onChange("phone")}
            className="w-full rounded-lg bg-onyx/60 border border-gold/20 px-4 py-3 text-white placeholder:text-foreground/40 focus:border-[var(--gold-bright)] focus:outline-none transition"
          />
          <textarea
            required
            maxLength={1000}
            rows={5}
            placeholder="Tell us about your dream flight — route, date, number of passengers..."
            value={form.message}
            onChange={onChange("message")}
            className="w-full rounded-lg bg-onyx/60 border border-gold/20 px-4 py-3 text-white placeholder:text-foreground/40 focus:border-[var(--gold-bright)] focus:outline-none transition resize-none"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-white to-[var(--gold-bright)] px-6 py-4 text-onyx font-semibold tracking-wider uppercase hover:shadow-[0_0_30px_-5px_var(--gold-bright)] hover:-translate-y-0.5 transition"
          >
            Send Inquiry
          </button>
          {sent && (
            <p className="text-center text-sm text-[var(--gold-bright)]">
              Opening your email app… If nothing happens, write us at info@skypharaohs.com
            </p>
          )}
          <p className="text-center text-xs text-foreground/50">
            Or email us directly at{" "}
            <a href="mailto:info@skypharaohs.com" className="text-[var(--gold-bright)] hover:underline">
              info@skypharaohs.com
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
