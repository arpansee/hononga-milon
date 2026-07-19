import { motion } from "framer-motion";

const stops = [
  { x: 40, y: 170, label: "Pella, Macedon", note: "The journey begins" },
  { x: 140, y: 60, label: "Tyre", note: "A seven-month siege" },
  { x: 250, y: 190, label: "Alexandria, Egypt", note: "A city founded" },
  { x: 380, y: 80, label: "Persepolis, Persia", note: "Heart of an empire" },
  { x: 510, y: 150, label: "Samarkand, Sogdiana", note: "Into Central Asia" },
  { x: 620, y: 60, label: "Punjab, India", note: "The furthest reach" },
];

const pathD = stops
  .map((s, i) => `${i === 0 ? "M" : "L"}${s.x},${s.y}`)
  .join(" ");

/** An animated stylised route tracing Alexander the Great's campaign east. */
export default function AlexanderRouteMap() {
  return (
    <div className="rounded-3xl border border-line bg-white p-6 sm:p-10">
      <svg viewBox="0 0 660 240" className="w-full" role="img" aria-label="Map of Alexander the Great's route from Macedon to Punjab">
        <motion.path
          d={pathD}
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeDasharray="8 6"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
        />

        {stops.map((s, i) => (
          <g key={s.label}>
            <motion.circle
              cx={s.x}
              cy={s.y}
              r={7}
              fill="var(--color-maroon)"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.3 + 0.3 }}
            />
            <motion.text
              x={s.x}
              y={s.y - 16}
              textAnchor="middle"
              className="font-sans text-[11px] font-semibold"
              fill="var(--color-ink)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.3 + 0.4 }}
            >
              {s.label}
            </motion.text>
          </g>
        ))}
      </svg>

      <ol className="mt-4 grid gap-3 text-sm text-muted sm:grid-cols-3">
        {stops.map((s) => (
          <li key={s.label}>
            <span className="font-semibold text-ink">{s.label}</span> &mdash; {s.note}
          </li>
        ))}
      </ol>
    </div>
  );
}
