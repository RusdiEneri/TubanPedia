"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Search, X, MapPin, ArrowRight } from "lucide-react";
import { destinations } from "@/data/destinations";

const links = [
  { href: "/wisata", label: "Destinasi" },
  { href: "/itinerary", label: "Itinerary" },
  { href: "/tentang", label: "Tentang" },
] as const;

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Shortcut Ctrl+K / Cmd+K to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsSearchOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Filter destinations based on search query
  const searchResults = searchQuery.trim()
    ? destinations.filter((dest) => {
        const q = searchQuery.toLowerCase();
        return (
          dest.name.toLowerCase().includes(q) ||
          dest.category.toLowerCase().includes(q) ||
          dest.description.toLowerCase().includes(q)
        );
      })
    : destinations.slice(0, 4);

  return (
    <>
      <header>
        <nav className="site-nav" aria-label="Navigasi utama">
          <Link href="/" className="wordmark flex items-center gap-2 group">
            <span className="font-bold tracking-wider">TUBANPEDIA</span>
            <span className="hidden sm:inline-block text-[0.62rem] font-medium tracking-widest px-2 py-0.5 border border-white/20 rounded-full text-white/70">
              BUMI RONGGOLAWE
            </span>
          </Link>

          {/* Nav links with morph hover indicator */}
          <div className="nav-links relative flex items-center gap-1" onMouseLeave={() => setHoveredLink(null)}>
            {links.map(({ href, label }) => {
              const isHovered = hoveredLink === label;
              return (
                <Link
                  key={label}
                  href={href}
                  onMouseEnter={() => setHoveredLink(label)}
                  className="relative px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase text-white/90 hover:text-white transition-colors"
                >
                  {isHovered && (
                    <motion.span
                      layoutId="navHoverMorph"
                      className="absolute inset-0 bg-white/15 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 28 }}
                    />
                  )}
                  {label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <button
              className="search-button circle-button hover:bg-white/10 transition-colors"
              type="button"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Cari destinasi wisata (Ctrl+K)"
              title="Cari destinasi wisata (Ctrl+K)"
            >
              <Search size={16} />
            </button>

            <Link className="explore-button" href="/wisata">
              Jelajah
            </Link>

            <button
              className="mobile-menu circle-button hover:bg-white/10 transition-colors"
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Search Modal Overlay with Morph Scale Transition */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label="Cari Destinasi TubanPedia"
            className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-md flex items-start justify-center pt-20 px-4"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: -12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: -12 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
              className="w-full max-w-xl bg-[#1d2621] text-white border border-white/15 rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-white/10 flex items-center gap-3">
                <Search size={20} className="text-white/50 shrink-0" />
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari pantai, gua, air terjun, makam ziarah..."
                  className="w-full bg-transparent border-none text-white placeholder-white/40 focus:outline-none text-base font-sans"
                />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="p-1 text-white/50 hover:text-white transition-colors"
                  aria-label="Tutup pencarian"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-3 space-y-1">
                <p className="text-[0.68rem] font-bold tracking-widest text-white/40 uppercase px-3 py-1">
                  {searchQuery.trim() ? `Hasil Pencarian (${searchResults.length})` : "Destinasi Rekomendasi"}
                </p>

                {searchResults.length === 0 ? (
                  <div className="py-8 text-center text-white/60 text-sm">
                    Tidak ditemukan destinasi untuk kata kunci &ldquo;{searchQuery}&rdquo;.
                  </div>
                ) : (
                  searchResults.map((dest) => (
                    <Link
                      key={dest.id}
                      href={`/wisata/${dest.slug}`}
                      onClick={() => setIsSearchOpen(false)}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-white/10 transition-colors group"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium text-white group-hover:text-amber-200 transition-colors">
                            {dest.name}
                          </h4>
                          <span className="text-[0.65rem] uppercase tracking-wider text-white/50 px-2 py-0.5 rounded bg-white/5">
                            {dest.category}
                          </span>
                        </div>
                        <p className="text-xs text-white/60 line-clamp-1 mt-0.5 flex items-center gap-1">
                          <MapPin size={12} className="shrink-0 text-amber-300/80" /> Tuban • Tiket: {dest.ticketPrice}
                        </p>
                      </div>
                      <ArrowRight size={16} className="text-white/40 group-hover:text-white transition-colors group-hover:translate-x-1" />
                    </Link>
                  ))
                )}
              </div>

              <div className="p-3 bg-black/30 border-t border-white/5 text-[0.72rem] text-white/40 flex justify-between">
                <span>Tekan ESC untuk menutup</span>
                <span>{destinations.length} Destinasi terdaftar</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer Navigation with Morph Slide Transition */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 350, damping: 32 }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu navigasi mobile"
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-lg flex flex-col pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-xl font-heading text-white">
              {links.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2 border-b border-white/10 hover:text-amber-200 transition-colors flex justify-between items-center"
                >
                  <span>{label}</span>
                  <ArrowRight size={18} className="text-white/40" />
                </Link>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/15">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsSearchOpen(true);
                }}
                className="w-full py-3 px-4 rounded-xl bg-white/10 text-white text-sm font-medium flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
              >
                <Search size={16} /> Cari Destinasi
              </button>
            </div>

            <div className="mt-auto pb-10 text-center text-xs text-white/50">
              <p className="font-heading tracking-widest text-sm text-white/80">TUBANPEDIA</p>
              <p className="mt-1">Ensiklopedia & Panduan Wisata Bumi Ronggolawe</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
