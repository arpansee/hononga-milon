import { motion } from "framer-motion";
import ConnectionCanvas from "./ConnectionCanvas";
import SiteNav from "./SiteNav";

export default function Hero() {
  return (
    <header className="relative flex min-h-screen flex-col overflow-hidden px-6 py-8 sm:px-10 lg:px-16">
      <ConnectionCanvas />

      <div className="absolute inset-x-0 top-0">
        <SiteNav />
      </div>

      <motion.div
        className="relative z-10 my-auto max-w-2xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-terracotta uppercase">
          A Charity Dinner &middot; Wellington, Aotearoa
        </p>
        <h1 className="text-6xl leading-none font-bold sm:text-7xl lg:text-8xl">
          Hononga
          <br />
          Milon
        </h1>
        <p className="mt-6 max-w-md text-lg text-muted sm:text-xl">
          Connection meets union. A table where two worlds sit down as one.
        </p>

        <div className="mt-8 flex flex-wrap gap-8">
          <Fact label="Date" value="Sat, 12 Sep 2026" />
          <Fact label="Time" value="6:00 pm" />
          <Fact label="Venue" value="Karori Baptist Church" />
        </div>

        <a
          href="#rsvp"
          className="mt-10 inline-block rounded-full bg-maroon px-8 py-3.5 font-semibold text-white shadow-lg shadow-maroon/30 transition-all hover:-translate-y-0.5 hover:bg-terracotta"
        >
          RSVP closed
        </a>
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.span
          className="block h-12 w-px bg-gradient-to-b from-terracotta to-transparent"
          animate={{ scaleY: [0.2, 1, 0.2], opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </header>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-xs tracking-[0.12em] text-muted uppercase">{label}</span>
      <span className="text-lg font-semibold text-ink">{value}</span>
    </div>
  );
}
