import { motion } from "framer-motion";
import Reveal from "./Reveal";

const courses = ["Starter", "Main", "Dessert"];

/** A locked placeholder for the menu, to be revealed on the night of the event. */
export default function MenuTeaser() {
  return (
    <Reveal className="rounded-3xl bg-gradient-to-br from-maroon to-terracotta p-8 text-center text-white sm:p-14">
      <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-[#ffe3c9] uppercase">
        The Menu
      </p>
      <h2 className="text-3xl font-bold text-white sm:text-4xl">Unveiled on the night</h2>
      <p className="mx-auto mt-4 max-w-xl text-white/90">
        Each course will trace a stop along Alexander's route &mdash; from Macedon to the Punjab.
        The full menu stays a secret until 12 September.
      </p>

      <div className="mx-auto mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
        {courses.map((course, i) => (
          <div
            key={course}
            className="rounded-2xl border border-white/30 bg-white/10 px-5 py-6"
          >
            <span className="text-xs tracking-[0.1em] text-white/80 uppercase">{course}</span>
            <motion.div
              className="mx-auto mt-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/50"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
            >
              <LockIcon />
            </motion.div>
            <p className="mt-3 font-display text-lg italic text-white/90">???</p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}
