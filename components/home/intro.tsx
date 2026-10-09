import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Intro() {
  return (
    <section className="page-section">
      <div className="intro-grid">
        <div className="intro-copy">
          <p className="eyebrow text-[#a55d3c]">Jelajahi Tuban</p>
          <h2 id="intro-title" className="headline text-[#1d211d]">
            Kota yang dibentuk oleh laut, batu kapur, dan jejak sejarah masa silam.
          </h2>
          <p className="copy mt-4 text-[#1d211d]/80 leading-relaxed">
            Membentang di sepanjang pesisir utara Jawa Timur, Tuban memikat pelancong melalui kedalaman gua karst purba, situs ziarah cagar budaya, keteduhan deretan pantai kelapa, dan keramahan hangat warganya.
          </p>
          <Link className="editorial-link mt-6 text-[#263b35] hover:text-[#a55d3c]" href="/tentang">
            Baca Kisah Selengkapnya <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="intro-images">
          <div className="intro-main-image rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1100&q=85"
              alt="Pesisir pantai tropis di Indonesia"
              fill
              sizes="(max-width: 767px) 76vw, 450px"
              className="object-cover"
            />
          </div>
          <div className="intro-small-image rounded-xl overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=85"
              alt="Pohon kelapa di tepi pantai Tuban"
              fill
              sizes="185px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
