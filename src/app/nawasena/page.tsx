import BrandPage from "../_components/BrandPage";

export const metadata = { title: "Kopi Kuma Nawasena — Bumandhala Kuma Loka" };

export default function Page() {
  return (
    <BrandPage
      eyebrow="Our Companies"
      title="Kopi Kuma Nawasena"
      subtitle="Indonesian coffee, cultivated with care."
      about={{
        img: "/img/Group-1171275059.png",
        paragraphs: [
          "Kopi Kuma Nawasena is our coffee venture — bringing the rich flavor of Indonesian coffee to the world, sourced responsibly from local growers and roasted with care.",
        ],
      }}
      comingSoon
    />
  );
}
