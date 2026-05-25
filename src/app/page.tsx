import Image from "next/image";
import Link from "next/link";
import FAQ from "./_components/FAQ";
import BusinessesCarousel from "./_components/BusinessesCarousel";
import CtaBanner from "./_components/CtaBanner";

const brands = [
  { href: "/bumi-kuma-pet-store", logo: "/img/logo_bumipet-scaled.png", image: "/img/heropt2-1.png", title: "Bumi Kuma Pet Store", desc: "More Than Just a Pet Supply Store — We seek, care for, and provide a wide variety of pets with unique species — from exotic animals and household pets to marine life species — all responsibly and ethically sourced with proper certification. With respect for biodiversity, we operate under an ethical trade system.", color: "#7eb65d" },
  { href: "/papua-abadi-nusantara", logo: "/img/logo_pan-scaled.png", image: "/img/heropan.png", title: "Papua Abadi Nusantara", desc: "World-class airport ground handling services in Timika, Papua, providing safe, reliable, and professional operations for major aviation partners across Indonesia.", color: "#1a3c6e" },
  { href: "/nawasena", logo: "/img/nawasena_logo-1-scaled.png", image: "/img/heronawasena.png", title: "Kopi Kuma Nawasena", desc: "Indonesian coffee, cultivated with care — bringing the finest single-origin flavors from the archipelago to your cup through ethical farming and direct-trade partnerships.", color: "#5c3d1e" },
  { href: "/consumption", logo: "/img/logo_consuptions-scaled.png", image: "/img/about_consuption.png", title: "Consumptions", desc: "Quality, safe, ethically-sourced food products cultivated with deep respect for people, communities, and the planet — from farm to table.", color: "#c05e1a" },
];

const partners = [
  { src: "/img/image1-removebg-preview-e1750865584712.png", alt: "Partner" },
  { src: "/img/image2-1.png", alt: "Partner" },
  { src: "/img/image3-removebg-preview-e1750865597439.png", alt: "Partner" },
  { src: "/img/image4-removebg-preview-e1750865499740.png", alt: "Partner" },
  { src: "/img/image5-removebg-preview-e1750865679882.png", alt: "Partner" },
  { src: "/img/image6-removebg-preview-e1750865692957.png", alt: "Partner" },
  { src: "/img/image7-removebg-preview-e1750865610925.png", alt: "Partner" },
  { src: "/img/image8-2.png", alt: "Partner" },
  { src: "/img/image9.png", alt: "Partner" },
  { src: "/img/image10-e1750865635831.png", alt: "Partner" },
  { src: "/img/image11-removebg-preview-e1750865645564.png", alt: "Partner" },
];

const faqs = [
  { q: "What is Bumandhala Kuma Loka?", a: "A holding company rooted in natural resources, overseeing four businesses across pet care, airport services, coffee, and game development." },
  { q: "Where are you based?", a: "Our head office is in Mega Glodok Kemayoran, Central Jakarta, Indonesia. Our subsidiaries operate across Indonesia and internationally." },
  { q: "How can I partner with you?", a: "Reach out via our Contact page and our team will get in touch to discuss collaboration opportunities." },
  { q: "Do you export internationally?", a: "Yes, we serve both domestic and international markets through a compliant export-import distribution network." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
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
              Cultivating Value<br />from the Ground Up.
            </h1>
            <p className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto opacity-90">
              We believe true growth starts at the source. With a deep connection to the earth and its resources, we cultivate opportunity, sustainability, and long-term value.
            </p>
            <Link
              href="/about"
              className="bg-foreground text-white px-10 py-3 rounded-full font-semibold hover:bg-foreground/80 transition-all"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-muted mb-4 block">About Us</span>
          <h2 className="font-serif text-4xl md:text-5xl">Bumandhala Kuma Loka</h2>
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
            <p>
              At the core of our philosophy lies a simple truth: all value begins with the earth. As a holding company rooted in natural resources, we are committed to cultivating not just products, but enduring worth — for people, ecosystems, and economies alike.
            </p>
            <p>
              We believe in enterprise that grows with integrity. Working in harmony with nature, fostering long-term partnerships, and building businesses that are resilient, ethical, and impactful.
            </p>
            <Link
              href="/about"
              className="inline-block mt-2 bg-foreground text-white px-8 py-3 rounded-full font-semibold hover:bg-foreground/80 transition-all"
            >
              More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-bold uppercase tracking-widest text-muted block">Our Partners</span>
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

      {/* Businesses */}
      <BusinessesCarousel brands={brands} />

      <CtaBanner />

      <FAQ items={faqs} />
    </>
  );
}
