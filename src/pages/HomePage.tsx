import Hero from "../components/Hero";
import MeaningSection from "../components/MeaningSection";
import ThemeTeaser from "../components/ThemeTeaser";
import CharitySection from "../components/CharitySection";
import GallerySection from "../components/GallerySection";
import DetailsSection from "../components/DetailsSection";
import RsvpSection from "../components/RsvpSection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <main>
        <MeaningSection />
        <ThemeTeaser />
        <CharitySection />
        <GallerySection />
        <DetailsSection />
        <RsvpSection />
      </main>
      <Footer />
    </>
  );
}
