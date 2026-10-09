import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Ticket, MapPin, Compass } from "lucide-react";
import type { Destination } from "@/types/destination";

export function DestinationHero({ destination }: { destination: Destination }) {
  return (
    <section className="destination-hero" aria-labelledby="destination-name">
      <Image
        src={destination.coverImage}
        alt={destination.name}
        fill
        priority
        loading="eager"
        sizes="100vw"
        className="object-cover will-change-transform"
      />
      <div className="destination-hero-content">
        <Link
          href="/wisata"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/80 hover:text-white mb-4 transition-colors"
        >
          <ArrowLeft size={16} /> Kembali ke Semua Destinasi
        </Link>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="bg-[#a55d3c] text-white text-[0.7rem] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            {destination.category}
          </span>
          <span className="bg-black/50 backdrop-blur-sm text-white/90 text-xs px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/20">
            <MapPin size={12} className="text-amber-300" /> {destination.district ? `${destination.district}, Tuban` : "Tuban, Jawa Timur"}
          </span>
        </div>
        <h1 id="destination-name" className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight">
          {destination.name}
        </h1>
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-4 text-xs sm:text-sm text-white/90">
          <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
            <Clock size={15} className="text-amber-300" /> Jam Buka: {destination.openingHours}
          </span>
          <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
            <Ticket size={15} className="text-amber-300" /> Tiket: {destination.ticketPrice}
          </span>
          <span className="hidden sm:flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 font-mono text-xs">
            <Compass size={14} className="text-amber-300" /> {destination.latitude.toFixed(3)}°, {destination.longitude.toFixed(3)}°
          </span>
        </div>
      </div>
    </section>
  );
}
