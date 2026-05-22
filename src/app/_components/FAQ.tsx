"use client";
import { useState } from "react";

export default function FAQ({ items, title = "We got answers!" }: { items: { q: string; a: string }[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="max-w-5xl mx-auto px-5 lg:px-10 py-20">
      <div className="text-center mb-12">
        <span className="text-brand font-semibold text-sm uppercase tracking-widest">FAQ</span>
        <h2 className="font-serif text-4xl md:text-5xl mt-2">{title}</h2>
      </div>
      <div className="space-y-3">
        {items.map((it, i) => (
          <div key={i} className="border border-warm rounded-xl bg-white overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-5 text-left font-semibold"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span>{it.q}</span>
              <span className="text-brand text-2xl leading-none">{open === i ? "−" : "+"}</span>
            </button>
            {open === i && <div className="px-5 pb-5 text-muted leading-relaxed">{it.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
