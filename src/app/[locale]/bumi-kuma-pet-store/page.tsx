import { getTranslations } from "next-intl/server";
import BrandPage from "../../_components/BrandPage";

export async function generateMetadata() {
  const t = await getTranslations("petStore");
  return { title: t("metaTitle") };
}

export default async function Page() {
  const t = await getTranslations("petStore");
  const projects = t.raw("projects") as { title: string; desc: string }[];
  const faqs = t.raw("faqs") as { q: string; a: string }[];

  return (
    <BrandPage
      heroColor="#48745C"
      logo="/img/logo_bumipet-scaled.png"
      title={t("title")}
      about={{
        img: "/img/pt2bkl1.png",
        img2: "/img/pt2bkl2.png",
        paragraphs: [t("aboutP1"), t("aboutP2")],
      }}
      projects={projects.map((p, i) => ({
        img: ["/img/Frame-2147227177.png", "/img/Group-1171275050.png", "/img/image-32.png"][i],
        title: p.title,
        year: "2025",
        brand: "Bumi Kuma Pet Store",
        desc: p.desc,
      }))}
      faqs={faqs}
    />
  );
}
