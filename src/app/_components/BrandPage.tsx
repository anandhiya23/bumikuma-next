import Image from "next/image";
import { getTranslations } from "next-intl/server";
import FAQ from "./FAQ";
import CtaBanner from "./CtaBanner";

type Props = {
  heroColor: string;
  logo: string;
  title: string;
  about: {
    img: string;
    img2?: string;
    paragraphs: string[];
  };
  faqs?: { q: string; a: string }[];
  projects?: { img: string; title: string; year: string; brand: string; desc?: string }[];
  comingSoon?: boolean;
  extraSection?: React.ReactNode;
};

export default async function BrandPage({
  heroColor, logo, title, about, faqs, projects, comingSoon, extraSection,
}: Props) {
  const t = await getTranslations("brandPage");
  const tFaq = await getTranslations("faq");

  const splitAt = Math.ceil(about.paragraphs.length / 2);
  const hasRow2 = !!about.img2;
  const row1Paras = hasRow2 ? about.paragraphs.slice(0, splitAt) : about.paragraphs;
  const row2Paras = hasRow2 ? about.paragraphs.slice(splitAt) : [];

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-8">
        <div
          className="relative rounded-3xl overflow-hidden h-[60vh] min-h-[400px]"
          style={{ backgroundColor: heroColor }}
        >
          <Image
            src={logo}
            alt={title}
            fill
            priority
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-32">
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-sm font-bold text-muted mb-2">{t("aboutEyebrow")}</p>
          <h2 className="font-serif text-4xl md:text-5xl">{title}</h2>
        </div>

        <div className={`grid md:grid-cols-2 gap-16 items-center ${hasRow2 && row2Paras.length > 0 ? "mb-24" : ""}`}>
          <div className="relative aspect-[4/3]">
            <Image
              src={about.img}
              alt=""
              fill
              sizes="(min-width: 768px) 600px, 100vw"
              className="object-cover rounded-3xl shadow-xl"
            />
          </div>
          <div className="space-y-5 text-muted leading-relaxed">
            {row1Paras.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>

        {hasRow2 && row2Paras.length > 0 && (
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 space-y-5 text-muted leading-relaxed">
              {row2Paras.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="order-1 md:order-2 relative aspect-[4/3]">
              <Image
                src={about.img2!}
                alt=""
                fill
                sizes="(min-width: 768px) 600px, 100vw"
                className="object-cover rounded-3xl shadow-xl"
              />
            </div>
          </div>
        )}
      </section>

      {extraSection}

      {comingSoon && (
        <section className="bg-warm py-24 text-center mt-24">
          <h2 className="font-serif text-5xl">{t("comingSoonTitle")}</h2>
          <p className="mt-4 text-muted">{t("comingSoonSub")}</p>
        </section>
      )}

      {projects && projects.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 mt-32">
          <div className="text-center mb-16">
            <p className="uppercase tracking-widest text-sm font-bold text-muted mb-2">{t("projectsEyebrow")}</p>
            <h2 className="font-serif text-4xl md:text-5xl">{t("projectsHeading")}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <article key={p.title} className="bg-white rounded-[2rem] p-6 shadow-sm flex flex-col">
                <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[4/3]">
                  <Image src={p.img} alt={p.title} fill sizes="(min-width: 1024px) 400px, 50vw" className="object-cover" />
                </div>
                <h3 className="font-serif text-2xl mb-3">{p.title}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm text-muted">{p.year}</span>
                  <span className="bg-foreground text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-wide">
                    {p.brand}
                  </span>
                </div>
                {p.desc && <p className="text-sm text-muted leading-relaxed">{p.desc}</p>}
              </article>
            ))}
          </div>
        </section>
      )}

      {faqs && faqs.length > 0 && (
        <div className="mt-16">
          <FAQ items={faqs} title={tFaq("defaultTitle")} />
        </div>
      )}

      <CtaBanner />
    </>
  );
}
