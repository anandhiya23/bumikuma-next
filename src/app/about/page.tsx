import Image from "next/image";
import PageHero from "../_components/PageHero";
import CtaBanner from "../_components/CtaBanner";

export const metadata = { title: "About Us — Bumandhala Kuma Loka" };

export default function About() {
  return (
    <>
      <PageHero eyebrow="Who We Are" title="Bumandhala Kuma Loka" subtitle="A holding company rooted in natural resources." />

      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/3]">
          <Image src="/img/aboutus.png" alt="" fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover rounded-2xl" />
        </div>
        <div>
          <h2 className="font-serif text-3xl md:text-4xl">Established 2023</h2>
          <p className="mt-5 text-muted leading-relaxed">
            In 2023, we were legally established, and to this day we have served both domestic and international markets through a professional export-import distribution network that complies with regulations. As a result, the products we offer undergo a strict selection process to ensure quality, safety, and suitability for consumption.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Our products have been distributed for household needs, culinary businesses, restaurants, and large distribution warehouses across various regions in Indonesia — supported by a controlled supply chain that meets food safety standards.
          </p>
        </div>
      </section>

      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-3xl md:text-4xl">Four Growing Businesses</h2>
            <p className="mt-5 text-muted leading-relaxed">
              As a holding company, we oversee three growing businesses: Bumi Kuma Pet Store, PT. Papua Abadi Nusantara, and Kopi Kuma Nawasena.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              From this foundation, we believe that being a strong company means the ability to build long-term relationships and grow them into inclusive, ethical, responsible, and impactful businesses. Our strength lies in the ability to recognize potential, manage resources with care, and develop them through wise investment and innovation.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative aspect-[4/3]">
            <Image src="/img/pt2bkl2.png" alt="" fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover rounded-2xl" />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
