import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, Ticket } from "lucide-react";
import type { Destination } from "@/types/destination";

interface DestinationCardProps {
  destination: Destination;
  className?: string;
}

export function DestinationCard({ destination, className = "" }: DestinationCardProps) {
  return (
    <article className={`destination-card rounded-2xl overflow-hidden shadow-md group relative ${className}`}>
      <div className="destination-image">
        <Image
          src={destination.coverImage}
          alt={destination.name}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-105"
        />
      </div>

      {/* Ticket Price Badge on top right */}
      <div className="absolute top-4 right-4 z-10">
        <span className="bg-black/60 backdrop-blur-md text-white text-[0.68rem] font-bold px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1 shadow-sm">
          <Ticket size={11} className="text-amber-300" /> {destination.ticketPrice}
        </span>
      </div>

      <div className="destination-content p-6 flex flex-col justify-end">
        <p className="eyebrow text-amber-200/90 font-bold tracking-widest text-[0.68rem] uppercase">
          {destination.category}
        </p>
        <h3 className="font-heading text-white font-bold text-2xl group-hover:text-amber-100 transition-colors">
          {destination.name}
        </h3>
        <p className="destination-description text-white/80 text-xs sm:text-sm line-clamp-2 mt-2">
          {destination.description}
        </p>

        <div className="flex items-center justify-between pt-4 mt-3 border-t border-white/15">
          <p className="location-indicator text-[0.72rem] text-white/80 flex items-center gap-1 font-medium">
            <MapPin size={13} className="text-amber-300 shrink-0" aria-hidden="true" />
            <span>{destination.district || "Tuban, Jawa Timur"}</span>
          </p>
          <Link
            className="editorial-link text-white hover:text-amber-200 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1 transition-colors"
            href={`/wisata/${destination.slug}`}
          >
            Lihat Detail <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}
