"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Navigation, ArrowUpRight, Compass } from "lucide-react";
import { destinations } from "@/data/destinations";

// Key curated spots on the interactive illustrated map
const mapSpots = [
  { id: "pantai-boom", x: 62, y: 22, name: "Pantai Boom", tag: "Pusat Pesisir" },
  { id: "pantai-kelapa", x: 74, y: 24, name: "Pantai Kelapa", tag: "Pesisir Timur" },
  { id: "pantai-pasir-putih-remen", x: 42, y: 15, name: "Pantai Remen", tag: "Pesisir Barat" },
  { id: "klenteng-kwan-sing-bio", x: 55, y: 26, name: "Kwan Sing Bio", tag: "Pesisir Barat" },
  { id: "makam-sunan-bonang", x: 60, y: 35, name: "Sunan Bonang", tag: "Pusat Kota" },
  { id: "goa-akbar", x: 58, y: 44, name: "Goa Akbar", tag: "Pusat Kota" },
  { id: "pemandian-bektiharjo", x: 63, y: 55, name: "Bektiharjo", tag: "Mata Air" },
  { id: "air-terjun-nglirip", x: 26, y: 72, name: "Air Terjun Nglirip", tag: "Karst Singgahan" },
  { id: "goa-putri-asih", x: 38, y: 65, name: "Goa Putri Asih", tag: "Karst Montong" },
  { id: "wisata-kebun-sagu-pelang", x: 48, y: 80, name: "Kebun Sagu Pelang", tag: "Agrowisata" },
];

export function TubanMap() {
  const [selectedSpotId, setSelectedSpotId] = useState<string>("pantai-boom");

  const selectedDestination = destinations.find((d) => d.id === selectedSpotId) || destinations[0];

  return (
    <div className="flex flex-col rounded-2xl overflow-hidden border border-black/10 bg-[#e7ebe3] shadow-md">
      {/* Map visual canvas */}
      <div
        className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#cbd5c0] overflow-hidden select-none"
        aria-label="Peta Interaktif Destinasi Tuban"
      >
        {/* Coastal sea background graphic */}
        <div className="absolute inset-x-0 top-0 h-[28%] bg-[#8baab3]/40 border-b border-[#5c828e]/30 flex items-center justify-center">
          <span className="text-[0.65rem] tracking-[0.25em] uppercase font-bold text-[#355b68]/70 flex items-center gap-1.5">
            <Compass size={13} /> LAUT JAWA (PESISIR UTARA TUBAN)
          </span>
        </div>

        {/* Contour and land terrain pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#9cae92_1px,transparent_1px)] [background-size:18px_18px] opacity-60" />

        {/* Road and connection network illustration */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 42 15 Q 55 24 62 22 T 74 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3"
            strokeDasharray="4 4"
            className="opacity-70"
          />
          <path
            d="M 60 22 L 60 35 L 58 44 L 63 55"
            fill="none"
            stroke="#a55d3c"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="opacity-60"
          />
          <path
            d="M 58 44 Q 40 55 26 72"
            fill="none"
            stroke="#55705e"
            strokeWidth="2"
            strokeDasharray="3 3"
            className="opacity-60"
          />
        </svg>

        {/* Markers on map with morphing halo */}
        {mapSpots.map((spot) => {
          const isSelected = spot.id === selectedSpotId;
          return (
            <button
              key={spot.id}
              type="button"
              onClick={() => setSelectedSpotId(spot.id)}
              style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 group z-10 transition-transform ${
                isSelected ? "scale-125 z-20" : "hover:scale-110"
              }`}
              aria-label={`Pilih titik ${spot.name}`}
            >
              {isSelected && (
                <motion.span
                  layoutId="activeMapPinMorph"
                  className="absolute -inset-1.5 rounded-full border-2 border-[#a55d3c] bg-[#a55d3c]/25 pointer-events-none"
                  transition={{ type: "spring", stiffness: 360, damping: 25 }}
                />
              )}

              <span
                className={`flex items-center justify-center rounded-full transition-colors ${
                  isSelected
                    ? "w-7 h-7 bg-[#a55d3c] text-white shadow-lg"
                    : "w-5 h-5 bg-[#263b35] text-white/90 group-hover:bg-[#a55d3c]"
                }`}
              >
                <MapPin size={isSelected ? 14 : 11} />
              </span>
              <span
                className={`hidden md:block absolute top-full left-1/2 -translate-x-1/2 mt-1 whitespace-nowrap text-[0.62rem] font-bold px-1.5 py-0.5 rounded shadow-sm transition-colors ${
                  isSelected
                    ? "bg-[#1d211d] text-white"
                    : "bg-white/90 text-[#1d211d] group-hover:bg-[#1d211d] group-hover:text-white"
                }`}
              >
                {spot.name}
              </span>
            </button>
          );
        })}

        {/* Map Legend badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md shadow-sm border border-black/5 text-[0.65rem] font-medium text-[#263b35]">
          Klik titik pin untuk detail lokasi
        </div>
      </div>

      {/* Selected Destination Card Drawer with smooth Morph Transition */}
      <div className="p-4 sm:p-5 bg-white border-t border-black/10 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDestination.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="space-y-1 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="text-[0.65rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#263b35]/10 text-[#263b35]">
                  {selectedDestination.category}
                </span>
                <span className="text-xs text-[#1d211d]/60">
                  Tiket: {selectedDestination.ticketPrice} • Jam: {selectedDestination.openingHours}
                </span>
              </div>
              <h4 className="text-lg font-bold text-[#1d211d]">{selectedDestination.name}</h4>
              <p className="text-xs text-[#1d211d]/75 line-clamp-2">{selectedDestination.description}</p>
            </div>

            <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${selectedDestination.latitude},${selectedDestination.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg border border-[#1d211d]/20 text-[#1d211d] hover:bg-black/5 transition-colors"
              >
                <Navigation size={13} /> Rute Maps
              </a>
              <Link
                href={`/wisata/${selectedDestination.slug}`}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-[#263b35] text-white hover:bg-[#1d211d] transition-colors"
              >
                Buka Halaman <ArrowUpRight size={13} />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
