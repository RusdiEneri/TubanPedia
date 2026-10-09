"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, DollarSign, Calendar, MapPin, ArrowRight, CheckCircle2, Compass, Sparkles } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

type ItineraryPlan = {
  id: string;
  tag: string;
  duration: string;
  title: string;
  subtitle: string;
  budgetEst: string;
  idealFor: string;
  days: {
    dayNumber: number;
    title: string;
    activities: {
      time: string;
      title: string;
      slug?: string;
      desc: string;
      tag: string;
    }[];
  }[];
  culinaryHighlights: string[];
};

const itineraryPlans: ItineraryPlan[] = [
  {
    id: "1-day",
    tag: "Express Trail",
    duration: "1 Hari Penuh",
    title: "Jelajah Sejarah & Religi Bumi Ronggolawe",
    subtitle: "Rute padat dan bermakna menelusuri episentrum spiritual, cagar budaya kuno, dan pesisir kota Tuban.",
    budgetEst: "Rp80.000 – Rp150.000 / orang (di luar transport utama)",
    idealFor: "Solo traveler, peziarah, wisatawan akhir pekan singkat",
    days: [
      {
        dayNumber: 1,
        title: "Pusat Kota & Garis Pantai Bersejarah",
        activities: [
          {
            time: "07:30 - 08:30",
            title: "Sarapan Pagi Sego Becek Khas Tuban",
            desc: "Awali hari dengan kuliner legendaris kuah kari santan rempah hangat berpadu sate daging empuk di sekitar area Alun-Alun Tuban.",
            tag: "Kuliner",
          },
          {
            time: "08:45 - 10:30",
            title: "Kompleks Pemakaman Sunan Bonang & Masjid Agung",
            slug: "makam-sunan-bonang",
            desc: "Ziarah napak tilas ke situs cagar budaya salah satu Wali Songo bertembok bata merah kuno, dilanjutkan menikmati kemegahan arsitektur Masjid Agung Tuban.",
            tag: "Wisata Religi",
          },
          {
            time: "10:45 - 12:15",
            title: "Eksplorasi Labirin Stalaktit Goa Akbar",
            slug: "goa-akbar",
            desc: "Menyusuri jalur pedestrian unik di dalam perut bumi yang berada tepat di bawah keramaian Pasar Baru Tuban dengan pencahayaan artistik.",
            tag: "Gua Karst",
          },
          {
            time: "12:30 - 14:00",
            title: "Santap Siang Kare Rajungan Pedas Manunggal",
            desc: "Mencicipi sajian signature khas pesisir Tuban: kepiting rajungan segar berlumur kuah rempah pedas membakar lidah.",
            tag: "Kuliner",
          },
          {
            time: "14:30 - 16:00",
            title: "Klenteng Kwan Sing Bio Tepi Laut",
            slug: "klenteng-kwan-sing-bio",
            desc: "Mengagumi kemegahan tempat ibadah Tri Dharma seluas 1,5 hektar yang menghadap ombak laut utara dengan ikon gapura kepiting raksasa.",
            tag: "Wisata Budaya",
          },
          {
            time: "16:30 - 18:00",
            title: "Menikmati Senja di Dermaga Pantai Boom",
            slug: "pantai-boom",
            desc: "Menutup petualangan satu hari dengan berjalan di atas dermaga semenanjung buatan peninggalan zaman kejayaan pelabuhan kuno sembari menikmati angin laut.",
            tag: "Wisata Pantai",
          },
        ],
      },
    ],
    culinaryHighlights: [
      "Kare Rajungan Pedas khas Tuban",
      "Sego Becek (kari daging khas)",
      "Es Legen murni dari pohon Siwalan",
    ],
  },
  {
    id: "2-days",
    tag: "Weekend Getaway",
    duration: "2 Hari 1 Malam",
    title: "Pesisir Rindang & Keajaiban Karst Tersembunyi",
    subtitle: "Kombinasi harmonis antara pantai berpasir teduh dan sejuknya gua kalsit pegunungan kapur Tuban.",
    budgetEst: "Rp250.000 – Rp500.000 / orang (termasuk penginapan standar)",
    idealFor: "Keluarga, pasangan, pencinta fotografi lanskap",
    days: [
      {
        dayNumber: 1,
        title: "Hari 1: Pesisir Barat & Laguna Remen",
        activities: [
          {
            time: "08:00 - 11:30",
            title: "Pantai Pasir Putih Remen (Laguna Alami)",
            slug: "pantai-pasir-putih-remen",
            desc: "Bermain air di danau laguna air jernih berpasir putih unik yang dikelilingi rimbunnya pohon cemara udang.",
            tag: "Pantai & Laguna",
          },
          {
            time: "12:00 - 13:30",
            title: "Makan Siang Ikan Asap & Belut Pedas",
            desc: "Menikmati kuliner rica belut goreng garing dan aneka ikan laut asap segar di warung tepi jalan Pantura.",
            tag: "Kuliner",
          },
          {
            time: "14:00 - 17:30",
            title: "Pantai Sowan & Hutan Wisata Mahoni",
            slug: "pantai-sowan",
            desc: "Suasana sejuk kombinasi deburan ombak dan pepohonan mahoni asri yang dikelola perhutani, sempurna untuk jalan santai sore.",
            tag: "Ekowisata",
          },
        ],
      },
      {
        dayNumber: 2,
        title: "Hari 2: Rimba Kelapa & Kristal Karst",
        activities: [
          {
            time: "07:30 - 10:30",
            title: "Pagi Cerah di Pantai Kelapa Panyuran",
            slug: "pantai-kelapa",
            desc: "Kawasan pantai teduh di bawah ribuan deretan pohon kelapa menjulang. Wahana berkuda, flying fox, dan arena ATV tersedia.",
            tag: "Pantai Keluarga",
          },
          {
            time: "11:30 - 14:00",
            title: "Eksplorasi Kristal Stalaktit Goa Putri Asih",
            slug: "goa-putri-asih",
            desc: "Masuk ke perut hutan jati Montong untuk menyaksikan formasi kristal kalsit alami yang berkilau saat terkena sinar lampu senter.",
            tag: "Speleologi",
          },
          {
            time: "15:00 - 17:00",
            title: "Relaksasi di Pemandian Alami Bektiharjo",
            slug: "pemandian-bektiharjo",
            desc: "Mendinginkan badan di sumber kolam mata air alami berair jernih kebiruan di bawah pohon beringin tua yang asri.",
            tag: "Mata Air Alami",
          },
        ],
      },
    ],
    culinaryHighlights: [
      "Belut Goreng Pedas Jangkar",
      "Kecap Manis Tradisional khas Tuban (Laron/Tawon)",
      "Buah Siwalan segar potongan",
    ],
  },
  {
    id: "3-days",
    tag: "Full Expedition",
    duration: "3 Hari 2 Malam",
    title: "Ekspedisi Raya Ronggolawe: Lembah, Gua & Tirta Toska",
    subtitle: "Rencana perjalanan terlengkap untuk menjelajahi segala dimensi bentang alam dan budaya Kabupaten Tuban.",
    budgetEst: "Rp500.000 – Rp900.000 / orang",
    idealFor: "Backpacker, petualang alam bebas, komunitas road trip",
    days: [
      {
        dayNumber: 1,
        title: "Hari 1: Sejarah Pantai & Labirin Bawah Tanah",
        activities: [
          {
            time: "Pagi - Siang",
            title: "Ziarah Makam Sunan Bonang, Masjid Agung & Pantai Boom",
            slug: "makam-sunan-bonang",
            desc: "Menggali kisah Tuban sebagai pelabuhan utama Kerajaan Majapahit dan pusat syiar Islam di pesisir utara Jawa.",
            tag: "Religi & Sejarah",
          },
          {
            time: "Siang - Sore",
            title: "Gua Kapur Bertingkat Goa Akbar & Santap Kuliner Rajungan",
            slug: "goa-akbar",
            desc: "Pameran relief fosil purba dan lorong goa kapur aktif di jantung kota.",
            tag: "Geologi",
          },
        ],
      },
      {
        dayNumber: 2,
        title: "Hari 2: Cahaya Surga Gua Karst & Lembah Hijau Singgahan",
        activities: [
          {
            time: "Pagi (09:00 - 11:30)",
            title: "Menyaksikan 'Ray of Light' di Goa Suci",
            slug: "goa-suci",
            desc: "Situs tambang kapur abad ke-11 dengan sorot sinar matahari alami menembus lubang atap langit-langit gua.",
            tag: "Fotografi & Karst",
          },
          {
            time: "Siang - Sore",
            title: "Kolam Toska Air Terjun Nglirip & Sungai Krawak",
            slug: "air-terjun-nglirip",
            desc: "Menyaksikan air terjun megah setinggi 30 meter dengan telaga air berwarna hijau toska yang memesona.",
            tag: "Air Terjun Alam",
          },
        ],
      },
      {
        dayNumber: 3,
        title: "Hari 3: Agrowisata Sagu & Pesona Pesisir Remen",
        activities: [
          {
            time: "Pagi (08:00 - 11:00)",
            title: "Kawasan Agrowisata Kebun Sagu Pelang",
            slug: "wisata-kebun-sagu-pelang",
            desc: "Menaiki rakit tradisional di aliran sungai jernih di bawah kanopi hutan pohon sagu serta mencicipi kuliner olahan bubur sagu.",
            tag: "Agrowisata",
          },
          {
            time: "Siang - Sore",
            title: "Pantai Pasir Putih Remen & Sentra Batik Gedog",
            slug: "pantai-pasir-putih-remen",
            desc: "Menikmati hembusan angin pantai pasir putih lalu mampir ke pengrajin tenun Batik Gedog khas Tuban yang melegenda.",
            tag: "Kerajinan & Budaya",
          },
        ],
      },
    ],
    culinaryHighlights: [
      "Bubur Sagu & Dawet Pelang",
      "Kare Rajungan Pedas Singgahan",
      "Kue Dumbek Tradisional daun lontar",
    ],
  },
];

