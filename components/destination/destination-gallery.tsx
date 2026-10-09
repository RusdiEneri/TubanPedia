"use client";

import Image from "next/image";
import { useState } from "react";
import { Maximize2, X, Image as ImageIcon } from "lucide-react";
import type { Destination } from "@/types/destination";

export function DestinationGallery({
  gallery,
  title = "Dokumentasi Visual",
}: {
  gallery: Destination["gallery"];
  title?: string;
}) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  if (!gallery || gallery.length === 0) return null;

  return (
    <section className="my-10" aria-label="Galeri Destinasi">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="eyebrow text-[#a55d3c] flex items-center gap-1.5">
            <ImageIcon size={13} /> Galeri Estetik
          </p>
          <h2 className="headline text-2xl sm:text-3xl font-bold mt-1 text-[#1d211d]">{title}</h2>
        </div>
        <span className="text-xs text-[#1d211d]/60 font-semibold px-2.5 py-1 rounded-full bg-[#ded7c8]/40 border border-[#ded7c8]">
          {gallery.length} Dokumentasi
        </span>
      </div>

      <div
        className={`grid gap-4 ${
          gallery.length >= 3
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1 sm:grid-cols-2"
        }`}
      >
        {gallery.map((imageSrc, index) => (
          <div
            key={index}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-sm border border-black/5 bg-[#cbd5c0]/30"
            onClick={() => setActiveImage(imageSrc)}
          >
            <Image
              src={imageSrc}
              alt={`Dokumentasi foto ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="bg-white/95 text-[#1d211d] px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-md">
                <Maximize2 size={13} /> Perbesar Foto
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[120] bg-black/90 flex items-center justify-center p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            className="absolute top-6 right-6 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
            onClick={() => setActiveImage(null)}
            aria-label="Tutup pratinjau foto"
          >
            <X size={24} />
          </button>
          <div
            className="relative max-w-4xl max-h-[85vh] w-full h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeImage}
              alt="Pratinjau dokumentasi resolusi penuh"
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
