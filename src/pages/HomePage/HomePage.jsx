import { HeroSection } from "../../components/HeroSection";
import { Specials } from "../../components/Specials";
import { Chicago } from "../../components/Chicago";
import { Testimonials } from "../../components/Testimonials";
import { Footer } from "../../components/Footer";

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <main>
        <Specials />
        <Testimonials />
        <Chicago />
      </main>
      <Footer />
    </>
  );
};
