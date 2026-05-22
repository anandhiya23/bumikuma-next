import BrandPage from "../_components/BrandPage";

export const metadata = { title: "Bumi Kuma Pet Store — Bumandhala Kuma Loka" };

export default function Page() {
  return (
    <BrandPage
      eyebrow="Our Companies"
      title="Bumi Kuma Pet Store"
      subtitle="More than just a pet supply store."
      about={{
        img: "/img/pt2bkl1.png",
        paragraphs: [
          "Bumi Kuma Pet Store — More Than Just a Pet Supply Store. This is the first step toward understanding the world of pets professionally. Our goal is to become a trusted, complete, responsible, and animal-friendly pet shop brand for all kinds of pets in Indonesia. Today, we serve both offline and online sales to ensure our products reach various regions across the country.",
          "Our specialty lies in sourcing, caring for, and providing a wide range of pets with unique species — from exotic animals and beloved household pets to certified and responsibly sourced marine life. We offer three main services: supplying pet needs and accessories, providing pet lodging through our Pet Hotel, and offering healthy, well-cared-for animals to pet owners.",
        ],
      }}
      projects={[
        { img: "/img/Frame-2147227177.png", title: "Windah's Animotion Collab", year: "2025", brand: "Bumi Kuma Pet Store" },
        { img: "/img/Group-1171275050.png", title: "Bumi Kuma Offline Store Opening", year: "2025", brand: "Bumi Kuma Pet Store" },
        { img: "/img/image-32.png", title: "Bumi Kuma Online Store Opening", year: "2025", brand: "Bumi Kuma Pet Store" },
      ]}
      faqs={[
        { q: "Where is your store located?", a: "We are located in Cipayung, East Jakarta. For our full address, directions, and business hours, please refer to our Instagram profile or Linktree page." },
        { q: "Where can I buy your products?", a: "Yes, we sell pet supplies through Shopee and also accept orders via WhatsApp and Instagram direct message." },
        { q: "How do I book the Pet Hotel?", a: "Contact us through WhatsApp or Instagram. Let us know your preferred check-in and check-out dates and we'll inform you of availability and rates. We offer Deluxe and VIP rooms for cats." },
        { q: "Do you sell pets for adoption?", a: "At this time, we do not sell or offer specific pets for adoption or purchase. Our focus is on pet care, supplies, and boarding services." },
      ]}
    />
  );
}
