import Reveal from "./Reveal";

export default function CharitySection() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-28">
      <Reveal>
        <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-terracotta uppercase">
          This Year's Charity
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl">Breast Cancer Foundation NZ</h2>
        <p className="mt-4 text-muted">
          Every ticket and every donation goes toward the enormous support this foundation
          provides &mdash; increasing education and awareness around a disease that affects so
          many New Zealanders every year.
        </p>
      </Reveal>
    </section>
  );
}
