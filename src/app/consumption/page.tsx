import Image from "next/image";
import BrandPage from "../_components/BrandPage";

export const metadata = { title: "Consumptions — Bumandhala Kuma Loka" };

const catalogue = (
  <section className="max-w-5xl mx-auto px-6 mt-24 text-center">
    <span className="text-muted font-bold text-sm uppercase tracking-widest">Catalogue</span>
    <h2 className="font-serif text-4xl md:text-5xl mt-3">Fish Catalogue</h2>
    <div className="mt-10 relative w-full aspect-[3/4] max-w-2xl mx-auto">
      <Image src="/img/A4-4.png" alt="Fish catalogue" fill sizes="(min-width: 1024px) 768px, 100vw" className="object-contain" />
    </div>
  </section>
);

export default function Page() {
  return (
    <BrandPage
      heroColor="#c05e1a"
      logo="/img/logo_consuptions-scaled.png"
      title="Consumptions"
      about={{
        img: "/img/about_consuption.png",
        paragraphs: [
          "Our consumption arm supplies quality, safe, and suitably sourced food products to households, culinary businesses, restaurants, and distribution warehouses across Indonesia. Every product passes a strict selection process to meet food safety standards.",
        ],
      }}
      extraSection={catalogue}
    />
  );
}
