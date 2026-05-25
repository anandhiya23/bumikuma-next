import BrandPage from "../_components/BrandPage";

export const metadata = { title: "TBA Studio — Bumandhala Kuma Loka" };

export default function Page() {
  return (
    <BrandPage
      heroColor="#1a1a2e"
      logo="/img/logo_tba-scaled.png"
      title="TBA Studio"
      about={{
        img: "/img/aboutus_tba.png",
        img2: "/img/sdf.png",
        paragraphs: [
          "TBA Studio focuses on developing original games with unique mechanics and strong design identity. Our core service is full-cycle game development, from concept and gameplay systems to art, code, and release.",
          "We are currently working on TypeCaster, a 2.5D action RPG where typing replaces traditional combat. We continue to refine the game based on community feedback and internal testing.",
        ],
      }}
      projects={[
        {
          img: "/img/sdf.png",
          title: "Hey there! We're TBA Studio",
          year: "2025",
          brand: "TBA Studio",
          desc: "Introducing TBA Studio — our indie game development studio focused on creating unique, mechanic-driven gaming experiences that push the boundaries of genre.",
        },
      ]}
      faqs={[
        { q: "What kind of games do you make?", a: "We specialize in games that push genre boundaries through experimental input methods and accessible design. Memorable, mechanic-driven experiences with limited resources — easy to understand but deep in play." },
        { q: "What is TypeCaster?", a: "A 2.5D action RPG combining fast-paced action with language, rhythm, and timing — typing replaces traditional combat to create a different kind of RPG." },
        { q: "How can I collaborate?", a: "Reach out through our itch.io page or via Instagram or Discord. We're especially interested in partnerships that support indie visibility, creative collaboration, or player testing." },
      ]}
    />
  );
}
