import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-image">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=90"
          alt="Lanskap pesisir pantai laut utara Tuban saat matahari terbit"
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="eyebrow">TubanPedia Official Guide</p>
        <h1 id="hero-title" className="display">
          TUBAN:<br />Bumi Ronggolawe &amp; Laut Utara.
        </h1>
        <p className="hero-copy">
          Ensiklopedia wisata lengkap Tuban: telusuri deretan pantai pesisir, labirin gua karst purba, cagar budaya religi Wali Songo, hingga segarnya mata air pegunungan.
        </p>
        <div className="hero-actions">
          <Link className="hero-primary" href="/wisata">
            Jelajah Destinasi
          </Link>
          <Link className="hero-secondary" href="/itinerary">
            Lihat Itinerary
          </Link>
        </div>
      </div>
      <p className="scroll-cue">GULIR KE BAWAH UNTUK MEMULAI</p>
    </section>
  );
}
