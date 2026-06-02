import { getTranslations } from "next-intl/server";
import BrandPage from "../../_components/BrandPage";

export async function generateMetadata() {
  const t = await getTranslations("papuaAbadi");
  return { title: t("metaTitle") };
}

export default async function Page() {
  const t = await getTranslations("papuaAbadi");
  const projects = t.raw("projects") as { title: string; desc: string }[];
  const faqs = t.raw("faqs") as { q: string; a: string }[];

  return (
    <BrandPage
      heroColor="#1a3c6e"
      logo="/img/logo_pan-scaled.png"
      title={t("title")}
      about={{
        img: "/img/aboutus_pan.png",
        paragraphs: [t("aboutP1"), t("aboutP2"), t("aboutP3")],
      }}
      projects={projects.map((p) => ({
        img: "/img/image-32.png",
        title: p.title,
        year: "2025",
        brand: "Papua Abadi Nusantara",
        desc: p.desc,
      }))}
      faqs={faqs}
    />
  );
}
