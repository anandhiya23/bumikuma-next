import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/bumi-kuma-pet-store", label: "Bumi Kuma Pet Store" },
  { href: "/papua-abadi-nusantara", label: "Papua Abadi Nusantara" },
  { href: "/nawasena", label: "Kopi Kuma Nawasena" },
  { href: "/consumption", label: "Consumptions" },
  { href: "/projects", label: "Projects" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] text-white mt-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <Image src="/img/Frame-2147227147.png" alt="Bumandhala Kuma Loka" width={180} height={50} className="h-12 w-auto brightness-0 invert" />
          <p className="mt-6 text-sm text-white/70 max-w-xs leading-relaxed">
            Cultivating value from the ground up. A holding company rooted in natural resources.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-5">Navigation</h4>
          <ul className="grid grid-cols-2 gap-2 text-sm text-white/80">
            {links.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-brand">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-5">Location</h4>
          <p className="text-sm text-white/80 leading-relaxed">
            Mega Glodok Kemayoran Jakarta<br />
            Blok D no.23, RW.10, Gn. Sahari Sel.,<br />
            Kec. Kemayoran, Kota Jakarta Pusat,<br />
            Daerah Khusus Ibukota Jakarta 10610
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-5 text-xs text-white/60">
          Copyright @ 2025 Bumandhala Kuma Loka. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
