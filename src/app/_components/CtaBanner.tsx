import Image from "next/image";
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-warm">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">Interested in our Products &amp; Services?</h2>
          <p className="mt-4 text-lg text-muted">Let&apos;s make it happen!</p>
          <Link href="/contact" className="inline-block mt-8 bg-brand text-white px-7 py-3 rounded-full font-semibold hover:bg-brand-dark transition">Contact Us</Link>
        </div>
        <div className="relative aspect-[4/3]">
          <Image src="/img/footerimg-1.png" alt="" fill className="object-contain" sizes="(min-width: 1024px) 600px, 100vw" />
        </div>
      </div>
    </section>
  );
}
