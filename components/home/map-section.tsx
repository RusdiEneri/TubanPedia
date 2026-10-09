import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TubanMap } from "@/components/map/tuban-map";

export function MapSection() {
  return (
    <section id="map" className="page-section map-section" aria-labelledby="map-title">
      <div className="map-grid">
        <div className="map-copy">
          <p className="eyebrow text-[#a55d3c]">Navigasi Interaktif</p>
          <h2 id="map-title" className="headline text-[#1d211d]">
            Peta Eksplorasi Tuban
          </h2>
          <p className="copy mt-4 text-[#1d211d]/80 leading-relaxed">
            Susun rute perjalananmu menelusuri pesisir pantai utara, gua kapur, hingga mata air pegunungan. Klik titik pin pada peta interaktif untuk melihat informasi tiket, jam operasional, dan rute lokasi secara langsung.
          </p>
          <Link className="editorial-link mt-6 text-[#263b35] hover:text-[#a55d3c]" href="/wisata">
            Buka Katalog Destinasi <ArrowUpRight size={16} />
          </Link>
        </div>
        <TubanMap />
      </div>
    </section>
  );
}
