import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const categories = [
  [
    "Pantai",
    "Pesisir Pasir & Ombak",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=85",
  ],
  [
    "Alam",
    "Gua Karst & Tirta",
    "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=700&q=85",
  ],
  [
    "Sejarah",
    "Jejak Majapahit",
    "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=700&q=85",
  ],
  [
    "Religi",
    "Cagar Budaya Wali",
    "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=700&q=85",
  ],
  [
    "Kuliner",
    "Rajungan & Legen",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=85",
  ],
] as const;

export function Categories() {
  return (
    <section className="page-section categories-section" aria-labelledby="categories-title">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="eyebrow text-[#a55d3c]">Kategori Pilihan</p>
          <h2 id="categories-title" className="headline mt-2 text-[#1d211d]">
            Jelajah Berdasarkan Minat
          </h2>
        </div>
        <Link
          href="/wisata"
          className="editorial-link hidden sm:inline-flex text-xs font-bold uppercase tracking-wider text-[#263b35] hover:text-[#a55d3c]"
        >
          Lihat Semua <ArrowUpRight size={15} />
        </Link>
      </div>

      <div className="category-rail">
        {categories.map(([title, subtitle, image]) => (
          <Link
            href="/wisata"
            className="category-card group block cursor-pointer"
            key={title}
          >
            <div className="category-image">
              <Image src={image} alt={title} fill sizes="210px" />
            </div>
            <h3 className="group-hover:text-[#a55d3c] transition-colors">{title}</h3>
            <p className="text-[#1d211d]/70 text-xs mt-1">{subtitle}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