export function ItineraryContent() {
  const [selectedPlanId, setSelectedPlanId] = useState<string>("1-day");

  const currentPlan = itineraryPlans.find((p) => p.id === selectedPlanId) || itineraryPlans[0];

  return (
    <div className="space-y-12">
      {/* Plan Selector Tabs with Morph Transition */}
      <div className="flex flex-wrap gap-3 justify-center">
        {itineraryPlans.map((plan) => {
          const isActive = plan.id === selectedPlanId;
          return (
            <button
              key={plan.id}
              type="button"
              onClick={() => setSelectedPlanId(plan.id)}
              className={`relative px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 z-10 ${
                isActive ? "text-white" : "text-[#1d211d] hover:text-[#263b35]"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activePlanTabMorph"
                  className="absolute inset-0 bg-[#263b35] rounded-xl shadow-lg ring-2 ring-[#a55d3c] -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              )}
              {!isActive && (
                <div className="absolute inset-0 bg-white rounded-xl border border-black/10 -z-20 hover:bg-[#ded7c8]/20 transition-colors" />
              )}
              <Calendar size={15} className={isActive ? "text-amber-300" : "text-[#a55d3c]"} />
              <span>{plan.duration}</span>
              <span className="text-[0.65rem] opacity-70">({plan.tag})</span>
            </button>
          );
        })}
      </div>

      {/* Plan Overview Card with Morph Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPlan.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-3xl p-6 sm:p-10 border border-black/10 shadow-sm space-y-6"
        >
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-6">
          <div>
            <span className="bg-[#a55d3c] text-white text-[0.68rem] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              {currentPlan.tag} • {currentPlan.duration}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1d211d] mt-3">
              {currentPlan.title}
            </h2>
            <p className="text-[#1d211d]/75 text-sm sm:text-base mt-2 max-w-2xl">
              {currentPlan.subtitle}
            </p>
          </div>

          <div className="space-y-2 bg-[#f7f5ef] p-4 rounded-2xl border border-[#ded7c8] min-w-[260px]">
            <div className="flex items-center gap-2 text-xs text-[#1d211d]/80">
              <DollarSign size={15} className="text-[#a55d3c]" />
              <span><strong>Estimasi:</strong> {currentPlan.budgetEst}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#1d211d]/80">
              <Compass size={15} className="text-[#a55d3c]" />
              <span><strong>Target:</strong> {currentPlan.idealFor}</span>
            </div>
          </div>
        </div>

        {/* Timeline Activities */}
        <div className="space-y-10 pt-4">
          {currentPlan.days.map((day) => (
            <div key={day.dayNumber} className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#263b35] text-white flex items-center justify-center font-bold text-sm">
                  {day.dayNumber}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1d211d]">
                  {day.title}
                </h3>
              </div>

              <div className="relative pl-6 sm:pl-8 border-l-2 border-[#263b35]/20 space-y-6 ml-4">
                {day.activities.map((act, i) => (
                  <div key={i} className="relative group">
                    <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#f4f1e9] border-2 border-[#a55d3c] group-hover:scale-125 transition-transform" />

                    <div className="bg-[#fcfbf9] hover:bg-white p-4 sm:p-5 rounded-2xl border border-black/5 shadow-sm transition-all">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <span className="flex items-center gap-1.5 text-xs font-bold text-[#a55d3c]">
                          <Clock size={13} /> {act.time}
                        </span>
                        <span className="text-[0.65rem] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-black/5 text-[#1d211d]/70">
                          {act.tag}
                        </span>
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-[#1d211d]">
                        {act.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#1d211d]/75 mt-1.5 leading-relaxed">
                        {act.desc}
                      </p>

                      {act.slug && (
                        <div className="mt-3 pt-3 border-t border-black/5">
                          <Link
                            href={`/wisata/${act.slug}`}
                            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#263b35] hover:text-[#a55d3c] transition-colors"
                          >
                            Buka Detail Destinasi <ArrowRight size={13} />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Culinary Recommendations */}
        <div className="mt-8 p-6 rounded-2xl bg-[#f2eee3] border border-[#ded7c8]">
          <h4 className="font-bold text-sm text-[#1d211d] flex items-center gap-2 mb-3">
            <Sparkles size={16} className="text-[#a55d3c]" />
            Rekomendasi Kuliner Wajib Dicoba di Rute Ini
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {currentPlan.culinaryHighlights.map((food, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white/80 p-3 rounded-xl border border-black/5 text-xs font-medium text-[#1d211d]">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                <span>{food}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>

      {/* Practical Travel Logistics Advice */}
      <section className="bg-[#263b35] text-white rounded-3xl p-8 sm:p-10 space-y-6">
        <div>
          <p className="eyebrow text-amber-300">Tips Perjalanan</p>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold mt-1">
            Panduan Transportasi &amp; Perlengkapan
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white/80">
          <div className="space-y-2 bg-white/5 p-5 rounded-xl border border-white/10">
            <h4 className="font-bold text-white flex items-center gap-2">
              <MapPin size={16} className="text-amber-300" /> Moda Transportasi
            </h4>
            <p className="text-xs leading-relaxed">
              Disarankan menggunakan sepeda motor atau mobil pribadi/rental. Area pesisir sangat mudah diakses via Jalur Daendels Pantura, sedangkan menuju Nglirip & Singgahan melewati kontur perbukitan beraspal halus.
            </p>
          </div>
          <div className="space-y-2 bg-white/5 p-5 rounded-xl border border-white/10">
            <h4 className="font-bold text-white flex items-center gap-2">
              <Clock size={16} className="text-amber-300" /> Musim Terbaik
            </h4>
            <p className="text-xs leading-relaxed">
              Bulan Mei hingga Oktober (musim kemarau) adalah waktu paling ideal menikmati birunya air telaga Nglirip, kejernihan laguna Remen, dan fenomena Ray of Light di Goa Suci.
            </p>
          </div>
          <div className="space-y-2 bg-white/5 p-5 rounded-xl border border-white/10">
            <h4 className="font-bold text-white flex items-center gap-2">
              <Compass size={16} className="text-amber-300" /> Etika Lokal
            </h4>
            <p className="text-xs leading-relaxed">
              Tuban dikenal sebagai Kota Wali yang sarat nilai religius. Kenakan pakaian sopan saat mengunjungi kompleks makam dan masjid bersejarah, serta jaga kebersihan di seluruh situs alam.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ItineraryPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f7f5ef] min-h-screen pb-20">
        <header className="bg-[#263b35] text-white pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <p className="eyebrow text-amber-300">Kurasi Rute Perjalanan</p>
            <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight">
              Panduan Itinerary TubanPedia
            </h1>
            <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Dirancang dengan teliti oleh tim TubanPedia agar kamu dapat menikmati esensi sejarah, keindahan pantai, gua purba, dan kuliner khas Tuban tanpa rasa terburu-buru.
            </p>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <ItineraryContent />
        </div>
      </main>
      <Footer />
    </>
  );
}
