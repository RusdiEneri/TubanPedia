import Link from "next/link";

const groups = [
  [
    "Eksplorasi",
    [
      ["/wisata", "Semua Destinasi"],
      ["/wisata?filter=PANTAI", "Wisata Pantai"],
      ["/wisata?filter=ALAM", "Goa & Alam"],
      ["/itinerary", "Rencana Perjalanan"],
    ],
  ],
  [
    "TubanPedia",
    [
      ["/tentang", "Tentang Kami"],
      ["/tentang#sejarah", "Sejarah Ronggolawe"],
      ["/tentang#panduan", "Panduan Transportasi"],
    ],
  ],
  [
    "Komunitas",
    [
      ["https://github.com/RusdiEneri/TubanPedia", "GitHub Repository"],
      ["mailto:halo@tubanpedia.id", "Kontak Redaksi"],
    ],
  ],
] as const;

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <p className="wordmark">TUBANPEDIA</p>
          <p>
            Ensiklopedia digital terbuka dan panduan kurasi perjalanan menjelajahi sejarah, keajaiban geologi karst, dan pesisir utara Bumi Ronggolawe, Tuban, Jawa Timur.
          </p>
        </div>
        {groups.map(([title, links]) => (
          <section className="footer-links" key={title}>
            <h2>{title}</h2>
            {links.map(([href, label]) => (
              <Link key={label} href={href}>
                {label}
              </Link>
            ))}
          </section>
        ))}
      </div>
      <p className="footer-bottom">
        © 2026 TUBANPEDIA — Ensiklopedia Pariwisata Tuban. Dibuat dengan dedikasi untuk kelestarian sejarah & pariwisata daerah.
      </p>
    </footer>
  );
}
