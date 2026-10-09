import Link from "next/link";
import Image from "next/image";
import { Compass, BookOpen, MapPin, Sparkles, ArrowRight, ShieldCheck, HeartHandshake } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Tentang TubanPedia — Jendela Wisata Bumi Ronggolawe",
  description: "Mengenal TubanPedia, sejarah Kabupaten Tuban sebagai Kota Wali dan Bumi Ronggolawe, warisan budaya, serta panduan perjalanan.",
};

const facts = [
  {
    icon: Compass,
    title: "Pelabuhan Kuno Majapahit",
    desc: "Pada abad ke-13 hingga 15, Tuban merupakan pelabuhan laut utama Kerajaan Majapahit, menjadi gerbang masuk duta besar asing, pedagang rempah Tiongkok, Arab, dan Gujarat.",
  },
  {
    icon: Sparkles,
    title: "Kota Seribu Gua",
    desc: "Terletak di bentang Pegunungan Kapur Utara, Tuban menyimpan ratusan gua alami dengan formasi stalaktit kristal kalsit aktif, mata air purba, dan fosil dasar laut laut masa lampau.",
  },
  {
    icon: BookOpen,
    title: "Kota Wali Songo",
    desc: "Menjadi peristirahatan abadi Raden Makhdum Ibrahim (Sunan Bonang), salah satu tokoh Wali Songo yang menyiarkan ajaran kebajikan melalui pendekatan kesenian tembang dan gamelan.",
  },
  {
    icon: HeartHandshake,
    title: "Warisan Batik Gedog & Tenun",
    desc: "Satu-satunya sentra di Jawa yang memadukan proses memintal kapas sendiri, menenun kain dengan alat gedog tradisional bertalu-talu, lalu membatiknya secara turun-temurun di Kerek.",
  },
];

