import Image from "next/image";
import { getTranslations } from "next-intl/server";
import BrandPage from "../../_components/BrandPage";

export async function generateMetadata() {
  const t = await getTranslations("consumption");
  return { title: t("metaTitle") };
}

export default async function Page() {
  const t = await getTranslations("consumption");

  const catalogue = (
    <section className="mt-24 text-center">
      <span className="text-muted font-bold text-sm uppercase tracking-widest">{t("catalogueEyebrow")}</span>
      <h2 className="font-serif text-4xl md:text-5xl mt-3">{t("catalogueTitle")}</h2>
      <div className="mt-10 relative w-full aspect-[3/4]">
        <Image src="/img/katalogikan.png" alt="Fish catalogue" fill sizes="100vw" className="object-contain" />
      </div>
    </section>
  );

  return (
    <BrandPage
      heroColor="#c05e1a"
      logo="/img/logo_consuptions-scaled.png"
      title={t("title")}
      about={{ img: "/img/about_consuption.png", paragraphs: [t("aboutP1")] }}
      extraSection={catalogue}
    />
  );
}
