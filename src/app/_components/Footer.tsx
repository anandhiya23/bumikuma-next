import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function Footer() {
  const t = await getTranslations("footer");

  const links = [
    { href: "/home" as const, label: t("links.home") },
    { href: "/about" as const, label: t("links.about") },
    { href: "/bumi-kuma-pet-store" as const, label: t("links.petStore") },
    { href: "/papua-abadi-nusantara" as const, label: t("links.papuaAbadi") },
    { href: "/nawasena" as const, label: t("links.nawasena") },
    { href: "/consumption" as const, label: t("links.consumptions") },
    { href: "/projects" as const, label: t("links.projects") },
  ];

  return (
    <footer className="bg-[#0e0e0e] text-white mt-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <Image src="/img/Frame-2147227147.png" alt="Bumandhala Kuma Loka" width={180} height={50} className="h-12 w-auto brightness-0 invert" />
          <p className="mt-6 text-sm text-white/70 max-w-xs leading-relaxed">{t("tagline")}</p>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-5">{t("navigation")}</h4>
          <ul className="grid grid-cols-2 gap-2 text-sm text-white/80">
            {links.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-brand">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-5">{t("location")}</h4>
          <p className="text-sm text-white/80 leading-relaxed">
            {t("address1")}<br />
            {t("address2")}<br />
            {t("address3")}<br />
            {t("address4")}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-5 text-xs text-white/60">
          {t("copyright")}
        </div>
      </div>
    </footer>
  );
}
