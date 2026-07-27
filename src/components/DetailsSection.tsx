import Reveal from "./Reveal";

export default function DetailsSection() {
  return (
    <section id="details" className="mx-auto max-w-5xl px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <Reveal>
        <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-terracotta uppercase">
          Details
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl">What you need to know</h2>
      </Reveal>

      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        <Reveal delay={0.05} className="rounded-2xl border border-line bg-white p-7">
          <h3 className="mb-2 text-lg font-bold text-terracotta">When &amp; Where</h3>
          <p className="text-muted">Saturday, 12 September 2026 &middot; 6:00 pm</p>
          <p className="text-muted">
            Karori Baptist Church
            <br />
            161/163 Karori Road, Karori, Wellington 6012
          </p>
        </Reveal>

        <Reveal delay={0.1} className="rounded-2xl border border-line bg-white p-7">
          <h3 className="mb-2 text-lg font-bold text-terracotta">Ticket</h3>
          <p className="font-display text-4xl font-bold text-maroon">$60</p>
          <p className="text-muted">Cap of 50 seats &mdash; booked on a first-come basis.</p>
        </Reveal>

        <Reveal delay={0.15} className="rounded-2xl border border-line bg-white p-7">
          <h3 className="mb-2 text-lg font-bold text-terracotta">Please Note</h3>
          <p className="text-muted">
            We're unable to cater to special dietary requirements, including vegan.
          </p>
          <p className="text-muted">This is an alcohol-free event.</p>
        </Reveal>
      </div>
    </section>
  );
}
