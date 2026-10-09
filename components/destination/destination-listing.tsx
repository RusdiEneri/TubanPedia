"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Destination } from "@/types/destination";
import { DestinationCard } from "./destination-card";

const filters = ["ALL", "PANTAI", "ALAM", "SEJARAH", "RELIGI", "KULINER"] as const;
type Filter = (typeof filters)[number];

const filterTerms: Record<Exclude<Filter, "ALL">, string[]> = {
  PANTAI: ["pantai"],
  ALAM: ["alam", "goa", "air terjun", "pemandian"],
  SEJARAH: ["sejarah", "bersejarah"],
  RELIGI: ["religi"],
  KULINER: ["kuliner"],
};

function matchesFilter(destination: Destination, filter: Filter) {
  if (filter === "ALL") return true;
  const category = destination.category.toLocaleLowerCase("id-ID");
  return filterTerms[filter].some((term) => category.includes(term));
}

export function DestinationListing({ destinations }: { destinations: Destination[] }) {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<Filter>("ALL");

  const filteredDestinations = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("id-ID");
    return destinations.filter((destination) => {
      const searchable = [destination.name, destination.category, destination.description]
        .join(" ")
        .toLocaleLowerCase("id-ID");
      return (
        matchesFilter(destination, activeFilter) &&
        (!normalizedQuery || searchable.includes(normalizedQuery))
      );
    });
  }, [activeFilter, destinations, query]);

  const clearFilters = () => {
    setQuery("");
    setActiveFilter("ALL");
  };

  return (
    <section className="destination-listing">
      <div className="listing-controls">
        <label className="search-field" htmlFor="search-destinations">
          <Search size={18} aria-hidden="true" />
          <span className="sr-only">Cari destinasi</span>
          <input
            id="search-destinations"
            name="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Cari pantai, gua, air terjun..."
          />
        </label>

        {/* Morphing Filter Tabs */}
        <div className="filter-rail relative flex gap-1 items-center" aria-label="Filter kategori destinasi">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                className={`relative px-3.5 py-2 text-[0.7rem] font-bold tracking-wider uppercase transition-colors rounded-lg z-10 ${
                  isActive ? "text-white" : "text-[#1d211d]/70 hover:text-[#1d211d]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeFilterMorph"
                    className="absolute inset-0 bg-[#263b35] rounded-lg -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span>{filter}</span>
              </button>
            );
          })}
        </div>
      </div>

      <p className="result-count">
        {filteredDestinations.length}{" "}
        {filteredDestinations.length === 1 ? "destinasi ditemukan" : "destinasi ditemukan"}
      </p>

      {/* Morphing Grid Layout */}
      {filteredDestinations.length ? (
        <motion.div layout className="destination-grid">
          <AnimatePresence mode="popLayout">
            {filteredDestinations.map((destination) => (
              <motion.div
                layout
                key={destination.id}
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 15 }}
                transition={{
                  layout: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                  opacity: { duration: 0.25 },
                }}
              >
                <DestinationCard destination={destination} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="empty-state"
        >
          <p className="eyebrow text-[#a55d3c]">Destinasi Tidak Ditemukan</p>
          <p>Coba kata kunci atau kategori filter lainnya.</p>
          <button type="button" className="editorial-link" onClick={clearFilters}>
            Reset Filter
          </button>
        </motion.div>
      )}
    </section>
  );
}
