import SiteNav from "../components/SiteNav";
import Reveal from "../components/Reveal";
import Footer from "../components/Footer";

type HistoricalEvent = {
  year: string;
  date: string;
  title: string;
  venue: string;
  city: string;
  eventUrl: string;
  coverImage: string;
  gallery: string[];
};

// Sourced from Hononga Milon's Facebook Events and Photos sections.
const events: HistoricalEvent[] = [
  {
    year: "2024",
    date: "Sat, 7 Sep 2024",
    title: "Hononga Milon charity dinner",
    venue: "Karori Baptist Church",
    city: "Wellington",
    eventUrl: "https://www.facebook.com/events/416808321302879/",
    coverImage: "/history/event-2024.jpg",
    gallery: ["/history/gallery-01.jpg", "/history/gallery-02.jpg"],
  },
  {
    year: "2023",
    date: "Sat, 9 Sep 2023",
    title: "Charity Dinner",
    venue: "Karori Baptist Church",
    city: "Wellington",
    eventUrl: "https://www.facebook.com/events/810886394028070/",
    coverImage: "/history/event-2023.jpg",
    gallery: ["/history/gallery-03.jpg"],
  },
  {
    year: "2022",
    date: "Sat, 24 Sep 2022",
    title: "A Seven-Course Sit Down Charity Dinner",
    venue: "301 Karori Rd, Karori, Wellington 6012, New Zealand",
    city: "Wellington",
    eventUrl: "https://www.facebook.com/events/802959477729792/",
    coverImage: "/history/event-2022.jpg",
    gallery: ["/history/gallery-04.jpg"],
  },
];

export default function HistoricalEventsPage() {
  return (
    <>
      <SiteNav />

      <main className="mx-auto max-w-5xl px-6 pt-4 pb-20 sm:px-10 lg:px-16">
        <Reveal>
          <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-terracotta uppercase">
            Historical Events
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">Past Charity Dinners</h1>
          <p className="mt-4 max-w-2xl text-muted">
            A look back at recent Hononga Milon dinners, sourced from the Facebook Events and
            Photos sections.
          </p>
        </Reveal>

        <section className="mt-10 space-y-12">
          {events.map((event, index) => (
            <Reveal key={event.eventUrl} delay={index * 0.05} className="rounded-3xl border border-line bg-white p-6 sm:p-8">
              <div className="grid gap-6 md:grid-cols-[220px_1fr]">
                <img
                  src={event.coverImage}
                  alt={`${event.title} cover from Facebook`}
                  className="h-44 w-full rounded-2xl object-cover md:h-full"
                  loading="lazy"
                />

                <div>
                  <p className="text-xs font-semibold tracking-[0.14em] text-terracotta uppercase">
                    {event.year}
                  </p>
                  <h2 className="mt-1 text-2xl font-bold">{event.title}</h2>
                  <p className="mt-2 text-sm text-muted">{event.date}</p>
                  <p className="text-sm text-muted">
                    {event.venue} &middot; {event.city}
                  </p>
                  <a
                    href={event.eventUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-sm font-semibold text-maroon transition-colors hover:text-terracotta"
                  >
                    View event on Facebook &rarr;
                  </a>

                  <div className="mt-6">
                    <p className="mb-3 text-xs font-semibold tracking-[0.12em] text-gold uppercase">
                      Gallery from Facebook Photos
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {event.gallery.map((image, imageIndex) => (
                        <img
                          key={image}
                          src={image}
                          alt={`${event.title} gallery image ${imageIndex + 1}`}
                          className="h-40 w-full rounded-xl object-cover"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
