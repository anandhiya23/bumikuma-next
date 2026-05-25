import Image from "next/image";
import PageHero from "../_components/PageHero";

export const metadata = { title: "Contact Us — Bumandhala Kuma Loka" };

const admins = [
  { logo: "/img/bumi-kuma-logo.png", name: "Bumi Kuma Pet Store" },
  { logo: "/img/nawasena_logo.png", name: "Kopi Kuma Nawasena" },
  { logo: "/img/pan_logo.png", name: "Papua Abadi Nusantara" },
];

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact Us" title="Let's make something happen" subtitle="Tell us a bit about you and we'll get back to you shortly." />

      <section className="max-w-3xl mx-auto px-5 lg:px-10 py-20">
        <form className="grid gap-5 bg-white border border-warm rounded-2xl p-8 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-5">
            <label className="grid gap-1.5">
              <span className="text-sm font-semibold">Name</span>
              <input className="border border-warm rounded-lg px-4 py-3 focus:outline-none focus:border-brand" required />
            </label>
            <label className="grid gap-1.5">
              <span className="text-sm font-semibold">Email</span>
              <input type="email" className="border border-warm rounded-lg px-4 py-3 focus:outline-none focus:border-brand" required />
            </label>
          </div>
          <label className="grid gap-1.5">
            <span className="text-sm font-semibold">Subject</span>
            <input className="border border-warm rounded-lg px-4 py-3 focus:outline-none focus:border-brand" />
          </label>
          <label className="grid gap-1.5">
            <span className="text-sm font-semibold">Message</span>
            <textarea rows={6} className="border border-warm rounded-lg px-4 py-3 focus:outline-none focus:border-brand resize-none" required />
          </label>
          <button type="submit" className="bg-brand text-white px-7 py-3 rounded-full font-semibold hover:bg-brand-dark transition justify-self-start">Send</button>
        </form>
      </section>

      <section className="bg-warm py-20">
        <div className="max-w-5xl mx-auto px-5 lg:px-10 text-center">
          <h2 className="font-serif text-3xl md:text-4xl">Or reach us through our admins</h2>
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
