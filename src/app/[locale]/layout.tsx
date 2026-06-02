import type { Metadata } from "next";
import { DM_Serif_Display, Reddit_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import "../globals.css";

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

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "en" | "id")) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${dmSerif.variable} ${reddit.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
