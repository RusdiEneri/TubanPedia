import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { DestinationHero } from "@/components/destination/destination-hero";
import { DestinationInfo } from "@/components/destination/destination-info";
import { DestinationGallery } from "@/components/destination/destination-gallery";
import { DestinationCard } from "@/components/destination/destination-card";
import { destinations } from "@/data/destinations";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return destinations.map((d) => ({
    slug: d.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    return {
      title: "Destinasi Tidak Ditemukan — TubanPedia",
    };
  }

  return {
    title: `${destination.name} — TubanPedia`,
    description: destination.description,
    openGraph: {
      title: `${destination.name} | Panduan Wisata Tuban`,
      description: destination.description,
      images: [{ url: destination.coverImage, alt: destination.name }],
    },
  };
}

export default async function DestinationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    notFound();
  }

  // Related destinations (excluding current one, picking same category or top alternatives)
  const relatedDestinations = destinations
    .filter((d) => d.id !== destination.id)
    .sort((a) => (a.category === destination.category ? -1 : 1))
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="bg-[#f7f5ef] min-h-screen pb-20">
        <DestinationHero destination={destination} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <DestinationInfo destination={destination} />
          <DestinationGallery gallery={destination.gallery} title={`Galeri ${destination.name}`} />

          {/* Related Destinations Section */}
          <section className="mt-16 pt-12 border-t border-black/10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="eyebrow text-[#a55d3c]">Jelajahi Lebih Lanjut</p>
                <h2 className="headline text-2xl sm:text-3xl font-bold mt-1 text-[#1d211d]">
                  Destinasi Lain di Tuban
                </h2>
              </div>
              <Link
                href="/wisata"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#263b35] hover:text-[#a55d3c] transition-colors"
              >
                Semua Destinasi <ArrowUpRight size={15} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedDestinations.map((rel) => (
                <DestinationCard key={rel.id} destination={rel} className="aspect-[3/4] min-h-[380px]" />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
