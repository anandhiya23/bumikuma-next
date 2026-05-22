import Image from "next/image";
import PageHero from "./PageHero";
import CtaBanner from "./CtaBanner";
import FAQ from "./FAQ";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  about: { img: string; paragraphs: string[] };
  faqs?: { q: string; a: string }[];
  projects?: { img: string; title: string; year: string; brand: string }[];
  comingSoon?: boolean;
};

export default function BrandPage({ eyebrow, title, subtitle, about, faqs, projects, comingSoon }: Props) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />

      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/3]">
          <Image src={about.img} alt="" fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover rounded-2xl" />
        </div>
        <div>
          <span className="text-brand font-semibold text-sm uppercase tracking-widest">About</span>
          <h2 className="font-serif text-3xl md:text-4xl mt-3">{title}</h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="mt-4 text-muted leading-relaxed">{p}</p>
          ))}
        </div>
      </section>

      {comingSoon && (
        <section className="bg-warm py-24 text-center">
          <h2 className="font-serif text-5xl">Coming Soon</h2>
          <p className="mt-4 text-muted">We're brewing something good. Stay tuned.</p>
        </section>
      )}

      {projects && projects.length > 0 && (
        <section className="bg-warm py-20">
          <div className="max-w-7xl mx-auto px-5 lg:px-10">
            <div className="text-center mb-12">
              <span className="text-brand font-semibold text-sm uppercase tracking-widest">Projects</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-3">What do we do?</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p) => (
                <article key={p.title} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                  <div className="relative aspect-[4/3] bg-warm">
                    <Image src={p.img} alt={p.title} fill sizes="(min-width: 1024px) 400px, 50vw" className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-semibold text-brand uppercase tracking-widest">{p.brand} · {p.year}</div>
                    <h3 className="font-serif text-xl mt-2">{p.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {faqs && faqs.length > 0 && <FAQ items={faqs} />}
      <CtaBanner />
    </>
  );
}
