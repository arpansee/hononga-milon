import Reveal from "./Reveal";

const rsvpSubject = encodeURIComponent("RSVP - Hononga Milon Charity Dinner 2026");
const rsvpBody = encodeURIComponent(
  [
    "Kia ora Hononga Milon team,",
    "",
    "I'd like to RSVP for the 2026 charity dinner.",
    "",
    "Name:",
    "Number of seats:",
    "Phone number:",
    "Any notes:",
    "",
    "Thanks!",
  ].join("\n"),
);

export default function RsvpSection() {
  return (
    <section id="rsvp" className="mx-auto max-w-4xl px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <Reveal
        className="rounded-3xl bg-gradient-to-br from-maroon to-terracotta p-8 text-center text-white sm:p-14"
      >
        <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-[#ffe3c9] uppercase">
          RSVP &amp; Support
        </p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          RSVP registrations are now closed
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/90">
          Thank you for your support. Registration for the dinner is now closed, and our seats
          have been allocated.
        </p>

        <div className="mx-auto my-6 inline-flex flex-col gap-1 rounded-2xl border border-white/35 bg-white/10 px-8 py-4">
          <span className="text-xs tracking-[0.1em] text-white/85 uppercase">Hononga Milon</span>
          <span className="text-xl font-bold tracking-wide">06-0513-0897781-00</span>
        </div>

        <p className="mx-auto max-w-xl text-white/90">
          Can't make it on the night but still want to support the charity? You're welcome to
          transfer to the account above.
        </p>

        <a
          href={`mailto:honongamilon@gmail.com?subject=${rsvpSubject}&body=${rsvpBody}`}
          className="mt-6 inline-block rounded-full border-2 border-white px-8 py-3.5 font-semibold text-white transition-colors hover:bg-white hover:text-maroon"
        >
          Contact us with enquiries
        </a>
      </Reveal>
    </section>
  );
}
