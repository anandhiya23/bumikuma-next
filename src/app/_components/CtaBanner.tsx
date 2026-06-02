import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function CtaBanner() {
  const t = await getTranslations("ctaBanner");

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="font-serif text-5xl md:text-6xl leading-tight mb-8">
          {t("heading1")}<br />{t("heading2")}<br />{t("heading3")}
        </h2>
        <p className="text-lg text-muted mb-10">{t("sub")}</p>
        <Link
          href="/contact"
          className="bg-foreground text-white px-10 py-3 rounded-full font-semibold hover:bg-foreground/80 transition-all"
        >
          {t("cta")}
        </Link>
      </div>
      <div className="relative h-[480px]">
        <div className="absolute bottom-0 left-0 w-3/4 h-3/4 z-10 overflow-hidden rounded-3xl shadow-2xl">
          <Image src="/img/image-32-1024x708.png" alt="" fill className="object-cover" sizes="300px" />
        </div>
        <div className="absolute top-0 right-0 w-3/4 h-3/4 z-20 overflow-hidden rounded-3xl shadow-2xl">
          <Image src="/img/aboutus.png" alt="" fill className="object-cover" sizes="280px" />
        </div>
      </div>
    </section>
  );
}
