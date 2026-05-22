export default function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="bg-warm">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-20 md:py-28 text-center">
        {eyebrow && <span className="text-brand font-semibold text-sm uppercase tracking-widest">{eyebrow}</span>}
        <h1 className="font-serif text-5xl md:text-6xl mt-3">{title}</h1>
        {subtitle && <p className="mt-5 text-lg text-muted max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}
