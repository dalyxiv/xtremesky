export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-32 md:pt-40">
      {image && (
        <>
          <img src={image} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-onyx/85 via-onyx/80 to-onyx" />
        </>
      )}
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-[var(--gold-bright)]">{eyebrow}</p>
        <h1 className="mt-5 font-serif text-4xl leading-tight text-gradient-gold md:text-6xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-5 max-w-2xl text-foreground/75">{subtitle}</p>}
      </div>
    </section>
  );
}
