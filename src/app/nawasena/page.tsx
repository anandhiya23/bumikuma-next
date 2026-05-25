import BrandPage from "../_components/BrandPage";

export const metadata = { title: "Kopi Kuma Nawasena — Bumandhala Kuma Loka" };

export default function Page() {
  return (
    <BrandPage
      heroColor="#5c3d1e"
      logo="/img/nawasena_logo-1-scaled.png"
      title="Kopi Kuma Nawasena"
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
