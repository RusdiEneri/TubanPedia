import Link from "next/link";
import Image from "next/image";

export function FinalCta() {
  return (
    <section className="final-cta" aria-labelledby="cta-title">
      <div className="final-image">
        <Image
          src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=2200&q=85"
          alt="Pesisir laut utara Jawa saat senja"
          fill
          sizes="100vw"
        />
      </div>
      <div className="final-content">
        <p className="eyebrow text-amber-200/90 mb-3 tracking-widest uppercase text-xs font-bold">
          Rencanakan Perjalanan Anda
        </p>
        <h2 id="cta-title" className="display">
          CERITA PERJALANANMU DI TUBAN DIMULAI DARI SINI.
        </h2>
        <div className="flex gap-4 justify-center items-center flex-wrap">
          <Link className="hero-primary" href="/wisata">
            Eksplorasi Destinasi
          </Link>
          <Link className="hero-secondary" href="/itinerary">
            Rute Itinerary
          </Link>
        </div>
      </div>
    </section>
  );
}
