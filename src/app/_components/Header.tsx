"use client";
import Image from "next/image";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";

const companyHrefs = [
  "/bumi-kuma-pet-store",
  "/papua-abadi-nusantara",
  "/nawasena",
  "/consumption",
];

const companyNames = [
  "Bumi Kuma Pet Store",
  "Papua Abadi Nusantara",
  "Kopi Kuma Nawasena",
  "Consumptions",
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [companiesOpen, setCompaniesOpen] = useState(false);
  const t = useTranslations("header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale() {
    const next = locale === "en" ? "id" : "en";
    router.replace(pathname, { locale: next });
  }

  return (
    <header className="z-50 px-5 lg:px-10 pt-4 -mb-20">
      <div className="max-w-4xl mx-auto bg-black rounded-full flex items-center justify-between px-6 lg:px-8 h-16">
        <Link href="/home" className="flex items-center gap-2">
          <Image src="/img/Frame-2147227147.png" alt="Bumandhala Kuma Loka" width={140} height={40} priority className="h-8 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <Link href="/home" className="text-white/70 hover:text-white transition-colors">{t("home")}</Link>
          <Link href="/about" className="text-white/70 hover:text-white transition-colors">{t("about")}</Link>
          <div
            className="relative"
            onMouseEnter={() => setCompaniesOpen(true)}
            onMouseLeave={() => setCompaniesOpen(false)}
          >
            <button className="text-white/70 hover:text-white transition-colors flex items-center gap-1">
              {t("companies")} <span className="text-xs">▾</span>
            </button>
            {companiesOpen && (
              <div className="absolute top-full left-0 pt-2">
                <div className="bg-white border border-warm rounded-md shadow-lg py-2 min-w-[220px]">
                  {companyHrefs.map((href, i) => (
                    <Link key={href} href={href} className="block px-4 py-2 text-sm hover:bg-warm hover:text-brand">
                      {companyNames[i]}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link href="/projects" className="text-white/70 hover:text-white transition-colors">{t("projects")}</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={switchLocale}
            className="text-xs font-semibold tracking-wider text-white/70 hover:text-white transition border border-white/20 rounded-full px-3 py-1"
          >
            {locale === "en" ? "ID" : "EN"}
          </button>
          <Link href="/contact" className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-white/90 transition">
            {t("contactUs")}
          </Link>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden max-w-4xl mx-auto mt-2 bg-black rounded-3xl">
          <div className="px-6 py-5 flex flex-col gap-3 text-sm">
            <Link href="/home" onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors">{t("home")}</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors">{t("about")}</Link>
            <div className="text-white/40 text-xs uppercase tracking-wider mt-2">{t("companies")}</div>
            {companyHrefs.map((href, i) => (
              <Link key={href} href={href} className="pl-3 text-white/70 hover:text-white transition-colors" onClick={() => setOpen(false)}>
                {companyNames[i]}
              </Link>
            ))}
            <Link href="/projects" onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors">{t("projects")}</Link>
            <button
              onClick={() => { switchLocale(); setOpen(false); }}
              className="text-white/70 hover:text-white transition-colors text-left text-xs font-semibold tracking-wider mt-1"
            >
              {locale === "en" ? "Switch to ID" : "Switch to EN"}
            </button>
            <Link href="/contact" onClick={() => setOpen(false)} className="bg-white text-black px-5 py-2.5 rounded-full text-center font-semibold mt-2">
              {t("contactUs")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