export default function TentangPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f7f5ef] min-h-screen pb-24">
        {/* Header Hero */}
        <section className="bg-[#263b35] text-white pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <p className="eyebrow text-amber-300">Ensiklopedia &amp; Panduan Terbuka</p>
            <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight">
              Mengenal TubanPedia &amp; Bumi Ronggolawe
            </h1>
            <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Sebuah inisiatif digital independen yang mendokumentasikan kekayaan alam, cagar budaya bersejarah, keajaiban geologi gua kapur, dan pesona pesisir utara Kabupaten Tuban.
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 space-y-16">
          {/* Main Story & Identity Card */}
          <section className="bg-white rounded-3xl p-6 sm:p-12 border border-black/10 shadow-sm space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="eyebrow text-[#a55d3c]">Kisah di Balik Tuban</p>
                <h2 className="font-heading text-3xl font-bold text-[#1d211d]">
                  Tempat di Mana Sejarah Bertemu Deburan Laut
                </h2>
                <p className="text-[#1d211d]/80 text-sm sm:text-base leading-relaxed">
                  Tuban membentang sepanjang 65 kilometer garis pantai Laut Jawa. Di sinilah narasi masa silam Nusantara terukir: dari jejak kapal ekspedisi Mongol Kubilai Khan tahun 1293, ketokohan Adipati Arya Ronggolawe sang ksatria Majapahit, hingga syiar tasawuf Sunan Bonang.
                </p>
                <p className="text-[#1d211d]/80 text-sm sm:text-base leading-relaxed">
                  Tidak hanya kisah sejarah manusianya, perut bumi Tuban menyimpan keajaiban speleologi karst yang memikat, telaga toska Nglirip di Singgahan, serta hutan rindang cemara dan kelapa di tepian samudra.
                </p>
              </div>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=85"
                  alt="Pesisir laut tropis Tuban"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Pillars & Facts */}
          <section className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <p className="eyebrow text-[#a55d3c]">Karakter &amp; Identitas</p>
              <h2 className="font-heading text-3xl font-bold text-[#1d211d] mt-1">
                Mengapa Tuban Begitu Istimewa?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {facts.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-white p-6 sm:p-8 rounded-2xl border border-black/10 shadow-sm space-y-3 hover:border-[#a55d3c]/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#263b35]/10 text-[#263b35] flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#1d211d]">{title}</h3>
                  <p className="text-[#1d211d]/75 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Mission & Values */}
          <section className="bg-[#f0eee6] rounded-3xl p-6 sm:p-10 border border-[#ded7c8] space-y-6">
            <div className="max-w-3xl">
              <span className="bg-[#a55d3c] text-white text-[0.68rem] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Visi &amp; Standar Editorial
              </span>
              <h2 className="font-heading text-3xl font-bold text-[#1d211d] mt-3">
                Komitmen TubanPedia
              </h2>
              <p className="text-[#1d211d]/80 text-sm sm:text-base mt-2 leading-relaxed">
                Kami membangun platform ini untuk menghadirkan panduan pariwisata yang jujur, berbasis data terverifikasi (koordinat tepat, estimasi tiket transparan, waktu operasional aktual), serta bebas dari ulasan berbayar yang menyesatkan.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white p-5 rounded-xl border border-black/5 space-y-2">
                <ShieldCheck size={20} className="text-emerald-700" />
                <h4 className="font-bold text-sm text-[#1d211d]">Akurasi Data</h4>
                <p className="text-xs text-[#1d211d]/70">Semua koordinat dan jam buka diverifikasi berkala untuk kenyamanan traveler.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-black/5 space-y-2">
                <Compass size={20} className="text-[#a55d3c]" />
                <h4 className="font-bold text-sm text-[#1d211d]">Bebas Biaya &amp; Terbuka</h4>
                <p className="text-xs text-[#1d211d]/70">Dapat diakses gratis oleh siapa saja yang ingin merencanakan liburan ke Tuban.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-black/5 space-y-2">
                <HeartHandshake size={20} className="text-[#263b35]" />
                <h4 className="font-bold text-sm text-[#1d211d]">Dukungan Komunitas Lokal</h4>
                <p className="text-xs text-[#1d211d]/70">Mempromosikan UMKM kuliner, sentra kerajinan, dan pegiat wisata lokal Tuban.</p>
              </div>
            </div>
          </section>

          {/* Travel Logistics / Cara Menuju Tuban */}
          <section id="panduan" className="bg-[#263b35] text-white rounded-3xl p-6 sm:p-10 space-y-6">
            <div>
              <p className="eyebrow text-amber-300">Panduan Transportasi</p>
              <h2 className="font-heading text-3xl font-bold mt-1">
                Cara Menuju ke Tuban
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white/85">
              <div className="bg-white/5 p-5 rounded-xl border border-white/10 space-y-2">
                <h4 className="font-bold text-white flex items-center gap-2">
                  <MapPin size={16} className="text-amber-300" /> Dari Surabaya / Gresik
                </h4>
                <p className="text-xs leading-relaxed">
                  Jarak ~100 km. Dapat ditempuh melalui Jalan Tol KLBM / Manyar dilanjutkan Jalur Pantura Deandels sekitar 2 hingga 2,5 jam perjalanan dengan mobil atau bus AKDP Terminal Tambak Osowilangun.
                </p>
              </div>
              <div className="bg-white/5 p-5 rounded-xl border border-white/10 space-y-2">
                <h4 className="font-bold text-white flex items-center gap-2">
                  <MapPin size={16} className="text-amber-300" /> Dari Semarang / Rembang
                </h4>
                <p className="text-xs leading-relaxed">
                  Menyusuri pesisir utara melalui Rembang menuju perbatasan Tuban di Sarang/Bancar sekitar 2,5 – 3 jam. Rute ini melintasi Pantai Sowan dan Pantai Remen.
                </p>
              </div>
              <div className="bg-white/5 p-5 rounded-xl border border-white/10 space-y-2">
                <h4 className="font-bold text-white flex items-center gap-2">
                  <MapPin size={16} className="text-amber-300" /> Menggunakan Kereta Api
                </h4>
                <p className="text-xs leading-relaxed">
                  Turun di <strong>Stasiun Bojonegoro</strong> atau <strong>Stasiun Babat</strong>, kemudian melanjutkan dengan angkutan umum atau travel/taksi daring selama 45 – 60 menit menuju pusat kota Tuban.
                </p>
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <div className="text-center pt-4">
            <h3 className="font-heading text-2xl font-bold text-[#1d211d]">
              Siap Menjelajahi Pesona Tuban?
            </h3>
            <p className="text-[#1d211d]/70 text-sm mt-1 max-w-md mx-auto">
              Pilih dari 15 destinasi terbaik yang telah kami kurasi dan temukan rute perjalanan favoritmu.
            </p>
            <div className="flex gap-4 justify-center items-center mt-5 flex-wrap">
              <Link
                href="/wisata"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#263b35] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1d211d] transition-colors"
              >
                Lihat Semua Destinasi <ArrowRight size={14} />
              </Link>
              <Link
                href="/itinerary"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#1d211d] border border-black/15 text-xs font-bold uppercase tracking-wider hover:bg-black/5 transition-colors"
              >
                Jelajahi Itinerary
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
