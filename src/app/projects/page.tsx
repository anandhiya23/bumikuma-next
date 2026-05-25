import Image from "next/image";
import PageHero from "../_components/PageHero";
import CtaBanner from "../_components/CtaBanner";

export const metadata = { title: "Projects — Bumandhala Kuma Loka" };

const projects = [
  { img: "/img/Frame-2147227177.png", title: "Windah's Animotion Collab", year: "2025", brand: "Bumi Kuma Pet Store" },
  { img: "/img/Group-1171275050.png", title: "Bumi Kuma Offline Store Opening", year: "2025", brand: "Bumi Kuma Pet Store" },
  { img: "/img/image-32.png", title: "Bumi Kuma Online Store Opening", year: "2025", brand: "Bumi Kuma Pet Store" },
  { img: "/img/Frame-2147227147.png", title: "Cargo Holding Bandara Timika", year: "2025", brand: "Papua Abadi Nusantara" },
];

export default function Projects() {
  return (
    <>
      <PageHero eyebrow="Our Projects" title="What do we do?" subtitle="A look at what our companies have been building." />

      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group">
              <div className="relative aspect-[4/3] overflow-hidden bg-warm">
                <Image src={p.img} alt={p.title} fill sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" className="object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold text-brand uppercase tracking-widest">{p.brand} · {p.year}</div>
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
