"use client";

import { useState } from "react";
import {
  Navigation,
  Share2,
  Check,
  Clock,
  Ticket,
  Compass,
  Sparkles,
  MapPin,
  CheckCircle2,
  Car,
  SunMedium,
} from "lucide-react";
import type { Destination } from "@/types/destination";

export function DestinationInfo({ destination }: { destination: Destination }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${destination.name} — TubanPedia`,
          text: destination.description,
          url,
        });
      } catch {
        // User cancelled share
      }
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${destination.latitude},${destination.longitude}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-8">
      {/* Left/Center Column: Editorial narrative, Highlights, Facilities */}
      <div className="lg:col-span-2 space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="eyebrow text-[#a55d3c]">Ulasan &amp; Dokumen Wisata</span>
            {destination.district && (
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#263b35]/10 text-[#263b35] flex items-center gap-1">
                <MapPin size={11} /> {destination.district}
              </span>
            )}
          </div>
          <h2 className="headline text-2xl sm:text-3xl font-bold text-[#1d211d]">
            Mengenal Lebih Dekat {destination.name}
          </h2>
          <p className="copy text-base sm:text-lg leading-relaxed mt-4 text-[#1d211d]/85">
            {destination.description}
          </p>
        </div>

        {/* Daya Tarik Utama (Highlights) */}
        {destination.highlights && destination.highlights.length > 0 && (
          <div className="space-y-3">
            <h3 className="font-bold text-sm tracking-wide uppercase text-[#1d211d] flex items-center gap-2">
              <Sparkles size={16} className="text-[#a55d3c]" />
              Daya Tarik Utama
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {destination.highlights.map((hl, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white border border-black/5 shadow-xs flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#1d211d]"
                >
                  <CheckCircle2 size={16} className="text-emerald-700 shrink-0" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Fasilitas Pendukung Wisata */}
        {destination.facilities && destination.facilities.length > 0 && (
          <div className="p-6 rounded-2xl bg-white border border-black/10 shadow-xs space-y-4">
            <h3 className="font-bold text-sm tracking-wide uppercase text-[#1d211d]">
              Fasilitas &amp; Kenyamanan Pengunjung
            </h3>
            <div className="flex flex-wrap gap-2">
              {destination.facilities.map((fac, idx) => (
                <span
                  key={idx}
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-[#f4f1e9] text-[#1d211d] border border-[#ded7c8]"
                >
                  ✓ {fac}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Aksesibilitas & Rute Jalan */}
        {destination.accessibility && (
          <div className="p-5 rounded-2xl bg-[#f0eee6] border border-[#ded7c8] flex items-start gap-3">
            <Car size={20} className="text-[#a55d3c] shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs sm:text-sm">
              <p className="font-bold text-[#1d211d]">Aksesibilitas &amp; Kondisi Jalan</p>
              <p className="text-[#1d211d]/75 leading-relaxed">{destination.accessibility}</p>
            </div>
          </div>
        )}
      </div>

      {/* Right Column: Key Details & Quick Actions */}
      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm space-y-5">
          <h3 className="font-bold text-base text-[#1d211d] border-b border-black/10 pb-3">
            Informasi Praktis
          </h3>

          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <Clock size={18} className="text-[#a55d3c] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-black/90">Jam Operasional</p>
                <p className="text-black/60">{destination.openingHours}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Ticket size={18} className="text-[#a55d3c] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-black/90">Tiket Masuk</p>
                <p className="text-black/60">{destination.ticketPrice} per orang</p>
              </div>
            </div>

            {destination.bestTime && (
              <div className="flex items-start gap-3">
                <SunMedium size={18} className="text-[#a55d3c] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-black/90">Waktu Kunjungan Terbaik</p>
                  <p className="text-black/60 text-xs sm:text-sm">{destination.bestTime}</p>
                </div>
              </div>
            )}

            <div className="flex items-start gap-3">
              <Compass size={18} className="text-[#a55d3c] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-black/90">Koordinat Geografis</p>
                <p className="text-black/60 font-mono text-xs">
                  {destination.latitude.toFixed(4)}°, {destination.longitude.toFixed(4)}°
                </p>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-black/10 flex flex-col gap-2.5">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#263b35] hover:bg-[#1d211d] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <Navigation size={15} /> Buka Rute Google Maps
            </a>

            <button
              type="button"
              onClick={handleShare}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-black/15 hover:bg-black/5 text-[#1d211d] text-xs font-bold uppercase tracking-wider transition-colors"
            >
              {copied ? (
                <>
                  <Check size={15} className="text-emerald-600" /> Tautan Tersalin!
                </>
              ) : (
                <>
                  <Share2 size={15} /> Bagikan Destinasi
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
