import type { Metadata } from "next";
import { DM_Serif_Display, Reddit_Sans } from "next/font/google";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const reddit = Reddit_Sans({
  variable: "--font-reddit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bumandhala Kuma Loka",
  description:
    "We believe true growth starts at the source. With a deep connection to the earth and its resources, we cultivate opportunity, sustainability, and long-term value.",
  icons: { icon: "/img/cropped-Group-1171275061-192x192.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${reddit.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
