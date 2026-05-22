import Image from "next/image";
import PageHero from "../_components/PageHero";
import CtaBanner from "../_components/CtaBanner";

export const metadata = { title: "Consumptions — Bumandhala Kuma Loka" };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Our Companies" title="Consumptions" subtitle="Quality, safe, ethically-sourced food products." />

      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/3]">
          <Image src="/img/about_consuption.png" alt="" fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover rounded-2xl" />
        </div>
        <div>
          <span className="text-brand font-semibold text-sm uppercase tracking-widest">About</span>
          <h2 className="font-serif text-3xl md:text-4xl mt-3">Consumptions</h2>
          <p className="mt-5 text-muted leading-relaxed">
            Our consumption arm supplies quality, safe, and suitably sourced food products to households, culinary businesses, restaurants, and distribution warehouses across Indonesia. Every product passes a strict selection process to meet food safety standards.
          </p>
        </div>
      </section>

      <section className="bg-warm py-20">
        <div className="max-w-5xl mx-auto px-5 lg:px-10 text-center">
          <span className="text-brand font-semibold text-sm uppercase tracking-widest">Catalogue</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3">Fish Catalogue</h2>
          <div className="mt-10 relative w-full aspect-[3/4] max-w-2xl mx-auto">
            <Image src="/img/A4-4.png" alt="Fish catalogue" fill sizes="(min-width: 1024px) 768px, 100vw" className="object-contain" />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
