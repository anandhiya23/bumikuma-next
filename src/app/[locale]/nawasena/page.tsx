import { getTranslations } from "next-intl/server";
import BrandPage from "../../_components/BrandPage";

export async function generateMetadata() {
  const t = await getTranslations("nawasena");
  return { title: t("metaTitle") };
}

export default async function Page() {
  const t = await getTranslations("nawasena");

  return (
    <BrandPage
      heroColor="#5c3d1e"
      logo="/img/nawasena_logo-1-scaled.png"
      title={t("title")}
      about={{ img: "/img/Group-1171275059.png", paragraphs: [t("aboutP1")] }}
      comingSoon
    />
  );
}
