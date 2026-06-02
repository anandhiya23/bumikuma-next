import Image from "next/image";
import { getTranslations } from "next-intl/server";
import PageHero from "../../_components/PageHero";

const admins = [
  { logo: "/img/bumi-kuma-logo.png", name: "Bumi Kuma Pet Store" },
  { logo: "/img/nawasena_logo.png", name: "Kopi Kuma Nawasena" },
  { logo: "/img/pan_logo.png", name: "Papua Abadi Nusantara" },
];

export async function generateMetadata() {
  const t = await getTranslations("contact");
  return { title: t("metaTitle") };
}

export default async function Contact() {
  const t = await getTranslations("contact");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

      <section className="max-w-3xl mx-auto px-5 lg:px-10 py-20">
        <form className="grid gap-5 bg-white border border-warm rounded-2xl p-8 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-5">
            <label className="grid gap-1.5">
              <span className="text-sm font-semibold">{t("name")}</span>
              <input className="border border-warm rounded-lg px-4 py-3 focus:outline-none focus:border-brand" required />
            </label>
            <label className="grid gap-1.5">
              <span className="text-sm font-semibold">{t("email")}</span>
              <input type="email" className="border border-warm rounded-lg px-4 py-3 focus:outline-none focus:border-brand" required />
            </label>
          </div>
          <label className="grid gap-1.5">
            <span className="text-sm font-semibold">{t("subject")}</span>
            <input className="border border-warm rounded-lg px-4 py-3 focus:outline-none focus:border-brand" />
          </label>
          <label className="grid gap-1.5">
            <span className="text-sm font-semibold">{t("message")}</span>
            <textarea rows={6} className="border border-warm rounded-lg px-4 py-3 focus:outline-none focus:border-brand resize-none" required />
          </label>
          <button type="submit" className="bg-brand text-white px-7 py-3 rounded-full font-semibold hover:bg-brand-dark transition justify-self-start">
            {t("send")}
          </button>
        </form>
      </section>

      <section className="bg-warm py-20">
        <div className="max-w-5xl mx-auto px-5 lg:px-10 text-center">
          <h2 className="font-serif text-3xl md:text-4xl">{t("adminsHeading")}</h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {admins.map((a) => (
              <div key={a.name} className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center aspect-square">
                <div className="relative w-20 h-20">
                  <Image src={a.logo} alt={a.name} fill className="object-contain" sizes="80px" />
                </div>
                <div className="mt-4 text-sm font-semibold">{a.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
