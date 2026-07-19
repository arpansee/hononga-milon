import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function MeaningSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <Reveal>
        <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-terracotta uppercase">
          The Name
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl">Two words, one table</h2>
      </Reveal>

      <div className="my-10 grid items-center gap-8 sm:grid-cols-[1fr_auto_1fr]">
        <Reveal className="rounded-2xl border border-line bg-white p-8">
          <span className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">
            Te Reo Māori
          </span>
          <h3 className="mt-1 mb-3 text-2xl font-bold">Hononga</h3>
          <p className="text-muted">
            Connection, relationship, bond, union. A word that stretches from whakapapa and
            family ties to business partnerships and even the click of an electrical plug &mdash;
            any link between two things that now move as one.
          </p>
        </Reveal>

        <Joiner />

        <Reveal delay={0.15} className="rounded-2xl border border-line bg-white p-8">
          <span className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">
            Bengali
          </span>
          <h3 className="mt-1 mb-3 text-2xl font-bold">Milon</h3>
          <p className="text-muted">
            A meeting, a union, a joyful coming together. The organisers behind this charity call
            West Bengal home &mdash; and every September, that meaning travels across the world to
            a dinner table in Wellington.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <p className="font-display text-center text-xl italic">
          Hononga Milon: a connection made whole &mdash; Aotearoa and Bengal, strangers and
          friends, one long table.
        </p>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-muted">
          Our mission: to invigorate the spirit of{" "}
          <span className="font-semibold text-terracotta">kotahitanga</span> &mdash; unity and
          togetherness &mdash; in an increasingly diverse New Zealand.
        </p>
      </Reveal>
    </section>
  );
}

function Joiner() {
  return (
    <div className="mx-auto w-24 rotate-90 sm:rotate-0">
      <svg viewBox="0 0 120 40" className="w-full overflow-visible">
        <motion.path
          d="M2,20 C 30,2 90,38 118,20"
          fill="none"
          stroke="var(--color-terracotta)"
          strokeWidth={2}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
        <circle cx="2" cy="20" r="4" fill="var(--color-maroon)" />
        <circle cx="118" cy="20" r="4" fill="var(--color-maroon)" />
      </svg>
    </div>
  );
}
