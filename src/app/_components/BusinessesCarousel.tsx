"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Brand = {
  href: string;
  logo: string;
  title: string;
  desc: string;
  color: string;
};

export default function BusinessesCarousel({ brands }: { brands: Brand[] }) {
  const [active, setActive] = useState(0);
  const prev = (active - 1 + brands.length) % brands.length;
  const next = (active + 1) % brands.length;

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-sm font-bold uppercase tracking-widest text-muted mb-4 block">Our Businesses</span>
        <h2 className="font-serif text-4xl md:text-6xl mb-6">What do we do?</h2>
        <p className="text-muted max-w-2xl mx-auto">Five distinct businesses, one shared commitment to growing value responsibly.</p>
      </div>

      <div className="relative flex items-center justify-center gap-8 mb-12">
        <button
          onClick={() => setActive(prev)}
          className="absolute left-4 md:left-16 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-warm transition"
          aria-label="Previous"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </button>

        <div
          className="hidden lg:flex w-52 h-64 rounded-2xl items-center justify-center opacity-40 scale-90 cursor-pointer flex-shrink-0 transition-opacity hover:opacity-60"
          style={{ backgroundColor: brands[prev].color }}
          onClick={() => setActive(prev)}
        >
          <div className="relative w-28 h-16">
            <Image src={brands[prev].logo} alt={brands[prev].title} fill className="object-contain" sizes="112px" />
          </div>
        </div>

        <Link
          href={brands[active].href}
          className="w-full max-w-md aspect-square rounded-2xl flex flex-col items-center justify-center p-12 shadow-xl relative z-10 flex-shrink-0 hover:scale-[1.02] transition-transform"
          style={{ backgroundColor: brands[active].color }}
        >
          <div className="relative w-36 h-24 mb-6">
            <Image src={brands[active].logo} alt={brands[active].title} fill className="object-contain" sizes="144px" />
          </div>
          <div className="text-center text-white">
            <h3 className="font-serif text-3xl font-bold">{brands[active].title}</h3>
          </div>
        </Link>

        <div
          className="hidden lg:flex w-52 h-64 rounded-2xl items-center justify-center opacity-40 scale-90 cursor-pointer flex-shrink-0 transition-opacity hover:opacity-60"
          style={{ backgroundColor: brands[next].color }}
          onClick={() => setActive(next)}
        >
          <div className="relative w-28 h-16">
            <Image src={brands[next].logo} alt={brands[next].title} fill className="object-contain" sizes="112px" />
          </div>
        </div>

        <button
          onClick={() => setActive(next)}
          className="absolute right-4 md:right-16 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-warm transition"
          aria-label="Next"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </button>
      </div>

      <div className="max-w-2xl mx-auto text-center text-muted">
        <p className="text-sm leading-relaxed">{brands[active].desc}</p>
        <Link href={brands[active].href} className="inline-block mt-4 text-brand text-sm font-semibold hover:underline">
          Learn more →
        </Link>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {brands.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to ${brands[i].title}`}
            className={`h-2 rounded-full transition-all ${i === active ? "bg-foreground w-6" : "bg-foreground/20 w-2"}`}
          />
        ))}
      </div>
    </section>
  );
}
