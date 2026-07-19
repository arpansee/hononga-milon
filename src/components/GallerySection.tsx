import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function GallerySection() {
  return (
    <Reveal className="mx-auto max-w-5xl px-6 py-10 sm:px-10 lg:px-16">
      <div className="grid gap-6 sm:grid-cols-3">
        <GalleryCard caption="Shared plates, shared stories">
          <circle cx="100" cy="100" r="92" fill="none" stroke="var(--color-line)" strokeWidth={4} />
          <circle cx="100" cy="100" r="70" fill="none" stroke="var(--color-terracotta)" strokeWidth={2} />
          <motion.path
            d="M85,60 C 75,45 95,35 85,20 M100,60 C 90,45 110,35 100,20 M115,60 C 105,45 125,35 115,20"
            fill="none"
            stroke="var(--color-gold)"
            strokeWidth={2}
            strokeLinecap="round"
            animate={{ y: [4, -4, 4], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </GalleryCard>

        <GalleryCard caption="A journey across cuisines">
          <motion.path
            d="M20,150 Q 60,40 100,100 T 180,50"
            fill="none"
            stroke="var(--color-gold)"
            strokeWidth={2}
            strokeDasharray="6 8"
            animate={{ strokeDashoffset: [0, -140] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
          {[
            [20, 150],
            [100, 100],
            [180, 50],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={5} fill="var(--color-maroon)" />
          ))}
        </GalleryCard>

        <GalleryCard caption="50 seats, one long table">
          <line x1="20" y1="100" x2="180" y2="100" stroke="var(--color-line)" strokeWidth={3} />
          {[40, 80, 120, 160].map((cx, i) => (
            <motion.circle
              key={cx}
              cx={cx}
              cy={100}
              r={8}
              fill="var(--color-terracotta)"
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
              animate={{ scale: [1, 1.25, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
            />
          ))}
        </GalleryCard>
      </div>
    </Reveal>
  );
}

function GalleryCard({ caption, children }: { caption: string; children: React.ReactNode }) {
  return (
    <figure className="m-0 rounded-2xl border border-line bg-white p-6 text-center">
      <svg viewBox="0 0 200 200" className="mx-auto h-40 w-full" aria-hidden="true">
        {children}
      </svg>
      <figcaption className="mt-4 text-sm text-muted">{caption}</figcaption>
    </figure>
  );
}
