import Image from "next/image";
import Link from "next/link";
import CtaBanner from "./_components/CtaBanner";
import FAQ from "./_components/FAQ";

const brands = [
  { href: "/bumi-kuma-pet-store", img: "/img/heropt2-1.png", title: "Bumi Kuma Pet Store", desc: "More than just a pet supply store." },
  { href: "/papua-abadi-nusantara", img: "/img/heropan.png", title: "Papua Abadi Nusantara", desc: "World-class airport services in Timika." },
  { href: "/nawasena", img: "/img/heronawasena.png", title: "Kopi Kuma Nawasena", desc: "Indonesian coffee, cultivated with care." },
  { href: "/tba", img: "/img/tba-scaled.png", title: "TBA Studio", desc: "Indie game development pushing genre boundaries." },
  { href: "/consumption", img: "/img/consumption.png", title: "Consumptions", desc: "Quality, safe, ethically-sourced food products." },
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
      <section className="relative bg-gradient-to-br from-warm via-white to-warm overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-24 md:py-32 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-brand/10 text-brand text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">Bumandhala Kuma Loka</span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] mt-6">
              Cultivating Value<br />from the Ground Up.
            </h1>
            <p className="mt-6 text-lg text-muted max-w-xl leading-relaxed">
              We believe true growth starts at the source. With a deep connection to the earth and its resources, we cultivate opportunity, sustainability, and long-term value.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about" className="bg-brand text-white px-7 py-3 rounded-full font-semibold hover:bg-brand-dark transition">More About Us</Link>
              <Link href="/projects" className="border border-foreground/20 px-7 py-3 rounded-full font-semibold hover:bg-warm transition">Our Projects</Link>
            </div>
          </div>
          <div className="relative aspect-square">
            <Image src="/img/Rectangle-832.png" alt="" fill priority sizes="(min-width: 1024px) 600px, 100vw" className="object-cover rounded-3xl" />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative aspect-[4/3]">
          <Image src="/img/Rectangle-832-1024x686.png" alt="" fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover rounded-2xl" />
        </div>
        <div className="order-1 lg:order-2">
          <span className="text-brand font-semibold text-sm uppercase tracking-widest">About Us</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3">Bumandhala Kuma Loka</h2>
          <p className="mt-5 text-muted leading-relaxed">
            At the core of our philosophy lies a simple truth: all value begins with the earth. As a holding company rooted in natural resources, we are committed to cultivating not just products, but enduring worth — for people, ecosystems, and economies alike.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            We believe in enterprise that grows with integrity. Working in harmony with nature, fostering long-term partnerships, and building businesses that are resilient, ethical, and impactful.
          </p>
          <Link href="/about" className="inline-block mt-6 text-brand font-semibold hover:underline">More About Us →</Link>
        </div>
      </section>

      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-brand font-semibold text-sm uppercase tracking-widest">Our Companies</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3">What do we do?</h2>
            <p className="mt-4 text-muted">Five distinct businesses, one shared commitment to growing value responsibly.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((b) => (
              <Link key={b.href} href={b.href} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={b.img} alt={b.title} fill sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" className="object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted">{b.desc}</p>
                  <div className="mt-4 text-brand text-sm font-semibold">Learn more →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={faqs} />
      <CtaBanner />
    </>
  );
}
