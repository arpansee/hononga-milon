import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

/** Short teaser shown on the home page, linking through to the full theme page. */
export default function ThemeTeaser() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-4 sm:px-10 lg:px-16">
      <Reveal className="rounded-3xl border border-line bg-white p-8 sm:p-14">
        <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-terracotta uppercase">
          This Year's Theme
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl">Taste History: Alexander's Route</h2>
        <p className="mt-4 max-w-2xl text-muted">
          This year we follow Alexander the Great's campaign east &mdash; from Macedon to the
          Punjab &mdash; and the cuisines his journey touched along the way. The full menu stays
          under wraps until the night itself.
        </p>

        <svg viewBox="0 0 600 100" preserveAspectRatio="none" className="mt-6 h-20 w-full" aria-hidden="true">
          <motion.path
            d="M10,80 C 120,10 180,90 260,50 S 420,10 500,60 S 560,30 590,15"
            fill="none"
            stroke="var(--color-gold)"
            strokeWidth={2}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
          {[
            [10, 80],
            [260, 50],
            [500, 60],
            [590, 15],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={5} fill="var(--color-maroon)" />
          ))}
        </svg>

        <Link
          to="/theme"
          className="mt-6 inline-flex items-center gap-2 font-semibold text-maroon transition-colors hover:text-terracotta"
        >
          Explore Alexander's route
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </Reveal>
    </section>
  );
}
