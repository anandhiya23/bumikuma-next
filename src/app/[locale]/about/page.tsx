import Image from "next/image";
import { getTranslations } from "next-intl/server";
import PageHero from "../../_components/PageHero";
import CtaBanner from "../../_components/CtaBanner";

export async function generateMetadata() {
  const t = await getTranslations("about");
  return { title: t("metaTitle") };
}

export default async function About() {
  const t = await getTranslations("about");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/3]">
          <Image src="/img/aboutus.png" alt="" fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover rounded-2xl" />
        </div>
        <div>
          <h2 className="font-serif text-3xl md:text-4xl">{t("est")}</h2>
          <p className="mt-5 text-muted leading-relaxed">{t("p1")}</p>
          <p className="mt-4 text-muted leading-relaxed">{t("p2")}</p>
        </div>
      </section>

      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-3xl md:text-4xl">{t("businessHeading")}</h2>
            <p className="mt-5 text-muted leading-relaxed">{t("businessP1")}</p>
            <p className="mt-4 text-muted leading-relaxed">{t("businessP2")}</p>
          </div>
          <div className="order-1 lg:order-2 relative aspect-[4/3]">
            <Image src="/img/pt2bkl2.png" alt="" fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover rounded-2xl" />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
