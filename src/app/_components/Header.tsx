"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const companies = [
  { href: "/bumi-kuma-pet-store", label: "Bumi Kuma Pet Store" },
  { href: "/papua-abadi-nusantara", label: "Papua Abadi Nusantara" },
  { href: "/nawasena", label: "Kopi Kuma Nawasena" },
  { href: "/tba", label: "TBA Studio" },
  { href: "/consumption", label: "Consumptions" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [companiesOpen, setCompaniesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-warm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 lg:px-10 h-20">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/img/Frame-2147227147.png" alt="Bumandhala Kuma Loka" width={140} height={40} priority className="h-10 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-brand">Home</Link>
          <Link href="/about" className="hover:text-brand">About</Link>
          <div
            className="relative"
            onMouseEnter={() => setCompaniesOpen(true)}
            onMouseLeave={() => setCompaniesOpen(false)}
          >
            <button className="hover:text-brand flex items-center gap-1">
              Companies <span className="text-xs">▾</span>
            </button>
            {companiesOpen && (
              <div className="absolute top-full left-0 pt-2">
                <div className="bg-white border border-warm rounded-md shadow-lg py-2 min-w-[220px]">
                  {companies.map((c) => (
                    <Link key={c.href} href={c.href} className="block px-4 py-2 text-sm hover:bg-warm hover:text-brand">{c.label}</Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link href="/projects" className="hover:text-brand">Projects</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <span className="text-xs font-semibold tracking-wider">ENG</span>
          <Link href="/contact" className="bg-brand text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-dark transition">Contact Us</Link>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-warm bg-white">
          <div className="px-5 py-4 flex flex-col gap-3 text-sm">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <div className="text-muted text-xs uppercase tracking-wider mt-2">Companies</div>
            {companies.map((c) => (
              <Link key={c.href} href={c.href} className="pl-3" onClick={() => setOpen(false)}>{c.label}</Link>
            ))}
            <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="bg-brand text-white px-5 py-2.5 rounded-full text-center font-semibold mt-2">Contact Us</Link>
          </div>
        </div>
      )}
    </header>
  );
}
