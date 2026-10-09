import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/smooth-scroll";

export const metadata: Metadata = {
  title: "TubanPedia — Ensiklopedia & Panduan Wisata Tuban",
  description:
    "Eksplorasi destinasi wisata, pantai eksotis, gua karst, situs bersejarah, dan panduan perjalanan lengkap di Bumi Ronggolawe, Tuban, Jawa Timur.",
  keywords: ["TubanPedia", "Wisata Tuban", "Pantai Tuban", "Goa Akbar", "Makam Sunan Bonang", "Bumi Ronggolawe"],
  authors: [{ name: "TubanPedia Team" }],
  openGraph: {
    title: "TubanPedia — Ensiklopedia & Panduan Wisata Tuban",
    description: "Panduan lengkap destinasi, budaya, dan pesona pesisir utara Jawa Timur.",
    url: "https://tubanpedia.vercel.app",
    siteName: "TubanPedia",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="antialiased">
      <body className="min-h-screen flex flex-col">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
