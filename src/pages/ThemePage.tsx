import { Link } from "react-router-dom";
import SiteNav from "../components/SiteNav";
import Reveal from "../components/Reveal";
import AlexanderRouteMap from "../components/AlexanderRouteMap";
import MenuTeaser from "../components/MenuTeaser";
import Footer from "../components/Footer";

export default function ThemePage() {
  return (
    <>
      <SiteNav />

      <main className="mx-auto max-w-5xl px-6 pt-4 pb-20 sm:px-10 lg:px-16">
        <Reveal>
          <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-terracotta uppercase">
            This Year's Theme
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">Taste History: Alexander's Route</h1>
          <p className="mt-4 max-w-2xl text-muted">
            In 334 BCE, a young Macedonian king led his army east and never really stopped. Over
            the next decade Alexander the Great's campaign carried Greek olive oil and wine into
            Persian courts of saffron and rice, through Egyptian markets of bread and legume, and
            on to the spice-laden kitchens of the Punjab. Empires rose and fell in his wake, but so
            did something quieter and more lasting: the slow blending of tables.
          </p>
          <p className="mt-4 max-w-2xl text-muted">
            This year's dinner follows that same route, course by course &mdash; a meal shaped by
            conquest, trade, and the cuisines that met somewhere in between.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <AlexanderRouteMap />
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <MenuTeaser />
        </Reveal>

        <Reveal delay={0.15} className="mt-12 text-center">
          <Link
            to="/#rsvp"
            className="inline-block rounded-full bg-maroon px-8 py-3.5 font-semibold text-white shadow-lg shadow-maroon/30 transition-all hover:-translate-y-0.5 hover:bg-terracotta"
          >
            RSVP by 15 August
          </Link>
        </Reveal>
      </main>

      <Footer />
    </>
  );
}
