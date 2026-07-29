import Image from "next/image";
import { getTranslations } from "next-intl/server";
import BrandPage from "../../_components/BrandPage";
import type { FishItem } from "@/lib/fish";
import { CATEGORIES, getFishItems, fishImageUrl } from "@/lib/fish";

export async function generateMetadata() {
  const t = await getTranslations("consumption");
  return { title: t("metaTitle") };
}

export default async function Page() {
  const t = await getTranslations("consumption");
  const fish = getFishItems({ inStockOnly: true });

  const grouped = CATEGORIES.reduce<Record<string, FishItem[]>>(
    (acc, cat) => {
      acc[cat] = fish.filter((f) => f.category === cat);
      return acc;
    },
    {} as Record<string, FishItem[]>
  );

  const catalogue = (
    <section className="mt-24 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-muted font-bold text-sm uppercase tracking-widest">
          {t("catalogueEyebrow")}
        </span>
        <h2 className="font-serif text-4xl md:text-5xl mt-3">
          {t("catalogueTitle")}
        </h2>
      </div>

      <div className="space-y-16">
        {CATEGORIES.map((cat) => {
          const items = grouped[cat];
          if (!items?.length) return null;
          return (
            <div key={cat}>
              <h3 className="font-serif text-2xl md:text-3xl mb-6 pb-3 border-b border-warm">
                {cat}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition group"
                  >
                    <div className="relative aspect-square bg-orange-50">
                      {item.image_path ? (
                        <Image
                          src={fishImageUrl(item.image_path)}
                          alt={item.name}
                          fill
                          sizes="(min-width: 1024px) 220px, (min-width: 640px) 33vw, 50vw"
                          className="object-cover group-hover:scale-105 transition duration-300"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-[#c05e1a]/20 flex items-center justify-center">
                            <span className="text-[#c05e1a] text-2xl">🐟</span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-3">
                      <p className="font-semibold text-sm leading-tight">
                        {item.name}
                      </p>
                      <p className="text-xs text-muted mt-0.5">{item.unit_info}</p>
                      <p className="text-sm font-bold text-[#c05e1a] mt-1">
                        {item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
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
