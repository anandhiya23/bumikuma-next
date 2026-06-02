import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import FAQ from "../../_components/FAQ";
import BusinessesCarousel from "../../_components/BusinessesCarousel";
import CtaBanner from "../../_components/CtaBanner";

const brandHrefs = [
  "/bumi-kuma-pet-store",
  "/papua-abadi-nusantara",
  "/nawasena",
  "/consumption",
];

const brandLogos = [
  "/img/logo_bumipet-scaled.png",
  "/img/logo_pan-scaled.png",
  "/img/nawasena_logo-1-scaled.png",
  "/img/logo_consuptions-scaled.png",
];

const brandImages = [
  "/img/heropt2-1.png",
  "/img/heropan.png",
  "/img/heronawasena.png",
  "/img/about_consuption.png",
];

const brandColors = ["#7eb65d", "#1a3c6e", "#5c3d1e", "#c05e1a"];

const partners = [
  { src: "/img/image1-removebg-preview-e1750865584712.png", alt: "Partner" },
  { src: "/img/image2-1.png", alt: "Partner" },
  { src: "/img/image3-removebg-preview-e1750865597439.png", alt: "Partner" },
  { src: "/img/image4-removebg-preview-e1750865499740.png", alt: "Partner" },
  { src: "/img/image5-removebg-preview-e1750865679882.png", alt: "Partner" },
  { src: "/img/image6-removebg-preview-e1750865692957.png", alt: "Partner" },
  { src: "/img/image7-removebg-preview-e1750865610825.png", alt: "Partner" },
  { src: "/img/image8-2.png", alt: "Partner" },
  { src: "/img/image9.png", alt: "Partner" },
  { src: "/img/image10-e1750865635831.png", alt: "Partner" },
  { src: "/img/image11-removebg-preview-e1750865645564.png", alt: "Partner" },
];

export default async function Home() {
  const t = await getTranslations("home");

  const brands = (t.raw("brands") as { title: string; desc: string }[]).map(
    (b, i) => ({
      href: brandHrefs[i],
      logo: brandLogos[i],
      image: brandImages[i],
      color: brandColors[i],
      title: b.title,
      desc: b.desc,
    })
  );

  const faqs = t.raw("faqs") as { q: string; a: string }[];

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-8">
        <div className="relative rounded-3xl overflow-hidden min-h-[80vh] flex items-center justify-center">
          <Image
            src="/img/herobkl-1-scaled.png"
            alt="Lush landscape"
            fill
            priority
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center max-w-4xl px-4 text-white">
            <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
              {t("heroHeading")}
            </h1>
            <p className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto opacity-90">
              {t("heroSub")}
            </p>
            <Link
              href="/about"
              className="bg-foreground text-white px-10 py-3 rounded-full font-semibold hover:bg-foreground/80 transition-all"
            >
              {t("heroCta")}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-muted mb-4 block">
            {t("aboutEyebrow")}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl">{t("aboutHeading")}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3]">
            <Image
              src="/img/Rectangle-832-1024x686.png"
              alt="Plantation"
              fill
              sizes="(min-width: 768px) 600px, 100vw"
              className="object-cover rounded-3xl shadow-xl"
            />
          </div>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>{t("aboutP1")}</p>
            <p>{t("aboutP2")}</p>
            <Link
              href="/about"
              className="inline-block mt-2 bg-foreground text-white px-8 py-3 rounded-full font-semibold hover:bg-foreground/80 transition-all"
            >
              {t("aboutCta")}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-bold uppercase tracking-widest text-muted block">
            {t("partnersEyebrow")}
          </span>
        </div>
        <div className="bg-[#f3f4f6] rounded-[2rem] p-12 md:p-20">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-10 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {partners.map((p, i) => (
              <div key={i} className="relative h-8 w-24">
                <Image src={p.src} alt={p.alt} fill className="object-contain" sizes="96px" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <BusinessesCarousel brands={brands} />

      <CtaBanner />

      <FAQ items={faqs} />
    </>
  );
}
