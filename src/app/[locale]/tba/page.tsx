import { getTranslations } from "next-intl/server";
import BrandPage from "../../_components/BrandPage";

export async function generateMetadata() {
  const t = await getTranslations("tba");
  return { title: t("metaTitle") };
}

export default async function Page() {
  const t = await getTranslations("tba");
  const projects = t.raw("projects") as { title: string; desc: string }[];
  const faqs = t.raw("faqs") as { q: string; a: string }[];

  return (
    <BrandPage
      heroColor="#1a1a2e"
      logo="/img/logo_tba-scaled.png"
      title={t("title")}
      about={{
        img: "/img/aboutus_tba.png",
        img2: "/img/sdf.png",
        paragraphs: [t("aboutP1"), t("aboutP2")],
      }}
      projects={projects.map((p) => ({
        img: "/img/sdf.png",
        title: p.title,
        year: "2025",
        brand: "TBA Studio",
        desc: p.desc,
      }))}
      faqs={faqs}
    />
  );
}
