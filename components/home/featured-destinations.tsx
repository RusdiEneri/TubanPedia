import { DestinationCard } from "@/components/destination/destination-card";
import { destinations } from "@/data/destinations";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const featuredSlugs = [
  "pantai-boom",
  "goa-akbar",
  "makam-sunan-bonang",
  "klenteng-kwan-sing-bio",
];

export function FeaturedDestinations() {
  const featured = destinations.filter((destination) =>
    featuredSlugs.includes(destination.slug)
  );

  return (
    <section className="page-section" aria-labelledby="featured-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow text-[#a55d3c]">Pilihan Kurasi Utama</p>
          <h2 id="featured-title" className="headline text-[#1d211d]">
            Destinasi Wajib Dikunjungi
          </h2>
        </div>
        <Link className="editorial-link text-[#263b35] hover:text-[#a55d3c]" href="/wisata">
          Lihat Semua Destinasi <ArrowUpRight size={16} />
        </Link>
      </div>
      <div className="bento-grid">
        {featured.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </section>
  );
}
