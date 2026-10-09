import type { Metadata } from "next";
import { DestinationListing } from "@/components/destination/destination-listing";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { destinations } from "@/data/destinations";

export const metadata: Metadata = {
  title: "Katalog Destinasi Wisata — TubanPedia",
  description:
    "Jelajahi 15 destinasi wisata pilihan di Kabupaten Tuban: pantai pesisir utara, gua karst alami, air terjun toska, hingga situs cagar budaya religi.",
};

export default function WisataPage() {
  return (
    <>
      <Navbar />
      <main className="listing-page">
        <header className="listing-hero">
          <p className="eyebrow text-amber-300">Katalog Destinasi TubanPedia</p>
          <h1 className="display">Tempat yang Layak Diingat.</h1>
          <p>
            Temukan kekayaan bentang alam dan sejarah pesisir utara Jawa Timur. Saring berdasarkan kategori atau cari destinasi impianmu.
          </p>
        </header>
        <DestinationListing destinations={destinations} />
      </main>
      <Footer />
    </>
  );
}
