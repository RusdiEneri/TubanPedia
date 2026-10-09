import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const itineraries = [
  [
    "01",
    "Jejak Sejarah & Religi",
    "1 Hari Penuh",
    "Rute ekspres mengelilingi ikon spiritual dan cagar budaya: Sunan Bonang, Masjid Agung, Goa Akbar, hingga senja di Pantai Boom.",
  ],
  [
    "02",
    "Pesisir Pantai & Karst",
    "2 Hari 1 Malam",
    "Perpaduan santai antara laguna Pantai Remen, teduhnya ribuan pohon Pantai Kelapa, dan pesona kristal kalsit Goa Putri Asih.",
  ],
  [
    "03",
    "Ekspedisi Raya Ronggolawe",
    "3 Hari 2 Malam",
    "Penjelajahan terlengkap: dari cahaya surga Goa Suci, kolam toska Air Terjun Nglirip, hingga keteduhan agrowisata Kebun Sagu Pelang.",
  ],
] as const;

export function ItineraryPreview() {
  return (
    <section className="page-section" aria-labelledby="itinerary-title">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="eyebrow text-[#a55d3c]">Rencana Perjalanan</p>
          <h2 id="itinerary-title" className="headline text-[#1d211d] mt-2">
            Panduan Rute Kurasi
          </h2>
        </div>
        <Link
          className="editorial-link hidden sm:inline-flex text-xs font-bold uppercase tracking-wider text-[#263b35] hover:text-[#a55d3c]"
          href="/itinerary"
        >
          Lihat Semua Rute <ArrowUpRight size={15} />
        </Link>
      </div>

      <div className="itinerary-grid">
        {itineraries.map(([number, title, duration, description]) => (
          <article className="itinerary-card" key={number}>
            <p className="itinerary-number">{number}</p>
            <h3>{title}</h3>
            <p className="itinerary-duration text-[#a55d3c]">{duration}</p>
            <p className="copy">{description}</p>
            <Link className="editorial-link" href="/itinerary">
              Buka Panduan Rute <ArrowUpRight size={16} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
