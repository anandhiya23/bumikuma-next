import Image from "next/image";
import { getTranslations } from "next-intl/server";
import PageHero from "../../_components/PageHero";
import CtaBanner from "../../_components/CtaBanner";

const projectImages = [
  "/img/Frame-2147227177.png",
  "/img/Group-1171275050.png",
  "/img/image-32.png",
  "/img/Frame-2147227147.png",
];

const projectBrands = [
  "Bumi Kuma Pet Store",
  "Bumi Kuma Pet Store",
  "Bumi Kuma Pet Store",
  "Papua Abadi Nusantara",
];

const projectYears = ["2025", "2025", "2025", "2025"];

export async function generateMetadata() {
  const t = await getTranslations("projects");
  return { title: t("metaTitle") };
}

export default async function Projects() {
  const t = await getTranslations("projects");
  const items = t.raw("items") as { title: string }[];

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <article key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group">
              <div className="relative aspect-[4/3] overflow-hidden bg-warm">
                <Image
                  src={projectImages[i]}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold text-brand uppercase tracking-widest">
                  {projectBrands[i]} · {projectYears[i]}
                </div>
                <h3 className="font-serif text-xl mt-2">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
