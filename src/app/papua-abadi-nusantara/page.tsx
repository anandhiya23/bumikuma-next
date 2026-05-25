import BrandPage from "../_components/BrandPage";

export const metadata = { title: "Papua Abadi Nusantara — Bumandhala Kuma Loka" };

export default function Page() {
  return (
    <BrandPage
      heroColor="#1a3c6e"
      logo="/img/logo_pan-scaled.png"
      title="Papua Abadi Nusantara"
      about={{
        img: "/img/aboutus_pan.png",
        paragraphs: [
          "In 2021, we were established as a provider of airport services with the aim of offering world-class services to all our partners, ensuring security facilities within the airport environment in a sustainable manner.",
          "We believe that passion, focus, professionalism, and high integrity — guided by government regulations and consistently delivering excellent service — are the core values we uphold to achieve our goals.",
          "The services we offer include Warehousing and Storage Services, Air Transport Support Services, and Airport Activities, operating in the Mozes Kilangin Airport area in Timika.",
        ],
      }}
      projects={[
        {
          img: "/img/image-32.png",
          title: "Cargo Holding Bandara Timika",
          year: "2025",
          brand: "Papua Abadi Nusantara",
          desc: "Supporting aviation logistics at Mozes Kilangin Airport with professional warehousing and cargo handling services for major airline partners.",
        },
      ]}
      faqs={[
        { q: "What services do you provide?", a: "PT. Papua Abadi Nusantara provides a range of airport-related services focused on operational support and logistics, including warehousing and storage, air transport support, and airport activities." },
        { q: "Where do you operate?", a: "Our operations are based at Mozes Kilangin Airport in Timika, Papua. All services are conducted within the airport area, in coordination with local aviation stakeholders and regulatory bodies." },
      ]}
    />
  );
}
